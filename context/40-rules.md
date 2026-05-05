# 40 — Rules

Hard rules. Violations cause build failures or visual regressions.

## File structure

- Do not invent components. Only use entries from `20-components.md` or create new ones in `src/components/` or `src/sections/`.
- New reusable blocks go in `src/components/` or `src/sections/<slug>/` — never inline in a page file.
- Every page follows the structure in `15-page-template.md`.
- Every section file starts with `"use client";`.

## Branching & git

- Always work on a `feat/page-<slug>` branch — never commit directly to `main`.
- Always push the branch to `origin` at the end — the PR review flow depends on it.
- Commit message format: `feat: add <slug> page`.

## JSX / TypeScript

- Apostrophes inside JSX text must be `&apos;` — bare `'` causes ESLint build errors.
- Quote characters like `"` in JSX text must be `&ldquo;` / `&rdquo;`.
- Never use `any` as a type. TypeScript errors are build-blocking.

## Styling

- Border radii: use `rounded-[2px]` or `rounded-[4px]` — never `rounded-md`, `rounded-lg`, etc.
- Use design tokens (`var(--sw-black)`, `var(--sw-mint)`, `var(--sw-blue)`) — do not hardcode hex values that match a token.
- Dark-section text is `text-white` / `text-white/80` / `text-white/70` — not `text-gray-*`.
- Light-section text is `text-[var(--sw-black)]` / `text-[var(--sw-black)]/70`.
- Headings always use `font-head`. Body copy uses no explicit font class (inherits Inter).

## Images

- Use `assetUrl(path)` from `@/lib/assets` for all `src` values — never bare string paths.
- Use `<img>` not `<Image />` from next/image (consistent with codebase).
- When image paths are unknown, use a placeholder `<div className="bg-white/10 rounded-[4px] aspect-video" />` and mark `{/* TODO: real image */}`.

## Sections

- Every section gets a unique `id` attribute (the slug of the section name, e.g. `id="faq"`).
- Every visible content block is wrapped in `<Reveal>`. Never skip this.
- Sibling elements rendered with `.map()` get staggered: `delay={i * 0.07}`.
- The CTA section always has `id="cta"` — mid-page CTAs link to `href="#cta"`.

## Content placeholders

- If the brief does not include a HubSpot `formId`, render a visual placeholder form instead of `<HubSpotForm>` and add `{/* TODO: insert HubSpot formId */}`.
- If testimonial photos are unknown, use initials avatars (`<div className="h-11 w-11 rounded-full bg-white/10 flex items-center justify-center">`).
- Missing logo files: use `{/* TODO: logo path */}` and omit the `<img>` entirely.
