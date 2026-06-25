"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const items = [
  "The true cost of Adobe Commerce licensing, and why it climbs at every renewal",
  "What you keep vs. what gets rebuilt when you move to Magento Open Source",
  "The migration path, the risks involved, and how to keep the switch safe",
  "A realistic timeline: how long a migration actually takes and how we avoid downtime",
  "Life after migration: self-hosting, full ownership, and ongoing support",
  "Live Q&A: bring your store and we map your migration live",
];

export function WhatThisIsAbout() {
  return (
    <section
      id="what-this-is-about"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">3</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The session</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[28px] sm:text-[34px] md:text-[42px] lg:text-[48px] leading-[1.05] mt-6 lg:whitespace-nowrap">
              What will be covered{" "}
              <span style={{ color: "var(--sw-blue)" }}>
                during the webinar
              </span>
            </h2>
          </Reveal>
        </div>

        <ul className="space-y-5 md:space-y-6 max-w-[72ch]">
          {items.map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <li className="flex items-center gap-4">
                <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-[2px] border border-[var(--sw-black)]/15 bg-[var(--sw-black)]/[0.03]">
                  <Check className="h-4 w-4 text-[var(--sw-blue)]" />
                </span>
                <span
                  className={
                    "text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed" +
                    (i === 0 ? " lg:whitespace-nowrap" : "")
                  }
                >
                  {t}
                </span>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
