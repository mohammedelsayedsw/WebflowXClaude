"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Stat = { value: string; label: string; client: string };

const stats: Stat[] = [
  { value: "+62%", label: "organic revenue, year on year", client: "PUMA" },
  { value: "+39%", label: "revenue after launch", client: "Läderach" },
  { value: "+80%", label: "conversion uplift", client: "Beauty Works" },
];

export function ProofStats() {
  return (
    <section className="bg-lp-bright py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            real results
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[30px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[22ch]">
            Brands grow when their stores{" "}
            <span className="text-[var(--sw-blue)]">run as one</span>
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 grid gap-5 md:gap-6 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.client} delay={i * 0.08}>
              <div className="h-full rounded-[10px] border border-[var(--sw-black)]/10 bg-white p-8 md:p-9">
                <div className="font-head font-bold text-[var(--sw-black)] text-[48px] md:text-[60px] leading-none tracking-[-0.02em]">
                  {s.value}
                </div>
                <div className="mt-4 text-[15px] md:text-[16px] text-[var(--sw-black)]/70 leading-snug">
                  {s.label}
                </div>
                <div className="mt-6 pt-5 border-t border-[var(--sw-black)]/10 font-head font-semibold text-[var(--sw-black)] text-[15px]">
                  {s.client}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
