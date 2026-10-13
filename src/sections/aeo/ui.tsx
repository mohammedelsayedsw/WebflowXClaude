"use client";

/** Shared bits for /aeo: page width, eyebrow, headings, colours. Light page on the scandiweb design system. */

import { ArrowUpRight } from "lucide-react";

export const MUTED = "#7e83a0";
export const LINE = "#dadcf1";
export const FOOTNOTE = "#b1b5cf";

export const WRAP = "mx-auto w-[calc(100%-40px)] md:w-[calc(100%-64px)] lg:w-[min(1336px,calc(100%-104px))]";
export const SECTION = "py-16 md:py-[100px]";

export const LINE_LIGHT = "border-[#dadcf1]";
export const LINE_DARK = "border-[#7e83a0]";

export const H2 =
  "font-head font-bold text-[38px] md:text-[clamp(36px,4.2vw,56px)] leading-[1.06] tracking-[-0.035em]";
export const H2_LIGHT = `${H2} text-[var(--sw-black)]`;
export const H2_DARK = `${H2} text-white`;

export const LINK = "underline underline-offset-[5px] hover:opacity-80";

/** Outline buttons as in buttonStyles (blue on light, beige on dark), sized here because the page header needs a smaller one. */
const BTN =
  "inline-flex items-center justify-center gap-4 rounded-[2px] border bg-transparent font-head font-semibold leading-[1.25] transition";
export const BTN_LIGHT = `${BTN} border-[var(--sw-blue)] text-[var(--sw-blue)] hover:bg-[var(--sw-blue)] hover:text-white`;
export const BTN_DARK = `${BTN} border-[var(--sw-beige)] text-[var(--sw-beige)] hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)]`;
export const BTN_SIZE = "min-h-12 px-6 py-3 text-[17px]";

export function Eyebrow({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`mb-6 flex items-center gap-3 text-[14px] font-semibold tracking-[0.02em] ${className}`}>
      <span aria-hidden className="font-head text-[24px] font-bold leading-none text-[var(--sw-red)]">
        +
      </span>
      {children}
    </div>
  );
}

export function Arrow() {
  return <ArrowUpRight aria-hidden className="h-6 w-6 shrink-0" strokeWidth={1.25} />;
}

/** Heading on the left, one paragraph on the right, bottoms aligned. */
export function SectionHead({
  eyebrow,
  title,
  intro,
  dark = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro: string;
  dark?: boolean;
}) {
  return (
    <div className="mb-8 md:mb-12 md:flex md:items-start md:justify-between md:gap-10 lg:items-end lg:gap-16">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className={`${dark ? H2_DARK : H2_LIGHT} max-w-[750px]`}>{title}</h2>
      </div>
      <p className={`mt-6 md:mt-0 max-w-[440px] ${dark ? "text-[#dadcf1]" : ""}`}>{intro}</p>
    </div>
  );
}
