"use client";

import {
  Coins,
  ShoppingBag,
  Briefcase,
  Building2,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const cards: { icon: LucideIcon; lead: string; body: string }[] = [
  {
    icon: Coins,
    lead: "On Adobe Commerce, questioning the bill",
    body:
      "Your license rises at every renewal and you're paying for enterprise features you don't use",
  },
  {
    icon: ShoppingBag,
    lead: "Evaluating Open Source",
    body:
      "You want to know if the same store really runs without the license, and exactly what it takes to move",
  },
  {
    icon: Briefcase,
    lead: "Founders and execs",
    body:
      "You want a clear read on the saving and the risk before you commit budget to a migration",
  },
  {
    icon: Building2,
    lead: "B2B and multi-store sellers",
    body:
      "You run account pricing, quotes, or many storefronts and need them to carry across cleanly",
  },
];

export function WhoThisIsFor() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="who-should-join"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <SectionLabel index="6">Who should join</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mt-6 max-w-[26ch]">
              Join the webinar if{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                any of these is you
              </span>
            </h2>
          </Reveal>
        </div>

        {/* 2x2 grid, full content width */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
          {cards.map((c, i) => (
            <motion.li
              key={c.lead}
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
              <span
                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[4px] border border-white/15 bg-white/[0.04] text-white/85 mb-4 sm:mb-5"
                aria-hidden
              >
                <c.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="font-head font-bold text-white text-[18px] md:text-[22px] leading-[1.2]">
                {c.lead}
              </div>
              <p className="mt-2.5 text-white/70 text-[15px] md:text-[17px] leading-relaxed">
                {c.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
