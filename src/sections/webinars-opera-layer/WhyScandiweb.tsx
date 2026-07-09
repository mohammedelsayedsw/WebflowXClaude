"use client";

import { Reveal } from "@/components/primitives/Reveal";

const stats: { value: string; label: string; note: string }[] = [
  {
    value: "1,000+",
    label: "Engagements shipped",
    note: "For retailers, manufacturers, finance and B2B operators across 40+ countries.",
  },
  {
    value: "20yrs",
    label: "Building between platforms",
    note: "ERP, CRM, e-commerce, warehouse. We know exactly where things fall through.",
  },
  {
    value: "100%",
    label: "Phase 1 to Phase 2 conversion",
    note: "Every foundation we have shipped has continued into a follow-on engagement.",
  },
  {
    value: "0",
    label: "Lock-in, hidden cost, IP held",
    note: "Your data, your code, your IP. Commercial terms unusually clean for this industry.",
  },
];

export function WhyScandiweb() {
  return (
    <section
      id="why-scandiweb"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16 max-w-[760px]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">7</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>Why scandiweb</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[28px] sm:text-[34px] md:text-[44px] lg:text-[50px] leading-[1.05] tracking-[-0.01em] max-w-[22ch]">
              We have spent twenty years building the layer{" "}
              <span className="text-[var(--sw-blue)]">between platforms</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[58ch]">
              Global e-commerce and operational engineering for some of the
              largest retailers, manufacturers, and B2B operators in Europe and
              the US. We do not consult. We ship.
            </p>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 0.07}>
              <li className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 sm:p-7">
                <div className="font-head font-bold text-[var(--sw-blue)] text-[40px] md:text-[52px] leading-none tabular-nums">
                  {s.value}
                </div>
                <div className="mt-4 font-head font-bold text-[var(--sw-black)] text-[15px] md:text-[16px] leading-tight">
                  {s.label}
                </div>
                <p className="mt-2.5 text-[var(--sw-black)]/65 text-[13px] md:text-[14px] leading-relaxed">
                  {s.note}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
