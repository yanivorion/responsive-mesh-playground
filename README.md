# Responsive Mesh — Playground

A drag-and-drop canvas that demonstrates two layout-resolution strategies side-by-side:

- **Mesh** — when an element is dropped, an invisible gridline is inserted directly above it (0px). On viewport resize, that element's vertical position is computed against **the gridline of the element above it**, so elements behave as a stack of anchored rows.
- **No Mesh** — every element's vertical position is computed against **the parent canvas top only**, regardless of any element above.

Both modes use the same responsive units used by Wix Studio:

| Behavior | Width | Height |
|---|---|---|
| Scale Proportionally | SPX | SPX |
| Relative Width | SPX | PX |
| Fixed | PX | PX |
| Fixed Height | VW | PX |
| Stretch | 100% | 100% |
| Hug | auto | auto |

`SPX` = scaled pixel: a px value at the reference width (default 1280) that scales linearly with the current canvas width.

## Run

```bash
npm install
npm run dev
```

Vite will open `http://localhost:5173`.

## Using the playground

1. **Drag** any element from the left library onto the canvas.
2. **Toggle** the mode (top bar): `Mesh` ↔ `No Mesh`. Existing elements re-anchor automatically; their rendered pixel positions are preserved at the moment of switch.
3. **Resize the viewport** — use the preset buttons (Mobile / Tablet / Desktop / Wide), the slider, or drag the right edge of the canvas. Watch each element re-position according to its responsive unit.
4. **Show Gridlines** — toggle on to reveal the dashed anchor line and arrow connecting each element to its reference (parent top in No-Mesh, or the element above in Mesh).
5. **Click** an element to select it, then change its responsive behavior in the right panel and watch the live unit values update.
6. **Resize** an element by dragging the small accent handle on its bottom-right corner.

## Architecture

The whole experience is one self-contained React component (`src/Component.jsx`) following the Component Playground V13 spec:

- A `MANIFEST` config object exposed at the top of the file.
- A `function Component({ config = {} })` with all styles inline and no external CSS.
- All state is React-local; layout is computed every render from a small per-element model.

### Element model

Each placed element stores values in its **native unit** (not pixels):

```ts
{
  id, archetype, behavior,
  anchorId,                   // null (parent) or id of element above (mesh)
  topUnit, topValue,          // y-offset from anchor
  leftUnit, leftValue,        // x-offset from parent
  wValue, hValue              // size in the unit defined by behavior
}
```

On every render the layout pipeline converts these to pixels using the current canvas width and the reference width — that's where the responsive recalculation happens.

### Mode switching

When toggling modes, the current rendered pixel positions are captured first, then re-encoded into the new anchor scheme so nothing visually jumps.

## Design

Visual language follows `DESIGN-GUIDE.md` — frosted glass panels, blue-gray gradient background, restrained accent (`#3b82f6`), wide-tracked uppercase labels, subtle multi-layer shadows.
