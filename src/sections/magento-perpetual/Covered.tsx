"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Row = { item: string; usual: string; perpetual: string };

const rows: Row[] = [
  {
    item: "Version upgrade to 2.4.9",
    usual: "$15,000 to $35,000",
    perpetual: "$0",
  },
  {
    item: "Every security patch",
    usual: "Around $1,000 each",
    perpetual: "$0",
  },
  {
    item: "Extension and custom code repair",
    usual: "A change request",
    perpetual: "Included",
  },
  {
    item: "SEO and Core Web Vitals check",
    usual: "Quoted separately",
    perpetual: "Included",
  },
  {
    item: "Who does the work",
    usual: "A new team, each time",
    perpetual: "The engineers already on your store",
  },
];

/**
 * What the program covers, and what the same line costs elsewhere, as one
 * table: no cards, hairlines only. Every cell is set at one size; the columns
 * differ by weight and colour alone. The condition sits right under it, in full.
 */
export function Covered() {
  return (
    <section id="covered" className="relative z-10 bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[16ch]">
            What Perpetual covers
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16">
          <Reveal>
            <div className="hidden md:grid grid-cols-[1.3fr_1fr_1fr] gap-8 pb-4">
              <div />
              <div className="label-code text-[var(--sw-black)]/50">
                The usual agency
              </div>
              <div className="label-code text-[var(--sw-blue)]">With Perpetual</div>
            </div>
          </Reveal>

          {rows.map((r, i) => (
            <Reveal key={r.item} delay={i * 0.07}>
              <div className="grid grid-cols-2 md:grid-cols-[1.3fr_1fr_1fr] gap-x-8 gap-y-3 items-baseline py-5 md:py-6 border-t border-[var(--sw-black)]/12 text-[17px] md:text-[19px] leading-[1.3]">
                <div className="col-span-2 md:col-span-1 font-head font-semibold text-[var(--sw-black)]">
                  {r.item}
                </div>
                <div>
                  <div className="md:hidden label-code text-[var(--sw-black)]/50 mb-1.5">
                    The usual agency
                  </div>
                  <div className="font-head text-[var(--sw-black)]/55">
                    {r.usual}
                  </div>
                </div>
                <div>
                  <div className="md:hidden label-code text-[var(--sw-blue)] mb-1.5">
                    With Perpetual
                  </div>
                  <div className="font-head font-semibold text-[var(--sw-blue)]">
                    {r.perpetual}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
          <div className="border-t border-[var(--sw-black)]/12" />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 md:mt-20 grid gap-5 md:gap-8 md:grid-cols-[1.3fr_2fr]">
            <h3 className="font-head text-[var(--sw-black)] text-[24px] md:text-[32px] leading-[1.1]">
              The condition
            </h3>
            <div className="max-w-[60ch]">
              <p className="text-[var(--sw-black)]/80 text-[17px] md:text-[19px] leading-relaxed">
                Perpetual runs for as long as scandiweb is your development
                team, inside your monthly retainer. Joining from another agency?
                Bringing your store current is scoped once, at a fixed price you
                approve first.
              </p>
              <p className="mt-5 text-[var(--sw-black)]/50 text-[13px] leading-relaxed">
                Usual agency figures are the ranges scandiweb quotes for the same
                work outside the program.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
