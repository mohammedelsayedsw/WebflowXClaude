"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

const items: { title: string; body: string }[] = [
  {
    title: "Know what it is",
    body:
      "A clear picture of what an app inside ChatGPT and Claude looks like for a business like yours",
  },
  {
    title: "Your first move",
    body:
      "The specific workflow to start with, and the steps to get it live",
  },
  {
    title: "What it really takes",
    body:
      "An honest read on the systems, effort, and time, so you can size the investment before you commit budget",
  },
  {
    title: "The decision",
    body:
      "Enough to judge whether to move now, pilot, or wait, and defend that call to your board",
  },
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
              className="group rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-9 transition-all hover:border-[var(--sw-blue)]/35 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-6 md:gap-8">
                <span
                  aria-hidden
                  className="font-head font-bold tabular-nums text-[48px] md:text-[64px] leading-none text-[var(--sw-blue)] shrink-0 mt-[-6px]"
                >
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <div className="font-head font-bold text-[var(--sw-black)] text-[18px] md:text-[22px] leading-[1.2]">
                    {it.title}
                  </div>
                  <p className="mt-2 text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed">
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
