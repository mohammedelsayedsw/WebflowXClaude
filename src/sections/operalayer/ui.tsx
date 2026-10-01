"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";

/**
 * A small kit for drawing OperaLayer's own interface on the marketing pages.
 * Colours follow the real app: near-black panels, violet actions, mint for
 * "agrees", coral for "needs a person".
 */
export const OL = {
  bg: "#0f1014",
  panel: "#16171d",
  line: "rgba(255,255,255,0.08)",
  text: "#ececf1",
  dim: "rgba(236,236,241,0.55)",
  faint: "rgba(236,236,241,0.35)",
  violet: "#7c6cf6",
  mint: "#4ade80",
  coral: "#f87171",
  amber: "#fbbf24",
};

export const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Logo({ size = 1 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2" style={{ fontSize: `${size}em` }}>
      <span
        className="inline-flex flex-col justify-center gap-[3px] rounded-[6px] px-[5px]"
        style={{ width: "1.6em", height: "1.6em", background: "linear-gradient(135deg,#3b3a63,#26253f)" }}
      >
        <span className="block h-[3px] rounded-full" style={{ background: OL.violet }} />
        <span className="block h-[3px] rounded-full bg-white/70" />
      </span>
      <span className="font-semibold tracking-[-0.01em]" style={{ color: OL.text }}>
        Opera<span style={{ color: OL.violet }}>Layer</span>
      </span>
    </span>
  );
}

/** App window with OperaLayer's chrome. */
export function Window({
  children,
  title,
  className = "",
  style,
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[10px] ${className}`}
      style={{
        background: OL.bg,
        color: OL.text,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.07), 0 40px 100px -30px rgba(16,19,44,0.55), 0 12px 30px -12px rgba(16,19,44,0.35)",
        ...style,
      }}
    >
      <div className="flex items-center gap-3 px-4 h-9 border-b" style={{ borderColor: OL.line, background: OL.panel }}>
        <span className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
        </span>
        {title && (
          <span className="mx-auto text-[11px] tracking-[0.01em]" style={{ color: OL.faint }}>
            {title}
          </span>
        )}
        <span className="w-[42px]" />
      </div>
      {children}
    </div>
  );
}

export function Pill({ tone, children }: { tone: "mint" | "coral" | "amber" | "violet" | "dim"; children: React.ReactNode }) {
  const c = tone === "dim" ? OL.dim : OL[tone];
  return (
    <span
      className="inline-flex items-center gap-1 rounded-full px-2 py-[2px] whitespace-nowrap font-medium"
      style={{ fontSize: "0.82em", color: c, background: `color-mix(in srgb, ${c} 13%, transparent)`, boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${c} 28%, transparent)` }}
    >
      {children}
    </span>
  );
}

export function Tick({ on, delay = 0 }: { on: boolean; delay?: number }) {
  return (
    <motion.span
      className="inline-flex items-center justify-center rounded-full shrink-0"
      style={{ width: "1.5em", height: "1.5em" }}
      initial={false}
      animate={{ backgroundColor: on ? OL.mint : "rgba(255,255,255,0.07)", scale: on ? [0.7, 1.12, 1] : 1 }}
      transition={{ duration: 0.45, delay, ease }}
    >
      <Check style={{ width: "0.9em", height: "0.9em", color: on ? "#0f1014" : "transparent" }} strokeWidth={3.2} />
    </motion.span>
  );
}

/** Section heading used across the page: one line, optional lede. */
export function SectionHead({
  title,
  lede,
  dark = false,
  center = false,
}: {
  title: React.ReactNode;
  lede?: string;
  dark?: boolean;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center mx-auto" : ""}>
      <h2
        className={`font-head text-[34px] md:text-[48px] leading-[1.05] tracking-[-0.02em] text-balance ${
          center ? "mx-auto max-w-[20ch]" : "max-w-[20ch]"
        } ${dark ? "text-white" : "text-[var(--sw-black)]"}`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-[17px] md:text-[19px] leading-relaxed max-w-[54ch] ${center ? "mx-auto" : ""} ${
            dark ? "text-white/65" : "text-[var(--sw-black)]/65"
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  );
}
