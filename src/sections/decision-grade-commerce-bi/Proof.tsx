"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const METRICS = [
  { v: "11", k: "areas of reporting: acquisition, funnel, promos, and more" },
  { v: "200K+", k: "past customers to win back" },
  { v: "5", k: "ad platforms, tracking rebuilt and accurate" },
  { v: "46", k: "dashboards, your whole business in one place" },
];

const BUILT = [
  "A rebuilt GA4 and tag setup across both stores, from scratch",
  "Order and customer data from Magento pulled into one warehouse",
  "One platform, 46 dashboards across 11 areas, on shared definitions",
  "Conversion tracking rebuilt across five ad platforms, with proper consent",
  "Deep-dive analyses that shaped the checkout redesign and the personalisation work",
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
            <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="label-code text-[var(--sw-mint)]">
                Proven with
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetUrl("/decision-grade-commerce-bi/haypp-group.png")}
                alt="Haypp Group"
                className="h-5 w-auto shrink-0 md:h-6"
              />
            </div>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              How two US eCommerce stores got numbers their leadership could{" "}
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
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-10">
              {METRICS.map((m) => (
                <div key={m.k}>
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
        </Reveal>

        {/* What we built + before/after · two columns */}
        <div className="mt-14 grid gap-10 md:mt-16 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <Reveal>
            <div>
              <span className="label-code mb-5 block text-white/50">
                What we did
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
            <figure className="rounded-[4px] border border-white/12 bg-white/[0.02] p-6 md:p-7">
              <blockquote className="font-head text-[19px] leading-[1.35] tracking-[-0.005em] text-white md:text-[22px]">
                &ldquo;Working with scandiweb has been great, because they helped
                us to implement changes and features quickly.&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl(
                    "/decision-grade-commerce-bi/patrick-ryan-simon.png"
                  )}
                  alt="Patrick Ryan Simon"
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    objectPosition: "50% 22%",
                  }}
                />
                <div>
                  <div className="text-[14px] font-medium text-white">
                    Patrick Ryan Simon
                  </div>
                  <div className="label-code mt-0.5 text-white/55">
                    Store Owner in the US market for Nicokick
                  </div>
                </div>
              </figcaption>
            </figure>
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
