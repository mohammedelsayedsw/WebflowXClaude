"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { useSavings } from "./Savings";
import { ANNUAL_SERVICE_PRICE, MIGRATION_PRICE } from "./status";
import { BODY_DARK, Eyebrow, H2_DARK } from "./ui";

export function Costs() {
  const { money } = useSavings();
  const mint = { color: "var(--sw-mint)" };

  return (
    <section id="costs" className="relative z-10 bg-[var(--sw-black)] py-24 md:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-2 lg:gap-24 items-start">
        <Reveal>
          <Eyebrow tone="mint">Cost model</Eyebrow>
          <h2 className={`${H2_DARK} max-w-[16ch]`}>Know what you pay after migration</h2>
          <p className={`${BODY_DARK} mt-6 max-w-[48ch]`}>
            You pay once for the migration, then a fixed yearly fee. The Akeneo license fee drops to zero.
          </p>
          <div className="mt-12 flex items-center gap-7">
            <span className="font-head font-bold text-[72px] md:text-[88px] leading-none tracking-[-0.04em]" style={mint}>
              {money(0)}
            </span>
            <span>
              <span className="block font-head text-white text-[20px]">Akeneo license fee</span>
              <span className="block mt-1 text-white/60 text-[14px]">Community Edition</span>
            </span>
          </div>
          <p className="mt-8 text-white/60 text-[14px] max-w-[48ch]">The calculator at the top of the page uses these prices.</p>
        </Reveal>

        <div className="grid gap-5">
          <Reveal>
            <div className="border border-white/25 rounded-[2px] p-8">
              <div className="font-head font-bold uppercase text-[12px] tracking-[0.16em]" style={mint}>One-off</div>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-head font-bold text-white text-[22px] md:text-[24px]">Migration</h3>
                <span className="font-head font-bold text-white text-[26px]">{money(MIGRATION_PRICE)}</span>
              </div>
              <p className="mt-3 text-white/75 text-[15px] md:text-[16px] leading-relaxed">
                Data transfer, bundle setup, integration changes, and testing before go-live.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border border-white/25 rounded-[2px] p-8">
              <div className="font-head font-bold uppercase text-[12px] tracking-[0.16em]" style={mint}>Every year</div>
              <div className="mt-4 flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="font-head font-bold text-white text-[22px] md:text-[24px]">Service</h3>
                <span className="font-head font-bold text-white text-[26px]">{money(ANNUAL_SERVICE_PRICE)}</span>
              </div>
              <p className="mt-3 text-white/75 text-[15px] md:text-[16px] leading-relaxed">
                The Akeneo Plus Bundle, maintenance, upgrades with compatibility testing, and technical support.
              </p>
              <div className="mt-6 pt-6 border-t border-white/15">
                <h4 className="font-head font-bold text-white text-[17px]">Hosting included</h4>
                <p className="mt-2 text-white/75 text-[15px] leading-relaxed">
                  Servers sized for your catalog and traffic, inside the same yearly price.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
