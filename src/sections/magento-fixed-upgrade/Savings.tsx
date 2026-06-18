"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Row = {
  label: string;
  store: string;
  note: string;
  tmLabel: string;
  tmRange: string;
  ourRange: string;
};

const rows: Row[] = [
  {
    label: "Standard",
    store: "Mid-market Magento store",
    note: "Custom theme, 10 to 30 extensions, a few custom modules, a multi-version jump.",
    tmLabel: "mid-market agency T&M",
    tmRange: "$15,000-$30,000",
    ourRange: "$5,000-$9,000",
  },
  {
    label: "Advanced",
    store: "Complex Magento store",
    note: "B2B logic, ERP sync, account pricing, custom modules, multi-store.",
    tmLabel: "senior agency T&M",
    tmRange: "$25,000-$50,000",
    ourRange: "$9,000-$15,000",
  },
  {
    label: "Enterprise",
    store: "Adobe Commerce at scale",
    note: "Multi-store, multi-region, deep integrations, performance and security.",
    tmLabel: "premium / in-house T&M",
    tmRange: "$60,000-$150,000",
    ourRange: "$15,000-$30,000",
  },
];

export function Savings() {
  return (
    <section id="math" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            fixed price vs time and materials
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[26ch]">
            The same upgrade,{" "}
            <span className="text-[var(--sw-blue)]">without the open-ended bill</span>
            .
          </h2>
          <p className="mt-7 max-w-[68ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            These are typical agency time-and-materials ranges for the same
            scope. Yours may sit higher or lower. The free estimate runs the
            comparison against your actual store, not these numbers.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 space-y-6 md:space-y-8">
          {rows.map((r, i) => (
            <Reveal key={r.label} delay={i * 0.07}>
              <article className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white overflow-hidden">
                <div className="grid lg:grid-cols-[1fr_2fr] gap-0">
                  <div className="p-7 md:p-9 lg:border-r border-b lg:border-b-0 border-[var(--sw-black)]/10 bg-[var(--sw-black)]/[0.02]">
                    <div className="label-code text-[var(--sw-black)]/55 mb-3">
                      {r.label} tier
                    </div>
                    <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.15]">
                      {r.store}
                    </h3>
                    <p className="mt-4 text-[13px] md:text-[14px] text-[var(--sw-black)]/65 leading-relaxed">
                      {r.note}
                    </p>
                  </div>

                  <div className="p-7 md:p-9 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 items-center">
                    <div>
                      <div className="label-code text-[var(--sw-black)]/55 mb-2">
                        {r.tmLabel}
                      </div>
                      <div className="font-head text-[var(--sw-black)]/45 text-[24px] md:text-[30px] leading-none tabular-nums line-through">
                        {r.tmRange}
                      </div>
                      <div className="mt-2 text-[12px] md:text-[13px] text-[var(--sw-black)]/55">
                        billed by the hour
                      </div>
                    </div>
                    <div className="md:border-l md:border-r border-[var(--sw-black)]/10 md:px-8">
                      <div className="label-code text-[var(--sw-blue)] mb-2">
                        our fixed price
                      </div>
                      <div className="font-head text-[var(--sw-black)] text-[28px] md:text-[38px] leading-none tabular-nums">
                        {r.ourRange}
                      </div>
                      <div className="mt-2 text-[12px] md:text-[13px] text-[var(--sw-black)]/55">
                        locked before work starts
                      </div>
                    </div>
                    <div className="col-span-2 md:col-span-1">
                      <div className="label-code text-[var(--sw-black)]/55 mb-2">
                        what changes
                      </div>
                      <div className="font-head text-[var(--sw-blue)] text-[20px] md:text-[24px] leading-[1.15]">
                        scope locked
                      </div>
                      <div className="mt-2 text-[12px] md:text-[13px] text-[var(--sw-black)]/55">
                        no overrun, same senior team
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-[13px] md:text-[14px] text-[var(--sw-black)]/55 leading-relaxed max-w-[80ch]">
            What matters is a fixed number you can budget against, instead of a
            range that climbs as the work goes on. Send your store and we price
            your exact upgrade.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
