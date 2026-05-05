# 20 — Components

All components below are approved for use. Do not import anything not on this list without creating it first under `src/components/` and flagging it.

## Primitives — `@/components/primitives/`

### `Reveal` — scroll-triggered fade-up animation
```tsx
import { Reveal } from "@/components/primitives/Reveal";
<Reveal delay={0.1} className="optional-wrapper-class">
  {/* any content */}
</Reveal>
```
Props: `delay?: number` (seconds, default 0), `className?: string`.
Use to wrap every visible section block. Stagger siblings: `delay={i * 0.07}`.

### `DrawnPath` — SVG path that animates in on scroll
```tsx
import { DrawnPath } from "@/components/primitives/DrawnPath";
<svg viewBox="0 0 1000 1" className="w-full h-px" preserveAspectRatio="none">
  <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={1.8} />
</svg>
```
Used for animated accent lines at section tops/bottoms.

### `SectionLabel` — monospace eyebrow label
```tsx
import { SectionLabel } from "@/components/primitives/SectionLabel";
<SectionLabel index="01">Section title</SectionLabel>
```
Props: `index?: string` (shows a muted number + divider line before text), `children`.
Outputs `.label-code` styled text.

### `Stat` — large stat display
```tsx
import { Stat } from "@/components/primitives/Stat";
<Stat value="44,891" label="students live · day one" accent="var(--sw-mint)" />
```
Props: `value: string`, `label: string`, `accent?: string` (color of the big number; defaults to white).

### Button styles — `@/components/primitives/buttonStyles`
```tsx
import { btnPrimary, btnSecondary, btnLight, btnGhost } from "@/components/primitives/buttonStyles";
<a href="#cta" className={btnLight}>CTA text <ArrowUpRight className="h-4 w-4" /></a>
```
| Token | Appearance | Use on |
|-------|-----------|--------|
| `btnPrimary` | Beige border + beige text, fills on hover | Dark sections |
| `btnSecondary` / `btnOutline` | White/30 border, fills on hover | Dark sections |
| `btnLight` | Blue border + blue text, fills blue on hover | Light sections |
| `btnGhost` | No border, muted text | Inline/nav |

## Site — `@/components/site/`

### `HubSpotForm` — embeds a HubSpot form
```tsx
import { HubSpotForm } from "@/components/site/HubSpotForm";
<HubSpotForm portalId="25724996" formId="FORM_ID" region="eu1" />
```
Use in the CTA section when a real form is needed. The form inherits dark-theme styles from `globals.css`. If portalId/formId are not provided by the content author, use a visual placeholder `<div>` instead.

### `Header` — site header (rendered by layout, do not import in pages)
### `Footer` — site footer (rendered by root layout, do not import in pages)

## UI — `@/components/ui/`

Standard shadcn/ui components. Use sparingly — prefer custom section patterns.

- `Accordion` — for FAQ when a React-controlled accordion is needed (prefer native `<details>` first)
- `Badge` — pill label
- `Button` — use button style tokens above instead for page CTAs
- `Card` — generic card wrapper
- `Separator` — horizontal divider

## External libraries (already installed)

- `lucide-react` — icons. Common ones: `ArrowUpRight`, `Check`, `Plus`, `Minus`, `ChevronRight`
- `motion/react` — animations. Use `Reveal` wrapper instead of raw `motion.div` unless you need fine-grained control (e.g. spec-sheet row stagger)
