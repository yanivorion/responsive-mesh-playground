// AUTO-GENERATED · /Users/yanivo/Responsive Mesh /src/builtinLayoutsReference.js
//
// Reference-inspired layout batch (R series).
//
// Each LAYOUT_R* below was hand-crafted from a real-world template
// screenshot (premium Webflow/Framer/Figma references) to exercise the V14
// runtime: `wrap` behavior on body copy, anchor chains inside containers
// and grid cells, asym sidebar + main grids, and z-index layering for hero
// overlays.
//
// Add new entries here and re-export them in builtinLayouts.js so they
// land at the top of the picker.

/* eslint-disable */

// ─────────────────────────────────────────────────────────────────────────
// R01 · Kaely Portfolio (inspired by Exvia / Kaely Liora)
// huge name overlay on blurred portrait + asym about with stats + work strip
// ─────────────────────────────────────────────────────────────────────────
const LAYOUT_R01 = {
  meta: { name: 'Kaely Portfolio', category: 'portfolio', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'fixedHeight', height: 720, layout: 'free',
      children: [
        { id: 'r1-logo', archetype: 'text', behavior: 'fixed', x: 56, y: 28, w: 32, h: 24, z: 4,
          props: { text: 'JC', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#ffffff' } },
        { id: 'r1-nav', archetype: 'text', behavior: 'fixed', x: 380, y: 32, w: 520, h: 16, z: 4,
          props: { text: 'ABOUT       SERVICES       PORTFOLIO       TESTIMONIALS', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.18em', color: '#ffffff', textAlign: 'center' } },
        { id: 'r1-cta', archetype: 'button', behavior: 'fixed', x: 1136, y: 22, w: 96, h: 32, z: 4,
          props: { label: 'CONTACT', variant: 'primary', radius: 4, paddingX: 12, paddingY: 8 } },
        { id: 'r1-side-l1', archetype: 'text', behavior: 'fixed', x: 56, y: 312, w: 140, h: 14, z: 4,
          props: { text: 'UI/UX DESIGNER', fontFamily: 'Inter', fontSize: 10, fontWeight: '400', letterSpacing: '0.14em', color: '#ffffff' } },
        { id: 'r1-side-l2', archetype: 'text', behavior: 'fixed', x: 240, y: 312, w: 140, h: 14, z: 4,
          props: { text: 'BRAND DESIGNER', fontFamily: 'Inter', fontSize: 10, fontWeight: '400', letterSpacing: '0.14em', color: '#ffffff' } },
        { id: 'r1-side-r1', archetype: 'text', behavior: 'fixed', x: 900, y: 312, w: 120, h: 14, z: 4,
          props: { text: 'ILLUSTRATOR', fontFamily: 'Inter', fontSize: 10, fontWeight: '400', letterSpacing: '0.14em', color: '#ffffff' } },
        { id: 'r1-side-r2', archetype: 'text', behavior: 'fixed', x: 1080, y: 312, w: 144, h: 14, z: 4,
          props: { text: 'LA, CALIFORNIA', fontFamily: 'Inter', fontSize: 10, fontWeight: '400', letterSpacing: '0.14em', color: '#ffffff' } },
        { id: 'r1-bg', archetype: 'image', behavior: 'stretch', x: 0, y: 0, w: 1280, h: 720, z: 0,
          props: { objectPosition: 'center 30%' } },
        { id: 'r1-portrait', archetype: 'image', behavior: 'scaleProportionally', x: 460, y: 80, w: 360, h: 440, z: 1,
          props: { objectPosition: 'center 30%' } },
        { id: 'r1-name', archetype: 'text', behavior: 'wrap', x: 64, y: 460, w: 1152, h: 200, z: 2,
          props: { text: 'Kaely Liora', fontFamily: 'Inter', fontSize: 200, fontWeight: '500', lineHeight: '1', letterSpacing: '-0.045em', color: '#ffffff', textAlign: 'center' } }
      ]
    },
    {
      behavior: 'auto', height: 380, layout: 'asym-1-2',
      children: [
        { id: 'r1-a-eyebrow', archetype: 'text', behavior: 'wrap', cell: 0, x: 64, y: 96, w: 240, h: 16,
          props: { text: 'ABOUT', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.18em', color: '#71717A' } },
        { id: 'r1-a-body', archetype: 'text', behavior: 'wrap', cell: 1, x: 0, y: 96, w: 552, h: 120,
          props: { text: "Hi, I'm Kaelis, a freelance designer with a passion for clean UI, user-centric thinking, and thoughtful branding. With over 10 years of experience, I help startups and businesses turn ideas into meaningful visual stories — whether that's a digital product or a timeless brand identity.",
            fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.75', color: '#0f172a' } },
        { id: 'r1-a-stat1', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r1-a-body', x: 24, y: 56, w: 140, h: 80,
          props: { text: '10⁺', fontFamily: 'Inter', fontSize: 56, fontWeight: '400', lineHeight: '1', color: '#0f172a', textAlign: 'center' } },
        { id: 'r1-a-stat1-l', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r1-a-stat1', x: 24, y: 12, w: 140, h: 16,
          props: { text: 'YEARS OF EXPERIENCE', fontFamily: 'Inter', fontSize: 9, fontWeight: '400', letterSpacing: '0.14em', color: '#71717A', textAlign: 'center' } },
        { id: 'r1-a-stat2', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r1-a-body', x: 200, y: 56, w: 140, h: 80,
          props: { text: '40⁺', fontFamily: 'Inter', fontSize: 56, fontWeight: '400', lineHeight: '1', color: '#0f172a', textAlign: 'center' } },
        { id: 'r1-a-stat2-l', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r1-a-stat2', x: 200, y: 12, w: 140, h: 16,
          props: { text: 'PROJECTS COMPLETED', fontFamily: 'Inter', fontSize: 9, fontWeight: '400', letterSpacing: '0.14em', color: '#71717A', textAlign: 'center' } },
        { id: 'r1-a-stat3', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r1-a-body', x: 376, y: 56, w: 140, h: 80,
          props: { text: '95ˣ', fontFamily: 'Inter', fontSize: 56, fontWeight: '400', lineHeight: '1', color: '#0f172a', textAlign: 'center' } },
        { id: 'r1-a-stat3-l', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r1-a-stat3', x: 376, y: 12, w: 140, h: 16,
          props: { text: 'REPEAT CLIENTS', fontFamily: 'Inter', fontSize: 9, fontWeight: '400', letterSpacing: '0.14em', color: '#71717A', textAlign: 'center' } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 320, layout: '4col',
      children: [
        { id: 'r1-w1', archetype: 'image', behavior: 'stretch', cell: 0, x: 0, y: 0, w: 0, h: 0, props: { objectPosition: 'center' } },
        { id: 'r1-w2', archetype: 'image', behavior: 'stretch', cell: 1, x: 0, y: 0, w: 0, h: 0, props: { objectPosition: 'center' } },
        { id: 'r1-w3', archetype: 'image', behavior: 'stretch', cell: 2, x: 0, y: 0, w: 0, h: 0, props: { objectPosition: 'center' } },
        { id: 'r1-w4', archetype: 'image', behavior: 'stretch', cell: 3, x: 0, y: 0, w: 0, h: 0, props: { objectPosition: 'center' } }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────
// R02 · Wunder Energy (inspired by Wunder real-estate energy partner)
// serif asym hero + aerial image strip + partner band + 3-feature stack
// ─────────────────────────────────────────────────────────────────────────
const LAYOUT_R02 = {
  meta: { name: 'Wunder Energy', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'fixedHeight', height: 96, layout: 'free',
      children: [
        { id: 'r2-logo', archetype: 'text', behavior: 'fixed', x: 64, y: 36, w: 120, h: 22,
          props: { text: '∞ Wunder', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
        { id: 'r2-nav', archetype: 'text', behavior: 'fixed', x: 540, y: 38, w: 540, h: 18,
          props: { text: 'Solutions   ·   How it Works   ·   Resources   ·   Our Company', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        { id: 'r2-cta', archetype: 'button', behavior: 'fixed', x: 1136, y: 28, w: 100, h: 36,
          props: { label: 'Get Started', variant: 'primary', radius: 6, paddingX: 14, paddingY: 8 } }
      ]
    },
    {
      behavior: 'auto', height: 320, layout: 'asym-1-2',
      children: [
        { id: 'r2-h-headline', archetype: 'text', behavior: 'wrap', cell: 0, x: 64, y: 80, w: 360, h: 160,
          props: { text: "Real estate's most trusted energy partner", fontFamily: 'IBM Plex Serif', fontSize: 48, fontWeight: '400', lineHeight: '1.1', letterSpacing: '-0.01em', color: '#0f172a' } },
        { id: 'r2-h-copy', archetype: 'text', behavior: 'wrap', cell: 1, x: 0, y: 96, w: 480, h: 60,
          props: { text: 'Seamlessly deploy solar, battery storage, and EV chargers across your portfolio.', fontFamily: 'Inter', fontSize: 16, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } },
        { id: 'r2-h-link', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r2-h-copy', x: 0, y: 24, w: 240, h: 24,
          props: { text: '→  Explore Our Solutions', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 480, layout: '1col',
      children: [
        { id: 'r2-aerial', archetype: 'image', behavior: 'stretch', cell: 0, x: 0, y: 0, w: 0, h: 0, props: { objectPosition: 'center' } }
      ]
    },
    {
      behavior: 'auto', height: 200, layout: 'asym',
      children: [
        { id: 'r2-p-copy', archetype: 'text', behavior: 'wrap', cell: 0, x: 64, y: 56, w: 380, h: 80,
          props: { text: 'Through our $650M partnership with Blackstone, Wunder has the funding and capital to seamlessly deploy no-CapEx energy solutions for clients nationwide.', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.65', color: '#0f172a' } },
        { id: 'r2-p-cta', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r2-p-copy', x: 64, y: 20, w: 160, h: 24,
          props: { text: '→  Learn More', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
        { id: 'r2-p-band', archetype: 'text', behavior: 'wrap', cell: 1, x: 24, y: 80, w: 600, h: 32,
          props: { text: 'Blackstone   ×   ∞ Wunder', fontFamily: 'IBM Plex Serif', fontSize: 22, fontWeight: '400', color: '#0f172a', textAlign: 'center' } }
      ]
    },
    {
      behavior: 'auto', height: 460, layout: 'asym-1-2',
      children: [
        { id: 'r2-f-eyebrow', archetype: 'text', behavior: 'wrap', cell: 0, x: 64, y: 88, w: 200, h: 16,
          props: { text: 'WHY WUNDER', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.18em', color: '#71717A' } },
        { id: 'r2-f-h', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r2-f-eyebrow', x: 64, y: 24, w: 360, h: 160,
          props: { text: 'Get more value out of your properties with Wunder', fontFamily: 'IBM Plex Serif', fontSize: 36, fontWeight: '400', lineHeight: '1.15', color: '#0f172a' } },
        { id: 'r2-feat-1-h', archetype: 'text', behavior: 'wrap', cell: 1, x: 0, y: 88, w: 520, h: 28,
          props: { text: 'Trusted experts', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
        { id: 'r2-feat-1-b', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r2-feat-1-h', x: 0, y: 12, w: 520, h: 64,
          props: { text: 'We understand energy isn\'t your primary business. As your advocate and consultant, we\'ll help you craft and execute an energy strategy based on your assets, capabilities, and goals.',
            fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.65', color: '#3F3F46' } },
        { id: 'r2-feat-2-h', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r2-feat-1-b', x: 0, y: 32, w: 520, h: 28,
          props: { text: 'Long-term vision', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
        { id: 'r2-feat-2-b', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r2-feat-2-h', x: 0, y: 12, w: 520, h: 64,
          props: { text: 'Long-lasting energy infrastructure demands a long-term partner. We provide full-service life-cycle solutions, managing everything from design and engineering to permitting, finance, installation, and operations.',
            fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.65', color: '#3F3F46' } },
        { id: 'r2-feat-3-h', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r2-feat-2-b', x: 0, y: 32, w: 520, h: 28,
          props: { text: 'Relationship-focused', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
        { id: 'r2-feat-3-b', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r2-feat-3-h', x: 0, y: 12, w: 520, h: 64,
          props: { text: "We're focused on delivering a transparent, industry-leading client experience. Success for us means helping you scale your energy strategy across your portfolio, deployment after deployment.",
            fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.65', color: '#3F3F46' } }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────
// R03 · CNCPT Interior (inspired by gola.io/CONCEPT)
// massive logotype layered on hero image + orange band + 3-col services
// ─────────────────────────────────────────────────────────────────────────
const LAYOUT_R03 = {
  meta: { name: 'CNCPT Interior', category: 'portfolio', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'fixedHeight', height: 560, layout: 'free',
      children: [
        { id: 'r3-logo', archetype: 'text', behavior: 'fixed', x: 64, y: 32, w: 120, h: 22, z: 4,
          props: { text: 'CNCPT®', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#ffffff' } },
        { id: 'r3-nav', archetype: 'text', behavior: 'fixed', x: 800, y: 36, w: 320, h: 16, z: 4,
          props: { text: 'PROJECTS  SERVICES  ABOUT  BLOG  PAGES', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.12em', color: '#ffffff', textAlign: 'right' } },
        { id: 'r3-cta', archetype: 'button', behavior: 'fixed', x: 1136, y: 26, w: 100, h: 32, z: 4,
          props: { label: 'GET IN TOUCH', variant: 'primary', radius: 18, paddingX: 12, paddingY: 8 } },
        { id: 'r3-eyebrow', archetype: 'text', behavior: 'wrap', x: 240, y: 96, w: 800, h: 16, z: 3,
          props: { text: 'INTERIOR DESIGN & ARCHITECTURAL STUDIO', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.22em', color: '#ffffff', textAlign: 'center' } },
        { id: 'r3-hero-img', archetype: 'image', behavior: 'stretch', x: 0, y: 0, w: 1280, h: 560, z: 0,
          props: { objectPosition: 'center 60%' } },
        { id: 'r3-mark', archetype: 'text', behavior: 'wrap', x: 64, y: 132, w: 1152, h: 240, z: 2,
          props: { text: 'CNCPT®', fontFamily: 'Inter', fontSize: 200, fontWeight: '300', lineHeight: '1', letterSpacing: '-0.04em', color: 'rgba(255,255,255,0.85)', textAlign: 'center' } }
      ]
    },
    {
      behavior: 'auto', height: 280, layout: 'free',
      children: [
        { id: 'r3-band', archetype: 'container', behavior: 'wrap', x: 64, y: 64, w: 1152, h: 180, z: 0,
          props: { background: '#FF5C2A', borderColor: '#FF5C2A', borderRadius: 4 } },
        { id: 'r3-band-chip', archetype: 'text', behavior: 'wrap', parent: 'r3-band', x: 24, y: -20, w: 120, h: 22,
          props: { text: 'WHAT WE DO', fontFamily: 'Inter', fontSize: 9, fontWeight: '500', letterSpacing: '0.18em', color: '#0f172a', textAlign: 'center' } },
        { id: 'r3-band-copy', archetype: 'text', behavior: 'wrap', parent: 'r3-band', x: 32, y: 32, w: 1088, h: 120,
          props: { text: 'Transforming Spaces with Minimalistic Flair: Architecture, Interior Design, and 3D Rendering Services for Modern, Clean, and Timeless Environments.',
            fontFamily: 'IBM Plex Serif', fontSize: 28, fontWeight: '400', lineHeight: '1.3', color: '#ffffff' } }
      ]
    },
    {
      behavior: 'auto', height: 280, layout: '3col',
      children: [
        { id: 'r3-srv-1', archetype: 'container', behavior: 'wrap', cell: 0, x: 16, y: 24, w: 384, h: 220,
          props: { background: '#FFFFFF', borderColor: '#E4E4E7', borderRadius: 4 } },
        { id: 'r3-srv-1-icon', archetype: 'text', behavior: 'wrap', parent: 'r3-srv-1', x: 24, y: 24, w: 56, h: 32,
          props: { text: '◇', fontFamily: 'Inter', fontSize: 22, fontWeight: '300', color: '#0f172a' } },
        { id: 'r3-srv-1-h', archetype: 'text', behavior: 'wrap', parent: 'r3-srv-1', anchor: 'r3-srv-1-icon', x: 24, y: 32, w: 336, h: 22,
          props: { text: 'ARCHITECTURE', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.14em', color: '#0f172a' } },
        { id: 'r3-srv-1-b', archetype: 'text', behavior: 'wrap', parent: 'r3-srv-1', anchor: 'r3-srv-1-h', x: 24, y: 12, w: 336, h: 64,
          props: { text: 'Transforming spaces through innovative design, functional layouts, and sustainable solutions, creating timeless structures that harmonise with their surroundings.',
            fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.6', color: '#71717A' } },
        { id: 'r3-srv-2', archetype: 'container', behavior: 'wrap', cell: 1, x: 16, y: 24, w: 384, h: 220,
          props: { background: '#FFFFFF', borderColor: '#E4E4E7', borderRadius: 4 } },
        { id: 'r3-srv-2-icon', archetype: 'text', behavior: 'wrap', parent: 'r3-srv-2', x: 24, y: 24, w: 56, h: 32,
          props: { text: '▲', fontFamily: 'Inter', fontSize: 22, fontWeight: '300', color: '#0f172a' } },
        { id: 'r3-srv-2-h', archetype: 'text', behavior: 'wrap', parent: 'r3-srv-2', anchor: 'r3-srv-2-icon', x: 24, y: 32, w: 336, h: 22,
          props: { text: 'INTERIOR DESIGN', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.14em', color: '#0f172a' } },
        { id: 'r3-srv-2-b', archetype: 'text', behavior: 'wrap', parent: 'r3-srv-2', anchor: 'r3-srv-2-h', x: 24, y: 12, w: 336, h: 64,
          props: { text: 'Curating spaces that blend aesthetics and functionality, crafting personalised interiors with meticulous attention to detail and a focus on minimalistic, modern design.',
            fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.6', color: '#71717A' } },
        { id: 'r3-srv-3', archetype: 'container', behavior: 'wrap', cell: 2, x: 16, y: 24, w: 384, h: 220,
          props: { background: '#FFFFFF', borderColor: '#E4E4E7', borderRadius: 4 } },
        { id: 'r3-srv-3-icon', archetype: 'text', behavior: 'wrap', parent: 'r3-srv-3', x: 24, y: 24, w: 56, h: 32,
          props: { text: '⬡', fontFamily: 'Inter', fontSize: 22, fontWeight: '300', color: '#0f172a' } },
        { id: 'r3-srv-3-h', archetype: 'text', behavior: 'wrap', parent: 'r3-srv-3', anchor: 'r3-srv-3-icon', x: 24, y: 32, w: 336, h: 22,
          props: { text: '3D RENDERING', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', letterSpacing: '0.14em', color: '#0f172a' } },
        { id: 'r3-srv-3-b', archetype: 'text', behavior: 'wrap', parent: 'r3-srv-3', anchor: 'r3-srv-3-h', x: 24, y: 12, w: 336, h: 64,
          props: { text: 'Bringing designs to life with photorealistic visualisations, allowing clients to explore and experience their projects before construction, ensuring a seamless design process.',
            fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.6', color: '#71717A' } }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────
// R04 · Coverly Insurance (inspired by Coverly Insurance professional services)
// editorial serif hero with image stack + stats trio + asym services
// ─────────────────────────────────────────────────────────────────────────
const LAYOUT_R04 = {
  meta: { name: 'Coverly Insurance', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'fixedHeight', height: 96, layout: 'free',
      children: [
        { id: 'r4-menu', archetype: 'text', behavior: 'fixed', x: 64, y: 38, w: 80, h: 16,
          props: { text: 'Menu  ⋮⋮', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', color: '#0f172a' } },
        { id: 'r4-logo', archetype: 'text', behavior: 'fixed', x: 568, y: 32, w: 144, h: 32,
          props: { text: '⛨  Coverly\nInsurance', fontFamily: 'IBM Plex Serif', fontSize: 13, fontWeight: '400', lineHeight: '1.15', color: '#0f172a', textAlign: 'center' } },
        { id: 'r4-buy', archetype: 'button', behavior: 'fixed', x: 1136, y: 28, w: 100, h: 36,
          props: { label: 'Buy Template', variant: 'primary', radius: 4, paddingX: 14, paddingY: 8 } }
      ]
    },
    {
      behavior: 'auto', height: 460, layout: 'asym-1-2',
      children: [
        { id: 'r4-h-eyebrow', archetype: 'text', behavior: 'wrap', cell: 0, x: 64, y: 56, w: 320, h: 16,
          props: { text: 'COVERLY INSURANCE', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.16em', color: '#71717A' } },
        { id: 'r4-h-headline', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r4-h-eyebrow', x: 64, y: 24, w: 320, h: 220,
          props: { text: 'Your perfect policy, fast & affordable', fontFamily: 'IBM Plex Serif', fontSize: 48, fontWeight: '400', lineHeight: '1.1', letterSpacing: '-0.01em', color: '#0f172a' } },
        { id: 'r4-h-copy', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r4-h-headline', x: 64, y: 64, w: 320, h: 60,
          props: { text: 'Get a free quote in under 2 minutes. Experience peace of mind with our reliable insurance options.',
            fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.65', color: '#3F3F46' } },
        { id: 'r4-h-cta', archetype: 'button', behavior: 'fixed', cell: 0, anchor: 'r4-h-copy', x: 64, y: 24, w: 156, h: 40,
          props: { label: 'Get your free quote', variant: 'primary', radius: 4, paddingX: 14, paddingY: 10 } },
        { id: 'r4-h-img-main', archetype: 'image', behavior: 'scaleProportionally', cell: 1, x: 0, y: 56, w: 360, h: 360,
          props: { objectPosition: 'center' } },
        { id: 'r4-h-img-side', archetype: 'image', behavior: 'scaleProportionally', cell: 1, x: 384, y: 56, w: 200, h: 220,
          props: { objectPosition: 'center 30%' } },
        { id: 'r4-h-quote', archetype: 'container', behavior: 'wrap', cell: 1, x: 384, y: 296, w: 200, h: 180,
          props: { background: '#FF5C2A', borderColor: '#FF5C2A', borderRadius: 4 } },
        { id: 'r4-h-quote-mark', archetype: 'text', behavior: 'wrap', parent: 'r4-h-quote', x: 16, y: 16, w: 28, h: 24,
          props: { text: '“', fontFamily: 'IBM Plex Serif', fontSize: 24, fontWeight: '400', color: '#ffffff' } },
        { id: 'r4-h-quote-body', archetype: 'text', behavior: 'wrap', parent: 'r4-h-quote', anchor: 'r4-h-quote-mark', x: 16, y: 4, w: 168, h: 120,
          props: { text: '"When a storm damaged our roof, TotalHome Security had an adjuster onsite within hours. We got our full claim approved in 3 days — no fights, no delays. THIS is how insurance should work."',
            fontFamily: 'Inter', fontSize: 11, fontWeight: '400', lineHeight: '1.55', color: '#ffffff' } }
      ]
    },
    {
      behavior: 'auto', height: 320, layout: 'free',
      children: [
        { id: 'r4-s-eyebrow', archetype: 'text', behavior: 'wrap', x: 64, y: 64, w: 1152, h: 16,
          props: { text: 'STATISTIC', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.18em', color: '#71717A', textAlign: 'center' } },
        { id: 'r4-s-h', archetype: 'text', behavior: 'wrap', anchor: 'r4-s-eyebrow', x: 64, y: 16, w: 1152, h: 56,
          props: { text: 'Proven results, trusted coverage', fontFamily: 'IBM Plex Serif', fontSize: 36, fontWeight: '400', lineHeight: '1.15', color: '#0f172a', textAlign: 'center' } },
        { id: 'r4-s-b', archetype: 'text', behavior: 'wrap', anchor: 'r4-s-h', x: 320, y: 12, w: 640, h: 48,
          props: { text: "We don't just promise reliability — we deliver it. Thousands of individuals, families, and businesses trust us to protect what matters most. Our data tells the story.",
            fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.65', color: '#71717A', textAlign: 'center' } },
        { id: 'r4-s-stat-1', archetype: 'text', behavior: 'wrap', anchor: 'r4-s-b', x: 200, y: 44, w: 200, h: 80,
          props: { text: '23ᵏ', fontFamily: 'IBM Plex Serif', fontSize: 56, fontWeight: '400', lineHeight: '1', color: '#0f172a', textAlign: 'center' } },
        { id: 'r4-s-stat-1-l', archetype: 'text', behavior: 'wrap', anchor: 'r4-s-stat-1', x: 200, y: 16, w: 200, h: 16,
          props: { text: 'Families protected', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#71717A', textAlign: 'center' } },
        { id: 'r4-s-stat-2', archetype: 'text', behavior: 'wrap', anchor: 'r4-s-b', x: 540, y: 44, w: 200, h: 80,
          props: { text: '95%', fontFamily: 'IBM Plex Serif', fontSize: 56, fontWeight: '400', lineHeight: '1', color: '#0f172a', textAlign: 'center' } },
        { id: 'r4-s-stat-2-l', archetype: 'text', behavior: 'wrap', anchor: 'r4-s-stat-2', x: 540, y: 16, w: 200, h: 16,
          props: { text: 'Policy renewal rate', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#71717A', textAlign: 'center' } },
        { id: 'r4-s-stat-3', archetype: 'text', behavior: 'wrap', anchor: 'r4-s-b', x: 880, y: 44, w: 200, h: 80,
          props: { text: '50ᴋ', fontFamily: 'IBM Plex Serif', fontSize: 56, fontWeight: '400', lineHeight: '1', color: '#0f172a', textAlign: 'center' } },
        { id: 'r4-s-stat-3-l', archetype: 'text', behavior: 'wrap', anchor: 'r4-s-stat-3', x: 880, y: 16, w: 200, h: 16,
          props: { text: 'vehicles protected', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#71717A', textAlign: 'center' } }
      ]
    },
    {
      behavior: 'auto', height: 380, layout: 'asym-1-2',
      children: [
        { id: 'r4-p-eyebrow', archetype: 'text', behavior: 'wrap', cell: 0, x: 64, y: 56, w: 200, h: 16,
          props: { text: 'OUR SERVICES', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.16em', color: '#71717A' } },
        { id: 'r4-p-h', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r4-p-eyebrow', x: 64, y: 24, w: 320, h: 80,
          props: { text: 'Your Partner in Smart, Reliable Insurance Protection', fontFamily: 'IBM Plex Serif', fontSize: 28, fontWeight: '400', lineHeight: '1.15', color: '#0f172a' } },
        { id: 'r4-p-b', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r4-p-h', x: 64, y: 24, w: 320, h: 80,
          props: { text: 'we make it easy to protect what matters most. From health and life insurance to vehicle and property coverage, we offer smart, flexible plans designed to fit your needs and budget.',
            fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.65', color: '#3F3F46' } },
        { id: 'r4-p-cta', archetype: 'button', behavior: 'fixed', cell: 0, anchor: 'r4-p-b', x: 64, y: 24, w: 110, h: 40,
          props: { label: 'Contact Us', variant: 'primary', radius: 4, paddingX: 14, paddingY: 10 } },
        { id: 'r4-p-img', archetype: 'image', behavior: 'scaleProportionally', cell: 1, x: 0, y: 56, w: 360, h: 280,
          props: { objectPosition: 'center' } },
        { id: 'r4-p-card', archetype: 'container', behavior: 'wrap', cell: 1, x: 380, y: 56, w: 200, h: 280,
          props: { background: '#FAFAF9', borderColor: '#E7E5E4', borderRadius: 4 } },
        { id: 'r4-p-card-icon', archetype: 'container', behavior: 'fixed', parent: 'r4-p-card', x: 16, y: 16, w: 28, h: 28,
          props: { background: '#FF5C2A', borderColor: '#FF5C2A', borderRadius: 4 } },
        { id: 'r4-p-card-h', archetype: 'text', behavior: 'wrap', parent: 'r4-p-card', anchor: 'r4-p-card-icon', x: 16, y: 16, w: 168, h: 24,
          props: { text: 'Secure Life coverage', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
        { id: 'r4-p-card-b', archetype: 'text', behavior: 'wrap', parent: 'r4-p-card', anchor: 'r4-p-card-h', x: 16, y: 16, w: 168, h: 100,
          props: { text: "Life insurance that safeguards your family's future—simple, affordable, and reliable.\n\nLEARN MORE",
            fontFamily: 'Inter', fontSize: 12, fontWeight: '400', lineHeight: '1.6', color: '#3F3F46' } }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────
// R05 · Laurits Magazine (inspired by Laurits magazine layout)
// massive MAGAZINE wordmark + 1+2 feature mosaic + newsletter + 4-col more
// ─────────────────────────────────────────────────────────────────────────
const LAYOUT_R05 = {
  meta: { name: 'Laurits Magazine', category: 'editorial', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'fixedHeight', height: 80, layout: 'free',
      children: [
        { id: 'r5-logo', archetype: 'text', behavior: 'fixed', x: 64, y: 32, w: 100, h: 18,
          props: { text: 'Laurits®', fontFamily: 'IBM Plex Serif', fontSize: 16, fontWeight: '400', color: '#0f172a' } },
        { id: 'r5-nav', archetype: 'text', behavior: 'fixed', x: 800, y: 34, w: 380, h: 16,
          props: { text: 'HOMES   PAGES   PORTFOLIO   SHOP   BLOG    Q Search   Cart (0)   ☰', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.04em', color: '#0f172a', textAlign: 'right' } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 200, layout: 'free',
      children: [
        { id: 'r5-display', archetype: 'text', behavior: 'wrap', x: 0, y: 24, w: 1280, h: 160, z: 1,
          props: { text: 'MAGAZINE', fontFamily: 'Inter', fontSize: 200, fontWeight: '500', lineHeight: '0.92', letterSpacing: '-0.04em', color: '#0f172a', textAlign: 'center' } }
      ]
    },
    {
      behavior: 'auto', height: 64, layout: 'free',
      children: [
        { id: 'r5-filters', archetype: 'text', behavior: 'fixed', x: 64, y: 16, w: 220, h: 18,
          props: { text: 'FILTER —    Show All  Directly', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.1em', color: '#71717A' } },
        { id: 'r5-sort', archetype: 'text', behavior: 'fixed', x: 800, y: 16, w: 416, h: 18,
          props: { text: 'SORT BY —    Latest Added · Popularity · Most Comments', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.1em', color: '#71717A', textAlign: 'right' } }
      ]
    },
    {
      behavior: 'auto', height: 480, layout: 'asym',
      children: [
        // Cell 0 — big feature
        { id: 'r5-f1-img', archetype: 'image', behavior: 'stretch', cell: 0, x: 16, y: 16, w: 480, h: 320,
          props: { objectPosition: 'center' } },
        { id: 'r5-f1-date', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r5-f1-img', x: 16, y: 16, w: 200, h: 14,
          props: { text: '◻︎  June 16, 2021', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#71717A' } },
        { id: 'r5-f1-title', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r5-f1-date', x: 16, y: 8, w: 480, h: 56,
          props: { text: 'Our picks from the 1st Design Festival', fontFamily: 'IBM Plex Serif', fontSize: 22, fontWeight: '400', lineHeight: '1.2', color: '#0f172a' } },
        { id: 'r5-f1-tags', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r5-f1-title', x: 16, y: 8, w: 280, h: 14,
          props: { text: 'Architecture / Design', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#71717A' } },
        // Cell 1 — two stacked smaller features
        { id: 'r5-f2-img', archetype: 'image', behavior: 'stretch', cell: 1, x: 16, y: 16, w: 360, h: 140,
          props: { objectPosition: 'center' } },
        { id: 'r5-f2-date', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r5-f2-img', x: 16, y: 12, w: 360, h: 14,
          props: { text: '◻︎  June 16, 2021', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#71717A' } },
        { id: 'r5-f2-title', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r5-f2-date', x: 16, y: 6, w: 360, h: 36,
          props: { text: 'Explore a different range of styles', fontFamily: 'IBM Plex Serif', fontSize: 18, fontWeight: '400', lineHeight: '1.2', color: '#0f172a' } },
        { id: 'r5-f3-img', archetype: 'image', behavior: 'stretch', cell: 1, anchor: 'r5-f2-title', x: 16, y: 24, w: 360, h: 100,
          props: { objectPosition: 'center' } },
        { id: 'r5-f3-title', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r5-f3-img', x: 16, y: 12, w: 360, h: 36,
          props: { text: 'The hand-crafted objects just for you', fontFamily: 'IBM Plex Serif', fontSize: 18, fontWeight: '400', lineHeight: '1.2', color: '#0f172a' } }
      ]
    },
    {
      behavior: 'auto', height: 280, layout: '3col',
      children: [
        { id: 'r5-c1-img', archetype: 'image', behavior: 'stretch', cell: 0, x: 16, y: 16, w: 380, h: 160,
          props: { objectPosition: 'center' } },
        { id: 'r5-c1-title', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r5-c1-img', x: 16, y: 16, w: 380, h: 36,
          props: { text: 'A retrospective: Being miles apart', fontFamily: 'IBM Plex Serif', fontSize: 18, fontWeight: '400', lineHeight: '1.2', color: '#0f172a' } },
        { id: 'r5-c2-img', archetype: 'image', behavior: 'stretch', cell: 1, x: 16, y: 16, w: 380, h: 160,
          props: { objectPosition: 'center' } },
        { id: 'r5-c2-title', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r5-c2-img', x: 16, y: 16, w: 380, h: 36,
          props: { text: 'Finding the best possible solutions', fontFamily: 'IBM Plex Serif', fontSize: 18, fontWeight: '400', lineHeight: '1.2', color: '#0f172a' } },
        { id: 'r5-c3-img', archetype: 'image', behavior: 'stretch', cell: 2, x: 16, y: 16, w: 380, h: 160,
          props: { objectPosition: 'center' } },
        { id: 'r5-c3-title', archetype: 'text', behavior: 'wrap', cell: 2, anchor: 'r5-c3-img', x: 16, y: 16, w: 380, h: 36,
          props: { text: 'The award for the best design project', fontFamily: 'IBM Plex Serif', fontSize: 18, fontWeight: '400', lineHeight: '1.2', color: '#0f172a' } }
      ]
    },
    {
      behavior: 'auto', height: 200, layout: 'free',
      children: [
        { id: 'r5-nl-eyebrow', archetype: 'text', behavior: 'wrap', x: 0, y: 48, w: 1280, h: 14,
          props: { text: '✦ NEWSLETTER', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.16em', color: '#71717A', textAlign: 'center' } },
        { id: 'r5-nl-h', archetype: 'text', behavior: 'wrap', anchor: 'r5-nl-eyebrow', x: 0, y: 16, w: 1280, h: 56,
          props: { text: 'Be up to date with the newest articles', fontFamily: 'IBM Plex Serif', fontSize: 26, fontWeight: '400', lineHeight: '1.2', color: '#0f172a', textAlign: 'center' } },
        { id: 'r5-nl-input', archetype: 'text', behavior: 'wrap', anchor: 'r5-nl-h', x: 480, y: 24, w: 320, h: 28,
          props: { text: 'Type your email...                                  SUBSCRIBE', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#0f172a', textAlign: 'center' } }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────
// R06 · Alphamark Brand (inspired by Alphamark™ identity studio)
// massive sans wordmark + 2-col project tiles + big serif copy
// ─────────────────────────────────────────────────────────────────────────
const LAYOUT_R06 = {
  meta: { name: 'Alphamark Studio', category: 'portfolio', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'fixedHeight', height: 96, layout: 'free',
      children: [
        { id: 'r6-meta-l', archetype: 'text', behavior: 'fixed', x: 64, y: 24, w: 220, h: 32,
          props: { text: 'Alphamark™\n©2023 All rights reserved', fontFamily: 'Inter', fontSize: 10, fontWeight: '400', lineHeight: '1.4', color: '#0f172a' } },
        { id: 'r6-meta-r', archetype: 'text', behavior: 'fixed', x: 980, y: 24, w: 240, h: 32,
          props: { text: 'Skopje · North Macedonia\n41° 59′ 47.26″ N / 21°...', fontFamily: 'Inter', fontSize: 10, fontWeight: '400', lineHeight: '1.4', color: '#0f172a', textAlign: 'right' } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 160, layout: 'free',
      children: [
        { id: 'r6-mark', archetype: 'text', behavior: 'wrap', x: 0, y: 0, w: 1280, h: 160,
          props: { text: 'Alphamark™', fontFamily: 'Inter', fontSize: 200, fontWeight: '500', lineHeight: '0.96', letterSpacing: '-0.04em', color: '#0f172a', textAlign: 'center' } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 56, layout: 'free',
      children: [
        { id: 'r6-meta-row-1', archetype: 'text', behavior: 'fixed', x: 64, y: 24, w: 240, h: 16,
          props: { text: '■ Alphamark™', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
        { id: 'r6-meta-row-2', archetype: 'text', behavior: 'fixed', x: 540, y: 24, w: 200, h: 16,
          props: { text: '■ Start a project', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } },
        { id: 'r6-meta-row-3', archetype: 'text', behavior: 'fixed', x: 1080, y: 24, w: 100, h: 16,
          props: { text: '■ Menu', fontFamily: 'Inter', fontSize: 12, fontWeight: '500', color: '#0f172a' } }
      ]
    },
    {
      behavior: 'auto', height: 160, layout: 'free',
      children: [
        { id: 'r6-tag', archetype: 'text', behavior: 'wrap', x: 64, y: 32, w: 1152, h: 96,
          props: { text: 'Your creative partner for brand and identity transformation.', fontFamily: 'Inter', fontSize: 36, fontWeight: '400', lineHeight: '1.2', letterSpacing: '-0.01em', color: '#0f172a' } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 320, layout: '2col',
      children: [
        { id: 'r6-p1-img', archetype: 'image', behavior: 'stretch', cell: 0, x: 16, y: 16, w: 588, h: 280,
          props: { objectPosition: 'center' } },
        { id: 'r6-p1-tag', archetype: 'container', behavior: 'fixed', cell: 0, anchor: 'r6-p1-img', x: -560, y: -260, w: 36, h: 22, z: 2,
          props: { background: '#F4FF52', borderColor: '#F4FF52', borderRadius: 0 } },
        { id: 'r6-p1-tag-l', archetype: 'text', behavior: 'fixed', parent: 'r6-p1-tag', x: 4, y: 4, w: 28, h: 14,
          props: { text: 'New', fontFamily: 'Inter', fontSize: 10, fontWeight: '500', color: '#0f172a', textAlign: 'center' } },
        { id: 'r6-p1-num', archetype: 'text', behavior: 'fixed', cell: 0, anchor: 'r6-p1-img', x: 540, y: -260, w: 60, h: 14,
          props: { text: '00 — 1', fontFamily: 'Inter', fontSize: 10, fontWeight: '400', color: '#ffffff', textAlign: 'right' } },
        { id: 'r6-p1-h', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r6-p1-img', x: 16, y: 16, w: 360, h: 18,
          props: { text: '→  Nestvested  ·  A visual communication strategy that reveals the power of automation in financial institutions.',
            fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#0f172a' } },
        { id: 'r6-p2-img', archetype: 'image', behavior: 'stretch', cell: 1, x: 16, y: 16, w: 588, h: 280,
          props: { objectPosition: 'center' } },
        { id: 'r6-p2-num', archetype: 'text', behavior: 'fixed', cell: 1, anchor: 'r6-p2-img', x: 540, y: -260, w: 60, h: 14,
          props: { text: '00 — 2', fontFamily: 'Inter', fontSize: 10, fontWeight: '400', color: '#ffffff', textAlign: 'right' } },
        { id: 'r6-p2-h', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r6-p2-img', x: 16, y: 16, w: 360, h: 18,
          props: { text: 'Sysfacts AG', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#0f172a' } }
      ]
    },
    {
      behavior: 'auto', height: 220, layout: 'free',
      children: [
        { id: 'r6-statement', archetype: 'text', behavior: 'wrap', x: 64, y: 48, w: 1152, h: 140,
          props: { text: 'At Alphamark, we specialise in building cutting-edge identity systems to help professional service providers increase their value and gain a competitive advantage from branding & websites.',
            fontFamily: 'Inter', fontSize: 32, fontWeight: '400', lineHeight: '1.25', letterSpacing: '-0.005em', color: '#0f172a' } }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────
// R07 · Sirotov Architects (inspired by SIROTOV ARCHITECTS minimal site)
// huge name display + minimalist hero image + 2-col about
// ─────────────────────────────────────────────────────────────────────────
const LAYOUT_R07 = {
  meta: { name: 'Sirotov Architects', category: 'portfolio', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'fixedHeight', height: 64, layout: 'free',
      children: [
        { id: 'r7-meta-l', archetype: 'text', behavior: 'fixed', x: 64, y: 22, w: 200, h: 16,
          props: { text: 'TATIANA IVANOVA', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.12em', color: '#0f172a' } },
        { id: 'r7-meta-c', archetype: 'text', behavior: 'fixed', x: 540, y: 14, w: 200, h: 32,
          props: { text: 'WEBSITE CONCEPT\nUI/UX', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.12em', lineHeight: '1.4', color: '#0f172a', textAlign: 'center' } },
        { id: 'r7-meta-r', archetype: 'text', behavior: 'fixed', x: 1040, y: 22, w: 180, h: 16,
          props: { text: 'NOVEMBER 2021', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.12em', color: '#0f172a', textAlign: 'right' } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 240, layout: 'free',
      children: [
        { id: 'r7-mark', archetype: 'text', behavior: 'wrap', x: 32, y: 24, w: 1216, h: 200,
          props: { text: 'SIROTOV\nARCHITECTS©', fontFamily: 'Inter', fontSize: 144, fontWeight: '500', lineHeight: '0.92', letterSpacing: '-0.03em', color: '#0f172a' } },
        { id: 'r7-mark-side', archetype: 'text', behavior: 'fixed', x: 980, y: 84, w: 220, h: 32,
          props: { text: 'interior & exterior\ndesign', fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.4', color: '#0f172a' } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 460, layout: '1col',
      children: [
        { id: 'r7-hero', archetype: 'image', behavior: 'stretch', cell: 0, x: 0, y: 0, w: 0, h: 0, props: { objectPosition: 'center' } }
      ]
    },
    {
      behavior: 'auto', height: 96, layout: 'free',
      children: [
        { id: 'r7-stamp-l', archetype: 'text', behavior: 'fixed', x: 64, y: 36, w: 60, h: 14,
          props: { text: '01 /', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.12em', color: '#0f172a' } },
        { id: 'r7-stamp-r', archetype: 'text', behavior: 'fixed', x: 1000, y: 36, w: 220, h: 14,
          props: { text: 'ABOUT THE PROJECT', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.16em', color: '#0f172a', textAlign: 'right' } }
      ]
    },
    {
      behavior: 'auto', height: 220, layout: '2col',
      children: [
        { id: 'r7-a-h1', archetype: 'text', behavior: 'wrap', cell: 0, x: 64, y: 16, w: 480, h: 28,
          props: { text: 'Introduction', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
        { id: 'r7-a-b1', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r7-a-h1', x: 64, y: 16, w: 480, h: 100,
          props: { text: 'Restrained minimalism, unusual materials, ascetic shapes and colors, functionality and space — all this is associated with the Sirotov Architects studio. The studio was founded in 2011, during this time it has become one of the most recognizable and extraordinary.',
            fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.7', color: '#3F3F46' } },
        { id: 'r7-a-h2', archetype: 'text', behavior: 'wrap', cell: 1, x: 16, y: 16, w: 480, h: 28,
          props: { text: 'Main Task', fontFamily: 'Inter', fontSize: 18, fontWeight: '500', color: '#0f172a' } },
        { id: 'r7-a-b2', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r7-a-h2', x: 16, y: 16, w: 480, h: 100,
          props: { text: 'The main task was to create a website design that represents minimalistic approach of the interior and exterior design studio, to build the trust of the potential clients in the company and to convince a potential client to leave a request on the website.',
            fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.7', color: '#3F3F46' } }
      ]
    }
  ]
};

// ─────────────────────────────────────────────────────────────────────────
// R08 · Horizon Courts (inspired by Horizon Courts tennis club)
// hero image with overlay copy + bento card mix + 4-stat row + service mosaic
// ─────────────────────────────────────────────────────────────────────────
const LAYOUT_R08 = {
  meta: { name: 'Horizon Courts', category: 'marketing', refWidth: 1280, mode: 'mesh', initialCanvasWidth: 1280 },
  sections: [
    {
      behavior: 'fixedHeight', height: 64, layout: 'free',
      children: [
        { id: 'r8-logo', archetype: 'text', behavior: 'fixed', x: 64, y: 24, w: 160, h: 18,
          props: { text: 'Horizon Courts', fontFamily: 'Inter', fontSize: 14, fontWeight: '500', color: '#0f172a' } },
        { id: 'r8-nav', archetype: 'text', behavior: 'fixed', x: 380, y: 24, w: 540, h: 18,
          props: { text: 'About Us     Services     Coaches     Events     Contacts', fontFamily: 'Inter', fontSize: 12, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        { id: 'r8-cta', archetype: 'button', behavior: 'fixed', x: 1100, y: 16, w: 132, h: 36,
          props: { label: 'Book now ↗', variant: 'primary', radius: 18, paddingX: 14, paddingY: 8 } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 380, layout: 'free',
      children: [
        { id: 'r8-hero-img', archetype: 'image', behavior: 'stretch', x: 32, y: 16, w: 1216, h: 340, z: 0,
          props: { objectPosition: 'center 30%' } },
        { id: 'r8-hero-h', archetype: 'text', behavior: 'wrap', x: 200, y: 110, w: 880, h: 80, z: 2,
          props: { text: 'Unleash Your Inner Champion Today.\nAll In One Place.', fontFamily: 'Inter', fontSize: 30, fontWeight: '500', lineHeight: '1.18', color: '#ffffff', textAlign: 'center' } },
        { id: 'r8-hero-b', archetype: 'text', behavior: 'wrap', x: 280, y: 200, w: 720, h: 48, z: 2,
          props: { text: 'Join the ultimate tennis experience — where passion meets performance, and every swing brings you closer to victory.',
            fontFamily: 'Inter', fontSize: 13, fontWeight: '400', lineHeight: '1.55', color: '#ffffff', textAlign: 'center' } },
        { id: 'r8-hero-cta', archetype: 'button', behavior: 'fixed', x: 564, y: 256, w: 152, h: 36, z: 3,
          props: { label: 'Start your own journey', variant: 'primary', radius: 18, paddingX: 12, paddingY: 8 } }
      ]
    },
    {
      behavior: 'auto', height: 140, layout: 'asym',
      children: [
        { id: 'r8-a-eyebrow', archetype: 'text', behavior: 'wrap', cell: 0, x: 32, y: 32, w: 200, h: 18,
          props: { text: 'About Horizon', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.12em', color: '#0f172a' } },
        { id: 'r8-a-b', archetype: 'text', behavior: 'wrap', cell: 1, x: 0, y: 32, w: 720, h: 80,
          props: { text: "At Horizon, we don't just play tennis — we live it. Since 2021, our club has been a home for players of all levels, from eager beginners to seasoned pros.",
            fontFamily: 'IBM Plex Serif', fontSize: 18, fontWeight: '400', lineHeight: '1.5', color: '#0f172a' } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 280, layout: '3col',
      children: [
        { id: 'r8-bento-1', archetype: 'container', behavior: 'wrap', cell: 0, x: 16, y: 16, w: 380, h: 240,
          props: { background: '#0F2238', borderColor: '#0F2238', borderRadius: 12 } },
        { id: 'r8-bento-1-icon', archetype: 'text', behavior: 'wrap', parent: 'r8-bento-1', x: 24, y: 24, w: 32, h: 32,
          props: { text: '⌗', fontFamily: 'Inter', fontSize: 22, fontWeight: '400', color: '#ffffff' } },
        { id: 'r8-bento-1-b', archetype: 'text', behavior: 'wrap', parent: 'r8-bento-1', anchor: 'r8-bento-1-icon', x: 24, y: 24, w: 332, h: 100,
          props: { text: 'Professional hard courts with tournament-grade lighting & climate control — play in perfect conditions, in any season.',
            fontFamily: 'Inter', fontSize: 14, fontWeight: '400', lineHeight: '1.55', color: '#ffffff' } },
        { id: 'r8-bento-1-tag', archetype: 'container', behavior: 'fixed', parent: 'r8-bento-1', x: 24, y: 192, w: 110, h: 28,
          props: { background: 'rgba(255,255,255,0.12)', borderColor: 'transparent', borderRadius: 14 } },
        { id: 'r8-bento-1-tag-l', archetype: 'text', behavior: 'fixed', parent: 'r8-bento-1-tag', x: 8, y: 6, w: 96, h: 16,
          props: { text: '◉ Game Mode', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#ffffff' } },
        { id: 'r8-bento-2', archetype: 'image', behavior: 'stretch', cell: 1, x: 16, y: 16, w: 380, h: 240,
          props: { objectPosition: 'center' } },
        { id: 'r8-bento-2-tag', archetype: 'container', behavior: 'fixed', cell: 1, anchor: 'r8-bento-2', x: 24, y: -90, w: 152, h: 32, z: 2,
          props: { background: '#0F2238', borderColor: '#0F2238', borderRadius: 16 } },
        { id: 'r8-bento-2-tag-l', archetype: 'text', behavior: 'fixed', parent: 'r8-bento-2-tag', x: 12, y: 8, w: 132, h: 16,
          props: { text: 'Private & Group Lessons', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#ffffff', textAlign: 'center' } },
        { id: 'r8-bento-3', archetype: 'container', behavior: 'wrap', cell: 2, x: 16, y: 16, w: 380, h: 240,
          props: { background: '#FFFFFF', borderColor: '#E4E4E7', borderRadius: 12 } },
        { id: 'r8-bento-3-h', archetype: 'text', behavior: 'wrap', parent: 'r8-bento-3', x: 24, y: 24, w: 332, h: 36,
          props: { text: '100⁺', fontFamily: 'IBM Plex Serif', fontSize: 32, fontWeight: '400', color: '#0f172a' } },
        { id: 'r8-bento-3-l', archetype: 'text', behavior: 'wrap', parent: 'r8-bento-3', anchor: 'r8-bento-3-h', x: 24, y: 4, w: 332, h: 18,
          props: { text: 'Pro Coaches', fontFamily: 'Inter', fontSize: 13, fontWeight: '500', color: '#0f172a' } },
        { id: 'r8-bento-3-b', archetype: 'text', behavior: 'wrap', parent: 'r8-bento-3', anchor: 'r8-bento-3-l', x: 24, y: 8, w: 332, h: 56,
          props: { text: 'Certified professionals ready to boost your game from first serve to tournament level.',
            fontFamily: 'Inter', fontSize: 11, fontWeight: '400', lineHeight: '1.55', color: '#71717A' } }
      ]
    },
    {
      behavior: 'fixedHeight', height: 160, layout: '4col',
      children: [
        { id: 'r8-st-1', archetype: 'text', behavior: 'wrap', cell: 0, x: 16, y: 40, w: 280, h: 56,
          props: { text: '12 000⁺', fontFamily: 'IBM Plex Serif', fontSize: 36, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        { id: 'r8-st-1-l', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r8-st-1', x: 16, y: 8, w: 280, h: 16,
          props: { text: 'Hours of play annually', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#71717A', textAlign: 'center' } },
        { id: 'r8-st-2', archetype: 'text', behavior: 'wrap', cell: 1, x: 16, y: 40, w: 280, h: 56,
          props: { text: '89%', fontFamily: 'IBM Plex Serif', fontSize: 36, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        { id: 'r8-st-2-l', archetype: 'text', behavior: 'wrap', cell: 1, anchor: 'r8-st-2', x: 16, y: 8, w: 280, h: 16,
          props: { text: 'Player Retention Rate', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#71717A', textAlign: 'center' } },
        { id: 'r8-st-3', archetype: 'text', behavior: 'wrap', cell: 2, x: 16, y: 40, w: 280, h: 56,
          props: { text: '1,200⁺', fontFamily: 'IBM Plex Serif', fontSize: 36, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        { id: 'r8-st-3-l', archetype: 'text', behavior: 'wrap', cell: 2, anchor: 'r8-st-3', x: 16, y: 8, w: 280, h: 16,
          props: { text: 'Active Members', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#71717A', textAlign: 'center' } },
        { id: 'r8-st-4', archetype: 'text', behavior: 'wrap', cell: 3, x: 16, y: 40, w: 280, h: 56,
          props: { text: '125⁺', fontFamily: 'IBM Plex Serif', fontSize: 36, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        { id: 'r8-st-4-l', archetype: 'text', behavior: 'wrap', cell: 3, anchor: 'r8-st-4', x: 16, y: 8, w: 280, h: 16,
          props: { text: 'Annual Tournaments', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#71717A', textAlign: 'center' } }
      ]
    },
    {
      behavior: 'auto', height: 320, layout: '3col',
      children: [
        { id: 'r8-svc-eyebrow', archetype: 'text', behavior: 'wrap', cell: 0, x: 16, y: 24, w: 200, h: 16,
          props: { text: 'Services', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', letterSpacing: '0.12em', color: '#0f172a' } },
        { id: 'r8-svc-b', archetype: 'text', behavior: 'wrap', cell: 0, anchor: 'r8-svc-eyebrow', x: 16, y: 16, w: 360, h: 100,
          props: { text: 'Explore our full range of coaching, training, and tennis experiences. From first serve to match point — we\'ve got the right program for you.',
            fontFamily: 'IBM Plex Serif', fontSize: 18, fontWeight: '400', lineHeight: '1.45', color: '#0f172a' } },
        { id: 'r8-svc-cta', archetype: 'button', behavior: 'fixed', cell: 0, anchor: 'r8-svc-b', x: 16, y: 24, w: 132, h: 36,
          props: { label: 'Explore More ↗', variant: 'primary', radius: 18, paddingX: 14, paddingY: 8 } },
        { id: 'r8-svc-img-1', archetype: 'image', behavior: 'stretch', cell: 1, x: 16, y: 24, w: 380, h: 220,
          props: { objectPosition: 'center' } },
        { id: 'r8-svc-img-1-tag', archetype: 'container', behavior: 'fixed', cell: 1, anchor: 'r8-svc-img-1', x: 32, y: -200, w: 132, h: 26, z: 2,
          props: { background: '#FFFFFF', borderColor: '#FFFFFF', borderRadius: 13 } },
        { id: 'r8-svc-img-1-tag-l', archetype: 'text', behavior: 'fixed', parent: 'r8-svc-img-1-tag', x: 12, y: 6, w: 112, h: 14,
          props: { text: 'Training Programs', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#0f172a', textAlign: 'center' } },
        { id: 'r8-svc-img-2', archetype: 'image', behavior: 'stretch', cell: 2, x: 16, y: 24, w: 380, h: 220,
          props: { objectPosition: 'center' } },
        { id: 'r8-svc-img-2-tag', archetype: 'container', behavior: 'fixed', cell: 2, anchor: 'r8-svc-img-2', x: 32, y: -200, w: 132, h: 26, z: 2,
          props: { background: 'rgba(180,220,90,0.85)', borderColor: 'transparent', borderRadius: 13 } },
        { id: 'r8-svc-img-2-tag-l', archetype: 'text', behavior: 'fixed', parent: 'r8-svc-img-2-tag', x: 12, y: 6, w: 112, h: 14,
          props: { text: 'Hourly Court Rental', fontFamily: 'Inter', fontSize: 11, fontWeight: '400', color: '#0f172a', textAlign: 'center' } }
      ]
    }
  ]
};

export const REFERENCE_LAYOUTS = [
  LAYOUT_R01,
  LAYOUT_R02,
  LAYOUT_R03,
  LAYOUT_R04,
  LAYOUT_R05,
  LAYOUT_R06,
  LAYOUT_R07,
  LAYOUT_R08
];
