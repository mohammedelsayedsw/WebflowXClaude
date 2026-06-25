"use client";

import { Fragment } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const steps = [
  "Audit",
  "Plan",
  "Migrate",
  "Test",
  "Go live",
  "Support",
];

export function LiveDemoTeaser() {
  return (
    <section
      id="the-process"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="max-w-[860px]">
          <Reveal>
            <SectionLabel index="4">The process</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[42px] lg:text-[50px] leading-[1.05] tracking-[-0.01em]">
              Your store moves across,
              <br />
              <span style={{ color: "var(--sw-mint)" }}>
                without a gap in trading
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-7 text-white/80 text-[15px] md:text-[17px] leading-relaxed max-w-[64ch]">
              Migration sounds risky until you see how it runs. We build and
              validate your Open Source store in parallel with your live site,
              then cut over only once both sides confirm the handover is clean.
              The webinar walks through every step.
            </p>
          </Reveal>
        </div>

        {/* Stepper container — dark-glass panel + status header + numbered chips */}
        <Reveal delay={0.15}>
          <div className="mt-10 md:mt-14 rounded-[4px] border border-white/10 bg-white/[0.025] p-5 sm:p-7 md:p-9">
            {/* Status header */}
            <div className="flex items-center justify-between gap-4 mb-5 md:mb-7 flex-wrap">
              <div className="flex items-center gap-2.5">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full"
                  style={{ background: "var(--sw-mint)" }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <span
                  className="font-head font-semibold uppercase text-white/65"
                  style={{ fontSize: "10.5px", letterSpacing: "0.16em" }}
                >
                  The migration journey
                </span>
              </div>
              <span
                className="font-head uppercase text-white/40 hidden sm:inline"
                style={{ fontSize: "10px", letterSpacing: "0.18em" }}
              >
                6 steps &middot; zero downtime
              </span>
            </div>

            {/* Numbered stepper chips */}
            <div className="flex flex-wrap xl:flex-nowrap items-center gap-2.5 sm:gap-3.5 md:gap-4 xl:gap-2">
              {steps.map((s, i) => (
                <Fragment key={s}>
                  <Reveal delay={0.05 + i * 0.05} className="contents">
                    <motion.div
                      className="group inline-flex shrink-0 xl:flex-1 xl:justify-center items-center gap-2 sm:gap-2.5 xl:gap-1.5 rounded-[2px] border border-white/15 bg-white pl-1.5 pr-3 py-1.5 sm:pl-2 sm:pr-4 sm:py-2 md:pl-2.5 md:pr-5 md:py-2.5 xl:px-2.5 transition-colors hover:border-[var(--sw-mint)]/60"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 2.6,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.22,
                      }}
                    >
                      <span className="inline-flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-[2px] bg-[var(--sw-black)] text-white font-head font-bold text-[10px] sm:text-[11px] tabular-nums">
                        {i + 1}
                      </span>
                      <span className="font-head text-[12px] sm:text-[14px] md:text-[15.5px] xl:text-[13.5px] font-semibold text-[var(--sw-black)] leading-none whitespace-nowrap">
                        {s}
                      </span>
                    </motion.div>
                  </Reveal>
                  {i < steps.length - 1 && (
                    <Reveal delay={0.07 + i * 0.05} className="contents">
                      <ArrowRight
                        className="h-4 w-4 sm:h-5 sm:w-5 xl:h-4 xl:w-4 text-white/40 shrink-0"
                        strokeWidth={2.25}
                      />
                    </Reveal>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="mt-10 md:mt-12 text-white/70 text-[15px] md:text-[17px] leading-relaxed">
            Most stores complete the move in 6 to 12 weeks. Once you see the
            path laid out end to end, you can decide whether it&apos;s right
            for your store.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
