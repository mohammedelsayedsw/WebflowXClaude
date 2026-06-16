"use client";

import { Reveal } from "@/components/primitives/Reveal";

const grows: string[] = [
  "app stack",
  "theme",
  "product setup",
  "pricing",
  "stock rules",
  "CMS content",
  "release history",
  "integrations",
  "tracking",
  "support backlog",
];

export function WhyHard() {
  return (
    <section className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1.2fr_1fr] items-start">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/55 mb-5">
              why this gets hard
            </div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[20ch]">
              The real challenge is{" "}
              <span className="text-[var(--sw-blue)]">
                visibility across every store
              </span>
            </h2>
            <p className="mt-7 text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70 max-w-[60ch]">
              Stores get separated for valid reasons. Currencies, payment
              providers, legal entities, tax, warehouses, regional teams,
              catalogs, B2B versus D2C, CMS choices, ERP and OMS constraints,
              custom workflows, and history.
            </p>
            <p className="mt-5 text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70 max-w-[60ch]">
              The difficulty starts later. Each store grows its own app stack,
              theme, product setup, pricing, stock, CMS, release history, and
              integrations. Costs multiply. Without one view, teams find out
              something is wrong only when it breaks.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="bracket-frame relative rounded-[4px] border border-[var(--sw-black)]/12 bg-white/60 p-6 md:p-8">
              <span className="bracket-bl" />
              <span className="bracket-br" />
              <div className="label-code text-[var(--sw-black)]/55 mb-5">
                each store quietly grows its own
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {grows.map((g) => (
                  <li
                    key={g}
                    className="flex items-center gap-2.5 text-[14px] md:text-[15px] text-[var(--sw-black)]/80"
                  >
                    <span aria-hidden className="text-[var(--sw-blue)] shrink-0">→</span>
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
