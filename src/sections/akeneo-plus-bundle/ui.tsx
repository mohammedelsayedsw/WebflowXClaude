"use client";

/** Shared bits for /akeneo/plus-bundle (retrigger after #725): eyebrow, section shells, colours for light sections. */

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
  "mt-4 font-head font-bold text-[var(--sw-black)] text-[30px] sm:text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.02em]";
export const H2_DARK =
  "mt-4 font-head font-bold text-white text-[30px] sm:text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.02em]";
export const BODY_LIGHT = "text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed";
export const BODY_DARK = "text-white/75 text-[15px] md:text-[17px] leading-relaxed";
