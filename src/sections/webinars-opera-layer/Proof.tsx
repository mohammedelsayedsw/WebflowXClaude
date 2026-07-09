"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const cases: {
  tag: string;
  meta: string;
  gap: string;
  detail: string;
  stats: [string, string][];
}[] = [
  {
    tag: "Baltic sports & apparel retail",
    meta: "€100M+ revenue · Microsoft Business Central",
    gap: "Business Central handled the books. It did not handle 50+ supplier brands.",
    detail:
      "Seasonal commitments, vendor brand reconciliation, and invoice variance flags. None of it deserved a full ERP customisation.",
    stats: [
      ["€34M", "SS26 purchasing tracked live across every supplier brand"],
      ["52", "Invoice discrepancies caught before goods reached shelves"],
    ],
  },
  {
    tag: "US specialty retail",
    meta: "50-state direct-to-consumer · Magento 2",
    gap: "Magento handled the storefront. It did not handle 50-state pricing.",
    detail:
      "State-by-state pricing logic, multiple margin types, scheduled price updates back to the storefront. Excel was never going to scale.",
    stats: [
      ["50", "US states priced live; Excel and manual formulas eliminated"],
      ["8", "Live margin types, instantly recalculated per state"],
    ],
  },
  {
    tag: "B2B electrical & industrial supply",
    meta: "~100 vendors · Microsoft Dynamics NAV",
    gap: "Navision handled the orders. It did not handle 100 PDF invoice formats.",
    detail:
      "Invoice extraction, line-by-line PO matching, exception review with confidence scores. Too business-specific for any off-the-shelf OCR.",
    stats: [
      ["~100", "Vendor PDF formats handled by a single extraction module"],
      ["87%", "Auto-match rate; exceptions surfaced for human review only"],
    ],
  },
];

export function Proof() {
  return (
    <section
      id="proof"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[760px]">
          <Reveal>
            <SectionLabel index="6">The proof</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[28px] sm:text-[34px] md:text-[44px] lg:text-[50px] leading-[1.05] tracking-[-0.01em] mt-6 max-w-[22ch]">
              Different industries.{" "}
              <span style={{ color: "var(--sw-mint)" }}>Same pattern.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[60ch]">
              Each case opens with the gap that fell between the systems, then
              what we built to close it.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4 md:space-y-5">
          {cases.map((c, i) => (
            <Reveal key={c.tag} delay={i * 0.07}>
              <article className="rounded-[4px] border border-white/10 bg-white/[0.03] p-6 sm:p-8 md:p-10">
                <div className="grid gap-8 md:gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                  {/* LEFT · narrative */}
                  <div>
                    <div className="label-code text-white/50 text-[10px] mb-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span style={{ color: "var(--sw-mint)" }}>
                        Case 0{i + 1}
                      </span>
                      <span className="h-px w-4 bg-white/20" />
                      <span>{c.meta}</span>
                    </div>
                    <h3 className="font-head font-bold text-white text-[20px] md:text-[26px] leading-[1.2] max-w-[26ch]">
                      {c.gap}
                    </h3>
                    <p className="mt-4 text-white/70 text-[14px] md:text-[15px] leading-relaxed max-w-[54ch]">
                      {c.detail}
                    </p>
                  </div>

                  {/* RIGHT · stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 md:gap-4">
                    {c.stats.map(([k, l]) => (
                      <div
                        key={k}
                        className="rounded-[2px] border border-white/10 bg-white/[0.02] px-5 py-4"
                      >
                        <div
                          className="font-head font-bold text-[28px] md:text-[34px] leading-none tabular-nums"
                          style={{ color: "var(--sw-mint)" }}
                        >
                          {k}
                        </div>
                        <div className="mt-2.5 text-white/70 text-[13px] leading-snug">
                          {l}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
