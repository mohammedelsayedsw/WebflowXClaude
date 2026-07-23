"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const METRICS = [
  { v: "52 weeks", k: "room-by-room occupancy,\nrefreshed every Monday" },
  { v: "7 systems", k: "brought into one place" },
  { v: "17,000+", k: "UK nurseries valued and scored for acquisitions" },
  { v: "1.7 million", k: "UK postcodes mapped to family types and likely spend" },
];

const BUILT = [
  "One trusted platform pulling from seven live nursery and marketing systems",
  "A 52-week, room-by-room view, refreshed every Monday",
  "Acquisition scoring across more than 17,000 UK nurseries",
  "Family types mapped across 1.7 million UK postcodes",
  "Sensitive family data protected, with controlled access and a clear record of every number",
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
            <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="label-code text-[var(--sw-mint)]">
                Proven with
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetUrl("/childcare-growth-intelligence/family-first.png")}
                alt="Family First"
                className="h-10 w-auto shrink-0 md:h-12"
              />
            </div>
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
              back to source.
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
                  <div className="mt-2 whitespace-pre-line text-[12px] leading-tight text-white/55 md:text-[13px]">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* What we built · full width */}
        <Reveal>
          <div className="mt-14 md:mt-16">
            <span className="label-code mb-5 block text-white/50">
              What we built
            </span>
            <ul className="grid gap-x-16 gap-y-3 sm:grid-cols-2">
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

        {/* Built on · the only place the stack is named */}
        <Reveal delay={0.1}>
          <p className="mt-12 border-t border-white/10 pt-6 text-[13px] leading-relaxed text-white/50 md:mt-14 md:text-[14px]">
            Built on Databricks and AWS, with Looker Studio and Tableau
            reporting.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
