"use client";

import {
  Coins,
  Search,
  ShieldCheck,
  CalendarClock,
  type LucideIcon,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

const cards: { icon: LucideIcon; lead: string; body: string }[] = [
  {
    icon: Coins,
    lead: "Questioning the bill",
    body:
      "Your license goes up every renewal, and you're paying for features you don't use.",
  },
  {
    icon: Search,
    lead: "Curious about Open Source",
    body:
      "You want to know if your store would run just the same without the license, and what it takes to move.",
  },
  {
    icon: ShieldCheck,
    lead: "Need proof first",
    body:
      "You think moving means losing features or breaking your setup, and you want to see how it works before deciding.",
  },
  {
    icon: CalendarClock,
    lead: "Renewal coming up",
    body:
      "Your next Adobe Commerce renewal is near, and you want to weigh your options before you sign.",
  },
];

export function WhoThisIsFor() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="who-should-join"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">5</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>Who should join</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mt-6 max-w-[26ch]">
              Join the webinar if{" "}
              <span style={{ color: "var(--sw-blue)" }}>
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
              className="group rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5 sm:p-7 md:p-9 transition-all hover:border-[var(--sw-blue)]/35 hover:-translate-y-0.5"
            >
              <span
                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/15 bg-[var(--sw-black)]/[0.03] text-[var(--sw-black)]/80 mb-4 sm:mb-5"
                aria-hidden
              >
                <c.icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <div className="font-head font-bold text-[var(--sw-black)] text-[18px] md:text-[22px] leading-[1.2]">
                {c.lead}
              </div>
              <p className="mt-2.5 text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed">
                {c.body}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
