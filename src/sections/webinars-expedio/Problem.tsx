"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "./SectionLabel";

/*
 * The chart is illustrative, not data: no numbers on either axis. The SVG
 * draws only the axes and lines; every label is HTML placed in percent of the
 * same 2:1 box, so the text stays readable on a phone when the SVG scales down.
 */
const W = 800;
const H = 340;
const MAGENTO = "M40,280 C 260,278 430,270 520,240 C 610,208 680,128 760,36";
const EXPEDIO = "M40,300 C 300,299 560,296 680,289 C 720,286 745,280 760,271";

const pct = (x: number, y: number) => ({ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` });

export function Problem() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReduce(true);
      setDrawn(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        setDrawn(true);
      },
      { threshold: 0.5 },
    );
    io.observe(ref.current!);
    return () => io.disconnect();
  }, []);

  /* Orange first (0 to 1.6s), then green (1.8 to 3s). Labels follow their line. */
  const line = (delay: number, duration: number): React.CSSProperties =>
    reduce
      ? {}
      : {
          strokeDasharray: 1,
          strokeDashoffset: drawn ? 0 : 1,
          // hidden until its own draw starts: a round cap on the hidden dash still paints a dot
          opacity: drawn ? 1 : 0,
          transition: `stroke-dashoffset ${duration}s cubic-bezier(0.65, 0, 0.35, 1) ${delay}s, opacity 0s linear ${delay}s`,
        };
  const label = (delay: number): React.CSSProperties =>
    reduce ? {} : { opacity: drawn ? 1 : 0, transition: `opacity 0.5s ease ${delay}s` };

  return (
    <section id="the-problem" className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-14 lg:items-center">
        <div>
        <Reveal>
          <SectionLabel n={2} dark>The problem</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[42px] leading-[1.05] tracking-[-0.01em] max-w-[24ch]">
            Your Magento store <span style={{ color: "var(--sw-orange)" }}>slows down</span> when shoppers
            need it most
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[64ch] text-white/75 text-[16px] md:text-[18px] leading-relaxed">
            Every page is built on your server before a shopper sees it, and when traffic rises during a sale
            or a campaign, every shopper waits longer.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-6 md:mt-8 font-head font-semibold text-[18px] md:text-[21px] leading-snug" style={{ color: "var(--sw-mint)" }}>
            We built Expedio to fix exactly this.
          </p>
        </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="rounded-[4px] border border-white/10 bg-white/[0.03] px-3 pt-5 pb-9 sm:px-6 sm:pt-6 sm:pb-11">
            <div ref={ref} className="relative w-full max-w-[600px] mx-auto" style={{ aspectRatio: `${W} / ${H}` }}>
              <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full overflow-visible" aria-hidden>
                <defs>
                  <marker id="exp-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                    <path d="M0,0 L10,5 L0,10 z" fill="rgba(255,255,255,0.45)" />
                  </marker>
                </defs>
                {/* axes */}
                <path d={`M40,${H - 10} V10`} stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" markerEnd="url(#exp-arrow)" vectorEffect="non-scaling-stroke" />
                <path d={`M40,${H - 10} H${W - 10}`} stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" fill="none" markerEnd="url(#exp-arrow)" vectorEffect="non-scaling-stroke" />
                {/* lines */}
                <path d={MAGENTO} pathLength={1} stroke="var(--sw-orange)" strokeWidth="4" strokeLinecap="round" fill="none" style={line(0, 1.6)} />
                <path d={EXPEDIO} pathLength={1} stroke="var(--sw-mint)" strokeWidth="4" strokeLinecap="round" fill="none" style={line(1.8, 1.2)} />
                {/* leader from the annotation to the steep part */}
                <path d="M598,160 L634,160" stroke="rgba(255,90,49,0.6)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" style={label(1.2)} />
              </svg>

              {/* line labels */}
              <span
                className="absolute -translate-x-full -translate-y-1/2 pr-3 font-head font-semibold text-[12px] sm:text-[15px] whitespace-nowrap"
                style={{ ...pct(752, 36), color: "var(--sw-orange)", ...label(1.4) }}
              >
                Stock Magento
              </span>
              <span
                className="absolute -translate-x-full -translate-y-full pb-2 font-head font-semibold text-[12px] sm:text-[15px] whitespace-nowrap"
                style={{ ...pct(760, 268), color: "var(--sw-mint)", ...label(2.9) }}
              >
                With Expedio
              </span>
              {/* annotation at the steep part */}
              <span
                className="absolute -translate-x-full -translate-y-1/2 pr-1 text-white/70 text-[11px] sm:text-[13px] whitespace-nowrap"
                style={{ ...pct(594, 160), ...label(1.2) }}
              >
                Sales, campaigns, peak season
              </span>

              {/* axis labels */}
              <span
                className="absolute right-0 translate-y-2 sm:translate-y-3 text-white/55 text-[11px] sm:text-[13px] uppercase tracking-[0.08em] whitespace-nowrap"
                style={{ top: "100%" }}
              >
                Shoppers on your store
              </span>
              <span
                className="absolute translate-x-3 -translate-y-1 text-white/55 text-[11px] sm:text-[13px] uppercase tracking-[0.08em] whitespace-nowrap"
                style={pct(40, 10)}
              >
                Time to load a page
              </span>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
