"use client";

import { Reveal } from "@/components/primitives/Reveal";

const CAPABILITIES = [
  {
    title: "A forecast for how you actually buy",
    body: "It forecasts by market, category, brand, and gender, the way your buyers plan, not by individual product codes that change every season.",
  },
  {
    title: "Right down to each size",
    body: "It breaks every forecast down to sizes, based on what really sells in each, so you order the right depth.",
  },
  {
    title: "See what will run out, before it does",
    body: "It tracks how long your stock will last and flags every line as fine, running low, or about to sell out, so reorders happen in time.",
  },
  {
    title: "Every market on its own numbers",
    body: "Each country is forecast on its own demand, not a shared regional average.",
  },
  {
    title: "You can see why, and overrule it",
    body: "It shows what's behind every number, and your team can change any forecast they disagree with.",
  },
  {
    title: "Dashboards your buyers actually use",
    body: "Reorders, size mix, and seasonal demand, laid out around the decisions your team makes every Monday.",
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
