// scripts/migrate-cellfit-to-wrap.cjs
//
// One-off codemod that removes the deprecated `cellFit` responsive
// behavior. `cellFit` was unique in the registry for being the only
// `widthUnit: 'pct' + heightUnit: 'auto'` package; we're collapsing it
// into `wrap` (`widthUnit: 'spx' + heightUnit: 'auto'`) which preserves
// the content-height intent and gains canvas-aware width scaling.
//
// Run with:  node scripts/migrate-cellfit-to-wrap.cjs
// Idempotent: running twice changes nothing.

const fs = require('fs');
const path = require('path');

const files = [
  'src/builtinLayouts.js',
  'src/builtinLayoutsReference.js'
];

const FROM = 'cellFit';
const TO = 'wrap';

let totalChanged = 0;

for (const f of files) {
  const fp = path.resolve(process.cwd(), f);
  if (!fs.existsSync(fp)) {
    console.log(f + ': skipped (not found)');
    continue;
  }
  const text = fs.readFileSync(fp, 'utf8');
  const re = new RegExp("behavior:\\s*['\"]" + FROM + "['\"]", 'g');
  const next = text.replace(re, "behavior: '" + TO + "'");
  const matches = text.match(re) || [];
  fs.writeFileSync(fp, next);
  console.log(f + ': ' + matches.length + ' cellFit references converted to ' + TO);
  totalChanged += matches.length;
}

console.log('\nTOTAL converted: ' + totalChanged);
