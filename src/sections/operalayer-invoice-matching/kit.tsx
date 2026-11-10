"use client";

import { motion } from "motion/react";

/*
 * Building blocks taken from the OperaLayer app itself (operalayer-demo): the mark,
 * status tags, document chips, callouts, buttons, tabs. Colours come from light.css.
 */

export const EASE = [0.22, 0.7, 0.2, 1] as [number, number, number, number];

export const T = {
  text: "text-[var(--ol-text)]",
  text2: "text-[var(--ol-text2)]",
  text3: "text-[var(--ol-text3)]",
  accent: "text-[var(--ol-accent)]",
  border: "border-[var(--ol-border)]",
  card: "bg-white border border-[var(--ol-border)] rounded-[12px]",
};

export const SECTION_Y = "py-[clamp(64px,10vh,128px)]";
export const H2 = "font-head font-bold text-[var(--ol-text)] text-[34px] sm:text-[40px] lg:text-[48px] leading-[1.06] tracking-[-0.03em] text-balance";
export const LEAD = "text-[var(--ol-text2)] text-[17px] md:text-[18px] leading-[1.6]";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[7px] bg-[var(--ol-accent)] text-white font-head font-semibold text-[16px] shadow-[inset_0_1px_0_rgba(255,255,255,0.22),0_1px_2px_rgba(26,25,23,0.2)] hover:bg-[var(--ol-accent-strong)] transition-colors";
export const btnSecondary =
  "inline-flex items-center justify-center gap-2 h-12 px-6 rounded-[7px] border border-[var(--ol-border-strong)] bg-white text-[var(--ol-text)] font-head font-semibold text-[16px] hover:bg-[var(--ol-s2)] transition-colors";
/** In-app sized buttons, as in the review screen. */
export const uiPrimary =
  "inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-[5px] bg-[var(--ol-accent)] text-white font-body font-semibold text-[13.5px] hover:bg-[var(--ol-accent-strong)] transition-colors";
export const uiSecondary =
  "inline-flex items-center justify-center gap-1.5 h-9 px-3.5 rounded-[5px] border border-[var(--ol-border)] bg-[var(--ol-s2)] text-[var(--ol-text)] font-body font-semibold text-[13.5px] hover:bg-[var(--ol-s3)] transition-colors";

/** In-page links do not scroll on their own in this app (smooth scroll on html, overflow on body), so each link scrolls itself. */
export function scrollToId(id: string, offset = 72) {
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
    <M
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: EASE }}
    >
      {children}
    </M>
  );
}

/** The OperaLayer mark: two bars on a lavender tile. */
export function Mark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 28 28" aria-hidden className="shrink-0">
      <rect width="28" height="28" rx="7" fill="#e4e3fb" />
      <rect x="7" y="9" width="10.5" height="4" rx="2" fill="#5b57e0" />
      <rect x="7" y="15" width="14" height="4" rx="2" fill="#26264d" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`font-body font-semibold tracking-[-0.015em] text-[var(--ol-text)] ${className}`}>
      Opera<span className="text-[var(--ol-accent)]">Layer</span>
    </span>
  );
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="font-head font-semibold text-[15px] text-[var(--ol-accent)]">{children}</div>;
}

/** The coloured part of a headline. */
export function Hi({ children }: { children: React.ReactNode }) {
  return <span className="text-[var(--ol-accent)]">{children}</span>;
}

export type Tone = "crit" | "caution" | "ok" | "info" | "accent" | "neutral";
const TAG: Record<Tone, string> = {
  crit: "text-[var(--ol-crit-strong)] bg-[var(--ol-crit-bg)] border-[var(--ol-crit)]",
  caution: "text-[var(--ol-caution-strong)] bg-[var(--ol-caution-bg)] border-[var(--ol-caution)]",
  ok: "text-[var(--ol-ok-strong)] bg-[var(--ol-ok-bg)] border-[var(--ol-ok)]",
  info: "text-[var(--ol-info-strong)] bg-[var(--ol-info-bg)] border-[var(--ol-info)]",
  accent: "text-[var(--ol-accent-strong)] bg-[var(--ol-accent-bg)] border-[var(--ol-accent-line)]",
  neutral: "text-[var(--ol-text2)] bg-[var(--ol-s2)] border-[var(--ol-border-strong)]",
};

/** Status tag, as in the app's document lists ("Mismatch (1)", "Needs review", "Ready to export"). */
export function Tag({ tone, children, className = "" }: { tone: Tone; children: React.ReactNode; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-1 rounded-[5px] border px-1.5 text-[12px] leading-[19px] font-semibold whitespace-nowrap ${TAG[tone]} ${className}`}>{children}</span>
  );
}

/** A document number, set in mono on a lavender chip ("PO-1048"). */
export function Doc({ children, plain = false }: { children: React.ReactNode; plain?: boolean }) {
  return plain ? (
    <span className="ol-mono text-[0.94em]">{children}</span>
  ) : (
    <span className="ol-mono inline-block rounded-[4px] bg-[var(--ol-accent-bg)] px-1.5 text-[12px] leading-[20px] text-[var(--ol-accent-strong)]">{children}</span>
  );
}

const CALLOUT = {
  caution: { box: "bg-[var(--ol-caution-bg)] border-[var(--ol-caution-line)]", title: "text-[var(--ol-caution-strong)]", body: "text-[#5c4410]" },
  accent: { box: "bg-[var(--ol-accent-bg)] border-[var(--ol-accent-line)]", title: "text-[var(--ol-accent-strong)]", body: "text-[#3d3a73]" },
  info: { box: "bg-[var(--ol-info-bg)] border-[#c5d4f8]", title: "text-[var(--ol-info-strong)]", body: "text-[#2a3f73]" },
};

/** Tinted note, as the app's "Delivery note recorded different values" and "Suggested matches" blocks. */
export function Callout({
  tone,
  icon,
  title,
  children,
  className = "",
}: {
  tone: keyof typeof CALLOUT;
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  const c = CALLOUT[tone];
  return (
    <div className={`rounded-[8px] border p-4 md:p-[18px] ${c.box} ${className}`}>
      <div className={`flex items-center gap-2 font-body font-semibold text-[14px] ${c.title}`}>
        <span className="shrink-0 [&>svg]:h-4 [&>svg]:w-4">{icon}</span>
        {title}
      </div>
      <div className={`mt-1.5 text-[14px] md:text-[14.5px] leading-[1.55] ${c.body}`}>{children}</div>
    </div>
  );
}

export function onTabKeys(e: React.KeyboardEvent, i: number, n: number, set: (k: number) => void, group: string) {
  const order: Record<string, number> = { ArrowRight: (i + 1) % n, ArrowLeft: (i + n - 1) % n, Home: 0, End: n - 1 };
  if (!(e.key in order)) return;
  e.preventDefault();
  set(order[e.key]);
  document.getElementById(`${group}-tab-${order[e.key]}`)?.focus();
}

/** The app's tabs: plain labels on a hairline, the active one underlined in the accent. `progress` fills the underline over that many seconds. */
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
    <div role="tablist" aria-label={label} className={`flex gap-5 sm:gap-7 border-b border-[var(--ol-border)] ${className}`}>
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
          className={`relative -mb-px py-2.5 font-body font-semibold text-[13.5px] sm:text-[14px] leading-[1.25] text-left transition-colors ${
            k === i ? "text-[var(--ol-accent)]" : "text-[var(--ol-text2)] hover:text-[var(--ol-text)]"
          }`}
        >
          {t}
          {k === i &&
            (progress ? (
              <>
                <span className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--ol-accent-line)]" />
                <motion.span
                  key={`${group}-${k}-run`}
                  className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--ol-accent)] origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: progress, ease: "linear" }}
                />
              </>
            ) : (
              <motion.span layoutId={`${group}-line`} className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--ol-accent)]" transition={{ duration: 0.3, ease: EASE }} />
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
          animate={{ opacity: k === i ? 1 : 0, y: k === i ? 0 : 6 }}
          transition={{ duration: 0.3, ease: EASE }}
          className={`[grid-area:1/1] min-w-0 ${k === i ? "" : "invisible pointer-events-none"}`}
        >
          {c}
        </motion.div>
      ))}
    </div>
  );
}

/** A label and a value joined by a dotted rule, as in the app's invoice header. */
export function Row({ k, children, className = "" }: { k: React.ReactNode; children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-baseline gap-3 ${className}`}>
      <span className="text-[var(--ol-text2)]">{k}</span>
      <span aria-hidden className="flex-1 border-b border-dotted border-[var(--ol-border-strong)] translate-y-[-3px]" />
      <span className="text-right">{children}</span>
    </div>
  );
}
