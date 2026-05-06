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
      name: "ScandiPWA → Hyvä audit",
      detail: "Full inventory of overrides, custom modules, GraphQL queries, and third-party integrations. We know what stays, what gets refactored, and what gets deprecated.",
      tag: "audit",
    },
    {
      n: "2",
      name: "Hyvä storefront build",
      detail: "Theme, components, PDP, PLP, cart, and checkout rebuilt on Hyvä. Pixel-matched to your existing brand or refreshed against current design – your call.",
      tag: "build",
    },
    {
      n: "3",
      name: "Integrations preserved",
      detail: "PIM, ERP, OMS, search (Algolia, Klevu), CDP, payment, ratings, loyalty – every connection that worked on PWA is rewired and re-tested on Hyvä.",
      tag: "integrate",
    },
    {
      n: "4",
      name: "Performance and Core Web Vitals",
      detail: "We benchmark before, after, and at peak. Targets: 90+ PageSpeed mobile, sub-2s LCP, sub-100ms TBT. Verified, not promised.",
      tag: "perf",
    },
    {
      n: "5",
      name: "SEO parity script",
      detail: "Every URL, redirect, schema block, hreflang tag, and canonical path mapped before cutover. Zero rankings cliff, verified by post-launch crawl diff.",
      tag: "seo",
    },
    {
      n: "6",
      name: "Cutover and 30-day support",
      detail: "Scripted go-live with rollback. Joint on-call with your team for 30 days post-launch. Fix-forward, not hand-off-and-disappear.",
      tag: "launch",
    },
  ];

  return (
    <section id="what-ships" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
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
              What ships in the{" "}
              <span className="text-[var(--sw-mint)]">migration</span>
            </h2>
            <p className="mt-6 text-white/75 text-[16px] md:text-[17px] leading-relaxed max-w-[44ch]">
              The whole front of your store, rebuilt on Hyvä. Every
              integration, preserved. Performance, SEO, and rollout, scripted.
              Your team, trained. No black box.
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
              Audit, build, integrate, launch, support. End-to-end.
            </p>
            <a href="#cta" className={btnPrimary}>
              Get a migration plan
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
