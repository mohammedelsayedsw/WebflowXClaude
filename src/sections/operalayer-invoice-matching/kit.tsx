"use client";

import { useId, useRef, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/*
 * Page-level pieces: type scale, buttons, reveal, the stage that product screens sit on, the logo.
 */

export const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

export const SECTION_Y = "py-14 md:py-[clamp(64px,10vh,128px)]";
export const H2 = "font-head font-bold text-[var(--ink)] text-[30px] sm:text-[42px] lg:text-[52px] leading-[1.08] tracking-[-0.03em] text-balance";
export const LEAD = "font-body text-[var(--t2)] text-[16px] md:text-[19px] leading-[1.55]";

export const btn =
  "group inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-[2px] bg-[var(--accent)] text-white font-head font-semibold text-[16px] hover:bg-[var(--accent-deep)] transition-colors";
export const btnGhost =
  "group inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-[2px] border border-[#cfd3e3] bg-white text-[var(--ink)] font-head font-semibold text-[16px] hover:border-[var(--ink)] transition-colors";

/** In-page links do not scroll on their own in this app (smooth scroll on html, overflow on body), so each link scrolls itself. */
export function scrollToId(id: string, offset = 68) {
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
    <M className={className} initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.8, delay, ease: EASE }}>
      {children}
    </M>
  );
}

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <div className={`font-head font-semibold text-[15px] ${light ? "text-white/80" : "text-[var(--accent)]"}`}>{children}</div>;
}

/** The coloured part of a headline. */
export function Hi({ children }: { children: React.ReactNode }) {
  return <span className="text-[var(--accent)]">{children}</span>;
}

/** The ground a product screen sits on: the logo's blue, violet and mint. */
export function Stage({ children, soft = false, className = "" }: { children: React.ReactNode; soft?: boolean; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2px] ${className}`} style={{ background: soft ? "var(--stage-soft)" : "var(--stage)" }}>
      {!soft && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(60% 90% at 12% 0%, rgba(255,255,255,0.22), transparent 60%), radial-gradient(50% 80% at 100% 100%, rgba(255,255,255,0.18), transparent 60%)" }}
        />
      )}
      <div className="relative">{children}</div>
    </div>
  );
}

/** The OperaLayer logo, redrawn from the logo file. */
export function Logo({ className = "" }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 642 618" className={className} aria-hidden>
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
        <mask id={`${id}m`} maskUnits="userSpaceOnUse" x="0" y="0" width="642" height="618">
          <rect width="642" height="618" fill="#fff" />
          <ellipse cx="321" cy="219" rx="172" ry="88" fill="#000" />
        </mask>
      </defs>
      <g mask={`url(#${id}m)`}>
        <ellipse cx="321" cy="441" rx="312" ry="168" fill={`url(#${id}c)`} />
        <ellipse cx="321" cy="311" rx="312" ry="160" fill={`url(#${id}b)`} fillOpacity="0.9" />
        <path d="M149 219 L149 372 A172 70 0 0 0 493 372 L493 219 Z" fill={`url(#${id}d)`} fillOpacity="0.85" />
      </g>
      <path fillRule="evenodd" fill={`url(#${id}a)`} d="M13 171 A308 163 0 1 0 629 171 A308 163 0 1 0 13 171 Z M149 219 A172 88 0 1 1 493 219 A172 88 0 1 1 149 219 Z" />
    </svg>
  );
}

/** Every panel sits in the same grid cell, so switching never changes the height of the page. */
export function Panels({ i, group, children, className = "", collapse = false }: { i: number; group: string; children: React.ReactNode[]; className?: string; collapse?: boolean }) {
  return (
    <div className={`grid ${className}`}>
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
          className={`[grid-area:1/1] min-w-0 ${k === i ? "" : `invisible pointer-events-none ${collapse ? "max-md:hidden" : ""}`}`}
        >
          {c}
        </motion.div>
      ))}
    </div>
  );
}

export function onTabKeys(e: React.KeyboardEvent, i: number, n: number, set: (k: number) => void, group: string, vertical = false) {
  const next = vertical ? "ArrowDown" : "ArrowRight";
  const prev = vertical ? "ArrowUp" : "ArrowLeft";
  const order: Record<string, number> = { [next]: (i + 1) % n, [prev]: (i + n - 1) % n, Home: 0, End: n - 1 };
  if (!(e.key in order)) return;
  e.preventDefault();
  set(order[e.key]);
  document.getElementById(`${group}-tab-${order[e.key]}`)?.focus();
}

/**
 * A set of cards. From tablets up it is whatever grid `className` describes. On phones it is one row that scrolls
 * sideways: the next card peeks in from the right, and dots and arrows underneath show where you are.
 * `until="lg"` keeps the row on tablets as well, for sets whose columns would be too narrow there.
 */
export function Swipe({
  items,
  className = "",
  itemClassName = "",
  label,
  light = false,
  inset = false,
  until = "md",
}: {
  items: React.ReactNode[];
  /** Layout from md up, e.g. "md:grid md:grid-cols-3 md:gap-5". */
  className?: string;
  itemClassName?: string;
  label: string;
  /** On a dark or coloured ground. */
  light?: boolean;
  /** Inside a padded panel instead of the page gutter. */
  inset?: boolean;
  /** The width at which the row becomes the grid. */
  until?: "md" | "lg";
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [i, setI] = useState(0);
  const onScroll = () => {
    const el = ref.current;
    if (!el) return;
    const mid = el.scrollLeft + el.clientWidth / 2;
    let best = 0;
    let dist = Infinity;
    ([...el.children] as HTMLElement[]).forEach((k, n) => {
      const d = Math.abs(k.offsetLeft + k.offsetWidth / 2 - mid);
      if (d < dist) {
        dist = d;
        best = n;
      }
    });
    /* the last card cannot reach the middle, so the end of the row counts as the last card */
    if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 4) best = items.length - 1;
    setI(best);
  };
  const go = (n: number) => {
    const el = ref.current;
    const k = el?.children[Math.max(0, Math.min(items.length - 1, n))] as HTMLElement | undefined;
    if (el && k) el.scrollTo({ left: k.offsetLeft - parseFloat(getComputedStyle(el).paddingLeft || "0"), behavior: "smooth" });
  };
  const arrow = `h-10 w-10 flex items-center justify-center rounded-[2px] border transition-opacity disabled:opacity-30 ${
    light ? "border-white/45 text-white" : "border-[#cfd3e3] text-[var(--ink)] bg-white"
  }`;
  const at =
    until === "lg"
      ? { row: "ol-swipe-lg max-lg:flex max-lg:gap-3", item: "max-lg:shrink-0 max-lg:w-[84%] sm:max-lg:w-[46%]", controls: "lg:hidden" }
      : { row: "max-md:flex max-md:gap-3", item: "max-md:shrink-0 max-md:w-[84%] sm:max-md:w-[46%]", controls: "md:hidden" };
  return (
    <div>
      <div ref={ref} onScroll={onScroll} role="group" aria-label={label} className={`ol-swipe ${inset ? "ol-swipe-in" : ""} relative ${at.row} ${className}`}>
        {items.map((c, n) => (
          <div key={n} className={`${at.item} min-w-0 ${itemClassName}`}>
            {c}
          </div>
        ))}
      </div>
      <div className={`${at.controls} mt-4 flex items-center justify-between gap-4`}>
        <div className="flex items-center gap-1.5" aria-hidden>
          {items.map((_, n) => (
            <span
              key={n}
              className={`h-[5px] rounded-[1px] transition-all duration-300 ${n === i ? `w-7 ${light ? "bg-white" : "bg-[var(--accent)]"}` : `w-[5px] ${light ? "bg-white/40" : "bg-[#c5c9dc]"}`}`}
            />
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Previous" disabled={i === 0} onClick={() => go(i - 1)} className={arrow}>
            <ChevronLeft aria-hidden className="h-[18px] w-[18px]" />
          </button>
          <button type="button" aria-label="Next" disabled={i === items.length - 1} onClick={() => go(i + 1)} className={arrow}>
            <ChevronRight aria-hidden className="h-[18px] w-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
