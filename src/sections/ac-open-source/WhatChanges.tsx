"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Column = {
  tag: string;
  title: string;
  blurb: string;
  items: string[];
  accent: "stay" | "rebuild" | "optional";
};

const columns: Column[] = [
  {
    tag: "no change",
    title: "Stays identical",
    blurb: "The parts you would never want touched. They move across untouched.",
    accent: "stay",
    items: [
      "Platform and admin interface",
      "All data and catalog",
      "Checkout and payments",
      "Custom modules and code",
      "Extensions and integrations",
      "Your storefront and theme",
    ],
  },
  {
    tag: "rebuilt to own",
    title: "Rebuilt with extensions",
    blurb: "Licensed enterprise features, rebuilt once on Open Source as features you own.",
    accent: "rebuild",
    items: [
      "B2B suite: companies, quotes, requisitions",
      "Page builder and content staging",
      "Visual merchandiser and segmentation",
      "Gift cards, rewards, and RMA",
      "Advanced and AI-driven search",
    ],
  },
  {
    tag: "if you want it",
    title: "Optional upgrades",
    blurb: "Worth doing while the store is open. None of it is required to move.",
    accent: "optional",
    items: [
      "Mobile redesign",
      "Checkout optimization",
      "Core Web Vitals work",
      "Hyvä theme migration",
      "AI search implementation",
    ],
  },
];

function dot(accent: Column["accent"]) {
  if (accent === "stay") return "var(--sw-mint)";
  if (accent === "rebuild") return "var(--sw-blue)";
  return "var(--sw-dark-grey)";
}

export function WhatChanges() {
  return (
    <section id="changes" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            what changes, and what does not
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[26ch]">
            Almost everything stays.{" "}
            <span className="text-[var(--sw-blue)]">
              The license is the only thing you lose
            </span>
            .
          </h2>
          <p className="mt-7 max-w-[66ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            Because Open Source is the same Magento core, most of your store
            moves without modification. A short list of licensed features get
            rebuilt as owned solutions. Everything else is optional.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-6 md:gap-8 lg:grid-cols-3">
          {columns.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.07}>
              <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8 flex flex-col">
                <div className="label-code text-[var(--sw-black)]/55 mb-4">
                  {c.tag}
                </div>
                <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.15]">
                  {c.title}
                </h3>
                <p className="mt-3 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
                  {c.blurb}
                </p>
                <ul className="mt-6 pt-5 border-t border-[var(--sw-black)]/10 space-y-3 flex-1">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-2.5 text-[14px] md:text-[15px] text-[var(--sw-black)]/80 leading-relaxed"
                    >
                      <span
                        aria-hidden
                        className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0"
                        style={{ background: dot(c.accent) }}
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
