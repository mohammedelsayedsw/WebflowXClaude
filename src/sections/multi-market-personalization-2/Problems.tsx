"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

const PROBLEMS = [
  {
    n: "1",
    title: "Every market runs its own tools",
    body: "Email here, recommendations there, and none of them share what they know.",
  },
  {
    n: "2",
    title: "The customer data never joins up",
    body: "A shopper looks brand new in every country, so you personalize on guesses.",
  },
  {
    n: "3",
    title: "You pay for the same job several times",
    body: "Separate email, recommendation, and ad tools, none of them talking to each other.",
  },
  {
    n: "4",
    title: "Paid media targets broad audiences",
    body: "Without real customer segments, you overspend for an average return.",
  },
  {
    n: "5",
    title: "No single view of the customer",
    body: "Campaigns are timed and targeted blind, so the right message reaches the wrong people.",
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
            <h2 className="font-head text-[34px] leading-[1.05] text-white md:text-[48px] lg:text-[56px]">
              Five problems every{" "}
              <br className="hidden md:block" />
              <span className="text-[var(--sw-mint)]">multi-market retailer</span>{" "}
              knows
            </h2>
            <p className="mt-6 max-w-[78ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              Selling across markets multiplies your tools and splits your data.
              These are the five that cost you the most.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07}>
              <div className="relative flex h-full flex-col rounded-[4px] border border-white/10 bg-white/[0.02] p-6">
                <div className="label-code mb-4 text-white/55">
                  Problem · {p.n}
                </div>
                <h3 className="font-head mb-3 text-[19px] leading-[1.18] text-white md:text-[21px]">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/70 md:text-[14px]">
                  {p.body}
                </p>
                <span className="absolute left-6 top-0 h-px w-10 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
