"use client";

import { useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { scrollToSection } from "./scrollToSection";

/**
 * What the years ahead cost. Adobe has shipped one platform release a year
 * since 2023 (2.4.6, 2.4.7, 2.4.8, 2.4.9) and security patches through the
 * year. The market figures are the low end of what scandiweb quotes for the
 * same work outside the program: a version upgrade from $15,000, a security
 * patch cycle around $1,000, three patch cycles a year.
 */
const HORIZONS = [3, 5, 10];
const DEFAULT_YEARS = 5;
const RELEASE_FROM = 15000;
const PATCH = 1000;
const PATCHES_A_YEAR = 3;

const LABEL = "label-code text-white/55";
const FIGURE =
  "mt-5 font-head font-bold leading-[0.86] tracking-[-0.04em] tabular-nums text-[72px] sm:text-[104px] md:text-[128px] lg:text-[160px]";
const LINE = "mt-6 text-white/75 text-[17px] md:text-[19px] leading-snug sm:whitespace-nowrap";

/**
 * Pick how long the store stays on Magento. Left: what that many years of
 * upgrades cost at market rate. Right: what they cost with Perpetual. Whatever
 * version the reader runs today, every release ahead of them is the same $0.
 */
export function Future() {
  const [years, setYears] = useState(DEFAULT_YEARS);
  const releases = years;
  const patches = years * PATCHES_A_YEAR;
  const market = releases * RELEASE_FROM + patches * PATCH;

  return (
    <section id="future" className="relative z-10 py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[18ch]">
            Adobe ships a new Magento every year
          </h2>
        </Reveal>

        <Reveal delay={0.08}>
          <div className={`${LABEL} mt-10 md:mt-14 mb-4`}>
            How long will you run your store on Magento?
          </div>
          <div
            role="group"
            aria-label="Years on Magento"
            className="flex flex-wrap gap-2 md:gap-2.5"
          >
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
                      ? "border-white bg-white text-[var(--sw-black)]"
                      : "border-white/25 text-white/75 hover:border-white/60 hover:text-white"
                  }`}
                >
                  {y} years
                </button>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.14}>
          <div className="mt-14 md:mt-20 grid gap-14 lg:gap-12 lg:grid-cols-[1.35fr_1fr]">
            <div aria-live="polite">
              <div className={LABEL}>Next {years} years at market rate</div>
              <div
                className={`${FIGURE} text-white/55 line-through decoration-[6px] md:decoration-[10px]`}
                style={{ textDecorationColor: "rgba(224,79,79,0.85)" }}
              >
                ${market.toLocaleString("en-US")}+
              </div>
              <p className={LINE}>
                {releases} version upgrades and around {patches} security patches,
                each quoted again
              </p>
            </div>

            <div>
              <div className={LABEL}>Next {years} years with Perpetual</div>
              <div
                className={FIGURE}
                style={{
                  color: "var(--sw-mint)",
                  textShadow: "0 0 56px rgba(110,247,110,0.28)",
                }}
              >
                $0
              </div>
              <p className={LINE}>Every release and every patch, included</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-14 md:mt-20">
            <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
              Get free Magento upgrades
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
