"use client";

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { AuroraRain } from "@/sections/magento-expedio/AuroraRain";
import { CountUp } from "./CountUp";
import { SectionLabel } from "./SectionLabel";

const STATS: { to: number; decimals: number; unit: string; title: string }[] = [
  { to: 6.4, decimals: 1, unit: "x", title: "Faster response time, all page types" },
  { to: 20, decimals: 0, unit: " ms", title: "Homepage response time" },
  { to: 3, decimals: 0, unit: "x", title: "More traffic on the same server" },
  { to: 3.2, decimals: 1, unit: "x", title: "Faster with all caches empty" },
];

const R = 4;

/** One rounded-rect subpath per card, relative to the grid, for clip-path. */
function cardsPath(grid: HTMLElement) {
  const g = grid.getBoundingClientRect();
  return [...grid.querySelectorAll<HTMLElement>("[data-stat-card]")]
    .map((el) => {
      const b = el.getBoundingClientRect();
      const x = b.left - g.left, y = b.top - g.top, w = b.width, h = b.height;
      return `M${x + R},${y}H${x + w - R}A${R},${R} 0 0 1 ${x + w},${y + R}V${y + h - R}A${R},${R} 0 0 1 ${x + w - R},${y + h}H${x + R}A${R},${R} 0 0 1 ${x},${y + h - R}V${y + R}A${R},${R} 0 0 1 ${x + R},${y}Z`;
    })
    .join("");
}

/**
 * The four benchmark figures on a light section. One aurora canvas (the
 * hero's background) runs behind the whole row, clipped to the four cards,
 * so each card shows its own slice of the same continuous picture. A dark
 * tint inside the cards keeps the type clearly readable.
 */
export function WhatItIs() {
  const grid = useRef<HTMLDivElement>(null);
  const [clip, setClip] = useState<string | null>(null);

  useEffect(() => {
    const el = grid.current!;
    const update = () => setClip(cardsPath(el));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section id="the-product" className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <Reveal>
          <SectionLabel n={3}>The product</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            The same store, <span className="text-[var(--sw-blue)]">at least twice as fast</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[64ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            Expedio speeds up the part of Magento that builds each page, so every page answers faster
            without changing your store, design or data.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 md:mt-14">
          <div ref={grid} className="relative isolate grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 -z-10 bg-[var(--sw-ink)]"
              style={{ clipPath: clip ? `path("${clip}")` : undefined, visibility: clip ? "visible" : "hidden" }}
            >
              <AuroraRain contained density={0.5} />
              <div className="absolute inset-0" style={{ background: "rgba(5,7,15,0.5)" }} />
            </div>

            {STATS.map((s, i) => (
              <div key={s.title} data-stat-card className="rounded-[4px] p-6 md:p-8">
                <div
                  className="font-head font-bold text-[52px] md:text-[60px] leading-none tracking-[-0.04em] whitespace-nowrap"
                  style={{ color: "var(--sw-mint)", textShadow: "0 2px 18px rgba(5,7,15,0.6)" }}
                >
                  <CountUp to={s.to} decimals={s.decimals} delay={i * 70} />
                  {s.unit}
                </div>
                <h3
                  className="mt-6 font-head font-bold text-white text-[19px] md:text-[20px] leading-[1.25] text-balance"
                  style={{ textShadow: "0 1px 12px rgba(5,7,15,0.7)" }}
                >
                  {s.title}
                </h3>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
