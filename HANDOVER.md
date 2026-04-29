# HANDOVER — V13 Components → V14 Layouts → Responsive Mesh Playground

This document explains how the three pieces of the system fit together so anyone (or any LLM session) can pick up the workflow and start producing test layouts immediately.

---

## 1. The two prompts and what they each produce

| Prompt | Output | Where it runs |
|--------|--------|---------------|
| **V13** — `Instructions.md` | A self-contained **React component** (`MANIFEST` + `function Component({ config = {} })`), all styles inline, fully configurable. | The **Wix Component Studio** playground (`wix-component-studio-main (1).zip`). Each generated component is dropped in there for visual + interaction testing. |
| **V14** — `V14-LAYOUT-PROMPT.md` (NEW) | A **layout spec object** (`const LAYOUT = { meta, sections: [...] }`) describing a full desktop page in px-at-refWidth coordinates. | The **Responsive Mesh** playground (this repo, `src/Component.jsx`). Each layout is pasted into the new "Import Layout" modal and rendered as a stack of sections + children. |

V13 tests **components in isolation**. V14 tests **how page layouts behave under viewport resize** with the Mesh-vs-No-Mesh anchoring strategy. They are complementary, not redundant.

---

## 2. What was added to the Responsive Mesh playground

The playground now has a paste-and-import flow:

- **TopBar button: "Import Layout"** (between *Show Gridlines* and *Reset*)
- **Modal** with a code-style textarea, dark-button "Apply Layout", and inline error display
- **Bulk paste** — drop *any number* of `const LAYOUT_n = { ... };` declarations in one go. The modal parses every block, applies the first one to the canvas, and shows the rest as a clickable tile grid (numbered, with name + category). Click a tile to swap the canvas to that layout. "Re-parse" picks up edits to the textarea; "Done" closes.
- **Hardcoded library** — `src/builtinLayouts.js` exports a `BUILTIN_LAYOUTS` array containing every layout we've shipped (10 seed examples + each delivered batch, currently 35). On first mount the playground pre-populates `layoutLibrary` from this file, so the full set is one click away without re-pasting. To ship a new batch: append `const LAYOUT_NNN = { ... };` declarations to `builtinLayouts.js` and add the names to the `BUILTIN_LAYOUTS` array. Names are short and descriptive (e.g. "Cosmic Scroll", "Pricing Triplet") — no internal IDs.
- **Library Panel + thumbnails** — the TopBar's **`Library (N)`** button opens a modal grid where every layout is rendered as a real mini-preview. The thumbnail walks the spec's `parent` / `anchor` chains to compute absolute positions, then scales them by `width / refWidth`. Each archetype gets an abstract treatment (text → stacked bars, image → gradient block, button → filled pill, container → outlined frame) so the silhouette communicates the layout instantly. The panel supports search, filters (All / Built-in / Imported / Saved), and a coloured badge per origin.
- **Save current** — the panel's primary action snapshots the most recently applied LAYOUT spec (tracked via `activeSpec`) into the library as a `Saved` entry, named `"<original> · saved HH:MM"`. The button is disabled until a layout is on the canvas. Saved entries persist to `localStorage` (`rm.libraryUserEntries`) along with imported pastes, so they survive page reloads. Built-ins are always rebuilt from `builtinLayouts.js`, never from storage.
- **Section clipping** — every section has `overflow: hidden`, so any image/text/container that extends past its section bounds (negative coords, oversize widths, off-canvas anchors) is masked at the edge instead of bleeding into adjacent sections. This matches real-site behavior; if you need to debug a clipped element, drag the canvas wider or fix its coords in the spec.
- **Image placeholder pool** — `src/imagePlaceholders.js` exports nine curated tonal PNGs (snowy mountains / dunes / vases / lilies) served from `public/placeholders/ph-01.png` … `ph-09.png`. Every `image` archetype renders a real photo via `<img style="object-fit: cover">` — gradients/captions on `image` props are ignored. Selection is deterministic via FNV-1a over a seed (preferring `props.src` → spec id → playground id), so the same element always shows the same picture across re-renders. The thumbnails in the Library Panel use the same pool, so previews match what loads on the canvas. To bias an image's crop, set `props.objectPosition: 'center 30%'` on the spec.
- **Parser** at `src/Component.jsx` → `parseLayoutText()` + `loadLayoutSpec()`:
  - Strips markdown fences and `const NAME =` / `export const NAME =` prefixes automatically
  - Splits multiple top-level declarations and parses each independently — invalid ones are reported, valid ones still load
  - Tolerates JS object-literal syntax (unquoted keys, comments, trailing commas) by evaluating with `new Function`
  - Validates archetypes, behaviors, layouts, anchor refs, parent refs, and cell indices with named errors
  - Converts every coordinate from **px-at-refWidth** to the right native unit (spx / px / vw / pct / auto) per element behavior
- **Keyboard shortcuts** in the modal: `Esc` closes, `⌘/Ctrl + Enter` applies / re-parses

Run the dev server with `npm run dev` and click **Import Layout** to use it.

---

## 3. The end-to-end workflow

```
┌──────────────────────────┐     ┌──────────────────────────┐     ┌──────────────────────────┐
│ V14 prompt + your brief  │ ──▶ │ LLM outputs LAYOUT spec  │ ──▶ │ Paste into "Import       │
│ (e.g. "5 marketing pages,│     │ (one or many in a single │     │ Layout" modal → Apply    │
│  varied palettes")       │     │ response)                │     │                          │
└──────────────────────────┘     └──────────────────────────┘     └──────────────────────────┘
                                                                            │
                                                                            ▼
                                                                   ┌──────────────────────────┐
                                                                   │ Resize canvas, toggle    │
                                                                   │ Mesh ↔ No-Mesh, observe  │
                                                                   │ how anchors hold         │
                                                                   └──────────────────────────┘
```

---

## 4. The schema in one paragraph (so an LLM can absorb it fast)

A layout is `{ meta: { name, category, refWidth, mode }, sections: [...] }`. Each section has `behavior` (`auto` | `scaleProportionally` | `fixedHeight`), `height` (px at refWidth, used as min when behavior is `auto`), `layout` (`free` | `1col` | `2col` | `3col` | `4col` | `2row` | `1+2` | `2+1` | `asym` | `mosaic`), and `children` (in render order). Each child has `archetype` (`text` | `image` | `button` | `container`), `behavior` (one of seven, must match the archetype), an optional `id`, exactly one of `cell` / `parent` / `anchor` (or none for free positioning), `x` / `y` / `w` / `h` as **px at refWidth**, and `props` (text/font for `text`, label/variant for `button`, gradient/caption for `image`, background/border for `container`). The playground converts the px values to native units automatically.

---

## 5. Worked example — the smallest valid layout

This is exactly what you can copy-paste into the modal as a smoke test:

```javascript
const LAYOUT = {
  meta: { name: 'Smoke Test', category: 'marketing', refWidth: 1280, mode: 'mesh' },
  sections: [
    {
      behavior: 'fixedHeight',
      height: 720,
      layout: 'free',
      children: [
        { id: 'eyebrow',  archetype: 'text', behavior: 'fixed',
          x: 96, y: 120, w: 200, h: 18,
          props: { text: 'INTRODUCING', fontSize: 11, fontWeight: '500',
                   letterSpacing: '0.12em', color: '#71717A' } },
        { id: 'headline', archetype: 'text', behavior: 'scaleProportionally', anchor: 'eyebrow',
          x: 96, y: 24, w: 880, h: 180,
          props: { text: 'A new way to design responsive pages.',
                   fontSize: 64, fontWeight: '500', lineHeight: '1.05',
                   letterSpacing: '-0.02em', color: '#18181B' } },
        { id: 'sub',      archetype: 'text', behavior: 'scaleProportionally', anchor: 'headline',
          x: 96, y: 28, w: 560, h: 60,
          props: { text: 'Drop the friction. Keep the intent.',
                   fontSize: 18, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46' } },
        {                 archetype: 'button', behavior: 'fixed', anchor: 'sub',
          x: 96, y: 36, w: 160, h: 44,
          props: { label: 'Get started', variant: 'primary', radius: 8 } },
        {                 archetype: 'button', behavior: 'fixed', anchor: 'sub',
          x: 272, y: 36, w: 140, h: 44,
          props: { label: 'Learn more', variant: 'ghost', radius: 8 } }
      ]
    },
    {
      behavior: 'auto',
      height: 480,
      layout: '3col',
      children: [
        { id: 'card1', archetype: 'container', behavior: 'wrap', cell: 0,
          x: 16, y: 48, w: 384, h: 280,
          props: { background: '#FFFFFF', borderColor: '#E4E4E7', borderRadius: 12 } },
        { archetype: 'text', behavior: 'wrap', parent: 'card1',
          x: 24, y: 24, w: 336, h: 32,
          props: { text: 'Anchored', fontSize: 18, fontWeight: '500', color: '#18181B' } },
        { archetype: 'text', behavior: 'wrap', parent: 'card1',
          x: 24, y: 64, w: 336, h: 80,
          props: { text: 'Children re-flow when the parent reflows. Resize the canvas to see.',
                   fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#71717A' } },

        { id: 'card2', archetype: 'container', behavior: 'wrap', cell: 1,
          x: 16, y: 48, w: 384, h: 280,
          props: { background: '#FFFFFF', borderColor: '#E4E4E7', borderRadius: 12 } },
        { archetype: 'text', behavior: 'wrap', parent: 'card2',
          x: 24, y: 24, w: 336, h: 32,
          props: { text: 'Responsive', fontSize: 18, fontWeight: '500', color: '#18181B' } },
        { archetype: 'text', behavior: 'wrap', parent: 'card2',
          x: 24, y: 64, w: 336, h: 80,
          props: { text: 'Each behavior maps to a different unit so the right thing scales.',
                   fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#71717A' } },

        { id: 'card3', archetype: 'container', behavior: 'wrap', cell: 2,
          x: 16, y: 48, w: 384, h: 280,
          props: { background: '#FFFFFF', borderColor: '#E4E4E7', borderRadius: 12 } },
        { archetype: 'text', behavior: 'wrap', parent: 'card3',
          x: 24, y: 24, w: 336, h: 32,
          props: { text: 'Mesh', fontSize: 18, fontWeight: '500', color: '#18181B' } },
        { archetype: 'text', behavior: 'wrap', parent: 'card3',
          x: 24, y: 64, w: 336, h: 80,
          props: { text: 'Toggle Mesh ↔ No Mesh in the topbar to compare strategies.',
                   fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#71717A' } }
      ]
    }
  ]
};
```

Paste it, hit **Apply Layout**, then drag the canvas edge or click the Mobile/Tablet/Desktop/Wide presets to watch the layout reflow.

---

## 6. How to use the V14 prompt with an LLM

1. Open a fresh chat with a strong frontier model (Claude Opus, GPT-4 class, etc.).
2. Paste the entire contents of `V14-LAYOUT-PROMPT.md` as the **system prompt** (or the first user message if the tool doesn't separate them).
3. Send your brief, e.g.:
   - *"Generate one marketing layout for a fintech product, Cool Gray palette."*
   - *"Generate 5 layouts: 2 marketing, 1 editorial, 1 dashboard, 1 stress."*
   - *"Generate a portfolio layout for an architect, Warm Gray, mode: noMesh."*
4. The model returns one or more `const LAYOUT_n = { ... };` blocks.
5. For each block: copy → open the playground → click **Import Layout** → paste → Apply.

The parser is forgiving: markdown fences (` ```js ... ``` `) and the `const LAYOUT = ` prefix are stripped automatically. You can paste the model's output verbatim 99% of the time.

---

## 7. Files in this repo (what to read in what order)

1. `Instructions.md` — the V13 component prompt (preserved as-is, unchanged)
2. `DESIGN-GUIDE.md` — the playground's own visual language (glass panels, accent, typography)
3. `README.md` — quick start for the playground app itself
4. `src/Component.jsx` — the entire playground (single self-contained React file). The new import flow lives at:
   - Lines ~1170–1340: `parseLayoutText`, `loadLayoutSpec`, `applyImport` (state + handlers)
   - Lines ~2020–2150 (approx, after the edit): `ImportLayoutModal` component
   - TopBar button: `<TBtn onClick={onImport} dark>Import Layout</TBtn>`
5. `V14-LAYOUT-PROMPT.md` — the new layout-generation prompt (system prompt for the LLM)
6. `HANDOVER.md` — this document

---

## 8. Maintenance & extension notes

- **Adding a new archetype** to the playground: extend `ARCHETYPES` and update the V14 prompt's archetype reference table to match.
- **Adding a new responsive behavior**: extend `RESPONSIVE_BEHAVIORS` and add a row to the V14 prompt's behavior table — and to the per-archetype "allowed behavior" list.
- **Adding a new grid template**: extend `GRID_TEMPLATES` and add the key to the V14 prompt's allowed `layout` values.
- **Adding new element props**: extend `defaultPropsFor()` and the rendering code that consumes the prop, then add the prop to the V14 prompt's "Element Props per Archetype" section so layouts can opt-in.

The contract between prompt and playground is the schema. Keep them in sync and the workflow stays clean.

---

## 9. Quick smoke test (after pulling)

```bash
npm install
npm run build       # should succeed with no errors
npm run dev         # opens http://localhost:5173
```

In the running app:
1. Click **Import Layout** in the topbar.
2. Paste the worked example from section 5 above.
3. Click **Apply Layout**.
4. The canvas should now show a hero section with anchored headline + sub + CTAs and a 3-column card grid below.
5. Drag the canvas edge or click the viewport presets — the hero text should reflow, the cards should scale, and the anchor relationships should hold.
6. Toggle **Mesh ↔ No Mesh** in the topbar — observe the difference in how the bottom cards reposition.

If any of those steps fail, the parser error is shown inline in the modal — fix the input or the parser, not the rest of the playground.
