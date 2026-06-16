"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Benefit = { n: number; title: string; body: string };

const benefits: Benefit[] = [
  {
    n: 1,
    title: "One place to see what needs attention",
    body: "A single view across stores. It surfaces recurring issues, app cost and performance problems, failed integrations, and data inconsistencies, so the next action is obvious.",
  },
  {
    n: 2,
    title: "Support with context, not only tickets",
    body: "Issues are read against the whole setup, not handled store by store.",
  },
  {
    n: 3,
    title: "Clearer ownership",
    body: "Defined responsibility between teams and systems, so nothing falls through the gap.",
  },
  {
    n: 4,
    title: "Better control of app cost and app risk",
    body: "Visibility into what each app costs and what it touches across stores.",
  },
  {
    n: 5,
    title: "Fewer repeated fixes",
    body: "Root causes are solved once and shared, instead of patched per store.",
  },
  {
    n: 6,
    title: "Practical monthly reporting",
    body: "One readout leadership can actually use.",
  },
];

export function WhatChanges() {
  return (
    <section
      id="what-changes"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">
            what changes with scandiweb
          </div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[26ch]">
            What changes when scandiweb supports your{" "}
            <span style={{ color: "var(--sw-mint)" }}>
              multi-store Shopify setup
            </span>
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            Practical outcomes across stores, apps, integrations, releases, data,
            and reporting.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2">
          {benefits.map((b, i) => (
            <Reveal key={b.n} delay={(i % 2) * 0.07}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-7 md:p-8"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                }}
              >
                <div className="font-head text-white/25 text-[36px] md:text-[44px] leading-none tabular-nums mb-5">
                  {b.n}
                </div>
                <h3 className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
                  {b.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-white/75 leading-relaxed">
                  {b.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
