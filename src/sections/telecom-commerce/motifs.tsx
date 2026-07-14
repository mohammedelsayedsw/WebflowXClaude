"use client";

/**
 * Telecom motif system - the industry-specific visual language for the
 * telecom-commerce page. Two motifs only, per the brief:
 *
 *  1. SignalBars - a small four-bar signal-strength glyph, used as the accent
 *     next to every section label (the sibling of the k-12 page's SectionIcon
 *     STEM glyphs).
 *  2. SimTile / SimGlyph - the module tiles are shaped like SIM cards: a
 *     rounded rectangle with one clipped corner and a small chip-contact mark.
 *
 * Nothing else on the page is decorated. Palette stays on brand tokens
 * (mint #6EF76E on dark, blue #3F4AAF on light).
 */

type Tone = "dark" | "light";

const accentFor = (tone: Tone) => (tone === "dark" ? "var(--sw-mint)" : "var(--sw-blue)");

/* ------------------------------------------------------------------ *
 * SignalBars - four ascending bars, a signal-strength glyph. Sits next
 * to a section's small uppercase label, at roughly label height.
 * Decorative, paired with a text label, so aria-hidden.
 * ------------------------------------------------------------------ */
export function SignalBars({
  tone = "dark",
  size = 16,
  className = "",
}: {
  tone?: Tone;
  size?: number;
  className?: string;
}) {
  const color = accentFor(tone);
  const bars = [0.4, 0.6, 0.8, 1];
  return (
    <span
      aria-hidden
      className={`inline-flex items-end ${className}`}
      style={{ height: size, gap: Math.max(2, size * 0.14) }}
    >
      {bars.map((h, i) => (
        <span
          key={i}
          style={{
            width: Math.max(2, size * 0.16),
            height: size * h,
            background: color,
            borderRadius: 1,
            opacity: 0.5 + i * 0.16,
          }}
        />
      ))}
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * SimGlyph - the tiny chip-contact mark that sits on every SIM tile:
 * a small rounded pad divided into contact zones, like the metal
 * contact on a real SIM card.
 * ------------------------------------------------------------------ */
function SimChip({ color, opacity = 0.85 }: { color: string; opacity?: number }) {
  return (
    <svg width="26" height="20" viewBox="0 0 26 20" fill="none" aria-hidden>
      <rect x="0.6" y="0.6" width="24.8" height="18.8" rx="3" stroke={color} strokeOpacity={opacity} />
      <line x1="8.7" y1="0.6" x2="8.7" y2="19.4" stroke={color} strokeOpacity={opacity * 0.7} />
      <line x1="17.3" y1="0.6" x2="17.3" y2="19.4" stroke={color} strokeOpacity={opacity * 0.7} />
      <line x1="0.6" y1="10" x2="25.4" y2="10" stroke={color} strokeOpacity={opacity * 0.7} />
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * SimTile - a module tile shaped like a SIM card. Rounded rectangle
 * with the top-right corner clipped and a chip-contact mark. Carries a
 * two-letter code and the module name. Static (no link, no scroll),
 * the direct replacement for the k-12 periodic-element tiles.
 * ------------------------------------------------------------------ */
export function SimTile({
  code,
  name,
  n,
  tone = "dark",
}: {
  code: string;
  name: React.ReactNode;
  n?: string;
  tone?: Tone;
}) {
  const dark = tone === "dark";
  const accent = dark ? "#6EF76E" : "#3F4AAF";
  const bg = dark ? "rgba(255,255,255,0.025)" : "rgba(63,74,175,0.04)";
  const codeColor = dark ? "#ffffff" : "var(--sw-black)";
  const nameColor = dark ? "rgba(255,255,255,0.9)" : "rgba(16,19,44,0.9)";
  const numColor = dark ? "rgba(255,255,255,0.4)" : "rgba(16,19,44,0.4)";

  // SIM outline: rounded rect with a chamfered top-right corner.
  const outline =
    "M 12 2 H 76 L 98 24 V 144 Q 98 148 94 148 H 12 Q 8 148 8 144 V 6 Q 8 2 12 2 Z";

  return (
    <div className="relative h-full min-h-[172px] p-5 md:p-6">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 106 150"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d={outline}
          fill={bg}
          stroke={accent}
          strokeOpacity={dark ? 0.24 : 0.35}
          strokeWidth={1}
          vectorEffect="non-scaling-stroke"
        />
      </svg>

      <div className="relative flex h-full flex-col" style={{ transform: "translateX(16px)" }}>
        <div className="flex items-start justify-between">
          <SimChip color={accent} opacity={dark ? 0.75 : 0.7} />
          {n && (
            <span className="label-code text-[10px] tabular-nums" style={{ color: numColor, marginRight: 11 }}>
              {n}
            </span>
          )}
        </div>
        <span
          className="mt-4 block font-head text-[30px] leading-none tracking-[-0.01em] md:text-[38px]"
          style={{ color: codeColor }}
        >
          {code}
        </span>
        <span
          className="mt-3 block font-head text-[13px] leading-snug md:text-[14px]"
          style={{ color: nameColor }}
        >
          {name}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * StepNumber - a plain numbered square for the three-step plan. No
 * extra decoration (only signal bars and SIM cards decorate this page),
 * so this is a quiet outline square with the step number.
 * ------------------------------------------------------------------ */
export function StepNumber({ n, tone = "light" }: { n: string; tone?: Tone }) {
  const color = accentFor(tone);
  return (
    <span
      className="inline-flex h-11 w-11 items-center justify-center rounded-[3px] font-head text-[15px] font-semibold"
      style={{ color, border: `1px solid ${tone === "dark" ? "rgba(110,247,110,0.4)" : "rgba(63,74,175,0.3)"}` }}
      aria-hidden
    >
      {n}
    </span>
  );
}
