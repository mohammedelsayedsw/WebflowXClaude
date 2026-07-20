"use client";

import { Reveal } from "@/components/primitives/Reveal";

// One third-party stat, kept deliberately. The real case leads this section.
const stat = {
  value: "~16 hrs",
  label: "a week lost to manually syncing data across disconnected systems",
  source: "Cin7 State of Inventory Intelligence, 2025",
};

export function PainPoints() {
  return (
    <section id="the-pain" className="bg-lp-bright py-28 md:py-36 scroll-mt-20">
      <div className="wrap">
        <div className="mb-12 md:mb-16 max-w-[760px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">3</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The pain</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em]">
              More systems,{" "}
              <span className="text-[var(--sw-blue)]">more gaps between them</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
              That story is not unusual. The average distributor or B2B seller
              runs a stack of specialised systems, and each one is good in its
              lane. The cost lives in the space between them: the work that no
              single system owns, done by hand.
            </p>
          </Reveal>
        </div>

        {/* single stat, presented as a wide bar rather than a lonely card */}
        <Reveal delay={0.1}>
          <div className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 sm:p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-4 md:gap-10">
            <div className="font-head font-bold text-[var(--sw-blue)] text-[48px] md:text-[64px] leading-none tabular-nums shrink-0">
              {stat.value}
            </div>
            <div>
              <p className="text-[var(--sw-black)]/80 text-[16px] md:text-[19px] leading-snug max-w-[46ch]">
                {stat.label}
              </p>
              <div className="mt-3 text-[var(--sw-black)]/45 text-[11px] md:text-[12px]">
                {stat.source}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
