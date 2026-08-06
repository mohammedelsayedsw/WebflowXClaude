"use client";

import {
  Files,
  Copy,
  FileQuestion,
  RefreshCw,
  Hourglass,
  Wrench,
} from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

const pains: { label: string; icon: typeof Files }[] = [
  { label: "Overwhelming amount of documents daily", icon: Files },
  { label: "Duplicate data entry", icon: Copy },
  { label: "Missing or wrong information", icon: FileQuestion },
  { label: "Constant status checking", icon: RefreshCw },
  { label: "Human bottleneck", icon: Hourglass },
  { label: "Expensive ERP customizations", icon: Wrench },
];

const container: Variants = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  shown: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export function PainPoints() {
  // Framer handles the entrance; the float and hover lift are CSS, and both
  // opt out under prefers-reduced-motion.
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="the-pain"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="mb-10 md:mb-12 max-w-[760px] lg:max-w-[1100px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">2</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The problem</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em]">
              Where warehouse and accounting{" "}
              {/* force the two-line break on desktop so the headline never sets in three */}
              <br className="hidden lg:block" />
              teams&apos; time{" "}
              <span className="text-[var(--sw-blue)]">actually disappears</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-[760px] lg:max-w-[900px] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
              Your systems don&apos;t talk to each other. So your team re-types
              the same numbers into each system and checks they match. It eats
              hours every day and quietly costs you money.
            </p>
          </Reveal>
        </div>

        {/* Lead-in ties the copy to the boxes so they don't float */}
        <Reveal delay={0.2}>
          <p className="mb-5 md:mb-6 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            This is what your team handles by hand every day
          </p>
        </Reveal>

        {/* The pains — full-width grid, the focal point */}
        <motion.ul
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4"
          variants={reduceMotion ? undefined : container}
          initial={reduceMotion ? undefined : "hidden"}
          whileInView={reduceMotion ? undefined : "shown"}
          viewport={{ once: true, amount: 0.3 }}
        >
          {pains.map((p, i) => (
            <motion.li
              key={p.label}
              variants={reduceMotion ? undefined : item}
              className="h-full"
            >
              {/* separate layer for the float so it never fights the entrance
                  transform on the li or the hover lift on the card */}
              <div
                className="sw-card-float h-full"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="group relative flex h-full min-h-[136px] flex-col justify-between gap-6 rounded-[6px] border border-[var(--sw-black)]/10 bg-white p-5 transition-[transform,box-shadow,border-color] duration-300 hover:border-[var(--sw-blue)]/40 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[0_12px_28px_rgba(16,19,44,0.10)]">
                  <span
                    aria-hidden
                    className="inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-blue)]"
                  >
                    <p.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-head text-[var(--sw-black)]/85 text-[13px] leading-snug">
                    {p.label}
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <Reveal delay={0.2}>
          <p className="mt-8 md:mt-10 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            OperaLayer is built to take this work off your team&apos;s hands.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
