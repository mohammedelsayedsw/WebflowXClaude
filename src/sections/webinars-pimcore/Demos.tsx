"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const DEMOS: {
  n: string;
  title: string;
  before: string;
  inSystem: string[];
  after: string;
}[] = [
  {
    n: "01",
    title: "The rejected listing",
    before: "A marketplace rejects a product for missing or invalid attributes",
    inSystem: [
      "Required attributes checked before export",
      "Gaps flagged where they happen",
      "Corrections made once",
    ],
    after: "The listing goes live, and the fix holds for every product after it",
  },
  {
    n: "02",
    title: "One product, every channel",
    before:
      "The same product reads differently on the site, the marketplace, and the partner datasheet",
    inSystem: [
      "One record for the product",
      "Channel-specific views generated from it",
    ],
    after: "Every channel shows the same product, updated from one place",
  },
  {
    n: "03",
    title: "A new market without the mess",
    before:
      "Translations are stale, overwritten, or missing, and nobody knows which is current",
    inSystem: [
      "Language versions tracked against the source",
      "Status visible for every market",
    ],
    after: "A new market launches on current content instead of guesswork",
  },
  {
    n: "04",
    title: "Product data an AI can actually use",
    before:
      "Attributes are inconsistent, incomplete, and stored in a dozen formats",
    inSystem: [
      "Structured, complete, consistent records",
      "One definition per attribute",
    ],
    after:
      "The data underneath is ready for AI and automation, instead of blocking it",
  },
];

export function Demos() {
  return (
    <section
      id="the-demos"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[68rem]">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">5</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The demos</span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              The same problems,{" "}
              <span className="text-[var(--sw-blue)]">solved live</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[70ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
              Each demo starts from a situation you&apos;ll recognize, and ends
              with the problem gone. Working system, real records, no slides.
            </p>
          </Reveal>
        </div>

        <div className="mt-10 md:mt-14 flex flex-col gap-3 md:gap-4">
          {DEMOS.map((d, i) => (
            <Reveal key={d.title} delay={i * 0.06}>
              <article className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6 md:p-8">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="font-head text-[13px] tabular-nums leading-none text-[var(--sw-blue)]">
                    {d.n}
                  </span>
                  <h3 className="font-head font-bold text-[var(--sw-black)] text-[18px] md:text-[22px] leading-tight">
                    {d.title}
                  </h3>
                </div>

                <div className="mt-6 grid gap-5 md:gap-0 md:grid-cols-[1fr_auto_1.15fr_auto_1fr] md:items-stretch">
                  {/* before */}
                  <div className="md:pr-7">
                    <div className="label-code text-[var(--sw-black)]/45">
                      Before
                    </div>
                    <p className="mt-2.5 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
                      {d.before}
                    </p>
                  </div>

                  <div aria-hidden className="hidden md:flex items-center">
                    <ArrowRight className="h-4 w-4 text-[var(--sw-black)]/25" />
                  </div>

                  {/* in the system */}
                  <div className="md:px-7 md:border-x md:border-[var(--sw-black)]/10">
                    <div className="label-code text-[var(--sw-black)]/45">
                      In the system
                    </div>
                    <ul className="mt-2.5 flex flex-col gap-2">
                      {d.inSystem.map((s) => (
                        <li
                          key={s}
                          className="flex gap-2.5 text-[var(--sw-black)]/80 text-[14px] md:text-[15px] leading-relaxed"
                        >
                          <span
                            aria-hidden
                            className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-[4px] bg-[var(--sw-blue)]"
                          />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div aria-hidden className="hidden md:flex items-center">
                    <ArrowRight className="h-4 w-4 text-[var(--sw-black)]/25" />
                  </div>

                  {/* after */}
                  <div className="md:pl-7">
                    <div className="label-code text-[var(--sw-blue)]">After</div>
                    <p className="mt-2.5 font-head text-[var(--sw-black)] text-[15px] md:text-[16px] leading-[1.45]">
                      {d.after}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-8 md:mt-10 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[70ch]">
            These run in Pimcore, and the point is the problem being solved, not
            the product.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
