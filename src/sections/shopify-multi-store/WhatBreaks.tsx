"use client";

import { Reveal } from "@/components/primitives/Reveal";

const items: string[] = [
  "The same app is set up differently in each store",
  "You pay for the same app again in every store",
  "A product exists in one store and is missing from the next",
  "Nobody is sure who owns the right price",
  "Stock counts disagree between Shopify and your warehouse system",
  "Content goes live in one market and never reaches another",
  "Orders quietly fail to sync, and no one notices for days",
  "The same change behaves differently store to store",
  "Site speed drops after a release and nobody flags it",
  "Tracking and analytics never quite match up",
  "The same issues keep coming back because the fix was never shared",
  "Leadership gets four reports instead of one clear picture",
];

export function WhatBreaks() {
  return (
    <section id="what-breaks" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            sound familiar
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            What usually goes wrong{" "}
            <span className="text-[var(--sw-blue)]">
              once one store becomes many
            </span>
          </h2>
          <p className="mt-7 max-w-[60ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            These show up the moment several stores run without a single view
            across them.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 grid md:grid-cols-2 md:gap-x-14">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i % 2) * 0.05}>
              <div className="flex items-baseline gap-5 py-4 border-b border-[var(--sw-black)]/10">
                <span className="font-head text-[var(--sw-black)]/20 text-[22px] md:text-[26px] leading-none tabular-nums w-[2ch] shrink-0">
                  {i + 1}
                </span>
                <span className="text-[15px] md:text-[16px] text-[var(--sw-black)]/80 leading-snug">
                  {it}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 md:mt-16 rounded-[4px] border-l-2 border-[var(--sw-blue)] bg-[var(--sw-blue)]/[0.05] pl-6 md:pl-8 py-6 md:py-7 max-w-[80ch]">
            <p className="font-head text-[var(--sw-black)] text-[19px] md:text-[24px] leading-[1.3]">
              Most of these are not Shopify problems. They are visibility
              problems.{" "}
              <span className="text-[var(--sw-blue)]">
                One connected view is what makes them fixable
              </span>
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
