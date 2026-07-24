"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const METRICS = [
  { v: "11", k: "areas of the business, from tracking to checkout to customers" },
  { v: "46", k: "dashboards in one place, on shared definitions" },
  { v: "$7.69M", k: "measured each month across both stores, matched to real orders" },
  { v: "285,186", k: "customers segmented by stage, frequency, and spend" },
];

const BUILT = [
  "A rebuilt GA4 and tag setup across both stores, from scratch",
  "Order and customer data from Magento pulled into one warehouse",
  "One platform, 46 dashboards across 11 areas, on shared definitions",
  "Conversion tracking rebuilt across five ad platforms, with proper consent",
  "Deep-dive analyses that shaped the checkout redesign and the personalisation work",
];

const SHIFTS = [
  {
    before: "Broken tracking no one trusted",
    after: "GA4 rebuilt and matched to real orders",
  },
  {
    before: "Two stores, two silos",
    after: "one view across both",
  },
  {
    before: "Order data stuck in Magento",
    after: "sales connected to on-site behaviour",
  },
  {
    before: "Ad platforms fed bad data",
    after: "accurate conversion data across five platforms",
  },
];

export function Proof() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
      <div className="wrap relative">
        {/* Headline + intro · full width */}
        <Reveal>
          <div className="max-w-[64rem]">
            <span className="label-code mb-6 block text-[var(--sw-mint)]">
              Proven with Haypp Group
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              How two US ecommerce stores got numbers their leadership could{" "}
              <span className="text-[var(--sw-mint)]">finally trust</span>
            </h2>
            <p className="mt-6 max-w-[80ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              Haypp Group runs Northerner and Nicokick on Magento, and had grown
              fast, but the tracking behind them had not kept up. The two stores
              reported separately, the numbers did not match the orders, and
              order data was stuck in Magento. We rebuilt the tracking from
              scratch, connected the order data, and built one platform, 46
              dashboards across 11 areas, that leadership now reviews every week.
            </p>
          </div>
        </Reveal>

        {/* Stats band · full width */}
        <Reveal delay={0.05}>
          <div className="mt-12 border-y border-white/10 py-8 md:mt-14 md:py-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:flex lg:justify-between lg:gap-x-8">
              {METRICS.map((m) => (
                <div key={m.k} className="lg:max-w-[15rem]">
                  <div className="font-head text-[24px] leading-none tracking-[-0.01em] text-[var(--sw-mint)] md:text-[32px]">
                    {m.v}
                  </div>
                  <div className="mt-2 text-[12px] leading-tight text-white/55 md:text-[13px]">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* required honesty caveat */}
          <p className="mt-4 max-w-[90ch] text-[12px] leading-relaxed text-white/45 md:text-[13px]">
            Haypp Group results. The revenue and growth figures are the whole
            business&apos;s, which the platform now measures accurately, not
            uplift from the analytics work alone.
          </p>
        </Reveal>

        {/* What we built + before/after · two columns */}
        <div className="mt-14 grid gap-10 md:mt-16 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <Reveal>
            <div>
              <span className="label-code mb-5 block text-white/50">
                What we built
              </span>
              <ul className="flex flex-col gap-3">
                {BUILT.map((b) => (
                  <li
                    key={b}
                    className="flex gap-3 text-[15px] leading-snug text-white/80 md:text-[16px]"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[var(--sw-mint)]" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <span className="label-code mb-5 block text-white/50">
                Before and after
              </span>
              <div className="flex flex-col gap-2.5">
                {SHIFTS.map((s) => (
                  <div
                    key={s.before}
                    className="rounded-[4px] border border-white/10 bg-white/[0.02] p-4"
                  >
                    <div className="text-[13px] leading-snug text-white/45 line-through decoration-white/25">
                      {s.before}
                    </div>
                    <div className="mt-1.5 flex gap-2 text-[14px] leading-snug text-white md:text-[15px]">
                      <span aria-hidden className="text-[var(--sw-mint)]">
                        &rarr;
                      </span>
                      {s.after}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Built on · the only place the stack is named */}
        <Reveal delay={0.1}>
          <p className="mt-12 border-t border-white/10 pt-6 text-[13px] leading-relaxed text-white/50 md:mt-14 md:text-[14px]">
            Built on GA4, Google Tag Manager, BigQuery, and Looker Studio.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
