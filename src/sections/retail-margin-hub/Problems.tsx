"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

/** The one problem underneath the rest. */
const ROOT = {
  title: "Planning runs on spreadsheets and gut feel",
  body: "Sales, stock, and web data sit in Business Central and a handful of other systems, and none of it looks forward. So buyers plan in spreadsheets, on last year and instinct.",
};

/** The four ways that problem costs you. */
const SYMPTOMS = [
  {
    n: "1",
    title: "Your markets get planned as one",
    body: "Countries are planned together, even though what sells differs a lot from one to the next.",
  },
  {
    n: "2",
    title: "Top sizes sell out while seasonal stock sits",
    body: "The sizes people actually buy run out, while seasonal stock you cannot reorder sits into the wrong season.",
  },
  {
    n: "3",
    title: "Markdowns come too late",
    body: "You discount after the stock has already piled up, so the margin is gone by the time anyone acts.",
  },
  {
    n: "4",
    title: "Size curves are guesswork",
    body: "Nobody has a clear view of which sizes really sell, so you buy the wrong depth.",
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
      {/* w-full is load-bearing: the viewBox gives the svg an intrinsic 1000px
          width, so without it the line stops at 1000px instead of spanning. */}
      <svg
        className="absolute inset-x-0 top-0 h-px w-full opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <DrawnPath
          d="M0 0.5 H1000"
          stroke="rgba(110,247,110,0.45)"
          strokeWidth={1}
          duration={1.8}
        />
      </svg>

      <div className="wrap relative">
        <div className="mb-14 max-w-[52rem] md:mb-20">
          <Reveal>
            <span className="label-code mb-5 block text-white/60">
              The problem
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              One problem underneath,{" "}
              <br className="hidden md:block" />
              <span className="text-[var(--sw-mint)]">four ways it costs you</span>
            </h2>
            <p className="mt-6 max-w-[78ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              Every season you commit money months ahead of demand. Fix the
              problem underneath and the four below it start to close on their
              own.
            </p>
          </Reveal>
        </div>

        {/* Root cause · highlighted, full width */}
        <Reveal>
          <div
            className="rounded-[4px] p-6 md:p-8 lg:p-10"
            style={{
              background: "rgba(110,247,110,0.06)",
              border: "1px solid rgba(110,247,110,0.30)",
            }}
          >
            <div className="grid gap-6 md:gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
              <div>
                <span className="label-code mb-4 block text-[var(--sw-mint)]">
                  Root cause
                </span>
                <h3 className="font-head text-[22px] leading-[1.14] tracking-[-0.005em] text-white sm:text-[26px] md:text-[30px]">
                  {ROOT.title}
                </h3>
              </div>
              <p className="text-[15px] leading-relaxed text-white/75 md:text-[16px]">
                {ROOT.body}
              </p>
            </div>
          </div>
        </Reveal>

        {/* connective label, so the causal link is explicit */}
        <Reveal delay={0.05}>
          <div className="mt-8 mb-5 flex items-center gap-4 md:mt-10">
            <span className="label-code shrink-0 text-white/50">
              Where it costs you
            </span>
            <span className="h-px flex-1 bg-white/10" />
          </div>
        </Reveal>

        {/* symptoms · tidy two by two */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {SYMPTOMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07} className="h-full">
              <div className="relative flex h-full flex-col rounded-[4px] border border-white/10 bg-white/[0.02] p-5 md:p-6">
                <div className="label-code mb-4 text-white/55">
                  Cost · {p.n}
                </div>
                <h3 className="font-head mb-3 text-[18px] leading-[1.2] text-white md:text-[19px]">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/70 md:text-[14px]">
                  {p.body}
                </p>
                <span className="absolute left-5 top-0 h-px w-8 bg-white/20 md:left-6" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
