import React from 'react';
import { createPortal } from 'react-dom';
import { BUILTIN_LAYOUTS } from './builtinLayouts';
import { pickPlaceholder } from './imagePlaceholders';

export const MANIFEST = {
  type: 'Layout.ResponsiveMeshPlayground',
  description:
    'Drag-and-drop canvas demonstrating Mesh vs No-Mesh layout logic with real widgets, sections, cells and responsive units.',
  editorElement: '.rm-root',
  displayName: 'Responsive Mesh Playground',
  archetype: 'container',
  data: {
    initialMode: {
      dataType: 'select',
      displayName: 'Initial Layout Mode',
      defaultValue: 'mesh',
      options: ['mesh', 'noMesh'],
      group: 'Content'
    },
    referenceWidth: {
      dataType: 'select',
      displayName: 'Reference Canvas Width (px)',
      defaultValue: '1280',
      options: ['1024', '1280', '1440', '1920'],
      group: 'Layout'
    },
    initialCanvasWidth: {
      dataType: 'number',
      displayName: 'Initial Canvas Width (px)',
      defaultValue: '1280',
      group: 'Layout'
    },
    showGridlinesByDefault: {
      dataType: 'booleanValue',
      displayName: 'Show Gridlines By Default',
      defaultValue: 'false',
      group: 'Content'
    },
    accentColor: {
      dataType: 'color',
      displayName: 'Accent',
      defaultValue: '#3b82f6',
      group: 'Colors'
    }
  },
  layout: { resizeDirection: 'both', contentResizeDirection: 'vertical' }
};

// ─── Design tokens ──────────────────────────────────────────────────────────────
const T = {
  glass:       'rgba(255,255,255,0.52)',
  glassBorder: 'rgba(255,255,255,0.48)',
  glassStrong: 'rgba(255,255,255,0.70)',
  blur:        'blur(24px) saturate(180%)',
  shadow:      '0 4px 24px rgba(0,0,0,0.045), 0 1px 3px rgba(0,0,0,0.02)',
  shadowHover: '0 8px 32px rgba(0,0,0,0.07), 0 2px 6px rgba(0,0,0,0.03)',
  inner:       'inset 0 1px 0 rgba(255,255,255,0.55)',
  text1:       '#0f172a',
  text2:       '#334155',
  text3:       '#94a3b8',
  text4:       '#64748b',
  border:      'rgba(0,0,0,0.05)',
  border2:     'rgba(0,0,0,0.09)',
  accent:      '#3b82f6',
  accentGrad:  '#3b82f6',
  accentSoft:  'rgba(59,130,246,0.08)',
  accentGlow:  '0 0 0 3px rgba(59,130,246,0.14)',
  ctrl:        'rgba(255,255,255,0.60)',
  ctrlBorder:  'rgba(0,0,0,0.07)',
  ctrlHover:   'rgba(255,255,255,0.85)',
  danger:      '#dc2626'
};
const EASE = {
  out:    'cubic-bezier(0.22, 1, 0.36, 1)',
  spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  smooth: 'cubic-bezier(0.4, 0, 0.2, 1)'
};
const sysFont =
  "-apple-system, BlinkMacSystemFont, 'SF Pro Text', 'Segoe UI', system-ui, sans-serif";

// ─── Shared base styles ─────────────────────────────────────────────────────────
const ctrlBase = {
  height: 28, background: T.ctrl, border: `1px solid ${T.ctrlBorder}`,
  borderRadius: 7, color: T.text1, fontSize: 11, padding: '0 8px',
  width: '100%', outline: 'none', fontFamily: 'inherit', appearance: 'none',
  boxSizing: 'border-box', transition: `all 300ms ${EASE.out}`
};
const glassPanel = {
  background: T.glass, backdropFilter: T.blur, WebkitBackdropFilter: T.blur,
  border: `1px solid ${T.glassBorder}`, boxShadow: `${T.shadow}, ${T.inner}`, borderRadius: 14
};
const glassBar = {
  background: T.glassStrong, backdropFilter: T.blur, WebkitBackdropFilter: T.blur,
  borderBottom: `1px solid ${T.glassBorder}`, boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
};

const REF_WIDTH_DEFAULT = 1280;
const MIN_VIEWPORT = 320;
const MAX_VIEWPORT = 1920;
const PRESETS = [
  { id: 'mobile', label: 'Mobile', width: 375 },
  { id: 'tablet', label: 'Tablet', width: 768 },
  { id: 'desktop', label: 'Desktop', width: 1280 },
  { id: 'wide', label: 'Wide', width: 1600 }
];

const RESPONSIVE_BEHAVIORS = {
  scaleProportionally: { label: 'Scale Proportionally', heightUnit: 'spx', widthUnit: 'spx' },
  relativeWidth: { label: 'Relative Width', heightUnit: 'px', widthUnit: 'spx' },
  fixed: { label: 'Fixed', heightUnit: 'px', widthUnit: 'px' },
  fixedHeight: { label: 'Fixed Height', heightUnit: 'px', widthUnit: 'vw' },
  stretch: { label: 'Stretch', heightUnit: 'pct', widthUnit: 'pct' },
  hug: { label: 'Hug', heightUnit: 'auto', widthUnit: 'auto' },
  cellFit: { label: 'Cell Fit', heightUnit: 'auto', widthUnit: 'pct' },
  // Wrap = "fluid width, content height". Width scales proportionally with
  // the canvas (forcing text to re-wrap), height grows to fit content. For
  // text this means the bounding box grows in height as the content wraps;
  // for containers it means the box auto-grows around its children.
  wrap: { label: 'Wrap', heightUnit: 'auto', widthUnit: 'spx' }
};

// Default margin (top / left) unit per responsive behavior. The rule is
// straightforward: an element that scales with the canvas wants margins
// that scale too, while every other behavior (fixed, relative-width, wrap,
// cellFit, hug, stretch …) wants pixel-locked margins so the element
// docks at a stable distance from its parent corner.
//   scaleProportionally → spx
//   everything else      → px
// `setMarginUnit` is still available if the user wants `pct` for an
// individual element, but defaults follow this rule everywhere.
function defaultMarginUnit(behaviorKey) {
  return behaviorKey === 'scaleProportionally' ? 'spx' : 'px';
}

// Section-level responsive packages. Govern how the section height behaves
// across canvas widths. Mesh mode defaults to `auto`, which grows with content
// and uses `minEmpty` as a floor when the section has no children.
const SECTION_BEHAVIORS = {
  auto: { label: 'Auto Height', hUnit: 'auto', minEmpty: 240, hint: 'Grows with content. Min height when empty.' },
  scaleProportionally: { label: 'Scale Proportionally', hUnit: 'spx', hint: 'Height scales with viewport width.' },
  fixedHeight: { label: 'Fixed Height', hUnit: 'px', hint: 'Locked pixel height across viewports.' }
};

const ARCHETYPES = {
  container: {
    label: 'Container',
    icon: '◻︎',
    color: '#3b82f6',
    behaviors: ['scaleProportionally', 'relativeWidth', 'fixed', 'stretch', 'cellFit', 'wrap'],
    defaultBehavior: 'scaleProportionally',
    defaultSize: { w: 320, h: 180 }
  },
  image: {
    label: 'Image',
    icon: '◧',
    color: '#059669',
    behaviors: ['scaleProportionally', 'relativeWidth', 'fixed', 'stretch'],
    defaultBehavior: 'scaleProportionally',
    defaultSize: { w: 320, h: 200 }
  },
  text: {
    label: 'Text',
    icon: 'T',
    color: '#7c3aed',
    behaviors: ['scaleProportionally', 'fixed', 'hug', 'cellFit', 'wrap'],
    defaultBehavior: 'wrap',
    defaultSize: { w: 320, h: 80 }
  },
  button: {
    label: 'Button',
    icon: '⬚',
    color: '#0f172a',
    behaviors: ['scaleProportionally', 'relativeWidth', 'fixed', 'hug', 'wrap'],
    defaultBehavior: 'fixed',
    defaultSize: { w: 140, h: 40 }
  }
};

// Working widgets only. Each tile maps to an archetype + optional prop overrides.
const WIDGETS = {
  image: { label: 'Image', archetype: 'image', icon: 'image' },
  title: {
    label: 'Title',
    archetype: 'text',
    icon: 'title',
    propsOverride: {
      text: 'Write a Title Here',
      fontFamily: 'Inter',
      fontSize: 44,
      fontWeight: '600',
      lineHeight: '1.1',
      letterSpacing: '-0.01em'
    },
    sizeOverride: { w: 480, h: 120 }
  },
  paragraph: {
    label: 'Paragraph',
    archetype: 'text',
    icon: 'paragraph',
    propsOverride: {
      text:
        'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.',
      fontFamily: 'Inter',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: '1.55',
      color: '#334155'
    },
    sizeOverride: { w: 380, h: 96 }
  },
  button: { label: 'Button', archetype: 'button', icon: 'button' },
  container: { label: 'Container', archetype: 'container', icon: 'container' }
};

// ─── Icons ──────────────────────────────────────────────────────────────────────
const Icon = ({ name, size = 26, stroke = '#0f172a', strokeWidth = 1.5 }) => {
  const s = strokeWidth;
  const sx = stroke;
  switch (name) {
    case 'image':
      return (
        <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
          <rect x="3.5" y="5" width="19" height="16" rx="2" stroke={sx} strokeWidth={s} />
          <circle cx="9" cy="10" r="1.5" stroke={sx} strokeWidth={s} />
          <path d="M22 17 L16 12 L8 19" stroke={sx} strokeWidth={s} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.5 19 L8 15 L11 17" stroke={sx} strokeWidth={s} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'title':
      return (
        <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
          <path d="M5 8 L21 8" stroke={sx} strokeWidth={s + 0.5} strokeLinecap="round" />
          <path d="M13 8 L13 20" stroke={sx} strokeWidth={s + 0.5} strokeLinecap="round" />
        </svg>
      );
    case 'paragraph':
      return (
        <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
          <path d="M6 7 L20 7" stroke={sx} strokeWidth={s} strokeLinecap="round" />
          <path d="M13 7 L13 14" stroke={sx} strokeWidth={s} strokeLinecap="round" />
          <path d="M5 18 L21 18" stroke={sx} strokeWidth={s - 0.3} strokeLinecap="round" opacity="0.5" />
          <path d="M5 21 L17 21" stroke={sx} strokeWidth={s - 0.3} strokeLinecap="round" opacity="0.5" />
        </svg>
      );
    case 'button':
      return (
        <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
          <rect x="3" y="9" width="20" height="9" rx="2.5" stroke={sx} strokeWidth={s} />
          <path d="M9 13.5 L17 13.5" stroke={sx} strokeWidth={s - 0.3} strokeLinecap="round" />
        </svg>
      );
    case 'container':
      return (
        <svg width={size} height={size} viewBox="0 0 26 26" fill="none">
          <rect x="4" y="6" width="18" height="14" rx="1.5" stroke={sx} strokeWidth={s} />
        </svg>
      );
    default:
      return null;
  }
};

// Grid templates for sections. Each cell described in 0..1 space within section box.
const GRID_TEMPLATES = {
  free: { label: 'Free', cells: null },
  '1col': { label: '1 Column', cells: [{ x: 0, y: 0, w: 1, h: 1 }] },
  '2col': {
    label: '2 Columns',
    cells: [
      { x: 0, y: 0, w: 0.5, h: 1 },
      { x: 0.5, y: 0, w: 0.5, h: 1 }
    ]
  },
  '3col': {
    label: '3 Columns',
    cells: [
      { x: 0, y: 0, w: 1 / 3, h: 1 },
      { x: 1 / 3, y: 0, w: 1 / 3, h: 1 },
      { x: 2 / 3, y: 0, w: 1 / 3, h: 1 }
    ]
  },
  '4col': {
    label: '4 Columns',
    cells: [
      { x: 0, y: 0, w: 0.25, h: 1 },
      { x: 0.25, y: 0, w: 0.25, h: 1 },
      { x: 0.5, y: 0, w: 0.25, h: 1 },
      { x: 0.75, y: 0, w: 0.25, h: 1 }
    ]
  },
  '2row': {
    label: '2 Rows',
    cells: [
      { x: 0, y: 0, w: 1, h: 0.5 },
      { x: 0, y: 0.5, w: 1, h: 0.5 }
    ]
  },
  '1+2': {
    label: '1 + 2',
    cells: [
      { x: 0, y: 0, w: 1, h: 0.5 },
      { x: 0, y: 0.5, w: 0.5, h: 0.5 },
      { x: 0.5, y: 0.5, w: 0.5, h: 0.5 }
    ]
  },
  asym: {
    label: 'Sidebar + Main (40/60)',
    cells: [
      { x: 0, y: 0, w: 0.4, h: 1 },
      { x: 0.4, y: 0, w: 0.6, h: 1 }
    ]
  },
  '2+1': {
    label: '2 + 1',
    cells: [
      { x: 0, y: 0, w: 0.5, h: 0.5 },
      { x: 0.5, y: 0, w: 0.5, h: 0.5 },
      { x: 0, y: 0.5, w: 1, h: 0.5 }
    ]
  },
  'asym-1-2': {
    label: '1/3 · 2/3',
    cells: [
      { x: 0, y: 0, w: 1 / 3, h: 1 },
      { x: 1 / 3, y: 0, w: 2 / 3, h: 1 }
    ]
  },
  mosaic: {
    label: 'Mosaic',
    cells: [
      { x: 0, y: 0, w: 0.5, h: 1 },
      { x: 0.5, y: 0, w: 0.5, h: 0.5 },
      { x: 0.5, y: 0.5, w: 0.5, h: 0.5 }
    ]
  }
};

// ─── Unit math ──────────────────────────────────────────────────────────────────
function pxToUnit(px, unit, refWidth, currentWidth, parentSize) {
  if (unit === 'spx') return px * (refWidth / currentWidth);
  if (unit === 'vw') return (px / currentWidth) * 100;
  if (unit === 'pct') return (px / (parentSize ?? currentWidth)) * 100;
  return px;
}
function unitToPx(value, unit, refWidth, currentWidth, parentSize) {
  if (unit === 'spx') return value * (currentWidth / refWidth);
  if (unit === 'vw') return (value / 100) * currentWidth;
  if (unit === 'pct') return (value / 100) * (parentSize ?? currentWidth);
  return value;
}
function fmt(value, unit) {
  if (unit === 'spx') return `${value.toFixed(0)} spx`;
  if (unit === 'px') return `${value.toFixed(0)} px`;
  if (unit === 'vw') return `${value.toFixed(1)} vw`;
  if (unit === 'pct') return `${value.toFixed(0)} %`;
  if (unit === 'auto') return 'auto';
  return value;
}
function genId() {
  return 'el-' + Math.random().toString(36).slice(2, 9);
}
function genSecId() {
  return 'sec-' + Math.random().toString(36).slice(2, 9);
}

// ─── Defaults for real widgets ──────────────────────────────────────────────────
function defaultPropsFor(archetype) {
  if (archetype === 'text') {
    return {
      text:
        'Add paragraph text. Click to edit. To change and reuse text themes, go to Site Styles.',
      fontFamily: 'Inter',
      fontSize: 16,
      fontWeight: '400',
      color: '#0f172a',
      lineHeight: '1.5',
      letterSpacing: '0em',
      textAlign: 'left'
    };
  }
  if (archetype === 'button') {
    return {
      label: 'Start Now',
      variant: 'primary',
      radius: 8,
      paddingX: 18,
      paddingY: 10
    };
  }
  if (archetype === 'image') {
    return {
      gradient:
        'linear-gradient(135deg, #cdd9e6 0%, #f1ede2 40%, #d3cdbf 65%, #a9b8c8 100%)',
      caption: 'Image'
    };
  }
  return {
    background: 'rgba(15,23,42,0.04)',
    borderColor: 'rgba(15,23,42,0.08)',
    borderRadius: 12
  };
}

// ─── Main component ─────────────────────────────────────────────────────────────
function Component({ config = {} }) {
  const accent = config?.accentColor || T.accent;
  const refWidth = parseInt(config?.referenceWidth || String(REF_WIDTH_DEFAULT));

  const [mode, setMode] = React.useState(config?.initialMode === 'noMesh' ? 'noMesh' : 'mesh');
  const [canvasWidth, setCanvasWidth] = React.useState(
    parseInt(config?.initialCanvasWidth || '1280')
  );
  const [showGridlines, setShowGridlines] = React.useState(
    config?.showGridlinesByDefault === true || config?.showGridlinesByDefault === 'true'
  );
  const [randomIntensity, setRandomIntensity] = React.useState(3);

  const [sections, setSections] = React.useState(() => [createSection({ height: 480 })]);
  const [selected, setSelected] = React.useState(null);
  const [draggingWidget, setDraggingWidget] = React.useState(null);
  const draggingWidgetRef = React.useRef(null);
  const [dropTarget, setDropTarget] = React.useState(null);

  const canvasRef = React.useRef(null);

  // DOM refs keyed by element / cell / section id (for react-moveable target + snap guidelines)
  const elementRefs = React.useRef(new Map());
  const cellRefs = React.useRef(new Map());
  const sectionRefs = React.useRef(new Map());
  const [, forceTick] = React.useState(0);
  const bumpTick = React.useCallback(() => forceTick((n) => (n + 1) | 0), []);

  const registerElementRef = React.useCallback((id, node) => {
    if (node) elementRefs.current.set(id, node);
    else elementRefs.current.delete(id);
    bumpTick();
  }, [bumpTick]);
  const registerCellRef = React.useCallback((key, node) => {
    if (node) cellRefs.current.set(key, node);
    else cellRefs.current.delete(key);
  }, []);
  const registerSectionRef = React.useCallback((id, node) => {
    if (node) sectionRefs.current.set(id, node);
    else sectionRefs.current.delete(id);
  }, []);

  React.useEffect(() => {
    draggingWidgetRef.current = draggingWidget;
  }, [draggingWidget]);

  // ---------- helpers ----------

  function createSection({ height = 480, behavior } = {}) {
    const beh = behavior || (mode === 'mesh' ? 'auto' : 'fixedHeight');
    const sb = SECTION_BEHAVIORS[beh];
    const hUnit = sb.hUnit;
    return {
      id: genSecId(),
      behavior: beh,
      hValue: hUnit === 'auto' ? 0 : height,
      hUnit,
      bottomMargin: 0,
      layout: 'free',
      children: []
    };
  }

  const layoutSections = React.useMemo(() => {
    let yCursor = 0;
    return sections.map((sec) => {
      const sb = SECTION_BEHAVIORS[sec.behavior] || SECTION_BEHAVIORS.fixedHeight;
      const isAuto = sb.hUnit === 'auto';
      const heightPx = isAuto
        ? 0
        : unitToPx(sec.hValue, sec.hUnit, refWidth, canvasWidth, canvasWidth);
      const minHeight = computeContentMinHeight(sec, canvasWidth, refWidth, mode);
      const minEmpty = isAuto ? sb.minEmpty || 240 : 0;
      const baseHeight = Math.max(heightPx, minHeight, minEmpty);
      // Auto sections grow with content; dragging the bottom handle adds extra
      // bottom-margin to extend the section beyond its content.
      const finalHeight = isAuto ? baseHeight + Math.max(0, sec.bottomMargin || 0) : baseHeight;
      const out = {
        ...sec,
        topPx: yCursor,
        heightPx: finalHeight,
        widthPx: canvasWidth,
        children: layoutChildren(sec, canvasWidth, refWidth, finalHeight, mode)
      };
      yCursor += finalHeight;
      return out;
    });
  }, [sections, canvasWidth, refWidth, mode]);

  const totalCanvasHeight = layoutSections.reduce((acc, s) => acc + s.heightPx, 0);

  // ---------- drag from sidebar ----------

  const handleSidebarDragStart = (widgetKey) => (e) => {
    const widget = WIDGETS[widgetKey];
    if (!widget || widget.placeholder) {
      e.preventDefault();
      return;
    }
    setDraggingWidget(widgetKey);
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = 'copy';
      e.dataTransfer.setData('text/plain', widgetKey);
    }
  };
  const handleSidebarDragEnd = () => {
    setDraggingWidget(null);
    dragEnterCount.current = 0;
    dropTargetRef.current = null;
    setDropTarget(null);
  };

  const dropTargetRef = React.useRef(null);
  const dragEnterCount = React.useRef(0);

  const sameTarget = (a, b) => {
    if (a === b) return true;
    if (!a || !b) return false;
    return (
      a.sectionId === b.sectionId &&
      a.cellIndex === b.cellIndex &&
      (a.containerId || null) === (b.containerId || null)
    );
  };

  const handleCanvasDragEnter = (e) => {
    if (!draggingWidgetRef.current) return;
    e.preventDefault();
    dragEnterCount.current += 1;
  };

  const handleCanvasDragOver = (e) => {
    if (!draggingWidgetRef.current) return;
    e.preventDefault();
    if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
    const target = resolveDropTarget(e);
    if (!sameTarget(dropTargetRef.current, target)) {
      dropTargetRef.current = target;
      setDropTarget(target);
    }
  };

  const handleCanvasDragLeave = (e) => {
    if (!draggingWidgetRef.current) return;
    dragEnterCount.current = Math.max(0, dragEnterCount.current - 1);
    if (dragEnterCount.current === 0) {
      dropTargetRef.current = null;
      setDropTarget(null);
    }
  };

  const handleCanvasDrop = (e) => {
    e.preventDefault();
    const widgetKey = draggingWidgetRef.current || e.dataTransfer?.getData('text/plain');
    const target = resolveDropTarget(e);
    setDraggingWidget(null);
    dragEnterCount.current = 0;
    dropTargetRef.current = null;
    setDropTarget(null);
    const widget = WIDGETS[widgetKey];
    if (!widget || widget.placeholder || !target) return;
    addElement(widgetKey, target);
  };

  function resolveDropTarget(e) {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return null;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    for (const sec of layoutSections) {
      if (y < sec.topPx || y > sec.topPx + sec.heightPx) continue;
      const localX = x;
      const localY = y - sec.topPx;

      // 1) Container hit-test first — top-most (last in array) wins.
      // Use absLeftPx/absTopPx (section-absolute) because parented containers
      // store leftPx/topPx as offsets relative to their own parent.
      for (let i = sec.children.length - 1; i >= 0; i--) {
        const child = sec.children[i];
        if (child.archetype !== 'container') continue;
        const cLeft = child.absLeftPx ?? child.leftPx;
        const cTop = child.absTopPx ?? child.topPx;
        if (
          localX >= cLeft &&
          localX <= cLeft + child.widthPx &&
          localY >= cTop &&
          localY <= cTop + child.heightPx
        ) {
          return {
            sectionId: sec.id,
            containerId: child.id,
            cellIndex: null,
            localX: localX - cLeft,
            localY: localY - cTop,
            cellRect: { x: cLeft, y: cTop, w: child.widthPx, h: child.heightPx },
            sectionTop: sec.topPx
          };
        }
      }

      // 2) Cells (existing grid layout)
      if (sec.layout !== 'free') {
        const tpl = GRID_TEMPLATES[sec.layout];
        if (tpl?.cells) {
          for (let i = 0; i < tpl.cells.length; i++) {
            const c = tpl.cells[i];
            const cx = c.x * sec.widthPx;
            const cy = c.y * sec.heightPx;
            const cw = c.w * sec.widthPx;
            const ch = c.h * sec.heightPx;
            if (localX >= cx && localX <= cx + cw && localY >= cy && localY <= cy + ch) {
              return {
                sectionId: sec.id,
                cellIndex: i,
                localX: localX - cx,
                localY: localY - cy,
                cellRect: { x: cx, y: cy, w: cw, h: ch },
                sectionTop: sec.topPx
              };
            }
          }
        }
      }

      // 3) Section (free drop)
      return {
        sectionId: sec.id,
        cellIndex: null,
        localX,
        localY,
        cellRect: null,
        sectionTop: sec.topPx
      };
    }
    return null;
  }

  function addElement(widgetKey, target) {
    const widget = WIDGETS[widgetKey];
    if (!widget || widget.placeholder) return;
    const archetype = widget.archetype;
    const arche = ARCHETYPES[archetype];
    const intoCell = target.cellIndex != null;
    const intoContainer = !!target.containerId;

    // Pick behavior. When dropping into a cell or container, fit to the parent.
    let behaviorKey;
    if (intoCell || intoContainer) {
      if (archetype === 'text' || archetype === 'container') behaviorKey = 'cellFit';
      else if (archetype === 'image') behaviorKey = 'stretch';
      else behaviorKey = arche.defaultBehavior;
    } else {
      behaviorKey = arche.defaultBehavior;
    }
    const beh = RESPONSIVE_BEHAVIORS[behaviorKey];
    const baseW = widget.sizeOverride?.w ?? arche.defaultSize.w;
    const baseH = widget.sizeOverride?.h ?? arche.defaultSize.h;
    const newId = genId();

    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== target.sectionId) return sec;

        // ── Drop INTO a container: parent the new element to it (parentEl). ──
        if (intoContainer) {
          const wValue =
            beh.widthUnit === 'pct'
              ? 100
              : beh.widthUnit === 'auto'
              ? baseW
              : pxToUnit(baseW, beh.widthUnit, refWidth, canvasWidth);
          const hValue =
            beh.heightUnit === 'pct'
              ? 100
              : beh.heightUnit === 'auto'
              ? baseH
              : pxToUnit(baseH, beh.heightUnit, refWidth, canvasWidth);
          const marginUnit = defaultMarginUnit(behaviorKey);
          const newEl = {
            id: newId,
            archetype,
            behavior: behaviorKey,
            parentCell: null,
            parentEl: target.containerId,
            anchorId: null,
            topUnit: marginUnit,
            topValue: 0,
            leftUnit: marginUnit,
            leftValue: 0,
            wValue,
            hValue,
            props: { ...defaultPropsFor(archetype), ...(widget.propsOverride || {}) }
          };
          return { ...sec, children: [...sec.children, newEl] };
        }

        // ── Drop INTO a cell: anchor at top-left, fill width, auto/stretch height ──
        if (intoCell) {
          const wValue =
            beh.widthUnit === 'pct'
              ? 100
              : beh.widthUnit === 'auto'
              ? baseW
              : pxToUnit(baseW, beh.widthUnit, refWidth, canvasWidth);
          const hValue =
            beh.heightUnit === 'pct'
              ? 100
              : beh.heightUnit === 'auto'
              ? baseH
              : pxToUnit(baseH, beh.heightUnit, refWidth, canvasWidth);
          const marginUnit = defaultMarginUnit(behaviorKey);
          const newEl = {
            id: newId,
            archetype,
            behavior: behaviorKey,
            parentCell: target.cellIndex,
            parentEl: null,
            anchorId: null,
            topUnit: marginUnit,
            topValue: 0,
            leftUnit: marginUnit,
            leftValue: 0,
            wValue,
            hValue,
            props: { ...defaultPropsFor(archetype), ...(widget.propsOverride || {}) }
          };
          return { ...sec, children: [...sec.children, newEl] };
        }

        // ── Free drop in section ──
        const left = Math.max(0, Math.min(canvasWidth - baseW, target.localX - baseW / 2));
        const top = Math.max(0, target.localY - baseH / 2);
        const wValue =
          beh.widthUnit === 'auto' || beh.widthUnit === 'pct'
            ? baseW
            : pxToUnit(baseW, beh.widthUnit, refWidth, canvasWidth);
        const hValue =
          beh.heightUnit === 'auto' || beh.heightUnit === 'pct'
            ? baseH
            : pxToUnit(baseH, beh.heightUnit, refWidth, canvasWidth);

        let anchorId = null;
        const marginUnit = defaultMarginUnit(behaviorKey);
        const topUnit = marginUnit;
        let topValue = pxToUnit(top, topUnit, refWidth, canvasWidth);

        if (mode === 'mesh') {
          const laidChildren = layoutChildren(sec, canvasWidth, refWidth, sec.hValue, mode);
          const above = findAnchorAbove(laidChildren, top, left, baseW);
          if (above) {
            anchorId = above.id;
            const offset = Math.max(0, top - (above.topPx + above.heightPx));
            topValue = pxToUnit(offset, topUnit, refWidth, canvasWidth);
          }
        }

        const leftUnit = marginUnit;
        const leftValue = pxToUnit(left, leftUnit, refWidth, canvasWidth);

        const newEl = {
          id: newId,
          archetype,
          behavior: behaviorKey,
          parentCell: null,
          parentEl: null,
          anchorId,
          topUnit,
          topValue,
          leftUnit,
          leftValue,
          wValue,
          hValue,
          props: { ...defaultPropsFor(archetype), ...(widget.propsOverride || {}) }
        };

        return { ...sec, children: [...sec.children, newEl] };
      })
    );
    setSelected({ kind: 'element', secId: target.sectionId, id: newId });
  }

  // ---------- update / move / resize element ----------

  function updateElement(secId, elId, patch) {
    setSections((prev) =>
      prev.map((sec) =>
        sec.id !== secId
          ? sec
          : { ...sec, children: sec.children.map((c) => (c.id === elId ? { ...c, ...patch } : c)) }
      )
    );
  }

  function setMeasuredHeight(secId, elId, hPx) {
    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== secId) return sec;
        return {
          ...sec,
          children: sec.children.map((c) => {
            if (c.id !== elId) return c;
            const beh = RESPONSIVE_BEHAVIORS[c.behavior];
            if (beh.heightUnit !== 'auto') return c;
            if (Math.abs(c.hValue - hPx) < 1) return c;
            return { ...c, hValue: hPx };
          })
        };
      })
    );
  }

  function updateElementProps(secId, elId, patch) {
    setSections((prev) =>
      prev.map((sec) =>
        sec.id !== secId
          ? sec
          : {
              ...sec,
              children: sec.children.map((c) =>
                c.id === elId ? { ...c, props: { ...c.props, ...patch } } : c
              )
            }
      )
    );
  }

  function removeElement(secId, elId) {
    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== secId) return sec;
        // Remove the element AND any descendants whose parentEl chain leads to it.
        const removed = new Set([elId]);
        let grew = true;
        while (grew) {
          grew = false;
          for (const c of sec.children) {
            if (!removed.has(c.id) && c.parentEl && removed.has(c.parentEl)) {
              removed.add(c.id);
              grew = true;
            }
          }
        }
        const filtered = sec.children.filter((c) => !removed.has(c.id));
        return {
          ...sec,
          children: filtered.map((c) => (c.anchorId === elId ? { ...c, anchorId: null } : c))
        };
      })
    );
    setSelected(null);
  }

  // ── Layering: per-element zIndex ──────────────────────────────────────
  // Elements default to zIndex 0; values can be negative or positive. The
  // visual stacking order is `(el.zIndex ?? 0) + base`. Containers stack
  // their parented children using the same field within their own context.
  function setElementZIndex(secId, elId, z) {
    const v = Math.round(Number(z) || 0);
    setSections((prev) =>
      prev.map((sec) =>
        sec.id !== secId
          ? sec
          : { ...sec, children: sec.children.map((c) => (c.id === elId ? { ...c, zIndex: v } : c)) }
      )
    );
  }
  function bumpElementZIndex(secId, elId, delta) {
    setSections((prev) =>
      prev.map((sec) =>
        sec.id !== secId
          ? sec
          : {
              ...sec,
              children: sec.children.map((c) =>
                c.id === elId ? { ...c, zIndex: (Number(c.zIndex) || 0) + delta } : c
              )
            }
      )
    );
  }
  function bringElementToFront(secId, elId) {
    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== secId) return sec;
        const max = sec.children.reduce((m, c) => Math.max(m, Number(c.zIndex) || 0), 0);
        return {
          ...sec,
          children: sec.children.map((c) => (c.id === elId ? { ...c, zIndex: max + 1 } : c))
        };
      })
    );
  }
  function sendElementToBack(secId, elId) {
    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== secId) return sec;
        const min = sec.children.reduce((m, c) => Math.min(m, Number(c.zIndex) || 0), 0);
        return {
          ...sec,
          children: sec.children.map((c) => (c.id === elId ? { ...c, zIndex: min - 1 } : c))
        };
      })
    );
  }

  // Resolve the parent size (width / height in px at the current canvas) used
  // for the % unit, which is the only unit that depends on parent dimensions.
  // For free children we use the canvas width (sections span the canvas).
  function getMarginParentSize(sec, c, axis) {
    if (c.parentEl) {
      // Container child — find the parent's resolved dimensions.
      const laid = layoutChildren(sec, canvasWidth, refWidth, sec.hValue, mode);
      const p = laid.find((x) => x.id === c.parentEl);
      if (p) return axis === 'left' ? p.widthPx : p.heightPx;
    }
    if (c.parentCell != null) {
      const tpl = sec.layout && sec.layout !== 'free' ? GRID_TEMPLATES[sec.layout] : null;
      const cell = tpl?.cells?.[c.parentCell];
      if (cell) {
        const sectionH = unitToPx(sec.hValue, sec.hUnit, refWidth, canvasWidth, canvasWidth);
        return axis === 'left' ? cell.w * canvasWidth : cell.h * sectionH;
      }
    }
    return canvasWidth;
  }

  // Switch a margin's unit (spx ↔ px ↔ pct) WITHOUT moving the element. The
  // stored value is reinterpreted so the on-screen position at the current
  // canvas size is preserved; only the future scaling behaviour changes.
  function setMarginUnit(secId, elId, axis, newUnit) {
    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== secId) return sec;
        return {
          ...sec,
          children: sec.children.map((c) => {
            if (c.id !== elId) return c;
            const valueKey = axis === 'left' ? 'leftValue' : 'topValue';
            const unitKey = axis === 'left' ? 'leftUnit' : 'topUnit';
            const currentUnit = c[unitKey];
            if (currentUnit === newUnit) return c;
            const parentSize = getMarginParentSize(sec, c, axis);
            const currentPx = unitToPx(c[valueKey], currentUnit, refWidth, canvasWidth, parentSize);
            const newValue = pxToUnit(currentPx, newUnit, refWidth, canvasWidth, parentSize);
            return { ...c, [unitKey]: newUnit, [valueKey]: newValue };
          })
        };
      })
    );
  }

  // Set a numeric margin value (kept in the element's current unit). Use the
  // value directly — no conversion — so typing `100` in SPX stores 100spx.
  function setMarginValue(secId, elId, axis, value) {
    setSections((prev) =>
      prev.map((sec) =>
        sec.id !== secId
          ? sec
          : {
              ...sec,
              children: sec.children.map((c) => {
                if (c.id !== elId) return c;
                const valueKey = axis === 'left' ? 'leftValue' : 'topValue';
                return { ...c, [valueKey]: Number(value) || 0 };
              })
            }
      )
    );
  }

  // Detach the dragged element from its mesh anchor at the moment the user
  // begins dragging. The element's stored topValue is rewritten as an
  // absolute (section-relative) length so the visual position is preserved,
  // and any anchorId is cleared. Anchoring is re-evaluated only on drop in
  // commitElementPosition. Children that were anchored TO this element are
  // also detached so they stay visually pinned during the drag.
  function detachAnchorForDrag(secId, elId) {
    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== secId) return sec;
        const laid = layoutChildren(sec, canvasWidth, refWidth, sec.hValue, mode);
        return {
          ...sec,
          children: sec.children.map((c) => {
            const isDragged = c.id === elId;
            const isDescendant = c.anchorId === elId;
            if (!isDragged && !isDescendant) return c;
            const lo = laid.find((l) => l.id === c.id);
            if (!lo) return c;

            if (c.parentEl) {
              // Container child: store its local relative-to-parent topPx
              // as the new topValue; the parent height is the conversion
              // base for percent units.
              const parentLo = laid.find((p) => p.id === c.parentEl);
              const parentH = parentLo ? parentLo.heightPx : 0;
              return {
                ...c,
                anchorId: null,
                topValue: pxToUnit(lo.topPx, c.topUnit, refWidth, canvasWidth, parentH)
              };
            }
            if (c.parentCell != null) {
              // Cell child: lo.topPx is section-absolute. Convert to cell-
              // local by subtracting the cell's Y origin.
              const tpl = GRID_TEMPLATES[sec.layout];
              const cellDef = tpl?.cells?.[c.parentCell];
              if (!cellDef) return c;
              const cellY = cellDef.y * (sec.heightPx || 0);
              const cellH = cellDef.h * (sec.heightPx || 0);
              const localTop = Math.max(0, lo.topPx - cellY);
              return {
                ...c,
                anchorId: null,
                topValue: pxToUnit(localTop, c.topUnit, refWidth, canvasWidth, cellH)
              };
            }
            // Free child in section
            const absTop = lo.absTopPx ?? lo.topPx;
            return {
              ...c,
              anchorId: null,
              topValue: pxToUnit(absTop, c.topUnit, refWidth, canvasWidth)
            };
          })
        };
      })
    );
  }

  // Drag commit. The incoming leftPx/topPx are in the SAME coordinate
  // space as the dragged element's existing leftPx/topPx — i.e. relative
  // to the parent container if the element is parented, otherwise
  // section-absolute.
  function commitMoveableDrag(secId, elId, leftPx, topPx) {
    const sec = layoutSections.find((s) => s.id === secId);
    const el = sec?.children.find((c) => c.id === elId);
    if (!sec || !el) return;

    if (el.parentEl) {
      const parent = sec.children.find((c) => c.id === el.parentEl);
      if (!parent) return;
      // Containers grow with their content — children may legitimately be
      // dropped beyond the parent's current bottom, so we only clamp the
      // top to >= 0 (no clamp against the bottom). Left is still clamped
      // against the parent's width.
      const lx = Math.max(0, Math.min(Math.max(0, parent.widthPx - el.widthPx), leftPx));
      const ly = Math.max(0, topPx);
      setSections((prev) => prev.map((s) => {
        if (s.id !== secId) return s;
        const laid = layoutChildren(s, canvasWidth, refWidth, s.hValue, mode);
        return {
          ...s,
          children: s.children.map((c) => {
            if (c.id !== elId) return c;
            let anchorId = null;
            let topValue;
            if (mode === 'mesh') {
              const above = findAnchorAbove(
                laid.filter((x) => x.id !== elId),
                ly,
                lx,
                el.widthPx,
                { kind: 'container', id: el.parentEl }
              );
              if (above) {
                anchorId = above.id;
                const offset = Math.max(0, ly - (above.topPx + above.heightPx));
                topValue = pxToUnit(offset, c.topUnit, refWidth, canvasWidth, parent.heightPx);
              } else {
                topValue = pxToUnit(ly, c.topUnit, refWidth, canvasWidth, parent.heightPx);
              }
            } else {
              topValue = pxToUnit(ly, c.topUnit, refWidth, canvasWidth, parent.heightPx);
            }
            return {
              ...c,
              anchorId,
              leftValue: pxToUnit(lx, c.leftUnit, refWidth, canvasWidth, parent.widthPx),
              topValue
            };
          })
        };
      }));
      return;
    }

    if (el.parentCell != null) {
      const tpl = GRID_TEMPLATES[sec.layout];
      const cellDef = tpl?.cells?.[el.parentCell];
      if (!cellDef) return;
      const cellX = cellDef.x * sec.widthPx;
      const cellY = cellDef.y * sec.heightPx;
      const cellW = cellDef.w * sec.widthPx;
      const cellH = cellDef.h * sec.heightPx;
      // Cells share the canvas-clipping rule with the section, but inside
      // the cell we don't clip — element may extend past cell bottom and
      // mesh anchoring keeps the relative ordering. Clamp left to keep
      // siblings from drifting outside; top only clamps to >= 0.
      const lpx = Math.max(0, leftPx);
      const tpx = Math.max(0, topPx);
      const lx = Math.max(0, Math.min(cellW - el.widthPx, lpx - cellX));
      const ly = Math.max(0, tpx - cellY);
      setSections((prev) => prev.map((s) => {
        if (s.id !== secId) return s;
        const laid = layoutChildren(s, canvasWidth, refWidth, s.hValue, mode);
        return {
          ...s,
          children: s.children.map((c) => {
            if (c.id !== elId) return c;
            let anchorId = null;
            let topValue;
            if (mode === 'mesh') {
              // Anchor search uses cell-local top; the laid sibling's
              // topPx is section-absolute, so subtract cellY before
              // comparing.
              const cellLocalSiblings = laid
                .filter((x) => x.id !== elId && x.parentCell === el.parentCell && !x.parentEl)
                .map((x) => ({ ...x, topPx: x.topPx - cellY, leftPx: x.leftPx - cellX }));
              const above = findAnchorAbove(
                cellLocalSiblings,
                ly,
                lx,
                el.widthPx,
                { kind: 'cell', cell: el.parentCell }
              );
              if (above) {
                anchorId = above.id;
                const offset = Math.max(0, ly - (above.topPx + above.heightPx));
                topValue = pxToUnit(offset, c.topUnit, refWidth, canvasWidth, cellH);
              } else {
                topValue = pxToUnit(ly, c.topUnit, refWidth, canvasWidth, cellH);
              }
            } else {
              topValue = pxToUnit(ly, c.topUnit, refWidth, canvasWidth, cellH);
            }
            return {
              ...c,
              anchorId,
              leftValue: pxToUnit(lx, c.leftUnit, refWidth, canvasWidth, cellW),
              topValue
            };
          })
        };
      }));
      return;
    }

    const lpx = Math.max(0, Math.min(sec.widthPx - el.widthPx, leftPx));
    const tpx = Math.max(0, Math.min(sec.heightPx - el.heightPx, topPx));
    commitElementPosition(secId, elId, lpx, tpx, el.widthPx);
  }

  function commitMoveableResize(secId, elId, leftPx, topPx, widthPx, heightPx) {
    setSections((prev) => prev.map((sec) => {
      if (sec.id !== secId) return sec;
      // Resolve a laid-out parent (container) for parentEl children
      const laidSec = layoutSections.find((s) => s.id === secId);
      return {
        ...sec,
        children: sec.children.map((c) => {
          if (c.id !== elId) return c;
          const beh = RESPONSIVE_BEHAVIORS[c.behavior];
          let parentW = canvasWidth;
          let parentH = sec.hValue || canvasWidth;
          if (c.parentEl && laidSec) {
            const parent = laidSec.children.find((p) => p.id === c.parentEl);
            if (parent) {
              parentW = parent.widthPx;
              parentH = parent.heightPx;
            }
          } else if (c.parentCell != null) {
            const tpl = GRID_TEMPLATES[sec.layout];
            const cellDef = tpl?.cells?.[c.parentCell];
            if (cellDef && laidSec) {
              parentW = cellDef.w * laidSec.widthPx;
              parentH = cellDef.h * laidSec.heightPx;
            }
          }
          const wValue =
            beh.widthUnit === 'auto' ? widthPx
            : beh.widthUnit === 'pct' ? (parentW > 0 ? (widthPx / parentW) * 100 : c.wValue)
            : pxToUnit(widthPx, beh.widthUnit, refWidth, canvasWidth, parentW);
          const hValue =
            beh.heightUnit === 'auto' ? heightPx
            : beh.heightUnit === 'pct' ? (parentH > 0 ? (heightPx / parentH) * 100 : c.hValue)
            : pxToUnit(heightPx, beh.heightUnit, refWidth, canvasWidth, parentH);
          let leftValue = c.leftValue;
          let topValue = c.topValue;
          if (c.parentEl && laidSec) {
            const parent = laidSec.children.find((p) => p.id === c.parentEl);
            if (parent) {
              // leftPx/topPx come in already-relative to the parent (the
              // dragged DOM node lives inside the parent's coordinate
              // space), so we just convert to the configured unit.
              leftValue = pxToUnit(Math.max(0, leftPx), c.leftUnit, refWidth, canvasWidth, parent.widthPx);
              topValue = pxToUnit(Math.max(0, topPx), c.topUnit, refWidth, canvasWidth, parent.heightPx);
            }
          } else if (c.parentCell != null) {
            const tpl = GRID_TEMPLATES[sec.layout];
            const cellDef = tpl?.cells?.[c.parentCell];
            if (cellDef && laidSec) {
              const cellX = cellDef.x * laidSec.widthPx;
              const cellY = cellDef.y * laidSec.heightPx;
              leftValue = pxToUnit(Math.max(0, leftPx - cellX), c.leftUnit, refWidth, canvasWidth);
              topValue = pxToUnit(Math.max(0, topPx - cellY), c.topUnit, refWidth, canvasWidth);
            }
          } else {
            leftValue = pxToUnit(Math.max(0, leftPx), c.leftUnit, refWidth, canvasWidth);
            topValue = pxToUnit(Math.max(0, topPx), c.topUnit, refWidth, canvasWidth);
          }
          return { ...c, wValue, hValue, leftValue, topValue, anchorId: null };
        })
      };
    }));
  }

  function commitElementPosition(secId, elId, leftPx, topPx, widthPx) {
    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== secId) return sec;
        const laid = layoutChildren(sec, canvasWidth, refWidth, sec.hValue, mode);
        return {
          ...sec,
          children: sec.children.map((c) => {
            if (c.id !== elId) return c;
            let anchorId = null;
            let topValue;
            if (mode === 'mesh' && c.parentCell == null) {
              const others = laid.filter((x) => x.id !== elId);
              const above = findAnchorAbove(others, topPx, leftPx, widthPx);
              if (above) {
                anchorId = above.id;
                const offset = Math.max(0, topPx - (above.topPx + above.heightPx));
                topValue = pxToUnit(offset, c.topUnit, refWidth, canvasWidth);
              } else {
                topValue = pxToUnit(topPx, c.topUnit, refWidth, canvasWidth);
              }
            } else {
              topValue = pxToUnit(topPx, c.topUnit, refWidth, canvasWidth);
            }
            const leftValue = pxToUnit(leftPx, c.leftUnit, refWidth, canvasWidth);
            return { ...c, anchorId, topValue, leftValue };
          })
        };
      })
    );
  }

  // section bottom resize
  const [secResize, setSecResize] = React.useState(null);
  const startSecResize = (secId) => (e) => {
    e.stopPropagation();
    e.preventDefault();
    const sec = layoutSections.find((s) => s.id === secId);
    if (!sec) return;
    const isAuto = (SECTION_BEHAVIORS[sec.behavior] || SECTION_BEHAVIORS.fixedHeight).hUnit === 'auto';
    setSecResize({
      secId,
      startY: e.clientY,
      origH: sec.heightPx,
      origMargin: sec.bottomMargin || 0,
      isAuto
    });
  };
  React.useEffect(() => {
    if (!secResize) return;
    const onMove = (e) => {
      const dh = e.clientY - secResize.startY;
      if (secResize.isAuto) {
        // Auto sections: drag adjusts bottom-margin (extra space beyond content)
        const nextMargin = Math.max(0, secResize.origMargin + dh);
        setSections((prev) =>
          prev.map((sec) =>
            sec.id !== secResize.secId ? sec : { ...sec, bottomMargin: nextMargin }
          )
        );
        return;
      }
      const newH = Math.max(120, secResize.origH + dh);
      setSections((prev) =>
        prev.map((sec) =>
          sec.id !== secResize.secId
            ? sec
            : {
                ...sec,
                hValue:
                  sec.hUnit === 'spx'
                    ? pxToUnit(newH, 'spx', refWidth, canvasWidth)
                    : newH
              }
        )
      );
    };
    const onUp = () => setSecResize(null);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
  }, [secResize, refWidth, canvasWidth]);

  function addSectionAfter(secId) {
    setSections((prev) => {
      const idx = prev.findIndex((s) => s.id === secId);
      const next = createSection({ height: 360 });
      const out = [...prev];
      out.splice(idx + 1, 0, next);
      return out;
    });
  }
  function removeSection(secId) {
    setSections((prev) => (prev.length <= 1 ? prev : prev.filter((s) => s.id !== secId)));
    if (selected?.secId === secId) setSelected(null);
  }
  function setSectionLayout(secId, layout) {
    setSections((prev) =>
      prev.map((sec) =>
        sec.id !== secId
          ? sec
          : {
              ...sec,
              layout,
              children:
                layout === 'free'
                  ? sec.children.map((c) => ({ ...c, parentCell: null }))
                  : sec.children
            }
      )
    );
  }

  function setSectionBehavior(secId, behaviorKey) {
    const sb = SECTION_BEHAVIORS[behaviorKey];
    if (!sb) return;
    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== secId) return sec;
        const laid = layoutSections.find((s) => s.id === secId);
        const renderedPx = laid?.heightPx ?? unitToPx(sec.hValue, sec.hUnit, refWidth, canvasWidth, canvasWidth);
        let hValue;
        if (sb.hUnit === 'auto') hValue = 0;
        else if (sb.hUnit === 'spx') hValue = pxToUnit(renderedPx, 'spx', refWidth, canvasWidth);
        else hValue = renderedPx;
        // bottomMargin only applies in auto mode. Switching to fixed/spx folds
        // any previous margin into the new explicit height, then resets it.
        const bottomMargin = sb.hUnit === 'auto' ? (sec.bottomMargin || 0) : 0;
        return { ...sec, behavior: behaviorKey, hUnit: sb.hUnit, hValue, bottomMargin };
      })
    );
  }

  // mode switch — preserve rendered top within section
  function switchMode(newMode) {
    if (newMode === mode) return;
    setSections((prev) =>
      prev.map((sec) => {
        const laid = layoutChildren(sec, canvasWidth, refWidth, sec.hValue, mode);
        if (newMode === 'noMesh') {
          return {
            ...sec,
            children: sec.children.map((c) => {
              const lo = laid.find((l) => l.id === c.id);
              if (!lo) return c;
              // Parented children stay relative to their container; only
              // free children store section-absolute top values.
              if (c.parentEl) return { ...c, anchorId: null };
              return {
                ...c,
                anchorId: null,
                topValue: pxToUnit(lo.absTopPx ?? lo.topPx, c.topUnit, refWidth, canvasWidth)
              };
            })
          };
        }
        // -> mesh
        const sorted = [...sec.children]
          .map((c) => ({ c, top: laid.find((l) => l.id === c.id)?.absTopPx ?? laid.find((l) => l.id === c.id)?.topPx ?? 0 }))
          .sort((a, b) => a.top - b.top);
        const next = [];
        const layoutSoFar = [];
        for (const { c } of sorted) {
          const lo = laid.find((l) => l.id === c.id);
          // Cell- and container-parented children don't participate in
          // section-level mesh anchoring.
          if (!lo || c.parentCell != null || c.parentEl) {
            next.push(c);
            if (lo) layoutSoFar.push(lo);
            continue;
          }
          const loTop = lo.absTopPx ?? lo.topPx;
          const loLeft = lo.absLeftPx ?? lo.leftPx;
          const above = findAnchorAbove(layoutSoFar, loTop, loLeft, lo.widthPx);
          let anchorId = null;
          let topValue;
          if (above) {
            anchorId = above.id;
            const aboveBottom = (above.absTopPx ?? above.topPx) + above.heightPx;
            topValue = pxToUnit(
              Math.max(0, loTop - aboveBottom),
              c.topUnit,
              refWidth,
              canvasWidth
            );
          } else {
            topValue = pxToUnit(loTop, c.topUnit, refWidth, canvasWidth);
          }
          next.push({ ...c, anchorId, topValue });
          layoutSoFar.push(lo);
        }
        const order = new Map(sec.children.map((p, i) => [p.id, i]));
        next.sort((a, b) => order.get(a.id) - order.get(b.id));
        return { ...sec, children: next };
      })
    );
    setMode(newMode);
  }

  function changeBehavior(secId, elId, behaviorKey) {
    setSections((prev) =>
      prev.map((sec) => {
        if (sec.id !== secId) return sec;
        const laid = layoutChildren(sec, canvasWidth, refWidth, sec.hValue, mode);
        return {
          ...sec,
          children: sec.children.map((c) => {
            if (c.id !== elId) return c;
            const lo = laid.find((l) => l.id === c.id);
            const beh = RESPONSIVE_BEHAVIORS[behaviorKey];
            const widthPx = lo?.widthPx ?? c.wValue;
            const heightPx = lo?.heightPx ?? c.hValue;
            const wValue =
              beh.widthUnit === 'auto' || beh.widthUnit === 'pct'
                ? widthPx
                : pxToUnit(widthPx, beh.widthUnit, refWidth, canvasWidth);
            const hValue =
              beh.heightUnit === 'auto' || beh.heightUnit === 'pct'
                ? heightPx
                : pxToUnit(heightPx, beh.heightUnit, refWidth, canvasWidth);
            // Snap margin units to the rule for the new behavior, preserving
            // the on-screen position at the current canvas size. The user
            // can still override per-axis from the inspector afterwards.
            const newMarginUnit = defaultMarginUnit(behaviorKey);
            const parentH = lo?.parentEl
              ? (laid.find((l) => l.id === lo.parentEl)?.heightPx || canvasWidth)
              : canvasWidth;
            const parentW = lo?.parentEl
              ? (laid.find((l) => l.id === lo.parentEl)?.widthPx || canvasWidth)
              : canvasWidth;
            const topPxNow = unitToPx(c.topValue, c.topUnit, refWidth, canvasWidth, parentH);
            const leftPxNow = unitToPx(c.leftValue, c.leftUnit, refWidth, canvasWidth, parentW);
            const topValue = pxToUnit(topPxNow, newMarginUnit, refWidth, canvasWidth, parentH);
            const leftValue = pxToUnit(leftPxNow, newMarginUnit, refWidth, canvasWidth, parentW);
            return {
              ...c,
              behavior: behaviorKey,
              wValue,
              hValue,
              topUnit: newMarginUnit,
              leftUnit: newMarginUnit,
              topValue,
              leftValue
            };
          })
        };
      })
    );
  }

  function clearAll() {
    setSections([createSection({ height: 480 })]);
    setSelected(null);
  }

  // ── Randomize behaviors across stage ─────────────────────────────────────────
  // intensity 1..5 controls how many elements get a *different* behavior:
  //   1 → only 1-2 elements vary; the rest are reset to their archetype default
  //   5 → every element gets re-rolled, with behaviors spread across the
  //        archetype's allowed list as evenly as possible (max diversity).
  function randomizeBehaviors(intensity) {
    const lvl = Math.max(1, Math.min(5, +intensity || 1));
    setSections((prev) => {
      const elemList = [];
      prev.forEach((sec) => {
        sec.children.forEach((c) => {
          if (c.archetype && ARCHETYPES[c.archetype]) {
            elemList.push({ secId: sec.id, elId: c.id });
          }
        });
      });
      const total = elemList.length;
      if (total === 0) return prev;

      let numToVary;
      if (lvl <= 1) numToVary = Math.min(2, total);
      else if (lvl >= 5) numToVary = total;
      else {
        const ratios = { 2: 0.25, 3: 0.5, 4: 0.75 };
        numToVary = Math.max(1, Math.round(total * ratios[lvl]));
      }

      const order = elemList.map((_, i) => i);
      for (let i = order.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [order[i], order[j]] = [order[j], order[i]];
      }
      const variedIdxs = new Set(order.slice(0, numToVary));
      const indexById = new Map(elemList.map((e, i) => [`${e.secId}:${e.elId}`, i]));

      const archCursor = {};
      const nextSpread = (archetype) => {
        let st = archCursor[archetype];
        if (!st) {
          const shuffled = [...ARCHETYPES[archetype].behaviors];
          for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
          }
          st = { list: shuffled, idx: 0 };
          archCursor[archetype] = st;
        }
        const v = st.list[st.idx % st.list.length];
        st.idx++;
        return v;
      };

      return prev.map((sec) => {
        const laid = layoutChildren(sec, canvasWidth, refWidth, sec.hValue, mode);
        return {
          ...sec,
          children: sec.children.map((c) => {
            if (!c.archetype || !ARCHETYPES[c.archetype]) return c;
            const idx = indexById.get(`${sec.id}:${c.id}`);
            const allowed = ARCHETYPES[c.archetype].behaviors;
            let newBehavior;
            if (variedIdxs.has(idx)) {
              if (lvl >= 5) {
                newBehavior = nextSpread(c.archetype);
              } else {
                const others = allowed.filter((b) => b !== c.behavior);
                const pool = others.length > 0 ? others : allowed;
                newBehavior = pool[Math.floor(Math.random() * pool.length)];
              }
            } else {
              newBehavior = ARCHETYPES[c.archetype].defaultBehavior || c.behavior;
            }
            if (newBehavior === c.behavior) return c;

            const lo = laid.find((l) => l.id === c.id);
            const beh = RESPONSIVE_BEHAVIORS[newBehavior];
            const widthPx = lo?.widthPx ?? c.wValue;
            const heightPx = lo?.heightPx ?? c.hValue;
            const wValue =
              beh.widthUnit === 'auto' || beh.widthUnit === 'pct'
                ? widthPx
                : pxToUnit(widthPx, beh.widthUnit, refWidth, canvasWidth);
            const hValue =
              beh.heightUnit === 'auto' || beh.heightUnit === 'pct'
                ? heightPx
                : pxToUnit(heightPx, beh.heightUnit, refWidth, canvasWidth);
            return { ...c, behavior: newBehavior, wValue, hValue };
          })
        };
      });
    });
  }

  // ── Layout Import (V14 prompt → playground) ──────────────────────────────────
  // Accepts a "layout spec" JS/JSON object describing sections + children using
  // px-at-refWidth coordinates. Converts those into the playground's native
  // unit-based element model and replaces the canvas. Supports BULK input —
  // multiple `const LAYOUT_n = ...` declarations in one paste are parsed into
  // a list and presented as a picker.
  const [showImport, setShowImport] = React.useState(false);
  const [importText, setImportText] = React.useState('');
  const [importError, setImportError] = React.useState('');
  const [parsedLayouts, setParsedLayouts] = React.useState(null);
  // ── Persistent Library: survives modal close so the user can swap between
  // imported / saved layouts without re-pasting.
  //
  // Hydrated from two sources on first mount:
  //   (a) BUILTIN_LAYOUTS — hardcoded, ships with the app, always present
  //   (b) localStorage `rm.libraryUserEntries` — session-saved + imported
  //       layouts the user added in previous sessions
  //
  // Each entry carries a flag (`builtin` | `imported` | `saved`) so the
  // panel can group / filter / badge them.
  const [layoutLibrary, setLayoutLibrary] = React.useState(() => {
    const builtins = (BUILTIN_LAYOUTS || []).map((spec, i) => ({
      name: (spec && spec.meta && spec.meta.name) || `Built-in ${String(i + 1).padStart(3, '0')}`,
      declName: null,
      value: spec,
      builtin: true
    }));
    let userEntries = [];
    try {
      const raw = typeof localStorage !== 'undefined'
        ? localStorage.getItem('rm.libraryUserEntries')
        : null;
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          userEntries = parsed
            .filter((e) => e && e.value && e.value.sections)
            .map((e) => ({
              name: e.name || 'Untitled',
              declName: e.declName || null,
              value: e.value,
              saved: !!e.saved,
              imported: !e.saved,
              builtin: false
            }));
        }
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('Failed to read library from localStorage:', err);
    }
    return [...builtins, ...userEntries];
  });
  const [activeLibraryIdx, setActiveLibraryIdx] = React.useState(-1);
  // The most recently applied LAYOUT spec — used by "Save current" so we
  // can snapshot a clean copy of what's on the canvas without reverse-
  // mapping the playground's internal section model.
  const [activeSpec, setActiveSpec] = React.useState(null);
  // Toggles the LibraryPanel modal (grid of thumbnails).
  const [showLibrary, setShowLibrary] = React.useState(false);

  // Persist the non-builtin slice of the library to localStorage so saved
  // and imported entries survive page reloads. Built-ins always come from
  // builtinLayouts.js, never from storage, so they're naturally excluded.
  React.useEffect(() => {
    try {
      const userEntries = layoutLibrary
        .filter((e) => e && !e.builtin)
        .map((e) => ({
          name: e.name,
          declName: e.declName || null,
          value: e.value,
          saved: !!e.saved
        }));
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('rm.libraryUserEntries', JSON.stringify(userEntries));
      }
    } catch (err) {
      // eslint-disable-next-line no-console
      console.warn('Failed to persist library to localStorage:', err);
    }
  }, [layoutLibrary]);

  function parseLayoutText(raw) {
    let t = String(raw || '').trim();
    if (!t) throw new Error('Paste a layout spec first.');
    // Strip an optional outer markdown code fence
    t = t.replace(/^```(?:[a-zA-Z]+)?\s*\n?/, '').replace(/\n?```\s*$/, '').trim();

    // Detect every `const|let|var NAME = ` head, then KEEP ONLY those whose
    // body looks like a layout spec (starts with `{` and contains a top-level
    // `sections:` key). This protects against pasting a whole source file
    // full of unrelated `const` declarations (design tokens, components, ...).
    const declRe = /(?:export\s+)?(?:const|let|var)\s+([A-Za-z_$][\w$]*)\s*=\s*/g;
    const allHeads = [...t.matchAll(declRe)];

    const sliceBody = (i) => {
      const m = allHeads[i];
      const start = m.index + m[0].length;
      const end = i + 1 < allHeads.length ? allHeads[i + 1].index : t.length;
      return t.slice(start, end);
    };

    const looksLikeLayout = (body) => {
      const trimmed = body.replace(/^\s+/, '');
      if (!trimmed.startsWith('{')) return false;
      // Loose check: a top-level layout has a `sections:` key. We don't try
      // to enforce position — `sections:` inside a string literal is rare
      // enough that this is a fine heuristic.
      return /\bsections\s*:/.test(body);
    };

    const candidates = allHeads
      .map((m, i) => ({ head: m, body: sliceBody(i), idx: i }))
      .filter(c => looksLikeLayout(c.body));

    const evalBody = (body) => {
      const stripped = body.replace(/;\s*$/, '').trim();
      // eslint-disable-next-line no-new-func
      return new Function('return (' + stripped + ')')();
    };

    const validateLayout = (v, label) => {
      if (!v || typeof v !== 'object') {
        throw new Error(`${label}: layout must be an object.`);
      }
      if (!Array.isArray(v.sections) || v.sections.length === 0) {
        throw new Error(`${label}: layout must contain a non-empty \`sections\` array.`);
      }
      return v;
    };

    if (candidates.length >= 2) {
      const out = [];
      const errors = [];
      for (const c of candidates) {
        const name = c.head[1];
        try {
          const value = evalBody(c.body);
          validateLayout(value, name);
          out.push({ name: value?.meta?.name || name, declName: name, value });
        } catch (err) {
          errors.push(`${name}: ${err.message}`);
        }
      }
      if (out.length === 0) {
        const shown = errors.slice(0, 5).join('\n');
        const more = errors.length > 5 ? `\n…and ${errors.length - 5} more` : '';
        throw new Error(
          `No valid layouts found across ${candidates.length} candidate declaration(s).\n${shown}${more}`
        );
      }
      if (errors.length > 0) {
        const shown = errors.slice(0, 3).join('\n');
        const more = errors.length > 3 ? `\n…and ${errors.length - 3} more` : '';
        setImportError(`Skipped ${errors.length} invalid layout(s):\n${shown}${more}`);
      } else {
        setImportError('');
      }
      return out;
    }

    if (candidates.length === 1) {
      // Exactly one declaration looks like a layout — single-parse it directly.
      const c = candidates[0];
      const name = c.head[1];
      let value;
      try {
        value = evalBody(c.body);
      } catch (err) {
        throw new Error(`Could not parse \`${name}\`: ${err.message}`);
      }
      validateLayout(value, name);
      return [{ name: value?.meta?.name || name, declName: name, value }];
    }

    // No declaration looked like a layout. Two sub-cases:
    if (allHeads.length >= 2) {
      throw new Error(
        `Found ${allHeads.length} \`const\`/\`let\`/\`var\` declarations but none look like a layout ` +
        `(no \`sections:\` key found inside any of them). Make sure you're pasting LAYOUT spec objects, ` +
        `not source code.`
      );
    }

    // Zero or one head total: fall through to the legacy single-parse path so a
    // raw object literal (no `const` at all) still works.
    t = t.replace(/^(?:export\s+)?(?:const|let|var)\s+[A-Za-z_$][\w$]*\s*=\s*/, '').trim();
    let value;
    try {
      value = evalBody(t);
    } catch (err) {
      throw new Error('Could not parse layout: ' + err.message);
    }
    validateLayout(value, 'Layout');
    return [{ name: value?.meta?.name || 'Layout', declName: null, value }];
  }

  function loadLayoutSpec(spec) {
    const ref = parseInt(spec.meta?.refWidth || refWidth) || refWidth;

    const newSections = spec.sections.map((sec, sIdx) => {
      const behaviorKey = sec.behavior || (mode === 'mesh' ? 'auto' : 'fixedHeight');
      const sb = SECTION_BEHAVIORS[behaviorKey];
      if (!sb) throw new Error(`Section #${sIdx + 1}: unknown behavior "${behaviorKey}".`);
      const layoutKey = sec.layout || 'free';
      if (!GRID_TEMPLATES[layoutKey]) {
        throw new Error(`Section #${sIdx + 1}: unknown grid layout "${layoutKey}".`);
      }
      const sectionHeightPx = Number.isFinite(sec.height) ? sec.height : 480;

      // Pre-pass: assign internal ids and build a map keyed by the spec's
      // user-given id (for resolving `parent`/`anchor` references).
      const idMap = new Map();
      const enriched = (sec.children || []).map((c) => {
        const newId = genId();
        if (c.id) idMap.set(String(c.id), newId);
        return { spec: c, newId };
      });

      const children = enriched.map(({ spec: c, newId }, cIdx) => {
        const archetype = c.archetype;
        if (!ARCHETYPES[archetype]) {
          throw new Error(
            `Section #${sIdx + 1} child #${cIdx + 1}: unknown archetype "${archetype}".`
          );
        }
        const arche = ARCHETYPES[archetype];
        const behKey = c.behavior || arche.defaultBehavior;
        const beh = RESPONSIVE_BEHAVIORS[behKey];
        if (!beh) {
          throw new Error(
            `Section #${sIdx + 1} child #${cIdx + 1}: unknown behavior "${behKey}".`
          );
        }

        const intoCell = c.cell != null && layoutKey !== 'free';
        const parentEl = c.parent ? idMap.get(String(c.parent)) : null;
        if (c.parent && !parentEl) {
          throw new Error(
            `Section #${sIdx + 1} child #${cIdx + 1}: unresolved parent ref "${c.parent}". ` +
            'Parent containers must appear before children in the same section.'
          );
        }

        // Resolve the addressing parent's px box for unit conversion.
        let parentW = ref;
        let parentH = sectionHeightPx;
        if (intoCell) {
          const cellDef = GRID_TEMPLATES[layoutKey].cells[c.cell];
          if (!cellDef) {
            throw new Error(
              `Section #${sIdx + 1} child #${cIdx + 1}: cell index ${c.cell} ` +
              `out of range for layout "${layoutKey}".`
            );
          }
          parentW = cellDef.w * ref;
          parentH = cellDef.h * sectionHeightPx;
        } else if (parentEl) {
          const parentSpec = (sec.children || []).find((p) => String(p.id) === String(c.parent));
          if (parentSpec) {
            parentW = Number.isFinite(parentSpec.w) ? parentSpec.w : ref;
            parentH = Number.isFinite(parentSpec.h) ? parentSpec.h : sectionHeightPx;
          }
        }

        const defaultW = arche.defaultSize.w;
        const defaultH = arche.defaultSize.h;
        const wPx = c.w === 'auto' || !Number.isFinite(c.w) ? defaultW : c.w;
        const hPx = c.h === 'auto' || !Number.isFinite(c.h) ? defaultH : c.h;
        const xPx = Number.isFinite(c.x) ? c.x : 0;
        const yPx = Number.isFinite(c.y) ? c.y : 0;

        const wValue =
          beh.widthUnit === 'auto'
            ? wPx
            : beh.widthUnit === 'pct'
            ? 100
            : pxToUnit(wPx, beh.widthUnit, ref, ref, parentW);
        const hValue =
          beh.heightUnit === 'auto'
            ? hPx
            : beh.heightUnit === 'pct'
            ? 100
            : pxToUnit(hPx, beh.heightUnit, ref, ref, parentH);

        // Margin unit follows the global rule: scaleProportionally → spx,
        // everything else → px. The spec's x/y are treated as design-time
        // pixels at refWidth, so converting at refWidth gives the same
        // numeric value for px and 1× for spx (since canvas == ref here).
        const marginUnit = defaultMarginUnit(behKey);
        const topUnit = marginUnit;
        const leftUnit = marginUnit;
        const topValue = pxToUnit(yPx, topUnit, ref, ref, parentH);
        const leftValue = pxToUnit(xPx, leftUnit, ref, ref, parentW);

        let anchorId = null;
        if (c.anchor) {
          anchorId = idMap.get(String(c.anchor));
          if (!anchorId) {
            throw new Error(
              `Section #${sIdx + 1} child #${cIdx + 1}: unresolved anchor ref "${c.anchor}".`
            );
          }
        }

        // zIndex from spec (accept `z` or `zIndex`); default 0
        const zRaw = c.z ?? c.zIndex ?? 0;
        const zIndex = Number.isFinite(Number(zRaw)) ? Math.round(Number(zRaw)) : 0;

        return {
          id: newId,
          // Preserve the spec's user-given id so anything that derives a
          // stable seed from this element (e.g. image placeholder picker)
          // produces the same result every time the same layout is loaded.
          specId: c.id || null,
          archetype,
          behavior: behKey,
          parentCell: intoCell ? c.cell : null,
          parentEl: parentEl || null,
          anchorId,
          topUnit,
          topValue,
          leftUnit,
          leftValue,
          wValue,
          hValue,
          zIndex,
          props: { ...defaultPropsFor(archetype), ...(c.props || {}) }
        };
      });

      return {
        id: genSecId(),
        behavior: behaviorKey,
        hValue: sb.hUnit === 'auto' ? 0 : sectionHeightPx,
        hUnit: sb.hUnit,
        bottomMargin: Number.isFinite(sec.bottomMargin) ? sec.bottomMargin : 0,
        layout: layoutKey,
        children
      };
    });

    setSections(newSections);
    setSelected(null);
    // Remember the spec we just applied so "Save current" in the library
    // panel can snapshot it without needing to reverse-map sections.
    try {
      setActiveSpec(JSON.parse(JSON.stringify(spec)));
    } catch {
      setActiveSpec(spec);
    }
    if (spec.meta?.mode === 'mesh' || spec.meta?.mode === 'noMesh') {
      setMode(spec.meta.mode);
    }
    if (Number.isFinite(spec.meta?.initialCanvasWidth)) {
      setCanvasWidth(spec.meta.initialCanvasWidth);
    }
  }

  function applyImport() {
    try {
      const list = parseLayoutText(importText);
      // APPEND to the library (instead of replacing) so a user can paste
      // multiple batches and accumulate up to N layouts in one session. The
      // first item of the *new* batch is auto-applied to the canvas.
      const baseLen = layoutLibrary.length;
      const newLibrary = baseLen === 0 ? list : [...layoutLibrary, ...list];
      const firstNewIdx = baseLen; // index of the first appended entry
      setLayoutLibrary(newLibrary);

      if (list.length === 1 && baseLen === 0) {
        // Single-paste, empty library: classic flow — apply and close.
        loadLayoutSpec(list[0].value);
        setActiveLibraryIdx(0);
        setImportError('');
        setShowImport(false);
        setParsedLayouts(null);
        // Clear the textarea so the next "Edit set" reopen starts blank.
        setImportText('');
        return;
      }

      // Bulk OR append onto an existing library: keep modal open, show the
      // FULL accumulated library in the picker. Auto-apply the first newly
      // added entry so the user sees the result immediately.
      setParsedLayouts(newLibrary);
      try {
        loadLayoutSpec(list[0].value);
        setActiveLibraryIdx(firstNewIdx);
      } catch (err) {
        setImportError('Failed to apply "' + list[0].name + '": ' + err.message);
      }
      // Clear textarea so the user can paste another batch on top.
      setImportText('');
    } catch (err) {
      setImportError(err.message || String(err));
    }
  }

  function pickParsedLayout(idx) {
    if (!parsedLayouts || !parsedLayouts[idx]) return;
    try {
      loadLayoutSpec(parsedLayouts[idx].value);
      setActiveLibraryIdx(idx);
      setImportError('');
    } catch (err) {
      setImportError('Failed to apply "' + parsedLayouts[idx].name + '": ' + err.message);
    }
  }

  function pickLibraryLayout(idx) {
    if (!layoutLibrary[idx]) return;
    try {
      loadLayoutSpec(layoutLibrary[idx].value);
      setActiveLibraryIdx(idx);
    } catch (err) {
      // Surface as a one-shot console warning; the strip itself stays usable.
      // eslint-disable-next-line no-console
      console.warn('Failed to apply "' + layoutLibrary[idx].name + '": ' + err.message);
    }
  }

  function clearLibrary() {
    // Drop only session imports; hardcoded built-ins AND user-saved
    // snapshots are preserved (saved entries are intentional, built-ins
    // ship with the app). Use the panel's per-entry delete (future) for
    // finer control.
    setLayoutLibrary((prev) => prev.filter((e) => e && (e.builtin || e.saved)));
    setActiveLibraryIdx(-1);
  }

  // Snapshot the most recently applied layout spec into the library as a
  // "saved" entry. Used by the LibraryPanel's "Save current" button. The
  // canvas's drag/resize edits aren't reverse-mapped — this preserves the
  // last spec that was loaded on the canvas, which is the truthful V14
  // representation. Auto-persisted via the localStorage effect above.
  function saveCurrentLayout() {
    const spec = activeSpec;
    if (!spec || !spec.sections) {
      // eslint-disable-next-line no-console
      console.warn('No active layout to save. Apply or import a layout first.');
      return;
    }
    let cloned;
    try {
      cloned = JSON.parse(JSON.stringify(spec));
    } catch {
      cloned = spec;
    }
    const baseName = (cloned.meta && cloned.meta.name) || 'Layout';
    const stamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const newName = `${baseName} · saved ${stamp}`;
    cloned.meta = { ...(cloned.meta || {}), name: newName };
    const entry = { name: newName, declName: null, value: cloned, saved: true, builtin: false };
    setLayoutLibrary((prev) => {
      const next = [...prev, entry];
      setActiveLibraryIdx(next.length - 1);
      return next;
    });
  }

  function closeImport() {
    setShowImport(false);
    setParsedLayouts(null);
    setImportError('');
  }

  // viewport edge drag
  function startCanvasResize(e) {
    e.preventDefault();
    const startX = e.clientX;
    const startW = canvasWidth;
    const onMove = (ev) => {
      const dx = ev.clientX - startX;
      const next = Math.min(MAX_VIEWPORT, Math.max(MIN_VIEWPORT, startW + dx * 2));
      setCanvasWidth(Math.round(next));
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }

  // selected resolution
  const selectedEl =
    selected?.kind === 'element'
      ? layoutSections
          .find((s) => s.id === selected.secId)
          ?.children.find((c) => c.id === selected.id)
      : null;
  const selectedSec =
    selected?.kind === 'section'
      ? layoutSections.find((s) => s.id === selected.id)
      : null;
  const selectedCell =
    selected?.kind === 'cell'
      ? (() => {
          const sec = layoutSections.find((s) => s.id === selected.secId);
          if (!sec) return null;
          const tpl = sec.layout && sec.layout !== 'free' ? GRID_TEMPLATES[sec.layout] : null;
          const cellDef = tpl?.cells?.[selected.cellIndex];
          if (!cellDef) return null;
          const widthPx = cellDef.w * sec.widthPx;
          const heightPx = cellDef.h * sec.heightPx;
          const itemCount = sec.children.filter((c) => c.parentCell === selected.cellIndex).length;
          return {
            secId: sec.id,
            cellIndex: selected.cellIndex,
            sectionLabel: 'Section',
            layoutLabel: tpl.label,
            widthPx,
            heightPx,
            itemCount
          };
        })()
      : null;

  return (
    <div
      className="rm-root"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: sysFont,
        color: T.text1,
        background: 'linear-gradient(145deg, #eef2f7 0%, #e8edf5 50%, #f0f3f8 100%)'
      }}
    >
      <TopBar
        mode={mode}
        onModeChange={switchMode}
        canvasWidth={canvasWidth}
        onCanvasWidthChange={setCanvasWidth}
        showGridlines={showGridlines}
        onToggleGridlines={() => setShowGridlines((v) => !v)}
        onClear={clearAll}
        onImport={() => { setImportError(''); setParsedLayouts(null); setShowImport(true); }}
        onOpenLibrary={() => setShowLibrary(true)}
        libraryCount={layoutLibrary.length}
        randomIntensity={randomIntensity}
        onRandomIntensityChange={setRandomIntensity}
        onRandomize={() => randomizeBehaviors(randomIntensity)}
        accent={accent}
      />

      {showImport && (
        <ImportLayoutModal
          text={importText}
          error={importError}
          parsedLayouts={parsedLayouts}
          onChange={(v) => { setImportText(v); setParsedLayouts(null); }}
          onApply={applyImport}
          onPick={pickParsedLayout}
          onClose={closeImport}
          accent={accent}
        />
      )}

      {showLibrary && (
        <LibraryPanel
          library={layoutLibrary}
          activeIdx={activeLibraryIdx}
          onPick={(i) => { pickLibraryLayout(i); setShowLibrary(false); }}
          onClose={() => setShowLibrary(false)}
          onSaveCurrent={saveCurrentLayout}
          onClearImports={clearLibrary}
          onOpenImport={() => { setShowLibrary(false); setImportError(''); setParsedLayouts(null); setShowImport(true); }}
          activeSpec={activeSpec}
          accent={accent}
        />
      )}

      <div
        style={{
          flex: 1,
          display: 'grid',
          gridTemplateColumns: '64px 1fr 296px',
          minHeight: 0
        }}
      >
        <WidgetRail
          onDragStart={handleSidebarDragStart}
          onDragEnd={handleSidebarDragEnd}
          accent={accent}
        />

        <CanvasArea
          canvasRef={canvasRef}
          canvasWidth={canvasWidth}
          refWidth={refWidth}
          totalHeight={totalCanvasHeight}
          sections={layoutSections}
          mode={mode}
          showGridlines={showGridlines}
          accent={accent}
          dropTarget={dropTarget}
          selected={selected}
          onSelectSection={(id) => setSelected({ kind: 'section', id })}
          onSelectElement={(secId, id) => setSelected({ kind: 'element', secId, id })}
          onSelectCell={(secId, cellIndex) => setSelected({ kind: 'cell', secId, cellIndex })}
          onClearSelection={() => setSelected(null)}
          onCanvasDragOver={handleCanvasDragOver}
          onCanvasDrop={handleCanvasDrop}
          onCanvasDragLeave={handleCanvasDragLeave}
          onCanvasDragEnter={handleCanvasDragEnter}
          onStartCanvasResize={startCanvasResize}
          onStartSecResize={startSecResize}
          onAddSectionAfter={addSectionAfter}
          onRemoveSection={removeSection}
          onSetSectionLayout={setSectionLayout}
          onMeasureHeight={setMeasuredHeight}
          onUpdateElementProps={updateElementProps}
          onRegisterElementRef={registerElementRef}
          onRegisterCellRef={registerCellRef}
          onRegisterSectionRef={registerSectionRef}
          onMoveableDrag={commitMoveableDrag}
          onMoveableResize={commitMoveableResize}
          onMoveableDragStart={detachAnchorForDrag}
        />

        <PropertiesPanel
          accent={accent}
          mode={mode}
          refWidth={refWidth}
          canvasWidth={canvasWidth}
          selectedEl={selectedEl ? { ...selectedEl, secId: selected?.secId } : null}
          selectedSec={selectedSec}
          selectedCell={selectedCell}
          allSections={layoutSections}
          onChangeBehavior={changeBehavior}
          onUpdateElementProps={updateElementProps}
          onRemoveElement={removeElement}
          onSetSectionLayout={setSectionLayout}
          onSetSectionBehavior={setSectionBehavior}
          onRemoveSection={removeSection}
          onSetZIndex={setElementZIndex}
          onBumpZIndex={bumpElementZIndex}
          onBringToFront={bringElementToFront}
          onSendToBack={sendElementToBack}
          onSetMarginUnit={setMarginUnit}
          onSetMarginValue={setMarginValue}
        />
      </div>
    </div>
  );
}

// ─── Layout pipeline ────────────────────────────────────────────────────────────
function layoutChildren(sec, canvasWidth, refWidth, sectionHeightHint, mode = 'mesh') {
  // Use the live rendered section height when provided so `pct` height
  // ("Stretch") fills the actual section vertically. Fall back to the stored
  // hValue (used during the initial content-min computation pass).
  const sectionHeight =
    sectionHeightHint && sectionHeightHint > 0
      ? sectionHeightHint
      : unitToPx(sec.hValue, sec.hUnit, refWidth, canvasWidth, canvasWidth);
  const tpl = sec.layout && sec.layout !== 'free' ? GRID_TEMPLATES[sec.layout] : null;
  // In No-Mesh mode, anchors are ignored: every element docks to the top-left
  // of its parent (section / cell / container) using its raw left/top values
  // as margins from that corner. This is the "Element auto docks" behaviour
  // — mixing px and spx margins naturally lets neighbours overlap as the
  // canvas scales, simulating real-world page rendering.
  const useMesh = mode === 'mesh';

  const free = sec.children.filter((c) => c.parentCell == null && !c.parentEl);
  const cellChildren = sec.children.filter((c) => c.parentCell != null && !c.parentEl);
  const containerChildren = sec.children.filter((c) => !!c.parentEl);

  const byId = {};
  const out = [];

  for (const c of free) {
    const beh = RESPONSIVE_BEHAVIORS[c.behavior];
    const widthPx =
      beh.widthUnit === 'auto'
        ? c.wValue
        : beh.widthUnit === 'pct'
        ? canvasWidth
        : unitToPx(c.wValue, beh.widthUnit, refWidth, canvasWidth, canvasWidth);
    const heightPx =
      beh.heightUnit === 'auto'
        ? c.hValue
        : beh.heightUnit === 'pct'
        ? sectionHeight > 0
          ? sectionHeight
          : c.hValue
        : unitToPx(c.hValue, beh.heightUnit, refWidth, canvasWidth, canvasWidth);
    const leftPx = unitToPx(c.leftValue, c.leftUnit, refWidth, canvasWidth, canvasWidth);
    const topOffset = unitToPx(c.topValue, c.topUnit, refWidth, canvasWidth, canvasWidth);
    const anchor = useMesh && c.anchorId ? byId[c.anchorId] : null;
    const topPx = anchor ? anchor.topPx + anchor.heightPx + topOffset : topOffset;
    // Free children are positioned in section coordinates, so their
    // section-absolute coords equal their leftPx/topPx.
    const computed = {
      ...c,
      leftPx,
      topPx,
      widthPx,
      heightPx,
      absLeftPx: leftPx,
      absTopPx: topPx,
      cellRect: null
    };
    byId[c.id] = computed;
    out.push(computed);
  }

  if (tpl?.cells) {
    // Cell children may be defer-listed if their anchor isn't laid out yet
    // (anchor inside the same cell). Loop with retries.
    let pendingCell = [...cellChildren];
    let safetyC = 12;
    while (pendingCell.length > 0 && safetyC-- > 0) {
      const next = [];
      for (const c of pendingCell) {
        const cellDef = tpl.cells[c.parentCell];
        if (!cellDef) continue;
        // If anchored, we need the anchor to already be laid out and to be
        // a sibling in the same cell. Anchors that point outside the cell
        // are ignored (the offset falls back to cell-top).
        if (useMesh && c.anchorId && !byId[c.anchorId]) {
          next.push(c);
          continue;
        }
        const cellW = cellDef.w * canvasWidth;
        const cellH = cellDef.h * sectionHeight;
        const beh = RESPONSIVE_BEHAVIORS[c.behavior];
        const widthPx =
          beh.widthUnit === 'auto'
            ? c.wValue
            : beh.widthUnit === 'pct'
            ? cellW
            : unitToPx(c.wValue, beh.widthUnit, refWidth, canvasWidth, cellW);
        const heightPx =
          beh.heightUnit === 'auto'
            ? c.hValue
            : beh.heightUnit === 'pct'
            ? cellH
            : unitToPx(c.hValue, beh.heightUnit, refWidth, canvasWidth, cellH);
        const leftPx =
          cellDef.x * canvasWidth +
          unitToPx(c.leftValue, c.leftUnit, refWidth, canvasWidth, cellW);
        const topOffset = unitToPx(c.topValue, c.topUnit, refWidth, canvasWidth, cellH);
        // Mesh anchoring within the same cell: anchor must be a sibling of
        // the same parentCell so they share coordinate space. In No-Mesh
        // mode the anchor is ignored — the element docks to the cell's
        // top-left with raw top/left as margins.
        const anchor =
          useMesh &&
          c.anchorId &&
          byId[c.anchorId] &&
          byId[c.anchorId].parentCell === c.parentCell
            ? byId[c.anchorId]
            : null;
        const topPx = anchor
          ? anchor.topPx + anchor.heightPx + topOffset
          : cellDef.y * sectionHeight + topOffset;
        const computed = {
          ...c,
          leftPx,
          topPx,
          widthPx,
          heightPx,
          absLeftPx: leftPx,
          absTopPx: topPx,
          cellRect: { x: cellDef.x * canvasWidth, y: cellDef.y * sectionHeight, w: cellW, h: cellH }
        };
        byId[c.id] = computed;
        out.push(computed);
      }
      pendingCell = next;
    }
  }

  // Container children — leftPx/topPx are RELATIVE to the parent (the
  // child is rendered as a DOM descendant of the container). absLeftPx/
  // absTopPx are the section-absolute coordinates, used for the selection
  // overlay, drop hit-testing, and any other code that needs canvas-space.
  // Loop with retries to support nested containers AND mesh anchoring
  // inside containers (a child's anchor must be laid out first).
  let pending = [...containerChildren];
  let safety = 12;
  while (pending.length > 0 && safety-- > 0) {
    const next = [];
    for (const c of pending) {
      const parentLaid = byId[c.parentEl];
      if (!parentLaid) {
        next.push(c);
        continue;
      }
      // Defer if the anchor is a sibling in the same container that
      // hasn't been laid out yet. In No-Mesh mode anchors are ignored
      // entirely, so don't defer based on anchor availability.
      if (useMesh && c.anchorId && !byId[c.anchorId]) {
        next.push(c);
        continue;
      }
      const beh = RESPONSIVE_BEHAVIORS[c.behavior];
      const widthPx =
        beh.widthUnit === 'auto'
          ? c.wValue
          : beh.widthUnit === 'pct'
          ? parentLaid.widthPx
          : unitToPx(c.wValue, beh.widthUnit, refWidth, canvasWidth, parentLaid.widthPx);
      const heightPx =
        beh.heightUnit === 'auto'
          ? c.hValue
          : beh.heightUnit === 'pct'
          ? parentLaid.heightPx
          : unitToPx(c.hValue, beh.heightUnit, refWidth, canvasWidth, parentLaid.heightPx);
      const relLeftPx = unitToPx(c.leftValue, c.leftUnit, refWidth, canvasWidth, parentLaid.widthPx);
      const topOffset = unitToPx(c.topValue, c.topUnit, refWidth, canvasWidth, parentLaid.heightPx);
      // Mesh inside the container: anchor must be a sibling with the same
      // parentEl. Both topPx are container-relative so the offset adds
      // straight onto the anchor's bottom. In No-Mesh mode the anchor is
      // ignored — the child docks to the container's top-left with raw
      // top/left as margins from that corner.
      const anchor =
        useMesh &&
        c.anchorId &&
        byId[c.anchorId] &&
        byId[c.anchorId].parentEl === c.parentEl
          ? byId[c.anchorId]
          : null;
      const relTopPx = anchor
        ? anchor.topPx + anchor.heightPx + topOffset
        : topOffset;
      const absLeftPx = parentLaid.absLeftPx + relLeftPx;
      const absTopPx = parentLaid.absTopPx + relTopPx;
      const computed = {
        ...c,
        leftPx: relLeftPx,
        topPx: relTopPx,
        widthPx,
        heightPx,
        absLeftPx,
        absTopPx,
        cellRect: null
      };
      byId[c.id] = computed;
      out.push(computed);
    }
    pending = next;
  }

  // Auto-height containers grow to enclose their parented children. We do
  // this AFTER the main layout pass so child positions are settled, then
  // re-iterate (deepest first via reverse order) to let nested containers
  // bubble their grown height up. A small bottom padding mirrors the
  // section's content-min behaviour.
  const PAD = 16;
  let bubble = true;
  let bubbleSafety = 6;
  while (bubble && bubbleSafety-- > 0) {
    bubble = false;
    for (let i = out.length - 1; i >= 0; i--) {
      const cont = out[i];
      if (cont.archetype !== 'container') continue;
      const cBeh = RESPONSIVE_BEHAVIORS[cont.behavior];
      if (cBeh.heightUnit !== 'auto') continue;
      let maxBottom = 0;
      for (const child of out) {
        if (child.parentEl !== cont.id) continue;
        const b = (child.topPx || 0) + (child.heightPx || 0);
        if (b > maxBottom) maxBottom = b;
      }
      const newH = maxBottom > 0 ? maxBottom + PAD : Math.max(cont.heightPx || 0, 80);
      if (Math.abs((cont.heightPx || 0) - newH) > 0.5) {
        cont.heightPx = newH;
        // Cascade: any descendant whose `parentEl` chain leads through this
        // container does not need re-positioning (their relative positions
        // are unchanged), but the container's own absolute height changed.
        bubble = true;
      }
    }
  }

  return out;
}

function computeContentMinHeight(sec, canvasWidth, refWidth, mode = 'mesh') {
  const laid = layoutChildren(sec, canvasWidth, refWidth, sec.hValue, mode);
  let max = 0;
  for (const c of laid) {
    // Use section-absolute coords because parented children's leftPx/topPx
    // are now relative to their own container.
    const top = c.absTopPx ?? c.topPx;
    const bottom = top + c.heightPx;
    if (bottom > max) max = bottom;
  }
  return max + (max > 0 ? 32 : 0);
}

// findAnchorAbove searches a list of laid-out elements for the lowest
// element above `top` that horizontally overlaps the dragged box.
//
// `scope` constrains which elements are eligible:
//   { kind: 'free' }                — top-level free children only
//   { kind: 'container', id }       — siblings inside container `id`
//   { kind: 'cell', cell }          — siblings inside cell index `cell`
// `top`/`left` are interpreted in the SAME coordinate space as the
// children being searched (container-relative for container scope, etc.).
function findAnchorAbove(layout, top, left, width, scope = { kind: 'free' }) {
  let best = null;
  for (const el of layout) {
    if (el.id == null) continue;
    if (scope.kind === 'free') {
      if (el.parentEl || el.parentCell != null) continue;
    } else if (scope.kind === 'container') {
      if (el.parentEl !== scope.id) continue;
    } else if (scope.kind === 'cell') {
      if (el.parentCell !== scope.cell || el.parentEl) continue;
    }
    const elTop =
      scope.kind === 'free'
        ? (el.absTopPx ?? el.topPx)
        : el.topPx; // container/cell scope uses local coords
    const elLeft =
      scope.kind === 'free'
        ? (el.absLeftPx ?? el.leftPx)
        : el.leftPx;
    const elBottom = elTop + el.heightPx;
    if (elBottom > top) continue;
    const overlaps = elLeft < left + width && elLeft + el.widthPx > left;
    if (!overlaps) continue;
    const bestBottom = best
      ? (scope.kind === 'free' ? (best.absTopPx ?? best.topPx) : best.topPx) + best.heightPx
      : -Infinity;
    if (!best || elBottom > bestBottom) best = el;
  }
  return best;
}

// ─── UI primitives (text-combination port) ─────────────────────────────────────
function Lbl({ children }) {
  return (
    <span style={{
      fontSize: 9, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
      color: T.text4, display: 'block', marginBottom: 4
    }}>{children}</span>
  );
}

function Field({ label, children, w }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: w ? `0 0 ${w}px` : 1, minWidth: 0 }}>
      {label && <Lbl>{label}</Lbl>}
      {children}
    </div>
  );
}

function Row({ children }) {
  return (
    <div style={{ display: 'flex', gap: 7, marginBottom: 8, alignItems: 'flex-end' }}>
      {children}
    </div>
  );
}

function Sep() {
  return <div style={{ height: 1, background: T.border, margin: '10px 0' }} />;
}

function NumIn({ val, onChange, min = 0, max = 9999 }) {
  return (
    <input
      type="number" value={val} min={min} max={max}
      onChange={(e) => onChange(+e.target.value)}
      style={{ ...ctrlBase, MozAppearance: 'textfield' }}
    />
  );
}

function TxtIn({ val, onChange, multiline }) {
  if (multiline) {
    return (
      <textarea
        value={val}
        rows={3}
        onChange={(e) => onChange(e.target.value)}
        style={{ ...ctrlBase, height: 'auto', minHeight: 64, padding: '6px 8px', resize: 'vertical' }}
      />
    );
  }
  return (
    <input type="text" value={val} onChange={(e) => onChange(e.target.value)} style={ctrlBase} />
  );
}

function ColorField({ val, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 5 }}>
      <input
        type="color"
        value={/^#[0-9a-fA-F]{6}$/.test(val) ? val : '#000000'}
        onChange={(e) => onChange(e.target.value)}
        style={{
          width: 28, height: 28, border: `1px solid ${T.ctrlBorder}`, borderRadius: 7,
          padding: 2, cursor: 'pointer', background: T.ctrl, flexShrink: 0,
          boxSizing: 'border-box', transition: `all 300ms ${EASE.out}`
        }}
      />
      <input
        type="text" value={val} onChange={(e) => onChange(e.target.value)}
        style={{ ...ctrlBase, fontFamily: "'SF Mono','Fira Code',monospace", fontSize: 10 }}
      />
    </div>
  );
}

function Sw({ val, onChange }) {
  return (
    <button
      onClick={() => onChange(!val)}
      style={{
        position: 'relative', width: 36, height: 20, cursor: 'pointer', flexShrink: 0,
        background: 'none', border: 'none', padding: 0
      }}
    >
      <div style={{
        position: 'absolute', inset: 0,
        background: val ? T.accentGrad : '#cbd5e1',
        borderRadius: 99,
        transition: `background 400ms ${EASE.out}, box-shadow 500ms ${EASE.spring}`,
        boxShadow: val
          ? '0 2px 10px rgba(59,130,246,0.35), inset 0 1px 1px rgba(255,255,255,0.15)'
          : 'inset 0 1px 2px rgba(0,0,0,0.06)',
        willChange: 'background, box-shadow'
      }} />
      <div style={{
        position: 'absolute', top: 2, left: 2,
        width: 16, height: 16, background: '#fff', borderRadius: '50%',
        transform: `translateX(${val ? 16 : 0}px) scale(${val ? 1 : 0.92})`,
        transition: `transform 450ms ${EASE.spring}, box-shadow 400ms ${EASE.out}`,
        boxShadow: val
          ? '0 1px 4px rgba(0,0,0,0.15), 0 0 0 0.5px rgba(0,0,0,0.04)'
          : '0 1px 3px rgba(0,0,0,0.2), 0 0 0 0.5px rgba(0,0,0,0.06)',
        willChange: 'transform'
      }} />
    </button>
  );
}

function TRow({ label, val, onChange }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      height: 28, marginBottom: 2
    }}>
      <span style={{ fontSize: 11, color: T.text2 }}>{label}</span>
      <Sw val={val} onChange={onChange} />
    </div>
  );
}

function Sub({ show, children }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: show ? '1fr' : '0fr',
      transition: `grid-template-rows 350ms ${EASE.out}`
    }}>
      <div style={{ overflow: 'hidden' }}>
        <div style={{
          background: 'rgba(255,255,255,0.35)',
          border: `1px solid ${T.border}`, borderRadius: 8, padding: 10, marginTop: 6,
          opacity: show ? 1 : 0, transition: `opacity 300ms ${EASE.out}`
        }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function Sel({ val, onChange, opts }) {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [rect, setRect] = React.useState(null);
  const trigRef = React.useRef(null);
  const menuRef = React.useRef(null);

  React.useEffect(() => {
    if (open) setMounted(true);
    else { const t = setTimeout(() => setMounted(false), 200); return () => clearTimeout(t); }
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (trigRef.current?.contains(e.target) || menuRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    const onScroll = (e) => { if (menuRef.current?.contains(e.target)) return; setOpen(false); };
    document.addEventListener('mousedown', onDown);
    window.addEventListener('scroll', onScroll, true);
    return () => {
      document.removeEventListener('mousedown', onDown);
      window.removeEventListener('scroll', onScroll, true);
    };
  }, [open]);

  const toggle = () => {
    if (open) { setOpen(false); return; }
    if (!trigRef.current) return;
    setRect(trigRef.current.getBoundingClientRect());
    setOpen(true);
  };

  const pick = (v) => { onChange(v); setOpen(false); };

  const label = (() => {
    for (const o of opts) {
      if (String(o.v) === String(val)) return o.l;
    }
    return val;
  })();

  const chevron = (
    <svg width={8} height={5} viewBox="0 0 8 5" fill="none" style={{
      flexShrink: 0, marginLeft: 4,
      transition: `transform 300ms ${EASE.out}`,
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
    }}>
      <path d="M0.5 0.5L4 4.5L7.5 0.5" stroke={T.text3} strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const optBtn = (item, isActive) => (
    <button
      key={item.v}
      onClick={() => pick(item.v)}
      style={{
        width: '100%', padding: '6px 10px', textAlign: 'left',
        background: isActive ? T.accentSoft : 'transparent',
        border: 'none', borderRadius: 6, cursor: 'pointer',
        color: isActive ? T.accent : T.text1,
        fontWeight: isActive ? 500 : 400,
        fontSize: 11, fontFamily: 'inherit',
        transition: `all 300ms ${EASE.out}`, display: 'block'
      }}
      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.background = 'rgba(0,0,0,0.03)'; }}
      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
    >{item.l}</button>
  );

  const spaceBelow = rect ? window.innerHeight - rect.bottom - 8 : 300;
  const openUp = spaceBelow < 180 && (rect?.top || 0) > spaceBelow;

  return (
    <div style={{ position: 'relative', width: '100%' }}>
      <button
        ref={trigRef}
        onClick={toggle}
        style={{
          ...ctrlBase, display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          cursor: 'pointer', textAlign: 'left', padding: '0 8px',
          borderColor: open ? T.accent : T.ctrlBorder,
          boxShadow: open ? T.accentGlow : 'none'
        }}
      >
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', flex: 1 }}>{label}</span>
        {chevron}
      </button>
      {mounted && createPortal(
        <div
          ref={menuRef}
          style={{
            position: 'fixed',
            left: rect?.left || 0,
            width: rect?.width || 0,
            ...(openUp
              ? { bottom: rect ? window.innerHeight - rect.top + 4 : 0 }
              : { top: rect ? rect.bottom + 4 : 0 }),
            background: 'rgba(255,255,255,0.94)',
            backdropFilter: 'blur(20px) saturate(160%)',
            WebkitBackdropFilter: 'blur(20px) saturate(160%)',
            border: `1px solid ${T.glassBorder}`,
            borderRadius: 10,
            boxShadow: '0 8px 40px rgba(0,0,0,0.10), 0 2px 8px rgba(0,0,0,0.04)',
            zIndex: 9999,
            maxHeight: Math.min(openUp ? (rect?.top || 300) - 12 : spaceBelow, 260),
            overflowY: 'auto',
            padding: 4,
            opacity: open ? 1 : 0,
            transform: open ? 'none' : `translateY(${openUp ? '4px' : '-4px'})`,
            pointerEvents: open ? 'auto' : 'none',
            transition: `opacity 300ms ${EASE.out}, transform 300ms ${EASE.out}`,
            fontFamily: sysFont, fontSize: 11
          }}
        >
          {opts.map((o) => optBtn(o, String(val) === String(o.v)))}
        </div>,
        document.body
      )}
    </div>
  );
}

function Acc({ open, onToggle, num, title, children }) {
  return (
    <div style={{ borderBottom: `1px solid ${T.border}` }}>
      <button
        onClick={(e) => onToggle(e)}
        style={{
          display: 'flex', alignItems: 'center', padding: '0 14px', height: 38,
          cursor: 'pointer', userSelect: 'none', width: '100%', textAlign: 'left',
          background: 'none', border: 'none', fontFamily: 'inherit',
          transition: `background 350ms ${EASE.out}`
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = T.accentSoft)}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        <span style={{
          fontSize: 9, fontWeight: 700, letterSpacing: '0.06em',
          color: open ? T.accent : T.text4, width: 18, marginRight: 8,
          transition: `color 400ms ${EASE.out}`
        }}>{num}</span>
        <span style={{
          fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase',
          color: open ? T.text1 : T.text3, flex: 1,
          transition: `color 400ms ${EASE.out}`
        }}>{title}</span>
        <svg
          width={10} height={6} viewBox="0 0 10 6" fill="none"
          stroke={open ? T.accent : T.text4} strokeWidth={1.5}
          style={{
            transition: `transform 500ms ${EASE.spring}, stroke 400ms ${EASE.out}`,
            transform: open ? 'rotate(0deg)' : 'rotate(-90deg)', flexShrink: 0
          }}
        >
          <path d="M1 1l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <div style={{
        display: 'grid',
        gridTemplateRows: open ? '1fr' : '0fr',
        transition: `grid-template-rows 450ms ${EASE.out}`
      }}>
        <div style={{ overflow: 'hidden' }}>
          <div style={{
            padding: '10px 14px 14px',
            opacity: open ? 1 : 0,
            transform: open ? 'translateY(0)' : 'translateY(-6px)',
            transition: `opacity 350ms ${EASE.out} ${open ? '80ms' : '0ms'}, transform 450ms ${EASE.spring} ${open ? '40ms' : '0ms'}`
          }}>{children}</div>
        </div>
      </div>
    </div>
  );
}

function TBtn({ onClick, dark, icon, children, title }) {
  return (
    <button
      onClick={onClick}
      title={title}
      style={{
        display: 'flex', alignItems: 'center', gap: 5, height: 28, padding: '0 12px',
        background: dark ? T.accent : 'rgba(255,255,255,0.50)',
        border: dark ? 'none' : `1px solid ${T.ctrlBorder}`,
        borderRadius: 8, color: dark ? '#fff' : T.text2,
        fontSize: 11, fontWeight: 500, cursor: 'pointer', fontFamily: 'inherit',
        letterSpacing: '0.01em', whiteSpace: 'nowrap',
        transition: `all 300ms ${EASE.out}`,
        boxShadow: dark ? '0 2px 10px rgba(59,130,246,0.3)' : 'none'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-1px)';
        e.currentTarget.style.boxShadow = dark
          ? '0 4px 16px rgba(59,130,246,0.4)'
          : '0 2px 10px rgba(0,0,0,0.06)';
        if (!dark) e.currentTarget.style.background = T.ctrlHover;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.boxShadow = dark ? '0 2px 10px rgba(59,130,246,0.3)' : 'none';
        if (!dark) e.currentTarget.style.background = 'rgba(255,255,255,0.50)';
      }}
      onMouseDown={(e) => { e.currentTarget.style.transform = 'translateY(0) scale(0.97)'; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = 'translateY(-1px)'; }}
    >
      {icon}
      {children}
    </button>
  );
}

function Slider({ min, max, step = 1, value, onChange, suffix }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
      <input
        type="range" min={min} max={max} step={step} value={value}
        onChange={(e) => onChange(+e.target.value)}
        style={{
          flex: 1, height: 3, appearance: 'none', WebkitAppearance: 'none',
          background: T.ctrlBorder, borderRadius: 2, outline: 'none', cursor: 'pointer'
        }}
      />
      <span style={{
        fontSize: 10, color: T.text3, minWidth: 44, textAlign: 'right',
        fontVariantNumeric: 'tabular-nums'
      }}>
        {value}{suffix || ''}
      </span>
    </div>
  );
}

function Segmented({ value, onChange, options }) {
  return (
    <div style={{
      display: 'flex', borderRadius: 7, overflow: 'hidden',
      border: `1px solid ${T.ctrlBorder}`,
      background: 'rgba(255,255,255,0.4)'
    }}>
      {options.map((opt) => {
        const active = String(opt.v) === String(value);
        return (
          <button
            key={opt.v}
            onClick={() => onChange(opt.v)}
            style={{
              flex: 1, padding: '5px 12px',
              fontSize: 9, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase',
              background: active ? T.accent : 'transparent',
              color: active ? '#fff' : T.text3,
              border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              transition: `all 300ms ${EASE.out}`,
              boxShadow: active ? '0 2px 8px rgba(59,130,246,0.30)' : 'none'
            }}
          >
            {opt.l}
          </button>
        );
      })}
    </div>
  );
}

function PillRow({ value, onChange, options, accent }) {
  return (
    <div style={{ display: 'flex', gap: 4, flexWrap: 'wrap' }}>
      {options.map((p) => {
        const active = String(p.v) === String(value);
        return (
          <button
            key={p.v}
            onClick={() => onChange(p.v)}
            style={{
              height: 24, padding: '0 10px',
              background: active ? accent || T.accent : 'rgba(255,255,255,0.45)',
              border: active ? 'none' : `1px solid ${T.ctrlBorder}`,
              borderRadius: 12, color: active ? '#fff' : T.text2,
              fontSize: 10, fontWeight: 500, fontFamily: 'inherit', cursor: 'pointer',
              transition: `all 300ms ${EASE.spring}`,
              boxShadow: active ? '0 2px 8px rgba(59,130,246,0.3)' : 'none',
              transform: active ? 'scale(1.03)' : 'scale(1)',
              whiteSpace: 'nowrap'
            }}
          >
            {p.l}
          </button>
        );
      })}
    </div>
  );
}


// ─── TopBar ─────────────────────────────────────────────────────────────────────
function TopBar({
  mode,
  onModeChange,
  canvasWidth,
  onCanvasWidthChange,
  showGridlines,
  onToggleGridlines,
  onClear,
  onImport,
  onOpenLibrary,
  libraryCount,
  randomIntensity,
  onRandomIntensityChange,
  onRandomize,
  accent
}) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        height: 64,
        padding: '0 18px',
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        background: T.glassStrong,
        backdropFilter: T.blur,
        WebkitBackdropFilter: T.blur,
        borderBottom: `1px solid ${T.border}`,
        boxShadow: '0 1px 3px rgba(0,0,0,0.02)'
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: T.text1
        }}
      >
        Responsive Mesh
      </div>
      <div
        style={{
          fontSize: 9,
          fontWeight: 600,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          padding: '4px 8px',
          borderRadius: 6,
          background: T.accentSoft,
          color: accent
        }}
      >
        Playground
      </div>

      <div style={{ flex: 1 }} />

      <div style={{ width: 180 }}>
        <Segmented
          value={mode}
          onChange={onModeChange}
          options={[
            { v: 'mesh', l: 'Mesh' },
            { v: 'noMesh', l: 'No Mesh' }
          ]}
        />
      </div>

      <div style={{ width: 1, height: 24, background: T.border2 }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <PillRow
          value={canvasWidth}
          onChange={onCanvasWidthChange}
          accent={accent}
          options={PRESETS.map((p) => ({ v: p.width, l: p.label }))}
        />
        <div style={{ width: 200 }}>
          <Slider
            min={MIN_VIEWPORT}
            max={MAX_VIEWPORT}
            step={1}
            value={canvasWidth}
            onChange={onCanvasWidthChange}
            suffix="px"
          />
        </div>
      </div>

      <div style={{ width: 1, height: 24, background: T.border2 }} />

      <TBtn onClick={onToggleGridlines} dark={showGridlines}>
        {showGridlines ? 'Hide Gridlines' : 'Show Gridlines'}
      </TBtn>
      <TBtn onClick={onOpenLibrary} dark>
        Library{typeof libraryCount === 'number' ? ` (${libraryCount})` : ''}
      </TBtn>
      <TBtn onClick={onImport}>Import</TBtn>

      <div style={{ width: 1, height: 24, background: T.border2 }} />

      <div
        title="Randomize responsive behaviors across all elements on stage. Mix slider controls how varied the result is."
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '4px 8px 4px 10px',
          height: 32,
          background: 'rgba(255,255,255,0.45)',
          border: `1px solid ${T.ctrlBorder}`,
          borderRadius: 10,
          boxShadow: T.inner
        }}
      >
        <span
          style={{
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            color: T.text3
          }}
        >
          Mix
        </span>
        <div style={{ width: 96 }}>
          <Slider
            min={1}
            max={5}
            step={1}
            value={randomIntensity}
            onChange={onRandomIntensityChange}
            suffix="/5"
          />
        </div>
        <TBtn onClick={onRandomize} dark>
          Randomize
        </TBtn>
      </div>

      <TBtn onClick={onClear}>Reset</TBtn>
    </div>
  );
}

// ─── Layout Thumbnail ───────────────────────────────────────────────────────
// Renders a miniature preview of a V14 LAYOUT spec without instantiating the
// full playground render pipeline. Children are placed using their absolute
// positions resolved from `parent` / `anchor` chains, then scaled down by
// `width / refWidth`. Each archetype gets a deliberately abstract treatment
// (text → stacked bars, image → gradient block, button → filled pill,
// container → outlined frame) so the silhouette of the layout is what the
// user perceives — not the literal text content.

function resolveSpecAbsolutes(section) {
  // Walk children in order; build a lookup by spec id so later children can
  // resolve `parent` / `anchor` references to already-positioned siblings.
  const byId = {};
  const out = [];
  const kids = Array.isArray(section.children) ? section.children : [];
  for (let i = 0; i < kids.length; i++) {
    const c = kids[i] || {};
    const w = Math.max(1, +c.w || 1);
    const h = Math.max(1, +c.h || 1);
    let left = +c.x || 0;
    let top = +c.y || 0;
    if (c.parent && byId[c.parent]) {
      const p = byId[c.parent];
      left = p.left + (+c.x || 0);
      top = p.top + (+c.y || 0);
    } else if (c.anchor && byId[c.anchor]) {
      const a = byId[c.anchor];
      // V14 convention: y is the gap below anchor.bottom, x is absolute.
      top = a.top + a.height + (+c.y || 0);
      left = +c.x || 0;
    }
    const item = {
      archetype: c.archetype,
      props: c.props || {},
      id: c.id || null,
      left, top, width: w, height: h
    };
    out.push(item);
    if (c.id) byId[c.id] = item;
  }
  return out;
}

function ThumbItem({ item, scale }) {
  const { archetype, props = {}, left, top, width, height } = item;
  const baseStyle = {
    position: 'absolute',
    left: left * scale,
    top: top * scale,
    width: Math.max(1, width * scale),
    height: Math.max(1, height * scale),
    pointerEvents: 'none'
  };

  if (archetype === 'image') {
    // Same placeholder pool as the canvas, so a thumbnail visually
    // matches what the layout will render once loaded.
    const seed = (props.src || item.id || `${left}.${top}.${width}.${height}`);
    const src = pickPlaceholder(seed);
    return (
      <div style={{ ...baseStyle, overflow: 'hidden', borderRadius: 2, background: '#f4f4f5' }}>
        <img
          src={src}
          alt=""
          draggable={false}
          loading="lazy"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: props.objectPosition || 'center',
            display: 'block'
          }}
        />
      </div>
    );
  }

  if (archetype === 'button') {
    const primary = props.variant !== 'ghost' && props.variant !== 'secondary';
    const radius = props.radius != null
      ? Math.min((+props.radius || 0) * scale, baseStyle.height / 2)
      : Math.min(baseStyle.height / 2, 4);
    return (
      <div style={{
        ...baseStyle,
        background: primary ? '#0f172a' : 'transparent',
        border: primary ? 'none' : '1px solid #0f172a',
        borderRadius: radius,
        opacity: 0.92
      }} />
    );
  }

  if (archetype === 'container') {
    const bg = props.background && props.background !== 'transparent'
      ? props.background : 'transparent';
    const bc = props.borderColor && props.borderColor !== 'transparent'
      ? props.borderColor : 'rgba(15,23,42,0.10)';
    return (
      <div style={{
        ...baseStyle,
        background: bg,
        border: `1px solid ${bc}`,
        borderRadius: props.borderRadius != null
          ? Math.max(0, (+props.borderRadius || 0) * scale)
          : 2
      }} />
    );
  }

  // text → stacked bars approximating wrapped lines
  const fontSize = +props.fontSize || 14;
  const lh = parseFloat(props.lineHeight) || 1.45;
  const lineBoxPx = fontSize * lh;
  const lines = Math.max(1, Math.round(height / lineBoxPx));
  const isHeading = fontSize >= 28;
  const isEyebrow = fontSize <= 12 && (props.letterSpacing || '').toString().includes('em');
  const barColor = isHeading ? '#0f172a' : (isEyebrow ? '#a1a1aa' : '#52525b');
  const barOpacity = isHeading ? 0.88 : (isEyebrow ? 0.55 : 0.42);
  const barH = Math.max(1, fontSize * 0.50 * scale);
  const gap = Math.max(1, (lineBoxPx - fontSize * 0.50) * scale);
  const align = props.textAlign === 'center' ? 'center'
    : props.textAlign === 'right' ? 'flex-end' : 'flex-start';

  return (
    <div style={{ ...baseStyle, display: 'flex', flexDirection: 'column', alignItems: align }}>
      {Array.from({ length: lines }).map((_, j) => {
        const isLastShort = lines > 1 && j === lines - 1;
        return (
          <div key={j} style={{
            height: barH,
            marginTop: j === 0 ? 0 : gap,
            background: barColor,
            opacity: barOpacity,
            width: isLastShort ? '62%' : '100%',
            borderRadius: 1
          }} />
        );
      })}
    </div>
  );
}

function LayoutThumbnail({ spec, width = 260 }) {
  if (!spec || !Array.isArray(spec.sections) || spec.sections.length === 0) {
    return (
      <div style={{
        width, height: Math.round(width * 9 / 16),
        background: '#fafafa',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        color: '#a1a1aa', fontSize: 10, letterSpacing: '0.08em'
      }}>
        — empty —
      </div>
    );
  }
  const refW = (spec.meta && +spec.meta.refWidth) || 1280;
  const scale = width / refW;
  // Stack sections vertically, summing their heights.
  let cursor = 0;
  const rects = spec.sections.map((s) => {
    const h = Math.max(80, +s.height || 720);
    const r = { y: cursor, h };
    cursor += h;
    return r;
  });
  const totalH = cursor;
  const height = Math.max(40, Math.round(totalH * scale));

  return (
    <div style={{
      width, height,
      position: 'relative',
      background: '#fafafa',
      borderRadius: 6,
      overflow: 'hidden'
    }}>
      {spec.sections.map((sec, i) => {
        const rect = rects[i];
        const items = resolveSpecAbsolutes(sec);
        return (
          <div key={i} style={{
            position: 'absolute',
            left: 0, top: rect.y * scale,
            width: '100%',
            height: rect.h * scale,
            overflow: 'hidden',
            background: i % 2 === 1 ? '#f4f4f5' : '#fafafa'
          }}>
            {items.map((it, j) => (<ThumbItem key={j} item={it} scale={scale} />))}
          </div>
        );
      })}
    </div>
  );
}

// ─── Library Panel ──────────────────────────────────────────────────────────
// Modal grid of layout thumbnails with filters and a Save button. Replaces
// the older horizontal pill strip — gives the user a real visual index they
// can scan before loading anything onto the canvas.

function FilterPill({ value, current, onClick, accent, children }) {
  const active = value === current;
  return (
    <button
      onClick={() => onClick(value)}
      style={{
        padding: '5px 10px',
        borderRadius: 999,
        fontSize: 10,
        fontWeight: 500,
        background: active ? T.text1 : '#fff',
        color: active ? '#fff' : T.text2,
        border: `1px solid ${active ? T.text1 : T.border2}`,
        cursor: 'pointer',
        fontFamily: sysFont,
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap'
      }}
    >
      {children}
    </button>
  );
}

function LibraryTile({ entry, index, isActive, onClick, accent }) {
  const [hover, setHover] = React.useState(false);
  const cat = entry.value?.meta?.category || '';
  const origin = entry.saved ? 'saved' : entry.builtin ? 'builtin' : 'imported';
  const badge = entry.saved ? 'Saved' : entry.builtin ? 'Built-in' : 'Imported';
  const badgeColor = origin === 'saved' ? '#16a34a' : origin === 'builtin' ? '#71717A' : accent;
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: 0,
        border: `1px solid ${isActive ? accent : (hover ? T.text3 : T.border2)}`,
        borderRadius: 10,
        background: '#fff',
        cursor: 'pointer',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'border-color 120ms ease, transform 160ms cubic-bezier(.2,.8,.2,1), box-shadow 160ms ease',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: isActive
          ? `0 0 0 2px ${accent}33, 0 6px 16px rgba(15,23,42,0.06)`
          : (hover ? '0 6px 16px rgba(15,23,42,0.08)' : '0 1px 2px rgba(15,23,42,0.03)'),
        fontFamily: sysFont
      }}
      title={entry.name + (cat ? ` · ${cat}` : '') + ` · ${badge.toLowerCase()}`}
    >
      <div style={{
        width: '100%',
        aspectRatio: '16 / 10',
        background: '#fafafa',
        borderBottom: `1px solid ${T.border}`,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
      }}>
        <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
          <LayoutThumbnail spec={entry.value} width={260} />
        </div>
      </div>
      <div style={{ padding: '10px 12px', display: 'flex', flexDirection: 'column', gap: 6 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            fontSize: 10,
            fontWeight: 600,
            color: T.text3,
            opacity: 0.6,
            fontFamily: "'SF Mono','Fira Code',monospace",
            flexShrink: 0
          }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span style={{
            fontSize: 12,
            fontWeight: 500,
            color: T.text1,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            flex: 1
          }}>
            {entry.name}
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {cat && (
            <span style={{
              fontSize: 9,
              color: T.text3,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              fontWeight: 500
            }}>{cat}</span>
          )}
          <span style={{ flex: 1 }} />
          <span style={{
            fontSize: 9,
            fontWeight: 600,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            padding: '2px 6px',
            borderRadius: 4,
            color: badgeColor,
            background: `${badgeColor}10`,
            border: `1px solid ${badgeColor}30`
          }}>{badge}</span>
        </div>
      </div>
    </button>
  );
}

function LibraryPanel({
  library, activeIdx, onPick, onClose, onSaveCurrent, onClearImports,
  onOpenImport, activeSpec, accent
}) {
  const [filter, setFilter] = React.useState('all');
  const [query, setQuery] = React.useState('');

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const builtinCount = library.filter((e) => e && e.builtin).length;
  const savedCount = library.filter((e) => e && e.saved).length;
  const importedCount = library.length - builtinCount - savedCount;

  const filtered = library
    .map((e, i) => ({ e, i }))
    .filter(({ e }) => {
      if (!e) return false;
      if (filter === 'builtin' && !e.builtin) return false;
      if (filter === 'imported' && (e.builtin || e.saved)) return false;
      if (filter === 'saved' && !e.saved) return false;
      if (query) {
        const hay = `${e.name || ''} ${e.value?.meta?.category || ''}`.toLowerCase();
        if (!hay.includes(query.trim().toLowerCase())) return false;
      }
      return true;
    });

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(15,23,42,0.40)',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 24
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(1320px, calc(100vw - 48px))',
          height: 'min(840px, calc(100vh - 48px))',
          background: '#fff',
          borderRadius: 14,
          boxShadow: '0 24px 64px rgba(15,23,42,0.20)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          fontFamily: sysFont
        }}
      >
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '14px 18px',
          borderBottom: `1px solid ${T.border}`,
          flexWrap: 'wrap'
        }}>
          <div style={{ fontSize: 14, fontWeight: 600, color: T.text1 }}>Layout Library</div>
          <div style={{ fontSize: 11, color: T.text3 }}>{library.length} layouts</div>

          <div style={{ flex: 1, minWidth: 12 }} />

          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or category…"
            style={{
              padding: '6px 10px',
              borderRadius: 6,
              border: `1px solid ${T.border2}`,
              fontSize: 12,
              fontFamily: sysFont,
              outline: 'none',
              width: 220,
              color: T.text1,
              background: '#fff'
            }}
          />

          <div style={{ display: 'flex', gap: 4 }}>
            <FilterPill value="all" current={filter} onClick={setFilter} accent={accent}>
              All · {library.length}
            </FilterPill>
            <FilterPill value="builtin" current={filter} onClick={setFilter} accent={accent}>
              Built-in · {builtinCount}
            </FilterPill>
            {importedCount > 0 && (
              <FilterPill value="imported" current={filter} onClick={setFilter} accent={accent}>
                Imported · {importedCount}
              </FilterPill>
            )}
            {savedCount > 0 && (
              <FilterPill value="saved" current={filter} onClick={setFilter} accent={accent}>
                Saved · {savedCount}
              </FilterPill>
            )}
          </div>

          <div style={{ width: 1, height: 22, background: T.border2 }} />

          <button
            onClick={onSaveCurrent}
            disabled={!activeSpec}
            title={activeSpec ? 'Save the current canvas spec to the library' : 'Apply or import a layout first to enable Save'}
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 500,
              background: activeSpec ? accent : '#e4e4e7',
              color: activeSpec ? '#fff' : '#a1a1aa',
              border: 'none',
              cursor: activeSpec ? 'pointer' : 'not-allowed',
              fontFamily: sysFont,
              letterSpacing: '0.02em'
            }}
          >
            Save current
          </button>
          <button
            onClick={onOpenImport}
            title="Open paste-import modal"
            style={{
              padding: '6px 12px',
              borderRadius: 6,
              fontSize: 11,
              fontWeight: 500,
              background: '#fff',
              color: T.text2,
              border: `1px solid ${T.border2}`,
              cursor: 'pointer',
              fontFamily: sysFont
            }}
          >
            Import…
          </button>
          {importedCount > 0 && (
            <button
              onClick={onClearImports}
              title="Remove session imports (built-ins and saved entries are kept)"
              style={{
                padding: '6px 12px',
                borderRadius: 6,
                fontSize: 11,
                fontWeight: 500,
                background: '#fff',
                color: T.text3,
                border: `1px solid ${T.border2}`,
                cursor: 'pointer',
                fontFamily: sysFont
              }}
            >
              Clear imports
            </button>
          )}
          <button
            onClick={onClose}
            title="Close"
            aria-label="Close"
            style={{
              width: 28, height: 28, borderRadius: 6,
              background: '#fff',
              color: T.text3,
              border: `1px solid ${T.border2}`,
              cursor: 'pointer',
              fontSize: 14, lineHeight: 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >×</button>
        </div>

        {/* Grid */}
        <div style={{
          flex: 1,
          overflowY: 'auto',
          overflowX: 'hidden',
          padding: 18,
          background: '#fbfbfc'
        }}>
          {filtered.length === 0 ? (
            <div style={{
              padding: 60,
              textAlign: 'center',
              color: T.text3,
              fontSize: 12,
              letterSpacing: '0.04em'
            }}>
              No layouts match the current filter.
            </div>
          ) : (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
              gap: 16
            }}>
              {filtered.map(({ e, i }) => (
                <LibraryTile
                  key={i}
                  entry={e}
                  index={i}
                  isActive={i === activeIdx}
                  onClick={() => onPick(i)}
                  accent={accent}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div style={{
          padding: '10px 18px',
          borderTop: `1px solid ${T.border}`,
          fontSize: 10,
          color: T.text3,
          letterSpacing: '0.04em',
          display: 'flex',
          alignItems: 'center',
          gap: 12
        }}>
          <span>Esc to close · Click any tile to load it on the canvas</span>
          <span style={{ flex: 1 }} />
          <span>Saved + imported entries persist via localStorage</span>
        </div>
      </div>
    </div>,
    document.body
  );
}

// ─── Import Layout Modal ────────────────────────────────────────────────────────
function ImportLayoutModal({
  text, error, parsedLayouts, onChange, onApply, onPick, onClose, accent
}) {
  const [activeIdx, setActiveIdx] = React.useState(0);
  React.useEffect(() => {
    if (parsedLayouts && parsedLayouts.length > 0) setActiveIdx(0);
  }, [parsedLayouts]);

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) onApply();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose, onApply]);

  const isBulk = parsedLayouts && parsedLayouts.length >= 2;

  const node = (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 1000,
        background: 'rgba(15,23,42,0.32)',
        backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, fontFamily: sysFont
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(820px, 100%)', maxHeight: '88vh',
          display: 'flex', flexDirection: 'column',
          background: '#fff', borderRadius: 16,
          border: `1px solid ${T.border2}`,
          boxShadow: '0 24px 80px rgba(15,23,42,0.18), 0 4px 16px rgba(15,23,42,0.06)',
          overflow: 'hidden'
        }}
      >
        <div style={{
          padding: '16px 20px', borderBottom: `1px solid ${T.border}`,
          display: 'flex', alignItems: 'center', gap: 10
        }}>
          <div style={{ fontSize: 13, fontWeight: 600, color: T.text1 }}>Import Layout</div>
          <div style={{
            fontSize: 9, fontWeight: 600, letterSpacing: '0.10em', textTransform: 'uppercase',
            padding: '3px 7px', borderRadius: 5, background: T.accentSoft, color: accent
          }}>V14 Spec</div>
          <div style={{ flex: 1 }} />
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              width: 28, height: 28, border: 'none', background: 'transparent',
              cursor: 'pointer', color: T.text3, fontSize: 18, lineHeight: 1
            }}
          >×</button>
        </div>

        <div style={{ padding: '14px 20px 0', fontSize: 11, color: T.text2, lineHeight: 1.55 }}>
          {isBulk ? (
            <span>
              Library: <b>{parsedLayouts.length}</b> layouts — click any tile to load it on the canvas.
              Paste another batch in the textarea below and click <b>Apply Layout</b> to <b>append</b>
              it to the library (× on the strip clears).
            </span>
          ) : (
            <span>
              Paste a layout spec object — or <b>multiple</b> <code style={{ fontFamily: "'SF Mono',monospace", fontSize: 10 }}>const LAYOUT_n = …</code> blocks
              for bulk testing. New pastes <b>append</b> to the existing library. Coordinates are <b>px at refWidth</b> and convert to spx / px / vw / pct / auto per element behavior.
              Markdown fences and leading declarations are stripped automatically.
            </span>
          )}
        </div>

        <div style={{ padding: 16, flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {isBulk && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
              gap: 8,
              maxHeight: 280,
              overflow: 'auto',
              padding: 4
            }}>
              {parsedLayouts.map((entry, i) => {
                const isActive = i === activeIdx;
                const cat = entry.value?.meta?.category || '—';
                return (
                  <button
                    key={i}
                    onClick={() => { setActiveIdx(i); onPick(i); }}
                    style={{
                      textAlign: 'left',
                      padding: '10px 12px',
                      borderRadius: 10,
                      border: `1px solid ${isActive ? accent : T.border2}`,
                      background: isActive ? T.accentSoft : '#fafbfc',
                      cursor: 'pointer',
                      display: 'flex', flexDirection: 'column', gap: 4,
                      transition: 'all 120ms ease',
                      fontFamily: sysFont
                    }}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'baseline', gap: 6,
                      fontSize: 9, fontWeight: 600, letterSpacing: '0.08em',
                      textTransform: 'uppercase', color: isActive ? accent : T.text3
                    }}>
                      <span>#{String(i + 1).padStart(2, '0')}</span>
                      <span style={{ opacity: 0.7 }}>· {cat}</span>
                    </div>
                    <div style={{
                      fontSize: 12, fontWeight: 500, color: T.text1,
                      lineHeight: 1.3,
                      overflow: 'hidden', textOverflow: 'ellipsis',
                      display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'
                    }}>
                      {entry.name}
                    </div>
                    {entry.declName && entry.declName !== entry.name && (
                      <div style={{
                        fontSize: 10, color: T.text3,
                        fontFamily: "'SF Mono','Fira Code',monospace"
                      }}>
                        {entry.declName}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>
          )}

          <textarea
            value={text}
            onChange={(e) => onChange(e.target.value)}
            spellCheck={false}
            placeholder={`{
  meta: { name: 'Hero Marketing', refWidth: 1280, mode: 'mesh' },
  sections: [
    {
      behavior: 'fixedHeight',
      height: 720,
      layout: 'free',
      children: [
        { id: 'h1', archetype: 'text', behavior: 'scaleProportionally',
          x: 80, y: 120, w: 720, h: 140,
          props: { text: 'Build with intent', fontSize: 64, fontWeight: '500' } },
        { archetype: 'button', behavior: 'fixed', anchor: 'h1',
          x: 80, y: 32, w: 160, h: 44,
          props: { label: 'Get started', variant: 'primary' } }
      ]
    }
  ]
}`}
            style={{
              flex: 1, minHeight: isBulk ? 120 : 320, width: '100%',
              fontFamily: "'SF Mono','Fira Code','JetBrains Mono',monospace",
              fontSize: 12, lineHeight: 1.5, color: T.text1,
              padding: 14, border: `1px solid ${T.border2}`,
              borderRadius: 10, outline: 'none', resize: 'vertical',
              background: '#fafbfc', boxSizing: 'border-box'
            }}
          />
          {error && (
            <div style={{
              padding: '8px 12px',
              background: 'rgba(220,38,38,0.06)', border: '1px solid rgba(220,38,38,0.18)',
              borderRadius: 8, color: T.danger, fontSize: 11, lineHeight: 1.5,
              fontFamily: "'SF Mono','Fira Code',monospace",
              whiteSpace: 'pre-wrap', maxHeight: 120, overflow: 'auto'
            }}>
              {error}
            </div>
          )}
        </div>

        <div style={{
          padding: '12px 16px', borderTop: `1px solid ${T.border}`,
          display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'flex-end'
        }}>
          <span style={{ fontSize: 10, color: T.text3, marginRight: 'auto' }}>
            {isBulk
              ? `${parsedLayouts.length} layouts · click a tile to load · Esc to close`
              : '⌘/Ctrl + Enter to apply · Esc to close'}
          </span>
          <TBtn onClick={onClose}>{isBulk ? 'Done' : 'Cancel'}</TBtn>
          {!isBulk && <TBtn onClick={onApply} dark>Apply Layout</TBtn>}
          {isBulk && <TBtn onClick={onApply} dark>Re-parse</TBtn>}
        </div>
      </div>
    </div>
  );
  return typeof document !== 'undefined' ? createPortal(node, document.body) : node;
}

// ─── Widget rail ────────────────────────────────────────────────────────────────
function WidgetRail({ onDragStart, onDragEnd, accent }) {
  const entries = Object.entries(WIDGETS);
  return (
    <aside
      style={{
        borderRight: `1px solid ${T.border}`,
        background: '#fafaf9',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '14px 0',
        gap: 8,
        minHeight: 0,
        overflow: 'auto'
      }}
    >
      {entries.map(([key, w]) => (
        <RailTile
          key={key}
          widgetKey={key}
          widget={w}
          accent={accent}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        />
      ))}
    </aside>
  );
}

function RailTile({ widgetKey, widget, accent, onDragStart, onDragEnd }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      draggable
      onDragStart={onDragStart(widgetKey)}
      onDragEnd={onDragEnd}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      title={`Drag to add ${widget.label}`}
      style={{
        cursor: 'grab',
        width: 44,
        height: 44,
        borderRadius: 10,
        background: hover ? '#fff' : 'transparent',
        border: `1px solid ${hover ? T.border2 : 'transparent'}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        transition: `all 200ms ${EASE.out}`,
        userSelect: 'none',
        boxShadow: hover ? '0 2px 8px rgba(0,0,0,0.06)' : 'none',
        color: hover ? accent : T.text2
      }}
    >
      <Icon name={widget.icon} size={22} stroke={hover ? accent : T.text1} />
      <div
        style={{
          fontSize: 8,
          fontWeight: 600,
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          color: hover ? accent : T.text3
        }}
      >
        {widget.label}
      </div>
    </div>
  );
}

// ─── Canvas ─────────────────────────────────────────────────────────────────────
// ─── Interact.js controller (drag + resize on the selected element) ────────────
//
// We attach an interact() instance to the live DOM node of the selected element.
// During a gesture we mutate the target's transform/size directly (no React
// re-renders, no stale rect issues) and only commit to React state at the end
// via the same onMoveableDrag / onMoveableResize callbacks used before.
//
// Visual handles are rendered as a separate sibling overlay positioned exactly
// on top of the element (read from el.{leftPx,topPx,widthPx,heightPx}). The
// overlay re-positions whenever those coords change, so the handles never go
// stale.
function MoveableController({ sec, el, accent, onMoveableDrag, onMoveableResize, onMoveableDragStart }) {
  const overlayRef = React.useRef(null);

  const beh = RESPONSIVE_BEHAVIORS[el.behavior];
  const lockHeight = beh.heightUnit === 'auto';
  const lockWidth = beh.widthUnit === 'pct' || beh.widthUnit === 'auto';
  const canResize = !lockHeight || !lockWidth;

  // Latest props are kept in a ref so long-lived listeners always read fresh
  // values without needing to re-attach on every layout re-render.
  const latest = React.useRef({ el, sec, onMoveableDrag, onMoveableResize, onMoveableDragStart });
  latest.current = { el, sec, onMoveableDrag, onMoveableResize, onMoveableDragStart };

  // ── Body drag (plain pointer events, attached once per selection) ──
  React.useEffect(() => {
    const target = document.querySelector(`[data-rm-element="${el.id}"]`);
    if (!target) return undefined;

    const onPointerDown = (ev) => {
      if (ev.button !== 0) return;
      // Skip when the user grabs a resize handle, contenteditable, or a child
      // that opted out (e.g., the section toolbar buttons).
      const t = ev.target;
      if (t && t.closest && (t.closest('[data-rm-handle]') || t.closest('[contenteditable="true"]') || t.closest('[data-no-drag]'))) {
        return;
      }
      ev.preventDefault();

      const startX = ev.clientX;
      const startY = ev.clientY;
      const e0 = latest.current.el;
      const baseLeft = e0.leftPx;
      const baseTop = e0.topPx;
      const pointerId = ev.pointerId;
      let lastDx = 0;
      let lastDy = 0;
      let moved = false;

      // Container children are now real DOM descendants of the container,
      // so a CSS transform on the container automatically translates them
      // along with it — no per-descendant bookkeeping needed.
      try { target.setPointerCapture(pointerId); } catch (_) { /* noop */ }
      target.style.willChange = 'transform';

      const onMove = (mv) => {
        if (mv.pointerId !== pointerId) return;
        lastDx = mv.clientX - startX;
        lastDy = mv.clientY - startY;
        if (!moved && Math.abs(lastDx) + Math.abs(lastDy) < 2) return;
        if (!moved) {
          // First confirmed movement → notify host so it can detach the
          // dragged element from any mesh anchor (and any element anchored
          // TO this one). The visual position is preserved by converting to
          // an absolute topValue. This means the drag preview never has to
          // fight a re-layout cascade and the drop never "snaps back" to a
          // re-anchored origin different from where the cursor released.
          const { sec: s0, el: ee0, onMoveableDragStart: dscb } = latest.current;
          if (dscb) dscb(s0.id, ee0.id);
        }
        moved = true;
        const t = `translate(${lastDx}px, ${lastDy}px)`;
        target.style.transform = t;
        const overlay = overlayRef.current;
        if (overlay) overlay.style.transform = t;
      };

      const detachListeners = () => {
        target.removeEventListener('pointermove', onMove);
        target.removeEventListener('pointerup', onUp);
        target.removeEventListener('pointercancel', onUp);
        try { target.releasePointerCapture(pointerId); } catch (_) { /* noop */ }
      };
      const clearTransientStyles = () => {
        target.style.transform = '';
        target.style.willChange = '';
        const overlay = overlayRef.current;
        if (overlay) overlay.style.transform = '';
      };

      const onUp = (up) => {
        if (up.pointerId !== pointerId) return;
        detachListeners();
        if (!moved) {
          clearTransientStyles();
          return;
        }
        const { sec: s0, el: ee0, onMoveableDrag: cb } = latest.current;
        // Commit new position. React owns left/top via JSX style; the
        // commit will update them. Then we clear our transient transform —
        // React's render leaves transform alone (we never put it in JSX),
        // so clearing it is safe and necessary to remove our preview.
        cb(s0.id, ee0.id, baseLeft + lastDx, baseTop + lastDy);
        clearTransientStyles();
      };

      target.addEventListener('pointermove', onMove);
      target.addEventListener('pointerup', onUp);
      target.addEventListener('pointercancel', onUp);
    };

    target.addEventListener('pointerdown', onPointerDown);
    return () => target.removeEventListener('pointerdown', onPointerDown);
  }, [el.id]);

  // ── Resize gesture started on a handle ──
  // Bound fresh on each render, but only via React's onPointerDown (no
  // attached listeners outlive a render). All long-lived state during the
  // gesture lives inside the closure below.
  const onHandleDown = React.useCallback(
    (edges) => (ev) => {
      if (ev.button !== 0) return;
      ev.preventDefault();
      ev.stopPropagation();

      const target = document.querySelector(`[data-rm-element="${latest.current.el.id}"]`);
      if (!target) return;

      const handleEl = ev.currentTarget;
      const pointerId = ev.pointerId;
      const startX = ev.clientX;
      const startY = ev.clientY;
      const e0 = latest.current.el;
      const baseLeft = e0.leftPx;
      const baseTop = e0.topPx;
      const baseW = e0.widthPx;
      const baseH = e0.heightPx;
      // Read the latest behavior — beh in the outer closure is captured at
      // first render and may be stale if the user changed the responsive
      // package. For auto-height behaviors (wrap, hug, cellFit), the gesture
      // must NOT lock the DOM height: we let the box auto-grow vertically
      // as the content (text) re-wraps under the new width, and we mirror
      // that real height onto the selection overlay.
      const currentBeh = RESPONSIVE_BEHAVIORS[e0.behavior];
      const isAutoHeight = currentBeh.heightUnit === 'auto';
      let lastDx = 0;
      let lastDy = 0;
      let moved = false;

      try { handleEl.setPointerCapture(pointerId); } catch (_) { /* noop */ }
      target.style.willChange = isAutoHeight ? 'width, transform' : 'width, height, transform';

      const apply = () => {
        const r = computeResize(edges, baseLeft, baseTop, baseW, baseH, lastDx, lastDy);
        target.style.width = `${r.w}px`;
        if (isAutoHeight) {
          // Clear any inline height so the element keeps `height: auto`
          // from JSX styles and reflows naturally as the text wraps.
          target.style.height = '';
        } else {
          target.style.height = `${r.h}px`;
        }
        const transform = r.tx || r.ty ? `translate(${r.tx}px, ${r.ty}px)` : '';
        target.style.transform = transform;
        const overlay = overlayRef.current;
        if (overlay) {
          overlay.style.width = `${r.w}px`;
          // Reading offsetHeight forces a synchronous layout pass — by then
          // the new width has been applied above and the text has re-wrapped,
          // so the value reflects the true content height.
          overlay.style.height = isAutoHeight ? `${target.offsetHeight}px` : `${r.h}px`;
          overlay.style.transform = transform;
        }
        return r;
      };

      const onMove = (mv) => {
        if (mv.pointerId !== pointerId) return;
        lastDx = mv.clientX - startX;
        lastDy = mv.clientY - startY;
        if (!moved && Math.abs(lastDx) + Math.abs(lastDy) < 2) return;
        moved = true;
        apply();
      };

      const detachListeners = () => {
        handleEl.removeEventListener('pointermove', onMove);
        handleEl.removeEventListener('pointerup', onUp);
        handleEl.removeEventListener('pointercancel', onUp);
        try { handleEl.releasePointerCapture(pointerId); } catch (_) { /* noop */ }
      };

      // React owns the JSX style props (width/height/left/top), so its
      // reconciler will reset them to the freshly-committed state on the
      // next render. We must NOT clear those manually here, because doing
      // so after queuing setState (React 18 batches) leaves the DOM in a
      // half-updated state — React's fiber will end up matching what it
      // applied, but our manual wipe afterwards can drop the just-applied
      // value if React renders synchronously in some scheduling paths.
      // We only clear what React does NOT manage: transform + willChange.
      const clearTransientStyles = () => {
        target.style.transform = '';
        target.style.willChange = '';
        const overlay = overlayRef.current;
        if (overlay) overlay.style.transform = '';
      };

      const onUp = (up) => {
        if (up.pointerId !== pointerId) return;
        detachListeners();
        if (!moved) {
          // Nothing changed — wipe our preview styles entirely so the DOM
          // matches React's last-known props (no committed change).
          target.style.width = '';
          target.style.height = '';
          if (overlayRef.current) {
            overlayRef.current.style.width = '';
            overlayRef.current.style.height = '';
          }
          clearTransientStyles();
          return;
        }
        const r = computeResize(edges, baseLeft, baseTop, baseW, baseH, lastDx, lastDy);
        const { sec: s0, el: ee0, onMoveableResize: cb } = latest.current;
        // For auto-height elements, commit the real (post-wrap) content
        // height so the overlay snaps to the new bounding box on the next
        // render instead of waiting for ResizeObserver to catch up.
        const finalH = isAutoHeight ? target.offsetHeight : r.h;
        cb(s0.id, ee0.id, r.left, r.top, r.w, finalH);
        // Only clear transform/willChange. React owns width/height and will
        // overwrite our gesture-set values with the new committed ones on
        // its next render.
        clearTransientStyles();
      };

      handleEl.addEventListener('pointermove', onMove);
      handleEl.addEventListener('pointerup', onUp);
      handleEl.addEventListener('pointercancel', onUp);
    },
    []
  );

  // Build visible handles.
  const HSIZE = 10;
  const off = HSIZE / 2;
  const handles = [];
  const dot = (key, edges, extra, cursor) => (
    <div
      key={key}
      data-rm-handle
      onPointerDown={onHandleDown(edges)}
      style={{
        position: 'absolute',
        width: HSIZE,
        height: HSIZE,
        background: '#fff',
        border: `2px solid ${accent}`,
        borderRadius: '50%',
        boxSizing: 'border-box',
        pointerEvents: 'auto',
        boxShadow: '0 1px 3px rgba(0,0,0,0.18)',
        cursor,
        touchAction: 'none',
        ...extra
      }}
    />
  );

  if (canResize) {
    if (!lockWidth && !lockHeight) {
      handles.push(dot('nw', ['top', 'left'], { left: -off, top: -off }, 'nwse-resize'));
      handles.push(dot('ne', ['top', 'right'], { right: -off, top: -off }, 'nesw-resize'));
      handles.push(dot('sw', ['bottom', 'left'], { left: -off, bottom: -off }, 'nesw-resize'));
      handles.push(dot('se', ['bottom', 'right'], { right: -off, bottom: -off }, 'nwse-resize'));
    }
    if (!lockWidth) {
      handles.push(dot('w', ['left'], { left: -off, top: '50%', marginTop: -off }, 'ew-resize'));
      handles.push(dot('e', ['right'], { right: -off, top: '50%', marginTop: -off }, 'ew-resize'));
    }
    if (!lockHeight) {
      handles.push(dot('n', ['top'], { top: -off, left: '50%', marginLeft: -off }, 'ns-resize'));
      handles.push(dot('s', ['bottom'], { bottom: -off, left: '50%', marginLeft: -off }, 'ns-resize'));
    }
  }

  // The selection overlay is rendered as a sibling of all sections inside
  // the canvas wrapper, so it needs canvas-absolute coordinates. For
  // free/cell-anchored children leftPx/topPx ARE section-absolute; for
  // children parented to a container they're relative-to-parent. We use
  // absLeftPx/absTopPx (always section-absolute) and add the section offset
  // to land in canvas-absolute space.
  const absLeft = el.absLeftPx ?? el.leftPx;
  const absTop = (sec.topPx || 0) + (el.absTopPx ?? el.topPx);

  return (
    <div
      ref={overlayRef}
      data-rm-overlay
      style={{
        position: 'absolute',
        left: absLeft,
        top: absTop,
        width: el.widthPx,
        height: el.heightPx,
        pointerEvents: 'none',
        zIndex: 10,
        outline: `1.5px solid ${accent}`,
        outlineOffset: 0,
        boxSizing: 'border-box'
      }}
    >
      {handles}
    </div>
  );
}

// Compute the new rect for a resize gesture given the active edges + cursor delta.
function computeResize(edges, baseLeft, baseTop, baseW, baseH, dx, dy) {
  const MIN = 20;
  let left = baseLeft;
  let top = baseTop;
  let w = baseW;
  let h = baseH;
  if (edges.includes('right')) w = Math.max(MIN, baseW + dx);
  if (edges.includes('bottom')) h = Math.max(MIN, baseH + dy);
  if (edges.includes('left')) {
    w = Math.max(MIN, baseW - dx);
    left = baseLeft + (baseW - w);
  }
  if (edges.includes('top')) {
    h = Math.max(MIN, baseH - dy);
    top = baseTop + (baseH - h);
  }
  // tx/ty are visual-only translates relative to baseLeft/baseTop for live preview
  const tx = left - baseLeft;
  const ty = top - baseTop;
  return { left, top, w, h, tx, ty };
}

function CanvasArea({
  canvasRef,
  canvasWidth,
  refWidth,
  totalHeight,
  sections,
  mode,
  showGridlines,
  accent,
  dropTarget,
  selected,
  onSelectSection,
  onSelectElement,
  onSelectCell,
  onClearSelection,
  onCanvasDragOver,
  onCanvasDrop,
  onCanvasDragLeave,
  onCanvasDragEnter,
  onStartCanvasResize,
  onStartSecResize,
  onAddSectionAfter,
  onRemoveSection,
  onSetSectionLayout,
  onUpdateElementProps,
  onMeasureHeight,
  onRegisterElementRef,
  onRegisterCellRef,
  onRegisterSectionRef,
  onMoveableDrag,
  onMoveableResize,
  onMoveableDragStart
}) {
  // Resolve currently-selected element target + bounds + snap guidelines
  // CanvasArea is fed `layoutSections` from the parent, so `sections` here
  // already contains laid-out children with leftPx/topPx/widthPx/heightPx.
  // `sections` here is the parent's layoutSections (already laid out with
  // leftPx/topPx/widthPx/heightPx and section-absolute absLeftPx/absTopPx),
  // so we can pass the laid-out element straight to MoveableController.
  const moveable = React.useMemo(() => {
    if (selected?.kind !== 'element') return null;
    const sec = sections.find((s) => s.id === selected.secId);
    const el = sec?.children.find((c) => c.id === selected.id);
    if (!sec || !el) return null;
    return { sec, el };
  }, [selected, sections]);

  return (
    <main
      style={{
        padding: 32,
        overflow: 'auto',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '100%',
          marginBottom: 12,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          fontSize: 9,
          fontWeight: 600,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: T.text3
        }}
      >
        <span>Canvas</span>
        <span style={{ color: accent }}>· {canvasWidth}px</span>
        <span>· Mode: {mode === 'mesh' ? 'Mesh' : 'No Mesh'}</span>
        <span style={{ flex: 1 }} />
        <span>{sections.length} sections</span>
      </div>

      <div
        style={{
          position: 'relative',
          width: canvasWidth
        }}
      >
        <div
          ref={canvasRef}
          onDragEnter={onCanvasDragEnter}
          onDragOver={onCanvasDragOver}
          onDrop={onCanvasDrop}
          onDragLeave={onCanvasDragLeave}
          onClick={onClearSelection}
          style={{
            position: 'relative',
            width: '100%',
            height: totalHeight,
            background: '#ffffff',
            border: `1px solid ${T.border}`,
            borderRadius: 12,
            boxShadow: T.shadow,
            overflow: 'visible'
          }}
        >
          {sections.map((sec, idx) => (
            <SectionView
              key={sec.id}
              sec={sec}
              index={idx}
              isLast={idx === sections.length - 1}
              canRemove={sections.length > 1}
              mode={mode}
              showGridlines={showGridlines}
              accent={accent}
              canvasWidth={canvasWidth}
              refWidth={refWidth}
              dropTarget={dropTarget}
              selected={selected}
              onSelectSection={onSelectSection}
              onSelectElement={onSelectElement}
              onSelectCell={onSelectCell}
              onStartSecResize={onStartSecResize}
              onAddSectionAfter={onAddSectionAfter}
              onRemoveSection={onRemoveSection}
              onSetSectionLayout={onSetSectionLayout}
              onUpdateElementProps={onUpdateElementProps}
              onMeasureHeight={onMeasureHeight}
              onRegisterElementRef={onRegisterElementRef}
              onRegisterCellRef={onRegisterCellRef}
              onRegisterSectionRef={onRegisterSectionRef}
            />
          ))}

          {moveable && (
            <MoveableController
              key={moveable.el.id}
              sec={moveable.sec}
              el={moveable.el}
              accent={accent}
              onMoveableDrag={onMoveableDrag}
              onMoveableResize={onMoveableResize}
              onMoveableDragStart={onMoveableDragStart}
            />
          )}
        </div>

        <button
          aria-label="Drag to resize canvas width"
          onMouseDown={onStartCanvasResize}
          style={{
            position: 'absolute',
            top: '50%',
            right: -16,
            transform: 'translateY(-50%)',
            width: 6,
            height: 64,
            borderRadius: 999,
            border: 'none',
            cursor: 'ew-resize',
            background: T.border2,
            transition: `background 240ms ${EASE.out}`
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = accent)}
          onMouseLeave={(e) => (e.currentTarget.style.background = T.border2)}
        />
      </div>

      <div style={{ height: 32 }} />
    </main>
  );
}

// ─── Section ────────────────────────────────────────────────────────────────────
function SectionView({
  sec,
  index,
  isLast,
  canRemove,
  mode,
  showGridlines,
  accent,
  canvasWidth,
  refWidth,
  dropTarget,
  selected,
  onSelectSection,
  onSelectElement,
  onSelectCell,
  onStartSecResize,
  onAddSectionAfter,
  onRemoveSection,
  onSetSectionLayout,
  onUpdateElementProps,
  onMeasureHeight,
  onRegisterElementRef,
  onRegisterCellRef,
  onRegisterSectionRef
}) {
  const [hover, setHover] = React.useState(false);
  const [hoverBottom, setHoverBottom] = React.useState(false);
  const tpl = sec.layout && sec.layout !== 'free' ? GRID_TEMPLATES[sec.layout] : null;
  const isSelected = selected?.kind === 'section' && selected.id === sec.id;
  const dropOnSection = dropTarget?.sectionId === sec.id;
  const active = isSelected || hover;

  const sectionRefSetter = React.useCallback((node) => {
    onRegisterSectionRef && onRegisterSectionRef(sec.id, node);
  }, [onRegisterSectionRef, sec.id]);

  React.useEffect(() => {
    return () => onRegisterSectionRef && onRegisterSectionRef(sec.id, null);
  }, [onRegisterSectionRef, sec.id]);

  return (
    <div
      ref={sectionRefSetter}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'absolute',
        left: 0,
        top: sec.topPx,
        width: sec.widthPx,
        height: sec.heightPx,
        // Clip to the section's box so children that extend past it
        // (negative coords / x+w > section width / y+h > section height)
        // are masked at the edge instead of bleeding into adjacent
        // sections or beyond the canvas — matches real-site behavior.
        overflow: 'hidden',
        background: isSelected
          ? 'rgba(59,130,246,0.018)'
          : hover
          ? 'rgba(15,23,42,0.012)'
          : 'transparent',
        outline: isSelected
          ? `2px solid ${accent}`
          : hover
          ? `1px solid ${T.text3}`
          : `1px dashed rgba(15,23,42,0.18)`,
        outlineOffset: -1,
        transition: `background 200ms ${EASE.out}, outline-color 200ms ${EASE.out}`
      }}
    >
      {/* Click-to-select backdrop (sits behind cells / elements) */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onSelectSection(sec.id);
        }}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          cursor: 'pointer'
        }}
      />
      {/* Top-edge selection rail — always reachable, even over grid cells */}
      <div
        onClick={(e) => {
          e.stopPropagation();
          onSelectSection(sec.id);
        }}
        title="Select section"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 6,
          zIndex: 6,
          cursor: 'pointer',
          background: isSelected
            ? accent
            : hover
            ? 'rgba(59,130,246,0.18)'
            : 'transparent',
          transition: `background 200ms ${EASE.out}`
        }}
      />
      {/* Section index badge — clickable selector, sits above cells */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onSelectSection(sec.id);
        }}
        title="Select section"
        style={{
          position: 'absolute',
          top: 8,
          left: 0,
          zIndex: 6,
          padding: '4px 9px',
          fontSize: 9,
          fontWeight: 700,
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
          color: isSelected ? '#fff' : T.text2,
          background: isSelected ? accent : '#fff',
          border: `1px solid ${isSelected ? accent : T.border2}`,
          borderLeft: 'none',
          borderRadius: '0 6px 6px 0',
          boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
          fontFamily: sysFont,
          cursor: 'pointer',
          transition: `all 200ms ${EASE.out}`,
          pointerEvents: 'auto'
        }}
      >
        Section {index + 1}
      </button>

      {/* Section toolbar (top-left) */}
      <SectionToolbar
        sec={sec}
        canRemove={canRemove}
        accent={accent}
        active={active}
        isSelected={isSelected}
        onSelectSection={onSelectSection}
        onSetSectionLayout={onSetSectionLayout}
        onRemoveSection={onRemoveSection}
      />

      {/* Grid cells overlay */}
      {tpl?.cells &&
        tpl.cells.map((c, i) => {
          const isDrop = dropOnSection && dropTarget?.cellIndex === i;
          const isCellSelected =
            selected?.kind === 'cell' && selected.secId === sec.id && selected.cellIndex === i;
          const cellKey = `${sec.id}:${i}`;
          return (
            <div
              key={i}
              ref={(node) => onRegisterCellRef && onRegisterCellRef(cellKey, node)}
              data-rm-cell={cellKey}
              onClick={(e) => {
                e.stopPropagation();
                onSelectCell(sec.id, i);
              }}
              style={{
                position: 'absolute',
                left: c.x * sec.widthPx,
                top: c.y * sec.heightPx,
                width: c.w * sec.widthPx,
                height: c.h * sec.heightPx,
                background: isDrop
                  ? 'rgba(59,130,246,0.08)'
                  : isCellSelected
                  ? 'rgba(59,130,246,0.04)'
                  : 'rgba(245,158,11,0.04)',
                border: `${isCellSelected ? '2px' : '1px'} ${isCellSelected ? 'solid' : 'dashed'} ${
                  isDrop || isCellSelected ? accent : 'rgba(245,158,11,0.45)'
                }`,
                cursor: 'pointer',
                pointerEvents: 'auto',
                zIndex: 1,
                boxSizing: 'border-box',
                transition: `background 160ms ${EASE.out}, border-color 160ms ${EASE.out}`
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 8,
                  left: 8,
                  fontSize: 9,
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: isDrop || isCellSelected ? '#fff' : '#b45309',
                  background: isDrop || isCellSelected ? accent : '#fff',
                  padding: '2px 6px',
                  borderRadius: 4,
                  boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
                  pointerEvents: 'none'
                }}
              >
                Cell · {i + 1}
              </div>
            </div>
          );
        })}

      {/* Free drop preview */}
      {dropOnSection && dropTarget?.cellIndex == null && !dropTarget?.containerId && !tpl && (
        <FreeDropPreview localY={dropTarget.localY} accent={accent} />
      )}

      {/* Gridlines overlay (free layout) */}
      {showGridlines && !tpl && (
        <GridlineOverlay
          sec={sec}
          mode={mode}
          accent={accent}
        />
      )}

      {/* Top-level elements only — container children render nested inside
          their parent CanvasElement, so we filter them out here. */}
      {sec.children
        .filter((c) => !c.parentEl)
        .map((c) => (
          <CanvasElement
            key={c.id}
            el={c}
            sec={sec}
            selected={selected}
            accent={accent}
            dropTarget={dropTarget}
            onSelect={() => onSelectElement(sec.id, c.id)}
            onSelectElement={onSelectElement}
            onUpdateProps={(patch) => onUpdateElementProps(sec.id, c.id, patch)}
            onUpdateElementProps={onUpdateElementProps}
            onMeasureHeight={(h) => onMeasureHeight(sec.id, c.id, h)}
            onMeasureHeightRaw={onMeasureHeight}
            onRegisterRef={onRegisterElementRef}
            canvasWidth={canvasWidth}
            refWidth={refWidth}
            isDropTarget={
              c.archetype === 'container' &&
              dropTarget?.sectionId === sec.id &&
              dropTarget?.containerId === c.id
            }
          />
        ))}

      {/* Bottom handle + add-section */}
      <div
        onMouseEnter={() => setHoverBottom(true)}
        onMouseLeave={() => setHoverBottom(false)}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 22,
          zIndex: 6,
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          pointerEvents: 'none'
        }}
      >
        <button
          aria-label={
            sec.hUnit === 'auto'
              ? 'Drag to extend bottom margin'
              : 'Drag to resize section height'
          }
          onMouseDown={onStartSecResize(sec.id)}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            height: hoverBottom || isSelected ? 8 : 4,
            border: 'none',
            cursor: 'ns-resize',
            background:
              hoverBottom || isSelected ? accent : active ? 'rgba(15,23,42,0.10)' : 'rgba(15,23,42,0.05)',
            transition: `all 200ms ${EASE.out}`,
            pointerEvents: 'auto'
          }}
        />
        {/* Grip indicator (visible when section is active) */}
        <div
          style={{
            position: 'absolute',
            bottom: hoverBottom || isSelected ? 1 : -1,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 3,
            opacity: active ? 1 : 0,
            transition: `opacity 200ms ${EASE.out}`,
            pointerEvents: 'none'
          }}
        >
          <span style={{ width: 3, height: 3, borderRadius: 999, background: '#fff' }} />
          <span style={{ width: 3, height: 3, borderRadius: 999, background: '#fff' }} />
          <span style={{ width: 3, height: 3, borderRadius: 999, background: '#fff' }} />
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onAddSectionAfter(sec.id);
          }}
          style={{
            position: 'absolute',
            bottom: -14,
            left: '50%',
            zIndex: 100,
            border: `1px solid ${accent}`,
            background: '#fff',
            color: accent,
            cursor: 'pointer',
            padding: '4px 12px',
            borderRadius: 999,
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: '0.10em',
            textTransform: 'uppercase',
            boxShadow: '0 4px 14px rgba(59,130,246,0.20)',
            opacity: hoverBottom || isSelected ? 1 : 0,
            transform:
              'translateX(-50%) ' +
              (hoverBottom || isSelected ? 'translateY(0)' : 'translateY(-4px)'),
            transition: `all 240ms ${EASE.out}`,
            pointerEvents: hoverBottom || isSelected ? 'auto' : 'none',
            fontFamily: sysFont
          }}
        >
          + Add Section
        </button>
      </div>
    </div>
  );
}

function SectionToolbar({
  sec,
  canRemove,
  accent,
  active,
  isSelected,
  onSelectSection,
  onSetSectionLayout,
  onRemoveSection
}) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (!ref.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  const tpl = GRID_TEMPLATES[sec.layout] || GRID_TEMPLATES.free;
  const visible = active || open;

  return (
    <div
      ref={ref}
      style={{
        position: 'absolute',
        top: 8,
        right: 8,
        zIndex: 5,
        display: 'flex',
        alignItems: 'center',
        gap: 6,
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-4px)',
        transition: `all 200ms ${EASE.out}`,
        pointerEvents: visible ? 'auto' : 'none'
      }}
      onClick={(e) => e.stopPropagation()}
    >
      <TBtn onClick={() => onSelectSection(sec.id)} dark={isSelected} title="Select section">
        Select
      </TBtn>
      <button
        onClick={() => setOpen((v) => !v)}
        title="Choose layout"
        style={{
          ...ctrlBase,
          width: 'auto', height: 28,
          padding: '0 10px',
          background: '#fff',
          borderColor: open ? T.accent : T.ctrlBorder,
          boxShadow: open ? T.accentGlow : '0 1px 3px rgba(0,0,0,0.06)',
          display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer'
        }}
      >
        <span style={{
          fontSize: 9, fontWeight: 600, letterSpacing: '0.10em',
          textTransform: 'uppercase', color: T.text4
        }}>
          Layout
        </span>
        <span style={{ color: T.text1, fontWeight: 500 }}>{tpl.label}</span>
        <svg width={8} height={5} viewBox="0 0 8 5" fill="none" style={{
          marginLeft: 2,
          transition: `transform 300ms ${EASE.out}`,
          transform: open ? 'rotate(180deg)' : 'rotate(0deg)'
        }}>
          <path d="M0.5 0.5L4 4.5L7.5 0.5" stroke={T.text3} strokeWidth={1.2}
            strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {canRemove && (
        <button
          onClick={() => onRemoveSection(sec.id)}
          title="Remove section"
          style={{
            ...ctrlBase,
            width: 28, height: 28, padding: 0,
            background: '#fff', color: T.danger,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
            cursor: 'pointer', fontSize: 14, lineHeight: 1
          }}
        >
          ×
        </button>
      )}

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 36,
            right: 0,
            background: '#fff',
            border: `1px solid ${T.border2}`,
            borderRadius: 10,
            boxShadow: '0 12px 48px rgba(0,0,0,0.12)',
            padding: 6,
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 6,
            width: 270,
            zIndex: 10
          }}
        >
          {Object.entries(GRID_TEMPLATES).map(([key, t]) => {
            const active = key === sec.layout;
            return (
              <button
                key={key}
                onClick={() => {
                  onSetSectionLayout(sec.id, key);
                  setOpen(false);
                }}
                style={{
                  cursor: 'pointer',
                  padding: 8,
                  borderRadius: 8,
                  border: `1px solid ${active ? accent : T.border2}`,
                  background: active ? T.accentSoft : '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  fontFamily: sysFont
                }}
              >
                <GridPreview cells={t.cells} accent={accent} />
                <div
                  style={{
                    fontSize: 9,
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: active ? accent : T.text2
                  }}
                >
                  {t.label}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function GridPreview({ cells, accent }) {
  return (
    <svg width="56" height="36" viewBox="0 0 56 36">
      <rect x="0.5" y="0.5" width="55" height="35" rx="4" fill="none" stroke={T.border2} />
      {cells &&
        cells.map((c, i) => (
          <rect
            key={i}
            x={c.x * 56 + 1}
            y={c.y * 36 + 1}
            width={c.w * 56 - 2}
            height={c.h * 36 - 2}
            rx="2"
            fill={accent}
            opacity={0.18}
            stroke={accent}
            strokeOpacity={0.6}
            strokeWidth="0.6"
          />
        ))}
      {!cells && (
        <text x="28" y="22" textAnchor="middle" fontSize="8" fill={T.text3}>
          Free
        </text>
      )}
    </svg>
  );
}

function FreeDropPreview({ localY, accent }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        top: localY,
        height: 0,
        borderTop: `2px dashed ${accent}`,
        opacity: 0.7,
        pointerEvents: 'none'
      }}
    />
  );
}

// ─── Real elements ──────────────────────────────────────────────────────────────
function CanvasElement({
  el,
  sec,
  selected,
  accent,
  dropTarget,
  onSelect,
  onSelectElement,
  onUpdateProps,
  onUpdateElementProps,
  onMeasureHeight,
  onMeasureHeightRaw,
  onRegisterRef,
  canvasWidth,
  refWidth,
  isDropTarget
}) {
  const beh = RESPONSIVE_BEHAVIORS[el.behavior];
  const autoHeight = beh.heightUnit === 'auto';
  const isSelected =
    typeof selected === 'boolean'
      ? selected
      : selected?.kind === 'element' && selected.id === el.id;
  // When the responsive package uses spx (Scale Proportionally), text/padding
  // must scale with the canvas, otherwise typography looks frozen at ref size.
  // Exception: `wrap` uses spx WIDTH but its whole point is "fluid width,
  // content height" — the font stays at native size so the text re-wraps as
  // the canvas (and the box) grow/shrink. Scaling the font in wrap mode would
  // keep words-per-line constant and defeat the purpose.
  const isWrap = el.behavior === 'wrap';
  const fontScale =
    !isWrap && (beh.widthUnit === 'spx' || beh.heightUnit === 'spx') && refWidth
      ? canvasWidth / refWidth
      : 1;
  const ref = React.useRef(null);

  const setRef = React.useCallback((node) => {
    ref.current = node;
    onRegisterRef && onRegisterRef(el.id, node);
  }, [el.id, onRegisterRef]);

  React.useEffect(() => {
    return () => onRegisterRef && onRegisterRef(el.id, null);
  }, [el.id, onRegisterRef]);

  React.useEffect(() => {
    if (!autoHeight || !ref.current || !onMeasureHeight) return;
    const node = ref.current;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const h = entry.contentRect.height;
        if (Math.abs(h - el.heightPx) > 1) onMeasureHeight(h);
      }
    });
    ro.observe(node);
    return () => ro.disconnect();
  }, [autoHeight, onMeasureHeight, el.heightPx]);

  const isContainer = el.archetype === 'container';
  // Nested children render as descendants of this container so they inherit
  // its position (transforms during drag, clipping, etc.). Children's
  // leftPx/topPx are RELATIVE to the parent in this layout pass.
  const nestedChildren = React.useMemo(
    () => (isContainer ? sec.children.filter((c) => c.parentEl === el.id) : []),
    [isContainer, sec.children, el.id]
  );

  return (
    <div
      ref={setRef}
      data-rm-element={el.id}
      onMouseDown={(e) => {
        if (!isSelected) {
          e.stopPropagation();
          onSelect && onSelect();
        }
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect && onSelect();
      }}
      style={{
        position: 'absolute',
        left: el.leftPx,
        top: el.topPx,
        width: el.widthPx,
        height: autoHeight ? 'auto' : el.heightPx,
        minHeight: autoHeight ? 0 : undefined,
        cursor: 'pointer',
        userSelect: 'none',
        outline: isDropTarget ? `2px dashed ${accent}` : '1px solid transparent',
        outlineOffset: 1,
        boxShadow: isDropTarget ? `0 0 0 6px ${accent}22` : 'none',
        background: isDropTarget ? `${accent}11` : undefined,
        borderRadius: 6,
        transition: 'outline 160ms ease-out, box-shadow 160ms ease-out, background 160ms ease-out',
        // Per-element layering: zIndex 0 by default; user-controllable from
        // the inspector (Front/Back/Forward/Backward + numeric Z field).
        // Selected gets +1 to keep its handles visible against same-z peers.
        zIndex: 2 + (Number(el.zIndex) || 0) + (isSelected ? 1 : 0),
        // Containers are positioned ancestors so their nested children
        // resolve `position: absolute` against the container's box.
        // Containers DO NOT clip — children that extend past the container's
        // box stay visible. The container's auto-height behavior grows the
        // box to enclose its children; only the section/canvas clips.
        overflow: 'visible'
      }}
    >
      <ElementBody
        el={el}
        accent={accent}
        onUpdateProps={onUpdateProps}
        selected={isSelected}
        autoHeight={autoHeight}
        fontScale={fontScale}
        hasChildren={isContainer && nestedChildren.length > 0}
      />

      {/* Render parented descendants inside this container so they share
          the container's coordinate space and its CSS transforms. */}
      {isContainer &&
        nestedChildren.map((child) => (
          <CanvasElement
            key={child.id}
            el={child}
            sec={sec}
            selected={selected}
            accent={accent}
            dropTarget={dropTarget}
            onSelect={
              onSelectElement ? () => onSelectElement(sec.id, child.id) : undefined
            }
            onSelectElement={onSelectElement}
            onUpdateProps={
              onUpdateElementProps
                ? (patch) => onUpdateElementProps(sec.id, child.id, patch)
                : undefined
            }
            onUpdateElementProps={onUpdateElementProps}
            onMeasureHeight={
              onMeasureHeightRaw
                ? (h) => onMeasureHeightRaw(sec.id, child.id, h)
                : undefined
            }
            onMeasureHeightRaw={onMeasureHeightRaw}
            onRegisterRef={onRegisterRef}
            canvasWidth={canvasWidth}
            refWidth={refWidth}
            isDropTarget={
              child.archetype === 'container' &&
              dropTarget?.sectionId === sec.id &&
              dropTarget?.containerId === child.id
            }
          />
        ))}

      {isSelected && (
        <div
          data-no-drag
          style={{
            position: 'absolute',
            top: -22,
            left: 0,
            fontSize: 9,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#fff',
            background: accent,
            padding: '2px 6px',
            borderRadius: 4,
            boxShadow: '0 2px 6px rgba(59,130,246,0.30)',
            pointerEvents: 'none',
            zIndex: 50
          }}
        >
          {ARCHETYPES[el.archetype].label} · {beh.label}
        </div>
      )}
    </div>
  );
}

function ElementBody({ el, accent, onUpdateProps, selected, autoHeight, fontScale = 1, hasChildren = false }) {
  const a = el.archetype;
  if (a === 'text') {
    return <TextWidget el={el} onUpdateProps={onUpdateProps} selected={selected} autoHeight={autoHeight} fontScale={fontScale} />;
  }
  if (a === 'button') {
    return <ButtonWidget el={el} accent={accent} fontScale={fontScale} />;
  }
  if (a === 'image') {
    return <ImageWidget el={el} />;
  }
  return <ContainerWidget el={el} autoHeight={autoHeight} hasChildren={hasChildren} />;
}

function TextWidget({ el, onUpdateProps, selected, autoHeight, fontScale = 1 }) {
  const p = el.props || {};
  const baseSize = p.fontSize || 16;
  const scaledSize = baseSize * fontScale;
  const ref = React.useRef(null);
  const [editing, setEditing] = React.useState(false);

  React.useEffect(() => {
    if (!editing && ref.current && ref.current.innerText !== p.text) {
      ref.current.innerText = p.text || '';
    }
  }, [p.text, editing]);

  return (
    <div
      ref={ref}
      contentEditable={editing}
      suppressContentEditableWarning
      data-no-drag={editing ? '' : undefined}
      onDoubleClick={(e) => {
        e.stopPropagation();
        setEditing(true);
        setTimeout(() => ref.current?.focus(), 0);
      }}
      onBlur={(e) => {
        setEditing(false);
        onUpdateProps({ text: e.currentTarget.innerText });
      }}
      onKeyDown={(e) => {
        if (e.key === 'Escape') {
          setEditing(false);
          e.currentTarget.blur();
        }
      }}
      style={{
        width: '100%',
        height: autoHeight ? 'auto' : '100%',
        padding: '2px 4px',
        boxSizing: 'border-box',
        fontFamily: p.fontFamily || 'Inter',
        fontSize: scaledSize + 'px',
        fontWeight: p.fontWeight || '400',
        color: p.color || T.text1,
        lineHeight: p.lineHeight || '1.5',
        letterSpacing: p.letterSpacing || '0em',
        textAlign: p.textAlign || 'left',
        cursor: editing ? 'text' : 'move',
        outline: 'none',
        overflow: autoHeight ? 'visible' : 'hidden',
        wordBreak: 'break-word',
        whiteSpace: 'normal',
        background: editing ? 'rgba(59,130,246,0.04)' : 'transparent',
        borderRadius: 4
      }}
    >
      {p.text}
    </div>
  );
}

function ButtonWidget({ el, accent, fontScale = 1 }) {
  const p = el.props || {};
  const variant = p.variant || 'primary';
  const isPrimary = variant === 'primary';
  const padX = (p.paddingX ?? 18) * fontScale;
  const padY = (p.paddingY ?? 10) * fontScale;
  const radius = (p.radius ?? 8) * fontScale;
  const fSize = 13 * fontScale;
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <button
        onClick={(e) => e.preventDefault()}
        style={{
          width: '100%',
          height: '100%',
          minHeight: 32 * fontScale,
          cursor: 'inherit',
          padding: `${padY}px ${padX}px`,
          border: isPrimary ? 'none' : `1px solid ${T.border2}`,
          borderRadius: radius + 'px',
          background: isPrimary ? accent : T.ctrl,
          color: isPrimary ? '#fff' : T.text2,
          fontSize: fSize,
          fontWeight: 500,
          letterSpacing: '0.01em',
          fontFamily: sysFont,
          boxShadow: isPrimary ? '0 2px 10px rgba(59,130,246,0.30)' : 'none',
          pointerEvents: 'none'
        }}
      >
        {p.label || 'Start Now'}
      </button>
    </div>
  );
}

function ImageWidget({ el }) {
  const p = el.props || {};
  // Every `image` archetype renders a real photo from our curated
  // placeholder pool — never a gradient. The seed prefers an explicit
  // image src/id from the spec, then falls back to the playground's
  // internal element id so the same element keeps the same picture.
  const seed = p.src || p.id || el.specId || el.id;
  const src = pickPlaceholder(seed);
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
        borderRadius: 8,
        background: '#f4f4f5',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.05)',
        pointerEvents: 'none'
      }}
    >
      <img
        src={src}
        alt={p.alt || p.caption || 'Placeholder'}
        draggable={false}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: p.objectPosition || 'center',
          display: 'block',
          userSelect: 'none'
        }}
      />
    </div>
  );
}

function ContainerWidget({ el, autoHeight, hasChildren }) {
  const p = el.props || {};
  return (
    <div
      style={{
        width: '100%',
        height: autoHeight ? 'auto' : '100%',
        minHeight: autoHeight ? 60 : undefined,
        background: p.background,
        border: `1px dashed ${p.borderColor}`,
        borderRadius: (p.borderRadius || 12) + 'px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: T.text3,
        fontSize: 10,
        fontWeight: 600,
        letterSpacing: '0.10em',
        textTransform: 'uppercase',
        padding: 12,
        boxSizing: 'border-box',
        pointerEvents: 'none'
      }}
    >
      {hasChildren ? '' : 'Container'}
    </div>
  );
}

// ─── Gridlines overlay (free layout) ────────────────────────────────────────────
// Mesh "rails" are horizontal lines that an element's top is locked to. In Mesh
// mode each rail = (anchor.bottomPx + y_offset). When an anchor element grows
// in height (auto-height text wrapping under narrow canvas, fixed-height while
// everything else shrinks), its bottom rail moves down — and every rail
// downstream is pushed with it. This overlay shows BOTH halves of that
// relationship: a faint rail at each anchor's BOTTOM (the source of the push)
// and a strong rail at each child's TOP (where the gap is enforced).
function GridlineOverlay({ sec, mode, accent }) {
  // Map id -> behavior label for friendlier tooltips on the rails.
  const behLabelFor = (el) => {
    const beh = el?.behavior && RESPONSIVE_BEHAVIORS[el.behavior];
    if (!beh) return '';
    // Heuristics: which behaviors GROW or RESIST shrinking and therefore push?
    if (beh.heightUnit === 'auto') return 'auto · grows';
    if (beh.heightUnit === 'px') return 'fixed · resists';
    if (beh.heightUnit === 'spx') return 'scales';
    if (beh.heightUnit === 'pct') return 'stretch';
    return '';
  };

  const items = [];
  for (const el of sec.children) {
    if (el.parentCell != null || el.parentEl) continue;
    const elTop = el.absTopPx ?? el.topPx;
    const elBottom = elTop + el.heightPx;

    let railY = 0;
    let railLabel = 'Section Top';
    let pushedBy = null;
    if (mode === 'mesh' && el.anchorId) {
      const anchor = sec.children.find((x) => x.id === el.anchorId);
      if (anchor) {
        const anchorTop = anchor.absTopPx ?? anchor.topPx;
        railY = anchorTop + anchor.heightPx;
        railLabel = (ARCHETYPES[anchor.archetype]?.label || 'Anchor') + ' Bottom';
        pushedBy = anchor;
      }
    }

    items.push({
      key: el.id,
      el,
      topY: elTop,
      bottomY: elBottom,
      anchorY: railY,
      railLabel,
      pushedBy,
      arche: ARCHETYPES[el.archetype]?.label || el.archetype
    });
  }

  return (
    <svg
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    >
      {items.map((it) => (
        <g key={it.key}>
          {/* Strong rail: TOP of this element — where the gap is enforced */}
          <line
            x1={0} x2="100%"
            y1={it.topY} y2={it.topY}
            stroke={accent} strokeWidth={1} strokeDasharray="4 4" opacity={0.5}
          />
          {/* Faint rail: BOTTOM of THIS element — source of push for the next link */}
          <line
            x1={0} x2="100%"
            y1={it.bottomY} y2={it.bottomY}
            stroke={accent} strokeWidth={1} strokeDasharray="2 6" opacity={0.18}
          />
          {/* Connector + arrow from anchor.bottom -> this.top */}
          <line x1={20} x2={20} y1={it.anchorY} y2={it.topY} stroke={accent} strokeWidth={1} opacity={0.6} />
          <polygon
            points={`${17},${it.topY - 6} ${23},${it.topY - 6} ${20},${it.topY}`}
            fill={accent} opacity={0.7}
          />
          {/* Gap label includes the behavior tag of the element ABOVE,
              so the user can see at a glance which kind of growth pushes
              this rail — `auto · grows` is the one that moves on resize. */}
          <text
            x={28}
            y={(it.topY + it.anchorY) / 2 + 3}
            fill={T.text3} fontSize={9} fontWeight={600}
            letterSpacing="0.06em"
            style={{ textTransform: 'uppercase' }}
          >
            {it.arche} ↑ {it.railLabel} · {Math.round(it.topY - it.anchorY)}px
            {it.pushedBy ? `  (${behLabelFor(it.pushedBy)})` : ''}
          </text>
        </g>
      ))}
    </svg>
  );
}

// ─── Properties Panel ───────────────────────────────────────────────────────────
function PropertiesPanel({
  accent,
  mode,
  refWidth,
  canvasWidth,
  selectedEl,
  selectedSec,
  selectedCell,
  allSections,
  onChangeBehavior,
  onUpdateElementProps,
  onRemoveElement,
  onSetSectionLayout,
  onSetSectionBehavior,
  onRemoveSection,
  onSetZIndex,
  onBumpZIndex,
  onBringToFront,
  onSendToBack,
  onSetMarginUnit,
  onSetMarginValue
}) {
  if (selectedEl) {
    return (
      <ElementProperties
        el={selectedEl}
        secId={selectedEl.secId}
        accent={accent}
        mode={mode}
        refWidth={refWidth}
        canvasWidth={canvasWidth}
        onChangeBehavior={onChangeBehavior}
        onUpdateElementProps={onUpdateElementProps}
        onRemove={onRemoveElement}
        allSections={allSections}
        onSetZIndex={onSetZIndex}
        onBumpZIndex={onBumpZIndex}
        onBringToFront={onBringToFront}
        onSendToBack={onSendToBack}
        onSetMarginUnit={onSetMarginUnit}
        onSetMarginValue={onSetMarginValue}
      />
    );
  }
  if (selectedCell) {
    return (
      <CellProperties
        cell={selectedCell}
        accent={accent}
        canvasWidth={canvasWidth}
      />
    );
  }
  if (selectedSec) {
    return (
      <SectionProperties
        sec={selectedSec}
        accent={accent}
        refWidth={refWidth}
        canvasWidth={canvasWidth}
        onSetSectionLayout={onSetSectionLayout}
        onSetSectionBehavior={onSetSectionBehavior}
        onRemoveSection={onRemoveSection}
        canRemove={allSections.length > 1}
      />
    );
  }
  return (
    <aside style={panelAsideStyle}>
      <PanelTitle>Properties</PanelTitle>
      <div style={{ padding: 14 }}>
        <div style={{
          padding: 12, borderRadius: 10,
          background: T.glass, border: `1px solid ${T.glassBorder}`,
          fontSize: 11, lineHeight: 1.55, color: T.text2
        }}>
          Select a section header or any element on the canvas to edit its properties and inspect
          live unit values.
        </div>
      </div>
    </aside>
  );
}

const panelAsideStyle = {
  borderLeft: `1px solid ${T.border}`,
  background: 'rgba(255,255,255,0.30)',
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 0
};

function PanelTitle({ children }) {
  return (
    <div style={{
      ...glassBar,
      padding: '12px 14px', flexShrink: 0,
      fontSize: 10, fontWeight: 700, letterSpacing: '0.10em',
      textTransform: 'uppercase', color: T.text1
    }}>
      {children}
    </div>
  );
}

function LayerBtn({ onClick, children }) {
  return (
    <button onClick={onClick} style={{
      cursor: 'pointer', padding: '7px 10px', fontSize: 11, fontWeight: 500,
      borderRadius: 8, color: T.text1, background: T.ctrl,
      border: `1px solid ${T.ctrlBorder}`, fontFamily: 'inherit',
      transition: `all 200ms ${EASE.out}`
    }}
      onMouseEnter={(e) => { e.currentTarget.style.background = T.ctrlHover || '#f4f4f5'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = T.ctrl; }}
    >
      {children}
    </button>
  );
}

function DangerBtn({ onClick, children }) {
  return (
    <button onClick={onClick} style={{
      width: '100%', marginTop: 12, cursor: 'pointer', padding: '8px 10px',
      fontSize: 11, fontWeight: 500, borderRadius: 8,
      color: T.danger, background: 'rgba(220,38,38,0.06)',
      border: '1px solid rgba(220,38,38,0.18)', fontFamily: 'inherit',
      transition: `all 300ms ${EASE.out}`
    }}
      onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(220,38,38,0.10)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(220,38,38,0.06)'; }}
    >
      {children}
    </button>
  );
}

function ElementProperties({
  el,
  secId,
  accent,
  mode,
  refWidth,
  canvasWidth,
  onChangeBehavior,
  onUpdateElementProps,
  onRemove,
  allSections,
  onSetZIndex,
  onBumpZIndex,
  onBringToFront,
  onSendToBack,
  onSetMarginUnit,
  onSetMarginValue
}) {
  const arche = ARCHETYPES[el.archetype];
  const beh = RESPONSIVE_BEHAVIORS[el.behavior];
  const sec = allSections.find((s) => s.id === secId);
  const anchor =
    el.anchorId && sec ? sec.children.find((c) => c.id === el.anchorId) : null;

  const [acc, setAcc] = React.useState({ a1: true, a2: true, aPos: false, aLayer: false, a3: false, a4: false });
  const tog = (k) => (e) =>
    setAcc((p) => (e.metaKey || e.ctrlKey
      ? { ...p, [k]: !p[k] }
      : { a1: false, a2: false, aPos: false, aLayer: false, a3: false, a4: false, [k]: !p[k] }));

  // Margin unit options: SPX scales with the canvas, PX is locked, %
  // resolves against the parent (section / cell / container) size. The
  // anchor offset (= top margin) and left offset both share these units.
  const MARGIN_UNIT_OPTS = [
    { v: 'spx', l: 'SPX' },
    { v: 'px', l: 'PX' },
    { v: 'pct', l: '%' }
  ];

  return (
    <aside style={panelAsideStyle}>
      <PanelTitle>{arche.label} · Selected</PanelTitle>

      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        <Acc num="01" title="Responsive" open={acc.a1} onToggle={tog('a1')}>
          <div style={{ display: 'grid', gap: 6 }}>
            {arche.behaviors.map((bk) => {
              const b = RESPONSIVE_BEHAVIORS[bk];
              const active = bk === el.behavior;
              return (
                <button
                  key={bk}
                  onClick={() => onChangeBehavior(secId, el.id, bk)}
                  style={{
                    cursor: 'pointer', textAlign: 'left',
                    padding: '8px 10px', borderRadius: 8,
                    border: `1px solid ${active ? accent : T.ctrlBorder}`,
                    background: active ? T.accentSoft : T.ctrl,
                    display: 'flex', alignItems: 'center',
                    justifyContent: 'space-between', gap: 8,
                    fontFamily: 'inherit',
                    transition: `all 300ms ${EASE.out}`
                  }}
                >
                  <span style={{ fontSize: 11, fontWeight: 600, color: active ? accent : T.text1 }}>
                    {b.label}
                  </span>
                  <span style={{
                    fontSize: 9, fontWeight: 600, letterSpacing: '0.06em',
                    textTransform: 'uppercase', color: T.text3
                  }}>
                    {b.heightUnit}/{b.widthUnit}
                  </span>
                </button>
              );
            })}
          </div>
        </Acc>

        {el.archetype === 'text' && (
          <Acc num="02" title="Text" open={acc.a2} onToggle={tog('a2')}>
            <Row><Field label="Content"><TxtIn val={el.props?.text || ''} onChange={(v) => onUpdateElementProps(secId, el.id, { text: v })} multiline /></Field></Row>
            <Row>
              <Field label="Size" w={68}><NumIn val={el.props?.fontSize || 16} min={8} max={200} onChange={(v) => onUpdateElementProps(secId, el.id, { fontSize: v })} /></Field>
              <Field label="Weight"><Sel val={el.props?.fontWeight || '400'} opts={['300','400','500','600','700'].map(v=>({v,l:v}))} onChange={(v) => onUpdateElementProps(secId, el.id, { fontWeight: v })} /></Field>
            </Row>
            <Row>
              <Field label="Align"><Sel val={el.props?.textAlign || 'left'} opts={[{v:'left',l:'Left'},{v:'center',l:'Center'},{v:'right',l:'Right'},{v:'justify',l:'Justify'}]} onChange={(v) => onUpdateElementProps(secId, el.id, { textAlign: v })} /></Field>
            </Row>
            <Sep />
            <Row><Field label="Color"><ColorField val={el.props?.color || T.text1} onChange={(v) => onUpdateElementProps(secId, el.id, { color: v })} /></Field></Row>
          </Acc>
        )}

        {el.archetype === 'button' && (
          <Acc num="02" title="Button" open={acc.a2} onToggle={tog('a2')}>
            <Row><Field label="Label"><TxtIn val={el.props?.label || ''} onChange={(v) => onUpdateElementProps(secId, el.id, { label: v })} /></Field></Row>
            <Row>
              <Field label="Variant"><Sel val={el.props?.variant || 'primary'} opts={[{v:'primary',l:'Primary'},{v:'secondary',l:'Secondary'}]} onChange={(v) => onUpdateElementProps(secId, el.id, { variant: v })} /></Field>
              <Field label="Radius" w={68}><NumIn val={el.props?.radius ?? 8} min={0} max={999} onChange={(v) => onUpdateElementProps(secId, el.id, { radius: v })} /></Field>
            </Row>
          </Acc>
        )}

        <Acc num="03" title="Margins" open={acc.aPos} onToggle={tog('aPos')}>
          <div style={{ fontSize: 11, color: T.text3, lineHeight: 1.5, marginBottom: 8 }}>
            Top + Left margins from the {el.parentEl ? 'parent container' : el.parentCell != null ? 'cell' : (mode === 'mesh' && el.anchorId ? 'anchored element' : 'section')} corner.
            <strong style={{ color: T.text2 }}> SPX</strong> scales with the canvas,
            <strong style={{ color: T.text2 }}> PX</strong> stays fixed,
            <strong style={{ color: T.text2 }}> %</strong> resolves against the parent.
          </div>
          <Row>
            <Field label="Top" w={120}>
              <NumIn
                val={Number((el.topValue ?? 0).toFixed(2))}
                min={-9999}
                max={9999}
                onChange={(v) => onSetMarginValue && onSetMarginValue(secId, el.id, 'top', v)}
              />
            </Field>
            <Field label="Unit" w={88}>
              <Sel
                val={el.topUnit || 'spx'}
                opts={MARGIN_UNIT_OPTS}
                onChange={(v) => onSetMarginUnit && onSetMarginUnit(secId, el.id, 'top', v)}
              />
            </Field>
          </Row>
          <Row>
            <Field label="Left" w={120}>
              <NumIn
                val={Number((el.leftValue ?? 0).toFixed(2))}
                min={-9999}
                max={9999}
                onChange={(v) => onSetMarginValue && onSetMarginValue(secId, el.id, 'left', v)}
              />
            </Field>
            <Field label="Unit" w={88}>
              <Sel
                val={el.leftUnit || 'spx'}
                opts={MARGIN_UNIT_OPTS}
                onChange={(v) => onSetMarginUnit && onSetMarginUnit(secId, el.id, 'left', v)}
              />
            </Field>
          </Row>
          <Sep />
          <KV k="Resolved Top" v={`${el.topPx.toFixed(0)} px`} />
          <KV k="Resolved Left" v={`${el.leftPx.toFixed(0)} px`} />
        </Acc>

        <Acc num="04" title="Layer" open={acc.aLayer} onToggle={tog('aLayer')}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6 }}>
            <LayerBtn onClick={() => onBringToFront && onBringToFront(secId, el.id)}>To Front</LayerBtn>
            <LayerBtn onClick={() => onSendToBack && onSendToBack(secId, el.id)}>To Back</LayerBtn>
            <LayerBtn onClick={() => onBumpZIndex && onBumpZIndex(secId, el.id, +1)}>Forward</LayerBtn>
            <LayerBtn onClick={() => onBumpZIndex && onBumpZIndex(secId, el.id, -1)}>Backward</LayerBtn>
          </div>
          <Sep />
          <Row>
            <Field label="Z Index" w={88}>
              <NumIn
                val={Number(el.zIndex) || 0}
                min={-999}
                max={999}
                onChange={(v) => onSetZIndex && onSetZIndex(secId, el.id, v)}
              />
            </Field>
            <div style={{ flex: 1, alignSelf: 'end', fontSize: 11, color: T.text3, lineHeight: 1.4 }}>
              Higher Z renders on top within the same section.
            </div>
          </Row>
        </Acc>

        <Acc num="05" title="Live Values" open={acc.a3} onToggle={tog('a3')}>
          <KV k="Width" v={`${el.widthPx.toFixed(0)} px · ${fmt(el.wValue, beh.widthUnit)}`} />
          <KV k="Height" v={`${el.heightPx.toFixed(0)} px · ${fmt(el.hValue, beh.heightUnit)}`} />
          <KV k="Left" v={`${el.leftPx.toFixed(0)} px · ${fmt(el.leftValue, el.leftUnit)}`} />
          <KV k="Top (rendered)" v={`${el.topPx.toFixed(0)} px`} />
          <KV k="Top (stored)" v={`${fmt(el.topValue, el.topUnit)}`} />
          <Sep />
          <div style={{
            padding: 10, borderRadius: 8, background: T.ctrl,
            border: `1px solid ${T.ctrlBorder}`,
            fontSize: 11, color: T.text2, lineHeight: 1.5
          }}>
            {el.parentCell != null ? (
              <>In <strong style={{ color: T.text1 }}>Cell {el.parentCell + 1}</strong> — anchored to cell top with offset <strong style={{ color: accent }}>{fmt(el.topValue, el.topUnit)}</strong>.</>
            ) : mode === 'mesh' && anchor ? (
              <>Anchored below <strong style={{ color: T.text1 }}>{ARCHETYPES[anchor.archetype].label}</strong> with offset <strong style={{ color: accent }}>{fmt(el.topValue, el.topUnit)}</strong>.</>
            ) : (
              <>Anchored to <strong style={{ color: T.text1 }}>Section Top</strong> with offset <strong style={{ color: accent }}>{fmt(el.topValue, el.topUnit)}</strong>.</>
            )}
          </div>
        </Acc>

        <Acc num="06" title="Reference" open={acc.a4} onToggle={tog('a4')}>
          <KV k="Reference Width" v={`${refWidth} px`} />
          <KV k="Current Canvas" v={`${canvasWidth} px`} />
          <KV k="Scale" v={`${(canvasWidth / refWidth).toFixed(3)}×`} />
        </Acc>

        <div style={{ padding: 14 }}>
          <DangerBtn onClick={() => onRemove(secId, el.id)}>Remove Element</DangerBtn>
        </div>
      </div>
    </aside>
  );
}

function SectionProperties({
  sec,
  accent,
  refWidth,
  canvasWidth,
  onSetSectionLayout,
  onSetSectionBehavior,
  onRemoveSection,
  canRemove
}) {
  const [acc, setAcc] = React.useState({ a1: true, a2: true, a3: false, a4: false });
  const tog = (k) => (e) =>
    setAcc((p) => (e.metaKey || e.ctrlKey
      ? { ...p, [k]: !p[k] }
      : { a1: false, a2: false, a3: false, a4: false, [k]: !p[k] }));

  const currentBehavior = sec.behavior || (sec.hUnit === 'spx' ? 'scaleProportionally' : 'fixedHeight');

  return (
    <aside style={panelAsideStyle}>
      <PanelTitle>Section · Selected</PanelTitle>

      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        <Acc num="01" title="Responsive Behavior" open={acc.a1} onToggle={tog('a1')}>
          <div style={{ display: 'grid', gap: 6 }}>
            {Object.entries(SECTION_BEHAVIORS).map(([key, b]) => {
              const active = key === currentBehavior;
              return (
                <button
                  key={key}
                  onClick={() => onSetSectionBehavior && onSetSectionBehavior(sec.id, key)}
                  style={{
                    cursor: 'pointer', textAlign: 'left',
                    padding: '8px 10px', borderRadius: 8,
                    border: `1px solid ${active ? accent : T.ctrlBorder}`,
                    background: active ? T.accentSoft : T.ctrl,
                    display: 'flex', flexDirection: 'column',
                    gap: 3, fontFamily: 'inherit',
                    transition: `all 300ms ${EASE.out}`
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <span style={{ fontSize: 11, fontWeight: 600, color: active ? accent : T.text1 }}>
                      {b.label}
                    </span>
                    <span style={{
                      fontSize: 9, fontWeight: 600, letterSpacing: '0.06em',
                      textTransform: 'uppercase', color: T.text3
                    }}>
                      {b.hUnit}
                    </span>
                  </div>
                  <span style={{ fontSize: 10, color: T.text3, lineHeight: 1.4 }}>
                    {b.hint}
                  </span>
                </button>
              );
            })}
          </div>
        </Acc>

        <Acc num="02" title="Layout" open={acc.a2} onToggle={tog('a2')}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 6 }}>
            {Object.entries(GRID_TEMPLATES).map(([key, t]) => {
              const active = key === sec.layout;
              return (
                <button
                  key={key}
                  onClick={() => onSetSectionLayout(sec.id, key)}
                  style={{
                    cursor: 'pointer', padding: 8, borderRadius: 8,
                    border: `1px solid ${active ? accent : T.ctrlBorder}`,
                    background: active ? T.accentSoft : '#fff',
                    display: 'flex', flexDirection: 'column',
                    alignItems: 'center', gap: 4, fontFamily: 'inherit',
                    transition: `all 300ms ${EASE.out}`
                  }}
                >
                  <GridPreview cells={t.cells} accent={accent} />
                  <div style={{
                    fontSize: 9, fontWeight: 600, letterSpacing: '0.06em',
                    textTransform: 'uppercase', color: active ? accent : T.text2
                  }}>
                    {t.label}
                  </div>
                </button>
              );
            })}
          </div>
        </Acc>

        <Acc num="03" title="Live Values" open={acc.a3} onToggle={tog('a3')}>
          <KV k="Width" v={`${sec.widthPx.toFixed(0)} px`} />
          <KV k="Height" v={`${sec.heightPx.toFixed(0)} px · ${fmt(sec.hValue, sec.hUnit)}`} />
          {sec.hUnit === 'auto' && (
            <KV k="Bottom Margin" v={`${(sec.bottomMargin || 0).toFixed(0)} px`} />
          )}
          <KV k="Children" v={`${sec.children.length}`} />
        </Acc>

        <Acc num="04" title="Reference" open={acc.a4} onToggle={tog('a4')}>
          <KV k="Reference Width" v={`${refWidth} px`} />
          <KV k="Current Canvas" v={`${canvasWidth} px`} />
          <KV k="Scale" v={`${(canvasWidth / refWidth).toFixed(3)}×`} />
        </Acc>

        {canRemove && (
          <div style={{ padding: 14 }}>
            <DangerBtn onClick={() => onRemoveSection(sec.id)}>Remove Section</DangerBtn>
          </div>
        )}
      </div>
    </aside>
  );
}

function CellProperties({ cell, accent, canvasWidth }) {
  const [acc, setAcc] = React.useState({ a1: true, a2: false });
  const tog = (k) => (e) =>
    setAcc((p) => (e.metaKey || e.ctrlKey
      ? { ...p, [k]: !p[k] }
      : { a1: false, a2: false, [k]: !p[k] }));

  return (
    <aside style={panelAsideStyle}>
      <PanelTitle>Cell · Selected</PanelTitle>

      <div style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden' }}>
        <Acc num="01" title="Drop target" open={acc.a1} onToggle={tog('a1')}>
          <div style={{
            padding: 12, borderRadius: 10,
            background: T.accentSoft, border: `1px dashed ${accent}`,
            fontSize: 11, lineHeight: 1.55, color: T.text2
          }}>
            Drop a <strong style={{ color: accent }}>Title</strong>,{' '}
            <strong style={{ color: accent }}>Paragraph</strong>,{' '}
            <strong style={{ color: accent }}>Image</strong> or{' '}
            <strong style={{ color: accent }}>Container</strong> here. Text elements wrap to the
            cell width and grow vertically with content.
          </div>
        </Acc>

        <Acc num="02" title="Live Values" open={acc.a2} onToggle={tog('a2')}>
          <KV k="Cell Index" v={`${cell.cellIndex + 1}`} />
          <KV k="Layout" v={cell.layoutLabel || '—'} />
          <KV k="Width" v={`${cell.widthPx.toFixed(0)} px`} />
          <KV k="Height" v={`${cell.heightPx.toFixed(0)} px`} />
          <KV k="Items" v={`${cell.itemCount}`} />
          <KV k="Canvas" v={`${canvasWidth} px`} />
        </Acc>
      </div>
    </aside>
  );
}

function KV({ k, v }) {
  return (
    <div style={{
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      padding: '6px 0', borderBottom: `1px solid ${T.border}`
    }}>
      <span style={{
        fontSize: 9, fontWeight: 600, letterSpacing: '0.08em',
        textTransform: 'uppercase', color: T.text4
      }}>{k}</span>
      <span style={{
        fontSize: 11, fontWeight: 500, color: T.text2, fontVariantNumeric: 'tabular-nums'
      }}>{v}</span>
    </div>
  );
}

export default Component;
