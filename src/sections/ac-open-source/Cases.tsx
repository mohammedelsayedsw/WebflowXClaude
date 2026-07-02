"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Case = {
  brand: string;
  sector: string;
  time: string;
  facts: string[];
};

const cases: Case[] = [
  {
    brand: "Läderach",
    sector: "Swiss luxury chocolate",
    time: "8 weeks",
    facts: ["134 stores migrated", "6 custom modules rebuilt", "Zero downtime"],
  },
  {
    brand: "PUMA",
    sector: "Sportswear",
    time: "95 days",
    facts: ["4 markets live", "Multi-store setup moved", "License gone"],
  },
  {
    brand: "Beauty Works",
    sector: "UK B2C and B2B beauty",
    time: "10 weeks",
    facts: ["B2C and salon-pro B2B", "Custom checkout rebuilt", "$0 license"],
  },
  {
    brand: "Umniah",
    sector: "Telecom, Jordan",
    time: "12 weeks",
    facts: [
      "Legacy frontend replaced",
      "Moved to Magento and Hyvä",
      "Zero downtime",
    ],
  },
  {
    brand: "Gear-Up",
    sector: "Electronics",
    time: "6 weeks",
    facts: ["Magento 1 to 2", "5 custom modules rebuilt", "License gone"],
  },
  {
    brand: "Byggmax",
    sector: "DIY retail, Nordics",
    time: "9 weeks",
    facts: ["160+ stores", "55k SKUs moved", "$0 license"],
  },
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
          <h2 className="font-head text-white text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[24ch]">
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
                  <span className="label-code text-white/55 shrink-0 text-right">
                    {c.sector}
                  </span>
                </div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span
                    className="font-head text-[28px] md:text-[32px] leading-none"
                    style={{ color: "var(--sw-mint)" }}
                  >
                    {c.time}
                  </span>
                  <span className="text-[13px] md:text-[14px] text-white/60">
                    to migrate, end to end
                  </span>
                </div>

                <ul className="mt-5 pt-5 border-t border-white/10 space-y-2.5">
                  {c.facts.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-[14px] md:text-[15px] text-white/80 leading-snug"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: "var(--sw-mint)" }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
