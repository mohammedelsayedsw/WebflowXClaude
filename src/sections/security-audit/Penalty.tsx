"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Region = {
  region: string;
  law: string;
  figure: string;
  basis: string;
  example: string;
};

const regions: Region[] = [
  {
    region: "EU / UK",
    law: "GDPR",
    figure: "4%",
    basis: "of global revenue, or €20M (UK £17.5M)",
    example: "SHEIN fined €150M, 2025",
  },
  {
    region: "Canada",
    law: "Quebec Law 25",
    figure: "CA$25M",
    basis: "or 4% of worldwide turnover",
    example: "In force since 2023",
  },
  {
    region: "United States",
    law: "CCPA / CPRA",
    figure: "$750",
    basis: "per customer, per breach, plus per-violation penalties",
    example: "Compounds with FTC and state AGs",
  },
  {
    region: "Australia",
    law: "Privacy Act",
    figure: "AUD 50M",
    basis: "or 30% of adjusted turnover",
    example: "Aus Clinical Labs fined AUD 5.8M, 2025",
  },
  {
    region: "Brazil",
    law: "LGPD",
    figure: "R$50M",
    basis: "or 2% of Brazil revenue, per violation",
    example: "In force since 2020",
  },
];

export function Penalty() {
  return (
    <section
      id="stakes"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">the stakes</div>
          <h2 className="font-head text-white text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[24ch]">
            One breach. Every jurisdiction has a{" "}
            <span style={{ color: "var(--sw-mint)" }}>number</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            You are not under one privacy law. You are under all of them at
            once. A single exposed customer record triggers whichever regime is
            harshest for your revenue, and the US, with its per-customer
            damages, is often the most expensive of all.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 grid gap-4 md:gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((r, i) => (
            <Reveal key={r.region} delay={i * 0.06}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-6 md:p-7 flex flex-col"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                }}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-head text-white text-[17px] md:text-[19px]">
                    {r.region}
                  </span>
                  <span className="label-code text-white/45">{r.law}</span>
                </div>
                <div
                  className="mt-5 font-head text-[40px] md:text-[48px] leading-none"
                  style={{ color: "var(--sw-mint)" }}
                >
                  {r.figure}
                </div>
                <p className="mt-3 text-[13px] md:text-[14px] text-white/70 leading-snug">
                  {r.basis}
                </p>
                <p className="mt-5 pt-4 border-t border-white/10 label-code text-white/50">
                  {r.example}
                </p>
              </article>
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="h-full rounded-[4px] border border-[var(--sw-mint)]/30 bg-[var(--sw-mint)]/[0.06] p-6 md:p-7 flex flex-col justify-center">
              <div className="label-code text-[var(--sw-mint)] mb-3">
                the takeaway
              </div>
              <p className="font-head text-white text-[18px] md:text-[20px] leading-snug">
                Sell in three markets, and one breach exposes you to the worst
                fine of the three, at the same time.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.35}>
          <p className="mt-8 text-[12px] md:text-[13px] text-white/45 leading-relaxed max-w-[80ch]">
            Figures current as of July 2026. Sources: GDPR Art. 83, France CNIL,
            Quebec Law 25, California Civil Code 1798.150, Australia OAIC, Brazil
            LGPD, IBM Cost of a Data Breach 2025. Indicative maximums, not legal
            advice.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
