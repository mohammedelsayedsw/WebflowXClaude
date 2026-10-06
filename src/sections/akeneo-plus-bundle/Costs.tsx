"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { useSavings } from "./Savings";
import { ANNUAL_SERVICE_PRICE, MIGRATION_PRICE } from "./status";

export function Costs() {
  const { money } = useSavings();
  const rows = [
    {
      kind: "License",
      title: "Akeneo license fee",
      price: money(0),
      body: "Community Edition carries no Akeneo license fee.",
    },
    {
      kind: "One-off",
      title: "Migration",
      price: money(MIGRATION_PRICE),
      body: "Fixed price to transfer your data, configure the bundle, adapt integrations, and validate the new setup.",
    },
    {
      kind: "Per year",
      title: "Maintenance, hosting, and upgrades",
      price: money(ANNUAL_SERVICE_PRICE),
      body: "Fixed price for the bundle, hosting sized for your catalog, compatibility testing, upgrades, and technical support.",
    },
  ];

  return (
    <section id="costs" className="relative z-10 py-24 md:py-32 bg-[#05070f]">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-white/45">Cost model</div>
          <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[20ch]">
            Know what you pay{" "}
            <span style={{ color: "var(--sw-mint)" }}>after migration</span>
          </h2>
        </Reveal>
        <div className="mt-14 border-t border-white/10">
          {rows.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.07}>
              <div className="grid md:grid-cols-[minmax(0,3fr)_minmax(0,4fr)_minmax(0,5fr)] gap-2 md:gap-10 py-8 border-b border-white/10 md:items-baseline">
                <div className="font-head font-bold text-white text-[36px] md:text-[44px] leading-none tracking-[-0.02em]">
                  {r.price}
                </div>
                <div>
                  <div className="label-code text-white/45">{r.kind}</div>
                  <h3 className="mt-2 font-head font-semibold text-white text-[20px] md:text-[22px] leading-[1.2]">{r.title}</h3>
                </div>
                <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed">{r.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
