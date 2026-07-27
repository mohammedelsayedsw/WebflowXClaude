"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const METRICS = [
  { v: "11", k: "intelligence areas" },
  { v: "51", k: "dashboard pages across the 11 intelligence areas" },
  { v: "7", k: "integrated data sources" },
  {
    v: "3M+",
    k: "historic customer profiles, with lifetime value, buying patterns, and the groups they fall into",
  },
];

const BUILT = [
  "Every source pulled into one place, tied to your real orders",
  "The seven live sources: Magento, GA4, Google Ads, Meta Ads, Klaviyo, Klevu, and Google Search Console (in-store POS in final testing)",
  "51 dashboards across 11 areas, covering the web, paid media, email, customer, and more",
  "A customer view with lifetime value and shopping habits across 3M+ profiles",
  "Automatic alerts, so your team hears about big moves without hunting for them",
  "Ongoing monitoring that catches broken tracking before it reaches the dashboard",
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
            <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="label-code text-[var(--sw-mint)]">
                Proven with
              </span>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetUrl("/omnichannel-bi-platform/scouting-america.png")}
                alt="Scouting America Outfitters"
                className="h-5 w-auto shrink-0 -translate-y-1 md:h-6"
              />
            </div>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              How a{" "}
              <span className="text-[var(--sw-mint)]">
                national retailer got one view
              </span>{" "}
              across its website, its shops, and its marketing
            </h2>
            <p className="mt-6 max-w-[80ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              Scouting America Outfitters sells online, through its Scout Shops,
              and by email to millions of supporters, with data spread across
              seven systems and no single view. We pulled it all into one place
              and built one platform, 51 dashboards across 11 areas, that
              leadership now runs the business from.
            </p>
          </div>
        </Reveal>

        {/* Stats band · full width */}
        <Reveal delay={0.05}>
          <div className="mt-12 border-y border-white/10 py-8 md:mt-14 md:py-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4 lg:gap-x-0">
              {METRICS.map((m, i) => (
                <div
                  key={m.v}
                  className={
                    i === 0
                      ? "lg:pl-0"
                      : "lg:border-l lg:border-white/12 lg:pl-8"
                  }
                >
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
            <figure className="rounded-[4px] border border-white/12 bg-white/[0.02] p-6 md:p-7">
              <blockquote className="font-head text-[19px] leading-[1.35] tracking-[-0.005em] text-white md:text-[22px]">
                &ldquo;Thanks to all of you for the effort that got us to where we
                are. It serves as a great example of thoughtful planning,
                communication, and diligence in pursuit of a very important
                milestone in our journey to deliver a best-in-class eCommerce
                experience.&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <div className="text-[14px] font-medium text-white">
                  John Noone
                </div>
                <div className="label-code mt-0.5 text-white/55">
                  Director of IT at Scouting America
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Built on · the only place the stack is named */}
        <Reveal delay={0.1}>
          <p className="mt-12 border-t border-white/10 pt-6 text-[13px] leading-relaxed text-white/50 md:mt-14 md:text-[14px]">
            Built on Tableau and BigQuery.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
