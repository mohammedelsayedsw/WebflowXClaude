"use client";

import { Reveal } from "@/components/primitives/Reveal";

// Label / value spec rows. `tbd` marks a value awaiting real input.
const ROWS: { k: string; v: string; tbd?: boolean }[] = [
  { k: "Live in", v: "To be confirmed", tbd: true },
  {
    k: "Built on",
    v: "Bloomreach, chosen against your markets and budget after we compare the options",
  },
  { k: "Unifies", v: "eCommerce, ERP, POS, email, SMS, and support data" },
  {
    k: "Per market",
    v: "separate store views, languages, and assortments, kept clean",
  },
  {
    k: "Channels",
    v: "email and journey automation, product recommendations, on-site personalisation, and audiences synced to Meta and Google",
  },
  {
    k: "Segmentation",
    v: "predictive segments and RFM models, not just lists",
  },
  { k: "Privacy", v: "consent handled per market" },
  {
    k: "Reporting",
    v: "dashboards your marketing team reads without opening the CDP",
  },
  {
    k: "After launch",
    v: "your team runs campaigns and flows without engineering",
  },
];

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="max-w-[64rem]">
          <Reveal>
            <span className="label-code mb-5 block text-[var(--sw-black)]/50">
              The build
            </span>
            <h2 className="font-head text-[28px] leading-[1.1] text-[var(--sw-black)] md:text-[40px]">
              What you get
            </h2>
          </Reveal>

          <dl className="mt-10 md:mt-12">
            {ROWS.map((row, i) => (
              <Reveal key={row.k} delay={i * 0.04}>
                <div className="grid grid-cols-[120px_1fr] md:grid-cols-[200px_1fr] gap-4 md:gap-8 border-b border-[var(--sw-black)]/10 py-4 md:py-5">
                  <dt className="label-code text-[var(--sw-black)]/55">
                    {row.k}
                  </dt>
                  <dd
                    className={
                      row.tbd
                        ? "text-[15px] italic leading-snug text-[var(--sw-black)]/40 md:text-[16px]"
                        : "text-[15px] leading-snug text-[var(--sw-black)]/85 md:text-[16px]"
                    }
                  >
                    {row.v}
                  </dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
