"use client";

/** Shared bits for /aeo: eyebrow, headings, body text, colours for light sections. Same system as /akeneo/plus-bundle. */

export const LAVENDER = "#f0f1fa";
export const LINE_LIGHT = "border-[#dfe1f0]";

export function Eyebrow({ children, tone = "blue" }: { children: React.ReactNode; tone?: "blue" | "mint" }) {
  const color = tone === "mint" ? "var(--sw-mint)" : "var(--sw-blue)";
  return (
    <div className="font-head font-bold uppercase text-[12px] tracking-[0.16em]" style={{ color }}>
      {children}
    </div>
  );
}

export const H2_LIGHT =
  "font-head font-bold text-[var(--sw-black)] text-[30px] sm:text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.02em]";
export const H2_DARK =
  "font-head font-bold text-white text-[30px] sm:text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.02em]";
/** Section padding scales with screen height, so every section fits one screen on short laptops too. */
export const SECTION_Y = "py-14 md:py-[clamp(56px,9vh,96px)]";

export const BODY_LIGHT = "text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed";
export const BODY_DARK = "text-white/75 text-[15px] md:text-[17px] leading-relaxed";
