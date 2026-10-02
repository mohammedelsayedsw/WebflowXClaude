"use client";

import { motion } from "motion/react";
import { Check, X } from "lucide-react";

/**
 * OperaLayer's interface, drawn in scandiweb's palette for the marketing pages:
 * ink panels, hairlines, mint when a line agrees, orange when a person has to
 * look, beige for actions. Corners stay at 2 to 4 px like the rest of the site.
 */
export const C = {
  ink: "#05070f",
  panel: "#0b0e1d",
  panel2: "#111531",
  line: "rgba(255,255,255,0.09)",
  text: "#f2f2f7",
  dim: "rgba(242,242,247,0.6)",
  faint: "rgba(242,242,247,0.38)",
  mint: "#6ef76e",
  orange: "#ff5a31",
  blue: "#7b86e8",
  beige: "#f8f4ef",
  grey: "#8a90ad",
};

export const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Mark({ size = 1 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2 font-semibold tracking-[-0.01em]" style={{ fontSize: `${size}em`, color: C.text }}>
      <span className="inline-flex flex-col justify-center gap-[3px] px-[4px] rounded-[2px]" style={{ width: "1.45em", height: "1.45em", background: "#1a1f45" }}>
        <span className="block h-[2px]" style={{ background: C.mint }} />
        <span className="block h-[2px] bg-white/70" />
      </span>
      OperaLayer
    </span>
  );
}

/** App window. Content sizes scale with the window through `em`. */
export function Window({
  children,
  title,
  className = "",
}: {
  children: React.ReactNode;
  title?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[4px] ${className}`}
      style={{
        background: C.panel,
        color: C.text,
        boxShadow: "0 0 0 1px rgba(255,255,255,0.1), 0 50px 120px -40px rgba(0,0,0,0.9), 0 0 80px -30px rgba(63,74,175,0.45)",
      }}
    >
      <div className="flex items-center gap-3 px-[1.2em] h-[2.6em] border-b" style={{ borderColor: C.line, background: "#080b18" }}>
        <span className="flex gap-[0.4em]">
          {[0, 1, 2].map((i) => (
            <span key={i} className="h-[0.6em] w-[0.6em] rounded-full bg-white/[0.12]" />
          ))}
        </span>
        {title && (
          <span className="mx-auto truncate" style={{ color: C.faint, fontSize: "0.85em" }}>
            {title}
          </span>
        )}
        <span className="w-[2.6em]" />
      </div>
      {children}
    </div>
  );
}

export function Tag({ tone, children }: { tone: "mint" | "orange" | "blue" | "dim"; children: React.ReactNode }) {
  const c = tone === "dim" ? C.faint : C[tone];
  return (
    <span
      className="inline-flex items-center gap-1 rounded-[2px] px-[0.55em] py-[0.15em] whitespace-nowrap font-medium"
      style={{ fontSize: "0.82em", color: c, boxShadow: `inset 0 0 0 1px ${c}55`, background: `${c}14` }}
    >
      {children}
    </span>
  );
}

export function Tick({ on, bad = false }: { on: boolean; bad?: boolean }) {
  const c = bad ? C.orange : C.mint;
  const Icon = bad ? X : Check;
  return (
    <motion.span
      className="inline-flex items-center justify-center rounded-[2px] shrink-0"
      style={{ width: "1.45em", height: "1.45em" }}
      initial={false}
      animate={{ backgroundColor: on ? c : "rgba(255,255,255,0.07)", scale: on ? [0.7, 1.1, 1] : 1 }}
      transition={{ duration: 0.4, ease }}
    >
      <Icon style={{ width: "0.95em", height: "0.95em", color: on ? C.ink : "transparent" }} strokeWidth={3.2} />
    </motion.span>
  );
}

/** Action button inside the drawn app. */
export function AppButton({ state, idle, busy, done }: { state: 0 | 1 | 2; idle: string; busy: string; done: string }) {
  return (
    <motion.span
      className="inline-flex items-center gap-[0.4em] rounded-[2px] px-[1em] py-[0.55em] font-semibold whitespace-nowrap"
      initial={false}
      animate={{
        backgroundColor: state === 2 ? C.mint : state === 1 ? C.beige : "rgba(255,255,255,0.06)",
        color: state === 0 ? C.faint : C.ink,
      }}
      transition={{ duration: 0.35 }}
    >
      {state === 2 && <Check style={{ width: "1em", height: "1em" }} strokeWidth={3} />}
      {state === 2 ? done : state === 1 ? busy : idle}
    </motion.span>
  );
}
