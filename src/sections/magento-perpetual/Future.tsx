"use client";

import { useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";
import { scrollToSection } from "./scrollToSection";

/**
 * Adobe has shipped one platform release a year since 2023 (2.4.6, 2.4.7,
 * 2.4.8, 2.4.9) and security patches through the year. The market figures are
 * what scandiweb quotes for the same work outside the program: a version
 * upgrade $15,000 to $35,000, a security patch cycle around $1,000, three
 * patch cycles a year.
 */
const HORIZONS = [1, 2, 3];
const RELEASE = [15000, 35000];
const PATCH = 1000;
const PATCHES_A_YEAR = 3;

const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
const range = (lo: number, hi: number) => `${usd(lo)} to ${usd(hi)}`;

const CELL = "text-[17px] md:text-[19px] leading-[1.3]";
const ROW = `grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr] gap-x-8 gap-y-3 items-baseline ${CELL}`;

/**
 * Pick 1, 2 or 3 years on Magento. The ledger prices those years line by
 * line at the usual agency and with Perpetual, and totals them. One type size
 * for every cell; the columns differ by weight and colour only. The condition
 * sits under the table, in full.
 */
export function Future() {
  const [years, setYears] = useState(1);
  const releases = years;
  const patches = years * PATCHES_A_YEAR;
  const lo = releases * RELEASE[0] + patches * PATCH;
  const hi = releases * RELEASE[1] + patches * PATCH;

  const rows: { key: string; item: string; usual: string; perpetual: string }[] = [
    {
      key: "releases",
      item: releases === 1 ? "1 version upgrade" : `${releases} version upgrades`,
      usual: range(releases * RELEASE[0], releases * RELEASE[1]),
      perpetual: "$0",
    },
    {
      key: "patches",
      item: `${patches} security patches`,
      usual: `Around ${usd(patches * PATCH)}`,
      perpetual: "$0",
    },
    {
      key: "extensions",
      item: "Extension and custom code repair",
      usual: "A change request each time",
      perpetual: "Included",
    },
    {
      key: "seo",
      item: "SEO and Core Web Vitals check",
      usual: "Quoted separately",
      perpetual: "Included",
    },
    {
      key: "who",
      item: "Who does the work",
      usual: "A new team, each time",
      perpetual: "The engineers already on your store",
    },
  ];

  const label = `${years} ${years === 1 ? "year" : "years"}`;

  return (
    <section id="future" className="relative z-10 bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
            Adobe ships a new Magento every year
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="label-code text-[var(--sw-black)]/50 mt-10 md:mt-14 mb-4">
            Years on Magento
          </div>
          <div role="group" aria-label="Years on Magento" className="flex flex-wrap gap-2 md:gap-2.5">
            {HORIZONS.map((y) => {
              const on = y === years;
              return (
                <button
                  key={y}
                  type="button"
                  aria-pressed={on}
                  onClick={() => setYears(y)}
                  className={`h-11 md:h-12 px-4 md:px-5 rounded-[2px] border font-head font-semibold text-[15px] md:text-[17px] tabular-nums transition cursor-pointer ${
                    on
                      ? "border-[var(--sw-black)] bg-[var(--sw-black)] text-white"
                      : "border-[var(--sw-black)]/25 text-[var(--sw-black)]/70 hover:border-[var(--sw-black)]/60 hover:text-[var(--sw-black)]"
                  }`}
                >
                  {y} {y === 1 ? "year" : "years"}
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-12 md:mt-16" aria-live="polite">
          <Reveal>
            <div className="hidden md:grid grid-cols-[1.3fr_1fr_1fr] gap-8 pb-4">
              <div />
              <div className="label-code text-[var(--sw-black)]/50">The usual agency</div>
              <div className="label-code text-[var(--sw-blue)]">With Perpetual</div>
            </div>
          </Reveal>

          {rows.map((r, i) => (
            <Reveal key={r.key} delay={i * 0.06}>
              <div className={`${ROW} py-5 md:py-6 border-t border-[var(--sw-black)]/12`}>
                <div className="col-span-2 md:col-span-1 font-head font-semibold text-[var(--sw-black)] tabular-nums">
                  {r.item}
                </div>
                <div>
                  <div className="md:hidden label-code text-[var(--sw-black)]/50 mb-1.5">
                    The usual agency
                  </div>
                  <div className="font-head text-[var(--sw-black)]/55 tabular-nums">{r.usual}</div>
                </div>
                <div>
                  <div className="md:hidden label-code text-[var(--sw-blue)] mb-1.5">
                    With Perpetual
                  </div>
                  <div className="font-head font-semibold text-[var(--sw-blue)] tabular-nums">
                    {r.perpetual}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className={`${ROW} py-6 md:py-7 border-t-2 border-b border-[var(--sw-black)]/25`}>
              <div className="col-span-2 md:col-span-1 font-head font-bold text-[var(--sw-black)] tabular-nums">
                {label} of upgrades
              </div>
              <div>
                <div className="md:hidden label-code text-[var(--sw-black)]/50 mb-1.5">
                  The usual agency
                </div>
                <div className="font-head font-bold text-[var(--sw-black)] tabular-nums">
                  {range(lo, hi)}
                </div>
              </div>
              <div>
                <div className="md:hidden label-code text-[var(--sw-blue)] mb-1.5">
                  With Perpetual
                </div>
                <div className="font-head font-bold text-[var(--sw-blue)] tabular-nums">$0</div>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 md:mt-20 grid gap-5 md:gap-8 md:grid-cols-[1.3fr_2fr]">
            <h3 className="font-head text-[var(--sw-black)] text-[24px] md:text-[32px] leading-[1.1]">
              The condition
            </h3>
            <p className="max-w-[60ch] text-[var(--sw-black)]/80 text-[17px] md:text-[19px] leading-relaxed">
              Perpetual runs for as long as scandiweb is your development team,
              inside your monthly retainer.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-12 md:mt-16">
            <a href="#cta" onClick={scrollToSection("cta")} className={btnLight}>
              Get free Magento upgrades
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
