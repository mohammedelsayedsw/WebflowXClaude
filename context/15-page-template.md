# 15 — Page Template

## File location

`src/app/pages/<slug>/page.tsx`

## Canonical skeleton

```tsx
"use client";

import { Hero }       from "@/sections/<slug>/Hero";
import { AtAGlance }  from "@/sections/<slug>/AtAGlance";
import { Problems }   from "@/sections/<slug>/Problems";
import { Features }   from "@/sections/<slug>/Features";
import { Testimonials } from "@/sections/<slug>/Testimonials";
import { HowWeWork }  from "@/sections/<slug>/HowWeWork";
import { FAQ }        from "@/sections/<slug>/FAQ";
import { CTA }        from "@/sections/<slug>/CTA";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <AtAGlance />
      <Problems />
      <Features />
      <Testimonials />
      <HowWeWork />
      <FAQ />
      <CTA />
    </main>
  );
}
```

## Canonical section skeleton

Every section file in `src/sections/<slug>/`:

```tsx
"use client";

import { Reveal } from "@/components/primitives/Reveal";
// import other primitives/lucide-react icons as needed

export function SectionName() {
  return (
    <section id="section-id" className="bg-[var(--sw-black)] py-28 md:py-36">
      <div className="wrap">
        {/* content */}
      </div>
    </section>
  );
}
```

## Section anatomy patterns

### Hero (dark, full-viewport)
```tsx
<section className="relative -mt-[60px] md:-mt-[75px] overflow-hidden min-h-screen flex flex-col">
  {/* radial gradient bg via inline style */}
  {/* main body: grid with copy left, card right */}
  {/* trust bar at bottom */}
</section>
```
The `-mt-[60px] md:-mt-[75px]` pulls the hero under the fixed header.

### Standard dark section
```tsx
<section id="slug" className="bg-[var(--sw-black)] py-28 md:py-36">
  <div className="wrap">
    <Reveal><h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">...</h2></Reveal>
  </div>
</section>
```

### Standard light section
```tsx
<section id="slug" className="bg-lp-bright py-28 md:py-36">
  <div className="wrap">
    <Reveal><h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">...</h2></Reveal>
  </div>
</section>
```

### CTA section (dark radial gradient, same palette as Hero)
```tsx
<section id="cta" className="relative py-28 md:py-40 overflow-hidden" style={{ background: "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%), ..." }}>
```

## Typography scale

| Use | Class |
|-----|-------|
| Section H2 | `font-head text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]` |
| Hero H1 | `font-head text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em]` |
| Card H3 | `font-head text-[20px] md:text-[24px] leading-[1.15]` |
| Body copy | `text-[15px] md:text-[17px] leading-relaxed` (dark sections: `text-white/80`, light: `text-[var(--sw-black)]/70`) |
| Small body | `text-[13px] md:text-[14px] leading-relaxed` |
| Eyebrow / label | `label-code` (monospace, uppercase, 11px) |

## Heading accent pattern

Dark sections: one keyword wrapped in `<span style={{ color: "var(--sw-mint)" }}>`.
Light sections: one keyword wrapped in `<span className="text-[var(--sw-blue)]">`.

## Rules of thumb

- Sections only at the top level of `<main>` — no inline JSX trees in the page file.
- Wrap all visible content blocks in `<Reveal>` for scroll-in animation; stagger siblings with `delay={i * 0.07}`.
- Never share state between sections.
- Every card gets `rounded-[2px]` or `rounded-[4px]` — not `rounded-md` or larger.
- Unescaped apostrophes in JSX cause build errors — always use `&apos;`.
