# 50 — Examples

## Example: `school-photography`

- **Archetype:** Industry solution landing (B2B, long-form sales page)
- **Slug:** `school-photography`
- **Branch:** `feat/page-school-photography`
- **Route:** `/pages/school-photography`
- **Source:** `src/app/pages/school-photography/page.tsx`
- **Sections used:** Hero, AcceleratorAtAGlance, Problems, Differentiator, Outcomes, ReferenceCase, AcceleratorValue, Testimonials, HowWeWork, WhatShips, FAQ, CTA

### Page file (full)
```tsx
"use client";
import { Hero } from "@/sections/school-photography/Hero";
import { AcceleratorAtAGlance } from "@/sections/school-photography/AcceleratorAtAGlance";
import { Problems } from "@/sections/school-photography/Problems";
// ... (one import per section)
export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <AcceleratorAtAGlance />
      <Problems />
      {/* ... rest of sections */}
      <CTA />
    </main>
  );
}
```

### Hero pattern (dark, full viewport)
```tsx
// Negative top margin pulls under fixed header
<section className="relative -mt-[60px] md:-mt-[75px] overflow-hidden min-h-screen flex flex-col">
  {/* HeroBg: two <div> layers with radial gradients + blur overlay */}
  <div className="flex-1 flex items-center">
    <div className="wrap relative z-10 pt-28 md:pt-36 pb-16 md:pb-24 w-full">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] items-start">
        {/* Left: pill eyebrow → H1 (mint accent on one word) → 2 paras → scroll indicator */}
        {/* Right: glassmorphic stat card (3 stats + pullquote) */}
      </div>
    </div>
  </div>
  {/* Trust bar: logo strip at the very bottom of the viewport */}
</section>
```

### FAQ pattern (dark, native details/summary)
```tsx
<section id="faq" className="bg-[var(--sw-black)] py-28 md:py-40">
  <div className="wrap">
    <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-20">
      <Reveal>
        <h2 className="font-head text-white text-[34px] md:text-[56px] leading-[1.05] max-w-[14ch]">
          The questions that actually <span style={{ color: "var(--sw-mint)" }}>come up</span>
        </h2>
      </Reveal>
      <div>
        {items.map((it, i) => (
          <Reveal key={i} delay={i * 0.04}>
            <details className="group border-b border-white/10 py-5 [&_summary]:list-none">
              <summary className="flex cursor-pointer items-start justify-between gap-6 font-head text-white text-[17px] md:text-[20px]">
                <span>{it.q}</span>
                {/* Plus/Minus icon toggled by group-open: */}
              </summary>
              <div className="pt-4 pr-12 text-white/75 text-[14px] leading-relaxed">{it.a}</div>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </div>
</section>
```

### CTA pattern (dark radial gradient, two-column)
```tsx
<section id="cta" className="relative py-28 md:py-40 overflow-hidden" style={{ background: "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%), radial-gradient(1200px 800px at 50% 50%, #1a2060 0%, #0a0d24 100%)" }}>
  <div className="wrap">
    <div className="grid md:grid-cols-2 gap-12 items-start">
      {/* Left: H2 (mint accent) + paragraph + quote card + <ul> checklist with <Check> icons */}
      {/* Right: <HubSpotForm portalId="..." formId="..." /> or visual placeholder */}
    </div>
  </div>
</section>
```

---

## Example: `demo`

- **Archetype:** Demo/test page (lorem ipsum, minimal sections)
- **Slug:** `demo`
- **Route:** `/pages/demo`
- **Source:** `src/app/pages/demo/page.tsx`
- **Sections used:** Hero, AtAGlance, Problems, Features, FAQ, CTA
- **Notes:** All content is lorem ipsum. CTA uses a visual form placeholder (no HubSpot formId).
