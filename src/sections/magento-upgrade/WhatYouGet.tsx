"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Benefit = { title: string; body: string };

const benefits: Benefit[] = [
  {
    title: "Lower security risk",
    body: "Back on supported versions with current patches, so you stop accumulating avoidable exposure.",
  },
  {
    title: "Everything stays compatible",
    body: "PHP, payment modules, shipping tools, and ERP connectors keep working as the platform moves on.",
  },
  {
    title: "Cheaper than waiting",
    body: "Skipped versions pile up. Upgrading now avoids a larger, more expensive upgrade later.",
  },
];

export function WhatYouGet() {
  return (
    <section id="results" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            results
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[22ch]">
            What an upgrade{" "}
            <span className="text-[var(--sw-blue)]">gets you</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            More than a version bump. Here is what a clean upgrade delivers.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-6 md:gap-8 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.07}>
              <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8">
                <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.15]">
                  {b.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed">
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
