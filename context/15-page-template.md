# 15 — Page Template

Every LP under `/pages/*` follows this shape. **Variety = which sections and copy**, not random new layouts.

## Location

`src/app/pages/<slug>/page.tsx`

## Skeleton (matches existing industry LPs)

Copy **`school-photography`** or **`school-uniform`** as a starting point — names and order stay stable:

```tsx
"use client";

import { Hero } from "@/sections/<slug>/Hero";
import { AcceleratorAtAGlance } from "@/sections/<slug>/AcceleratorAtAGlance";
import { Problems } from "@/sections/<slug>/Problems";
import { Differentiator } from "@/sections/<slug>/Differentiator";
import { Outcomes } from "@/sections/<slug>/Outcomes";
import { ReferenceCase } from "@/sections/<slug>/ReferenceCase";
import { AcceleratorValue } from "@/sections/<slug>/AcceleratorValue";
import { Testimonials } from "@/sections/<slug>/Testimonials";
import { HowWeWork } from "@/sections/<slug>/HowWeWork";
import { WhatShips } from "@/sections/<slug>/WhatShips";
import { FAQ } from "@/sections/<slug>/FAQ";
import { CTA } from "@/sections/<slug>/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <AcceleratorAtAGlance />
      <Problems />
      <Differentiator />
      <Outcomes />
      <ReferenceCase />
      <AcceleratorValue />
      <Testimonials />
      <HowWeWork />
      <WhatShips />
      <FAQ />
      <CTA />
    </main>
  );
}
```

## Rules

- **Thin shell only:** imports + `<main>` + ordered sections. No large inline JSX trees.
- **No `Header` / footer imports here** — `src/app/pages/layout.tsx` + root `src/app/layout.tsx` provide chrome.
- **Hero overlap:** if the hero is full-bleed under the bar, keep the same **negative top margin** pattern as existing `Hero.tsx` (`-mt-[60px] md:-mt-[75px]`).
- **One section per file.** Section owns copy, structure, and styles for that block.
- **Assets:** `assetUrl("/…")` only; never hardcode `/app` or raw public paths.
- **No new global fonts/tokens per page** — extend `globals.css` / root layout only when truly shared.
