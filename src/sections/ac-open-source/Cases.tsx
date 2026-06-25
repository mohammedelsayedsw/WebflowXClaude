"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Case = {
  brand: string;
  sector: string;
  scope: string;
  metric: string;
};

const cases: Case[] = [
  {
    brand: "Läderach",
    sector: "Swiss luxury chocolate",
    scope: "134 stores, 6 custom modules",
    metric: "8 weeks",
  },
  {
    brand: "PUMA",
    sector: "Sportswear",
    scope: "4 markets, multi-store setup",
    metric: "95 days",
  },
  {
    brand: "Beauty Works",
    sector: "B2C and B2B beauty",
    scope: "Custom checkout, B2B suite",
    metric: "10 weeks",
  },
  {
    brand: "Umniah",
    sector: "Telecom",
    scope: "Legacy frontend replaced",
    metric: "12 weeks",
  },
  {
    brand: "Gear-Up",
    sector: "Electronics",
    scope: "Magento 1 to 2 upgrade",
    metric: "6 weeks",
  },
  {
    brand: "Byggmax",
    sector: "DIY retail",
    scope: "160+ stores, 55k SKUs",
    metric: "9 weeks",
  },
];

type Stat = { value: string; label: string };

const stats: Stat[] = [
  { value: "2,100+", label: "Magento projects delivered" },
  { value: "894+", label: "Magento and Adobe Commerce certifications" },
  { value: "$4B+", label: "annual revenue generated for clients" },
  { value: "Gold", label: "Adobe Commerce partner, Hyvä Platinum partner" },
];

export function Cases() {
  return (
    <section
      id="proof"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">
            migrations we have already run
          </div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            The move is{" "}
            <span style={{ color: "var(--sw-mint)" }}>well-travelled</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            Complex catalogs, multi-store estates, B2B and B2C in one stack,
            legacy frontends. The kinds of stores people assume cannot move are
            the ones we move most.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cases.map((c, i) => (
            <Reveal key={c.brand} delay={i * 0.06}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-6 md:p-7"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
                    {c.brand}
                  </h3>
                  <span
                    className="font-head text-[16px] md:text-[18px] leading-none shrink-0"
                    style={{ color: "var(--sw-mint)" }}
                  >
                    {c.metric}
                  </span>
                </div>
                <div className="label-code text-white/55 mt-3">{c.sector}</div>
                <p className="mt-4 pt-4 border-t border-white/10 text-[14px] md:text-[15px] text-white/80 leading-relaxed">
                  {c.scope}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div
            className="mt-14 md:mt-20 rounded-[4px] border border-white/10 p-7 md:p-9"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
            }}
          >
            <div className="label-code text-white/55 mb-6">
              the most-certified Magento team, on both platforms
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-[2px] border border-white/10 bg-white/[0.03] p-5"
                >
                  <div className="font-head text-white text-[28px] md:text-[34px] leading-none tabular-nums">
                    {s.value}
                  </div>
                  <div className="label-code text-white/55 mt-3">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
