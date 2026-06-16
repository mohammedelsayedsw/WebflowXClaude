"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Item = { n: number; title: string; body: string };

const items: Item[] = [
  { n: 1, title: "Apps drift store to store", body: "The same app is installed and configured differently across stores." },
  { n: 2, title: "You pay for the same app twice", body: "One app, billed separately per store, so cost multiplies as you scale." },
  { n: 3, title: "Products live in one store, not another", body: "A product exists in one store and is missing from the next." },
  { n: 4, title: "Pricing ownership is unclear", body: "Prices differ by market, B2B, ERP, or custom logic, and no one is sure who owns the source of truth." },
  { n: 5, title: "Inventory disagrees", body: "Stock differs between Shopify, ERP, OMS, and WMS." },
  { n: 6, title: "Content lands unevenly", body: "CMS content published in one market is missing in another." },
  { n: 7, title: "Order sync fails quietly", body: "Order export or fulfillment sync breaks between Shopify and ERP or OMS." },
  { n: 8, title: "Same change, different result", body: "A change that works in one store behaves differently in another." },
  { n: 9, title: "Performance slips after releases", body: "Core Web Vitals drop after changes ship." },
  { n: 10, title: "Tracking is inconsistent", body: "Analytics and events differ store to store." },
  { n: 11, title: "The same issues keep coming back", body: "Support tickets repeat because the root cause was never shared across stores." },
  { n: 12, title: "Leadership sees fragments", body: "Separate reports per store instead of one view of the whole." },
];

export function WhatBreaks() {
  return (
    <section
      id="what-breaks"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">
            the patterns we see
          </div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            What usually breaks when Shopify{" "}
            <span style={{ color: "var(--sw-mint)" }}>becomes multi-store</span>
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            These are the issues that show up when several Shopify stores are run
            without one view across stores, apps, data, releases, and
            integrations.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-4 md:gap-5 md:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={(i % 2) * 0.06}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-6 md:p-7 flex gap-4"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.45)",
                }}
              >
                <div className="label-code text-white/55 pt-1 w-[2ch] shrink-0">
                  {it.n}
                </div>
                <div>
                  <h3 className="font-head text-white text-[17px] md:text-[19px] leading-[1.2]">
                    {it.title}
                  </h3>
                  <p className="mt-2 text-[14px] md:text-[15px] text-white/75 leading-relaxed">
                    {it.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 md:mt-20 rounded-[4px] border-l-2 border-[var(--sw-mint)] bg-white/[0.03] pl-6 md:pl-7 py-5 md:py-6 max-w-[78ch]">
            <p className="font-head text-white text-[18px] md:text-[22px] leading-[1.35]">
              Most of these are not Shopify problems. They are visibility
              problems.{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                One connected view is what makes them fixable
              </span>
              .
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
