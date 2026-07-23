"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const METRICS = [
  { v: "~90%", k: "faster reporting" },
  { v: "3.06M to 336K", k: "duplicates matched to real people" },
  { v: "40%+", k: "of online sales from email and SMS" },
  { v: "In-house", k: "run without the software supplier" },
];

const BUILT = [
  "One trusted customer identity, replacing vendor-controlled rules for which entries are the same person",
  "A clean, checked customer database with failure handling, so bad customer files get caught",
  "Automated reporting, replacing manual exports and spreadsheets",
  "What people do on site, carts, and purchases connected to known customers",
  "Joined-up audiences feeding email, SMS, Google, and Meta",
  "Store stylists given real customer history and preferences",
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
                src={assetUrl("/customer-data-control-hub/lafayette-148.png")}
                alt="Lafayette 148"
                className="h-5 w-auto shrink-0 md:h-6"
              />
            </div>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              A luxury fashion brand that{" "}
              <span className="text-[var(--sw-mint)]">
                took back control of its customer data
              </span>
            </h2>
            <p className="mt-6 max-w-[80ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              Lafayette 148 New York moved off vendor-locked rules for which
              entries are the same person and spreadsheet reporting onto a clean,
              checked customer database their own team runs, before their old
              contract forced another year&apos;s renewal.
            </p>
          </div>
        </Reveal>

        {/* Stats band · full width, one row of four */}
        <Reveal delay={0.05}>
          <div className="mt-12 border-y border-white/10 py-8 md:mt-14 md:py-10">
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 lg:flex lg:justify-between lg:gap-x-8">
              {METRICS.map((m) => (
                <div key={m.k}>
                  <div className="font-head text-[22px] leading-none tracking-[-0.01em] text-[var(--sw-mint)] md:text-[30px]">
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
                &ldquo;scandiweb is experienced and responsive. A true partner
                whose expertise we rely on for our toughest projects.&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <div className="text-[14px] font-medium text-white">
                  Jonathan Chan
                </div>
                <div className="label-code mt-0.5 text-white/55">
                  Executive Director, Lafayette 148
                </div>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* Built on · the only place the stack is named */}
        <Reveal delay={0.1}>
          <p className="mt-12 border-t border-white/10 pt-6 text-[13px] leading-relaxed text-white/50 md:mt-14 md:text-[14px]">
            Built on Salesforce Data Cloud and AWS, with Tableau reporting. The
            stack proves delivery. What you buy is control.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
