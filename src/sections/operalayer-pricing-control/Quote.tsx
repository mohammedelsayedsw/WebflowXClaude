"use client";

import { Rise } from "@/sections/operalayer/kit/parts";

/* A client's own words from the proposal deck, then what changed for the retailer we built it for. */
export function Quote() {
  return (
    <section id="before" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="wrap grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-14 lg:gap-16 items-start">
        <Rise className="lg:col-span-7">
          <blockquote className="font-head text-white text-[30px] sm:text-[38px] lg:text-[46px] leading-[1.14] tracking-[-0.02em] text-balance">
            &ldquo;Pricing across regions lives in a spreadsheet that one person maintains. If she&apos;s on holiday,{" "}
            <span style={{ color: "var(--sw-orange)" }}>nothing changes price.</span>&rdquo;
          </blockquote>
          <div className="mt-8 text-white text-[16px] font-semibold font-head">Commercial Director</div>
          <div className="mt-1 text-white/50 text-[15px]">Retailer in several countries</div>
        </Rise>

        <Rise delay={0.1} className="lg:col-span-5">
          <h2 className="font-head text-white text-[24px] md:text-[28px] leading-[1.15]">What changed for a US retailer selling in all 50 states</h2>
          <div className="mt-8 border-t border-white/10">
            {[
              ["Before", "One Excel workbook priced every state, and one person kept its formulas running.", false],
              ["Before", "Every price change waited for that person to update the workbook.", false],
              ["Now", "All 50 states are priced live from one set of rules in Pricing Control.", true],
              ["Now", "8 margin types are recalculated per state, and approved prices reach Magento on schedule.", true],
            ].map(([k, v, now], i) => (
              <div key={i} className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-4 py-5 border-b border-white/10">
                <span className={`text-[13px] pt-[3px] ${now ? "text-[var(--sw-mint)]" : "text-[var(--sw-dark-grey)]"}`}>{k as string}</span>
                <p className={`text-[16px] leading-relaxed ${now ? "text-white" : "text-white/55"}`}>{v as string}</p>
              </div>
            ))}
          </div>
        </Rise>
      </div>
    </section>
  );
}
