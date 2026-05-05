# 50 — Examples

Canonical references for “same website” new pages.

## `school-photography`

- **Path:** `/app/pages/school-photography`
- **Page:** `src/app/pages/school-photography/page.tsx`
- **Sections:** `src/sections/school-photography/`
- **Order:** `Hero` → `AcceleratorAtAGlance` → `Problems` → `Differentiator` → `Outcomes` → `ReferenceCase` → `AcceleratorValue` → `Testimonials` → `HowWeWork` → `WhatShips` → `FAQ` → `CTA`
- **Assets:** `public/pages/school-photography/` (when used)

## `school-uniform`

- **Path:** `/app/pages/school-uniform`
- **Page:** `src/app/pages/school-uniform/page.tsx`
- **Sections:** `src/sections/school-uniform/` — **same section order** as above; different copy/diagrams.

## Shared behaviour

- **Header:** `src/app/pages/layout.tsx` (`components/site/Header`).
- **Footer:** root `src/app/layout.tsx` — **Webflow** `v7Layout/Footer`.
- **Primitives:** `src/components/primitives/*`, `src/components/ui/*` as needed inside sections.
- **Images in sections:** `assetUrl()` for `/public` paths.
