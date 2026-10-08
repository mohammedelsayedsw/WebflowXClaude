"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { AuroraRain } from "@/sections/magento-expedio/AuroraRain";
import { CountUp } from "./CountUp";
import { SectionLabel } from "./SectionLabel";

/**
 * The four benchmark figures, set as the stat strip on /magento/expedio:
 * mint number, white title, thin dividers. Sits on the hero's aurora,
 * thinned and dimmed so the type reads clearly.
 */
const STATS: { to: number; decimals: number; unit: string; title: string }[] = [
  { to: 6.4, decimals: 1, unit: "x", title: "Faster response time, all page types" },
  { to: 20, decimals: 0, unit: " ms", title: "Homepage response time" },
  { to: 3, decimals: 0, unit: "x", title: "More traffic on the same server" },
  { to: 3.2, decimals: 1, unit: "x", title: "Faster with all caches empty" },
];

export function WhatItIs() {
  return (
    <section id="the-product" className="relative isolate bg-[var(--sw-ink)] py-24 md:py-32 overflow-hidden scroll-mt-20">
      <AuroraRain contained density={0.6} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,7,15,0.55) 0%, rgba(5,7,15,0.78) 45%, rgba(5,7,15,0.85) 100%)",
        }}
      />
      <div className="wrap relative z-10">
        <Reveal>
          <SectionLabel n={2} dark>The product</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            The same store, <span style={{ color: "var(--sw-mint)" }}>at least twice as fast</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[64ch] text-white/80 text-[16px] md:text-[18px] leading-relaxed">
            Expedio speeds up the part of Magento that builds each page, so every page answers faster
            without changing your store, design or data.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.title}
              className={`py-8 sm:pr-8 ${i > 0 ? "lg:pl-8 lg:border-l lg:border-white/10" : ""} ${
                i % 2 === 1 ? "sm:pl-8 sm:border-l sm:border-white/10" : ""
              } ${i > 0 ? "max-sm:border-t max-sm:border-white/10" : ""}`}
            >
              <div
                className="font-head font-bold text-[56px] md:text-[64px] leading-none tracking-[-0.04em] whitespace-nowrap"
                style={{ color: "var(--sw-mint)" }}
              >
                <CountUp to={s.to} decimals={s.decimals} delay={i * 70} />
                {s.unit}
              </div>
              <h3 className="mt-6 font-head font-bold text-white text-[20px] md:text-[21px] leading-[1.25] text-balance">
                {s.title}
              </h3>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
