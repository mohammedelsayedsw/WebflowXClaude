"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const OUTCOMES = [
  {
    title: "Buy what will actually sell, not what sold last year",
    how: "by working out demand from your own recent sales, per market",
  },
  {
    title: "Plan each market on its own numbers",
    how: "by forecasting each country on its own demand, not a regional average",
  },
  {
    title: "Order the right depth in every size",
    how: "by breaking the forecast down to sizes, from what really sells in each",
  },
  {
    title: "Reorder before you stock out",
    how: "by flagging every line ahead of time as fine, running low, or about to sell out",
  },
  {
    title: "Stop discounting your way out of bad buys",
    how: "by showing how long your stock will last, so you act before it piles up",
  },
  {
    title: "Trust it enough to actually use it",
    how: "by showing what's behind every number, and letting your team overrule it",
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
