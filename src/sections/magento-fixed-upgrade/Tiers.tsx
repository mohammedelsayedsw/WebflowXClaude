"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Tier = {
  name: string;
  fit: string;
  price: string;
  timeline: string;
  scope: string;
  tag?: string;
  tm?: string;
};

const tiers: Tier[] = [
  {
    name: "Express",
    fit: "Up to 10 extensions, default theme, near-version jump, no custom modules",
    price: "$2,500-$5,000",
    timeline: "5 to 7 business days",
    scope:
      "Composer and database upgrade, extension patching, regression QA on your top 20 flows, zero-downtime deploy, 7 days of post-launch cover.",
  },
  {
    name: "Standard",
    fit: "Custom theme, 10 to 30 extensions, a few custom modules, multi-version jump",
    price: "$5,000-$9,000",
    timeline: "10 to 14 business days",
    scope:
      "Everything in Express, plus theme refactor, custom-module compatibility, third-party patch coordination, and a performance audit.",
    tag: "most common",
    tm: "$15,000-$30,000",
  },
  {
    name: "Advanced",
    fit: "B2B logic, ERP integrations, account pricing, quote flows, multi-store",
    price: "$9,000-$15,000",
    timeline: "3 to 4 weeks",
    scope:
      "Everything in Standard, plus ERP validation, B2B flow regression, multi-store testing, and a solution-architect review.",
    tag: "B2B & ERP",
    tm: "$25,000-$50,000",
  },
  {
    name: "Enterprise",
    fit: "Adobe Commerce, multi-region, high traffic, complex catalog, headless",
    price: "$15,000-$30,000",
    timeline: "4 to 8 weeks",
    scope:
      "Everything in Advanced, plus a dedicated engineer and PM, multi-store and multi-currency, PIM, ERP and POS integrations, and a 30-day post-launch retainer.",
    tm: "$60,000-$150,000",
  },
];

export function Tiers() {
  return (
    <section id="tiers" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            pricing · scaled to your store
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            Four tiers, each a{" "}
            <span className="text-[var(--sw-blue)]">fixed price</span> matched to
            your store.
          </h2>
          <p className="mt-7 max-w-[66ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            Most agencies quote one band and either overcharge a simple store or
            under-scope a complex one. We size the upgrade to what your store
            actually runs, then lock the price before any work starts.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-6 md:grid-cols-2">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:p-8 flex flex-col">
                <div className="flex items-center justify-between gap-3 mb-1">
                  <h3 className="font-head text-[var(--sw-black)] text-[20px] md:text-[22px] leading-tight">
                    {t.name}
                  </h3>
                  {t.tag && (
                    <span className="label-code text-[var(--sw-blue)] text-[9px] whitespace-nowrap shrink-0 rounded-[2px] border border-[var(--sw-blue)]/30 bg-[var(--sw-blue)]/[0.06] px-2 py-1">
                      {t.tag}
                    </span>
                  )}
                </div>
                <div className="mt-5 font-head text-[var(--sw-black)] text-[30px] md:text-[36px] leading-none tabular-nums">
                  {t.price}
                </div>
                {t.tm && (
                  <div className="mt-2.5 text-[12px] md:text-[13px] text-[var(--sw-black)]/45">
                    vs <span className="line-through">{t.tm}</span> typical agency
                  </div>
                )}
                <div className="mt-2 label-code text-[var(--sw-black)]/55">
                  {t.timeline}
                </div>
                <div className="mt-5 pt-5 border-t border-[var(--sw-black)]/10 text-[13px] md:text-[14px] text-[var(--sw-black)]/55 leading-snug">
                  {t.fit}
                </div>
                <p className="mt-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/75 leading-relaxed flex-1">
                  {t.scope}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12 md:mt-16 rounded-[4px] border border-[var(--sw-black)]/10 bg-white/60 px-6 md:px-8 py-5 md:py-6 text-[13px] md:text-[14px] text-[var(--sw-black)]/70 leading-relaxed">
            Not sure which one fits? That is what the free estimate is for. Send
            your store and we match the tier, and your exact price inside it, in
            48 hours.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
