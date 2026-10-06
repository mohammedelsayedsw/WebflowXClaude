"use client";

import { motion } from "motion/react";
import { btnSecondary } from "@/components/primitives/buttonStyles";
import { Calculator } from "./Calculator";
import { scrollToId } from "./scrollTo";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];
const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: EASE },
});

export function Hero() {
  return (
    <section
      id="hero"
      className="relative z-10 -mt-[60px] md:-mt-[75px] overflow-hidden"
      style={{
        background:
          "radial-gradient(60% 55% at 85% 20%, rgba(63,74,175,0.35) 0%, rgba(5,7,15,0) 70%), #05070f",
      }}
    >
      <div className="wrap relative pt-36 md:pt-[170px] pb-20 md:pb-28 grid gap-12 lg:gap-16 lg:grid-cols-[minmax(0,6fr)_minmax(0,5fr)] items-center">
        <div>
          <motion.div {...enter(0.1)} className="label-code text-white/55">
            Akeneo Plus Bundle
          </motion.div>
          <motion.h1
            {...enter(0.2)}
            className="mt-6 font-head font-bold text-white text-[44px] sm:text-[56px] lg:text-[72px] leading-[1.02] tracking-[-0.02em]"
          >
            <span className="inline-block whitespace-nowrap">Cut Your Akeneo</span>{" "}
            <span className="inline-block whitespace-nowrap" style={{ color: "var(--sw-mint)" }}>
              License Costs
            </span>
          </motion.h1>
          <motion.p
            {...enter(0.3)}
            className="mt-7 text-white/75 text-[17px] md:text-[19px] leading-relaxed max-w-[50ch]"
          >
            The Akeneo Plus Bundle is a fully managed alternative to licensed Akeneo. It runs on
            Community Edition with the features your team relies on. scandiweb handles the migration,
            hosting, maintenance, and upgrades.
          </motion.p>
          <motion.ul {...enter(0.4)} className="mt-8 border-t border-white/10 max-w-[520px]">
            {[
              "No Akeneo license fee",
              "Full ownership of your system and data",
            ].map((t) => (
              <li key={t} className="flex gap-3 py-3 border-b border-white/10 text-white text-[15px] md:text-[16px]">
                <span aria-hidden style={{ color: "var(--sw-mint)" }}>✓</span>
                {t}
              </li>
            ))}
          </motion.ul>
          <motion.div {...enter(0.5)} className="mt-8">
            <a href="#migration" onClick={scrollToId("migration")} className={btnSecondary}>
              See how migration works
            </a>
          </motion.div>
        </div>

        <motion.div {...enter(0.35)}>
          <Calculator />
        </motion.div>
      </div>
    </section>
  );
}
