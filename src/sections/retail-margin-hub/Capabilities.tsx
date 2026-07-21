"use client";

import { Reveal } from "@/components/primitives/Reveal";

const CAPABILITIES = [
  {
    title: "A forecast at planning grain",
    body: "Market, category, activity, brand, gender, and item type, the shape your buyers actually plan in, rather than SKUs that do not exist yet.",
  },
  {
    title: "Size-level allocation",
    body: "Every forecast row split across sizes from real purchase shares, with totals preserved exactly.",
  },
  {
    title: "Forward stock cover",
    body: "A rolling stock-on-hand walk that flags every line as fine, at the safety limit, or stocking out, and queues the reorders that matter.",
  },
  {
    title: "Country-aware modelling",
    body: "Each market forecast on its own demand rather than a regional average.",
  },
  {
    title: "Explainable, not a black box",
    body: "The signals driving each forecast are published with every model update, and planners can override at any level.",
  },
  {
    title: "Dashboards built for category managers",
    body: "Replenishment recommendations, size mix, and product seasonality, built around the decisions your team makes on Monday morning.",
  },
];

export function Capabilities() {
  return (
    <section id="capabilities" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <span className="label-code mb-4 block text-[var(--sw-black)]/50">
            What is inside
          </span>
          <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
            What the Retail Margin Hub{" "}
            <span className="text-[var(--sw-blue)]">gives your buyers</span>
          </h2>
        </Reveal>

        {/* six capability cards, same card style as the fix section */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:mt-12 md:gap-4">
          {CAPABILITIES.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5">
                <h3 className="font-head text-[16px] font-bold leading-[1.25] text-[var(--sw-black)] md:text-[17px]">
                  {c.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--sw-black)]/60 md:text-[14px]">
                  {c.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
