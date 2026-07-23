"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const METRICS = [
  { v: "97%", k: "accuracy at category level" },
  { v: "74%", k: "accuracy by brand and gender" },
  { v: "9.3M", k: "sales records it learned from" },
  { v: "513k", k: "buying recommendations a week" },
  { v: "3x", k: "faster data pipeline" },
];

const BUILT = [
  "A demand prediction model trained on 9.3 million past sales",
  "Predicts demand the way buyers plan, broken down to each size",
  "Estonia, Latvia, and Lithuania each planned on their own demand, not as one Baltic market",
  "A rebuilt Business Central data pipeline, running on about a third of the resources",
  "Three dashboards for category managers: what to reorder, which sizes, and how demand moves by season",
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
              The Baltics&apos; leading sportswear retailer, buying to{" "}
              <span className="text-[var(--sw-mint)]">
                real demand instead of a guess
              </span>
            </h2>
            <p className="mt-6 max-w-[78ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              We built Sportland&apos;s first system for predicting demand, and
              the dashboards that turn{" "}
              <br className="hidden md:block" />
              it into weekly buying decisions.
            </p>
          </div>
        </Reveal>

        {/* Stats band · full width, one row of five */}
        <Reveal delay={0.05}>
          <div className="mt-12 border-y border-white/10 py-8 md:mt-14 md:py-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
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
            Measured across a twelve-week test window
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
            <figure className="rounded-[4px] border border-white/12 bg-white/[0.02] p-6 md:p-7">
              <p className="text-[14px] leading-relaxed text-white/60 md:text-[15px]">
                When the project started, Sportland&apos;s Brand Manager set one
                goal:
              </p>
              <blockquote className="font-head mt-4 text-[19px] leading-[1.3] tracking-[-0.005em] text-white md:text-[22px]">
                &ldquo;Maximize net sales with the most optimal stock
                level.&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/retail-margin-hub/team/pertti-prits.jpg")}
                  alt="Pertti Prits"
                  className="h-11 w-11 shrink-0 rounded-full object-cover"
                  style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                />
                <div>
                  <div className="text-[14px] font-medium text-white">
                    Pertti Prits
                  </div>
                  <div className="label-code mt-0.5 text-white/55">
                    Brand Manager, Sportland
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
