"use client";

import { Reveal } from "@/components/primitives/Reveal";

const grows: string[] = [
  "app stack",
  "theme",
  "product setup",
  "pricing",
  "stock rules",
  "content",
  "release history",
  "integrations",
  "tracking",
  "support backlog",
];

export function WhyHard() {
  return (
    <section className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <div className="wrap relative">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1.2fr_1fr] items-start">
          <Reveal>
            <div className="label-code text-white/55 mb-5">
              why it gets messy
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[20ch]">
              The hard part was never the stores.{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                It is seeing across them
              </span>
            </h2>
            <p className="mt-7 text-[15px] md:text-[17px] leading-relaxed text-white/80 max-w-[60ch]">
              Stores get split up for real reasons. Different currencies,
              payment setups, legal entities, tax, warehouses, regional teams,
              catalogs, B2B versus direct, and years of history.
            </p>
            <p className="mt-5 text-[15px] md:text-[17px] leading-relaxed text-white/80 max-w-[60ch]">
              The trouble starts after. Each store slowly grows its own version
              of everything, costs pile up, and without one view you only find
              out something is wrong when it breaks.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[4px] border border-white/10 bg-white/[0.03] p-6 md:p-8">
              <div className="label-code text-white/55 mb-5">
                every store quietly grows its own
              </div>
              <ul className="grid grid-cols-2 gap-x-4 gap-y-3">
                {grows.map((g) => (
                  <li
                    key={g}
                    className="flex items-center gap-2.5 text-[14px] md:text-[15px] text-white/85"
                  >
                    <span aria-hidden style={{ color: "var(--sw-mint)" }}>
                      →
                    </span>
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
