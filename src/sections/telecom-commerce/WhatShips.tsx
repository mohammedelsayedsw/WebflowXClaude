"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { SignalBars } from "./motifs";

export function WhatShips() {
  const deliverables = [
    {
      n: "1",
      name: "The accelerator, live and yours",
      detail: "Set up and configured to your systems, with full code ownership.",
      tag: "code",
    },
    {
      n: "2",
      name: "Migration plan",
      detail: "Dry-run tested, with a zero-downtime fallback.",
      tag: "plan",
    },
    {
      n: "3",
      name: "Documentation and runbooks",
      detail: "Architecture docs and step-by-step runbooks, versioned with the code and written for your team.",
      tag: "docs",
    },
    {
      n: "4",
      name: "Training",
      detail: "Hands-on sessions so your commercial team runs offers itself.",
      tag: "training",
    },
    {
      n: "5",
      name: "Post-launch on-call",
      detail: "We stay on call with your team for 30 days after go-live.",
      tag: "support",
    },
  ];

  return (
    <section id="what-ships" className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 600px at 90% 20%, rgba(63,74,175,0.18) 0%, transparent 55%)",
        }}
      />

      <svg className="absolute inset-x-0 top-0 h-px w-full opacity-40" viewBox="0 0 1000 1" preserveAspectRatio="none">
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={2} />
      </svg>

      <div className="wrap relative">
        <div className="grid items-start gap-10 md:gap-14 lg:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <div className="mb-5 flex items-center gap-2.5">
              <SignalBars tone="dark" />
              <span className="label-code text-white/60">YOURS AFTER LAUNCH</span>
            </div>
            <h2 className="font-head max-w-[16ch] text-[34px] leading-[1.04] text-white md:text-[52px] lg:text-[60px]">
              Not just the build.{" "}
              <span className="text-[var(--sw-mint)]">Everything to run it</span>.
            </h2>
            <p className="mt-6 max-w-[44ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              The engagement hands over everything your team needs to run the
              layer on its own: code, documentation, runbooks, training. No black
              box, no lock-in, and we don&apos;t go quiet after launch.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <ol className="space-y-0 border-t border-white/10">
              {deliverables.map((d) => (
                <motion.li
                  key={d.n}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  viewport={{ once: true, amount: 0.2 }}
                  className="group relative grid grid-cols-[40px_1fr_auto] items-start gap-4 border-b border-white/10 py-5 transition-colors hover:bg-white/[0.02] md:gap-6 md:py-6"
                >
                  <div className="label-code pt-0.5 tabular-nums text-[var(--sw-mint)]">
                    {d.n}
                  </div>

                  <div>
                    <h3 className="font-head mb-1.5 text-[18px] leading-tight text-white md:text-[22px]">
                      {d.name}
                    </h3>
                    <p className="max-w-[54ch] text-[13px] leading-relaxed text-white/70 md:text-[14px]">
                      {d.detail}
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <span className="label-code rounded-[2px] border border-white/15 px-2.5 py-1 text-white/60">
                      {d.tag.toUpperCase()}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-10 md:mt-20 md:flex-row md:items-center">
            <p className="font-head max-w-[42ch] text-[20px] leading-[1.25] text-white md:text-[24px]">
              A new offer live in weeks, run by your business team, with your BSS
              untouched.
            </p>
            <a href="#cta" className={btnPrimary}>
              Book a 30-minute fit check
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
