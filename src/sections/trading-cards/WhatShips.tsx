"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { btnPrimary } from "@/components/primitives/buttonStyles";

export function WhatShips() {
  const deliverables = [
    {
      n: "1",
      name: "Migration plan",
      detail:
        "Scripted cutover from your legacy stack (Shopify, custom, or spreadsheet glue). Dry-run tested. Inventory reconciled before go-live.",
      tag: "doc",
    },
    {
      n: "2",
      name: "Architecture documentation",
      detail:
        "System diagram, pack data model, PSA Vault adapter, FMV engine, randomization audit log. Versioned with the code.",
      tag: "doc",
    },
    {
      n: "3",
      name: "Runbooks",
      detail:
        "Live-show peak ops, payment-decline recovery, vault transfer failure modes, buyback dispute handling. Written for your on-call team.",
      tag: "doc",
    },
    {
      n: "4",
      name: "Admin training",
      detail:
        "Three sessions covering pack configuration, tier and level management, reserve pool monitoring, and Stripe Radar tuning.",
      tag: "session",
    },
    {
      n: "5",
      name: "30-day post-launch",
      detail:
        "Joint on-call with your team through the first major release window. Fix-forward, not hand-off-and-disappear.",
      tag: "support",
    },
  ];

  return (
    <section
      id="what-ships"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(900px 600px at 90% 20%, rgba(63,74,175,0.18) 0%, transparent 55%)",
        }}
      />

      <svg className="absolute inset-x-0 top-0 h-px w-full opacity-40" viewBox="0 0 1000 1" preserveAspectRatio="none">
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={2} />
      </svg>

      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.4fr] items-start">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[60px] leading-[1.04] max-w-[18ch]">
              You own the stack{" "}
              <span className="text-[var(--sw-mint)]">after launch</span>
            </h2>
            <p className="mt-6 text-white/75 text-[16px] md:text-[17px] leading-relaxed max-w-[44ch]">
              The engagement hands over everything your team needs to run the
              stack on its own. Code, documentation, runbooks, training. No
              black box, no vendor lock-in, no post-launch silence.
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
                  className="group relative grid grid-cols-[40px_1fr_auto] items-start gap-4 md:gap-6 py-5 md:py-6 border-b border-white/10 transition-colors hover:bg-white/[0.02]"
                >
                  <div className="label-code text-[var(--sw-mint)] tabular-nums pt-0.5">
                    {d.n}
                  </div>

                  <div>
                    <h3 className="font-head text-white text-[18px] md:text-[22px] leading-tight mb-1.5">
                      {d.name}
                    </h3>
                    <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed max-w-[54ch]">
                      {d.detail}
                    </p>
                  </div>

                  <div className="hidden md:block">
                    <span
                      className="label-code px-2.5 py-1 rounded-[2px] border border-white/15 text-white/60"
                    >
                      {d.tag.toUpperCase()}
                    </span>
                  </div>
                </motion.li>
              ))}
            </ol>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 md:mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-head text-white text-[20px] md:text-[24px] leading-[1.25] max-w-[42ch]">
              Code, docs, training, post-launch on-call. The whole package.
            </p>
            <a href="#cta" className={btnPrimary}>
              Start the accelerator
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
