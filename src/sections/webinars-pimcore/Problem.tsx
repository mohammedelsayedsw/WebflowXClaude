"use client";

import { PackageX, FileWarning, BellOff } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const WEEK: { icon: typeof PackageX; body: string }[] = [
  {
    icon: PackageX,
    body: "A marketplace rejects a listing because a required attribute is missing or wrong",
  },
  {
    icon: FileWarning,
    body: "A partner is sent a datasheet that has been out of date for two months",
  },
  {
    icon: BellOff,
    body: "A spec changes and nobody downstream is told",
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
            <p className="mt-6 max-w-[70ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
              Your product details sit in a spreadsheet, an ERP extension, a
              shared drive, and whatever your team built to fill the gaps, and
              none of them agree.
            </p>
          </Reveal>

          {/* Sourced from the Läderach case study, so the figure is safe to state here */}
          <Reveal delay={0.14}>
            <p
              className="mt-5 max-w-[68ch] font-head font-semibold text-[15px] md:text-[17px] leading-[1.45]"
              style={{ color: "var(--sw-orange)" }}
            >
              In one catalog we worked on, a single product took 10 to 20 manual
              entries before it was ready to sell.
            </p>
          </Reveal>
        </div>

        <ul className="mt-10 md:mt-14 grid gap-3 md:gap-4 md:grid-cols-3">
          {WEEK.map((w, i) => (
            <Reveal key={w.body} delay={0.18 + i * 0.07} className="h-full">
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
          <p className="mt-8 md:mt-10 max-w-[72ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            None of it looks like a crisis on any given day, and all of it stops
            once product data has one home.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
