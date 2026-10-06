"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Calculator } from "./Calculator";
import { calculate, periodLabel, useSavings } from "./Savings";
import { scrollToId } from "./scrollTo";
import { ANNUAL_SERVICE_PRICE, MIGRATION_PRICE } from "./status";
import { Eyebrow } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function Hero() {
  const { licence, years, money } = useSavings();
  const r = calculate(licence, years);
  const positive = r.netSaving > 0;

  return (
    <section id="hero" className="relative z-10 -mt-[60px] md:-mt-[75px] bg-[var(--sw-black)]">
      <div className="wrap pt-36 md:pt-[150px] pb-16 md:pb-20 grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] items-start">
        <div className="lg:pt-6">
          <motion.div {...enter(0.1)}>
            <Eyebrow tone="mint">Akeneo Plus Bundle</Eyebrow>
          </motion.div>
          <motion.h1
            {...enter(0.2)}
            className="mt-6 font-head font-bold text-white text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.02] tracking-[-0.03em]"
          >
            <span className="inline-block whitespace-nowrap">Cut Your Akeneo</span>{" "}
            <span className="inline-block whitespace-nowrap" style={{ color: "var(--sw-mint)" }}>
              License Costs
            </span>
          </motion.h1>
          <motion.p {...enter(0.3)} className="mt-6 text-white/80 text-[17px] md:text-[19px] leading-relaxed max-w-[52ch]">
            Move from licensed Akeneo to Community Edition with the <strong className="text-white">Akeneo Plus Bundle</strong>.
            Your team keeps its features and workflows. scandiweb runs the system for a fixed yearly price.
          </motion.p>
          <motion.ul {...enter(0.35)} className="mt-6 flex flex-wrap gap-x-7 gap-y-2">
            {["No Akeneo license fee", "You own the system and data"].map((t) => (
              <li key={t} className="flex items-center gap-2 font-head font-semibold text-white text-[16px]">
                <Check aria-hidden className="h-5 w-5" style={{ color: "var(--sw-mint)" }} strokeWidth={3} />
                {t}
              </li>
            ))}
          </motion.ul>

          <motion.div {...enter(0.45)} className="mt-10" aria-live="polite">
            <p className="font-head font-bold text-white text-[32px] md:text-[40px] leading-none tracking-[-0.02em]">
              {positive ? "Save " : "Extra cost "}
              <span style={{ color: positive ? "var(--sw-mint)" : "var(--sw-orange)" }}>
                {money(Math.abs(r.netSaving))}
              </span>
            </p>
            <p className="mt-2 text-white text-[18px]">over {periodLabel(years)}</p>
            <p className="mt-3 text-white/60 text-[14px] leading-relaxed max-w-[48ch]">
              At a {money(licence)} annual license fee, after the {money(MIGRATION_PRICE)} migration and{" "}
              {money(ANNUAL_SERVICE_PRICE)} a year for the service
            </p>
          </motion.div>

          <motion.div {...enter(0.55)} className="mt-8">
            <a href="#cta" onClick={scrollToId("cta")} className={`${btnPrimary} h-auto min-h-12 py-3`}>
              Get my free savings assessment
            </a>
          </motion.div>
        </div>

        <motion.div {...enter(0.3)}>
          <Calculator />
        </motion.div>
      </div>

      <div className="border-t border-white/10">
        <div className="wrap py-5 flex flex-wrap items-center justify-center md:justify-end gap-x-3 gap-y-1 text-white/70 text-[14px]">
          <span>Akeneo Community Edition</span>
          <span aria-hidden className="text-white/35">+</span>
          <span>Akeneo Plus Bundle</span>
          <span aria-hidden className="text-white/35">+</span>
          <span>hosting and maintenance by scandiweb</span>
        </div>
      </div>
    </section>
  );
}
