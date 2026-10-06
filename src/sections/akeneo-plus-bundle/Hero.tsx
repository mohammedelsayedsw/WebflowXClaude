"use client";

import { motion } from "motion/react";
import { Check } from "lucide-react";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Calculator } from "./Calculator";
import { scrollToId } from "./scrollTo";
import { Eyebrow } from "./ui";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

/** Headline, one line, two facts, one button. The numbers live in the calculator beside it. */
export function Hero() {
  return (
    <section id="hero" className="relative z-10 -mt-[60px] md:-mt-[75px] bg-[var(--sw-black)]">
      <div className="wrap pt-32 md:pt-[150px] pb-12 md:pb-20 grid gap-10 lg:gap-16 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] items-start">
        <div className="lg:pt-20">
          <motion.div {...enter(0.1)}>
            <Eyebrow tone="mint">Akeneo Plus Bundle</Eyebrow>
          </motion.div>
          <motion.h1
            {...enter(0.2)}
            className="mt-5 font-head font-bold text-white text-[40px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-[-0.03em]"
          >
            <span className="inline-block whitespace-nowrap">Cut Your Akeneo</span>{" "}
            <span className="inline-block whitespace-nowrap" style={{ color: "var(--sw-mint)" }}>
              License Costs
            </span>
          </motion.h1>
          <motion.p {...enter(0.3)} className="mt-5 md:mt-6 text-white/80 text-[17px] md:text-[20px] leading-relaxed max-w-[40ch]">
            Run Akeneo Community Edition with the features you use today, managed by scandiweb.
          </motion.p>
          <motion.ul {...enter(0.35)} className="mt-6 grid gap-2.5">
            {["No Akeneo license fee", "You own the system and data"].map((t) => (
              <li key={t} className="flex items-center gap-2.5 font-head font-semibold text-white text-[16px]">
                <Check aria-hidden className="h-5 w-5" style={{ color: "var(--sw-mint)" }} strokeWidth={3} />
                {t}
              </li>
            ))}
          </motion.ul>
          <motion.div {...enter(0.45)} className="mt-8 md:mt-10">
            <a href="#cta" onClick={scrollToId("cta")} className={`${btnPrimary} w-full sm:w-auto h-auto min-h-12 py-3`}>
              Get my free savings assessment
            </a>
          </motion.div>
        </div>

        <motion.div {...enter(0.3)}>
          <Calculator />
        </motion.div>
      </div>
    </section>
  );
}
