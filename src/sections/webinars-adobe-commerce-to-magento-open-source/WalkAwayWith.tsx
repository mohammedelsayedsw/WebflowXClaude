"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const items: { title: string; body: string }[] = [
  {
    title: "A clear picture",
    body: "What the move really looks like for a store like yours.",
  },
  {
    title: "Your first step",
    body: "A clear idea of how the move begins, and where you'd start.",
  },
  {
    title: "The real effort",
    body: "An honest read on the work, the risk, and the cost.",
  },
  {
    title: "Your decision",
    body: "Enough to choose your next move: now, later, or not yet.",
  },
];

export function WalkAwayWith() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="walk-away-with"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <SectionLabel index="4">The takeaway</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[28px] sm:text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-6 max-w-[22ch]">
              What you&apos;ll{" "}
              <span style={{ color: "var(--sw-mint)" }}>walk away with</span>
            </h2>
          </Reveal>
        </div>

        {/* 2x2 numbered card grid — spans the full wrap width, no max-w. */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {items.map((it, i) => (
            <motion.li
              key={it.title}
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
              className="group rounded-[4px] border border-white/10 bg-white/[0.03] p-5 sm:p-7 md:p-9 transition-all hover:border-white/25 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
                <span
                  aria-hidden
                  className="font-head font-bold tabular-nums text-[40px] sm:text-[48px] md:text-[64px] leading-none shrink-0 mt-[-4px] sm:mt-[-6px]"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <div className="font-head font-bold text-white text-[18px] md:text-[22px] leading-[1.2]">
                    {it.title}
                  </div>
                  <p className="mt-2 text-white/70 text-[15px] md:text-[17px] leading-relaxed">
                    {it.body}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
