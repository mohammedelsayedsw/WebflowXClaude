"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

const PROBLEMS = [
  {
    n: "1",
    title: "You cannot fully trust your own numbers",
    body: "Leadership cannot trace every investor number back to one reliable source.",
  },
  {
    n: "2",
    title: "Capacity problems show up too late",
    body: "Room occupancy is read off spreadsheets, so there is little time to act.",
  },
  {
    n: "3",
    title: "Growth decisions run on guesswork",
    body: "New sites and acquisitions get discussed without a clear view of demand, pricing, and capacity.",
  },
  {
    n: "4",
    title: "Hiring is cut off from growth",
    body: "Recruitment is planned separately from occupancy and new sites.",
  },
  {
    n: "5",
    title: "Teams assemble data instead of using it",
    body: "Finance, operations, and marketing spend their time reconciling systems.",
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
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
        <div className="mb-14 max-w-[54rem] md:mb-20">
          <Reveal>
            <span className="label-code mb-5 block text-white/60">
              The problem
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              Growth exposes the gaps between{" "}
              <span className="text-[var(--sw-mint)]">your nursery systems</span>
            </h2>
            <p className="mt-6 max-w-[80ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              As a group adds locations, brands, systems, and investors, the
              decisions that matter get harder to support. These five gaps are
              the result.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07} className="h-full">
              <div className="relative flex h-full flex-col rounded-[4px] border border-white/10 bg-white/[0.02] p-5">
                <div className="label-code mb-4 text-white/55">Gap · {p.n}</div>
                <h3 className="font-head mb-3 text-[18px] leading-[1.2] text-white">
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
