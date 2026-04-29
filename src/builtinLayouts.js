// AUTO-GENERATED · /Users/yanivo/Responsive Mesh /src/builtinLayouts.js
//
// Hardcoded library of layout specs delivered through the V14 prompt.
// On first mount, Component.jsx pre-populates `layoutLibrary` from the
// BUILTIN_LAYOUTS export so every layout is one click away — no re-paste.
//
// To add a new batch:
//   1. Append the new `const LAYOUT_NNN = { ... };` declarations below the
//      existing ones, before the BUILTIN_LAYOUTS export.
//   2. Add the new identifiers to the BUILTIN_LAYOUTS array (in order).
//   3. Save. Vite HMR picks it up; the strip will show the additions.
//
// Layout shape is the V14 spec (px-at-refWidth). The playground converts
// to native responsive units when each layout is loaded.

/* eslint-disable */

import { REFERENCE_LAYOUTS } from './builtinLayoutsReference.js';

// ─────────────────────────────────────────────────────────────────────────
// LAYOUT_01..LAYOUT_10 · seed batch · regenerated for V14 mesh
//   - text bodies/titles use `behavior: 'wrap'` (auto-height, scaling width)
//   - cards use `behavior: 'wrap'` containers with parent+anchor stacks inside
//   - z indices express layering where overlap is intentional
// ─────────────────────────────────────────────────────────────────────────

const LAYOUT_01 = {
  meta: { name: 'Scattered Discovery', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'fixedHeight', height: 720, layout: 'free',
      children: [
        { id: 'tile-tl', archetype: 'image', behavior: 'scaleProportionally', x: 48, y: -40, w: 424, h: 200, z: 0,
          props: { gradient: 'linear-gradient(135deg, #d4d6f5 0%, #e8e8f0 50%, #eeece0 100%)' } },
        { id: 'tile-tr', archetype: 'image', behavior: 'scaleProportionally', x: 940, y: -16, w: 252, h: 200, z: 0,
          props: { gradient: 'radial-gradient(circle at 50% 60%, #f4f0e2 0%, #e2e3f0 55%, #c7cbf0 100%)' } },
        { id: 'tile-bl', archetype: 'image', behavior: 'scaleProportionally', x: -64, y: 320, w: 188, h: 220, z: 0,
          props: { gradient: 'radial-gradient(circle at 50% 50%, #f6f2e4 0%, #e3e4f0 55%, #cdd0f0 100%)' } },
        { id: 'tile-bc', archetype: 'image', behavior: 'scaleProportionally', x: 180, y: 460, w: 350, h: 280, z: 0,
          props: { gradient: 'radial-gradient(ellipse at 50% 80%, #ffffff 0%, #e8e8f3 35%, #cfd2f0 75%, #c7cbf0 100%)' } },
        { id: 'tile-br', archetype: 'image', behavior: 'scaleProportionally', x: 880, y: 416, w: 256, h: 220, z: 0,
          props: { gradient: 'radial-gradient(ellipse at 50% 60%, #f4efe1 0%, #dadcf0 55%, #c8cbf0 100%)' } },
        { id: 'tile-far-r', archetype: 'image', behavior: 'scaleProportionally', x: 1196, y: 360, w: 140, h: 110, z: 0,
          props: { gradient: 'radial-gradient(circle at 60% 50%, #ffffff 0%, #ecedf3 55%, #cfd2f0 100%)' } },
        { id: 'cta-explore', archetype: 'button', behavior: 'fixed', x: 600, y: 388, w: 96, h: 28, z: 2,
          props: { label: 'Explore', variant: 'ghost', radius: 0, paddingX: 4, paddingY: 4 } }
      ]
    }
  ]
};

const LAYOUT_02 = {
  meta: { name: 'Orbit Sphere', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'auto', height: 720, layout: 'free',
      children: [
        { id: 'orbit', archetype: 'image', behavior: 'scaleProportionally', x: 405, y: 70, w: 470, h: 580, z: 0,
          props: { gradient: 'radial-gradient(circle at 50% 50%, #f7f3e3 0%, #e2e3f5 35%, #c9cdf5 70%, #f0eee2 100%)' } },
        // Left column — three wrap cards anchored top→down (mesh push-cascade)
        { id: 'card-one', archetype: 'container', behavior: 'wrap', x: 88, y: 60, w: 252, h: 200,
          props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 10 } },
        { id: 'card-one-title', archetype: 'text', behavior: 'wrap', parent: 'card-one', x: 24, y: 24, w: 204, h: 28,
          props: { text: 'Item One', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', lineHeight: '1.2', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-one-body', archetype: 'text', behavior: 'wrap', parent: 'card-one', anchor: 'card-one-title', x: 24, y: 12, w: 204, h: 72,
          props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46', textAlign: 'center' } },
        { id: 'card-one-cta', archetype: 'text', behavior: 'wrap', parent: 'card-one', anchor: 'card-one-body', x: 24, y: 16, w: 204, h: 20,
          props: { text: 'Read More', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-two', archetype: 'container', behavior: 'wrap', anchor: 'card-one', x: 88, y: 24, w: 252, h: 200,
          props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 10 } },
        { id: 'card-two-title', archetype: 'text', behavior: 'wrap', parent: 'card-two', x: 24, y: 24, w: 204, h: 28,
          props: { text: 'Item Two', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', lineHeight: '1.2', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-two-body', archetype: 'text', behavior: 'wrap', parent: 'card-two', anchor: 'card-two-title', x: 24, y: 12, w: 204, h: 72,
          props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46', textAlign: 'center' } },
        { id: 'card-two-cta', archetype: 'text', behavior: 'wrap', parent: 'card-two', anchor: 'card-two-body', x: 24, y: 16, w: 204, h: 20,
          props: { text: 'Read More', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-three', archetype: 'container', behavior: 'wrap', anchor: 'card-two', x: 88, y: 24, w: 252, h: 200,
          props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 10 } },
        { id: 'card-three-title', archetype: 'text', behavior: 'wrap', parent: 'card-three', x: 24, y: 24, w: 204, h: 28,
          props: { text: 'Item Three', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', lineHeight: '1.2', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-three-body', archetype: 'text', behavior: 'wrap', parent: 'card-three', anchor: 'card-three-title', x: 24, y: 12, w: 204, h: 72,
          props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46', textAlign: 'center' } },
        { id: 'card-three-cta', archetype: 'text', behavior: 'wrap', parent: 'card-three', anchor: 'card-three-body', x: 24, y: 16, w: 204, h: 20,
          props: { text: 'Read More', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        // Right column
        { id: 'card-four', archetype: 'container', behavior: 'wrap', x: 940, y: 60, w: 252, h: 200,
          props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 10 } },
        { id: 'card-four-title', archetype: 'text', behavior: 'wrap', parent: 'card-four', x: 24, y: 24, w: 204, h: 28,
          props: { text: 'Item Four', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', lineHeight: '1.2', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-four-body', archetype: 'text', behavior: 'wrap', parent: 'card-four', anchor: 'card-four-title', x: 24, y: 12, w: 204, h: 72,
          props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46', textAlign: 'center' } },
        { id: 'card-four-cta', archetype: 'text', behavior: 'wrap', parent: 'card-four', anchor: 'card-four-body', x: 24, y: 16, w: 204, h: 20,
          props: { text: 'Read More', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-five', archetype: 'container', behavior: 'wrap', anchor: 'card-four', x: 940, y: 24, w: 252, h: 200,
          props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 10 } },
        { id: 'card-five-title', archetype: 'text', behavior: 'wrap', parent: 'card-five', x: 24, y: 24, w: 204, h: 28,
          props: { text: 'Item Five', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', lineHeight: '1.2', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-five-body', archetype: 'text', behavior: 'wrap', parent: 'card-five', anchor: 'card-five-title', x: 24, y: 12, w: 204, h: 72,
          props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46', textAlign: 'center' } },
        { id: 'card-five-cta', archetype: 'text', behavior: 'wrap', parent: 'card-five', anchor: 'card-five-body', x: 24, y: 16, w: 204, h: 20,
          props: { text: 'Read More', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-six', archetype: 'container', behavior: 'wrap', anchor: 'card-five', x: 940, y: 24, w: 252, h: 200,
          props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 10 } },
        { id: 'card-six-title', archetype: 'text', behavior: 'wrap', parent: 'card-six', x: 24, y: 24, w: 204, h: 28,
          props: { text: 'Item Six', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', lineHeight: '1.2', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-six-body', archetype: 'text', behavior: 'wrap', parent: 'card-six', anchor: 'card-six-title', x: 24, y: 12, w: 204, h: 72,
          props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46', textAlign: 'center' } },
        { id: 'card-six-cta', archetype: 'text', behavior: 'wrap', parent: 'card-six', anchor: 'card-six-body', x: 24, y: 16, w: 204, h: 20,
          props: { text: 'Read More', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#0f172a', textAlign: 'center' } }
      ]
    }
  ]
};

const LAYOUT_03 = {
  meta: { name: 'Anchored Tiles', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'fixedHeight', height: 720, layout: 'free',
      children: [
        { id: 'small-tile-top', archetype: 'image', behavior: 'scaleProportionally', x: 596, y: 80, w: 124, h: 80, z: 0,
          props: { gradient: 'radial-gradient(circle at 50% 55%, #ffffff 0%, #ecede2 50%, #d6d8e2 100%)' } },
        { id: 'main-portrait', archetype: 'image', behavior: 'scaleProportionally', anchor: 'small-tile-top', x: 668, y: -32, w: 360, h: 460, z: 1,
          props: { gradient: 'linear-gradient(180deg, #d4d7f3 0%, #e0e2ed 35%, #ecebd9 100%)' } },
        { id: 'small-tile-bot', archetype: 'image', behavior: 'scaleProportionally', anchor: 'main-portrait', x: 952, y: -68, w: 164, h: 100, z: 2,
          props: { gradient: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #e3e4f0 50%, #cdd0f0 100%)' } },
        { id: 'cta-explore', archetype: 'button', behavior: 'fixed', x: 124, y: 468, w: 96, h: 28, z: 3,
          props: { label: 'Explore', variant: 'ghost', radius: 0, paddingX: 4, paddingY: 4 } }
      ]
    }
  ]
};

const LAYOUT_04 = {
  meta: { name: 'Quiet Block', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'fixedHeight', height: 540, layout: 'free',
      children: [
        { id: 'big-block', archetype: 'image', behavior: 'scaleProportionally', x: 600, y: 30, w: 612, h: 480, z: 0,
          props: { gradient: 'radial-gradient(ellipse at 50% 70%, #ffffff 0%, #ecedf0 35%, #d3d6f0 70%, #f0ede2 100%)' } },
        { id: 'cta-explore', archetype: 'button', behavior: 'fixed', x: 96, y: 376, w: 96, h: 28, z: 1,
          props: { label: 'Explore', variant: 'ghost', radius: 0, paddingX: 4, paddingY: 4 } }
      ]
    }
  ]
};

const LAYOUT_05 = {
  meta: { name: 'Sphere & Statement', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'auto', height: 640, layout: 'free',
      children: [
        { id: 'sphere-block', archetype: 'image', behavior: 'scaleProportionally', x: 80, y: 32, w: 644, h: 580, z: 0,
          props: { gradient: 'radial-gradient(circle at 50% 50%, #f5f1e2 0%, #dde0f5 50%, #c8ccf2 85%, #c8ccf2 100%)' } },
        // Card auto-grows around its title/body/button stack
        { id: 'statement-card', archetype: 'container', behavior: 'wrap', x: 660, y: 144, w: 528, h: 332, z: 1,
          props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 0 } },
        { id: 'card-title', archetype: 'text', behavior: 'wrap', parent: 'statement-card', x: 56, y: 56, w: 416, h: 50,
          props: { text: 'Write a Title Here', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.01em', color: '#0f172a', textAlign: 'left' } },
        { id: 'card-body', archetype: 'text', behavior: 'wrap', parent: 'statement-card', anchor: 'card-title', x: 56, y: 24, w: 416, h: 132,
          props: { text: 'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.', fontFamily: 'Inter', fontSize: 15, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46', textAlign: 'left' } },
        { id: 'card-cta', archetype: 'button', behavior: 'fixed', parent: 'statement-card', anchor: 'card-body', x: 56, y: 32, w: 96, h: 36,
          props: { label: 'Explore', variant: 'primary', radius: 999, paddingX: 22, paddingY: 10 } }
      ]
    }
  ]
};

const LAYOUT_06 = {
  meta: { name: 'Centered Strip', category: 'landing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'auto', height: 600, layout: 'free',
      children: [
        // Band container is wrap → grows when body text wraps to more lines
        { id: 'band', archetype: 'container', behavior: 'wrap', x: 80, y: 240, w: 1120, h: 332,
          props: { background: 'linear-gradient(110deg, #d8dcf2 0%, #f1f1f5 38%, #e8eaef 65%, #f0ede2 100%)', borderColor: 'transparent', borderRadius: 0 } },
        { id: 'band-body', archetype: 'text', behavior: 'wrap', parent: 'band', x: 180, y: 84, w: 760, h: 96,
          props: { text: 'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.', fontFamily: 'Inter', fontSize: 17, fontWeight: '400', lineHeight: '1.6', color: '#0f172a', textAlign: 'center' } },
        { id: 'band-cta', archetype: 'button', behavior: 'fixed', parent: 'band', anchor: 'band-body', x: 512, y: 32, w: 96, h: 36,
          props: { label: 'Explore', variant: 'primary', radius: 999, paddingX: 22, paddingY: 10 } }
      ]
    }
  ]
};

const LAYOUT_07 = {
  meta: { name: 'Bleed Arch', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'auto', height: 360, layout: 'free',
      children: [
        { id: 'arch-bg', archetype: 'image', behavior: 'fixedHeight', x: 0, y: 0, w: 1280, h: 360, z: 0,
          props: { gradient: 'radial-gradient(ellipse 90% 120% at 50% 110%, #ffffff 0%, #e6e7ec 35%, #d6d9ef 70%, #d4d7ef 100%)' } },
        { id: 'eyebrow-title', archetype: 'text', behavior: 'scaleProportionally', x: 268, y: 64, w: 280, h: 90, z: 2,
          props: { text: 'Write a\nTitle here', fontFamily: 'Inter', fontSize: 32, fontWeight: '500', lineHeight: '1.15', letterSpacing: '-0.01em', color: '#0f172a', textAlign: 'left' } },
        { id: 'subtitle', archetype: 'text', behavior: 'wrap', x: 580, y: 76, w: 564, h: 24, z: 2,
          props: { text: 'A Subtitle Goes Here', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', lineHeight: '1.4', color: '#0f172a', textAlign: 'left' } },
        { id: 'body-copy', archetype: 'text', behavior: 'wrap', anchor: 'subtitle', x: 580, y: 24, w: 564, h: 180, z: 2,
          props: { text: 'This is a space to promote the business, its products or its services. Use this opportunity to help site visitors become more familiar with the business and its offerings. Reach out to current and potential clients and customers to build a sense of connection and trust. Explain what makes the business unique. Identify the qualities that set it apart from its competitors and describe them, staying true to the brand\u2019s authentic voice.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.6', color: '#0f172a', textAlign: 'left' } }
      ]
    }
  ]
};

const LAYOUT_08 = {
  meta: { name: 'Centered Disc Hero', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'auto', height: 580, layout: 'free',
      children: [
        { id: 'hero-band', archetype: 'container', behavior: 'wrap', x: 80, y: 32, w: 1120, h: 516,
          props: { background: 'linear-gradient(180deg, #dbdef0 0%, #e9eaee 55%, #ececea 100%)', borderColor: 'transparent', borderRadius: 0 } },
        { id: 'hero-disc', archetype: 'image', behavior: 'scaleProportionally', parent: 'hero-band', x: 380, y: 88, w: 360, h: 360, z: 0,
          props: { gradient: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #f4f3ee 60%, #e6e7e4 100%)' } },
        { id: 'hero-title', archetype: 'text', behavior: 'scaleProportionally', parent: 'hero-band', x: 100, y: 144, w: 920, h: 88, z: 2,
          props: { text: 'Write a Title Here', fontFamily: 'Inter', fontSize: 64, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#0f172a', textAlign: 'center' } },
        { id: 'hero-sub', archetype: 'text', behavior: 'wrap', parent: 'hero-band', anchor: 'hero-title', x: 240, y: 32, w: 800, h: 80, z: 2,
          props: { text: 'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust. Focus on what makes the business unique and how users can benefit from choosing it.', fontFamily: 'Inter', fontSize: 15, fontWeight: '400', lineHeight: '1.55', color: '#0f172a', textAlign: 'center' } },
        { id: 'hero-cta', archetype: 'button', behavior: 'fixed', parent: 'hero-band', anchor: 'hero-sub', x: 512, y: 28, w: 96, h: 36, z: 2,
          props: { label: 'Explore', variant: 'primary', radius: 999, paddingX: 22, paddingY: 10 } }
      ]
    }
  ]
};

const LAYOUT_09 = {
  meta: { name: 'Stacked Body Band', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'auto', height: 280, layout: 'free',
      children: [
        { id: 'top-body', archetype: 'text', behavior: 'wrap', x: 80, y: 80, w: 1120, h: 168,
          props: { text: 'This is a space to promote the business, its products or its services. Use this opportunity to help site visitors become more familiar with the business and its offerings. Reach out to current and potential clients and customers to build a sense of connection and trust.', fontFamily: 'Inter', fontSize: 24, fontWeight: '400', lineHeight: '1.45', color: '#0f172a', textAlign: 'left' } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 360, layout: '2col',
      children: [
        { id: 'split-left', archetype: 'container', behavior: 'wrap', cell: 0, x: 0, y: 0, w: 0, h: 0,
          props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 0 } },
        { id: 'split-left-body', archetype: 'text', behavior: 'wrap', parent: 'split-left', x: 90, y: 96, w: 460, h: 96,
          props: { text: 'Focus on the ways users can benefit from choosing this business. Present its products or services as the solution to a problem people face, or describe how they can make life easier or more enjoyable.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#0f172a', textAlign: 'center' } },
        { id: 'split-left-cta', archetype: 'button', behavior: 'fixed', parent: 'split-left', anchor: 'split-left-body', x: 175, y: 28, w: 110, h: 36,
          props: { label: 'Read More', variant: 'primary', radius: 999, paddingX: 22, paddingY: 10 } },
        { id: 'split-right', archetype: 'image', behavior: 'stretch', cell: 1, x: 0, y: 0, w: 0, h: 0,
          props: { gradient: 'linear-gradient(110deg, #d4d7f3 0%, #e0e2ed 60%, #f1efe2 100%)' } }
      ]
    }
  ]
};

const LAYOUT_10 = {
  meta: { name: 'Card Over Sphere', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'auto', height: 540, layout: 'free',
      children: [
        { id: 'sphere-block', archetype: 'image', behavior: 'scaleProportionally', x: 644, y: 40, w: 540, h: 480, z: 0,
          props: { gradient: 'radial-gradient(circle at 50% 60%, #f4f1e3 0%, #e1e3f0 55%, #d4d7f0 100%)' } },
        // Overlap card sits visually above sphere → z: 2
        { id: 'overlap-card', archetype: 'container', behavior: 'wrap', x: 280, y: 110, w: 720, h: 322, z: 2,
          props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 0 } },
        { id: 'card-eyebrow', archetype: 'text', behavior: 'wrap', parent: 'overlap-card', x: 80, y: 56, w: 560, h: 22,
          props: { text: 'A Subtitle Goes Here', fontFamily: 'Inter', fontSize: 15, fontWeight: '500', lineHeight: '1.4', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-title', archetype: 'text', behavior: 'wrap', parent: 'overlap-card', anchor: 'card-eyebrow', x: 80, y: 14, w: 560, h: 50,
          props: { text: 'Write a Title here', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.01em', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-body', archetype: 'text', behavior: 'wrap', parent: 'overlap-card', anchor: 'card-title', x: 80, y: 22, w: 560, h: 72,
          props: { text: 'Use this space to promote the business, its products or its services. Help people become familiar with the business and its offerings, creating a sense of connection and trust.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#0f172a', textAlign: 'center' } },
        { id: 'card-cta', archetype: 'button', behavior: 'fixed', parent: 'overlap-card', anchor: 'card-body', x: 312, y: 24, w: 96, h: 36,
          props: { label: 'Explore', variant: 'primary', radius: 999, paddingX: 22, paddingY: 10 } }
      ]
    }
  ]
};


// ─────────────────────────────────────────────────────────────────────────
// Generated batch 1 · LAYOUT_001 – LAYOUT_025 (Wix-template inspired)
// ─────────────────────────────────────────────────────────────────────────

const LAYOUT_001 = {
  meta: { name: 'Blank Canvas Hero', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 720, layout: 'free', children: [
    { id: 'eyebrow', archetype: 'text', behavior: 'fixed', x: 96, y: 120, w: 200, h: 18,
      props: { text: 'INTRODUCING', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#71717A', textAlign: 'left' } },
    { id: 'title', archetype: 'text', behavior: 'wrap', anchor: 'eyebrow', x: 96, y: 24, w: 880, h: 168,
      props: { text: 'A blank canvas\nfor your next idea.', fontFamily: 'Inter', fontSize: 72, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#0f172a', textAlign: 'left' } },
    { id: 'sub', archetype: 'text', behavior: 'wrap', anchor: 'title', x: 96, y: 32, w: 640, h: 56,
      props: { text: 'Start from nothing. Compose intentionally. Ship something honest.', fontFamily: 'Inter', fontSize: 17, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46', textAlign: 'left' } },
    { id: 'cta', archetype: 'button', behavior: 'fixed', anchor: 'sub', x: 96, y: 32, w: 132, h: 40,
      props: { label: 'Begin', variant: 'primary', radius: 999, paddingX: 24, paddingY: 11 } }
  ]}]
};

const LAYOUT_002 = {
  meta: { name: 'Cosmic Scroll', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 760, layout: 'free', children: [
    { id: 'orb', archetype: 'image', behavior: 'scaleProportionally', x: 320, y: 80, w: 640, h: 640, z: 0,
      props: { gradient: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #d6d8f5 35%, #9296d8 75%, #4a4f8a 100%)' } },
    { id: 'cosmic-eyebrow', archetype: 'text', behavior: 'fixed', x: 96, y: 96, w: 240, h: 18, z: 2,
      props: { text: 'COSMIC SCROLL', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.18em', color: '#71717A' } },
    { id: 'cosmic-title', archetype: 'text', behavior: 'wrap', anchor: 'cosmic-eyebrow', x: 96, y: 24, w: 480, h: 144, z: 2,
      props: { text: 'Worlds built\nfrom motion.', fontFamily: 'Inter', fontSize: 60, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#0f172a' } },
    { id: 'cosmic-body', archetype: 'text', behavior: 'wrap', anchor: 'cosmic-title', x: 96, y: 28, w: 460, h: 96, z: 2,
      props: { text: 'A studio template that turns scroll into orbit. Composed for stillness, designed for movement.', fontFamily: 'Inter', fontSize: 15, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } },
    { id: 'cosmic-cta', archetype: 'button', behavior: 'fixed', anchor: 'cosmic-body', x: 96, y: 28, w: 110, h: 38, z: 2,
      props: { label: 'Enter', variant: 'primary', radius: 999, paddingX: 24, paddingY: 10 } }
  ]}]
};

const LAYOUT_003 = {
  meta: { name: 'AI Tech Hero', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 680, layout: 'free', children: [
    { id: 'ai-band', archetype: 'container', behavior: 'wrap', x: 80, y: 64, w: 1120, h: 552,
      props: { background: 'linear-gradient(135deg, #1a1d2e 0%, #2d3252 50%, #1f2230 100%)', borderColor: 'transparent', borderRadius: 16 } },
    { id: 'ai-glow', archetype: 'image', behavior: 'scaleProportionally', parent: 'ai-band', x: 720, y: 80, w: 360, h: 360, z: 0,
      props: { gradient: 'radial-gradient(circle at 50% 50%, #c9cdf0 0%, #6b71a8 40%, transparent 75%)' } },
    { id: 'ai-eyebrow', archetype: 'text', behavior: 'wrap', parent: 'ai-band', x: 64, y: 96, w: 200, h: 16, z: 2,
      props: { text: 'AI · INFRASTRUCTURE', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.18em', color: '#a8acd0' } },
    { id: 'ai-title', archetype: 'text', behavior: 'wrap', parent: 'ai-band', anchor: 'ai-eyebrow', x: 64, y: 24, w: 640, h: 192, z: 2,
      props: { text: 'Models that\nthink in your shape.', fontFamily: 'Inter', fontSize: 60, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#ffffff' } },
    { id: 'ai-body', archetype: 'text', behavior: 'wrap', parent: 'ai-band', anchor: 'ai-title', x: 64, y: 28, w: 540, h: 78, z: 2,
      props: { text: 'Inference at the edge. Training on your fleet. Pricing that reads like a phone bill, not a hostage note.', fontFamily: 'Inter', fontSize: 15, fontWeight: '400', lineHeight: '1.6', color: '#d4d6e8' } },
    { id: 'ai-cta', archetype: 'button', behavior: 'fixed', parent: 'ai-band', anchor: 'ai-body', x: 64, y: 32, w: 132, h: 40, z: 2,
      props: { label: 'See specs', variant: 'primary', radius: 999, paddingX: 24, paddingY: 11 } }
  ]}]
};

const LAYOUT_004 = {
  meta: { name: 'Insurance Landing', category: 'landing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 640, layout: 'free', children: [
    { id: 'ins-hero', archetype: 'image', behavior: 'scaleProportionally', x: 640, y: 56, w: 560, h: 528, z: 0,
      props: { gradient: 'linear-gradient(160deg, #d8dcf0 0%, #f0eee2 60%, #e8e9ed 100%)' } },
    { id: 'ins-eyebrow', archetype: 'text', behavior: 'fixed', x: 96, y: 144, w: 220, h: 18, z: 2,
      props: { text: 'TRUSTED SINCE 1962', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A' } },
    { id: 'ins-title', archetype: 'text', behavior: 'wrap', anchor: 'ins-eyebrow', x: 96, y: 24, w: 520, h: 156, z: 2,
      props: { text: 'Coverage that\ndoesn\u2019t flinch.', fontFamily: 'Inter', fontSize: 56, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#0f172a' } },
    { id: 'ins-body', archetype: 'text', behavior: 'wrap', anchor: 'ins-title', x: 96, y: 24, w: 460, h: 80, z: 2,
      props: { text: 'Quotes in 90 seconds. Claims paid in 48 hours. The fine print is the same size as the headline.', fontFamily: 'Inter', fontSize: 15, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } },
    { id: 'ins-cta', archetype: 'button', behavior: 'fixed', anchor: 'ins-body', x: 96, y: 28, w: 156, h: 42, z: 2,
      props: { label: 'Get a quote', variant: 'primary', radius: 999, paddingX: 24, paddingY: 12 } }
  ]}]
};

const LAYOUT_005 = {
  meta: { name: 'Studio Portfolio', category: 'portfolio', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 720, layout: 'free', children: [
    { id: 'pf-tile-1', archetype: 'image', behavior: 'scaleProportionally', x: 96, y: 96, w: 320, h: 240,
      props: { gradient: 'linear-gradient(135deg, #d4d7f3 0%, #ecedf0 100%)' } },
    { id: 'pf-tile-2', archetype: 'image', behavior: 'scaleProportionally', anchor: 'pf-tile-1', x: 96, y: 16, w: 320, h: 220,
      props: { gradient: 'linear-gradient(135deg, #f1efe2 0%, #e8e9ec 100%)' } },
    { id: 'pf-tile-3', archetype: 'image', behavior: 'scaleProportionally', x: 432, y: 168, w: 320, h: 320,
      props: { gradient: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #e2e3f0 60%, #c8cbf0 100%)' } },
    { id: 'pf-tile-4', archetype: 'image', behavior: 'scaleProportionally', x: 768, y: 96, w: 416, h: 280,
      props: { gradient: 'linear-gradient(120deg, #ddd9c8 0%, #efeae0 60%, #d8dbeb 100%)' } },
    { id: 'pf-tile-5', archetype: 'image', behavior: 'scaleProportionally', anchor: 'pf-tile-4', x: 768, y: 24, w: 416, h: 232,
      props: { gradient: 'linear-gradient(120deg, #cfd2ec 0%, #e6e7ed 100%)' } },
    { id: 'pf-eyebrow', archetype: 'text', behavior: 'wrap', anchor: 'pf-tile-3', x: 432, y: 24, w: 320, h: 16,
      props: { text: 'INDEX · 2024', fontFamily: 'Inter', fontSize: 10, fontWeight: '500', letterSpacing: '0.18em', color: '#71717A' } },
    { id: 'pf-title', archetype: 'text', behavior: 'wrap', anchor: 'pf-eyebrow', x: 432, y: 16, w: 320, h: 32,
      props: { text: 'Selected Works', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', lineHeight: '1.2', color: '#0f172a' } }
  ]}]
};

const LAYOUT_006 = {
  meta: { name: 'Three Up Cards', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    { behavior: 'auto', height: 200, layout: 'free', children: [
      { id: 'tu-eyebrow', archetype: 'text', behavior: 'fixed', x: 96, y: 64, w: 200, h: 16,
        props: { text: 'WHAT WE DO', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A' } },
      { id: 'tu-title', archetype: 'text', behavior: 'wrap', anchor: 'tu-eyebrow', x: 96, y: 16, w: 740, h: 56,
        props: { text: 'Three things, done seriously.', fontFamily: 'Inter', fontSize: 40, fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.01em', color: '#0f172a' } }
    ]},
    // 3-col cells; inside each cell, title→body via mesh anchor (cell-scoped)
    { behavior: 'fixedHeight', height: 360, layout: '3col', children: [
      { id: 'tu-c1', archetype: 'container', behavior: 'wrap', cell: 0, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 0 } },
      { id: 'tu-c1-title', archetype: 'text', behavior: 'wrap', parent: 'tu-c1', x: 40, y: 56, w: 280, h: 32,
        props: { text: 'Strategy', fontFamily: 'Inter', fontSize: 24, fontWeight: '500', color: '#0f172a' } },
      { id: 'tu-c1-body', archetype: 'text', behavior: 'wrap', parent: 'tu-c1', anchor: 'tu-c1-title', x: 40, y: 12, w: 280, h: 96,
        props: { text: 'Brand definition, audit, positioning, messaging architecture, naming.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } },
      { id: 'tu-c2', archetype: 'container', behavior: 'wrap', cell: 1, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 0 } },
      { id: 'tu-c2-title', archetype: 'text', behavior: 'wrap', parent: 'tu-c2', x: 40, y: 56, w: 280, h: 32,
        props: { text: 'Design', fontFamily: 'Inter', fontSize: 24, fontWeight: '500', color: '#0f172a' } },
      { id: 'tu-c2-body', archetype: 'text', behavior: 'wrap', parent: 'tu-c2', anchor: 'tu-c2-title', x: 40, y: 12, w: 280, h: 96,
        props: { text: 'Identity systems, type, motion, packaging, environments, digital surfaces.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } },
      { id: 'tu-c3', archetype: 'container', behavior: 'wrap', cell: 2, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 0 } },
      { id: 'tu-c3-title', archetype: 'text', behavior: 'wrap', parent: 'tu-c3', x: 40, y: 56, w: 280, h: 32,
        props: { text: 'Build', fontFamily: 'Inter', fontSize: 24, fontWeight: '500', color: '#0f172a' } },
      { id: 'tu-c3-body', archetype: 'text', behavior: 'wrap', parent: 'tu-c3', anchor: 'tu-c3-title', x: 40, y: 12, w: 280, h: 96,
        props: { text: 'Static sites, web apps, CMS, e-commerce, performance audits, ops.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } }
    ]}
  ]
};

const LAYOUT_007 = {
  meta: { name: 'Editorial Pair', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 600, layout: 'free', children: [
    { id: 'qe-img', archetype: 'image', behavior: 'scaleProportionally', x: 96, y: 64, w: 480, h: 472,
      props: { gradient: 'linear-gradient(180deg, #d4d7f3 0%, #e0e2ed 50%, #ecebd9 100%)' } },
    { id: 'qe-eyebrow', archetype: 'text', behavior: 'wrap', x: 632, y: 144, w: 480, h: 16,
      props: { text: 'ESSAY · ISSUE 14', fontFamily: 'Inter', fontSize: 10, fontWeight: '500', letterSpacing: '0.18em', color: '#71717A' } },
    { id: 'qe-title', archetype: 'text', behavior: 'wrap', anchor: 'qe-eyebrow', x: 632, y: 18, w: 480, h: 132,
      props: { text: 'On the discipline\nof leaving things out.', fontFamily: 'Inter', fontSize: 40, fontWeight: '500', lineHeight: '1.15', letterSpacing: '-0.01em', color: '#0f172a' } },
    { id: 'qe-body', archetype: 'text', behavior: 'wrap', anchor: 'qe-title', x: 632, y: 28, w: 480, h: 156,
      props: { text: 'The first hundred decisions are easy. They are the ones the brief asks for. The next thousand are about removing the first hundred until something quieter is left in the room.', fontFamily: 'Inter', fontSize: 15, fontWeight: '400', lineHeight: '1.65', color: '#3F3F46' } },
    { id: 'qe-cta', archetype: 'button', behavior: 'fixed', anchor: 'qe-body', x: 632, y: 28, w: 110, h: 32,
      props: { label: 'Read', variant: 'ghost', radius: 0, paddingX: 4, paddingY: 6 } }
  ]}]
};

const LAYOUT_008 = {
  meta: { name: 'Pricing Triplet', category: 'pricing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    { behavior: 'auto', height: 180, layout: 'free', children: [
      { id: 'pr-eyebrow', archetype: 'text', behavior: 'fixed', x: 96, y: 56, w: 200, h: 16,
        props: { text: 'PRICING', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A', textAlign: 'center' } },
      { id: 'pr-title', archetype: 'text', behavior: 'wrap', anchor: 'pr-eyebrow', x: 96, y: 16, w: 1088, h: 56,
        props: { text: 'Three plans. No traps.', fontFamily: 'Inter', fontSize: 40, fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.01em', color: '#0f172a', textAlign: 'center' } }
    ]},
    // 3-col cells; per-cell stack via mesh: tier→price→features→cta
    { behavior: 'fixedHeight', height: 480, layout: '3col', children: [
      { id: 'pr-c1', archetype: 'container', behavior: 'wrap', cell: 0, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.08)', borderRadius: 12 } },
      { id: 'pr-c1-tier', archetype: 'text', behavior: 'wrap', parent: 'pr-c1', x: 32, y: 40, w: 280, h: 24,
        props: { text: 'Solo', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#71717A', letterSpacing: '0.08em' } },
      { id: 'pr-c1-price', archetype: 'text', behavior: 'wrap', parent: 'pr-c1', anchor: 'pr-c1-tier', x: 32, y: 12, w: 280, h: 64,
        props: { text: '$12', fontFamily: 'Inter', fontSize: 56, fontWeight: '500', lineHeight: '1', color: '#0f172a' } },
      { id: 'pr-c1-feat', archetype: 'text', behavior: 'wrap', parent: 'pr-c1', anchor: 'pr-c1-price', x: 32, y: 12, w: 280, h: 180,
        props: { text: 'One workspace.\nUnlimited drafts.\nExport to PDF.\nEmail support.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.9', color: '#3F3F46' } },
      { id: 'pr-c1-cta', archetype: 'button', behavior: 'fixed', parent: 'pr-c1', anchor: 'pr-c1-feat', x: 32, y: 28, w: 140, h: 38,
        props: { label: 'Choose Solo', variant: 'ghost', radius: 999, paddingX: 18, paddingY: 10 } },

      { id: 'pr-c2', archetype: 'container', behavior: 'wrap', cell: 1, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#0f172a', borderColor: 'transparent', borderRadius: 12 } },
      { id: 'pr-c2-tier', archetype: 'text', behavior: 'wrap', parent: 'pr-c2', x: 32, y: 40, w: 280, h: 24,
        props: { text: 'TEAM · POPULAR', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#a8acd0', letterSpacing: '0.08em' } },
      { id: 'pr-c2-price', archetype: 'text', behavior: 'wrap', parent: 'pr-c2', anchor: 'pr-c2-tier', x: 32, y: 12, w: 280, h: 64,
        props: { text: '$32', fontFamily: 'Inter', fontSize: 56, fontWeight: '500', lineHeight: '1', color: '#ffffff' } },
      { id: 'pr-c2-feat', archetype: 'text', behavior: 'wrap', parent: 'pr-c2', anchor: 'pr-c2-price', x: 32, y: 12, w: 280, h: 180,
        props: { text: 'Five workspaces.\nShared libraries.\nVersion history.\nPriority support.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.9', color: '#d4d6e8' } },
      { id: 'pr-c2-cta', archetype: 'button', behavior: 'fixed', parent: 'pr-c2', anchor: 'pr-c2-feat', x: 32, y: 28, w: 140, h: 38,
        props: { label: 'Choose Team', variant: 'primary', radius: 999, paddingX: 18, paddingY: 10 } },

      { id: 'pr-c3', archetype: 'container', behavior: 'wrap', cell: 2, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.08)', borderRadius: 12 } },
      { id: 'pr-c3-tier', archetype: 'text', behavior: 'wrap', parent: 'pr-c3', x: 32, y: 40, w: 280, h: 24,
        props: { text: 'Studio', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#71717A', letterSpacing: '0.08em' } },
      { id: 'pr-c3-price', archetype: 'text', behavior: 'wrap', parent: 'pr-c3', anchor: 'pr-c3-tier', x: 32, y: 12, w: 280, h: 64,
        props: { text: '$96', fontFamily: 'Inter', fontSize: 56, fontWeight: '500', lineHeight: '1', color: '#0f172a' } },
      { id: 'pr-c3-feat', archetype: 'text', behavior: 'wrap', parent: 'pr-c3', anchor: 'pr-c3-price', x: 32, y: 12, w: 280, h: 180,
        props: { text: 'Unlimited everything.\nSSO + SCIM.\nDedicated success.\nCustom contract.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.9', color: '#3F3F46' } },
      { id: 'pr-c3-cta', archetype: 'button', behavior: 'fixed', parent: 'pr-c3', anchor: 'pr-c3-feat', x: 32, y: 28, w: 140, h: 38,
        props: { label: 'Talk to us', variant: 'ghost', radius: 999, paddingX: 18, paddingY: 10 } }
    ]}
  ]
};

const LAYOUT_009 = {
  meta: { name: 'Service Triptych', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 580, layout: 'free', children: [
    { id: 'st-1', archetype: 'image', behavior: 'scaleProportionally', x: 80, y: 64, w: 360, h: 460,
      props: { gradient: 'linear-gradient(180deg, #d8dcf2 0%, #e8eaee 100%)' } },
    { id: 'st-2', archetype: 'image', behavior: 'scaleProportionally', x: 460, y: 96, w: 360, h: 396,
      props: { gradient: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #ecedf0 60%, #d3d6f0 100%)' } },
    { id: 'st-3', archetype: 'image', behavior: 'scaleProportionally', x: 840, y: 64, w: 360, h: 460,
      props: { gradient: 'linear-gradient(135deg, #f1efe2 0%, #e8e9ec 60%, #d4d7ef 100%)' } },
    { id: 'st-1-cap', archetype: 'text', behavior: 'wrap', anchor: 'st-1', x: 80, y: 16, w: 360, h: 24,
      props: { text: 'Studio', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
    { id: 'st-2-cap', archetype: 'text', behavior: 'wrap', anchor: 'st-2', x: 460, y: 16, w: 360, h: 24,
      props: { text: 'Catalog', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'st-3-cap', archetype: 'text', behavior: 'wrap', anchor: 'st-3', x: 840, y: 16, w: 360, h: 24,
      props: { text: 'Process', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a', textAlign: 'right' } }
  ]}]
};

const LAYOUT_010 = {
  meta: { name: 'Centered Statement', category: 'landing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 560, layout: 'free', children: [
    { id: 'cs-bg', archetype: 'image', behavior: 'fixedHeight', x: 0, y: 0, w: 1280, h: 560, z: 0,
      props: { gradient: 'radial-gradient(ellipse 80% 100% at 50% 60%, #ffffff 0%, #e8e9f0 40%, #cfd2ef 80%, #b9bdea 100%)' } },
    { id: 'cs-eyebrow', archetype: 'text', behavior: 'wrap', x: 240, y: 168, w: 800, h: 18, z: 2,
      props: { text: 'A QUIET MANIFESTO', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.20em', color: '#71717A', textAlign: 'center' } },
    { id: 'cs-title', archetype: 'text', behavior: 'scaleProportionally', anchor: 'cs-eyebrow', x: 240, y: 24, w: 800, h: 168, z: 2,
      props: { text: 'Make less.\nMake it last.', fontFamily: 'Inter', fontSize: 80, fontWeight: '500', lineHeight: '1.0', letterSpacing: '-0.03em', color: '#0f172a', textAlign: 'center' } },
    { id: 'cs-cta', archetype: 'button', behavior: 'fixed', anchor: 'cs-title', x: 592, y: 32, w: 96, h: 36, z: 2,
      props: { label: 'Read', variant: 'ghost', radius: 0, paddingX: 4, paddingY: 8 } }
  ]}]
};

const LAYOUT_011 = {
  meta: { name: 'Split Hero', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 600, layout: '2col', children: [
    { id: 'sh-left', archetype: 'container', behavior: 'wrap', cell: 0, x: 0, y: 0, w: 0, h: 0,
      props: { background: '#FFFFFF', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'sh-eyebrow', archetype: 'text', behavior: 'wrap', parent: 'sh-left', x: 96, y: 168, w: 480, h: 16,
      props: { text: 'CASE 04 · MORNING LIGHT', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A' } },
    { id: 'sh-title', archetype: 'text', behavior: 'wrap', parent: 'sh-left', anchor: 'sh-eyebrow', x: 96, y: 16, w: 480, h: 144,
      props: { text: 'Quiet brands\nfor loud markets.', fontFamily: 'Inter', fontSize: 44, fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.015em', color: '#0f172a' } },
    { id: 'sh-body', archetype: 'text', behavior: 'wrap', parent: 'sh-left', anchor: 'sh-title', x: 96, y: 24, w: 460, h: 96,
      props: { text: 'We work with founders who would rather be respected than recognized. Strategy, identity, and what comes after.', fontFamily: 'Inter', fontSize: 15, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } },
    { id: 'sh-cta', archetype: 'button', behavior: 'fixed', parent: 'sh-left', anchor: 'sh-body', x: 96, y: 28, w: 130, h: 38,
      props: { label: 'Case study', variant: 'primary', radius: 999, paddingX: 22, paddingY: 10 } },
    { id: 'sh-right', archetype: 'image', behavior: 'stretch', cell: 1, x: 0, y: 0, w: 0, h: 0,
      props: { gradient: 'linear-gradient(135deg, #d4d7f3 0%, #f0eee2 60%, #e8e9ed 100%)' } }
  ]}]
};

const LAYOUT_012 = {
  meta: { name: 'Centered Disc', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 700, layout: 'free', children: [
    { id: 'cd-disc', archetype: 'image', behavior: 'scaleProportionally', x: 408, y: 80, w: 464, h: 464, z: 0,
      props: { gradient: 'radial-gradient(circle at 50% 45%, #ffffff 0%, #f1efe2 40%, #d8dcf2 80%, #b8bce6 100%)' } },
    { id: 'cd-eyebrow', archetype: 'text', behavior: 'wrap', anchor: 'cd-disc', x: 408, y: 36, w: 464, h: 18, z: 2,
      props: { text: 'AURORA · 02', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.20em', color: '#71717A', textAlign: 'center' } },
    { id: 'cd-title', archetype: 'text', behavior: 'wrap', anchor: 'cd-eyebrow', x: 240, y: 14, w: 800, h: 56, z: 2,
      props: { text: 'A field guide to soft systems.', fontFamily: 'Inter', fontSize: 34, fontWeight: '500', lineHeight: '1.15', letterSpacing: '-0.01em', color: '#0f172a', textAlign: 'center' } }
  ]}]
};

const LAYOUT_013 = {
  meta: { name: 'Featured Pair', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 540, layout: '2col', children: [
    { id: 'fa-img', archetype: 'image', behavior: 'stretch', cell: 0, x: 0, y: 0, w: 0, h: 0,
      props: { gradient: 'linear-gradient(165deg, #cfd2ec 0%, #e8e9ed 50%, #f1efe2 100%)' } },
    { id: 'fa-card', archetype: 'container', behavior: 'wrap', cell: 1, x: 0, y: 0, w: 0, h: 0,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'fa-eyebrow', archetype: 'text', behavior: 'wrap', parent: 'fa-card', x: 80, y: 144, w: 440, h: 16,
      props: { text: 'FEATURE', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.18em', color: '#71717A' } },
    { id: 'fa-title', archetype: 'text', behavior: 'wrap', parent: 'fa-card', anchor: 'fa-eyebrow', x: 80, y: 16, w: 440, h: 132,
      props: { text: 'Letter from\nthe second floor.', fontFamily: 'Inter', fontSize: 40, fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.01em', color: '#0f172a' } },
    { id: 'fa-body', archetype: 'text', behavior: 'wrap', parent: 'fa-card', anchor: 'fa-title', x: 80, y: 24, w: 440, h: 132,
      props: { text: 'The studio is small on purpose. Every project is run by the people who pitched it. The third paragraph of every brief is the only one that matters.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.65', color: '#3F3F46' } }
  ]}]
};

const LAYOUT_014 = {
  meta: { name: 'Mosaic Five', category: 'portfolio', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 600, layout: 'free', children: [
    { id: 'm5-1', archetype: 'image', behavior: 'scaleProportionally', x: 80, y: 64, w: 360, h: 240,
      props: { gradient: 'linear-gradient(135deg, #d4d7f3 0%, #ecedf0 100%)' } },
    { id: 'm5-2', archetype: 'image', behavior: 'scaleProportionally', anchor: 'm5-1', x: 80, y: 16, w: 240, h: 240,
      props: { gradient: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #e3e4f0 70%, #cdd0f0 100%)' } },
    { id: 'm5-3', archetype: 'image', behavior: 'scaleProportionally', anchor: 'm5-2', x: 80, y: -240, w: 240, h: 240,
      props: { gradient: 'linear-gradient(135deg, #f1efe2 0%, #d8dcf2 100%)' } },
    { id: 'm5-4', archetype: 'image', behavior: 'scaleProportionally', x: 460, y: 64, w: 360, h: 472,
      props: { gradient: 'linear-gradient(180deg, #d8dcf2 0%, #e8eaee 100%)' } },
    { id: 'm5-5', archetype: 'image', behavior: 'scaleProportionally', x: 840, y: 64, w: 360, h: 472,
      props: { gradient: 'radial-gradient(ellipse at 50% 50%, #ffffff 0%, #f0eee2 50%, #cfd2ef 100%)' } }
  ]}]
};

const LAYOUT_015 = {
  meta: { name: 'Big Statement', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 480, layout: 'free', children: [
    { id: 'bs-bg', archetype: 'image', behavior: 'fixedHeight', x: 0, y: 0, w: 1280, h: 480, z: 0,
      props: { gradient: 'linear-gradient(135deg, #f0eee2 0%, #e8e9ed 50%, #d4d7f3 100%)' } },
    { id: 'bs-quote', archetype: 'text', behavior: 'wrap', x: 160, y: 144, w: 960, h: 192, z: 2,
      props: { text: '\u201CMost of what we ship in the first year is not the product. It\u2019s the relationship between you and the empty page.\u201D', fontFamily: 'Inter', fontSize: 36, fontWeight: '400', lineHeight: '1.3', letterSpacing: '-0.005em', color: '#0f172a', textAlign: 'left' } },
    { id: 'bs-attr', archetype: 'text', behavior: 'wrap', anchor: 'bs-quote', x: 160, y: 24, w: 960, h: 18, z: 2,
      props: { text: '— Co-founder, Field Notes 02', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.06em', color: '#71717A' } }
  ]}]
};

const LAYOUT_016 = {
  meta: { name: 'Six Card Grid', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    { behavior: 'auto', height: 160, layout: 'free', children: [
      { id: 'sg-eyebrow', archetype: 'text', behavior: 'fixed', x: 96, y: 56, w: 200, h: 16,
        props: { text: 'CAPABILITIES', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A' } },
      { id: 'sg-title', archetype: 'text', behavior: 'wrap', anchor: 'sg-eyebrow', x: 96, y: 16, w: 600, h: 56,
        props: { text: 'Six lenses on the work.', fontFamily: 'Inter', fontSize: 40, fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.01em', color: '#0f172a' } }
    ]},
    // Two rows of three cards. Each card is a `wrap` container; bottom row anchors to top row for push-cascade.
    { behavior: 'auto', height: 480, layout: 'free', children: [
      { id: 'sg-c1', archetype: 'container', behavior: 'wrap', x: 80, y: 0, w: 352, h: 220,
        props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 8 } },
      { id: 'sg-c1-title', archetype: 'text', behavior: 'wrap', parent: 'sg-c1', x: 28, y: 32, w: 296, h: 28,
        props: { text: 'Strategy', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', color: '#0f172a' } },
      { id: 'sg-c1-body', archetype: 'text', behavior: 'wrap', parent: 'sg-c1', anchor: 'sg-c1-title', x: 28, y: 12, w: 296, h: 80,
        props: { text: 'Audit, positioning, voice, narrative architecture.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } },

      { id: 'sg-c2', archetype: 'container', behavior: 'wrap', x: 464, y: 0, w: 352, h: 220,
        props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
      { id: 'sg-c2-title', archetype: 'text', behavior: 'wrap', parent: 'sg-c2', x: 28, y: 32, w: 296, h: 28,
        props: { text: 'Identity', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', color: '#0f172a' } },
      { id: 'sg-c2-body', archetype: 'text', behavior: 'wrap', parent: 'sg-c2', anchor: 'sg-c2-title', x: 28, y: 12, w: 296, h: 80,
        props: { text: 'Marks, type systems, color, motion principles.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } },

      { id: 'sg-c3', archetype: 'container', behavior: 'wrap', x: 848, y: 0, w: 352, h: 220,
        props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 8 } },
      { id: 'sg-c3-title', archetype: 'text', behavior: 'wrap', parent: 'sg-c3', x: 28, y: 32, w: 296, h: 28,
        props: { text: 'Web', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', color: '#0f172a' } },
      { id: 'sg-c3-body', archetype: 'text', behavior: 'wrap', parent: 'sg-c3', anchor: 'sg-c3-title', x: 28, y: 12, w: 296, h: 80,
        props: { text: 'Static, dynamic, headless, e-commerce, performance.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } },

      { id: 'sg-c4', archetype: 'container', behavior: 'wrap', anchor: 'sg-c1', x: 80, y: 32, w: 352, h: 220,
        props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
      { id: 'sg-c4-title', archetype: 'text', behavior: 'wrap', parent: 'sg-c4', x: 28, y: 32, w: 296, h: 28,
        props: { text: 'Editorial', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', color: '#0f172a' } },
      { id: 'sg-c4-body', archetype: 'text', behavior: 'wrap', parent: 'sg-c4', anchor: 'sg-c4-title', x: 28, y: 12, w: 296, h: 80,
        props: { text: 'Books, magazines, longform, annual reports.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } },

      { id: 'sg-c5', archetype: 'container', behavior: 'wrap', anchor: 'sg-c2', x: 464, y: 32, w: 352, h: 220,
        props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 8 } },
      { id: 'sg-c5-title', archetype: 'text', behavior: 'wrap', parent: 'sg-c5', x: 28, y: 32, w: 296, h: 28,
        props: { text: 'Motion', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', color: '#0f172a' } },
      { id: 'sg-c5-body', archetype: 'text', behavior: 'wrap', parent: 'sg-c5', anchor: 'sg-c5-title', x: 28, y: 12, w: 296, h: 80,
        props: { text: 'Brand films, app intros, OOH loops, opener sequences.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } },

      { id: 'sg-c6', archetype: 'container', behavior: 'wrap', anchor: 'sg-c3', x: 848, y: 32, w: 352, h: 220,
        props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
      { id: 'sg-c6-title', archetype: 'text', behavior: 'wrap', parent: 'sg-c6', x: 28, y: 32, w: 296, h: 28,
        props: { text: 'Spatial', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', color: '#0f172a' } },
      { id: 'sg-c6-body', archetype: 'text', behavior: 'wrap', parent: 'sg-c6', anchor: 'sg-c6-title', x: 28, y: 12, w: 296, h: 80,
        props: { text: 'Wayfinding, retail, exhibitions, environmental type.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } }
    ]}
  ]
};

const LAYOUT_017 = {
  meta: { name: 'FAQ Stack', category: 'docs', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 720, layout: 'free', children: [
    { id: 'fq-eyebrow', archetype: 'text', behavior: 'fixed', x: 96, y: 64, w: 240, h: 16,
      props: { text: 'COMMON QUESTIONS', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.18em', color: '#71717A' } },
    { id: 'fq-title', archetype: 'text', behavior: 'wrap', anchor: 'fq-eyebrow', x: 96, y: 16, w: 720, h: 56,
      props: { text: 'Things people ask before they ask.', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', lineHeight: '1.15', letterSpacing: '-0.01em', color: '#0f172a' } },
    // Each FAQ row is a wrap container with one wrap text inside; rows mesh-anchor in a chain.
    { id: 'fq-1', archetype: 'container', behavior: 'wrap', anchor: 'fq-title', x: 96, y: 64, w: 1088, h: 80,
      props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.08)', borderRadius: 12 } },
    { id: 'fq-1-q', archetype: 'text', behavior: 'wrap', parent: 'fq-1', x: 32, y: 30, w: 900, h: 24,
      props: { text: 'How long does a typical engagement take?', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a' } },
    { id: 'fq-2', archetype: 'container', behavior: 'wrap', anchor: 'fq-1', x: 96, y: 12, w: 1088, h: 80,
      props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.08)', borderRadius: 12 } },
    { id: 'fq-2-q', archetype: 'text', behavior: 'wrap', parent: 'fq-2', x: 32, y: 30, w: 900, h: 24,
      props: { text: 'Do you take equity instead of fees?', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a' } },
    { id: 'fq-3', archetype: 'container', behavior: 'wrap', anchor: 'fq-2', x: 96, y: 12, w: 1088, h: 80,
      props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.08)', borderRadius: 12 } },
    { id: 'fq-3-q', archetype: 'text', behavior: 'wrap', parent: 'fq-3', x: 32, y: 30, w: 900, h: 24,
      props: { text: 'What does a kick-off look like?', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a' } },
    { id: 'fq-4', archetype: 'container', behavior: 'wrap', anchor: 'fq-3', x: 96, y: 12, w: 1088, h: 80,
      props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.08)', borderRadius: 12 } },
    { id: 'fq-4-q', archetype: 'text', behavior: 'wrap', parent: 'fq-4', x: 32, y: 30, w: 900, h: 24,
      props: { text: 'Can we hire one specialist instead of the team?', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a' } },
    { id: 'fq-5', archetype: 'container', behavior: 'wrap', anchor: 'fq-4', x: 96, y: 12, w: 1088, h: 80,
      props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.08)', borderRadius: 12 } },
    { id: 'fq-5-q', archetype: 'text', behavior: 'wrap', parent: 'fq-5', x: 32, y: 30, w: 900, h: 24,
      props: { text: 'Where are you based, and does it matter?', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a' } }
  ]}]
};

const LAYOUT_018 = {
  meta: { name: 'Testimonial Triplet', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 460, layout: '3col', children: [
    { id: 'tt-c1', archetype: 'container', behavior: 'wrap', cell: 0, x: 0, y: 0, w: 0, h: 0,
      props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 12 } },
    { id: 'tt-c1-q', archetype: 'text', behavior: 'wrap', parent: 'tt-c1', x: 36, y: 56, w: 296, h: 168,
      props: { text: '\u201CThey returned a brand that survived our second year, our pivot, and our hiring spree.\u201D', fontFamily: 'Inter', fontSize: 17, fontWeight: '400', lineHeight: '1.5', color: '#0f172a' } },
    { id: 'tt-c1-attr', archetype: 'text', behavior: 'wrap', parent: 'tt-c1', anchor: 'tt-c1-q', x: 36, y: 40, w: 296, h: 32,
      props: { text: 'Reha L. — Founder, Aulis', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.04em', color: '#71717A' } },

    { id: 'tt-c2', archetype: 'container', behavior: 'wrap', cell: 1, x: 0, y: 0, w: 0, h: 0,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 12 } },
    { id: 'tt-c2-q', archetype: 'text', behavior: 'wrap', parent: 'tt-c2', x: 36, y: 56, w: 296, h: 168,
      props: { text: '\u201CThe site loaded faster than the agency below them charged. Quietly impressive.\u201D', fontFamily: 'Inter', fontSize: 17, fontWeight: '400', lineHeight: '1.5', color: '#0f172a' } },
    { id: 'tt-c2-attr', archetype: 'text', behavior: 'wrap', parent: 'tt-c2', anchor: 'tt-c2-q', x: 36, y: 40, w: 296, h: 32,
      props: { text: 'Hari V. — Head of Brand, Pomelo', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.04em', color: '#71717A' } },

    { id: 'tt-c3', archetype: 'container', behavior: 'wrap', cell: 2, x: 0, y: 0, w: 0, h: 0,
      props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 12 } },
    { id: 'tt-c3-q', archetype: 'text', behavior: 'wrap', parent: 'tt-c3', x: 36, y: 56, w: 296, h: 168,
      props: { text: '\u201CWhat we asked for and what we got matched exactly. That doesn\u2019t happen here often.\u201D', fontFamily: 'Inter', fontSize: 17, fontWeight: '400', lineHeight: '1.5', color: '#0f172a' } },
    { id: 'tt-c3-attr', archetype: 'text', behavior: 'wrap', parent: 'tt-c3', anchor: 'tt-c3-q', x: 36, y: 40, w: 296, h: 32,
      props: { text: 'D. M. — CTO, North Light', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.04em', color: '#71717A' } }
  ]}]
};

const LAYOUT_019 = {
  meta: { name: 'Footer Mosaic', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 360, layout: 'free', children: [
    { id: 'ft-bg', archetype: 'image', behavior: 'fixedHeight', x: 0, y: 0, w: 1280, h: 360, z: 0,
      props: { gradient: 'linear-gradient(180deg, #fafaf9 0%, #f0eee2 100%)' } },
    { id: 'ft-mark', archetype: 'text', behavior: 'wrap', x: 96, y: 80, w: 220, h: 32, z: 2,
      props: { text: 'Studio Aurora', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a' } },
    { id: 'ft-mark-sub', archetype: 'text', behavior: 'wrap', anchor: 'ft-mark', x: 96, y: 16, w: 240, h: 18, z: 2,
      props: { text: 'Copenhagen \u00B7 Tel Aviv \u00B7 Lisbon', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#71717A' } },
    { id: 'ft-col1', archetype: 'text', behavior: 'wrap', x: 480, y: 80, w: 200, h: 18, z: 2,
      props: { text: 'WORK', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A' } },
    { id: 'ft-col1-list', archetype: 'text', behavior: 'wrap', anchor: 'ft-col1', x: 480, y: 12, w: 200, h: 96, z: 2,
      props: { text: 'Index\nSelected\nFilm\nPress', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.7', color: '#0f172a' } },
    { id: 'ft-col2', archetype: 'text', behavior: 'wrap', x: 720, y: 80, w: 200, h: 18, z: 2,
      props: { text: 'STUDIO', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A' } },
    { id: 'ft-col2-list', archetype: 'text', behavior: 'wrap', anchor: 'ft-col2', x: 720, y: 12, w: 200, h: 96, z: 2,
      props: { text: 'About\nCareers\nJournal\nContact', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.7', color: '#0f172a' } },
    { id: 'ft-col3', archetype: 'text', behavior: 'wrap', x: 960, y: 80, w: 220, h: 18, z: 2,
      props: { text: 'GET IN TOUCH', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A' } },
    { id: 'ft-col3-list', archetype: 'text', behavior: 'wrap', anchor: 'ft-col3', x: 960, y: 12, w: 220, h: 96, z: 2,
      props: { text: 'hello@aurora.studio\n+45 33 33 33 33\n@studioaurora', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.7', color: '#0f172a' } },
    { id: 'ft-legal', archetype: 'text', behavior: 'wrap', x: 96, y: 308, w: 1088, h: 18, z: 2,
      props: { text: '\u00A9 2024 Studio Aurora ApS \u00B7 All rights reserved', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.04em', color: '#71717A' } }
  ]}]
};

const LAYOUT_020 = {
  meta: { name: 'Dashboard Metrics', category: 'dashboard', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    { behavior: 'auto', height: 120, layout: 'free', children: [
      { id: 'db-eyebrow', archetype: 'text', behavior: 'fixed', x: 64, y: 40, w: 200, h: 16,
        props: { text: 'OVERVIEW', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A' } },
      { id: 'db-title', archetype: 'text', behavior: 'wrap', anchor: 'db-eyebrow', x: 64, y: 16, w: 600, h: 36,
        props: { text: 'Q3 \u00B7 Performance', fontFamily: 'Inter', fontSize: 26, fontWeight: '500', color: '#0f172a' } }
    ]},
    // Per-cell mesh stack: label → big number → delta
    { behavior: 'fixedHeight', height: 200, layout: '4col', children: [
      { id: 'db-1', archetype: 'container', behavior: 'wrap', cell: 0, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 10 } },
      { id: 'db-1-lbl', archetype: 'text', behavior: 'wrap', parent: 'db-1', x: 24, y: 28, w: 220, h: 16,
        props: { text: 'MRR', fontFamily: 'Inter', fontSize: 10, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A' } },
      { id: 'db-1-num', archetype: 'text', behavior: 'wrap', parent: 'db-1', anchor: 'db-1-lbl', x: 24, y: 12, w: 220, h: 48,
        props: { text: '$184k', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', color: '#0f172a' } },
      { id: 'db-1-d', archetype: 'text', behavior: 'wrap', parent: 'db-1', anchor: 'db-1-num', x: 24, y: 12, w: 220, h: 18,
        props: { text: '+12.4% MoM', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#16a34a' } },

      { id: 'db-2', archetype: 'container', behavior: 'wrap', cell: 1, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 10 } },
      { id: 'db-2-lbl', archetype: 'text', behavior: 'wrap', parent: 'db-2', x: 24, y: 28, w: 220, h: 16,
        props: { text: 'ACTIVE USERS', fontFamily: 'Inter', fontSize: 10, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A' } },
      { id: 'db-2-num', archetype: 'text', behavior: 'wrap', parent: 'db-2', anchor: 'db-2-lbl', x: 24, y: 12, w: 220, h: 48,
        props: { text: '12,486', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', color: '#0f172a' } },
      { id: 'db-2-d', archetype: 'text', behavior: 'wrap', parent: 'db-2', anchor: 'db-2-num', x: 24, y: 12, w: 220, h: 18,
        props: { text: '+4.1% MoM', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#16a34a' } },

      { id: 'db-3', archetype: 'container', behavior: 'wrap', cell: 2, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#FFFFFF', borderColor: 'rgba(15,23,42,0.06)', borderRadius: 10 } },
      { id: 'db-3-lbl', archetype: 'text', behavior: 'wrap', parent: 'db-3', x: 24, y: 28, w: 220, h: 16,
        props: { text: 'CHURN', fontFamily: 'Inter', fontSize: 10, fontWeight: '500', letterSpacing: '0.16em', color: '#71717A' } },
      { id: 'db-3-num', archetype: 'text', behavior: 'wrap', parent: 'db-3', anchor: 'db-3-lbl', x: 24, y: 12, w: 220, h: 48,
        props: { text: '2.1%', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', color: '#0f172a' } },
      { id: 'db-3-d', archetype: 'text', behavior: 'wrap', parent: 'db-3', anchor: 'db-3-num', x: 24, y: 12, w: 220, h: 18,
        props: { text: '\u22120.3% MoM', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#16a34a' } },

      { id: 'db-4', archetype: 'container', behavior: 'wrap', cell: 3, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#0f172a', borderColor: 'transparent', borderRadius: 10 } },
      { id: 'db-4-lbl', archetype: 'text', behavior: 'wrap', parent: 'db-4', x: 24, y: 28, w: 220, h: 16,
        props: { text: 'NPS', fontFamily: 'Inter', fontSize: 10, fontWeight: '500', letterSpacing: '0.16em', color: '#a8acd0' } },
      { id: 'db-4-num', archetype: 'text', behavior: 'wrap', parent: 'db-4', anchor: 'db-4-lbl', x: 24, y: 12, w: 220, h: 48,
        props: { text: '67', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', color: '#ffffff' } },
      { id: 'db-4-d', archetype: 'text', behavior: 'wrap', parent: 'db-4', anchor: 'db-4-num', x: 24, y: 12, w: 220, h: 18,
        props: { text: '+5 vs Q2', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#86efac' } }
    ]}
  ]
};

const LAYOUT_021 = {
  meta: { name: 'Sphere Caption', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 720, layout: 'free', children: [
    { id: 'sc-disc', archetype: 'image', behavior: 'scaleProportionally', x: 80, y: 64, w: 560, h: 560, z: 0,
      props: { gradient: 'radial-gradient(circle at 45% 50%, #fafaf9 0%, #ddd9c8 40%, #b8b6a3 80%, #6b6a5c 100%)' } },
    { id: 'sc-eyebrow', archetype: 'text', behavior: 'wrap', x: 720, y: 200, w: 480, h: 16, z: 2,
      props: { text: 'OBJECT NO. 14', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.20em', color: '#71717A' } },
    { id: 'sc-title', archetype: 'text', behavior: 'wrap', anchor: 'sc-eyebrow', x: 720, y: 22, w: 480, h: 144, z: 2,
      props: { text: 'Stone, late\nafternoon.', fontFamily: 'Inter', fontSize: 48, fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.015em', color: '#0f172a' } },
    { id: 'sc-body', archetype: 'text', behavior: 'wrap', anchor: 'sc-title', x: 720, y: 28, w: 480, h: 132, z: 2,
      props: { text: 'A reading of light over a single object across forty-five minutes. Hand-printed on cotton, edition of twelve. Available through the studio shop.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.65', color: '#3F3F46' } },
    { id: 'sc-cta', archetype: 'button', behavior: 'fixed', anchor: 'sc-body', x: 720, y: 28, w: 110, h: 32, z: 2,
      props: { label: 'Inquire', variant: 'ghost', radius: 0, paddingX: 4, paddingY: 6 } }
  ]}]
};

const LAYOUT_022 = {
  meta: { name: 'Wide Banner', category: 'landing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 400, layout: 'free', children: [
    { id: 'wb-bg', archetype: 'container', behavior: 'wrap', x: 80, y: 56, w: 1120, h: 288,
      props: { background: 'linear-gradient(110deg, #0f172a 0%, #2d3252 60%, #0f172a 100%)', borderColor: 'transparent', borderRadius: 12 } },
    { id: 'wb-title', archetype: 'text', behavior: 'wrap', parent: 'wb-bg', x: 64, y: 56, w: 720, h: 88,
      props: { text: 'Ready when you are.', fontFamily: 'Inter', fontSize: 44, fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.015em', color: '#ffffff' } },
    { id: 'wb-body', archetype: 'text', behavior: 'wrap', parent: 'wb-bg', anchor: 'wb-title', x: 64, y: 24, w: 640, h: 56,
      props: { text: 'A 30-minute call to scope, qualify, and price your project. No prep, no slides, no pitch deck.', fontFamily: 'Inter', fontSize: 15, fontWeight: '400', lineHeight: '1.6', color: '#d4d6e8' } },
    { id: 'wb-cta', archetype: 'button', behavior: 'fixed', parent: 'wb-bg', x: 880, y: 116, w: 168, h: 48,
      props: { label: 'Book a call', variant: 'primary', radius: 999, paddingX: 28, paddingY: 14 } }
  ]}]
};

const LAYOUT_023 = {
  meta: { name: 'Two Bands', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    { behavior: 'fixedHeight', height: 280, layout: '2col', children: [
      { id: 'tsb-l', archetype: 'image', behavior: 'stretch', cell: 0, x: 0, y: 0, w: 0, h: 0,
        props: { gradient: 'linear-gradient(135deg, #d4d7f3 0%, #ecedf0 100%)' } },
      { id: 'tsb-r', archetype: 'container', behavior: 'wrap', cell: 1, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#0f172a', borderColor: 'transparent', borderRadius: 0 } },
      { id: 'tsb-r-tag', archetype: 'text', behavior: 'wrap', parent: 'tsb-r', x: 64, y: 64, w: 480, h: 32,
        props: { text: 'Volume 02 \u00B7 Letters', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', letterSpacing: '0.10em', color: '#a8acd0' } },
      { id: 'tsb-r-title', archetype: 'text', behavior: 'wrap', parent: 'tsb-r', anchor: 'tsb-r-tag', x: 64, y: 12, w: 480, h: 96,
        props: { text: 'A monthly dispatch on craft.', fontFamily: 'Inter', fontSize: 30, fontWeight: '500', lineHeight: '1.2', color: '#ffffff' } }
    ]},
    { behavior: 'fixedHeight', height: 280, layout: '2col', children: [
      { id: 'tsb-l2', archetype: 'container', behavior: 'wrap', cell: 0, x: 0, y: 0, w: 0, h: 0,
        props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 0 } },
      { id: 'tsb-l2-tag', archetype: 'text', behavior: 'wrap', parent: 'tsb-l2', x: 64, y: 64, w: 480, h: 32,
        props: { text: 'Volume 03 \u00B7 Studio', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', letterSpacing: '0.10em', color: '#71717A' } },
      { id: 'tsb-l2-title', archetype: 'text', behavior: 'wrap', parent: 'tsb-l2', anchor: 'tsb-l2-tag', x: 64, y: 12, w: 480, h: 96,
        props: { text: 'A monthly index of work.', fontFamily: 'Inter', fontSize: 30, fontWeight: '500', lineHeight: '1.2', color: '#0f172a' } },
      { id: 'tsb-r2', archetype: 'image', behavior: 'stretch', cell: 1, x: 0, y: 0, w: 0, h: 0,
        props: { gradient: 'linear-gradient(135deg, #f0eee2 0%, #d4d7f3 100%)' } }
    ]}
  ]
};

const LAYOUT_024 = {
  meta: { name: 'Solo Portrait', category: 'portfolio', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 700, layout: 'free', children: [
    { id: 'sp-portrait', archetype: 'image', behavior: 'scaleProportionally', x: 800, y: 56, w: 400, h: 588, z: 0,
      props: { gradient: 'linear-gradient(180deg, #d4d7f3 0%, #e0e2ed 50%, #ecebd9 100%)' } },
    { id: 'sp-eyebrow', archetype: 'text', behavior: 'fixed', x: 96, y: 184, w: 240, h: 16, z: 2,
      props: { text: 'STUDIO PRINCIPAL', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.18em', color: '#71717A' } },
    { id: 'sp-title', archetype: 'text', behavior: 'wrap', anchor: 'sp-eyebrow', x: 96, y: 24, w: 600, h: 132, z: 2,
      props: { text: 'Aiko Bremmer.', fontFamily: 'Inter', fontSize: 60, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#0f172a' } },
    { id: 'sp-body', archetype: 'text', behavior: 'wrap', anchor: 'sp-title', x: 96, y: 32, w: 540, h: 168, z: 2,
      props: { text: 'Twenty-one years between Tokyo, Helsinki, and Lisbon. Currently writing a small book about white space and answering very few emails. Available for one project at a time.', fontFamily: 'Inter', fontSize: 15, fontWeight: '400', lineHeight: '1.65', color: '#3F3F46' } },
    { id: 'sp-cta', archetype: 'button', behavior: 'fixed', anchor: 'sp-body', x: 96, y: 32, w: 142, h: 40, z: 2,
      props: { label: 'Send a note', variant: 'primary', radius: 999, paddingX: 24, paddingY: 11 } }
  ]}]
};

const LAYOUT_025 = {
  meta: { name: 'Press Logos', category: 'landing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 220, layout: 'free', children: [
    { id: 'pl-eyebrow', archetype: 'text', behavior: 'fixed', x: 96, y: 56, w: 1088, h: 18,
      props: { text: 'AS HEARD ELSEWHERE', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.20em', color: '#71717A', textAlign: 'center' } },
    { id: 'pl-1', archetype: 'text', behavior: 'wrap', anchor: 'pl-eyebrow', x: 96, y: 56, w: 200, h: 32,
      props: { text: 'IT\u2019S NICE THAT', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', letterSpacing: '0.04em', color: '#0f172a', textAlign: 'center' } },
    { id: 'pl-2', archetype: 'text', behavior: 'wrap', anchor: 'pl-eyebrow', x: 320, y: 56, w: 200, h: 32,
      props: { text: 'AIGA EYE', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', letterSpacing: '0.04em', color: '#0f172a', textAlign: 'center' } },
    { id: 'pl-3', archetype: 'text', behavior: 'wrap', anchor: 'pl-eyebrow', x: 544, y: 56, w: 200, h: 32,
      props: { text: 'BRAND NEW', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', letterSpacing: '0.04em', color: '#0f172a', textAlign: 'center' } },
    { id: 'pl-4', archetype: 'text', behavior: 'wrap', anchor: 'pl-eyebrow', x: 768, y: 56, w: 200, h: 32,
      props: { text: 'CREATIVE REVIEW', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', letterSpacing: '0.04em', color: '#0f172a', textAlign: 'center' } },
    { id: 'pl-5', archetype: 'text', behavior: 'wrap', anchor: 'pl-eyebrow', x: 992, y: 56, w: 200, h: 32,
      props: { text: 'AREA OF WORK', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', letterSpacing: '0.04em', color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// === BATCH 2 (LAYOUT_026..075) — drawn from 50 reference templates ===
// LAYOUT_026 — Help & Support FAQ list (image: _01__Process)
const LAYOUT_026 = {
  meta: { name: 'Help & Support FAQ', category: 'docs', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 1180, layout: 'free', children: [
    { id: 'hdr-bg', archetype: 'container', behavior: 'wrap', x: 64, y: 40, w: 1152, h: 140,
      props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'hdr-title', archetype: 'text', behavior: 'scaleProportionally', parent: 'hdr-bg', x: 56, y: 28, w: 900, h: 88,
      props: { text: 'Help & Support', fontFamily: 'Inter', fontSize: 60, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#0f172a' } },
    { id: 'list-frame', archetype: 'container', behavior: 'wrap', anchor: 'hdr-bg', x: 64, y: 24, w: 1152, h: 940,
      props: { background: 'transparent', borderColor: '#D6D3D1', borderRadius: 12 } },
    { id: 'r1', archetype: 'container', behavior: 'wrap', parent: 'list-frame', x: 32, y: 32, w: 1088, h: 132,
      props: { background: 'transparent', borderColor: '#E7E5E4', borderRadius: 8 } },
    { id: 'r1-num', archetype: 'text', behavior: 'fixed', parent: 'r1', x: 24, y: 28, w: 32, h: 24,
      props: { text: '1', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#52525B', textAlign: 'center' } },
    { id: 'r1-t', archetype: 'text', behavior: 'scaleProportionally', parent: 'r1', x: 96, y: 28, w: 320, h: 28,
      props: { text: 'FAQ Title', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
    { id: 'r1-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'r1', x: 568, y: 28, w: 480, h: 96,
      props: { text: 'Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'r2', archetype: 'container', behavior: 'wrap', anchor: 'r1', parent: 'list-frame', x: 32, y: 8, w: 1088, h: 132,
      props: { background: 'transparent', borderColor: '#E7E5E4', borderRadius: 8 } },
    { id: 'r2-num', archetype: 'text', behavior: 'fixed', parent: 'r2', x: 24, y: 28, w: 32, h: 24,
      props: { text: '2', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#52525B', textAlign: 'center' } },
    { id: 'r2-t', archetype: 'text', behavior: 'scaleProportionally', parent: 'r2', x: 96, y: 28, w: 320, h: 28,
      props: { text: 'FAQ Title', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
    { id: 'r2-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'r2', x: 568, y: 28, w: 480, h: 96,
      props: { text: 'Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'r3', archetype: 'container', behavior: 'wrap', anchor: 'r2', parent: 'list-frame', x: 32, y: 8, w: 1088, h: 132,
      props: { background: 'transparent', borderColor: '#E7E5E4', borderRadius: 8 } },
    { id: 'r3-num', archetype: 'text', behavior: 'fixed', parent: 'r3', x: 24, y: 28, w: 32, h: 24,
      props: { text: '3', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#52525B', textAlign: 'center' } },
    { id: 'r3-t', archetype: 'text', behavior: 'scaleProportionally', parent: 'r3', x: 96, y: 28, w: 320, h: 28,
      props: { text: 'FAQ Title', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
    { id: 'r3-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'r3', x: 568, y: 28, w: 480, h: 96,
      props: { text: 'Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'r4', archetype: 'container', behavior: 'wrap', anchor: 'r3', parent: 'list-frame', x: 32, y: 8, w: 1088, h: 132,
      props: { background: 'transparent', borderColor: '#E7E5E4', borderRadius: 8 } },
    { id: 'r4-num', archetype: 'text', behavior: 'fixed', parent: 'r4', x: 24, y: 28, w: 32, h: 24,
      props: { text: '4', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#52525B', textAlign: 'center' } },
    { id: 'r4-t', archetype: 'text', behavior: 'scaleProportionally', parent: 'r4', x: 96, y: 28, w: 320, h: 28,
      props: { text: 'FAQ Title', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
    { id: 'r4-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'r4', x: 568, y: 28, w: 480, h: 96,
      props: { text: 'Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'r5', archetype: 'container', behavior: 'wrap', anchor: 'r4', parent: 'list-frame', x: 32, y: 8, w: 1088, h: 132,
      props: { background: 'transparent', borderColor: '#E7E5E4', borderRadius: 8 } },
    { id: 'r5-num', archetype: 'text', behavior: 'fixed', parent: 'r5', x: 24, y: 28, w: 32, h: 24,
      props: { text: '5', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#52525B', textAlign: 'center' } },
    { id: 'r5-t', archetype: 'text', behavior: 'scaleProportionally', parent: 'r5', x: 96, y: 28, w: 320, h: 28,
      props: { text: 'FAQ Title', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
    { id: 'r5-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'r5', x: 568, y: 28, w: 480, h: 96,
      props: { text: 'Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'r6', archetype: 'container', behavior: 'wrap', anchor: 'r5', parent: 'list-frame', x: 32, y: 8, w: 1088, h: 132,
      props: { background: 'transparent', borderColor: '#E7E5E4', borderRadius: 8 } },
    { id: 'r6-num', archetype: 'text', behavior: 'fixed', parent: 'r6', x: 24, y: 28, w: 32, h: 24,
      props: { text: '6', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#52525B', textAlign: 'center' } },
    { id: 'r6-t', archetype: 'text', behavior: 'scaleProportionally', parent: 'r6', x: 96, y: 28, w: 320, h: 28,
      props: { text: 'FAQ Title', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
    { id: 'r6-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'r6', x: 568, y: 28, w: 480, h: 96,
      props: { text: 'Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46' } }
  ]}]
};

// LAYOUT_027 — FAQ Hero with widget block (Group_1000009575)
const LAYOUT_027 = {
  meta: { name: 'FAQ Hero Widget', category: 'docs', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 720, layout: 'free', children: [
    { id: 'h-title', archetype: 'text', behavior: 'scaleProportionally', x: 32, y: 56, w: 1100, h: 100,
      props: { text: 'Frequent Asked Questions', fontFamily: 'Inter', fontSize: 76, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#0f172a' } },
    { id: 'h-sub', archetype: 'text', behavior: 'scaleProportionally', anchor: 'h-title', x: 32, y: 24, w: 360, h: 50,
      props: { text: 'Use this space to promote your\nbusiness, its products or its services.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'h-widget', archetype: 'container', behavior: 'wrap', anchor: 'h-sub', x: 32, y: 56, w: 1216, h: 360,
      props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 4 } },
    { id: 'h-w-label', archetype: 'text', behavior: 'fixed', parent: 'h-widget', x: 480, y: 160, w: 240, h: 40,
      props: { text: 'Widget', fontFamily: 'Inter', fontSize: 26, fontWeight: '400', color: '#A8A29E', textAlign: 'center' } }
  ]}]
};

// LAYOUT_028 — Help Center, right-side FAQ (Frame_2147221323)
const LAYOUT_028 = {
  meta: { name: 'Help Center Right FAQ', category: 'docs', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 980, layout: 'free', children: [
    { id: 'lh-title', archetype: 'text', behavior: 'scaleProportionally', x: 64, y: 80, w: 600, h: 96,
      props: { text: 'Help Center', fontFamily: 'Inter', fontSize: 72, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#0f172a' } },
    { id: 'lh-sub', archetype: 'text', behavior: 'scaleProportionally', anchor: 'lh-title', x: 64, y: 24, w: 360, h: 50,
      props: { text: 'Use this space to promote your\nbusiness, its products or its services.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'q1', archetype: 'text', behavior: 'scaleProportionally', x: 624, y: 264, w: 320, h: 28,
      props: { text: 'First FAQ', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', color: '#0f172a' } },
    { id: 'q1-b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'q1', x: 624, y: 16, w: 320, h: 60,
      props: { text: 'Use this space to promote your business, its products or its services.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#52525B' } },
    { id: 'q1-cta', archetype: 'button', behavior: 'fixed', x: 1056, y: 256, w: 100, h: 36,
      props: { label: 'Read More', variant: 'primary', radius: 6, paddingX: 14, paddingY: 8 } },
    { id: 'q2', archetype: 'text', behavior: 'scaleProportionally', anchor: 'q1-b', x: 624, y: 36, w: 320, h: 28,
      props: { text: 'Second FAQ', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', color: '#0f172a' } },
    { id: 'q2-b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'q2', x: 624, y: 16, w: 320, h: 60,
      props: { text: 'Use this space to promote your business, its products or its services.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#52525B' } },
    { id: 'q2-cta', archetype: 'button', behavior: 'fixed', anchor: 'q1-cta', x: 1056, y: 84, w: 100, h: 36,
      props: { label: 'Read More', variant: 'primary', radius: 6, paddingX: 14, paddingY: 8 } },
    { id: 'q3', archetype: 'text', behavior: 'scaleProportionally', anchor: 'q2-b', x: 624, y: 36, w: 320, h: 28,
      props: { text: 'Third FAQ', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', color: '#0f172a' } },
    { id: 'q3-b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'q3', x: 624, y: 16, w: 320, h: 60,
      props: { text: 'Use this space to promote your business, its products or its services.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#52525B' } },
    { id: 'q3-cta', archetype: 'button', behavior: 'fixed', anchor: 'q2-cta', x: 1056, y: 84, w: 100, h: 36,
      props: { label: 'Read More', variant: 'primary', radius: 6, paddingX: 14, paddingY: 8 } },
    { id: 'q4', archetype: 'text', behavior: 'scaleProportionally', anchor: 'q3-b', x: 624, y: 36, w: 320, h: 28,
      props: { text: 'Forth FAQ', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', color: '#0f172a' } },
    { id: 'q4-b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'q4', x: 624, y: 16, w: 320, h: 60,
      props: { text: 'Use this space to promote your business, its products or its services.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#52525B' } },
    { id: 'q4-cta', archetype: 'button', behavior: 'fixed', anchor: 'q3-cta', x: 1056, y: 84, w: 100, h: 36,
      props: { label: 'Read More', variant: 'primary', radius: 6, paddingX: 14, paddingY: 8 } },
    { id: 'q5', archetype: 'text', behavior: 'scaleProportionally', anchor: 'q4-b', x: 624, y: 36, w: 320, h: 28,
      props: { text: 'Fifth FAQ', fontFamily: 'Inter', fontSize: 20, fontWeight: '500', color: '#0f172a' } },
    { id: 'q5-b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'q5', x: 624, y: 16, w: 320, h: 60,
      props: { text: 'Use this space to promote your business, its products or its services.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#52525B' } },
    { id: 'q5-cta', archetype: 'button', behavior: 'fixed', anchor: 'q4-cta', x: 1056, y: 84, w: 100, h: 36,
      props: { label: 'Read More', variant: 'primary', radius: 6, paddingX: 14, paddingY: 8 } }
  ]}]
};

// LAYOUT_029 — Support Articles List (subset of Group_2147221594)
const LAYOUT_029 = {
  meta: { name: 'Support Articles List', category: 'docs', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 600, layout: 'free', children: [
    { id: 'sa-eyebrow', archetype: 'text', behavior: 'fixed', x: 96, y: 64, w: 200, h: 16,
      props: { text: 'RESOURCES', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#71717A' } },
    { id: 'sa-title', archetype: 'text', behavior: 'scaleProportionally', anchor: 'sa-eyebrow', x: 96, y: 16, w: 720, h: 56,
      props: { text: 'Support articles', fontFamily: 'Inter', fontSize: 44, fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.02em', color: '#0f172a' } },
    { id: 'a1', archetype: 'container', behavior: 'wrap', anchor: 'sa-title', x: 256, y: 48, w: 720, h: 64,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'a1-n', archetype: 'text', behavior: 'fixed', parent: 'a1', x: 24, y: 22, w: 160, h: 18,
      props: { text: 'Resource Name', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
    { id: 'a1-d', archetype: 'text', behavior: 'scaleProportionally', parent: 'a1', x: 220, y: 18, w: 360, h: 36,
      props: { text: 'This is the space to provide tools, guides, and materials to help visitors learn more about your industry or services.', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', lineHeight: '1.5', color: '#52525B' } },
    { id: 'a1-c', archetype: 'button', behavior: 'fixed', parent: 'a1', x: 612, y: 18, w: 84, h: 28,
      props: { label: 'Read More', variant: 'primary', radius: 4, paddingX: 10, paddingY: 6 } },
    { id: 'a2', archetype: 'container', behavior: 'wrap', anchor: 'a1', x: 256, y: 0, w: 720, h: 64,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'a2-n', archetype: 'text', behavior: 'fixed', parent: 'a2', x: 24, y: 22, w: 160, h: 18,
      props: { text: 'Resource Name', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
    { id: 'a2-d', archetype: 'text', behavior: 'scaleProportionally', parent: 'a2', x: 220, y: 18, w: 360, h: 36,
      props: { text: 'This is the space to provide tools, guides, and materials to help visitors learn more about your industry or services.', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', lineHeight: '1.5', color: '#52525B' } },
    { id: 'a2-c', archetype: 'button', behavior: 'fixed', parent: 'a2', x: 612, y: 18, w: 84, h: 28,
      props: { label: 'Read More', variant: 'primary', radius: 4, paddingX: 10, paddingY: 6 } },
    { id: 'a3', archetype: 'container', behavior: 'wrap', anchor: 'a2', x: 256, y: 0, w: 720, h: 64,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'a3-n', archetype: 'text', behavior: 'fixed', parent: 'a3', x: 24, y: 22, w: 160, h: 18,
      props: { text: 'Resource Name', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
    { id: 'a3-d', archetype: 'text', behavior: 'scaleProportionally', parent: 'a3', x: 220, y: 18, w: 360, h: 36,
      props: { text: 'This is the space to provide tools, guides, and materials to help visitors learn more about your industry or services.', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', lineHeight: '1.5', color: '#52525B' } },
    { id: 'a3-c', archetype: 'button', behavior: 'fixed', parent: 'a3', x: 612, y: 18, w: 84, h: 28,
      props: { label: 'Read More', variant: 'primary', radius: 4, paddingX: 10, paddingY: 6 } },
    { id: 'a4', archetype: 'container', behavior: 'wrap', anchor: 'a3', x: 256, y: 0, w: 720, h: 64,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'a4-n', archetype: 'text', behavior: 'fixed', parent: 'a4', x: 24, y: 22, w: 160, h: 18,
      props: { text: 'Resource Name', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
    { id: 'a4-d', archetype: 'text', behavior: 'scaleProportionally', parent: 'a4', x: 220, y: 18, w: 360, h: 36,
      props: { text: 'This is the space to provide tools, guides, and materials to help visitors learn more about your industry or services.', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', lineHeight: '1.5', color: '#52525B' } },
    { id: 'a4-c', archetype: 'button', behavior: 'fixed', parent: 'a4', x: 612, y: 18, w: 84, h: 28,
      props: { label: 'Read More', variant: 'primary', radius: 4, paddingX: 10, paddingY: 6 } }
  ]}]
};

// LAYOUT_030 — Guides & FAQs multi-section page (Frame_1707489994 condensed)
const LAYOUT_030 = {
  meta: { name: 'Guides & FAQs Page', category: 'docs', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    { behavior: 'fixedHeight', height: 100, layout: 'free', children: [
      { id: 'gh', archetype: 'container', behavior: 'wrap', x: 32, y: 16, w: 1216, h: 76,
        props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 8 } },
      { id: 'gh-t', archetype: 'text', behavior: 'scaleProportionally', parent: 'gh', x: 32, y: 16, w: 700, h: 44,
        props: { text: 'Guides & FAQs', fontFamily: 'Inter', fontSize: 32, fontWeight: '500', color: '#0f172a' } }
    ]},
    { behavior: 'fixedHeight', height: 280, layout: 'free', children: [
      { id: 'g-img', archetype: 'image', behavior: 'scaleProportionally', x: 32, y: 16, w: 600, h: 248,
        props: { objectPosition: 'center' } },
      { id: 'g-eye', archetype: 'text', behavior: 'fixed', x: 672, y: 32, w: 100, h: 14,
        props: { text: '• FAQ', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
      { id: 'g-tt', archetype: 'text', behavior: 'scaleProportionally', anchor: 'g-eye', x: 672, y: 12, w: 500, h: 36,
        props: { text: 'Quick answers', fontFamily: 'Inter', fontSize: 28, fontWeight: '500', color: '#0f172a' } },
      { id: 'g-w', archetype: 'container', behavior: 'wrap', anchor: 'g-tt', x: 672, y: 16, w: 360, h: 140,
        props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 4 } },
      { id: 'g-w-l', archetype: 'text', behavior: 'fixed', parent: 'g-w', x: 100, y: 56, w: 160, h: 28,
        props: { text: 'Widget', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', color: '#A8A29E', textAlign: 'center' } }
    ]},
    { behavior: 'fixedHeight', height: 360, layout: 'free', children: [
      { id: 'p-eye', archetype: 'text', behavior: 'fixed', x: 32, y: 32, w: 120, h: 14,
        props: { text: '• Workflow', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
      { id: 'p-tt', archetype: 'text', behavior: 'scaleProportionally', anchor: 'p-eye', x: 32, y: 12, w: 600, h: 40,
        props: { text: 'Process and workflow', fontFamily: 'Inter', fontSize: 32, fontWeight: '500', color: '#0f172a' } },
      { id: 'p-img', archetype: 'image', behavior: 'scaleProportionally', anchor: 'p-tt', x: 32, y: 24, w: 1216, h: 220,
        props: { objectPosition: 'center' } },
      { id: 'p-card', archetype: 'container', behavior: 'wrap', parent: 'p-img', x: 600, y: 24, w: 580, h: 180,
        props: { background: 'rgba(255,255,255,0.6)', borderColor: 'transparent', borderRadius: 4 } },
      { id: 'p-s1', archetype: 'text', behavior: 'fixed', parent: 'p-card', x: 24, y: 16, w: 80, h: 14,
        props: { text: 'Step 1', fontFamily: 'Inter', fontSize: 10, fontWeight: '500', color: '#71717A' } },
      { id: 'p-h1', archetype: 'text', behavior: 'scaleProportionally', parent: 'p-card', x: 24, y: 36, w: 540, h: 36,
        props: { text: 'This is the space to outline your step-by-step approach.', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
      { id: 'p-cta', archetype: 'button', behavior: 'fixed', parent: 'p-card', x: 24, y: 132, w: 532, h: 32,
        props: { label: 'Learn More', variant: 'primary', radius: 4, paddingX: 12, paddingY: 8 } }
    ]},
    { behavior: 'fixedHeight', height: 280, layout: 'free', children: [
      { id: 'r-eye', archetype: 'text', behavior: 'fixed', x: 32, y: 32, w: 100, h: 14,
        props: { text: '• Resources', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
      { id: 'r-tt', archetype: 'text', behavior: 'scaleProportionally', anchor: 'r-eye', x: 32, y: 12, w: 600, h: 40,
        props: { text: 'Guides and resources', fontFamily: 'Inter', fontSize: 32, fontWeight: '500', color: '#0f172a' } },
      { id: 'rc1', archetype: 'container', behavior: 'wrap', anchor: 'r-tt', x: 32, y: 24, w: 380, h: 140,
        props: { background: '#fff', borderColor: '#E5E5E5', borderRadius: 4 } },
      { id: 'rc1-n', archetype: 'text', behavior: 'fixed', parent: 'rc1', x: 16, y: 16, w: 200, h: 18,
        props: { text: 'Resource Name', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
      { id: 'rc1-d', archetype: 'text', behavior: 'fixed', parent: 'rc1', x: 16, y: 44, w: 80, h: 12,
        props: { text: 'Aug 13, 2025', fontFamily: 'Inter', fontSize: 9, color: '#71717A' } },
      { id: 'rc1-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'rc1', x: 16, y: 68, w: 348, h: 36,
        props: { text: 'This is the space to provide tools, guides, and materials.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.5', color: '#52525B' } },
      { id: 'rc1-c', archetype: 'button', behavior: 'fixed', parent: 'rc1', x: 16, y: 108, w: 348, h: 24,
        props: { label: 'Download', variant: 'primary', radius: 4, paddingX: 10, paddingY: 4 } },
      { id: 'rc2', archetype: 'container', behavior: 'wrap', anchor: 'r-tt', x: 444, y: 24, w: 380, h: 140,
        props: { background: '#fff', borderColor: '#E5E5E5', borderRadius: 4 } },
      { id: 'rc2-n', archetype: 'text', behavior: 'fixed', parent: 'rc2', x: 16, y: 16, w: 200, h: 18,
        props: { text: 'Resource Name', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
      { id: 'rc2-d', archetype: 'text', behavior: 'fixed', parent: 'rc2', x: 16, y: 44, w: 80, h: 12,
        props: { text: 'Aug 13, 2025', fontFamily: 'Inter', fontSize: 9, color: '#71717A' } },
      { id: 'rc2-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'rc2', x: 16, y: 68, w: 348, h: 36,
        props: { text: 'This is the space to provide tools, guides, and materials.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.5', color: '#52525B' } },
      { id: 'rc2-c', archetype: 'button', behavior: 'fixed', parent: 'rc2', x: 16, y: 108, w: 348, h: 24,
        props: { label: 'Download', variant: 'primary', radius: 4, paddingX: 10, paddingY: 4 } },
      { id: 'rc3', archetype: 'container', behavior: 'wrap', anchor: 'r-tt', x: 856, y: 24, w: 380, h: 140,
        props: { background: '#fff', borderColor: '#E5E5E5', borderRadius: 4 } },
      { id: 'rc3-n', archetype: 'text', behavior: 'fixed', parent: 'rc3', x: 16, y: 16, w: 200, h: 18,
        props: { text: 'Resource Name', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
      { id: 'rc3-d', archetype: 'text', behavior: 'fixed', parent: 'rc3', x: 16, y: 44, w: 80, h: 12,
        props: { text: 'Aug 13, 2025', fontFamily: 'Inter', fontSize: 9, color: '#71717A' } },
      { id: 'rc3-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'rc3', x: 16, y: 68, w: 348, h: 36,
        props: { text: 'This is the space to provide tools, guides, and materials.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.5', color: '#52525B' } },
      { id: 'rc3-c', archetype: 'button', behavior: 'fixed', parent: 'rc3', x: 16, y: 108, w: 348, h: 24,
        props: { label: 'Download', variant: 'primary', radius: 4, paddingX: 10, paddingY: 4 } }
    ]}
  ]
};

// LAYOUT_031 — Book a Service (Booking_Form)
const LAYOUT_031 = {
  meta: { name: 'Book a Service', category: 'booking', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 1000, layout: 'free', children: [
    { id: 'bs-title', archetype: 'text', behavior: 'scaleProportionally', x: 64, y: 80, w: 1100, h: 100,
      props: { text: 'Book a Service', fontFamily: 'Inter', fontSize: 76, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#0f172a' } },
    { id: 'bs-eye1', archetype: 'text', behavior: 'fixed', anchor: 'bs-title', x: 64, y: 80, w: 200, h: 14,
      props: { text: 'Pick a Service', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
    { id: 'bs-h1', archetype: 'text', behavior: 'scaleProportionally', anchor: 'bs-eye1', x: 64, y: 8, w: 600, h: 32,
      props: { text: 'Choose a service', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a' } },
    { id: 'bs-w', archetype: 'container', behavior: 'wrap', anchor: 'bs-h1', x: 64, y: 32, w: 720, h: 280,
      props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 4 } },
    { id: 'bs-wl', archetype: 'text', behavior: 'fixed', parent: 'bs-w', x: 280, y: 120, w: 160, h: 32,
      props: { text: 'Widget', fontFamily: 'Inter', fontSize: 22, fontWeight: '400', color: '#A8A29E', textAlign: 'center' } },
    { id: 'bs-eye2', archetype: 'text', behavior: 'fixed', anchor: 'bs-w', x: 64, y: 80, w: 200, h: 14,
      props: { text: 'Book an Appointment', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
    { id: 'bs-h2', archetype: 'text', behavior: 'scaleProportionally', anchor: 'bs-eye2', x: 64, y: 8, w: 600, h: 32,
      props: { text: 'Select a time and confirm', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a' } },
    { id: 'bs-f', archetype: 'container', behavior: 'wrap', anchor: 'bs-h2', x: 64, y: 32, w: 720, h: 280,
      props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 4 } },
    { id: 'bs-fl', archetype: 'text', behavior: 'fixed', parent: 'bs-f', x: 300, y: 120, w: 160, h: 32,
      props: { text: 'Form', fontFamily: 'Inter', fontSize: 22, fontWeight: '400', color: '#A8A29E', textAlign: 'center' } }
  ]}]
};

// LAYOUT_032 — Book a Class hero (image: "1")
const LAYOUT_032 = {
  meta: { name: 'Book a Class Hero', category: 'booking', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 820, layout: 'free', children: [
    { id: 'bc-title', archetype: 'text', behavior: 'scaleProportionally', x: 32, y: 56, w: 1216, h: 110,
      props: { text: 'Book a Class', fontFamily: 'Inter', fontSize: 88, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#0f172a' } },
    { id: 'bc-rule', archetype: 'container', behavior: 'wrap', anchor: 'bc-title', x: 32, y: 16, w: 1216, h: 1,
      props: { background: '#0f172a', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'bc-body', archetype: 'text', behavior: 'scaleProportionally', anchor: 'bc-rule', x: 32, y: 16, w: 600, h: 80,
      props: { text: 'Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'bc-img', archetype: 'image', behavior: 'scaleProportionally', anchor: 'bc-body', x: 32, y: 24, w: 1216, h: 460,
      props: { objectPosition: 'center' } }
  ]}]
};

// LAYOUT_033 — Book an Appointment (Frame_1707482822 condensed)
const LAYOUT_033 = {
  meta: { name: 'Book an Appointment', category: 'booking', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 1100, layout: 'free', children: [
    { id: 'ba-title', archetype: 'text', behavior: 'scaleProportionally', x: 240, y: 64, w: 800, h: 110,
      props: { text: 'Book an\nAppointment', fontFamily: 'Inter', fontSize: 56, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.02em', color: '#0f172a', textAlign: 'center' } },
    { id: 'ba-sub', archetype: 'text', behavior: 'scaleProportionally', anchor: 'ba-title', x: 240, y: 24, w: 800, h: 60,
      props: { text: 'This is the space to introduce your Services section. Briefly describe the types of services you offer.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'ba-pa', archetype: 'text', behavior: 'scaleProportionally', anchor: 'ba-sub', x: 240, y: 56, w: 800, h: 32,
      props: { text: 'Practice Areas', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'ba-r1', archetype: 'container', behavior: 'wrap', anchor: 'ba-pa', x: 240, y: 32, w: 800, h: 60,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'ba-r1t', archetype: 'text', behavior: 'fixed', parent: 'ba-r1', x: 96, y: 14, w: 200, h: 16,
      props: { text: 'Industry 01', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
    { id: 'ba-r1d', archetype: 'text', behavior: 'scaleProportionally', parent: 'ba-r1', x: 320, y: 14, w: 460, h: 36,
      props: { text: 'This is the space to outline your areas of expertise.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
    { id: 'ba-r2', archetype: 'container', behavior: 'wrap', anchor: 'ba-r1', x: 240, y: 0, w: 800, h: 60,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'ba-r2t', archetype: 'text', behavior: 'fixed', parent: 'ba-r2', x: 96, y: 14, w: 200, h: 16,
      props: { text: 'Industry 02', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
    { id: 'ba-r2d', archetype: 'text', behavior: 'scaleProportionally', parent: 'ba-r2', x: 320, y: 14, w: 460, h: 36,
      props: { text: 'This is the space to outline your areas of expertise.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
    { id: 'ba-r3', archetype: 'container', behavior: 'wrap', anchor: 'ba-r2', x: 240, y: 0, w: 800, h: 60,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'ba-r3t', archetype: 'text', behavior: 'fixed', parent: 'ba-r3', x: 96, y: 14, w: 200, h: 16,
      props: { text: 'Industry 03', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
    { id: 'ba-r3d', archetype: 'text', behavior: 'scaleProportionally', parent: 'ba-r3', x: 320, y: 14, w: 460, h: 36,
      props: { text: 'This is the space to outline your areas of expertise.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
    { id: 'ba-w', archetype: 'container', behavior: 'wrap', anchor: 'ba-r3', x: 240, y: 32, w: 800, h: 200,
      props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 4 } },
    { id: 'ba-wl', archetype: 'text', behavior: 'fixed', parent: 'ba-w', x: 304, y: 84, w: 200, h: 28,
      props: { text: 'Inquiry Widget', fontFamily: 'Inter', fontSize: 18, fontWeight: '400', color: '#A8A29E', textAlign: 'center' } }
  ]}]
};

// LAYOUT_034 — Daily Agenda hero (7)
const LAYOUT_034 = {
  meta: { name: 'Daily Agenda Hero', category: 'booking', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 580, layout: 'free', children: [
    { id: 'da-t', archetype: 'text', behavior: 'scaleProportionally', x: 24, y: 32, w: 800, h: 88,
      props: { text: 'Daily Agenda', fontFamily: 'Inter', fontSize: 64, fontWeight: '500', lineHeight: '1.0', letterSpacing: '-0.02em', color: '#0f172a' } },
    { id: 'da-w', archetype: 'container', behavior: 'wrap', anchor: 'da-t', x: 16, y: 16, w: 1248, h: 380,
      props: { background: '#EEEAE0', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'da-wl', archetype: 'text', behavior: 'fixed', parent: 'da-w', x: 460, y: 170, w: 320, h: 36,
      props: { text: 'Daily Agenda Widget', fontFamily: 'Inter', fontSize: 22, fontWeight: '400', color: '#A8A29E', textAlign: 'center' } }
  ]}]
};

// LAYOUT_035 — 3-up Featured Items on dark (Cards_09)
const LAYOUT_035 = {
  meta: { name: '3-up Featured Items Dark', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 480, layout: 'free', children: [
    { id: 'd35-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 480,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd35-c1', archetype: 'container', behavior: 'wrap', x: 32, y: 240, w: 384, h: 200,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd35-c1t', archetype: 'text', behavior: 'fixed', parent: 'd35-c1', x: 32, y: 32, w: 320, h: 24,
      props: { text: 'Featured Item', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd35-c1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd35-c1', x: 32, y: 68, w: 320, h: 100,
      props: { text: 'Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd35-c2', archetype: 'container', behavior: 'wrap', x: 448, y: 240, w: 384, h: 200,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd35-c2t', archetype: 'text', behavior: 'fixed', parent: 'd35-c2', x: 32, y: 32, w: 320, h: 24,
      props: { text: 'Featured Item', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd35-c2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd35-c2', x: 32, y: 68, w: 320, h: 100,
      props: { text: 'Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd35-c3', archetype: 'container', behavior: 'wrap', x: 864, y: 240, w: 384, h: 200,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd35-c3t', archetype: 'text', behavior: 'fixed', parent: 'd35-c3', x: 32, y: 32, w: 320, h: 24,
      props: { text: 'Featured Item', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd35-c3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd35-c3', x: 32, y: 68, w: 320, h: 100,
      props: { text: 'Add paragraph text. Click "Edit Text" to update the font, size and more. To change and reuse text themes, go to Site Styles.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } }
  ]}]
};

// LAYOUT_036 — 4-up Icon Cards on dark (Cards_02)
const LAYOUT_036 = {
  meta: { name: '4-up Icon Cards Dark', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 540, layout: 'free', children: [
    { id: 'd36-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 540,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd36-c1', archetype: 'container', behavior: 'wrap', x: 56, y: 184, w: 252, h: 296,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd36-c1i', archetype: 'image', behavior: 'fixed', parent: 'd36-c1', x: 110, y: 32, w: 32, h: 32,
      props: { objectPosition: 'center' } },
    { id: 'd36-c1t', archetype: 'text', behavior: 'fixed', parent: 'd36-c1', x: 16, y: 88, w: 220, h: 24,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd36-c1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd36-c1', x: 16, y: 124, w: 220, h: 80,
      props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd36-c1c', archetype: 'button', behavior: 'fixed', parent: 'd36-c1', x: 76, y: 224, w: 100, h: 36,
      props: { label: 'Read More', variant: 'ghost', radius: 999, paddingX: 16, paddingY: 8 } },
    { id: 'd36-c2', archetype: 'container', behavior: 'wrap', x: 340, y: 184, w: 252, h: 296,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd36-c2i', archetype: 'image', behavior: 'fixed', parent: 'd36-c2', x: 110, y: 32, w: 32, h: 32, props: {} },
    { id: 'd36-c2t', archetype: 'text', behavior: 'fixed', parent: 'd36-c2', x: 16, y: 88, w: 220, h: 24,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd36-c2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd36-c2', x: 16, y: 124, w: 220, h: 80,
      props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd36-c2c', archetype: 'button', behavior: 'fixed', parent: 'd36-c2', x: 76, y: 224, w: 100, h: 36,
      props: { label: 'Read More', variant: 'ghost', radius: 999, paddingX: 16, paddingY: 8 } },
    { id: 'd36-c3', archetype: 'container', behavior: 'wrap', x: 624, y: 184, w: 252, h: 296,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd36-c3i', archetype: 'image', behavior: 'fixed', parent: 'd36-c3', x: 110, y: 32, w: 32, h: 32, props: {} },
    { id: 'd36-c3t', archetype: 'text', behavior: 'fixed', parent: 'd36-c3', x: 16, y: 88, w: 220, h: 24,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd36-c3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd36-c3', x: 16, y: 124, w: 220, h: 80,
      props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd36-c3c', archetype: 'button', behavior: 'fixed', parent: 'd36-c3', x: 76, y: 224, w: 100, h: 36,
      props: { label: 'Read More', variant: 'ghost', radius: 999, paddingX: 16, paddingY: 8 } },
    { id: 'd36-c4', archetype: 'container', behavior: 'wrap', x: 908, y: 184, w: 252, h: 296,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd36-c4i', archetype: 'image', behavior: 'fixed', parent: 'd36-c4', x: 110, y: 32, w: 32, h: 32, props: {} },
    { id: 'd36-c4t', archetype: 'text', behavior: 'fixed', parent: 'd36-c4', x: 16, y: 88, w: 220, h: 24,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd36-c4b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd36-c4', x: 16, y: 124, w: 220, h: 80,
      props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd36-c4c', archetype: 'button', behavior: 'fixed', parent: 'd36-c4', x: 76, y: 224, w: 100, h: 36,
      props: { label: 'Read More', variant: 'ghost', radius: 999, paddingX: 16, paddingY: 8 } }
  ]}]
};

// LAYOUT_037 — 4-up Read More Cards on dark (Text_06 mirrored)
const LAYOUT_037 = {
  meta: { name: '4-up Read More Cards', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 460, layout: 'free', children: [
    { id: 'd37-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 460,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd37-c1', archetype: 'container', behavior: 'wrap', x: 56, y: 200, w: 252, h: 200,
      props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd37-c1t', archetype: 'text', behavior: 'fixed', parent: 'd37-c1', x: 16, y: 24, w: 220, h: 24,
      props: { text: 'Featured Item', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd37-c1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd37-c1', x: 16, y: 56, w: 220, h: 80,
      props: { text: 'Add paragraph text. Click "Edit Text" to update the font, size and more.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd37-c1c', archetype: 'button', behavior: 'fixed', parent: 'd37-c1', x: 76, y: 148, w: 100, h: 32,
      props: { label: 'Read More', variant: 'ghost', radius: 999, paddingX: 14, paddingY: 6 } },
    { id: 'd37-c2', archetype: 'container', behavior: 'wrap', x: 340, y: 200, w: 252, h: 200,
      props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd37-c2t', archetype: 'text', behavior: 'fixed', parent: 'd37-c2', x: 16, y: 24, w: 220, h: 24,
      props: { text: 'Featured Item', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd37-c2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd37-c2', x: 16, y: 56, w: 220, h: 80,
      props: { text: 'Add paragraph text. Click "Edit Text" to update the font, size and more.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd37-c2c', archetype: 'button', behavior: 'fixed', parent: 'd37-c2', x: 76, y: 148, w: 100, h: 32,
      props: { label: 'Read More', variant: 'ghost', radius: 999, paddingX: 14, paddingY: 6 } },
    { id: 'd37-c3', archetype: 'container', behavior: 'wrap', x: 624, y: 200, w: 252, h: 200,
      props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd37-c3t', archetype: 'text', behavior: 'fixed', parent: 'd37-c3', x: 16, y: 24, w: 220, h: 24,
      props: { text: 'Featured Item', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd37-c3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd37-c3', x: 16, y: 56, w: 220, h: 80,
      props: { text: 'Add paragraph text. Click "Edit Text" to update the font, size and more.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd37-c3c', archetype: 'button', behavior: 'fixed', parent: 'd37-c3', x: 76, y: 148, w: 100, h: 32,
      props: { label: 'Read More', variant: 'ghost', radius: 999, paddingX: 14, paddingY: 6 } }
  ]}]
};

// LAYOUT_038 — 4-up House icon cards on dark (Cards_11)
const LAYOUT_038 = {
  meta: { name: '4-up House Cards Dark', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 540, layout: 'free', children: [
    { id: 'd38-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 540,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd38-c1', archetype: 'container', behavior: 'wrap', x: 360, y: 16, w: 280, h: 240,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd38-c1t', archetype: 'text', behavior: 'fixed', parent: 'd38-c1', x: 16, y: 88, w: 220, h: 22,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
    { id: 'd38-c1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd38-c1', x: 16, y: 116, w: 248, h: 60,
      props: { text: 'Add a short section paragraph. Double click to edit and add your own text.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd38-c1c', archetype: 'text', behavior: 'fixed', parent: 'd38-c1', x: 16, y: 200, w: 100, h: 18,
      props: { text: 'Read More', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#0f172a' } },
    { id: 'd38-c2', archetype: 'container', behavior: 'wrap', x: 672, y: 16, w: 280, h: 240,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd38-c2t', archetype: 'text', behavior: 'fixed', parent: 'd38-c2', x: 16, y: 88, w: 220, h: 22,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
    { id: 'd38-c2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd38-c2', x: 16, y: 116, w: 248, h: 60,
      props: { text: 'Add a short section paragraph. Double click to edit and add your own text.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd38-c2c', archetype: 'text', behavior: 'fixed', parent: 'd38-c2', x: 16, y: 200, w: 100, h: 18,
      props: { text: 'Read More', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#0f172a' } },
    { id: 'd38-c3', archetype: 'container', behavior: 'wrap', x: 360, y: 280, w: 280, h: 240,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd38-c3t', archetype: 'text', behavior: 'fixed', parent: 'd38-c3', x: 16, y: 88, w: 220, h: 22,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
    { id: 'd38-c3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd38-c3', x: 16, y: 116, w: 248, h: 60,
      props: { text: 'Add a short section paragraph. Double click to edit and add your own text.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd38-c3c', archetype: 'text', behavior: 'fixed', parent: 'd38-c3', x: 16, y: 200, w: 100, h: 18,
      props: { text: 'Read More', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#0f172a' } },
    { id: 'd38-c4', archetype: 'container', behavior: 'wrap', x: 672, y: 280, w: 280, h: 240,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd38-c4t', archetype: 'text', behavior: 'fixed', parent: 'd38-c4', x: 16, y: 88, w: 220, h: 22,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
    { id: 'd38-c4b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd38-c4', x: 16, y: 116, w: 248, h: 60,
      props: { text: 'Add a short section paragraph. Double click to edit and add your own text.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd38-c4c', archetype: 'text', behavior: 'fixed', parent: 'd38-c4', x: 16, y: 200, w: 100, h: 18,
      props: { text: 'Read More', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#0f172a' } }
  ]}]
};

// LAYOUT_039 — 4-up Sphere portrait cards (Cards_08)
const LAYOUT_039 = {
  meta: { name: '4-up Sphere Portrait', category: 'portfolio', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 540, layout: 'free', children: [
    { id: 'd39-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 540,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd39-i1', archetype: 'image', behavior: 'scaleProportionally', x: 96, y: 100, w: 220, h: 320, props: {} },
    { id: 'd39-i2', archetype: 'image', behavior: 'scaleProportionally', x: 348, y: 100, w: 220, h: 320, props: {} },
    { id: 'd39-i3', archetype: 'image', behavior: 'scaleProportionally', x: 600, y: 100, w: 220, h: 320, props: {} },
    { id: 'd39-i4', archetype: 'image', behavior: 'scaleProportionally', x: 852, y: 100, w: 220, h: 320, props: {} }
  ]}]
};

// LAYOUT_040 — 3-up Sphere square cards (Cards_03)
const LAYOUT_040 = {
  meta: { name: '3-up Sphere Square', category: 'portfolio', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 540, layout: 'free', children: [
    { id: 'd40-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 540,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd40-i1', archetype: 'image', behavior: 'scaleProportionally', x: 96, y: 96, w: 320, h: 320, props: {} },
    { id: 'd40-i2', archetype: 'image', behavior: 'scaleProportionally', x: 480, y: 96, w: 320, h: 320, props: {} },
    { id: 'd40-i3', archetype: 'image', behavior: 'scaleProportionally', x: 864, y: 96, w: 320, h: 320, props: {} }
  ]}]
};

// LAYOUT_041 — Sphere cards with bottom title (Text_04)
const LAYOUT_041 = {
  meta: { name: 'Sphere Cards Right Strip', category: 'portfolio', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 600, layout: 'free', children: [
    { id: 'd41-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 600,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd41-c1', archetype: 'container', behavior: 'wrap', x: 540, y: 32, w: 220, h: 268,
      props: { background: 'transparent', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd41-c1i', archetype: 'image', behavior: 'stretch', parent: 'd41-c1', x: 0, y: 0, w: 220, h: 220, props: {} },
    { id: 'd41-c1t', archetype: 'text', behavior: 'fixed', parent: 'd41-c1', x: 12, y: 232, w: 196, h: 24,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
    { id: 'd41-c2', archetype: 'container', behavior: 'wrap', x: 780, y: 32, w: 220, h: 268,
      props: { background: 'transparent', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd41-c2i', archetype: 'image', behavior: 'stretch', parent: 'd41-c2', x: 0, y: 0, w: 220, h: 220, props: {} },
    { id: 'd41-c2t', archetype: 'text', behavior: 'fixed', parent: 'd41-c2', x: 12, y: 232, w: 196, h: 24,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
    { id: 'd41-c3', archetype: 'container', behavior: 'wrap', x: 540, y: 320, w: 220, h: 268,
      props: { background: 'transparent', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd41-c3i', archetype: 'image', behavior: 'stretch', parent: 'd41-c3', x: 0, y: 0, w: 220, h: 220, props: {} },
    { id: 'd41-c3t', archetype: 'text', behavior: 'fixed', parent: 'd41-c3', x: 12, y: 232, w: 196, h: 24,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
    { id: 'd41-c4', archetype: 'container', behavior: 'wrap', x: 780, y: 320, w: 220, h: 268,
      props: { background: 'transparent', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd41-c4i', archetype: 'image', behavior: 'stretch', parent: 'd41-c4', x: 0, y: 0, w: 220, h: 220, props: {} },
    { id: 'd41-c4t', archetype: 'text', behavior: 'fixed', parent: 'd41-c4', x: 12, y: 232, w: 196, h: 24,
      props: { text: 'Item Title', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } }
  ]}]
};

// LAYOUT_042 — 3-up Featured cards on gradient (Bento_01)
const LAYOUT_042 = {
  meta: { name: '3-up Featured Gradient', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 480, layout: 'free', children: [
    { id: 'd42-bg', archetype: 'image', behavior: 'scaleProportionally', x: 0, y: 0, w: 1280, h: 480, props: { objectPosition: 'center' } },
    { id: 'd42-c1', archetype: 'container', behavior: 'wrap', x: 64, y: 144, w: 360, h: 200,
      props: { background: 'rgba(255,255,255,0.55)', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd42-c1t', archetype: 'text', behavior: 'fixed', parent: 'd42-c1', x: 16, y: 32, w: 328, h: 24,
      props: { text: 'Featured Item One', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd42-c1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd42-c1', x: 16, y: 64, w: 328, h: 100,
      props: { text: 'Add paragraph text. Click "Edit Text" to update the font, size and more.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd42-c2', archetype: 'container', behavior: 'wrap', x: 460, y: 144, w: 360, h: 200,
      props: { background: 'rgba(255,255,255,0.55)', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd42-c2t', archetype: 'text', behavior: 'fixed', parent: 'd42-c2', x: 16, y: 32, w: 328, h: 24,
      props: { text: 'Featured Item Two', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd42-c2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd42-c2', x: 16, y: 64, w: 328, h: 100,
      props: { text: 'Add paragraph text. Click "Edit Text" to update the font, size and more.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd42-c3', archetype: 'container', behavior: 'wrap', x: 856, y: 144, w: 360, h: 200,
      props: { background: 'rgba(255,255,255,0.55)', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd42-c3t', archetype: 'text', behavior: 'fixed', parent: 'd42-c3', x: 16, y: 32, w: 328, h: 24,
      props: { text: 'Featured Item Three', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd42-c3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd42-c3', x: 16, y: 64, w: 328, h: 100,
      props: { text: 'Add paragraph text. Click "Edit Text" to update the font, size and more.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } }
  ]}]
};

// LAYOUT_043 — Services 6-grid + bottom mountain image (Cards_06)
const LAYOUT_043 = {
  meta: { name: 'Services 6-Grid + Image', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'auto', height: 1100, layout: 'free', children: [
    { id: 'd43-hd', archetype: 'container', behavior: 'wrap', x: 32, y: 32, w: 1216, h: 100,
      props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd43-ht', archetype: 'text', behavior: 'scaleProportionally', parent: 'd43-hd', x: 32, y: 24, w: 600, h: 60,
      props: { text: 'Services', fontFamily: 'Inter', fontSize: 44, fontWeight: '500', color: '#0f172a' } },
    { id: 'd43-r1c1', archetype: 'container', behavior: 'wrap', anchor: 'd43-hd', x: 32, y: 16, w: 405, h: 252,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'd43-r1c1t', archetype: 'text', behavior: 'fixed', parent: 'd43-r1c1', x: 24, y: 80, w: 360, h: 28,
      props: { text: 'Service 1', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a' } },
    { id: 'd43-r1c1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd43-r1c1', x: 24, y: 116, w: 360, h: 90,
      props: { text: 'Use this space to promote your business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd43-r1c2', archetype: 'container', behavior: 'wrap', anchor: 'd43-hd', x: 437, y: 16, w: 405, h: 252,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'd43-r1c2t', archetype: 'text', behavior: 'fixed', parent: 'd43-r1c2', x: 24, y: 80, w: 360, h: 28,
      props: { text: 'Service 2', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a' } },
    { id: 'd43-r1c2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd43-r1c2', x: 24, y: 116, w: 360, h: 90,
      props: { text: 'Use this space to promote your business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd43-r1c3', archetype: 'container', behavior: 'wrap', anchor: 'd43-hd', x: 842, y: 16, w: 406, h: 252,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'd43-r1c3t', archetype: 'text', behavior: 'fixed', parent: 'd43-r1c3', x: 24, y: 80, w: 360, h: 28,
      props: { text: 'Service 3', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a' } },
    { id: 'd43-r1c3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd43-r1c3', x: 24, y: 116, w: 360, h: 90,
      props: { text: 'Use this space to promote your business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd43-r2c1', archetype: 'container', behavior: 'wrap', anchor: 'd43-r1c1', x: 32, y: 0, w: 405, h: 252,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'd43-r2c1t', archetype: 'text', behavior: 'fixed', parent: 'd43-r2c1', x: 24, y: 80, w: 360, h: 28,
      props: { text: 'Service 4', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a' } },
    { id: 'd43-r2c1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd43-r2c1', x: 24, y: 116, w: 360, h: 90,
      props: { text: 'Use this space to promote your business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd43-r2c2', archetype: 'container', behavior: 'wrap', anchor: 'd43-r1c1', x: 437, y: 0, w: 405, h: 252,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'd43-r2c2t', archetype: 'text', behavior: 'fixed', parent: 'd43-r2c2', x: 24, y: 80, w: 360, h: 28,
      props: { text: 'Service 5', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a' } },
    { id: 'd43-r2c2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd43-r2c2', x: 24, y: 116, w: 360, h: 90,
      props: { text: 'Use this space to promote your business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd43-r2c3', archetype: 'container', behavior: 'wrap', anchor: 'd43-r1c1', x: 842, y: 0, w: 406, h: 252,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
    { id: 'd43-r2c3t', archetype: 'text', behavior: 'fixed', parent: 'd43-r2c3', x: 24, y: 80, w: 360, h: 28,
      props: { text: 'Service 6', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a' } },
    { id: 'd43-r2c3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd43-r2c3', x: 24, y: 116, w: 360, h: 90,
      props: { text: 'Use this space to promote your business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd43-img', archetype: 'image', behavior: 'scaleProportionally', anchor: 'd43-r2c1', x: 32, y: 0, w: 1216, h: 320, props: {} }
  ]}]
};

// LAYOUT_044 — Title + 4 sphere cards 2x2 (Frame_1707482897)
const LAYOUT_044 = {
  meta: { name: 'Title + 2x2 Sphere Cards', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 540, layout: 'free', children: [
    { id: 'd44-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 540,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd44-c1', archetype: 'container', behavior: 'wrap', x: 656, y: 32, w: 280, h: 220,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd44-c1t', archetype: 'text', behavior: 'fixed', parent: 'd44-c1', x: 16, y: 16, w: 240, h: 22,
      props: { text: 'Item Title One', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
    { id: 'd44-c1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd44-c1', x: 16, y: 48, w: 240, h: 80,
      props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd44-c1c', archetype: 'text', behavior: 'fixed', parent: 'd44-c1', x: 16, y: 184, w: 100, h: 16,
      props: { text: 'Read More', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#0f172a' } },
    { id: 'd44-c2', archetype: 'container', behavior: 'wrap', x: 968, y: 32, w: 280, h: 220,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd44-c2t', archetype: 'text', behavior: 'fixed', parent: 'd44-c2', x: 16, y: 16, w: 240, h: 22,
      props: { text: 'Item Title Two', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
    { id: 'd44-c2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd44-c2', x: 16, y: 48, w: 240, h: 80,
      props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd44-c2c', archetype: 'text', behavior: 'fixed', parent: 'd44-c2', x: 16, y: 184, w: 100, h: 16,
      props: { text: 'Read More', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#0f172a' } },
    { id: 'd44-c3', archetype: 'container', behavior: 'wrap', x: 656, y: 280, w: 280, h: 220,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd44-c3t', archetype: 'text', behavior: 'fixed', parent: 'd44-c3', x: 16, y: 16, w: 240, h: 22,
      props: { text: 'Item Title Three', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
    { id: 'd44-c3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd44-c3', x: 16, y: 48, w: 240, h: 80,
      props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd44-c3c', archetype: 'text', behavior: 'fixed', parent: 'd44-c3', x: 16, y: 184, w: 100, h: 16,
      props: { text: 'Read More', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#0f172a' } },
    { id: 'd44-c4', archetype: 'container', behavior: 'wrap', x: 968, y: 280, w: 280, h: 220,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd44-c4t', archetype: 'text', behavior: 'fixed', parent: 'd44-c4', x: 16, y: 16, w: 240, h: 22,
      props: { text: 'Item Title Four', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
    { id: 'd44-c4b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd44-c4', x: 16, y: 48, w: 240, h: 80,
      props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd44-c4c', archetype: 'text', behavior: 'fixed', parent: 'd44-c4', x: 16, y: 184, w: 100, h: 16,
      props: { text: 'Read More', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#0f172a' } }
  ]}]
};

// LAYOUT_045 — Big Title Mosaic (Text_05)
const LAYOUT_045 = {
  meta: { name: 'Big Title Mosaic', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 660, layout: 'free', children: [
    { id: 'd45-i1', archetype: 'image', behavior: 'scaleProportionally', x: 32, y: 32, w: 380, h: 380, props: {} },
    { id: 'd45-mid', archetype: 'container', behavior: 'wrap', x: 432, y: 32, w: 120, h: 380,
      props: { background: '#F2F2F1', borderColor: 'transparent', borderRadius: 6 } },
    { id: 'd45-mid-t', archetype: 'text', behavior: 'fixed', parent: 'd45-mid', x: -40, y: 60, w: 200, h: 260,
      props: { text: 'BIG TITLE', fontFamily: 'Inter', fontSize: 48, fontWeight: '500', letterSpacing: '-0.01em', color: '#0f172a', textAlign: 'center' } },
    { id: 'd45-r', archetype: 'container', behavior: 'wrap', x: 572, y: 32, w: 676, h: 200,
      props: { background: '#F8F8F7', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd45-r-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd45-r', x: 32, y: 24, w: 540, h: 100,
      props: { text: "This is a paragraph where you can include any information you'd like. It's an opportunity to tell a story about the company, describe a special service it offers.", fontFamily: 'Inter', fontSize: 13, lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'd45-r-c', archetype: 'button', behavior: 'fixed', parent: 'd45-r', x: 32, y: 140, w: 100, h: 36,
      props: { label: 'Explore', variant: 'ghost', radius: 999, paddingX: 16, paddingY: 8 } },
    { id: 'd45-r2', archetype: 'image', behavior: 'scaleProportionally', x: 572, y: 252, w: 676, h: 160, props: {} }
  ]}]
};

// LAYOUT_046 — Bento 1+3 (Bento_04)
const LAYOUT_046 = {
  meta: { name: 'Bento 1 + Image + 3', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 580, layout: 'free', children: [
    { id: 'd46-l', archetype: 'container', behavior: 'wrap', x: 32, y: 32, w: 580, h: 220,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd46-l-t', archetype: 'text', behavior: 'fixed', parent: 'd46-l', x: 56, y: 56, w: 460, h: 80,
      props: { text: 'Write a Title\nHere.', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', lineHeight: '1.05', color: '#0f172a', textAlign: 'center' } },
    { id: 'd46-l-c', archetype: 'button', behavior: 'fixed', parent: 'd46-l', x: 240, y: 152, w: 100, h: 36,
      props: { label: 'Explore', variant: 'ghost', radius: 999, paddingX: 16, paddingY: 8 } },
    { id: 'd46-r', archetype: 'image', behavior: 'scaleProportionally', x: 644, y: 32, w: 600, h: 220, props: {} },
    { id: 'd46-c1', archetype: 'container', behavior: 'wrap', x: 32, y: 284, w: 392, h: 240,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd46-c1i', archetype: 'image', behavior: 'fixed', parent: 'd46-c1', x: 144, y: 32, w: 100, h: 100, props: {} },
    { id: 'd46-c1t', archetype: 'text', behavior: 'fixed', parent: 'd46-c1', x: 16, y: 144, w: 360, h: 22,
      props: { text: 'Title Goes Here', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd46-c1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd46-c1', x: 16, y: 172, w: 360, h: 60,
      props: { text: 'Describe the item here. Include important features, pricing and other relevant info.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd46-c2', archetype: 'container', behavior: 'wrap', x: 444, y: 284, w: 392, h: 240,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd46-c2i', archetype: 'image', behavior: 'fixed', parent: 'd46-c2', x: 144, y: 32, w: 100, h: 100, props: {} },
    { id: 'd46-c2t', archetype: 'text', behavior: 'fixed', parent: 'd46-c2', x: 16, y: 144, w: 360, h: 22,
      props: { text: 'Title Goes Here', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd46-c2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd46-c2', x: 16, y: 172, w: 360, h: 60,
      props: { text: 'Describe the item here. Include important features, pricing and other relevant info.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd46-c3', archetype: 'container', behavior: 'wrap', x: 856, y: 284, w: 392, h: 240,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd46-c3i', archetype: 'image', behavior: 'fixed', parent: 'd46-c3', x: 144, y: 32, w: 100, h: 100, props: {} },
    { id: 'd46-c3t', archetype: 'text', behavior: 'fixed', parent: 'd46-c3', x: 16, y: 144, w: 360, h: 22,
      props: { text: 'Title Goes Here', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd46-c3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd46-c3', x: 16, y: 172, w: 360, h: 60,
      props: { text: 'Describe the item here. Include important features, pricing and other relevant info.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } }
  ]}]
};

// LAYOUT_047 — Bento Asymmetric Title + Image + 3 small (Bento_07)
const LAYOUT_047 = {
  meta: { name: 'Bento Title + Image + 3', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 580, layout: 'free', children: [
    { id: 'd47-l', archetype: 'container', behavior: 'wrap', x: 32, y: 32, w: 580, h: 280,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd47-l-t', archetype: 'text', behavior: 'fixed', parent: 'd47-l', x: 32, y: 56, w: 516, h: 80,
      props: { text: 'Write a Title\nHere.', fontFamily: 'Inter', fontSize: 38, fontWeight: '500', lineHeight: '1.05', color: '#0f172a' } },
    { id: 'd47-r', archetype: 'image', behavior: 'scaleProportionally', x: 644, y: 32, w: 280, h: 280, props: {} },
    { id: 'd47-rr', archetype: 'image', behavior: 'scaleProportionally', x: 944, y: 32, w: 304, h: 280, props: {} },
    { id: 'd47-bl', archetype: 'container', behavior: 'wrap', x: 32, y: 332, w: 580, h: 220,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd47-bl-t', archetype: 'text', behavior: 'fixed', parent: 'd47-bl', x: 32, y: 24, w: 516, h: 22,
      props: { text: 'Subtitle Goes Here', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
    { id: 'd47-bl-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd47-bl', x: 32, y: 56, w: 516, h: 140,
      props: { text: "This is a paragraph where you can include any information you'd like. It's an opportunity to tell a story about the company.", fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'd47-bm', archetype: 'image', behavior: 'scaleProportionally', x: 644, y: 332, w: 304, h: 220, props: {} },
    { id: 'd47-br', archetype: 'image', behavior: 'scaleProportionally', x: 968, y: 332, w: 280, h: 220, props: {} }
  ]}]
};

// LAYOUT_048 — 2 Cards + Text (Bento_02)
const LAYOUT_048 = {
  meta: { name: '2 Cards + Right Text', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 460, layout: 'free', children: [
    { id: 'd48-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 460,
      props: { background: '#0a0a0a', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd48-l', archetype: 'image', behavior: 'scaleProportionally', x: 32, y: 96, w: 280, h: 280, props: {} },
    { id: 'd48-m', archetype: 'container', behavior: 'wrap', x: 332, y: 96, w: 480, h: 280,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd48-m-t', archetype: 'text', behavior: 'fixed', parent: 'd48-m', x: 32, y: 80, w: 416, h: 80,
      props: { text: 'Write a Title\nHere.', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', lineHeight: '1.05', color: '#0f172a', textAlign: 'center' } },
    { id: 'd48-m-c', archetype: 'button', behavior: 'fixed', parent: 'd48-m', x: 190, y: 184, w: 100, h: 36,
      props: { label: 'Explore', variant: 'ghost', radius: 999, paddingX: 16, paddingY: 8 } },
    { id: 'd48-r', archetype: 'image', behavior: 'scaleProportionally', x: 832, y: 96, w: 280, h: 280, props: {} }
  ]}]
};

// LAYOUT_049 — Sphere + Right cards (Slideshow_05)
const LAYOUT_049 = {
  meta: { name: 'Big Image + Right Cards', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 540, layout: 'free', children: [
    { id: 'd49-l', archetype: 'image', behavior: 'scaleProportionally', x: 32, y: 32, w: 720, h: 460, props: {} },
    { id: 'd49-eye', archetype: 'text', behavior: 'fixed', x: 800, y: 32, w: 200, h: 14,
      props: { text: '• FAQ', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
    { id: 'd49-tt', archetype: 'text', behavior: 'scaleProportionally', anchor: 'd49-eye', x: 800, y: 12, w: 400, h: 36,
      props: { text: 'Quick answers', fontFamily: 'Inter', fontSize: 28, fontWeight: '500', color: '#0f172a' } },
    { id: 'd49-w', archetype: 'container', behavior: 'wrap', anchor: 'd49-tt', x: 800, y: 24, w: 416, h: 200,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 4 } },
    { id: 'd49-wl', archetype: 'text', behavior: 'fixed', parent: 'd49-w', x: 128, y: 84, w: 160, h: 28,
      props: { text: 'Widget', fontFamily: 'Inter', fontSize: 16, fontWeight: '400', color: '#A8A29E', textAlign: 'center' } }
  ]}]
};

// LAYOUT_050 — 3-Column Story (Texts_01)
const LAYOUT_050 = {
  meta: { name: '3-Column Story', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 560, layout: 'free', children: [
    { id: 'd50-l', archetype: 'container', behavior: 'wrap', x: 32, y: 32, w: 380, h: 480,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd50-l-t', archetype: 'text', behavior: 'fixed', parent: 'd50-l', x: 32, y: 96, w: 316, h: 80,
      props: { text: 'Write a Title\nHere.', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', lineHeight: '1.05', color: '#0f172a', textAlign: 'center' } },
    { id: 'd50-l-c', archetype: 'button', behavior: 'fixed', parent: 'd50-l', x: 140, y: 200, w: 100, h: 36,
      props: { label: 'Explore', variant: 'ghost', radius: 999, paddingX: 16, paddingY: 8 } },
    { id: 'd50-m', archetype: 'image', behavior: 'scaleProportionally', x: 444, y: 32, w: 380, h: 480, props: {} },
    { id: 'd50-r', archetype: 'container', behavior: 'wrap', x: 856, y: 32, w: 392, h: 480,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd50-r-h', archetype: 'text', behavior: 'fixed', parent: 'd50-r', x: 32, y: 56, w: 328, h: 24,
      props: { text: 'Subtitle Goes Here', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd50-r-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd50-r', x: 32, y: 96, w: 328, h: 200,
      props: { text: "This is a paragraph where you can include any information you'd like. It's an opportunity to tell a story about the company, describe a special service it offers.", fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#3F3F46', textAlign: 'center' } },
    { id: 'd50-r-rd', archetype: 'text', behavior: 'fixed', parent: 'd50-r', x: 32, y: 432, w: 80, h: 16,
      props: { text: 'Read More', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#0f172a' } }
  ]}]
};

// LAYOUT_051 — Half Sphere / Half Title (Slideshow_10)
const LAYOUT_051 = {
  meta: { name: 'Half Image, Half Title', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 480, layout: 'free', children: [
    { id: 'd51-l', archetype: 'image', behavior: 'scaleProportionally', x: 0, y: 0, w: 480, h: 480, props: {} },
    { id: 'd51-r', archetype: 'container', behavior: 'wrap', x: 480, y: 0, w: 800, h: 480,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd51-r-t', archetype: 'text', behavior: 'fixed', parent: 'd51-r', x: 0, y: 180, w: 800, h: 110,
      props: { text: 'Write a Title Here', fontFamily: 'Inter', fontSize: 64, fontWeight: '500', lineHeight: '1.0', letterSpacing: '-0.02em', color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// LAYOUT_052 — Title + Stats (Cards_05)
const LAYOUT_052 = {
  meta: { name: 'Title + 3 Stat Cards', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 540, layout: 'free', children: [
    { id: 'd52-l', archetype: 'container', behavior: 'wrap', x: 32, y: 32, w: 580, h: 240,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd52-l-t', archetype: 'text', behavior: 'fixed', parent: 'd52-l', x: 32, y: 56, w: 516, h: 80,
      props: { text: 'Write a Title\nHere.', fontFamily: 'Inter', fontSize: 38, fontWeight: '500', lineHeight: '1.05', color: '#0f172a' } },
    { id: 'd52-l-c', archetype: 'button', behavior: 'fixed', parent: 'd52-l', x: 240, y: 168, w: 100, h: 36,
      props: { label: 'Explore', variant: 'ghost', radius: 999, paddingX: 16, paddingY: 8 } },
    { id: 'd52-r', archetype: 'image', behavior: 'scaleProportionally', x: 644, y: 32, w: 604, h: 240, props: {} },
    { id: 'd52-c1', archetype: 'container', behavior: 'wrap', x: 32, y: 304, w: 392, h: 200,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd52-c1i', archetype: 'image', behavior: 'fixed', parent: 'd52-c1', x: 168, y: 24, w: 56, h: 56, props: {} },
    { id: 'd52-c1t', archetype: 'text', behavior: 'fixed', parent: 'd52-c1', x: 16, y: 96, w: 360, h: 24,
      props: { text: 'Title Goes Here', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd52-c1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd52-c1', x: 16, y: 124, w: 360, h: 60,
      props: { text: 'Describe the item here. Include important features, pricing and other relevant info.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd52-c2', archetype: 'container', behavior: 'wrap', x: 444, y: 304, w: 392, h: 200,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd52-c2i', archetype: 'image', behavior: 'fixed', parent: 'd52-c2', x: 168, y: 24, w: 56, h: 56, props: {} },
    { id: 'd52-c2t', archetype: 'text', behavior: 'fixed', parent: 'd52-c2', x: 16, y: 96, w: 360, h: 24,
      props: { text: 'Title Goes Here', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd52-c2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd52-c2', x: 16, y: 124, w: 360, h: 60,
      props: { text: 'Describe the item here. Include important features, pricing and other relevant info.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd52-c3', archetype: 'container', behavior: 'wrap', x: 856, y: 304, w: 392, h: 200,
      props: { background: '#F4F4F5', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd52-c3i', archetype: 'image', behavior: 'fixed', parent: 'd52-c3', x: 168, y: 24, w: 56, h: 56, props: {} },
    { id: 'd52-c3t', archetype: 'text', behavior: 'fixed', parent: 'd52-c3', x: 16, y: 96, w: 360, h: 24,
      props: { text: 'Title Goes Here', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd52-c3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd52-c3', x: 16, y: 124, w: 360, h: 60,
      props: { text: 'Describe the item here. Include important features, pricing and other relevant info.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } }
  ]}]
};

// LAYOUT_053 — Title + 2 Line Items (Cards_04)
const LAYOUT_053 = {
  meta: { name: 'Featured Items 2-Up', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 460, layout: 'free', children: [
    { id: 'd53-bg', archetype: 'container', behavior: 'wrap', x: 640, y: 0, w: 640, h: 460,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd53-l', archetype: 'container', behavior: 'wrap', x: 32, y: 32, w: 580, h: 396,
      props: { background: '#EFEEF8', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd53-l-t', archetype: 'text', behavior: 'fixed', parent: 'd53-l', x: 32, y: 32, w: 516, h: 36,
      props: { text: 'Featured Items', fontFamily: 'Inter', fontSize: 28, fontWeight: '500', color: '#0f172a' } },
    { id: 'd53-l-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd53-l', x: 32, y: 84, w: 516, h: 280,
      props: { text: 'This is a space to promote the business, its products or its services. Use this opportunity to help site visitors become more familiar with the business and its offerings.\n\nExplain what makes the business unique. Identify the qualities that set it apart from its competitors and describe them, staying true to the brand\'s authentic voice.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'd53-r1', archetype: 'container', behavior: 'wrap', x: 660, y: 80, w: 580, h: 140,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd53-r1-t', archetype: 'text', behavior: 'fixed', parent: 'd53-r1', x: 24, y: 24, w: 516, h: 22,
      props: { text: 'Item One', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
    { id: 'd53-r1-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd53-r1', x: 24, y: 56, w: 532, h: 70,
      props: { text: 'Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B' } },
    { id: 'd53-r2', archetype: 'container', behavior: 'wrap', x: 660, y: 240, w: 580, h: 140,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd53-r2-t', archetype: 'text', behavior: 'fixed', parent: 'd53-r2', x: 24, y: 24, w: 516, h: 22,
      props: { text: 'Item Two', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
    { id: 'd53-r2-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd53-r2', x: 24, y: 56, w: 532, h: 70,
      props: { text: 'Use this space to promote your business, its products or its services. Help people become familiar with the business and its offerings.', fontFamily: 'Inter', fontSize: 11, lineHeight: '1.55', color: '#52525B' } }
  ]}]
};

// LAYOUT_054 — Title + 4 cards 2x2 right (Cards_07 / similar)
const LAYOUT_054 = {
  meta: { name: 'Title + 2x2 Cards Right', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 540, layout: 'free', children: [
    { id: 'd54-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 540,
      props: { background: '#5E6471', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd54-l', archetype: 'text', behavior: 'scaleProportionally', x: 64, y: 96, w: 480, h: 80,
      props: { text: 'Write a Title Here.', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', lineHeight: '1.05', color: '#0f172a' } },
    { id: 'd54-l-b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'd54-l', x: 64, y: 16, w: 460, h: 60,
      props: { text: 'This is the space to introduce the business and what it has to offer. Define the qualities and values that make it unique.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'd54-l-c', archetype: 'button', behavior: 'fixed', anchor: 'd54-l-b', x: 64, y: 24, w: 100, h: 36,
      props: { label: 'Read More', variant: 'ghost', radius: 999, paddingX: 16, paddingY: 8 } },
    { id: 'd54-c1', archetype: 'container', behavior: 'wrap', x: 600, y: 64, w: 320, h: 200,
      props: { background: 'rgba(255,255,255,0.10)', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd54-c1i', archetype: 'image', behavior: 'fixed', parent: 'd54-c1', x: 110, y: 32, w: 100, h: 100, props: {} },
    { id: 'd54-c1t', archetype: 'text', behavior: 'fixed', parent: 'd54-c1', x: 16, y: 152, w: 288, h: 22,
      props: { text: '01. Item Title', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
    { id: 'd54-c2', archetype: 'container', behavior: 'wrap', x: 936, y: 64, w: 320, h: 200,
      props: { background: 'rgba(255,255,255,0.10)', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd54-c2i', archetype: 'image', behavior: 'fixed', parent: 'd54-c2', x: 110, y: 32, w: 100, h: 100, props: {} },
    { id: 'd54-c2t', archetype: 'text', behavior: 'fixed', parent: 'd54-c2', x: 16, y: 152, w: 288, h: 22,
      props: { text: '02. Item Title', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
    { id: 'd54-c3', archetype: 'container', behavior: 'wrap', x: 600, y: 280, w: 320, h: 200,
      props: { background: 'rgba(255,255,255,0.10)', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd54-c3i', archetype: 'image', behavior: 'fixed', parent: 'd54-c3', x: 110, y: 32, w: 100, h: 100, props: {} },
    { id: 'd54-c3t', archetype: 'text', behavior: 'fixed', parent: 'd54-c3', x: 16, y: 152, w: 288, h: 22,
      props: { text: '03. Item Title', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
    { id: 'd54-c4', archetype: 'container', behavior: 'wrap', x: 936, y: 280, w: 320, h: 200,
      props: { background: 'rgba(255,255,255,0.10)', borderColor: 'transparent', borderRadius: 8 } },
    { id: 'd54-c4i', archetype: 'image', behavior: 'fixed', parent: 'd54-c4', x: 110, y: 32, w: 100, h: 100, props: {} },
    { id: 'd54-c4t', archetype: 'text', behavior: 'fixed', parent: 'd54-c4', x: 16, y: 152, w: 288, h: 22,
      props: { text: '04. Item Title', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } }
  ]}]
};

// LAYOUT_055 — Dark slideshow frame (Slideshow_04)
const LAYOUT_055 = {
  meta: { name: 'Dark Slideshow TL Sphere', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 480, layout: 'free', children: [
    { id: 'd55-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 480,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd55-i', archetype: 'image', behavior: 'fixed', x: 64, y: 88, w: 64, h: 64, props: {} },
    { id: 'd55-pl', archetype: 'container', behavior: 'fixed', x: 1080, y: 384, w: 44, h: 44,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd55-pl-l', archetype: 'text', behavior: 'fixed', parent: 'd55-pl', x: 0, y: 12, w: 44, h: 22,
      props: { text: '\u2190', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd55-pr', archetype: 'container', behavior: 'fixed', x: 1136, y: 384, w: 44, h: 44,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd55-pr-l', archetype: 'text', behavior: 'fixed', parent: 'd55-pr', x: 0, y: 12, w: 44, h: 22,
      props: { text: '\u2192', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// LAYOUT_056 — Dark Carousel Center sphere + side arrows (Slideshow_01)
const LAYOUT_056 = {
  meta: { name: 'Dark Carousel Side Nav', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 460, layout: 'free', children: [
    { id: 'd56-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 460,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd56-i', archetype: 'image', behavior: 'scaleProportionally', x: 600, y: 200, w: 80, h: 80, props: {} },
    { id: 'd56-pl', archetype: 'container', behavior: 'fixed', x: 80, y: 200, w: 56, h: 56,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd56-pl-l', archetype: 'text', behavior: 'fixed', parent: 'd56-pl', x: 0, y: 16, w: 56, h: 24,
      props: { text: '\u2190', fontFamily: 'Inter', fontSize: 18, color: '#0f172a', textAlign: 'center' } },
    { id: 'd56-pr', archetype: 'container', behavior: 'fixed', x: 1144, y: 200, w: 56, h: 56,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd56-pr-l', archetype: 'text', behavior: 'fixed', parent: 'd56-pr', x: 0, y: 16, w: 56, h: 24,
      props: { text: '\u2192', fontFamily: 'Inter', fontSize: 18, color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// LAYOUT_057 — Card frame minimal (Cards_01)
const LAYOUT_057 = {
  meta: { name: 'Dark Card Frame', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 460, layout: 'free', children: [
    { id: 'd57-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 460,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd57-card', archetype: 'container', behavior: 'wrap', x: 96, y: 80, w: 1088, h: 300,
      props: { background: 'transparent', borderColor: '#262626', borderRadius: 8 } }
  ]}]
};

// LAYOUT_058 — Read More footer dark (Text_07)
const LAYOUT_058 = {
  meta: { name: 'Dark Read-More Footer', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 440, layout: 'free', children: [
    { id: 'd58-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 440,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd58-l', archetype: 'text', behavior: 'fixed', x: 540, y: 380, w: 200, h: 20,
      props: { text: 'Read More', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#A1A1AA', textAlign: 'center' } }
  ]}]
};

// LAYOUT_059 — Read More center dark (Texts_02)
const LAYOUT_059 = {
  meta: { name: 'Dark Read-More Center', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 440, layout: 'free', children: [
    { id: 'd59-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 440,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd59-l', archetype: 'text', behavior: 'fixed', x: 540, y: 360, w: 200, h: 20,
      props: { text: 'Read More', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#A1A1AA', textAlign: 'center' } }
  ]}]
};

// LAYOUT_060 — Bento dark with arrows + Learn More (Bento_06)
const LAYOUT_060 = {
  meta: { name: 'Dark + Arrows + Learn More', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 440, layout: 'free', children: [
    { id: 'd60-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 440,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd60-l', archetype: 'text', behavior: 'fixed', x: 540, y: 360, w: 200, h: 20,
      props: { text: 'Learn More', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#A1A1AA', textAlign: 'center' } },
    { id: 'd60-pl', archetype: 'container', behavior: 'fixed', x: 80, y: 192, w: 56, h: 56,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd60-pl-l', archetype: 'text', behavior: 'fixed', parent: 'd60-pl', x: 0, y: 16, w: 56, h: 24,
      props: { text: '\u2190', fontFamily: 'Inter', fontSize: 18, color: '#0f172a', textAlign: 'center' } },
    { id: 'd60-pr', archetype: 'container', behavior: 'fixed', x: 1144, y: 192, w: 56, h: 56,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd60-pr-l', archetype: 'text', behavior: 'fixed', parent: 'd60-pr', x: 0, y: 16, w: 56, h: 24,
      props: { text: '\u2192', fontFamily: 'Inter', fontSize: 18, color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// LAYOUT_061 — Vertical nav sphere (Slideshow_08)
const LAYOUT_061 = {
  meta: { name: 'Sphere + Vertical Nav', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 440, layout: 'free', children: [
    { id: 'd61-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 440,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd61-card', archetype: 'image', behavior: 'scaleProportionally', x: 360, y: 88, w: 220, h: 264, props: {} },
    { id: 'd61-up', archetype: 'container', behavior: 'fixed', x: 1156, y: 152, w: 36, h: 36,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd61-up-l', archetype: 'text', behavior: 'fixed', parent: 'd61-up', x: 0, y: 8, w: 36, h: 20,
      props: { text: '\u2191', fontFamily: 'Inter', fontSize: 14, color: '#0f172a', textAlign: 'center' } },
    { id: 'd61-dn', archetype: 'container', behavior: 'fixed', x: 1156, y: 200, w: 36, h: 36,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd61-dn-l', archetype: 'text', behavior: 'fixed', parent: 'd61-dn', x: 0, y: 8, w: 36, h: 20,
      props: { text: '\u2193', fontFamily: 'Inter', fontSize: 14, color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// LAYOUT_062 — Sphere right + arrows (Frame_3498)
const LAYOUT_062 = {
  meta: { name: 'Dark + Right Item Card', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 440, layout: 'free', children: [
    { id: 'd62-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 440,
      props: { background: '#0a0a0a', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd62-card', archetype: 'container', behavior: 'wrap', x: 760, y: 96, w: 460, h: 220,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd62-c-t', archetype: 'text', behavior: 'fixed', parent: 'd62-card', x: 32, y: 56, w: 396, h: 22,
      props: { text: 'Item One', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd62-c-b', archetype: 'text', behavior: 'scaleProportionally', parent: 'd62-card', x: 32, y: 88, w: 396, h: 60,
      props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } },
    { id: 'd62-pl', archetype: 'container', behavior: 'fixed', parent: 'd62-card', x: 360, y: 168, w: 36, h: 36,
      props: { background: 'transparent', borderColor: '#0f172a', borderRadius: 6 } },
    { id: 'd62-pl-l', archetype: 'text', behavior: 'fixed', parent: 'd62-pl', x: 0, y: 8, w: 36, h: 20,
      props: { text: '\u2039', fontFamily: 'Inter', fontSize: 16, color: '#0f172a', textAlign: 'center' } },
    { id: 'd62-pr', archetype: 'container', behavior: 'fixed', parent: 'd62-card', x: 408, y: 168, w: 36, h: 36,
      props: { background: 'transparent', borderColor: '#0f172a', borderRadius: 6 } },
    { id: 'd62-pr-l', archetype: 'text', behavior: 'fixed', parent: 'd62-pr', x: 0, y: 8, w: 36, h: 20,
      props: { text: '\u203A', fontFamily: 'Inter', fontSize: 16, color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// LAYOUT_063 — Sphere left dark (Slideshow_06)
const LAYOUT_063 = {
  meta: { name: 'Dark + Left Sphere', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 440, layout: 'free', children: [
    { id: 'd63-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 440,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd63-i', archetype: 'image', behavior: 'scaleProportionally', x: 64, y: 80, w: 380, h: 280, props: {} }
  ]}]
};

// LAYOUT_064 — Sphere card with arrows (Bento_05)
const LAYOUT_064 = {
  meta: { name: 'Card + Side Arrows', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 280, layout: 'free', children: [
    { id: 'd64-i', archetype: 'image', behavior: 'scaleProportionally', x: 32, y: 32, w: 280, h: 220, props: {} },
    { id: 'd64-eye', archetype: 'text', behavior: 'fixed', x: 360, y: 32, w: 100, h: 14,
      props: { text: '• FAQ', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
    { id: 'd64-tt', archetype: 'text', behavior: 'scaleProportionally', anchor: 'd64-eye', x: 360, y: 12, w: 400, h: 32,
      props: { text: 'Quick answers', fontFamily: 'Inter', fontSize: 24, fontWeight: '500', color: '#0f172a' } },
    { id: 'd64-w', archetype: 'container', behavior: 'wrap', anchor: 'd64-tt', x: 360, y: 24, w: 460, h: 120,
      props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 4 } },
    { id: 'd64-wl', archetype: 'text', behavior: 'fixed', parent: 'd64-w', x: 156, y: 44, w: 160, h: 28,
      props: { text: 'Widget', fontFamily: 'Inter', fontSize: 16, color: '#A8A29E', textAlign: 'center' } }
  ]}]
};

// LAYOUT_065 — Staggered portrait cards (Slideshow_09)
const LAYOUT_065 = {
  meta: { name: 'Staggered Portrait Cards', category: 'portfolio', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 540, layout: 'free', children: [
    { id: 'd65-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 540,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd65-c1', archetype: 'image', behavior: 'scaleProportionally', x: 280, y: 96, w: 240, h: 360, props: {} },
    { id: 'd65-c1l', archetype: 'text', behavior: 'fixed', x: 296, y: 416, w: 200, h: 20,
      props: { text: '01. Featured Item', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
    { id: 'd65-c2', archetype: 'image', behavior: 'scaleProportionally', x: 540, y: 64, w: 240, h: 360, props: {} },
    { id: 'd65-c2l', archetype: 'text', behavior: 'fixed', x: 556, y: 384, w: 200, h: 20,
      props: { text: '02. Featured Item', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
    { id: 'd65-c3', archetype: 'image', behavior: 'scaleProportionally', x: 800, y: 32, w: 240, h: 360, props: {} },
    { id: 'd65-c3l', archetype: 'text', behavior: 'fixed', x: 816, y: 352, w: 200, h: 20,
      props: { text: '03. Featured Item', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } }
  ]}]
};

// LAYOUT_066 — Hero with side arrows + read more (Slideshow_07)
const LAYOUT_066 = {
  meta: { name: 'Hero + Side Arrows', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 440, layout: 'free', children: [
    { id: 'd66-bg', archetype: 'image', behavior: 'scaleProportionally', x: 0, y: 0, w: 1280, h: 440, props: { objectPosition: 'center' } },
    { id: 'd66-t', archetype: 'text', behavior: 'fixed', x: 280, y: 144, w: 720, h: 32,
      props: { text: 'Item Title One', fontFamily: 'Inter', fontSize: 24, fontWeight: '500', color: '#0f172a' } },
    { id: 'd66-b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'd66-t', x: 280, y: 16, w: 720, h: 60,
      props: { text: 'Use this space to promote the business, its products or its services. Help people become familiar with the business.', fontFamily: 'Inter', fontSize: 13, lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'd66-c', archetype: 'button', behavior: 'fixed', anchor: 'd66-b', x: 280, y: 16, w: 100, h: 32,
      props: { label: 'Read More', variant: 'ghost', radius: 999, paddingX: 14, paddingY: 6 } },
    { id: 'd66-pl', archetype: 'container', behavior: 'fixed', x: 80, y: 200, w: 44, h: 44,
      props: { background: 'transparent', borderColor: '#0f172a', borderRadius: 999 } },
    { id: 'd66-pl-l', archetype: 'text', behavior: 'fixed', parent: 'd66-pl', x: 0, y: 12, w: 44, h: 22,
      props: { text: '\u2190', fontFamily: 'Inter', fontSize: 16, color: '#0f172a', textAlign: 'center' } },
    { id: 'd66-pr', archetype: 'container', behavior: 'fixed', x: 1156, y: 200, w: 44, h: 44,
      props: { background: 'transparent', borderColor: '#0f172a', borderRadius: 999 } },
    { id: 'd66-pr-l', archetype: 'text', behavior: 'fixed', parent: 'd66-pr', x: 0, y: 12, w: 44, h: 22,
      props: { text: '\u2192', fontFamily: 'Inter', fontSize: 16, color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// LAYOUT_067 — Two cards on dark (Slideshow_02)
const LAYOUT_067 = {
  meta: { name: 'Two Cards Dark', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 440, layout: 'free', children: [
    { id: 'd67-bg', archetype: 'container', behavior: 'wrap', x: 640, y: 0, w: 640, h: 440,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd67-l', archetype: 'container', behavior: 'fixed', x: 96, y: 96, w: 88, h: 88,
      props: { background: 'transparent', borderColor: '#3F3F46', borderRadius: 999 } },
    { id: 'd67-l-l', archetype: 'text', behavior: 'fixed', parent: 'd67-l', x: 0, y: 30, w: 88, h: 28,
      props: { text: '\u2190', fontFamily: 'Inter', fontSize: 18, color: '#0f172a', textAlign: 'center' } },
    { id: 'd67-r', archetype: 'container', behavior: 'fixed', x: 1100, y: 192, w: 56, h: 56,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd67-r-l', archetype: 'text', behavior: 'fixed', parent: 'd67-r', x: 0, y: 16, w: 56, h: 24,
      props: { text: '\u2192', fontFamily: 'Inter', fontSize: 18, color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// LAYOUT_068 — Text card + dark right (Cards_10)
const LAYOUT_068 = {
  meta: { name: 'Item Card + Dark Right', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 440, layout: 'free', children: [
    { id: 'd68-bg', archetype: 'container', behavior: 'wrap', x: 640, y: 0, w: 640, h: 440,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd68-l', archetype: 'image', behavior: 'scaleProportionally', x: 0, y: 0, w: 640, h: 440, props: {} },
    { id: 'd68-r-t', archetype: 'text', behavior: 'fixed', x: 740, y: 220, w: 540, h: 24,
      props: { text: 'Item One', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
    { id: 'd68-r-b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'd68-r-t', x: 740, y: 16, w: 540, h: 56,
      props: { text: 'Use this space to promote the business, its products or its services.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#3F3F46', textAlign: 'center' } },
    { id: 'd68-pl', archetype: 'container', behavior: 'fixed', x: 1148, y: 360, w: 36, h: 36,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 6 } },
    { id: 'd68-pl-l', archetype: 'text', behavior: 'fixed', parent: 'd68-pl', x: 0, y: 8, w: 36, h: 20,
      props: { text: '\u2039', fontFamily: 'Inter', fontSize: 16, color: '#0f172a', textAlign: 'center' } },
    { id: 'd68-pr', archetype: 'container', behavior: 'fixed', x: 1196, y: 360, w: 36, h: 36,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 6 } },
    { id: 'd68-pr-l', archetype: 'text', behavior: 'fixed', parent: 'd68-pr', x: 0, y: 8, w: 36, h: 20,
      props: { text: '\u203A', fontFamily: 'Inter', fontSize: 16, color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// LAYOUT_069 — Side-by-side title+arrows (Text_03)
const LAYOUT_069 = {
  meta: { name: 'Title Card + Dark Half', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 440, layout: 'free', children: [
    { id: 'd69-bg', archetype: 'container', behavior: 'wrap', x: 640, y: 0, w: 640, h: 440,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd69-l', archetype: 'image', behavior: 'scaleProportionally', x: 0, y: 0, w: 640, h: 440, props: {} },
    { id: 'd69-l-t', archetype: 'text', behavior: 'fixed', x: 32, y: 188, w: 580, h: 28,
      props: { text: 'Item Title One', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
    { id: 'd69-l-b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'd69-l-t', x: 32, y: 12, w: 580, h: 60,
      props: { text: 'Use this space to promote the business, its products or its services. Help people become familiar with the business.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#3F3F46' } },
    { id: 'd69-l-c', archetype: 'button', behavior: 'fixed', anchor: 'd69-l-b', x: 32, y: 16, w: 100, h: 32,
      props: { label: 'Read More', variant: 'ghost', radius: 999, paddingX: 14, paddingY: 6 } },
    { id: 'd69-pl', archetype: 'container', behavior: 'fixed', x: 80, y: 200, w: 56, h: 56,
      props: { background: 'transparent', borderColor: '#0f172a', borderRadius: 999 } },
    { id: 'd69-pl-l', archetype: 'text', behavior: 'fixed', parent: 'd69-pl', x: 0, y: 16, w: 56, h: 24,
      props: { text: '\u2190', fontFamily: 'Inter', fontSize: 18, color: '#0f172a', textAlign: 'center' } },
    { id: 'd69-pr', archetype: 'container', behavior: 'fixed', x: 1144, y: 200, w: 56, h: 56,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd69-pr-l', archetype: 'text', behavior: 'fixed', parent: 'd69-pr', x: 0, y: 16, w: 56, h: 24,
      props: { text: '\u2192', fontFamily: 'Inter', fontSize: 18, color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// LAYOUT_070 — Services Page multi-section (_04__Services condensed)
const LAYOUT_070 = {
  meta: { name: 'Services Page (Multi)', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    { behavior: 'fixedHeight', height: 100, layout: 'free', children: [
      { id: 'sp-h', archetype: 'text', behavior: 'scaleProportionally', x: 32, y: 32, w: 800, h: 56,
        props: { text: 'Services', fontFamily: 'Inter', fontSize: 44, fontWeight: '500', color: '#0f172a' } }
    ]},
    { behavior: 'fixedHeight', height: 240, layout: 'free', children: [
      { id: 'sp-img', archetype: 'image', behavior: 'scaleProportionally', x: 32, y: 16, w: 1216, h: 200, props: {} }
    ]},
    { behavior: 'fixedHeight', height: 320, layout: 'free', children: [
      { id: 'sp-t2', archetype: 'text', behavior: 'fixed', x: 32, y: 32, w: 600, h: 32,
        props: { text: 'Our Services', fontFamily: 'Inter', fontSize: 24, fontWeight: '500', color: '#0f172a' } },
      { id: 'sp-c1', archetype: 'container', behavior: 'wrap', anchor: 'sp-t2', x: 32, y: 24, w: 392, h: 200,
        props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
      { id: 'sp-c1t', archetype: 'text', behavior: 'fixed', parent: 'sp-c1', x: 16, y: 16, w: 360, h: 22,
        props: { text: 'Service 1', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
      { id: 'sp-c1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'sp-c1', x: 16, y: 48, w: 360, h: 60,
        props: { text: 'Describe the service and how your customers or clients can benefit from it.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
      { id: 'sp-c1i', archetype: 'image', behavior: 'scaleProportionally', parent: 'sp-c1', x: 16, y: 116, w: 360, h: 60, props: {} },
      { id: 'sp-c1c', archetype: 'button', behavior: 'fixed', parent: 'sp-c1', x: 16, y: 168, w: 84, h: 24,
        props: { label: 'Book Now', variant: 'primary', radius: 4, paddingX: 10, paddingY: 4 } },
      { id: 'sp-c2', archetype: 'container', behavior: 'wrap', anchor: 'sp-t2', x: 444, y: 24, w: 392, h: 200,
        props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
      { id: 'sp-c2t', archetype: 'text', behavior: 'fixed', parent: 'sp-c2', x: 16, y: 16, w: 360, h: 22,
        props: { text: 'Service 2', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
      { id: 'sp-c2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'sp-c2', x: 16, y: 48, w: 360, h: 60,
        props: { text: 'Describe the service and how your customers or clients can benefit from it.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
      { id: 'sp-c2i', archetype: 'image', behavior: 'scaleProportionally', parent: 'sp-c2', x: 16, y: 116, w: 360, h: 60, props: {} },
      { id: 'sp-c2c', archetype: 'button', behavior: 'fixed', parent: 'sp-c2', x: 16, y: 168, w: 84, h: 24,
        props: { label: 'Book Now', variant: 'primary', radius: 4, paddingX: 10, paddingY: 4 } },
      { id: 'sp-c3', archetype: 'container', behavior: 'wrap', anchor: 'sp-t2', x: 856, y: 24, w: 392, h: 200,
        props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
      { id: 'sp-c3t', archetype: 'text', behavior: 'fixed', parent: 'sp-c3', x: 16, y: 16, w: 360, h: 22,
        props: { text: 'Service 3', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
      { id: 'sp-c3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'sp-c3', x: 16, y: 48, w: 360, h: 60,
        props: { text: 'Describe the service and how your customers or clients can benefit from it.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
      { id: 'sp-c3i', archetype: 'image', behavior: 'scaleProportionally', parent: 'sp-c3', x: 16, y: 116, w: 360, h: 60, props: {} },
      { id: 'sp-c3c', archetype: 'button', behavior: 'fixed', parent: 'sp-c3', x: 16, y: 168, w: 84, h: 24,
        props: { label: 'Book Now', variant: 'primary', radius: 4, paddingX: 10, paddingY: 4 } }
    ]},
    { behavior: 'fixedHeight', height: 280, layout: 'free', children: [
      { id: 'sp-ft', archetype: 'text', behavior: 'fixed', x: 32, y: 32, w: 600, h: 32,
        props: { text: 'Features', fontFamily: 'Inter', fontSize: 24, fontWeight: '500', color: '#0f172a' } },
      { id: 'sp-fr1', archetype: 'container', behavior: 'wrap', anchor: 'sp-ft', x: 32, y: 24, w: 1216, h: 44,
        props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
      { id: 'sp-fr1t', archetype: 'text', behavior: 'fixed', parent: 'sp-fr1', x: 24, y: 14, w: 200, h: 16,
        props: { text: 'Feature 1', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
      { id: 'sp-fr1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'sp-fr1', x: 280, y: 14, w: 920, h: 16,
        props: { text: 'This is the space to showcase the specific characteristics and capabilities that make your product stand out.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
      { id: 'sp-fr2', archetype: 'container', behavior: 'wrap', anchor: 'sp-fr1', x: 32, y: 0, w: 1216, h: 44,
        props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
      { id: 'sp-fr2t', archetype: 'text', behavior: 'fixed', parent: 'sp-fr2', x: 24, y: 14, w: 200, h: 16,
        props: { text: 'Feature 2', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
      { id: 'sp-fr2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'sp-fr2', x: 280, y: 14, w: 920, h: 16,
        props: { text: 'This is the space to showcase the specific characteristics and capabilities that make your product stand out.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } }
    ]}
  ]
};

// LAYOUT_071 — Services & Capabilities Page (Frame_1707489993 condensed)
const LAYOUT_071 = {
  meta: { name: 'Services & Capabilities', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    { behavior: 'fixedHeight', height: 220, layout: 'free', children: [
      { id: 'sc-h', archetype: 'text', behavior: 'scaleProportionally', x: 32, y: 56, w: 600, h: 96,
        props: { text: 'Services &\nCapabilities', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', lineHeight: '1.05', color: '#0f172a' } },
      { id: 'sc-i', archetype: 'image', behavior: 'scaleProportionally', x: 700, y: 32, w: 548, h: 156, props: {} }
    ]},
    { behavior: 'fixedHeight', height: 360, layout: 'free', children: [
      { id: 'sc-eye', archetype: 'text', behavior: 'fixed', x: 32, y: 32, w: 200, h: 14,
        props: { text: '• Industries We Serve', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
      { id: 'sc-tt', archetype: 'text', behavior: 'scaleProportionally', anchor: 'sc-eye', x: 32, y: 12, w: 600, h: 32,
        props: { text: 'Our areas of expertise', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a' } },
      { id: 'sc-r1', archetype: 'container', behavior: 'wrap', anchor: 'sc-tt', x: 32, y: 24, w: 600, h: 60,
        props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
      { id: 'sc-r1n', archetype: 'text', behavior: 'fixed', parent: 'sc-r1', x: 24, y: 14, w: 100, h: 32,
        props: { text: '1', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
      { id: 'sc-r1t', archetype: 'text', behavior: 'fixed', parent: 'sc-r1', x: 96, y: 14, w: 240, h: 16,
        props: { text: 'Industry Name', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
      { id: 'sc-r1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'sc-r1', x: 96, y: 32, w: 480, h: 24,
        props: { text: 'This is the space to introduce your areas of expertise.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
      { id: 'sc-r1i', archetype: 'image', behavior: 'scaleProportionally', anchor: 'sc-tt', x: 660, y: 24, w: 588, h: 60, props: {} },
      { id: 'sc-r2', archetype: 'container', behavior: 'wrap', anchor: 'sc-r1', x: 32, y: 8, w: 600, h: 60,
        props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
      { id: 'sc-r2n', archetype: 'text', behavior: 'fixed', parent: 'sc-r2', x: 24, y: 14, w: 100, h: 32,
        props: { text: '2', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
      { id: 'sc-r2t', archetype: 'text', behavior: 'fixed', parent: 'sc-r2', x: 96, y: 14, w: 240, h: 16,
        props: { text: 'Industry Name', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
      { id: 'sc-r2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'sc-r2', x: 96, y: 32, w: 480, h: 24,
        props: { text: 'This is the space to introduce your areas of expertise.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
      { id: 'sc-r2i', archetype: 'image', behavior: 'scaleProportionally', anchor: 'sc-r1', x: 660, y: 8, w: 588, h: 60, props: {} },
      { id: 'sc-r3', archetype: 'container', behavior: 'wrap', anchor: 'sc-r2', x: 32, y: 8, w: 600, h: 60,
        props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
      { id: 'sc-r3n', archetype: 'text', behavior: 'fixed', parent: 'sc-r3', x: 24, y: 14, w: 100, h: 32,
        props: { text: '3', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
      { id: 'sc-r3t', archetype: 'text', behavior: 'fixed', parent: 'sc-r3', x: 96, y: 14, w: 240, h: 16,
        props: { text: 'Industry Name', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
      { id: 'sc-r3b', archetype: 'text', behavior: 'scaleProportionally', parent: 'sc-r3', x: 96, y: 32, w: 480, h: 24,
        props: { text: 'This is the space to introduce your areas of expertise.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
      { id: 'sc-r3i', archetype: 'image', behavior: 'scaleProportionally', anchor: 'sc-r2', x: 660, y: 8, w: 588, h: 60, props: {} }
    ]},
    { behavior: 'fixedHeight', height: 220, layout: 'free', children: [
      { id: 'sc-w', archetype: 'container', behavior: 'wrap', x: 32, y: 32, w: 1216, h: 156,
        props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 4 } },
      { id: 'sc-w-l', archetype: 'text', behavior: 'fixed', parent: 'sc-w', x: 460, y: 60, w: 320, h: 36,
        props: { text: 'Insert Services Widget', fontFamily: 'Inter', fontSize: 18, color: '#A8A29E', textAlign: 'center' } }
    ]},
    { behavior: 'fixedHeight', height: 100, layout: 'free', children: [
      { id: 'sc-p', archetype: 'text', behavior: 'fixed', x: 32, y: 24, w: 600, h: 28,
        props: { text: 'Our business associates', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
      { id: 'sc-l1', archetype: 'image', behavior: 'fixed', anchor: 'sc-p', x: 32, y: 16, w: 100, h: 36, props: {} },
      { id: 'sc-l2', archetype: 'image', behavior: 'fixed', anchor: 'sc-p', x: 156, y: 16, w: 100, h: 36, props: {} },
      { id: 'sc-l3', archetype: 'image', behavior: 'fixed', anchor: 'sc-p', x: 280, y: 16, w: 100, h: 36, props: {} },
      { id: 'sc-l4', archetype: 'image', behavior: 'fixed', anchor: 'sc-p', x: 404, y: 16, w: 100, h: 36, props: {} }
    ]}
  ]
};

// LAYOUT_072 — Services & Solutions multi-section (Group_2147221585 condensed)
const LAYOUT_072 = {
  meta: { name: 'Services & Solutions', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    { behavior: 'fixedHeight', height: 100, layout: 'free', children: [
      { id: 'ss-h', archetype: 'text', behavior: 'scaleProportionally', x: 32, y: 32, w: 800, h: 60,
        props: { text: 'Services & Solutions', fontFamily: 'Inter', fontSize: 40, fontWeight: '500', color: '#0f172a' } }
    ]},
    { behavior: 'fixedHeight', height: 260, layout: 'free', children: [
      { id: 'ss-eye', archetype: 'text', behavior: 'fixed', x: 32, y: 32, w: 200, h: 14,
        props: { text: 'Practice Areas', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
      { id: 'ss-tt', archetype: 'text', behavior: 'scaleProportionally', anchor: 'ss-eye', x: 32, y: 12, w: 460, h: 32,
        props: { text: 'Industries we serve', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', color: '#0f172a' } },
      { id: 'ss-i1', archetype: 'text', behavior: 'fixed', x: 540, y: 56, w: 60, h: 16,
        props: { text: '01', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
      { id: 'ss-i1t', archetype: 'text', behavior: 'fixed', anchor: 'ss-i1', x: 540, y: 4, w: 280, h: 18,
        props: { text: 'Industry Title', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
      { id: 'ss-i1b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'ss-i1t', x: 540, y: 8, w: 280, h: 60,
        props: { text: 'This is the space to outline your areas of expertise.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
      { id: 'ss-i2', archetype: 'text', behavior: 'fixed', x: 880, y: 56, w: 60, h: 16,
        props: { text: '02', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
      { id: 'ss-i2t', archetype: 'text', behavior: 'fixed', anchor: 'ss-i2', x: 880, y: 4, w: 280, h: 18,
        props: { text: 'Industry Title', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
      { id: 'ss-i2b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'ss-i2t', x: 880, y: 8, w: 280, h: 60,
        props: { text: 'This is the space to outline your areas of expertise.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } }
    ]},
    { behavior: 'fixedHeight', height: 360, layout: 'free', children: [
      { id: 'ss-eye2', archetype: 'text', behavior: 'fixed', x: 32, y: 32, w: 200, h: 14,
        props: { text: 'Our Solutions', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', color: '#71717A' } },
      { id: 'ss-tt2', archetype: 'text', behavior: 'scaleProportionally', anchor: 'ss-eye2', x: 32, y: 12, w: 720, h: 36,
        props: { text: 'Tailored solutions for your needs', fontFamily: 'Inter', fontSize: 28, fontWeight: '500', color: '#0f172a' } },
      { id: 'ss-r1', archetype: 'container', behavior: 'wrap', anchor: 'ss-tt2', x: 32, y: 24, w: 1216, h: 64,
        props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
      { id: 'ss-r1n', archetype: 'text', behavior: 'fixed', parent: 'ss-r1', x: 24, y: 14, w: 60, h: 16,
        props: { text: '01', fontFamily: 'Inter', fontSize: 11, color: '#71717A' } },
      { id: 'ss-r1t', archetype: 'text', behavior: 'fixed', parent: 'ss-r1', x: 96, y: 14, w: 200, h: 16,
        props: { text: 'Category Name', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
      { id: 'ss-r1b', archetype: 'text', behavior: 'scaleProportionally', parent: 'ss-r1', x: 360, y: 14, w: 540, h: 36,
        props: { text: 'Describe the service and how your customers or clients can benefit from it.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
      { id: 'ss-r1i', archetype: 'image', behavior: 'scaleProportionally', parent: 'ss-r1', x: 940, y: 8, w: 120, h: 48, props: {} },
      { id: 'ss-r1c', archetype: 'button', behavior: 'fixed', parent: 'ss-r1', x: 96, y: 36, w: 80, h: 22,
        props: { label: 'Book Now', variant: 'primary', radius: 4, paddingX: 8, paddingY: 4 } },
      { id: 'ss-r2', archetype: 'container', behavior: 'wrap', anchor: 'ss-r1', x: 32, y: 8, w: 1216, h: 64,
        props: { background: 'transparent', borderColor: '#E5E5E5', borderRadius: 0 } },
      { id: 'ss-r2n', archetype: 'text', behavior: 'fixed', parent: 'ss-r2', x: 24, y: 14, w: 60, h: 16,
        props: { text: '02', fontFamily: 'Inter', fontSize: 11, color: '#71717A' } },
      { id: 'ss-r2t', archetype: 'text', behavior: 'fixed', parent: 'ss-r2', x: 96, y: 14, w: 200, h: 16,
        props: { text: 'Category Name', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
      { id: 'ss-r2b', archetype: 'text', behavior: 'scaleProportionally', parent: 'ss-r2', x: 360, y: 14, w: 540, h: 36,
        props: { text: 'Describe the service and how your customers or clients can benefit from it.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
      { id: 'ss-r2i', archetype: 'image', behavior: 'scaleProportionally', parent: 'ss-r2', x: 940, y: 8, w: 120, h: 48, props: {} },
      { id: 'ss-r2c', archetype: 'button', behavior: 'fixed', parent: 'ss-r2', x: 96, y: 36, w: 80, h: 22,
        props: { label: 'Book Now', variant: 'primary', radius: 4, paddingX: 8, paddingY: 4 } }
    ]}
  ]
};

// LAYOUT_073 — Brand row carousel (Group_2147221596)
const LAYOUT_073 = {
  meta: { name: 'Brand Row + Side Arrows', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 360, layout: 'free', children: [
    { id: 'd73-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 280,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd73-ic', archetype: 'image', behavior: 'scaleProportionally', x: 32, y: 32, w: 220, h: 220, props: {} },
    { id: 'd73-pl', archetype: 'container', behavior: 'fixed', x: 1100, y: 32, w: 36, h: 36,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd73-pl-l', archetype: 'text', behavior: 'fixed', parent: 'd73-pl', x: 0, y: 8, w: 36, h: 20,
      props: { text: '\u2190', fontFamily: 'Inter', fontSize: 14, color: '#0f172a', textAlign: 'center' } },
    { id: 'd73-pr', archetype: 'container', behavior: 'fixed', x: 1148, y: 32, w: 36, h: 36,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd73-pr-l', archetype: 'text', behavior: 'fixed', parent: 'd73-pr', x: 0, y: 8, w: 36, h: 20,
      props: { text: '\u2192', fontFamily: 'Inter', fontSize: 14, color: '#0f172a', textAlign: 'center' } },
    { id: 'd73-strip', archetype: 'container', behavior: 'wrap', x: 0, y: 280, w: 1280, h: 80,
      props: { background: '#FAFAFA', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd73-b1', archetype: 'text', behavior: 'fixed', parent: 'd73-strip', x: 64, y: 28, w: 140, h: 24,
      props: { text: 'Brushed', fontFamily: 'Georgia', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
    { id: 'd73-b2', archetype: 'text', behavior: 'fixed', parent: 'd73-strip', x: 240, y: 28, w: 140, h: 24,
      props: { text: '••• Fixteria', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a' } },
    { id: 'd73-b3', archetype: 'text', behavior: 'fixed', parent: 'd73-strip', x: 416, y: 28, w: 140, h: 24,
      props: { text: 'Kyro Inst.', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a' } },
    { id: 'd73-b4', archetype: 'text', behavior: 'fixed', parent: 'd73-strip', x: 592, y: 28, w: 140, h: 24,
      props: { text: 'NOVATECH', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', letterSpacing: '0.10em', color: '#0f172a' } },
    { id: 'd73-b5', archetype: 'text', behavior: 'fixed', parent: 'd73-strip', x: 768, y: 28, w: 140, h: 24,
      props: { text: 'Brushed', fontFamily: 'Georgia', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
    { id: 'd73-b6', archetype: 'text', behavior: 'fixed', parent: 'd73-strip', x: 944, y: 28, w: 200, h: 24,
      props: { text: '••• Fixteria', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#0f172a' } }
  ]}]
};

// LAYOUT_074 — Bento Black-White (Bento_03)
const LAYOUT_074 = {
  meta: { name: 'Bento Black + White Halves', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [{ behavior: 'fixedHeight', height: 360, layout: 'free', children: [
    { id: 'd74-bg', archetype: 'container', behavior: 'wrap', x: 0, y: 0, w: 640, h: 360,
      props: { background: '#000', borderColor: 'transparent', borderRadius: 0 } },
    { id: 'd74-pl', archetype: 'container', behavior: 'fixed', x: 64, y: 156, w: 56, h: 56,
      props: { background: 'transparent', borderColor: '#3F3F46', borderRadius: 999 } },
    { id: 'd74-pl-l', archetype: 'text', behavior: 'fixed', parent: 'd74-pl', x: 0, y: 16, w: 56, h: 24,
      props: { text: '\u2190', fontFamily: 'Inter', fontSize: 18, color: '#3F3F46', textAlign: 'center' } },
    { id: 'd74-pr', archetype: 'container', behavior: 'fixed', x: 1144, y: 156, w: 56, h: 56,
      props: { background: '#fff', borderColor: 'transparent', borderRadius: 999 } },
    { id: 'd74-pr-l', archetype: 'text', behavior: 'fixed', parent: 'd74-pr', x: 0, y: 16, w: 56, h: 24,
      props: { text: '\u2192', fontFamily: 'Inter', fontSize: 18, color: '#0f172a', textAlign: 'center' } }
  ]}]
};

// LAYOUT_075 — What We Do multi (combined inspiration)
const LAYOUT_075 = {
  meta: { name: 'What We Do (Multi)', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    { behavior: 'fixedHeight', height: 200, layout: 'free', children: [
      { id: 'wd-h', archetype: 'text', behavior: 'scaleProportionally', x: 32, y: 56, w: 1216, h: 48,
        props: { text: 'What We Do', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
      { id: 'wd-sub', archetype: 'text', behavior: 'scaleProportionally', anchor: 'wd-h', x: 32, y: 12, w: 1216, h: 60,
        props: { text: 'This is the space to introduce your business and what it has to offer. Define the qualities and values that make it unique.', fontFamily: 'Inter', fontSize: 12, lineHeight: '1.55', color: '#52525B', textAlign: 'center' } }
    ]},
    { behavior: 'fixedHeight', height: 380, layout: 'free', children: [
      { id: 'wd-eye', archetype: 'text', behavior: 'fixed', x: 32, y: 32, w: 1216, h: 18,
        props: { text: 'Our Services', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
      { id: 'wd-w', archetype: 'container', behavior: 'wrap', anchor: 'wd-eye', x: 96, y: 24, w: 1088, h: 280,
        props: { background: '#EAE7DD', borderColor: 'transparent', borderRadius: 0 } },
      { id: 'wd-w-l', archetype: 'text', behavior: 'fixed', parent: 'wd-w', x: 460, y: 124, w: 200, h: 32,
        props: { text: 'Widget', fontFamily: 'Inter', fontSize: 22, color: '#A8A29E', textAlign: 'center' } }
    ]},
    { behavior: 'fixedHeight', height: 260, layout: 'free', children: [
      { id: 'wd-eye2', archetype: 'text', behavior: 'fixed', x: 32, y: 32, w: 1216, h: 18,
        props: { text: 'Our Benefits', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
      { id: 'wd-b1t', archetype: 'text', behavior: 'fixed', x: 280, y: 80, w: 200, h: 18,
        props: { text: 'Benefit 01', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
      { id: 'wd-b1b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'wd-b1t', x: 280, y: 8, w: 280, h: 60,
        props: { text: 'This is the space to provide a brief overview of the offering.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } },
      { id: 'wd-b2t', archetype: 'text', behavior: 'fixed', x: 720, y: 80, w: 200, h: 18,
        props: { text: 'Benefit 02', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
      { id: 'wd-b2b', archetype: 'text', behavior: 'scaleProportionally', anchor: 'wd-b2t', x: 720, y: 8, w: 280, h: 60,
        props: { text: 'This is the space to provide a brief overview of the offering.', fontFamily: 'Inter', fontSize: 11, color: '#52525B' } }
    ]}
  ]
};


// ─────────────────────────────────────────────────────────────────────────
// Editorial / Brand set · LAYOUT_E01 – LAYOUT_E05 (multi-section pages with
// asym sidebar grids, deep nested containers, and full hero→footer flow).
// ─────────────────────────────────────────────────────────────────────────

const LAYOUT_E01 = {
  meta: {
    name: 'Escapes — Guest Houses Editorial',
    category: 'editorial',
    refWidth: 1280,
    mode: 'mesh',
    initialCanvasWidth: 1280
  },
  sections: [
    {
      behavior: 'fixedHeight',
      height: 720,
      layout: 'free',
      children: [
        { id: 'menu-btn', archetype: 'container', behavior: 'fixed',
          x: 1136, y: 56, w: 44, h: 44,
          props: { background: '#18181B', borderColor: '#18181B', borderRadius: 22 } },
        { id: 'hero-headline', archetype: 'text', behavior: 'scaleProportionally',
          x: 320, y: 88, w: 880, h: 220,
          props: { text: 'Escapes', fontFamily: 'IBM Plex Serif', fontSize: 200, fontWeight: '500', lineHeight: '1.05', letterSpacing: '-0.04em', color: '#0F172A', textAlign: 'right' } },
        { id: 'hero-tag', archetype: 'text', behavior: 'fixed', anchor: 'hero-headline',
          x: 1024, y: 8, w: 176, h: 22,
          props: { text: 'Guest houses', fontFamily: 'IBM Plex Serif', fontSize: 15, fontWeight: '400', color: '#52525B', textAlign: 'right' } },
        { id: 'floorplan-link', archetype: 'text', behavior: 'fixed', anchor: 'hero-tag',
          x: -928, y: 80, w: 200, h: 22,
          props: { text: 'Floorplan  \u2192', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', color: '#18181B' } },
        { id: 'hero-image', archetype: 'image', behavior: 'scaleProportionally', anchor: 'floorplan-link',
          x: -8, y: 24, w: 232, h: 232,
          props: { objectPosition: 'center 40%' } },
        { id: 'hero-caption', archetype: 'text', behavior: 'scaleProportionally', anchor: 'hero-image',
          x: 200, y: 16, w: 240, h: 80,
          props: { text: 'Handpicked,\nExclusive &\nUnique Houses.', fontFamily: 'IBM Plex Serif', fontSize: 17, fontWeight: '400', lineHeight: '1.4', color: '#18181B' } },
        { id: 'exp-title', archetype: 'text', behavior: 'fixed',
          x: 768, y: 412, w: 320, h: 24,
          props: { text: 'Exclusive Experiences', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#18181B' } },
        { id: 'exp-body', archetype: 'text', behavior: 'scaleProportionally', anchor: 'exp-title',
          x: 768, y: 12, w: 320, h: 96,
          props: { text: 'Ut enim ad minim veniam, quis si nostrud exercitation ullamco nisi ut aliquip ex ea commodo consequat.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.65', color: '#71717A' } }
      ]
    },
    {
      behavior: 'auto',
      height: 480,
      layout: 'asym',
      children: [
        { id: 'asym-eyebrow', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 96, y: 80, w: 0, h: 0,
          props: { text: 'Founded \u00B7 2014', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#71717A' } },
        { id: 'asym-loc', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'asym-eyebrow',
          x: 96, y: 16, w: 0, h: 0,
          props: { text: 'Reykjav\u00EDk \u00B7\nLisbon \u00B7\nKyoto', fontFamily: 'IBM Plex Serif', fontSize: 18, fontWeight: '400', lineHeight: '1.5', color: '#27272A' } },

        { id: 'manifesto-eyebrow', archetype: 'text', behavior: 'wrap', cell: 1,
          x: 24, y: 80, w: 0, h: 0,
          props: { text: 'A QUIETER WAY TO TRAVEL', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#71717A' } },
        { id: 'manifesto', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'manifesto-eyebrow',
          x: 24, y: 24, w: 0, h: 0,
          props: { text: 'We work with hosts who treat their houses as drafts of essays \u2014 every wall, every window, every weathered handle is an argument for slowing down. There are no apps to download and nothing to optimize.', fontFamily: 'IBM Plex Serif', fontSize: 28, fontWeight: '400', lineHeight: '1.45', letterSpacing: '-0.005em', color: '#18181B' } },
        { id: 'manifesto-sub', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'manifesto',
          x: 24, y: 36, w: 0, h: 0,
          props: { text: 'Eighteen houses. Six countries. One quiet thesis about what a holiday is for.', fontFamily: 'Inter', fontSize: 15, fontWeight: '400', lineHeight: '1.65', color: '#52525B' } }
      ]
    },
    {
      behavior: 'fixedHeight',
      height: 480,
      layout: 'free',
      children: [
        { id: 'gallery-strip', archetype: 'image', behavior: 'fixedHeight',
          x: 0, y: 80, w: 1280, h: 360,
          props: { objectPosition: 'center 60%' } }
      ]
    },
    {
      behavior: 'auto',
      height: 600,
      layout: '3col',
      children: [
        { id: 'h-col0-title', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 24, y: 80, w: 0, h: 0,
          props: { text: 'Eighteen houses, drawn carefully', fontFamily: 'IBM Plex Serif', fontSize: 28, fontWeight: '400', lineHeight: '1.2', letterSpacing: '-0.01em', color: '#18181B' } },
        { id: 'h-col0-body', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'h-col0-title',
          x: 24, y: 24, w: 0, h: 0,
          props: { text: 'Each property is photographed once a season and visited twice a year. Nothing is staged for the camera.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.65', color: '#52525B' } },

        { id: 'house-1', archetype: 'container', behavior: 'wrap', cell: 1,
          x: 0, y: 80, w: 384, h: 440,
          props: { background: '#FAFAF9', borderColor: '#E7E5E4', borderRadius: 4 } },
        { id: 'house-1-img', archetype: 'image', behavior: 'stretch', parent: 'house-1',
          x: 0, y: 0, w: 384, h: 320,
          props: { objectPosition: 'center' } },
        { id: 'h1-title', archetype: 'text', behavior: 'wrap', parent: 'house-1',
          x: 24, y: 344, w: 336, h: 24,
          props: { text: 'House no. 07 \u2014 Sn\u00E6fellsnes', fontFamily: 'IBM Plex Serif', fontSize: 17, fontWeight: '400', color: '#18181B', letterSpacing: '-0.005em' } },
        { id: 'h1-meta', archetype: 'text', behavior: 'wrap', parent: 'house-1', anchor: 'h1-title',
          x: 24, y: 8, w: 336, h: 36,
          props: { text: 'Sleeps four \u00B7 2 nights minimum \u00B7 Reading library on the second floor', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.55', color: '#78716C' } },

        { id: 'house-2', archetype: 'container', behavior: 'wrap', cell: 2,
          x: 0, y: 80, w: 384, h: 440,
          props: { background: '#FAFAF9', borderColor: '#E7E5E4', borderRadius: 4 } },
        { id: 'house-2-img', archetype: 'image', behavior: 'stretch', parent: 'house-2',
          x: 0, y: 0, w: 384, h: 320,
          props: { objectPosition: 'center' } },
        { id: 'h2-title', archetype: 'text', behavior: 'wrap', parent: 'house-2',
          x: 24, y: 344, w: 336, h: 24,
          props: { text: 'House no. 11 \u2014 Ericeira', fontFamily: 'IBM Plex Serif', fontSize: 17, fontWeight: '400', color: '#18181B', letterSpacing: '-0.005em' } },
        { id: 'h2-meta', archetype: 'text', behavior: 'wrap', parent: 'house-2', anchor: 'h2-title',
          x: 24, y: 8, w: 336, h: 36,
          props: { text: 'Sleeps six \u00B7 3 nights minimum \u00B7 Outdoor kitchen, fig tree in the courtyard', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.55', color: '#78716C' } }
      ]
    },
    {
      behavior: 'auto',
      height: 320,
      layout: 'free',
      children: [
        { id: 'cta-eyebrow', archetype: 'text', behavior: 'fixed',
          x: 96, y: 96, w: 240, h: 18,
          props: { text: 'BOOKING NOW \u00B7 2026', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#71717A' } },
        { id: 'cta-headline', archetype: 'text', behavior: 'scaleProportionally', anchor: 'cta-eyebrow',
          x: 96, y: 20, w: 880, h: 64,
          props: { text: 'Stay somewhere quieter this winter.', fontFamily: 'IBM Plex Serif', fontSize: 44, fontWeight: '400', lineHeight: '1.15', letterSpacing: '-0.015em', color: '#18181B' } },
        { id: 'cta-btn', archetype: 'button', behavior: 'fixed', anchor: 'cta-headline',
          x: 96, y: 36, w: 192, h: 48,
          props: { label: 'Browse the houses  \u2192', variant: 'primary', radius: 24, paddingX: 22, paddingY: 14 } }
      ]
    },
    {
      behavior: 'auto',
      height: 280,
      layout: '4col',
      children: [
        { id: 'ft-mark', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 32, y: 64, w: 0, h: 0,
          props: { text: 'Escapes', fontFamily: 'IBM Plex Serif', fontSize: 20, fontWeight: '500', color: '#18181B', letterSpacing: '-0.01em' } },
        { id: 'ft-blurb', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 32, y: 100, w: 0, h: 0,
          props: { text: 'Guest houses for travellers who already know what they want.', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.6', color: '#78716C' } },
        { id: 'ft-copy', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 32, y: 192, w: 0, h: 0,
          props: { text: '\u00A9 Escapes Atelier, 2026', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#A8A29E' } },

        { id: 'fc1-h', archetype: 'text', behavior: 'wrap', cell: 1,
          x: 32, y: 64, w: 0, h: 0,
          props: { text: 'Houses', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#18181B' } },
        { id: 'fc1-1', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'fc1-h',
          x: 32, y: 24, w: 0, h: 0,
          props: { text: 'Iceland', fontFamily: 'IBM Plex Serif', fontSize: 15, fontWeight: '400', color: '#44403C' } },
        { id: 'fc1-2', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'fc1-1',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Portugal', fontFamily: 'IBM Plex Serif', fontSize: 15, fontWeight: '400', color: '#44403C' } },
        { id: 'fc1-3', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'fc1-2',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Japan', fontFamily: 'IBM Plex Serif', fontSize: 15, fontWeight: '400', color: '#44403C' } },

        { id: 'fc2-h', archetype: 'text', behavior: 'wrap', cell: 2,
          x: 32, y: 64, w: 0, h: 0,
          props: { text: 'Studio', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#18181B' } },
        { id: 'fc2-1', archetype: 'text', behavior: 'wrap', cell: 2, anchor: 'fc2-h',
          x: 32, y: 24, w: 0, h: 0,
          props: { text: 'Our story', fontFamily: 'IBM Plex Serif', fontSize: 15, fontWeight: '400', color: '#44403C' } },
        { id: 'fc2-2', archetype: 'text', behavior: 'wrap', cell: 2, anchor: 'fc2-1',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Hosts', fontFamily: 'IBM Plex Serif', fontSize: 15, fontWeight: '400', color: '#44403C' } },
        { id: 'fc2-3', archetype: 'text', behavior: 'wrap', cell: 2, anchor: 'fc2-2',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Journal', fontFamily: 'IBM Plex Serif', fontSize: 15, fontWeight: '400', color: '#44403C' } },

        { id: 'fc3-h', archetype: 'text', behavior: 'wrap', cell: 3,
          x: 32, y: 64, w: 0, h: 0,
          props: { text: 'Contact', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#18181B' } },
        { id: 'fc3-1', archetype: 'text', behavior: 'wrap', cell: 3, anchor: 'fc3-h',
          x: 32, y: 24, w: 0, h: 0,
          props: { text: 'hello@escapes.studio', fontFamily: 'IBM Plex Serif', fontSize: 15, fontWeight: '400', color: '#44403C' } },
        { id: 'fc3-2', archetype: 'text', behavior: 'wrap', cell: 3, anchor: 'fc3-1',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Press inquiries', fontFamily: 'IBM Plex Serif', fontSize: 15, fontWeight: '400', color: '#44403C' } },
        { id: 'fc3-3', archetype: 'text', behavior: 'wrap', cell: 3, anchor: 'fc3-2',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Become a host', fontFamily: 'IBM Plex Serif', fontSize: 15, fontWeight: '400', color: '#44403C' } }
      ]
    }
  ]
};

const LAYOUT_E02 = {
  meta: {
    name: 'Compline \u2014 Compensation SaaS',
    category: 'marketing',
    refWidth: 1280,
    mode: 'mesh',
    initialCanvasWidth: 1280
  },
  sections: [
    {
      behavior: 'fixedHeight',
      height: 80,
      layout: 'free',
      children: [
        { id: 'nav-mark', archetype: 'text', behavior: 'fixed',
          x: 96, y: 32, w: 140, h: 22,
          props: { text: 'Compline', fontFamily: 'Inter', fontSize: 17, fontWeight: '500', letterSpacing: '-0.01em', color: '#1C1917' } },
        { id: 'nav-l1', archetype: 'text', behavior: 'fixed',
          x: 560, y: 34, w: 80, h: 18,
          props: { text: 'Platform', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#44403C' } },
        { id: 'nav-l2', archetype: 'text', behavior: 'fixed',
          x: 660, y: 34, w: 80, h: 18,
          props: { text: 'Customers', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#44403C' } },
        { id: 'nav-l3', archetype: 'text', behavior: 'fixed',
          x: 776, y: 34, w: 80, h: 18,
          props: { text: 'Pricing', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#44403C' } },
        { id: 'nav-signin', archetype: 'button', behavior: 'fixed',
          x: 1024, y: 22, w: 88, h: 36,
          props: { label: 'Sign in', variant: 'ghost', radius: 8, paddingX: 14, paddingY: 8 } },
        { id: 'nav-demo', archetype: 'button', behavior: 'fixed',
          x: 1120, y: 22, w: 96, h: 36,
          props: { label: 'Book demo', variant: 'primary', radius: 8, paddingX: 14, paddingY: 8 } }
      ]
    },
    {
      behavior: 'fixedHeight',
      height: 720,
      layout: 'free',
      children: [
        { id: 'left-eyebrow', archetype: 'text', behavior: 'wrap',
          x: 96, y: 88, w: 200, h: 60,
          props: { text: 'Take the guesswork out of\ncompensation planning with our\nintuitive platform', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.55', color: '#1C1917' } },
        { id: 'main-headline', archetype: 'text', behavior: 'wrap',
          x: 416, y: 88, w: 768, h: 280,
          props: { text: 'Make data-driven decisions with real-time insights and ensure every reward aligns with your business objectives.', fontFamily: 'Inter', fontSize: 52, fontWeight: '500', lineHeight: '1.1', letterSpacing: '-0.025em', color: '#1C1917' } },
        { id: 'main-sub', archetype: 'text', behavior: 'wrap', anchor: 'main-headline',
          x: 416, y: 28, w: 720, h: 60,
          props: { text: 'Gone are the days of complex spreadsheets and manual processes. Simplify compensation planning with a single platform that puts you in control of every decision.', fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.7', color: '#78716C' } },
        { id: 'stat-1', archetype: 'text', behavior: 'fixed', anchor: 'main-sub',
          x: 416, y: 56, w: 140, h: 60,
          props: { text: '4.9', fontFamily: 'Inter', fontSize: 48, fontWeight: '500', lineHeight: '1', letterSpacing: '-0.025em', color: '#1C1917' } },
        { id: 'stat-1-l', archetype: 'text', behavior: 'fixed', anchor: 'stat-1',
          x: 416, y: 16, w: 140, h: 18,
          props: { text: 'Trustpilot', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#78716C' } },
        { id: 'stat-2', archetype: 'text', behavior: 'fixed', anchor: 'main-sub',
          x: 568, y: 56, w: 160, h: 60,
          props: { text: '>5M', fontFamily: 'Inter', fontSize: 48, fontWeight: '500', lineHeight: '1', letterSpacing: '-0.025em', color: '#1C1917' } },
        { id: 'stat-2-l', archetype: 'text', behavior: 'fixed', anchor: 'stat-2',
          x: 568, y: 16, w: 160, h: 18,
          props: { text: 'Total Revenue', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#78716C' } },
        { id: 'stat-3', archetype: 'text', behavior: 'fixed', anchor: 'main-sub',
          x: 744, y: 56, w: 200, h: 60,
          props: { text: '1200+', fontFamily: 'Inter', fontSize: 48, fontWeight: '500', lineHeight: '1', letterSpacing: '-0.025em', color: '#1C1917' } },
        { id: 'stat-3-l', archetype: 'text', behavior: 'fixed', anchor: 'stat-3',
          x: 744, y: 16, w: 200, h: 18,
          props: { text: 'Customers shipped', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#78716C' } },
        { id: 'logo-divider', archetype: 'container', behavior: 'fixedHeight',
          x: 96, y: 600, w: 1088, h: 1,
          props: { background: '#E7E5E4', borderColor: '#E7E5E4', borderRadius: 0 } },
        { id: 'logo-1', archetype: 'text', behavior: 'fixed', anchor: 'logo-divider',
          x: 96, y: 32, w: 140, h: 22,
          props: { text: 'waves', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#A8A29E' } },
        { id: 'logo-2', archetype: 'text', behavior: 'fixed', anchor: 'logo-divider',
          x: 296, y: 32, w: 140, h: 22,
          props: { text: 'RotaShow', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#A8A29E' } },
        { id: 'logo-3', archetype: 'text', behavior: 'fixed', anchor: 'logo-divider',
          x: 496, y: 32, w: 140, h: 22,
          props: { text: 'goldlines', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#A8A29E' } },
        { id: 'logo-4', archetype: 'text', behavior: 'fixed', anchor: 'logo-divider',
          x: 696, y: 32, w: 140, h: 22,
          props: { text: 'travelers', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#A8A29E' } },
        { id: 'logo-5', archetype: 'text', behavior: 'fixed', anchor: 'logo-divider',
          x: 896, y: 32, w: 140, h: 22,
          props: { text: 'Northwind', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#A8A29E' } }
      ]
    },
    {
      behavior: 'auto',
      height: 600,
      layout: '3col',
      children: [
        { id: 'feat-eyebrow', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 96, y: 96, w: 0, h: 0,
          props: { text: 'WHAT YOU GET', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#78716C' } },
        { id: 'feat-title', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'feat-eyebrow',
          x: 96, y: 20, w: 0, h: 0,
          props: { text: 'Three modules.\nOne source of truth.', fontFamily: 'Inter', fontSize: 32, fontWeight: '500', lineHeight: '1.15', letterSpacing: '-0.02em', color: '#1C1917' } },

        { id: 'mod-1', archetype: 'container', behavior: 'wrap', cell: 1,
          x: 0, y: 96, w: 384, h: 360,
          props: { background: '#FAFAF9', borderColor: '#E7E5E4', borderRadius: 12 } },
        { id: 'm1-num', archetype: 'text', behavior: 'wrap', parent: 'mod-1',
          x: 32, y: 32, w: 80, h: 22,
          props: { text: '01', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.1em', color: '#A8A29E' } },
        { id: 'm1-title', archetype: 'text', behavior: 'wrap', parent: 'mod-1',
          x: 32, y: 88, w: 320, h: 32,
          props: { text: 'Bands & frameworks', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', letterSpacing: '-0.01em', color: '#1C1917' } },
        { id: 'm1-body', archetype: 'text', behavior: 'wrap', parent: 'mod-1', anchor: 'm1-title',
          x: 32, y: 16, w: 320, h: 100,
          props: { text: 'Build leveling guides, salary bands, and equity ladders that the rest of the org actually understands and references.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.65', color: '#57534E' } },

        { id: 'mod-2', archetype: 'container', behavior: 'wrap', cell: 2,
          x: 0, y: 96, w: 384, h: 360,
          props: { background: '#FAFAF9', borderColor: '#E7E5E4', borderRadius: 12 } },
        { id: 'm2-num', archetype: 'text', behavior: 'wrap', parent: 'mod-2',
          x: 32, y: 32, w: 80, h: 22,
          props: { text: '02', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.1em', color: '#A8A29E' } },
        { id: 'm2-title', archetype: 'text', behavior: 'wrap', parent: 'mod-2',
          x: 32, y: 88, w: 320, h: 32,
          props: { text: 'Cycles', fontFamily: 'Inter', fontSize: 22, fontWeight: '500', letterSpacing: '-0.01em', color: '#1C1917' } },
        { id: 'm2-body', archetype: 'text', behavior: 'wrap', parent: 'mod-2', anchor: 'm2-title',
          x: 32, y: 16, w: 320, h: 100,
          props: { text: 'Run merit, promo, and equity refreshes from one workspace. Approvals route to the right people automatically.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.65', color: '#57534E' } }
      ]
    },
    {
      behavior: 'auto',
      height: 320,
      layout: '4col',
      children: [
        { id: 'cf0-h', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 32, y: 80, w: 0, h: 0,
          props: { text: 'Compline', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', color: '#1C1917' } },
        { id: 'cf0-blurb', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'cf0-h',
          x: 32, y: 16, w: 0, h: 0,
          props: { text: 'The compensation planning platform that grows up with your company.', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.6', color: '#78716C' } },

        { id: 'cf1-h', archetype: 'text', behavior: 'wrap', cell: 1,
          x: 32, y: 80, w: 0, h: 0,
          props: { text: 'Product', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#1C1917' } },
        { id: 'cf1-1', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'cf1-h',
          x: 32, y: 24, w: 0, h: 0,
          props: { text: 'Bands', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#57534E' } },
        { id: 'cf1-2', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'cf1-1',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Cycles', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#57534E' } },
        { id: 'cf1-3', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'cf1-2',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Reporting', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#57534E' } },

        { id: 'cf2-h', archetype: 'text', behavior: 'wrap', cell: 2,
          x: 32, y: 80, w: 0, h: 0,
          props: { text: 'Company', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#1C1917' } },
        { id: 'cf2-1', archetype: 'text', behavior: 'wrap', cell: 2, anchor: 'cf2-h',
          x: 32, y: 24, w: 0, h: 0,
          props: { text: 'About', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#57534E' } },
        { id: 'cf2-2', archetype: 'text', behavior: 'wrap', cell: 2, anchor: 'cf2-1',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Customers', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#57534E' } },
        { id: 'cf2-3', archetype: 'text', behavior: 'wrap', cell: 2, anchor: 'cf2-2',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Careers', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#57534E' } },

        { id: 'cf3-h', archetype: 'text', behavior: 'wrap', cell: 3,
          x: 32, y: 80, w: 0, h: 0,
          props: { text: 'Trust', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#1C1917' } },
        { id: 'cf3-1', archetype: 'text', behavior: 'wrap', cell: 3, anchor: 'cf3-h',
          x: 32, y: 24, w: 0, h: 0,
          props: { text: 'Security', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#57534E' } },
        { id: 'cf3-2', archetype: 'text', behavior: 'wrap', cell: 3, anchor: 'cf3-1',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Privacy', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#57534E' } },
        { id: 'cf3-3', archetype: 'text', behavior: 'wrap', cell: 3, anchor: 'cf3-2',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Status', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#57534E' } }
      ]
    }
  ]
};

const LAYOUT_E03 = {
  meta: {
    name: 'Praktis \u2014 Digital Agency, Jakarta',
    category: 'portfolio',
    refWidth: 1280,
    mode: 'mesh',
    initialCanvasWidth: 1280
  },
  sections: [
    {
      behavior: 'fixedHeight',
      height: 88,
      layout: 'free',
      children: [
        { id: 'pn-mark', archetype: 'text', behavior: 'fixed',
          x: 96, y: 36, w: 140, h: 22,
          props: { text: 'Praktis \u00A9', fontFamily: 'Inter', fontSize: 16, fontWeight: '500', letterSpacing: '-0.01em', color: '#18181B' } },
        { id: 'pn-l1', archetype: 'text', behavior: 'fixed',
          x: 1024, y: 38, w: 60, h: 18,
          props: { text: 'Work', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#3F3F46' } },
        { id: 'pn-l2', archetype: 'text', behavior: 'fixed',
          x: 1092, y: 38, w: 60, h: 18,
          props: { text: 'About', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#3F3F46' } },
        { id: 'pn-l3', archetype: 'text', behavior: 'fixed',
          x: 1156, y: 38, w: 60, h: 18,
          props: { text: 'Contact', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#3F3F46' } }
      ]
    },
    {
      behavior: 'auto',
      height: 600,
      layout: 'free',
      children: [
        { id: 'agency-eyebrow', archetype: 'text', behavior: 'fixed',
          x: 96, y: 96, w: 200, h: 22,
          props: { text: 'Digital Agency based in', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#71717A' } },
        { id: 'agency-loc', archetype: 'text', behavior: 'fixed', anchor: 'agency-eyebrow',
          x: 96, y: 6, w: 200, h: 22,
          props: { text: 'Jakarta, ID', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#18181B' } },
        { id: 'agency-statement', archetype: 'text', behavior: 'wrap',
          x: 384, y: 96, w: 800, h: 240,
          props: { text: 'Explore our work, where creativity seamlessly meets purpose, pushing boundaries and transforming ideas into impactful experiences. We believe in crafting designs that not only captivate but also drive meaningful connections.', fontFamily: 'Inter', fontSize: 30, fontWeight: '400', lineHeight: '1.4', letterSpacing: '-0.015em', color: '#27272A' } },

        { id: 'card-92', archetype: 'container', behavior: 'wrap',
          x: 384, y: 376, w: 240, h: 280,
          props: { background: '#FFFFFF', borderColor: '#E4E4E7', borderRadius: 14 } },
        { id: 'c92-num', archetype: 'text', behavior: 'wrap', parent: 'card-92',
          x: 24, y: 28, w: 192, h: 80,
          props: { text: '92%', fontFamily: 'IBM Plex Serif', fontSize: 64, fontWeight: '400', lineHeight: '1', letterSpacing: '-0.03em', color: '#18181B' } },
        { id: 'c92-body', archetype: 'text', behavior: 'wrap', parent: 'card-92', anchor: 'c92-num',
          x: 24, y: 24, w: 192, h: 120,
          props: { text: 'Our agency has produced many products that have been live, showcasing our expertise in delivering high-quality.', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', lineHeight: '1.6', color: '#52525B' } },

        { id: 'card-64', archetype: 'container', behavior: 'wrap',
          x: 640, y: 376, w: 240, h: 280,
          props: { background: '#27272A', borderColor: '#27272A', borderRadius: 14 } },
        { id: 'c64-num', archetype: 'text', behavior: 'wrap', parent: 'card-64',
          x: 24, y: 60, w: 192, h: 80,
          props: { text: '64%', fontFamily: 'IBM Plex Serif', fontSize: 64, fontWeight: '400', lineHeight: '1', letterSpacing: '-0.03em', color: '#FAFAFA' } },
        { id: 'c64-body', archetype: 'text', behavior: 'wrap', parent: 'card-64', anchor: 'c64-num',
          x: 24, y: 24, w: 192, h: 140,
          props: { text: 'Most of the designers in our agency have high job opportunities, thanks to their exceptional skills and the agency\u2019s strong reputation.', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', lineHeight: '1.6', color: '#A1A1AA' } },

        { id: 'card-0', archetype: 'container', behavior: 'wrap',
          x: 896, y: 376, w: 240, h: 280,
          props: { background: '#27272A', borderColor: '#27272A', borderRadius: 14 } },
        { id: 'c0-num', archetype: 'text', behavior: 'wrap', parent: 'card-0',
          x: 24, y: 92, w: 192, h: 80,
          props: { text: '0%', fontFamily: 'IBM Plex Serif', fontSize: 64, fontWeight: '400', lineHeight: '1', letterSpacing: '-0.03em', color: '#FAFAFA' } },
        { id: 'c0-body', archetype: 'text', behavior: 'wrap', parent: 'card-0', anchor: 'c0-num',
          x: 24, y: 24, w: 192, h: 120,
          props: { text: 'Our agency never gets complaints and is dedicated to consistently satisfying clients with exceptional results.', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', lineHeight: '1.6', color: '#A1A1AA' } },

        { id: 'about-btn', archetype: 'button', behavior: 'fixed',
          x: 96, y: 568, w: 128, h: 44,
          props: { label: 'About Us  \u2192', variant: 'ghost', radius: 24, paddingX: 18, paddingY: 12 } }
      ]
    },
    {
      behavior: 'auto',
      height: 720,
      layout: 'free',
      children: [
        { id: 'work-eyebrow', archetype: 'text', behavior: 'fixed',
          x: 96, y: 96, w: 200, h: 22,
          props: { text: 'SELECTED WORK \u00B7 2024', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#71717A' } },
        { id: 'work-title', archetype: 'text', behavior: 'wrap', anchor: 'work-eyebrow',
          x: 96, y: 24, w: 720, h: 80,
          props: { text: 'Six projects that taught us something.', fontFamily: 'Inter', fontSize: 36, fontWeight: '500', lineHeight: '1.15', letterSpacing: '-0.02em', color: '#18181B' } },

        { id: 'proj-1', archetype: 'image', behavior: 'scaleProportionally', anchor: 'work-title',
          x: 0, y: 80, w: 528, h: 360,
          props: { objectPosition: 'center 35%' } },
        { id: 'proj-1-cap', archetype: 'text', behavior: 'fixed', anchor: 'proj-1',
          x: 96, y: 16, w: 320, h: 22,
          props: { text: 'Halo', fontFamily: 'Inter', fontSize: 15, fontWeight: '500', color: '#18181B' } },
        { id: 'proj-1-meta', archetype: 'text', behavior: 'fixed', anchor: 'proj-1-cap',
          x: 96, y: 4, w: 320, h: 18,
          props: { text: 'Brand \u00B7 Product \u00B7 2024', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#71717A' } },

        { id: 'proj-2', archetype: 'image', behavior: 'scaleProportionally', anchor: 'work-title',
          x: 624, y: 80, w: 560, h: 240,
          props: { objectPosition: 'center 50%' } },
        { id: 'proj-2-cap', archetype: 'text', behavior: 'fixed', anchor: 'proj-2',
          x: 624, y: 16, w: 320, h: 22,
          props: { text: 'Forma', fontFamily: 'Inter', fontSize: 15, fontWeight: '500', color: '#18181B' } },
        { id: 'proj-2-meta', archetype: 'text', behavior: 'fixed', anchor: 'proj-2-cap',
          x: 624, y: 4, w: 320, h: 18,
          props: { text: 'Identity \u00B7 Web \u00B7 2024', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#71717A' } }
      ]
    },
    {
      behavior: 'auto',
      height: 240,
      layout: '4col',
      children: [
        { id: 'pf-mark', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'Praktis \u00A9', fontFamily: 'Inter', fontSize: 15, fontWeight: '500', color: '#18181B' } },
        { id: 'pf-addr', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'pf-mark',
          x: 32, y: 16, w: 0, h: 0,
          props: { text: 'Jl. Senopati, Jakarta\nID 12190', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.6', color: '#71717A' } },
        { id: 'pc1-h', archetype: 'text', behavior: 'wrap', cell: 1,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'Studio', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#18181B' } },
        { id: 'pc1-1', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'pc1-h',
          x: 32, y: 24, w: 0, h: 0,
          props: { text: 'Work', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#3F3F46' } },
        { id: 'pc1-2', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'pc1-1',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'About', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#3F3F46' } },
        { id: 'pc1-3', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'pc1-2',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Journal', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#3F3F46' } },
        { id: 'pc2-h', archetype: 'text', behavior: 'wrap', cell: 2,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'Social', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#18181B' } },
        { id: 'pc2-1', archetype: 'text', behavior: 'wrap', cell: 2, anchor: 'pc2-h',
          x: 32, y: 24, w: 0, h: 0,
          props: { text: 'Instagram', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#3F3F46' } },
        { id: 'pc2-2', archetype: 'text', behavior: 'wrap', cell: 2, anchor: 'pc2-1',
          x: 32, y: 8, w: 0, h: 0,
          props: { text: 'Are.na', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#3F3F46' } },
        { id: 'pc3-h', archetype: 'text', behavior: 'wrap', cell: 3,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'Contact', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#18181B' } },
        { id: 'pc3-1', archetype: 'text', behavior: 'wrap', cell: 3, anchor: 'pc3-h',
          x: 32, y: 24, w: 0, h: 0,
          props: { text: 'studio@praktis.co', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#3F3F46' } }
      ]
    }
  ]
};

const LAYOUT_E04 = {
  meta: {
    name: 'Nest Seekers \u2014 Hybrid Brand Showcase',
    category: 'landing',
    refWidth: 1280,
    mode: 'mesh',
    initialCanvasWidth: 1280
  },
  sections: [
    {
      behavior: 'fixedHeight',
      height: 80,
      layout: 'free',
      children: [
        { id: 'ns-mark', archetype: 'text', behavior: 'fixed',
          x: 96, y: 32, w: 240, h: 22,
          props: { text: 'NEST SEEKERS INTERNATIONAL', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#18181B' } },
        { id: 'ns-menu', archetype: 'text', behavior: 'fixed',
          x: 1100, y: 32, w: 88, h: 22,
          props: { text: 'Menu  +', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#18181B' } }
      ]
    },
    {
      behavior: 'auto',
      height: 640,
      layout: 'asym',
      children: [
        { id: 'firm-headline', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 96, y: 88, w: 0, h: 0,
          props: { text: 'The firm\u2019s hybrid tech and brand enabled model has inspired a new wave of thinking in the industry.', fontFamily: 'Inter', fontSize: 28, fontWeight: '400', lineHeight: '1.3', letterSpacing: '-0.015em', color: '#18181B' } },
        { id: 'firm-sub', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'firm-headline',
          x: 96, y: 32, w: 0, h: 0,
          props: { text: 'Headquartered in New York and London and representing private clients across forty-six markets.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.65', color: '#71717A' } },

        { id: 'cell-pillar-1', archetype: 'container', behavior: 'wrap', cell: 1,
          x: 24, y: 88, w: 320, h: 240,
          props: { background: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)', borderRadius: 0 } },
        { id: 'p1-icon', archetype: 'container', behavior: 'fixed', parent: 'cell-pillar-1',
          x: 0, y: 0, w: 36, h: 24,
          props: { background: 'rgba(0,0,0,0)', borderColor: '#27272A', borderRadius: 999 } },
        { id: 'p1-title', archetype: 'text', behavior: 'wrap', parent: 'cell-pillar-1', anchor: 'p1-icon',
          x: 0, y: 24, w: 280, h: 22,
          props: { text: 'BIG MEDIA', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.16em', color: '#18181B' } },
        { id: 'p1-body', archetype: 'text', behavior: 'wrap', parent: 'cell-pillar-1', anchor: 'p1-title',
          x: 0, y: 16, w: 280, h: 96,
          props: { text: 'Nest Media is a stand-alone media company that produces and delivers direct global access to the intricate world of real estate via multiple networks and streaming platforms.', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.65', color: '#52525B' } },
        { id: 'p1-btn', archetype: 'button', behavior: 'fixed', parent: 'cell-pillar-1', anchor: 'p1-body',
          x: 0, y: 24, w: 96, h: 36,
          props: { label: 'Explore', variant: 'ghost', radius: 24, paddingX: 16, paddingY: 8 } },

        { id: 'cell-pillar-2', archetype: 'container', behavior: 'wrap', cell: 1,
          x: 360, y: 88, w: 320, h: 240,
          props: { background: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)', borderRadius: 0 } },
        { id: 'p2-icon', archetype: 'container', behavior: 'fixed', parent: 'cell-pillar-2',
          x: 0, y: 0, w: 36, h: 24,
          props: { background: 'rgba(0,0,0,0)', borderColor: '#27272A', borderRadius: 999 } },
        { id: 'p2-title', archetype: 'text', behavior: 'wrap', parent: 'cell-pillar-2', anchor: 'p2-icon',
          x: 0, y: 24, w: 280, h: 22,
          props: { text: 'PUBLICATIONS', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.16em', color: '#18181B' } },
        { id: 'p2-body', archetype: 'text', behavior: 'wrap', parent: 'cell-pillar-2', anchor: 'p2-title',
          x: 0, y: 16, w: 280, h: 96,
          props: { text: 'Our in-house creative agency produces branding and marketing assets to development projects and incredible properties. We publish our work seasonally.', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.65', color: '#52525B' } },
        { id: 'p2-btn', archetype: 'button', behavior: 'fixed', parent: 'cell-pillar-2', anchor: 'p2-body',
          x: 0, y: 24, w: 96, h: 36,
          props: { label: 'Explore', variant: 'ghost', radius: 24, paddingX: 16, paddingY: 8 } },

        { id: 'cell-pillar-3', archetype: 'container', behavior: 'wrap', cell: 1, anchor: 'cell-pillar-1',
          x: 24, y: 48, w: 320, h: 240,
          props: { background: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)', borderRadius: 0 } },
        { id: 'p3-icon', archetype: 'container', behavior: 'fixed', parent: 'cell-pillar-3',
          x: 0, y: 0, w: 36, h: 24,
          props: { background: 'rgba(0,0,0,0)', borderColor: '#27272A', borderRadius: 999 } },
        { id: 'p3-title', archetype: 'text', behavior: 'wrap', parent: 'cell-pillar-3', anchor: 'p3-icon',
          x: 0, y: 24, w: 280, h: 22,
          props: { text: 'GUIDES & REPORTS', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.16em', color: '#18181B' } },
        { id: 'p3-body', archetype: 'text', behavior: 'wrap', parent: 'cell-pillar-3', anchor: 'p3-title',
          x: 0, y: 16, w: 280, h: 96,
          props: { text: 'Explore our data center of carefully produced and selected guides, reports & analytics. Information and knowledge is key to making informed decisions.', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.65', color: '#52525B' } },
        { id: 'p3-btn', archetype: 'button', behavior: 'fixed', parent: 'cell-pillar-3', anchor: 'p3-body',
          x: 0, y: 24, w: 112, h: 36,
          props: { label: 'Read more', variant: 'ghost', radius: 24, paddingX: 16, paddingY: 8 } },

        { id: 'cell-pillar-4', archetype: 'container', behavior: 'wrap', cell: 1, anchor: 'cell-pillar-2',
          x: 360, y: 48, w: 320, h: 240,
          props: { background: 'rgba(0,0,0,0)', borderColor: 'rgba(0,0,0,0)', borderRadius: 0 } },
        { id: 'p4-icon', archetype: 'container', behavior: 'fixed', parent: 'cell-pillar-4',
          x: 0, y: 0, w: 36, h: 24,
          props: { background: 'rgba(0,0,0,0)', borderColor: '#27272A', borderRadius: 999 } },
        { id: 'p4-title', archetype: 'text', behavior: 'wrap', parent: 'cell-pillar-4', anchor: 'p4-icon',
          x: 0, y: 24, w: 280, h: 22,
          props: { text: 'MILLION DOLLAR HOUSE', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.16em', color: '#18181B' } },
        { id: 'p4-body', archetype: 'text', behavior: 'wrap', parent: 'cell-pillar-4', anchor: 'p4-title',
          x: 0, y: 16, w: 280, h: 96,
          props: { text: 'In the swanky, exclusive Hamptons in New York, the driven real estate agents of Nest Seekers chase multimillion-dollar deals.', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.65', color: '#52525B' } },
        { id: 'p4-watch', archetype: 'text', behavior: 'wrap', parent: 'cell-pillar-4', anchor: 'p4-body',
          x: 0, y: 16, w: 200, h: 18,
          props: { text: 'watch on Netflix', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#71717A' } },
        { id: 'p4-btn', archetype: 'button', behavior: 'fixed', parent: 'cell-pillar-4', anchor: 'p4-watch',
          x: 0, y: 12, w: 96, h: 36,
          props: { label: 'Watch now', variant: 'ghost', radius: 24, paddingX: 16, paddingY: 8 } }
      ]
    },
    {
      behavior: 'auto',
      height: 320,
      layout: 'free',
      children: [
        { id: 'closing-eyebrow', archetype: 'text', behavior: 'fixed',
          x: 96, y: 96, w: 240, h: 22,
          props: { text: 'PRESS & MEDIA INQUIRIES', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#71717A' } },
        { id: 'closing-headline', archetype: 'text', behavior: 'wrap', anchor: 'closing-eyebrow',
          x: 96, y: 24, w: 720, h: 80,
          props: { text: 'Tell us about the property.', fontFamily: 'Inter', fontSize: 32, fontWeight: '400', lineHeight: '1.2', letterSpacing: '-0.02em', color: '#18181B' } },
        { id: 'closing-btn', archetype: 'button', behavior: 'fixed', anchor: 'closing-headline',
          x: 96, y: 32, w: 144, h: 44,
          props: { label: 'Get in touch', variant: 'primary', radius: 24, paddingX: 22, paddingY: 12 } }
      ]
    },
    {
      behavior: 'auto',
      height: 200,
      layout: '4col',
      children: [
        { id: 'nf-mark', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'Nest Seekers \u00A9', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#18181B' } },
        { id: 'nf-addr', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'nf-mark',
          x: 32, y: 16, w: 0, h: 0,
          props: { text: '594 Broadway, New York', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#71717A' } },
        { id: 'nf-c1', archetype: 'text', behavior: 'wrap', cell: 1,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'New York \u00B7 London', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#3F3F46' } },
        { id: 'nf-c2', archetype: 'text', behavior: 'wrap', cell: 2,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'Listings \u00B7 Press \u00B7 Careers', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#3F3F46' } },
        { id: 'nf-c3', archetype: 'text', behavior: 'wrap', cell: 3,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'press@nestseekers.com', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#3F3F46' } }
      ]
    }
  ]
};

const LAYOUT_E05 = {
  meta: {
    name: 'Atelier Grid \u2014 Presentation Stress Test',
    category: 'stress',
    refWidth: 1280,
    mode: 'mesh',
    initialCanvasWidth: 1280
  },
  sections: [
    {
      behavior: 'fixedHeight',
      height: 600,
      layout: 'free',
      children: [
        { id: 'st-eyebrow', archetype: 'text', behavior: 'fixed',
          x: 96, y: 80, w: 240, h: 18,
          props: { text: 'PRESENTATION LAYOUT \u00B7 01', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#A1A1AA' } },
        { id: 'st-h1', archetype: 'text', behavior: 'wrap', anchor: 'st-eyebrow',
          x: 96, y: 32, w: 880, h: 80,
          props: { text: 'Design Concept', fontFamily: 'IBM Plex Serif', fontSize: 44, fontWeight: '400', lineHeight: '1.1', letterSpacing: '-0.02em', color: '#18181B' } },
        { id: 'st-h2', archetype: 'text', behavior: 'wrap', anchor: 'st-h1',
          x: 96, y: 32, w: 880, h: 60,
          props: { text: 'Brand Value', fontFamily: 'IBM Plex Serif', fontSize: 28, fontWeight: '400', lineHeight: '1.2', letterSpacing: '-0.015em', color: '#27272A' } },
        { id: 'st-quote', archetype: 'text', behavior: 'wrap', anchor: 'st-h2',
          x: 96, y: 40, w: 880, h: 96,
          props: { text: 'When you start building a product from scratch, it is important to have a clear purpose and goal \u2014 it makes the work that follows considerably easier.', fontFamily: 'IBM Plex Serif', fontSize: 22, fontWeight: '400', lineHeight: '1.45', color: '#3F3F46' } },
        { id: 'st-meta', archetype: 'text', behavior: 'fixed', anchor: 'st-quote',
          x: 96, y: 32, w: 200, h: 18,
          props: { text: 'Page 04 \u2014 Atelier Grid', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.05em', color: '#A1A1AA' } },
        { id: 'st-url', archetype: 'text', behavior: 'fixed', anchor: 'st-meta',
          x: 0, y: 6, w: 280, h: 18,
          props: { text: 'www.ateliergrid.studio', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.05em', color: '#A1A1AA' } }
      ]
    },
    {
      behavior: 'auto',
      height: 480,
      layout: 'asym',
      children: [
        { id: 'asym-byline', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 96, y: 80, w: 0, h: 0,
          props: { text: 'BY THE STUDIO', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#71717A' } },
        { id: 'asym-name', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'asym-byline',
          x: 96, y: 16, w: 0, h: 0,
          props: { text: 'Anya Guseva\nFebruary 2026', fontFamily: 'IBM Plex Serif', fontSize: 16, fontWeight: '400', lineHeight: '1.5', color: '#27272A' } },
        { id: 'asym-long', archetype: 'text', behavior: 'wrap', cell: 1,
          x: 24, y: 80, w: 0, h: 0,
          props: { text: 'A design system is not the deliverable. The deliverable is the felt experience of using something coherent \u2014 a hundred small frictions removed in advance, so that the work the user is actually here to do feels like the only work in the room. The grid disappears when the grid is honest. The same is true of a brand. The same is true of a sentence. The same is true of a product roadmap, when it is good. We start there: with the assumption that the audience cannot see the scaffolding, and that this is a feature, not a bug, because everything you make is read in a hurry by someone whose attention you have not yet earned. So the rule is: earn it on every page, then disappear.', fontFamily: 'IBM Plex Serif', fontSize: 17, fontWeight: '400', lineHeight: '1.65', color: '#27272A' } },
        { id: 'asym-cont', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'asym-long',
          x: 24, y: 32, w: 0, h: 0,
          props: { text: 'continued on page 05  \u2192', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', letterSpacing: '0.05em', color: '#71717A' } }
      ]
    },
    {
      behavior: 'fixedHeight',
      height: 360,
      layout: 'free',
      children: [
        { id: 'bleed-img', archetype: 'image', behavior: 'fixedHeight',
          x: 0, y: 0, w: 1280, h: 360,
          props: { objectPosition: 'center 45%' } },
        { id: 'bleed-cap', archetype: 'text', behavior: 'fixed',
          x: 96, y: 312, w: 320, h: 22,
          props: { text: 'Plate IV \u2014 Composition study, 2025', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.08em', color: '#FAFAFA' } }
      ]
    },
    {
      behavior: 'auto',
      height: 600,
      layout: '3col',
      children: [
        { id: 'mix-grid-eyebrow', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 24, y: 80, w: 0, h: 0,
          props: { text: 'Mixed grid \u00B7 Cell-mounted', fontFamily: 'Inter', fontSize: 11, fontWeight: '500', letterSpacing: '0.14em', color: '#71717A' } },
        { id: 'mix-grid-title', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'mix-grid-eyebrow',
          x: 24, y: 24, w: 0, h: 0,
          props: { text: 'Three notes on rhythm', fontFamily: 'IBM Plex Serif', fontSize: 26, fontWeight: '400', lineHeight: '1.2', color: '#18181B' } },
        { id: 'mix-grid-body', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'mix-grid-title',
          x: 24, y: 24, w: 0, h: 0,
          props: { text: 'Each note belongs to one cell. The cells re-sort across viewports. The text inside re-flows. The image strip above keeps its full-bleed posture. This is on purpose.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.7', color: '#52525B' } },

        { id: 'mix-card-1', archetype: 'container', behavior: 'wrap', cell: 1,
          x: 24, y: 80, w: 336, h: 440,
          props: { background: '#FAFAFA', borderColor: '#E4E4E7', borderRadius: 4 } },
        { id: 'mix-1-num', archetype: 'text', behavior: 'wrap', parent: 'mix-card-1',
          x: 28, y: 28, w: 280, h: 24,
          props: { text: '01', fontFamily: 'IBM Plex Serif', fontSize: 18, fontWeight: '400', color: '#A1A1AA' } },
        { id: 'mix-1-title', archetype: 'text', behavior: 'wrap', parent: 'mix-card-1', anchor: 'mix-1-num',
          x: 28, y: 16, w: 280, h: 32,
          props: { text: 'Containers nest', fontFamily: 'IBM Plex Serif', fontSize: 22, fontWeight: '400', letterSpacing: '-0.005em', color: '#18181B' } },
        { id: 'mix-1-inner', archetype: 'container', behavior: 'wrap', parent: 'mix-card-1', anchor: 'mix-1-title',
          x: 28, y: 24, w: 280, h: 200,
          props: { background: '#FFFFFF', borderColor: '#E4E4E7', borderRadius: 4 } },
        { id: 'mix-1-inner-label', archetype: 'text', behavior: 'wrap', parent: 'mix-1-inner',
          x: 20, y: 20, w: 240, h: 22,
          props: { text: 'Three levels deep', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.06em', color: '#52525B' } },
        { id: 'mix-1-inner-body', archetype: 'text', behavior: 'wrap', parent: 'mix-1-inner', anchor: 'mix-1-inner-label',
          x: 20, y: 16, w: 240, h: 120,
          props: { text: 'Container \u2192 container \u2192 text. The outermost holds the rhythm; the middle holds the local rules; the innermost just speaks.', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.65', color: '#71717A' } },

        { id: 'mix-card-2', archetype: 'container', behavior: 'wrap', cell: 2,
          x: 24, y: 80, w: 336, h: 200,
          props: { background: '#FAFAFA', borderColor: '#E4E4E7', borderRadius: 4 } },
        { id: 'mix-2-num', archetype: 'text', behavior: 'wrap', parent: 'mix-card-2',
          x: 28, y: 28, w: 280, h: 22,
          props: { text: '02', fontFamily: 'IBM Plex Serif', fontSize: 18, fontWeight: '400', color: '#A1A1AA' } },
        { id: 'mix-2-title', archetype: 'text', behavior: 'wrap', parent: 'mix-card-2', anchor: 'mix-2-num',
          x: 28, y: 12, w: 280, h: 32,
          props: { text: 'Hug text re-flows', fontFamily: 'IBM Plex Serif', fontSize: 22, fontWeight: '400', color: '#18181B' } },
        { id: 'mix-2-body', archetype: 'text', behavior: 'wrap', parent: 'mix-card-2', anchor: 'mix-2-title',
          x: 28, y: 16, w: 280, h: 80,
          props: { text: 'When the column gets narrow, the text wraps further and the card grows downward \u2014 the section is auto-height to receive it.', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.65', color: '#71717A' } },

        { id: 'mix-card-3', archetype: 'container', behavior: 'wrap', cell: 2, anchor: 'mix-card-2',
          x: 24, y: 24, w: 336, h: 216,
          props: { background: '#18181B', borderColor: '#18181B', borderRadius: 4 } },
        { id: 'mix-3-num', archetype: 'text', behavior: 'wrap', parent: 'mix-card-3',
          x: 28, y: 28, w: 280, h: 22,
          props: { text: '03', fontFamily: 'IBM Plex Serif', fontSize: 18, fontWeight: '400', color: '#71717A' } },
        { id: 'mix-3-title', archetype: 'text', behavior: 'wrap', parent: 'mix-card-3', anchor: 'mix-3-num',
          x: 28, y: 12, w: 280, h: 32,
          props: { text: 'Deep anchor chain', fontFamily: 'IBM Plex Serif', fontSize: 22, fontWeight: '400', color: '#FAFAFA' } },
        { id: 'mix-3-l1', archetype: 'text', behavior: 'wrap', parent: 'mix-card-3', anchor: 'mix-3-title',
          x: 28, y: 16, w: 280, h: 22,
          props: { text: '\u21B3 first link', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#A1A1AA' } },
        { id: 'mix-3-l2', archetype: 'text', behavior: 'wrap', parent: 'mix-card-3', anchor: 'mix-3-l1',
          x: 28, y: 8, w: 280, h: 22,
          props: { text: '\u21B3 second link', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#A1A1AA' } },
        { id: 'mix-3-l3', archetype: 'text', behavior: 'wrap', parent: 'mix-card-3', anchor: 'mix-3-l2',
          x: 28, y: 8, w: 280, h: 22,
          props: { text: '\u21B3 third link, holds across viewports', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#FAFAFA' } }
      ]
    },
    {
      behavior: 'auto',
      height: 200,
      layout: '4col',
      children: [
        { id: 'ag-mark', archetype: 'text', behavior: 'wrap', cell: 0,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'Atelier Grid', fontFamily: 'IBM Plex Serif', fontSize: 16, fontWeight: '500', color: '#18181B' } },
        { id: 'ag-blurb', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'ag-mark',
          x: 32, y: 16, w: 0, h: 0,
          props: { text: 'Presentation systems\nand editorial templates', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', lineHeight: '1.6', color: '#71717A' } },
        { id: 'ag-c1', archetype: 'text', behavior: 'wrap', cell: 1,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'Templates \u00B7 Articles \u00B7 Studio', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#3F3F46' } },
        { id: 'ag-c2', archetype: 'text', behavior: 'wrap', cell: 2,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'Are.na \u00B7 Instagram \u00B7 X', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#3F3F46' } },
        { id: 'ag-c3', archetype: 'text', behavior: 'wrap', cell: 3,
          x: 32, y: 56, w: 0, h: 0,
          props: { text: 'studio@ateliergrid.co', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#3F3F46' } }
      ]
    }
  ]
};


export const BUILTIN_LAYOUTS = [
  ...REFERENCE_LAYOUTS,
  LAYOUT_E01,
  LAYOUT_E02,
  LAYOUT_E03,
  LAYOUT_E04,
  LAYOUT_E05,
  LAYOUT_01,
  LAYOUT_02,
  LAYOUT_03,
  LAYOUT_04,
  LAYOUT_05,
  LAYOUT_06,
  LAYOUT_07,
  LAYOUT_08,
  LAYOUT_09,
  LAYOUT_10,
  LAYOUT_001,
  LAYOUT_002,
  LAYOUT_003,
  LAYOUT_004,
  LAYOUT_005,
  LAYOUT_006,
  LAYOUT_007,
  LAYOUT_008,
  LAYOUT_009,
  LAYOUT_010,
  LAYOUT_011,
  LAYOUT_012,
  LAYOUT_013,
  LAYOUT_014,
  LAYOUT_015,
  LAYOUT_016,
  LAYOUT_017,
  LAYOUT_018,
  LAYOUT_019,
  LAYOUT_020,
  LAYOUT_021,
  LAYOUT_022,
  LAYOUT_023,
  LAYOUT_024,
  LAYOUT_025
  // BATCH 2 (LAYOUT_026..075) is intentionally NOT exported — those layouts
  // had positioning issues at narrow canvases. Definitions remain in this
  // file so individual layouts can be re-enabled by adding them back here.
];
