# 10 — Architecture

## Routing

All custom pages live under `/pages/<slug>/`. The `src/app/pages/layout.tsx` wraps every page with `<Header />`. The root `src/app/layout.tsx` wraps the whole app with `<Footer />`.

```
/pages/school-photography   →  src/app/pages/school-photography/page.tsx
/pages/school-uniform        →  src/app/pages/school-uniform/page.tsx
/pages/<slug>                →  src/app/pages/<slug>/page.tsx   ← new pages go here
```

## File conventions

| What | Where |
|------|-------|
| Page entry point | `src/app/pages/<slug>/page.tsx` |
| Page sections | `src/sections/<slug>/<SectionName>.tsx` |
| Shared primitives | `src/components/primitives/` |
| Site shell components | `src/components/site/` |
| shadcn/ui components | `src/components/ui/` |
| Webflow devlink components | `src/webflow/` |
| Design tokens + utilities | `src/app/globals.css` |

## Key constraints

- Every page file starts with `"use client";` (all sections use motion/react).
- Sections are pure presentational components — no data fetching, no router hooks.
- Images use `assetUrl(path)` from `@/lib/assets` (prepends the app base path). Use `<img>` not `next/image` — the codebase does this throughout and the ESLint warning is accepted.
- All new section files must also start with `"use client";`.

## Design tokens (globals.css)

```css
--sw-black:      #10132c   /* primary dark background */
--sw-white:      #ffffff
--sw-blue:       #3f4aaf   /* accent on light sections */
--sw-mint:       #6ef76e   /* accent on dark sections */
--sw-beige:      #f8f4ef
--sw-dark-grey:  #7e83a0
--sw-light-grey: #dadcf1
--lp-bg-elev:    #171a38   /* elevated card on dark bg */
--lp-bg-card:    #1f2346
```

## Utility classes (globals.css)

| Class | Purpose |
|-------|---------|
| `.wrap` | Max-width container (1280px, auto horizontal padding) |
| `.label-code` | JetBrains Mono 11px, 0.14em tracking, uppercase — used for eyebrow labels |
| `.font-head` | Golos Text — all headings |
| `.bg-lp-bright` | Off-white gradient background for "light" sections |
| `.bracket-frame` | Adds corner bracket decoration; needs `<span class="bracket-bl"/><span class="bracket-br"/>` inside |
| `.hairline-b / .hairline-t` | 1px dark/light divider lines |
| `.grid-backdrop` | Subtle blue grid overlay |

## Section background rhythm

Alternate dark/light to create visual breathing room:

| Section type | Background |
|---|---|
| Hero | Dark (`--sw-black` radial gradient, full viewport) |
| Overview / AtAGlance | Light (`bg-lp-bright`) |
| Problems | Dark (`bg-[var(--sw-black)]`) |
| Features / Differentiator | Light (`bg-lp-bright`) |
| Social proof / Testimonials | Dark |
| How we work / Process | Light |
| FAQ | Dark (`bg-[var(--sw-black)]`) |
| CTA | Dark (radial gradient, same as hero) |
