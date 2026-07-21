"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

const PROBLEMS = [
  {
    n: "1",
    title: "Planning runs on instinct because the data is scattered",
    body: "Sales history, stock, and web data sit in Business Central and a handful of other systems, with no single forecast-ready source. So buying and replenishment lean on lagging reports and the judgement of whoever has been there longest.",
  },
  {
    n: "2",
    title: "Your markets get planned as one",
    body: "Countries are treated as a single homogeneous market even though demand differs sharply by category, brand, and season in each one.",
  },
  {
    n: "3",
    title: "Top sizes sell out while seasonal stock sits",
    body: "Best sellers run out in the sizes people actually buy, while non-reorderable seasonal product lingers into the wrong season.",
  },
  {
    n: "4",
    title: "Markdowns come too late",
    body: "The decision is triggered after stock cover has already passed healthy, so the margin is gone before anyone acts.",
  },
  {
    n: "5",
    title: "Size curves are guesswork",
    body: "Without a reliable view of true size demand by category, gender, and brand, assortment depth never matches how customers really buy.",
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
              Five problems every{" "}
              <br className="hidden md:block" />
              <span className="text-[var(--sw-mint)]">retail buyer</span> knows
            </h2>
            <p className="mt-6 max-w-[78ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              Every season you commit money months ahead of demand. These are
              the five{" "}
              {/* kept whole so "goes" is not stranded at the end of line 1 */}
              <span className="whitespace-nowrap">places that bet goes wrong.</span>
            </p>
          </Reveal>
        </div>

        {/* all five in one row on desktop, so each reads as a tall column */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07} className="h-full">
              <div className="relative flex h-full flex-col rounded-[4px] border border-white/10 bg-white/[0.02] p-5">
                <div className="label-code mb-4 text-white/55">
                  Problem · {p.n}
                </div>
                <h3 className="font-head mb-3 text-[18px] leading-[1.2] text-white lg:text-[17px] xl:text-[18px]">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/70">
                  {p.body}
                </p>
                <span className="absolute left-5 top-0 h-px w-8 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
