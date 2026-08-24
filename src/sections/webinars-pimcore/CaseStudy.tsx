"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const CASE_URL =
  "https://scandiweb.com/blog/pimcore-enrichment-platform-for-a-global-chocolatier/";

export function CaseStudy() {
  return (
    <section
      id="from-real-projects"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[68rem]">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-white/60">
              <span className="text-white/55">6</span>
              <span className="h-px w-6 bg-white/15" />
              <span>From real projects</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              One product,{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                up to 20 manual entries
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-white/65 text-[15px] md:text-[17px] leading-relaxed">
              Läderach, premium Swiss chocolate, 250+ stores worldwide
            </p>
          </Reveal>
        </div>

        {/* the whole story, scannable */}
        <Reveal delay={0.16}>
          <div className="mt-10 md:mt-12 grid gap-px overflow-hidden rounded-[4px] border border-white/12 bg-white/12 sm:grid-cols-3">
            <div className="bg-[var(--sw-black)] px-6 py-7 md:px-8 md:py-9">
              <div className="flex items-end min-h-[36px] md:min-h-[52px] font-head font-bold text-white text-[36px] md:text-[52px] leading-none tracking-[-0.03em] tabular-nums">
                250+
              </div>
              <div className="mt-3 text-white/65 text-[14px] md:text-[15px] leading-snug">
                stores worldwide
              </div>
            </div>

            <div className="bg-[var(--sw-black)] px-6 py-7 md:px-8 md:py-9">
              <div className="flex items-end min-h-[36px] md:min-h-[52px] font-head font-bold text-[36px] md:text-[52px] leading-none tracking-[-0.03em] tabular-nums" style={{ color: "var(--sw-mint)" }}>
                10&ndash;20
              </div>
              <div className="mt-3 text-white/65 text-[14px] md:text-[15px] leading-snug">
                manual entries per product
              </div>
            </div>

            <div className="bg-[var(--sw-black)] px-6 py-7 md:px-8 md:py-9">
              <div className="flex items-end gap-2.5 min-h-[36px] md:min-h-[52px] font-head font-bold text-white text-[26px] md:text-[38px] leading-none tracking-[-0.02em]">
                Hours
                <ArrowRight
                  className="h-5 w-5 md:h-7 md:w-7 shrink-0 mb-0.5 md:mb-1"
                  strokeWidth={2}
                  style={{ color: "var(--sw-mint)" }}
                  aria-label="to"
                />
                minutes
              </div>
              <div className="mt-3 text-white/65 text-[14px] md:text-[15px] leading-snug">
                to enrich one product
              </div>
            </div>
          </div>
        </Reveal>

        {/* before and after */}
        <div className="mt-3 md:mt-4 grid gap-3 md:gap-4 lg:grid-cols-2">
          <Reveal delay={0.22} className="h-full">
            <div className="h-full rounded-[4px] border border-white/12 bg-white/[0.03] p-6 md:p-8">
              <div className="label-code text-white/45">Before</div>
              <p className="mt-3 text-white/75 text-[15px] md:text-[17px] leading-relaxed">
                Every market had its own SKU, so the same product was entered
                again and again. Some products never went online, because the
                ERP had nowhere to hold what the storefront needed.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.28} className="h-full">
            <div className="h-full rounded-[4px] border border-[var(--sw-mint)]/35 bg-[var(--sw-mint)]/[0.06] p-6 md:p-8">
              <div className="label-code" style={{ color: "var(--sw-mint)" }}>
                After
              </div>
              <p className="mt-3 text-white/85 text-[15px] md:text-[17px] leading-relaxed">
                The product is enriched once and every market version inherits
                it. Blocked products are live, and a new market no longer
                multiplies the work.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.34}>
          <a
            href={CASE_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-8 md:mt-10 inline-flex items-center gap-2 rounded-[4px] border border-white/25 px-5 py-3 font-head text-[14px] md:text-[15px] text-white transition-colors duration-300 hover:border-[var(--sw-mint)] hover:text-[var(--sw-mint)]"
          >
            Read the full case study
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
