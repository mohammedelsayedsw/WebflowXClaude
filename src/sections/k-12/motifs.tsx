"use client";

/**
 * STEM motif system — the industry-specific visual language for the k-12 page.
 *
 * Small, quiet, recurring. The direct equivalent of the school-photography
 * page's film-perforation / ●REC / AF-bracket motifs, translated for a STEM
 * toy retailer audience. These read as wit, not as a toy store — no childish
 * illustrations, no bright toy colors. Palette stays on the brand tokens
 * (mint #6EF76E on dark, blue #3F4AAF on light).
 *
 * Used only in: hero, section-label rows, module headers, the three-step
 * plan, and the footer strip. Nowhere else.
 */

type Tone = "dark" | "light";

const accentFor = (tone: Tone) => (tone === "dark" ? "var(--sw-mint)" : "var(--sw-blue)");

/* ------------------------------------------------------------------ *
 * Brick-stud strip — a horizontal row of small rounded squares, like
 * the top of a building brick. The page's section-divider accent
 * (equivalent of the film-perforation strip).
 * ------------------------------------------------------------------ */
export function BrickStrip({
  count = 14,
  tone = "dark",
  className = "",
}: {
  count?: number;
  tone?: Tone;
  className?: string;
}) {
  const color = accentFor(tone);
  return (
    <div
      aria-hidden
      className={`flex items-center gap-1.5 ${className}`}
    >
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="h-[7px] w-[7px] rounded-[2px]"
          style={{
            background: color,
            opacity: i % 4 === 0 ? 0.55 : 0.22,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ *
 * Age chip — a small "AGES 6–12" style pill, like on toy packaging.
 * Decorative tag for the hero and module labels.
 * ------------------------------------------------------------------ */
export function AgeChip({
  children = "AGES 6–12",
  tone = "dark",
  className = "",
}: {
  children?: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 label-code leading-none ${className}`}
      style={{
        border: `1px solid ${dark ? "rgba(110,247,110,0.45)" : "rgba(63,74,175,0.35)"}`,
        color: dark ? "var(--sw-mint)" : "var(--sw-blue)",
        background: dark ? "rgba(110,247,110,0.06)" : "rgba(63,74,175,0.05)",
      }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ background: dark ? "var(--sw-mint)" : "var(--sw-blue)" }}
      />
      {children}
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * Battery indicator — a tiny battery icon at ~80% charge, the quiet
 * equivalent of the photography page's ●REC marker. Sits next to
 * section labels.
 * ------------------------------------------------------------------ */
export function BatteryTag({
  label,
  tone = "dark",
  charge = 0.8,
  className = "",
}: {
  label: string;
  tone?: Tone;
  charge?: number;
  className?: string;
}) {
  const dark = tone === "dark";
  const stroke = dark ? "rgba(255,255,255,0.55)" : "rgba(16,19,44,0.5)";
  const fill = dark ? "var(--sw-mint)" : "var(--sw-blue)";
  const bars = Math.max(0, Math.min(3, Math.round(charge * 3)));
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="22" height="12" viewBox="0 0 22 12" fill="none" aria-hidden>
        <rect x="0.5" y="0.5" width="18" height="11" rx="2" stroke={stroke} />
        <rect x="19.5" y="3.5" width="2" height="5" rx="1" fill={stroke} />
        {Array.from({ length: 3 }).map((_, i) => (
          <rect
            key={i}
            x={2.5 + i * 5}
            y={2.5}
            width="4"
            height="7"
            rx="1"
            fill={i < bars ? fill : "transparent"}
            opacity={i < bars ? 0.85 : 0}
          />
        ))}
      </svg>
      <span
        className="label-code"
        style={{ color: dark ? "rgba(255,255,255,0.6)" : "rgba(16,19,44,0.55)" }}
      >
        {label}
      </span>
    </span>
  );
}

/** Playful inversion — a "BATTERIES INCLUDED ✓" chip (a wink at module 5). */
export function BatteriesIncluded({
  tone = "dark",
  className = "",
}: {
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "dark";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-[2px] px-3 py-1.5 label-code leading-none ${className}`}
      style={{
        border: `1px solid ${dark ? "rgba(110,247,110,0.5)" : "rgba(63,74,175,0.4)"}`,
        color: dark ? "var(--sw-mint)" : "var(--sw-blue)",
        background: dark ? "rgba(110,247,110,0.07)" : "rgba(63,74,175,0.05)",
      }}
    >
      <svg width="20" height="11" viewBox="0 0 20 11" fill="none" aria-hidden>
        <rect x="0.5" y="0.5" width="16" height="10" rx="2" stroke="currentColor" opacity="0.7" />
        <rect x="17.5" y="3" width="2" height="5" rx="1" fill="currentColor" opacity="0.7" />
        <rect x="2.5" y="2.5" width="11" height="6" rx="1" fill="currentColor" opacity="0.85" />
      </svg>
      BATTERIES INCLUDED ✓
    </span>
  );
}

/* ------------------------------------------------------------------ *
 * Circuit trace — a thin PCB-style line (right angles, small solder-pad
 * dots). Used sparingly to underline the H1 / connect hero elements.
 * ------------------------------------------------------------------ */
export function CircuitTrace({
  tone = "dark",
  className = "",
  width = 220,
}: {
  tone?: Tone;
  className?: string;
  width?: number;
}) {
  const color = accentFor(tone);
  return (
    <svg
      width={width}
      height="20"
      viewBox="0 0 220 20"
      fill="none"
      aria-hidden
      className={className}
      preserveAspectRatio="xMinYMid meet"
    >
      <path
        d="M2 10 H60 L72 4 H140 L150 16 H210"
        stroke={color}
        strokeWidth="1.25"
        strokeOpacity="0.7"
        fill="none"
      />
      {[
        [2, 10],
        [72, 4],
        [140, 4],
        [150, 16],
        [210, 16],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="2.4" fill={color} fillOpacity="0.85" />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ *
 * Blueprint grid — a very faint graph-paper / blueprint grid overlay
 * for the dark hero background. Barely visible.
 * ------------------------------------------------------------------ */
export function BlueprintGrid({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`absolute inset-0 -z-10 pointer-events-none ${className}`}
      style={{
        backgroundImage:
          "linear-gradient(rgba(110,247,110,0.05) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(110,247,110,0.05) 1px, transparent 1px)",
        backgroundSize: "44px 44px",
        maskImage:
          "radial-gradient(900px 600px at 30% 30%, rgba(0,0,0,0.6), transparent 75%)",
        WebkitMaskImage:
          "radial-gradient(900px 600px at 30% 30%, rgba(0,0,0,0.6), transparent 75%)",
      }}
    />
  );
}

/* ------------------------------------------------------------------ *
 * Assembly step glyph — a numbered step drawn like a construction-kit
 * instruction sheet (1 → 2 → 3). Used in the three-step plan.
 * ------------------------------------------------------------------ */
export function AssemblyStep({
  n,
  tone = "light",
}: {
  n: string;
  tone?: Tone;
}) {
  const dark = tone === "dark";
  const color = dark ? "var(--sw-mint)" : "var(--sw-blue)";
  return (
    <span
      className="relative inline-flex h-11 w-11 items-center justify-center font-head font-semibold text-[15px]"
      style={{ color }}
      aria-hidden
    >
      <svg className="absolute inset-0" width="44" height="44" viewBox="0 0 44 44" fill="none">
        <rect
          x="2"
          y="2"
          width="40"
          height="40"
          rx="3"
          stroke={color}
          strokeOpacity="0.5"
          strokeDasharray="3 3"
        />
        {/* corner registration ticks, like a manual diagram */}
        <path d="M2 10 V2 H10" stroke={color} strokeOpacity="0.9" strokeWidth="1.4" />
        <path d="M34 42 H42 V34" stroke={color} strokeOpacity="0.9" strokeWidth="1.4" />
      </svg>
      {n}
    </span>
  );
}

/**
 * Instruction plate — a small plate styled like a step in a construction-kit
 * instruction sheet: dashed border with solid corner registration ticks.
 * e.g. "PART 1 OF 5 · ASSEMBLY TIME: 12 WEEKS".
 */
export function InstructionPlate({
  children,
  tone = "dark",
  className = "",
}: {
  children: React.ReactNode;
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "dark";
  const color = dark ? "var(--sw-mint)" : "var(--sw-blue)";
  const tick = dark ? "rgba(110,247,110,0.75)" : "rgba(63,74,175,0.65)";
  return (
    <span
      className={`relative inline-flex items-center gap-2 px-4 py-2.5 label-code leading-none ${className}`}
      style={{
        color,
        background: dark ? "rgba(110,247,110,0.05)" : "rgba(63,74,175,0.04)",
        border: `1px dashed ${dark ? "rgba(110,247,110,0.4)" : "rgba(63,74,175,0.35)"}`,
      }}
    >
      <span aria-hidden className="absolute -top-px -left-px h-2 w-2 border-t border-l" style={{ borderColor: tick }} />
      <span aria-hidden className="absolute -top-px -right-px h-2 w-2 border-t border-r" style={{ borderColor: tick }} />
      <span aria-hidden className="absolute -bottom-px -left-px h-2 w-2 border-b border-l" style={{ borderColor: tick }} />
      <span aria-hidden className="absolute -bottom-px -right-px h-2 w-2 border-b border-r" style={{ borderColor: tick }} />
      {children}
    </span>
  );
}

/** Small right-pointing assembly arrow between numbered steps. */
export function AssemblyArrow({ tone = "light" }: { tone?: Tone }) {
  const color = accentFor(tone);
  return (
    <svg width="34" height="12" viewBox="0 0 34 12" fill="none" aria-hidden>
      <path
        d="M0 6 H28 M24 2 L29 6 L24 10"
        stroke={color}
        strokeOpacity="0.6"
        strokeWidth="1.4"
        strokeDasharray="3 3"
      />
    </svg>
  );
}
