// scripts/audit-container-behaviors.cjs
//
// One-off codemod that converts every spec-level container declaration in the
// built-in layout files to an auto-height responsive behavior:
//
//   scaleProportionally (spx width + spx height) → wrap     (spx width + auto height)
//   stretch             (pct width + pct height) → cellFit  (pct width + auto height)
//
// `fixed`, `fixedHeight`, `relativeWidth` are left untouched — there is no
// matching fixed-width + auto-height behavior in RESPONSIVE_BEHAVIORS, and the
// runtime container hug-rule already drives their heights from content.
//
// Run with:  node scripts/audit-container-behaviors.cjs
// Idempotent: running twice changes nothing.

const fs = require('fs');
const path = require('path');

const files = [
  'src/builtinLayouts.js',
  'src/builtinLayoutsReference.js'
];

const RULES = [
  { from: 'scaleProportionally', to: 'wrap' },
  { from: 'stretch',             to: 'cellFit' }
];

let totalChanged = 0;
const perLayout = {};

for (const f of files) {
  const fp = path.resolve(process.cwd(), f);
  const text = fs.readFileSync(fp, 'utf8');
  const lines = text.split('\n');
  let currentLayout = '?';
  let changedInFile = 0;

  for (let i = 0; i < lines.length; i++) {
    const ln = lines[i];
    const nm = ln.match(/name:\s*['"]([^'"]+)['"]/);
    if (nm) currentLayout = nm[1];

    if (!/archetype:\s*['"]container['"]/.test(ln)) continue;

    for (const r of RULES) {
      const re = new RegExp("behavior:\\s*['\"]" + r.from + "['\"]");
      if (re.test(ln)) {
        lines[i] = ln.replace(re, "behavior: '" + r.to + "'");
        perLayout[currentLayout] = (perLayout[currentLayout] || 0) + 1;
        changedInFile++;
        totalChanged++;
        break;
      }
    }
  }

  fs.writeFileSync(fp, lines.join('\n'));
  console.log(f + ': ' + changedInFile + ' container behaviors converted');
}

console.log('\nTOTAL converted: ' + totalChanged);
console.log('\nPer layout (top 25):');
const sorted = Object.entries(perLayout).sort((a, b) => b[1] - a[1]).slice(0, 25);
for (const [n, c] of sorted) console.log('  ' + c + '  ' + n);
