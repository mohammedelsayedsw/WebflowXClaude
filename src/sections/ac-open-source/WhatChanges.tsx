"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Column = {
  tag: string;
  title: string;
  items: string[];
  note: string;
  accent: "stay" | "rebuild" | "optional";
};

const columns: Column[] = [
  {
    tag: "no change",
    title: "Stays exactly the same",
    accent: "stay",
    items: [
      "Same platform and admin",
      "All your data and catalog",
      "Your checkout and payments",
      "Your frontend stays the same",
      "Your store stays live throughout",
    ],
    note: "The parts you would never want touched move across untouched.",
  },
  {
    tag: "rebuilt to own",
    title: "Rebuilt once, with extensions",
    accent: "rebuild",
    items: [
      "Native B2B suite (companies, quotes, requisitions)",
      "Page Builder and content staging",
      "Visual merchandiser and segmentation",
      "Gift cards, rewards, RMA",
      "AI search",
    ],
    note: "A one-time build, using extension providers or custom-built for your modules. Not a yearly license.",
  },
  {
    tag: "what you unlock",
    title: "Worth unlocking, not just saving",
    accent: "optional",
    items: [
      "A mobile-first redesign that lifts conversion",
      "A faster checkout that recovers lost carts",
      "All-green Core Web Vitals",
      "A Hyvä storefront your team controls",
      "Visibility in AI search, on your own data",
    ],
    note: "These are not upsells. They are the growth the freed license budget pays for.",
  },
];

function dot(accent: Column["accent"]) {
  if (accent === "stay") return "var(--sw-mint)";
  if (accent === "rebuild") return "var(--sw-blue)";
  return "var(--sw-orange)";
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
                <ul className="mt-6 space-y-3 flex-1">
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
                <p className="mt-6 pt-5 border-t border-[var(--sw-black)]/10 text-[13px] md:text-[14px] text-[var(--sw-black)]/60 leading-relaxed">
                  {c.note}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
