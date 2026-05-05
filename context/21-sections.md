# 21 — Sections

Sections are **page-scoped** — each page gets its own folder `src/sections/<slug>/`. Do not share section files between pages.

## Standard section set

Every page uses a subset of these. Pick the ones that match the content brief.

| Name | File | Background | Required? |
|------|------|-----------|----------|
| `Hero` | `Hero.tsx` | Dark (radial gradient) | Always |
| `AtAGlance` | `AtAGlance.tsx` | Light (`bg-lp-bright`) | Recommended |
| `Problems` | `Problems.tsx` | Dark (`bg-[var(--sw-black)]`) | Recommended |
| `Differentiator` | `Differentiator.tsx` | Light | Optional |
| `Features` | `Features.tsx` | Light | Optional |
| `Outcomes` | `Outcomes.tsx` | Dark | Optional |
| `ReferenceCase` | `ReferenceCase.tsx` | Light | Optional |
| `AcceleratorValue` | `AcceleratorValue.tsx` | Dark | Optional |
| `Testimonials` | `Testimonials.tsx` | Dark | Recommended |
| `HowWeWork` | `HowWeWork.tsx` | Light | Recommended |
| `WhatShips` | `WhatShips.tsx` | Dark | Optional |
| `FAQ` | `FAQ.tsx` | Dark | Recommended |
| `CTA` | `CTA.tsx` | Dark (radial gradient) | Always |

## Section templates by type

### Hero
```tsx
// Left: pill eyebrow + H1 (mint accent) + 2 paragraphs + scroll indicator
// Right: glassmorphic stat card with blockquote + 3 stats grid
// Bottom: trust bar (client logos or a note for demo)
```
Key classes: `relative -mt-[60px] md:-mt-[75px] overflow-hidden min-h-screen flex flex-col`

### AtAGlance
```tsx
// H2 (blue accent) + descriptor paragraph
// Left: bracket-frame module list (numbered)
// Right: dark spec card with staggered dl rows (motion.div)
// Bottom: full-width CTA row linking to #cta
```

### Problems
```tsx
// H2 (mint accent) + descriptor
// 3-column card grid (problem number + title + body)
// Centered pullquote with SVG quotation mark
```

### Features / Differentiator
```tsx
// H2 + descriptor
// 2×2 card grid (label-code eyebrow + title + body + tags)
// Cards on bg-lp-bright with white background and blue top accent stripe
```

### Testimonials
```tsx
// H2
// Grid of testimonial cards: avatar + quote + name + role
// or: large centered single quote with attribution
```

### HowWeWork
```tsx
// H2 + descriptor
// Numbered step list or horizontal step flow
// Optional timeline SVG
```

### FAQ
```tsx
// Two-column: H2 left (1/3), accordion right (2/3)
// Use native <details>/<summary> — no JS accordion library needed
// Plus/Minus icons toggle; open state via group-open:
```

### CTA
```tsx
// Two-column: left = H2 (mint) + paragraph + quote card + checklist
//             right = HubSpotForm or visual placeholder
// Same radial gradient bg as Hero
```

## Placeholder rule

When content details are missing (quote attribution, logo paths, HubSpot form IDs), insert placeholder content and mark with `{/* TODO: replace placeholder */}`. Never omit a section because content is missing.
