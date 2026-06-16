"use client";

import { Reveal } from "@/components/primitives/Reveal";

const grows = [
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
        <div className="grid gap-12 md:gap-20 lg:grid-cols-[1.1fr_1fr] items-start">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/55 mb-5">why this gets hard</div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[16ch]">
              The real challenge is{" "}
              <span className="text-[var(--sw-blue)]">visibility across every store</span>
            </h2>
            <p className="mt-7 text-[16px] md:text-[18px] leading-relaxed text-[var(--sw-black)]/70 max-w-[56ch]">
              Stores get separated for good reasons. Currencies, payment providers,
              tax, warehouses, regional teams, B2B versus D2C, and years of history.
            </p>
            <p className="mt-5 text-[16px] md:text-[18px] leading-relaxed text-[var(--sw-black)]/70 max-w-[56ch]">
              The difficulty starts later. Each store quietly grows its own version
              of everything, costs multiply, and you only find out something is
              wrong when it breaks.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="lg:pt-4">
              <div className="label-code text-[var(--sw-black)]/45 mb-6">
                what every store grows its own of
              </div>
              <div className="grid grid-cols-2 gap-x-10">
                {grows.map((g, i) => (
                  <div
                    key={g}
                    className={`flex items-center gap-3 py-3.5 border-b border-[var(--sw-black)]/10 ${
                      i < 2 ? "border-t" : ""
                    }`}
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--sw-blue)]/40 shrink-0" />
                    <span className="text-[15px] md:text-[16px] text-[var(--sw-black)]/80">{g}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
