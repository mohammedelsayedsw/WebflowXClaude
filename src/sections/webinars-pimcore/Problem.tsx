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
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[68rem]">
          <Reveal>
            <div className="label-code mb-4 inline-flex items-center gap-3 text-white/60">
              <span className="text-white/55">2</span>
              <span className="h-px w-6 bg-white/15" />
              <span>The problem</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              Nobody can say which version is{" "}
              <span style={{ color: "var(--sw-mint)" }}>the right one</span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-6 max-w-[70ch] text-white/75 text-[16px] md:text-[18px] leading-relaxed">
              Your product data lives in more places than anyone can name, a
              spreadsheet for the launch, an ERP extension for the specs, a
              shared drive for the images, and another sheet for the German
              site. None of them agree, and nobody is sure which one is right.
            </p>
          </Reveal>
        </div>

        {/* Sourced from the Läderach case study, so the figure is safe to state here */}
        <Reveal delay={0.16}>
          <blockquote className="mt-10 md:mt-12 max-w-[64rem] border-l-2 border-[var(--sw-mint)] pl-6 md:pl-8">
            <p
              className="font-head text-[20px] sm:text-[24px] md:text-[30px] lg:text-[34px] leading-[1.25] tracking-[-0.01em]"
              style={{ color: "var(--sw-mint)" }}
            >
              In one catalog we worked on, a single product took 10 to 20 manual
              entries before it was ready to sell.
            </p>
          </blockquote>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-12 md:mt-14 mb-5 md:mb-6 font-head text-white/80 text-[16px] md:text-[19px]">
            A normal week
          </p>
        </Reveal>

        <ul className="grid gap-3 md:gap-4 md:grid-cols-3">
          {WEEK.map((w, i) => (
            <Reveal key={w.body} delay={0.24 + i * 0.07} className="h-full">
              <li className="flex h-full flex-col rounded-[4px] border border-white/12 bg-white/[0.035] p-6">
                <span
                  aria-hidden
                  className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-[4px] border border-white/12 bg-white/[0.05] text-[var(--sw-mint)]"
                >
                  <w.icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <p className="text-white/80 text-[15px] md:text-[16px] leading-relaxed">
                  {w.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={0.44}>
          <p className="mt-8 md:mt-10 max-w-[72ch] text-white/70 text-[16px] md:text-[18px] leading-relaxed">
            None of this looks like a crisis on any given day. It takes hours,
            the errors reach your customers, and some of it comes back as
            returns. All of it stops once product data has one home.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
