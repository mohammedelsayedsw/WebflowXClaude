"use client";

import { Reveal } from "@/components/primitives/Reveal";

const stats: { figure: string; label: string }[] = [
  { figure: "+48%", label: "email revenue YoY" },
  { figure: "+39.1%", label: "ROAS on paid media" },
  { figure: "21.3%", label: "less marketing spend" },
  { figure: "2.4x", label: "on-site conversion from AI recommendations" },
];

export function Results() {
  return (
    <section
      id="the-results"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[46rem]">
          <Reveal>
            <div className="label-code mb-4 text-white/60">The results</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[44px] leading-[1.06] tracking-[-0.01em]">
              What the rebuild delivered
            </h2>
          </Reveal>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.figure} delay={i * 0.07}>
              <div className="h-full rounded-[4px] border border-white/12 bg-white/[0.03] p-7 md:p-8">
                <div
                  className="font-head text-[34px] md:text-[44px] leading-none tracking-[-0.02em]"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {s.figure}
                </div>
                <div className="mt-4 text-white/75 text-[15px] md:text-[16px] leading-snug">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 md:mt-12 text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-[70ch]">
            Four markets, one platform, no new headcount. Automated flows now
            drive 39% of email revenue from just 3% of sends.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
