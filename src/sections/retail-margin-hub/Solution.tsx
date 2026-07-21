"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const OUTCOMES = [
  {
    title: "Buy to real demand, not last year's gut",
    how: "by a weekly forecast at the grain your buyers actually plan in",
  },
  {
    title: "Plan each market on its own numbers",
    how: "by modelling every country separately with country-aware features",
  },
  {
    title: "Order the right depth in every size",
    how: "by splitting each forecast across sizes using real purchase shares",
  },
  {
    title: "Reorder before you stock out",
    how: "by a forward stock-cover walk that flags every line as fine, at the limit, or stocking out",
  },
  {
    title: "Stop discounting your way out of bad buys",
    how: "by seeing weeks of cover ahead instead of reacting after the stock has piled up",
  },
  {
    title: "Trust it enough to actually use it",
    how: "by publishing what drives every forecast and letting planners override at any level",
  },
];

export function Solution() {
  return (
    <section id="solution" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        {/* heading · full width, framing line carries "what you can expect" */}
        <Reveal>
          <span className="label-code mb-4 block text-[var(--sw-black)]/50">
            The fix
          </span>
          <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
            We replace spreadsheet planning with one{" "}
            <span className="text-[var(--sw-blue)]">Retail Margin Hub</span>.
          </h2>
        </Reveal>

        {/* six parallel results */}
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
              Want this across your buying team?
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
