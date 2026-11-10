"use client";

import { useId } from "react";
import { motion, useReducedMotion } from "motion/react";

/*
 * Shared pieces for the invoice matching page: scandiweb type (Golos Text + Inter), 2px corners,
 * and the OperaLayer logo's three layers, which stand for the three records the product compares.
 */

export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const SECTION_Y = "py-[clamp(72px,11vh,136px)]";
export const H2 = "font-head font-bold text-[34px] sm:text-[40px] lg:text-[48px] leading-[1.08] tracking-[-0.025em] text-balance";
export const LEAD = "font-body text-[17px] md:text-[18px] leading-[1.6]";

export const btn =
  "group inline-flex items-center justify-center gap-2.5 h-14 px-7 rounded-[2px] bg-[var(--blue)] text-white font-head font-semibold text-[17px] hover:bg-[var(--blue-deep)] transition-colors";

/** In-page links do not scroll on their own in this app (smooth scroll on html, overflow on body), so each link scrolls itself. */
export function scrollToId(id: string, offset = 0) {
  return (e: React.MouseEvent<HTMLElement>) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const from = window.scrollY;
    const to = from + target.getBoundingClientRect().top - offset;
    const started = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - started) / 700);
      window.scrollTo({ top: from + (to - from) * (1 - Math.pow(1 - t, 3)), behavior: "instant" });
      if (t < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
    window.history.replaceState(null, "", `#${id}`);
  };
}

export function Reveal({ children, delay = 0, className, as = "div" }: { children: React.ReactNode; delay?: number; className?: string; as?: "div" | "li" }) {
  const M = as === "li" ? motion.li : motion.div;
  return (
    <M className={className} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, delay, ease: EASE }}>
      {children}
    </M>
  );
}

export function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <div className={`font-head font-semibold text-[15px] ${dark ? "text-[var(--peri)]" : "text-[var(--blue)]"}`}>{children}</div>;
}

/** The coloured part of a headline: blue on light, periwinkle on navy. */
export function Hi({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return <span className={dark ? "text-[var(--peri)]" : "text-[var(--blue)]"}>{children}</span>;
}

/* ============================================================
   The OperaLayer logo, drawn as three separate layers so each can move.
   Geometry and colours are measured from the logo file.
   ============================================================ */

const LOGO_W = 642;
const LOGO_H = 618;

/**
 * `lift` pulls the layers apart vertically (0 is the logo as drawn).
 * `slide` moves a layer sideways, `fade` sets its opacity; index 0 is the top ring, 1 the middle, 2 the bottom.
 */
export function Layers({
  lift = 0,
  slide = [0, 0, 0],
  fade = [1, 1, 1],
  room = 0,
  float = false,
  className = "",
  title,
}: {
  lift?: number;
  slide?: number[];
  fade?: number[];
  /** Extra width on the right so a sliding layer is not clipped. */
  room?: number;
  float?: boolean;
  className?: string;
  title?: string;
}) {
  const id = useId().replace(/:/g, "");
  const reduce = useReducedMotion();
  const bob = (n: number) =>
    float && !reduce ? { animate: { y: [0, -5, 0] }, transition: { duration: 6, delay: n * 0.9, repeat: Infinity, ease: "easeInOut" as const } } : {};
  const move = (n: number) => ({
    initial: false as const,
    animate: { x: slide[n] ?? 0, opacity: fade[n] ?? 1 },
    transition: { type: "spring" as const, stiffness: 120, damping: 18 },
  });
  return (
    <svg viewBox={`0 0 ${LOGO_W + room} ${LOGO_H + 2 * lift}`} className={className} role={title ? "img" : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <defs>
        <linearGradient id={`${id}a`} x1="70" y1="300" x2="560" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#30d2ff" />
          <stop offset="0.5" stopColor="#1b6dfe" />
          <stop offset="1" stopColor="#1243fd" />
        </linearGradient>
        <linearGradient id={`${id}b`} x1="10" y1="330" x2="632" y2="300" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5f98f6" />
          <stop offset="1" stopColor="#a374fd" />
        </linearGradient>
        <linearGradient id={`${id}c`} x1="30" y1="520" x2="620" y2="400" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#5cfadb" />
          <stop offset="0.55" stopColor="#96f6ea" />
          <stop offset="1" stopColor="#b8c0fb" />
        </linearGradient>
        <linearGradient id={`${id}d`} x1="149" y1="330" x2="493" y2="330" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#b4bcfb" />
          <stop offset="1" stopColor="#a9a2fb" />
        </linearGradient>
        {/* the ring's opening goes through the whole stack, as in the logo */}
        <mask id={`${id}m`} maskUnits="userSpaceOnUse" x="0" y="0" width={LOGO_W + room} height={LOGO_H + 2 * lift}>
          <rect width={LOGO_W + room} height={LOGO_H + 2 * lift} fill="#fff" />
          {lift === 0 && <ellipse cx="321" cy="219" rx="172" ry="88" fill="#000" />}
        </mask>
      </defs>
      <g mask={`url(#${id}m)`}>
      {/* bottom layer */}
      <motion.g {...move(2)}>
        <motion.g {...bob(2)}>
          <ellipse cx="321" cy={441 + 2 * lift} rx="312" ry="168" fill={`url(#${id}c)`} />
        </motion.g>
      </motion.g>
      {/* middle layer */}
      <motion.g {...move(1)}>
        <motion.g {...bob(1)}>
          <ellipse cx="321" cy={311 + lift} rx="312" ry="160" fill={`url(#${id}b)`} fillOpacity="0.9" />
        </motion.g>
      </motion.g>
      {/* the core that runs down from the ring's opening */}
      <path
        d={`M149 219 L149 ${372 + (lift ? 2 * lift + 20 : 0)} A172 ${lift ? 88 : 70} 0 0 0 493 ${372 + (lift ? 2 * lift + 20 : 0)} L493 219 Z`}
        fill={`url(#${id}d)`}
        fillOpacity={lift ? 0.3 : 0.85}
      />
      </g>
      {/* top ring */}
      <motion.g {...move(0)}>
        <motion.g {...bob(0)}>
          <path
            fillRule="evenodd"
            fill={`url(#${id}a)`}
            d="M13 171 A308 163 0 1 0 629 171 A308 163 0 1 0 13 171 Z M149 219 A172 88 0 1 1 493 219 A172 88 0 1 1 149 219 Z"
          />
        </motion.g>
      </motion.g>
    </svg>
  );
}

/** Where each layer's centre sits, as a share of the drawing's height, for labels placed beside it. */
export function layerY(lift: number) {
  const h = LOGO_H + 2 * lift;
  return [171 / h, (311 + lift) / h, (441 + 2 * lift) / h];
}
export const layerRatio = (lift: number, room = 0) => (LOGO_W + room) / (LOGO_H + 2 * lift);

/* ============================================================
   Tabs and panels
   ============================================================ */

export function onTabKeys(e: React.KeyboardEvent, i: number, n: number, set: (k: number) => void, group: string) {
  const order: Record<string, number> = { ArrowRight: (i + 1) % n, ArrowLeft: (i + n - 1) % n, Home: 0, End: n - 1 };
  if (!(e.key in order)) return;
  e.preventDefault();
  set(order[e.key]);
  document.getElementById(`${group}-tab-${order[e.key]}`)?.focus();
}

/** Text tabs on a hairline; the active one is blue with a 2px rule. `progress` fills the rule over that many seconds. */
export function Tabs({
  items,
  i,
  set,
  group,
  label,
  progress,
  className = "",
}: {
  items: string[];
  i: number;
  set: (k: number) => void;
  group: string;
  label: string;
  progress?: number;
  className?: string;
}) {
  return (
    <div role="tablist" aria-label={label} className={`flex gap-6 sm:gap-9 border-b border-[var(--line)] ${className}`}>
      {items.map((t, k) => (
        <button
          key={t}
          id={`${group}-tab-${k}`}
          role="tab"
          aria-selected={k === i}
          aria-controls={`${group}-panel-${k}`}
          tabIndex={k === i ? 0 : -1}
          onClick={() => set(k)}
          onKeyDown={(e) => onTabKeys(e, k, items.length, set, group)}
          className={`relative -mb-px pb-3 pt-1 font-head font-semibold text-[15px] sm:text-[16px] leading-[1.25] text-left transition-colors ${
            k === i ? "text-[var(--blue)]" : "text-[var(--ink)]/55 hover:text-[var(--ink)]"
          }`}
        >
          {t}
          {k === i &&
            (progress ? (
              <motion.span
                key={`${group}-${k}-run`}
                className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--blue)] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: progress, ease: "linear" }}
              />
            ) : (
              <motion.span layoutId={`${group}-line`} className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--blue)]" transition={{ duration: 0.35, ease: EASE }} />
            ))}
        </button>
      ))}
    </div>
  );
}

/** Every panel sits in the same grid cell, so switching never changes the height of the page. */
export function Panels({ i, group, children }: { i: number; group: string; children: React.ReactNode[] }) {
  return (
    <div className="grid">
      {children.map((c, k) => (
        <motion.div
          key={k}
          id={`${group}-panel-${k}`}
          role="tabpanel"
          aria-labelledby={`${group}-tab-${k}`}
          aria-hidden={k !== i}
          initial={false}
          animate={{ opacity: k === i ? 1 : 0, y: k === i ? 0 : 8 }}
          transition={{ duration: 0.35, ease: EASE }}
          className={`[grid-area:1/1] min-w-0 ${k === i ? "" : "invisible pointer-events-none"}`}
        >
          {c}
        </motion.div>
      ))}
    </div>
  );
}

/** A small dot in a layer's colour, to mark which record a row belongs to. */
export function Dot({ layer }: { layer: "inv" | "rec" | "po" }) {
  const c = { inv: "var(--l-inv)", rec: "var(--l-rec)", po: "var(--l-po)" }[layer];
  return <span aria-hidden className="inline-block h-[9px] w-[18px] rounded-[50%] shrink-0" style={{ background: c }} />;
}
