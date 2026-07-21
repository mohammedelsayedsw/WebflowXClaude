"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const BUILT = [
  "A demand forecasting engine trained on 9.3 million historical sales transactions",
  "Forecasts at the grain buyers plan in, then split across sizes for reordering",
  "Estonia, Latvia, and Lithuania modelled separately instead of as one Baltic market",
  "A rebuilt ERP data pipeline, running on roughly a third of the resources",
  "Three category manager dashboards: replenishment recommendations, size mix, and product seasonality",
];

const ACCURACY = [
  { v: "97%", k: "at category level" },
  { v: "74%", k: "at brand, activity, and gender" },
];

const SCALE = [
  { v: "9.3M", k: "transactions modelled" },
  { v: "513k", k: "weekly forecast rows" },
  { v: "3x", k: "lighter data pipeline" },
];

function StatCell({ v, k }: { v: string; k: string }) {
  return (
    <div>
      <div className="font-head text-[26px] leading-none tracking-[-0.01em] text-[var(--sw-mint)] tabular-nums md:text-[34px]">
        {v}
      </div>
      <div className="mt-2 text-[12px] leading-tight text-white/55 md:text-[13px]">
        {k}
      </div>
    </div>
  );
}

export function CaseStudy() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
      <div className="wrap relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* LEFT · story + what we built */}
          <Reveal>
            <div>
              <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-4">
                <span className="label-code text-[var(--sw-mint)]">
                  Proven with Sportland
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
              <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[44px]">
                The Baltics&apos; leading sportswear retailer,{" "}
                <span className="text-[var(--sw-mint)]">
                  buying to a forecast instead of a hunch
                </span>
              </h2>
              <p className="mt-6 max-w-[64ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
                We built Sportland&apos;s first production demand forecasting
                engine, and the dashboards that turn its output into weekly
                buying decisions.
              </p>

              <span className="label-code mt-10 mb-5 block text-white/50">
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

          {/* RIGHT · stat groups, top-aligned with the headline */}
          <Reveal delay={0.1}>
            <div className="flex flex-col gap-8 rounded-[4px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <div>
                <span className="label-code mb-5 block text-[var(--sw-mint)]">
                  Forecast accuracy
                </span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-6">
                  {ACCURACY.map((m) => (
                    <StatCell key={m.k} v={m.v} k={m.k} />
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <span className="label-code mb-5 block text-[var(--sw-mint)]">
                  Scale
                </span>
                <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                  {SCALE.map((m) => (
                    <StatCell key={m.k} v={m.v} k={m.k} />
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-6">
                <p className="label-code text-white/50">
                  Measured across a twelve-week test window.
                </p>
                <p className="mt-3 text-[12px] leading-relaxed text-white/40 md:text-[13px]">
                  Business impact on stock-out rate, service level, and
                  full-price sell-through is being measured as the dashboards
                  move into daily use.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Testimonial · full width below */}
        <Reveal delay={0.1}>
          <figure className="mt-14 border-l-2 border-[var(--sw-mint)] pl-6 md:mt-16">
            <blockquote className="font-head max-w-[40ch] text-[20px] leading-[1.25] tracking-[-0.005em] text-white md:text-[26px]">
              &ldquo;Maximize net sales with the most optimal stock
              level.&rdquo;
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-4">
              <span
                className="font-head flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[15px] text-[var(--sw-mint)]"
                style={{ border: "1px solid rgba(110,247,110,0.4)" }}
                aria-hidden
              >
                PP
              </span>
              <div>
                <div className="text-[14px] font-medium text-white">
                  Pertti Prits
                </div>
                <div className="label-code mt-0.5 text-white/55">
                  Brand Manager · Sportland
                </div>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
