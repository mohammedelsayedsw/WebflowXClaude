"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { CountUp } from "./CountUp";
import { SectionLabel } from "./SectionLabel";

/**
 * The four benchmark figures. The cards are dark on the light section so the
 * mint numbers keep their contrast; mint on white does not read.
 */
const STATS: { to: number; decimals: number; unit: string; body: string }[] = [
  { to: 6.4, decimals: 1, unit: "x", body: "Faster response time across the eight page types tested, at peak traffic" },
  { to: 20, decimals: 0, unit: " ms", body: "Homepage response at peak traffic, compared with 519 ms on stock Magento on the same server" },
  { to: 3, decimals: 0, unit: "x", body: "More traffic handled on the same server" },
  { to: 3.2, decimals: 1, unit: "x", body: "Faster with all caches empty" },
];

export function WhatItIs() {
  return (
    <section id="the-product" className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <Reveal>
          <SectionLabel n={2}>The product</SectionLabel>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            The same store,{" "}
            <span className="text-[var(--sw-blue)]">at least twice as fast</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[64ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            Expedio speeds up the part of Magento that builds each page, so every page answers faster
            without changing your store, design or data.
          </p>
        </Reveal>

        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.body} delay={i * 0.07} className="h-full">
              <li className="flex h-full flex-col rounded-[4px] bg-[var(--sw-black)] p-6 md:p-7">
                <div
                  className="font-head font-bold text-[48px] md:text-[56px] leading-none tracking-[-0.03em]"
                  style={{ color: "var(--sw-mint)" }}
                >
                  <CountUp to={s.to} decimals={s.decimals} />
                  <span className={s.unit.startsWith(" ") ? "text-[0.5em] ml-1" : ""}>{s.unit.trim()}</span>
                </div>
                <p className="mt-4 text-white/75 text-[14px] md:text-[15px] leading-relaxed">{s.body}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.3}>
          <p className="mt-5 text-[var(--sw-black)]/50 text-[13px] md:text-[14px]">
            Measured with no page cache. Full results are on the{" "}
            <a href="/solutions/magento/expedio#benchmark" className="underline underline-offset-2 hover:text-[var(--sw-black)]">
              Expedio page
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
