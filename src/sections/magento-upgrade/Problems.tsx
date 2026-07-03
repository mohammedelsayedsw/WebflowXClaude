"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Pain = { title: string; body: string };

const pains: Pain[] = [
  {
    title: "Every year, no upside",
    body: "Upgrades add no features and no value, just maintenance spend that could have funded growth.",
  },
  {
    title: "Opaque pricing",
    body: "Commodity shops at $500 to $5K risk breaking complex stores. Senior agencies bill $20K to $80K on time and materials.",
  },
  {
    title: "Scope you can't lock",
    body: "No fixed price before work starts, so timelines slip and budgets overrun.",
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">the problem</div>
          <h2 className="font-head text-white text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[20ch]">
            The worst line item on your{" "}
            <span style={{ color: "var(--sw-mint)" }}>roadmap</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            Every Magento and Adobe Commerce store needs an upgrade at least once
            a year. The market makes it painful in three ways.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-3">
          {pains.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.07}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-7 md:p-8"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                }}
              >
                <h3 className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
                  {p.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-white/75 leading-relaxed">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.28}>
          <div className="mt-14 md:mt-20 rounded-[4px] border border-white/10 bg-white/[0.03] p-8 md:p-12">
            <div className="label-code text-[var(--sw-mint)] mb-8">
              what we do instead
            </div>
            <div className="grid gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-16">
              <div className="shrink-0">
                <div
                  className="font-head text-[56px] md:text-[80px] font-bold leading-none"
                  style={{ color: "var(--sw-mint)" }}
                >
                  $990
                </div>
                <div className="label-code text-white/55 mt-3">
                  fixed core upgrade
                </div>
              </div>
              <p className="font-head text-white text-[22px] md:text-[30px] leading-snug">
                Senior engineers upgrade your store on a price locked before work
                starts. You see the full cost up front, in a free 48-hour
                estimate.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
