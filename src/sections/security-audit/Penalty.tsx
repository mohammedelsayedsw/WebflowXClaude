"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Row = {
  region: string;
  max: string;
  example: string;
};

const rows: Row[] = [
  {
    region: "EU / UK (GDPR)",
    max: "€20M or 4% of global turnover (UK £17.5M)",
    example: "SHEIN fined €150M, CNIL, 2025",
  },
  {
    region: "Canada (Quebec Law 25)",
    max: "Up to CA$25M or 4% of worldwide turnover",
    example: "In force since 2023",
  },
  {
    region: "United States (CCPA / CPRA)",
    max: "$2,500–$7,500 per violation, plus $100–750 per customer, per breach",
    example: "Compounds with FTC and state-AG actions",
  },
  {
    region: "Australia (Privacy Act)",
    max: "Up to AUD 50M, or 30% of adjusted turnover",
    example: "Australian Clinical Labs fined AUD 5.8M, 2025",
  },
  {
    region: "Brazil (LGPD)",
    max: "2% of Brazil revenue, up to R$50M per violation",
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
          <h2 className="font-head text-white text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[22ch]">
            Wherever you sell, one breach finds the{" "}
            <span style={{ color: "var(--sw-mint)" }}>worst fine</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            You are not under one privacy law. You are under all of them at
            once. A single exposed customer record can trigger whichever regime
            is harshest for your revenue, and the US, with its per-customer
            damages, is often the most expensive of all.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 md:mt-16 overflow-x-auto rounded-[4px] border border-white/10">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="bg-white/[0.04]">
                  <th className="label-code text-white/55 px-5 md:px-6 py-4">
                    Region
                  </th>
                  <th className="label-code text-white/55 px-5 md:px-6 py-4">
                    Maximum penalty
                  </th>
                  <th className="label-code text-white/55 px-5 md:px-6 py-4">
                    Recent enforcement
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.region}
                    className="border-t border-white/10 align-top"
                  >
                    <td className="px-5 md:px-6 py-5 font-head text-white text-[15px] md:text-[17px] leading-snug">
                      {r.region}
                    </td>
                    <td
                      className="px-5 md:px-6 py-5 text-[14px] md:text-[15px] leading-snug"
                      style={{ color: "var(--sw-mint)" }}
                    >
                      {r.max}
                    </td>
                    <td className="px-5 md:px-6 py-5 text-[14px] md:text-[15px] text-white/70 leading-snug">
                      {r.example}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <p className="mt-6 text-[12px] md:text-[13px] text-white/45 leading-relaxed max-w-[80ch]">
            Figures current as of July 2026. Sources: GDPR Art. 83, France CNIL,
            Quebec Law 25, California Civil Code 1798.150, Australia OAIC, Brazil
            LGPD, IBM Cost of a Data Breach 2025. Penalties are indicative
            maximums, not legal advice.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
