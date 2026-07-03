"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const logoBase = "/magento/upgrade/logos/cases";

type Case = {
  brand: string;
  logo: string;
  logoH: number;
  sector: string;
  version: string;
  facts: string[];
};

const cases: Case[] = [
  {
    brand: "Läderach",
    logo: "laderach.svg",
    logoH: 28,
    sector: "Swiss luxury chocolate",
    version: "2.4.7",
    facts: ["30+ extensions", "Custom theme refactor", "Zero downtime"],
  },
  {
    brand: "PUMA",
    logo: "puma.svg",
    logoH: 46,
    sector: "Sportswear",
    version: "2.4.x",
    facts: ["Multi-store", "B2B flows", "On locked timeline"],
  },
  {
    brand: "Beauty Works",
    logo: "beauty-works.svg",
    logoH: 44,
    sector: "UK B2C and B2B beauty",
    version: "2.4.7",
    facts: ["Salon-pro B2B", "Custom checkout", "Peak-season safe"],
  },
  {
    brand: "Umniah",
    logo: "umniah.svg",
    logoH: 48,
    sector: "Telecom, Jordan",
    version: "Hyvä + 2.4",
    facts: ["Legacy frontend", "Multi-store", "Zero downtime"],
  },
  {
    brand: "Gear-Up",
    logo: "gear-up.svg",
    logoH: 34,
    sector: "Electronics",
    version: "1 to 2.4",
    facts: ["Magento 1 to 2", "5 custom modules", "Fixed price"],
  },
  {
    brand: "Byggmax",
    logo: "byggmax.svg",
    logoH: 22,
    sector: "DIY retail, Nordics",
    version: "2.4.x",
    facts: ["160+ stores", "55k SKUs", "99 PageSpeed"],
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
            upgrades we have delivered
          </div>
          <h2 className="font-head text-white text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[24ch]">
            The kinds of stores we{" "}
            <span style={{ color: "var(--sw-mint)" }}>upgrade most</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            Complex catalogs, multi-store estates, B2B and B2C in one stack,
            legacy versions. The upgrades other shops call risky are the ones we
            run on a fixed price.
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
                <div className="flex h-12 items-center">
                  <img
                    src={assetUrl(`${logoBase}/${c.logo}`)}
                    alt={c.brand}
                    className="w-auto max-w-[170px] object-contain"
                    style={{
                      height: `${c.logoH}px`,
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </div>
                <div className="label-code text-white/55 mt-3">{c.sector}</div>

                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-[13px] md:text-[14px] text-white/60">
                    upgraded to
                  </span>
                  <span
                    className="font-head text-[26px] md:text-[30px] leading-none"
                    style={{ color: "var(--sw-mint)" }}
                  >
                    {c.version}
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
