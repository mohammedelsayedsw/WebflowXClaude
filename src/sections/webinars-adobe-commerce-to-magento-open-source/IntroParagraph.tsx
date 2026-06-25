"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { WEBINAR } from "./details";

/* ── Rising-license-cost panel ─────────────────────────────────────
   Dark-glass panel mirroring the ai-apps demo panel styling, but the
   content tells the migration story: the Adobe Commerce license climbs
   every renewal, while Magento Open Source stays at zero. */

const years: { label: string; bill: string; pct: number }[] = [
  { label: "Year 1", bill: "$90K", pct: 64 },
  { label: "Year 2", bill: "$104K", pct: 74 },
  { label: "Year 3", bill: "$120K", pct: 86 },
  { label: "Year 4", bill: "$138K", pct: 100 },
];

function LicenseCostPanel() {
  return (
    <div
      className="relative overflow-hidden rounded-[4px] w-full"
      style={{
        background:
          "linear-gradient(180deg, #0d1414 0%, #0a1110 60%, #080c0c 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      {/* Top bar */}
      <div className="px-3.5 py-2.5 border-b border-white/[0.07] flex items-center gap-2.5">
        <div className="flex items-center gap-1">
          <span className="h-2 w-2 rounded-full bg-white/30" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <span className="font-head text-white/75 text-[11.5px] font-semibold">
          Adobe Commerce
        </span>
        <span className="text-white/40 text-[11px]">renewal invoice</span>
      </div>

      {/* Climbing license bars */}
      <div className="px-5 py-6 space-y-4">
        <div
          className="font-head uppercase text-white/40"
          style={{ fontSize: "9px", letterSpacing: "0.16em" }}
        >
          Annual license, rising at every renewal
        </div>

        <div className="space-y-3 pt-1">
          {years.map((y) => (
            <div key={y.label} className="flex items-center gap-3">
              <span className="text-white/55 font-head text-[11px] w-[52px] shrink-0">
                {y.label}
              </span>
              <div className="relative flex-1 h-7 rounded-[3px] bg-white/[0.04] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-[3px]"
                  style={{
                    width: `${y.pct}%`,
                    background:
                      "linear-gradient(90deg, rgba(255,90,49,0.35) 0%, rgba(255,90,49,0.75) 100%)",
                  }}
                />
                <span className="absolute inset-y-0 right-2.5 flex items-center font-head font-semibold text-white text-[12.5px]">
                  {y.bill}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* The Open Source line */}
        <div className="mt-2 rounded-[4px] bg-white/[0.03] border border-[rgba(110,247,110,0.25)] px-4 py-3 flex items-center justify-between">
          <div>
            <div className="font-head text-white text-[12.5px] font-semibold leading-tight">
              Magento Open Source
            </div>
            <div className="text-white/55 text-[11px] mt-0.5">
              Same platform, self-hosted
            </div>
          </div>
          <span
            className="font-head font-bold text-[18px]"
            style={{ color: "var(--sw-mint)" }}
          >
            $0
            <span className="text-[12px] font-medium text-white/55">
              {" "}
              / yr
            </span>
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3.5 py-2 border-t border-white/[0.07] flex items-center justify-between">
        <span
          className="font-head uppercase text-white/40"
          style={{ fontSize: "9px", letterSpacing: "0.16em" }}
        >
          You rent it &middot;{" "}
          <span className="text-white/65">or you own it</span>
        </span>
        <span className="text-white/30 text-[10px]">illustrative</span>
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */

export function IntroParagraph() {
  return (
    <section
      id="the-problem"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-center">
          {/* LEFT · copy */}
          <div className="max-w-[640px]">
            <Reveal>
              <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
                <span className="text-[var(--sw-black)]/55">1</span>
                <span className="h-px w-6 bg-[var(--sw-black)]/20" />
                <span>The problem</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2
                className="font-head text-[var(--sw-black)] text-[24px] sm:text-[30px] md:text-[38px] lg:text-[44px] leading-[1.05] tracking-[-0.01em]"
                style={{ textWrap: "balance" }}
              >
                You&apos;re paying an enterprise license for a{" "}
                <span className="text-[var(--sw-blue)]">
                  mid-market store
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-9 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                Adobe Commerce licensing costs keep climbing, and many teams
                are paying for more than they actually use. That&apos;s why
                more and more merchants are asking the same questions: is it
                worth switching to Magento Open Source, how does the migration
                work, and what does it really take?
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                Here is what most merchants miss: Magento Open Source is the
                same Magento core as Adobe Commerce. Same admin, same data
                model, same developer experience. The difference is the layer
                of licensed enterprise modules, and most stores only use a few
                of them.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                In this webinar we show what carries over untouched, what gets
                rebuilt as owned solutions, and how the move pays for itself
                inside the first year, then saves you the full license every
                year after.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-9 font-head font-semibold text-[var(--sw-black)] text-[17px] md:text-[19px]">
                {/* TODO(announce): date/time come from WEBINAR in details.ts */}
                {WEBINAR.date} &middot; {WEBINAR.time}
              </p>
            </Reveal>
          </div>

          {/* RIGHT · rising license cost panel */}
          <div className="w-full max-w-[420px] mx-auto lg:mr-0 lg:ml-auto">
            <LicenseCostPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
