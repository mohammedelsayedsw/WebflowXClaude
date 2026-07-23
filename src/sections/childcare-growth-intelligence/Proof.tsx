"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const METRICS = [
  { v: "52 weeks", k: "room-by-room occupancy, refreshed every Monday" },
  {
    v: "Under 1 child",
    k: "the baseline weekly room forecast was off by less than one child on average",
  },
  { v: "17,000+", k: "UK nurseries valued and scored for acquisitions" },
  { v: "1.7 million", k: "UK postcodes mapped to family types and likely revenue" },
];

const BUILT = [
  "One trusted platform pulling from seven live nursery and marketing systems",
  "A 52-week, room-by-room occupancy forecast, refreshed every Monday",
  "Acquisition scoring across more than 17,000 UK nurseries",
  "Family types mapped across 1.7 million UK postcodes",
  "Sensitive family data protected, with controlled access and a clear record of every number",
];

const SHIFTS = [
  {
    before: "Notebooks and static spreadsheets",
    after: "one trusted platform the team relies on",
  },
  {
    before: "Occupancy read after the fact",
    after: "a 52-week forward view, refreshed weekly",
  },
  {
    before: "Expansion argued from anecdote",
    after: "more than 17,000 nurseries scored on the same basis",
  },
  {
    before: "Board numbers no one could trace",
    after: "figures with a clear record of where they came from",
  },
];

export function Proof() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
      <div className="wrap relative">
        {/* Headline + intro · full width */}
        <Reveal>
          <div className="max-w-[64rem]">
            <span className="label-code mb-6 block text-[var(--sw-mint)]">
              Proven with Family First
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              A fast-growing UK nursery group, from scattered spreadsheets to{" "}
              <span className="text-[var(--sw-mint)]">
                forward-looking numbers
              </span>
            </h2>
            <p className="mt-6 max-w-[80ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              Family First runs nurseries across several brands and regions, and
              needed data it could put in front of investors, planners, and its
              own board. We moved them off notebooks and static spreadsheets onto
              one trusted platform. Now they can see how full each room will be
              for the next year, refreshed every Monday, score acquisition
              targets across the whole UK, and show investors numbers that trace
              back to source. We have run this since 2025, and it is still live.
            </p>
          </div>
        </Reveal>

        {/* Stats band · full width */}
        <Reveal delay={0.05}>
          <div className="mt-12 border-y border-white/10 py-8 md:mt-14 md:py-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:flex lg:justify-between lg:gap-x-8">
              {METRICS.map((m) => (
                <div key={m.k} className="lg:max-w-[15rem]">
                  <div className="font-head text-[22px] leading-none tracking-[-0.01em] text-[var(--sw-mint)] md:text-[28px]">
                    {m.v}
                  </div>
                  <div className="mt-2 text-[12px] leading-tight text-white/55 md:text-[13px]">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* required honesty caveat */}
          <p className="mt-4 max-w-[90ch] text-[12px] leading-relaxed text-white/45 md:text-[13px]">
            Family First results. Another group&apos;s numbers depend on its own
            data history, coverage, and setup. The 17,000-nursery scoring was a
            one-off study, not a weekly job.
          </p>
        </Reveal>

        {/* What we built + before/after · two columns */}
        <div className="mt-14 grid gap-10 md:mt-16 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <Reveal>
            <div>
              <span className="label-code mb-5 block text-white/50">
                What we built
              </span>
              <ul className="flex flex-col gap-3">
                {BUILT.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[15px] leading-snug text-white/80 md:text-[16px]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sw-mint)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="label-code mb-5 block text-white/50">
                Before and after
              </span>
              <div className="flex flex-col gap-2.5">
                {SHIFTS.map((s) => (
                  <div
                    key={s.before}
                    className="rounded-[4px] border border-white/10 bg-white/[0.02] p-4"
                  >
                    <div className="text-[13px] leading-snug text-white/45 line-through decoration-white/25">
                      {s.before}
                    </div>
                    <div className="mt-1.5 flex gap-2 text-[14px] leading-snug text-white md:text-[15px]">
                      <span aria-hidden className="text-[var(--sw-mint)]">
                        &rarr;
                      </span>
                      {s.after}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Built on · the only place the stack is named */}
        <Reveal delay={0.1}>
          <p className="mt-12 border-t border-white/10 pt-6 text-[13px] leading-relaxed text-white/50 md:mt-14 md:text-[14px]">
            Built on Databricks and AWS, with Looker Studio and Tableau
            reporting. The stack proves delivery. What you buy is trusted numbers
            and forward visibility.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
