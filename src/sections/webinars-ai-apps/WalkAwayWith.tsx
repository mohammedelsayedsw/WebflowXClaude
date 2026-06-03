"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

const items = [
  "A clear picture of what an app inside ChatGPT and Claude looks like for a business like yours",
  "The one workflow that makes the strongest first app for you",
  "A realistic view of what connects to your systems and how long it takes",
  "The confidence to decide whether to build now or wait",
];

export function WalkAwayWith() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="walk-away-with"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/55 mb-5">
              <span className="text-[var(--sw-black)]/55">5</span>
              <span className="inline-block h-px w-6 bg-[var(--sw-black)]/20 mx-3 align-middle" />
              <span>The takeaway</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-2 max-w-[22ch]">
              What you&apos;ll{" "}
              <span className="text-[var(--sw-blue)]">walk away with</span>
            </h2>
          </Reveal>
        </div>

        {/* 2x2 numbered card grid; collapses to 1 col on mobile. */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-[920px]">
          {items.map((t, i) => (
            <motion.li
              key={t}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={
                reduceMotion ? undefined : { opacity: 1, y: 0 }
              }
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              className="group rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:p-7 transition-all hover:border-[var(--sw-blue)]/35 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-5 md:gap-6">
                <span
                  aria-hidden
                  className="font-head font-bold tabular-nums text-[44px] md:text-[56px] leading-none text-[var(--sw-blue)] shrink-0 mt-[-4px]"
                >
                  {i + 1}
                </span>
                <p className="text-[var(--sw-black)]/85 text-[15px] md:text-[17px] leading-relaxed">
                  {t}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
