"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const METRICS = [
  { v: "+20.6%", k: "email orders" },
  { v: "+11.3%", k: "placed-order rate" },
  { v: "+10.4%", k: "email revenue" },
  { v: "+39.1%", k: "paid ROAS" },
  { v: "+25.1%", k: "average order value" },
  { v: "-21.3%", k: "ad spend" },
];

const BUILT = [
  "A market-specific CDP setup, so each country keeps its own store view and customer data",
  "Email and product recommendations moved off two tools onto one platform",
  "Per-market automation flows: browse abandonment, cart abandonment, post-purchase, welcome, and outlet",
  "Predictive audiences synced to Google and Meta",
  "Reporting in the CDP and Looker Studio, readable outside marketing",
];

export function CaseStudy() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
      <div className="wrap relative">
        {/* Headline + intro · full width */}
        <Reveal>
          <div className="max-w-[64rem]">
            <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <span className="label-code text-[var(--sw-mint)]">
                Proven with
              </span>
              {/* keeps Sportland red, unlike the white-flattened trust-bar logos:
                  this is a named case study, not a logo wall */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetUrl("/shared/logos/clients/sportland.png")}
                alt="Sportland"
                className="h-6 w-auto shrink-0 md:h-7"
              />
            </div>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              The Baltics&apos; leading sportswear retailer, running{" "}
              <span className="text-[var(--sw-mint)]">
                every market from one platform
              </span>
            </h2>
            <p className="mt-6 max-w-[78ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              We moved Sportland&apos;s email and recommendations off two
              separate tools onto one platform, with a market-specific setup so
              each country keeps its own store view and customer data.
            </p>
          </div>
        </Reveal>

        {/* Stats band · full width, one row */}
        <Reveal delay={0.05}>
          <div className="mt-12 border-y border-white/10 py-8 md:mt-14 md:py-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
              {METRICS.map((m) => (
                <div key={m.k}>
                  <div className="font-head text-[26px] leading-none tracking-[-0.01em] text-[var(--sw-mint)] tabular-nums md:text-[34px]">
                    {m.v}
                  </div>
                  <div className="mt-2 text-[12px] leading-tight text-white/55 md:text-[13px]">
                    {m.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="label-code mt-4 text-white/50">
            All within a few months of going live
          </p>
        </Reveal>

        {/* What we built + testimonial · share the row below */}
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
            <figure className="border-l-2 border-[var(--sw-mint)] pl-6">
              <blockquote className="font-head text-[20px] leading-[1.25] tracking-[-0.005em] text-white md:text-[26px]">
                &ldquo;scandiweb has a future-looking attitude.&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl(
                    "/multi-market-personalization-2/team/henri-kruusel.jpg"
                  )}
                  alt="Henri Kruusel"
                  className="h-12 w-12 shrink-0 rounded-full object-cover"
                  style={{ border: "1px solid rgba(230,231,239,0.2)" }}
                />
                <div>
                  <div className="text-[14px] font-medium text-white">
                    Henri Kruusel
                  </div>
                  <div className="label-code mt-0.5 text-white/55">
                    Head of eCommerce and Marketing · Sportland
                  </div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
