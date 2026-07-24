"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const OUTCOMES = [
  {
    title: "Numbers you can finally trust",
    how: "by rebuilding your GA4 and tag setup from scratch and matching it to your real orders",
  },
  {
    title: "One view across every channel",
    how: "by one shared set of definitions and dashboards, instead of each channel on its own",
  },
  {
    title: "See what customers actually do",
    how: "by connecting your order data to what people do on the site",
  },
  {
    title: "Ad spend aimed at what converts",
    how: "by rebuilding conversion tracking across your ad platforms, with proper consent",
  },
  {
    title: "Leadership decides from one place",
    how: "by dashboards covering traffic, products, checkout, and customers, on one set of definitions",
  },
  {
    title: "Analysts who analyse, not assemble",
    how: "by dashboards that update themselves, instead of weekly spreadsheet work",
  },
];

export function TheFix() {
  return (
    <section id="the-fix" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <span className="label-code mb-4 block text-[var(--sw-black)]/50">
            The fix
          </span>
          <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
            We rebuild your tracking into{" "}
            <span className="text-[var(--sw-blue)]">
              numbers your team can act on
            </span>
          </h2>
        </Reveal>

        {/* six outcomes in a three column grid */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:mt-12 md:gap-4">
          {OUTCOMES.map((o, i) => (
            <Reveal key={o.title} delay={i * 0.06} className="h-full">
              <div className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-4">
                <h3 className="font-head text-[16px] font-bold leading-[1.25] text-[var(--sw-black)] md:text-[17px]">
                  {o.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-[var(--sw-black)]/55">
                  <span
                    aria-hidden
                    className="mr-1.5 font-semibold text-[var(--sw-blue)]"
                  >
                    &rarr;
                  </span>
                  {o.how}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* slim full-width CTA band under the results */}
        <Reveal delay={0.1}>
          <a
            href="#cta"
            className="group mt-3 flex flex-col justify-between gap-4 rounded-[4px] p-5 transition-colors sm:flex-row sm:items-center md:mt-4 md:px-7"
            style={{ background: "var(--sw-blue)" }}
          >
            <span className="font-head text-[16px] font-bold text-white md:text-[18px]">
              Want numbers you can act on?
            </span>
            <span className="inline-flex w-fit shrink-0 items-center gap-1.5 rounded-[2px] border border-white/55 px-4 py-2 font-head text-[13px] font-semibold text-white transition-colors group-hover:bg-white group-hover:text-[var(--sw-blue)]">
              Book a free analytics consultation
              <ArrowUpRight className="h-4 w-4 shrink-0" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
