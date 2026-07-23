"use client";

import { Reveal } from "@/components/primitives/Reveal";

const STATS = [
  {
    v: "52 weeks",
    k: "room-by-room occupancy forecast for Family First, refreshed every Monday",
  },
  {
    v: "Under 1 child",
    k: "the weekly room forecast was off by less than one child on average",
  },
  {
    v: "17,000+",
    k: "UK nurseries valued and scored for acquisitions",
  },
  {
    v: "1.7 million",
    k: "UK postcodes mapped to family types and likely revenue",
  },
];

export function ProofStrip() {
  return (
    <section id="proof-strip" className="bg-lp-bright py-16 md:py-20">
      <div className="wrap">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {STATS.map((s, i) => (
            <Reveal key={s.k} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5">
                <div className="font-head text-[26px] leading-none tracking-[-0.01em] text-[var(--sw-blue)] md:text-[32px]">
                  {s.v}
                </div>
                <div className="mt-2.5 text-[12px] leading-tight text-[var(--sw-black)]/55 md:text-[13px]">
                  {s.k}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.1}>
          <p className="mt-5 max-w-[80ch] text-[12px] leading-relaxed text-[var(--sw-black)]/45 md:text-[13px]">
            Family First results. What another group sees depends on its own
            data history, coverage, and setup.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
