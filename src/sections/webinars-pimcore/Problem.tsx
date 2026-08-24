"use client";

import { PackageX, Copy, Languages, Sparkles } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

/** One box per live demo, in the same order the demos run. */
const WEEK: { icon: typeof PackageX; key: string; body: string }[] = [
  {
    icon: PackageX,
    key: "rejected",
    body: "A sales channel rejects your product because a required field is empty",
  },
  {
    icon: Copy,
    key: "mismatch",
    body: "The same product reads differently on your site and on a partner's sheet",
  },
  {
    icon: Languages,
    key: "languages",
    body: "You update a product and the other languages don't follow",
  },
  {
    icon: Sparkles,
    key: "ai",
    body: "You want to use AI on your catalog, and the data underneath isn't ready",
  },
];

export function Problem() {
  return (
    <section
      id="the-problem"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[68rem]">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
              <span className="text-[var(--sw-black)]/55">2</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>The problem</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              Your product details live in{" "}
              <span style={{ color: "var(--sw-orange)" }}>too many places</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[70ch] font-head text-[var(--sw-black)]/80 text-[16px] md:text-[19px] leading-relaxed">
              Your product details sit in a spreadsheet, an ERP extension, a
              shared drive, and whatever your team built to fill the gaps, and
              none of them agree.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <p className="mt-10 md:mt-12 mb-5 md:mb-6 font-head text-[var(--sw-black)]/80 text-[16px] md:text-[19px]">
            So this keeps happening.
          </p>
        </Reveal>

        <ul className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {WEEK.map((w, i) => (
            <Reveal key={w.key} delay={0.18 + i * 0.07} className="h-full">
              <li className="flex h-full flex-col rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6">
                <span
                  aria-hidden
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-[var(--sw-black)]/10 bg-[var(--sw-beige)] text-[var(--sw-orange)]"
                >
                  <w.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="text-[var(--sw-black)]/75 text-[15px] md:text-[16px] leading-relaxed">
                  {w.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.4}>
          <p className="mt-8 md:mt-10 font-head text-[var(--sw-black)]/80 text-[16px] md:text-[19px] leading-relaxed">
            None of this looks like a crisis on any given day, and it all stops
            when your product details live in one place.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
