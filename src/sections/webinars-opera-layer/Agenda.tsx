"use client";

import { Reveal } from "@/components/primitives/Reveal";

const agenda: string[] = [
  "Why matching supplier documents eats your team's week",
  "The pipeline end to end, from a photo of a delivery note to a posted goods receipt",
  "Live: an invoice and a delivery note going through it",
  "What happens when the numbers do not match, and how exceptions get resolved",
  "How the system learns each supplier and gets more accurate over time",
  "What stops a bad document reaching your ERP",
  "What it takes to get one workflow live, and how long connecting your ERP really takes",
  "Your questions",
];

export function Agenda() {
  return (
    <section
      id="agenda"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[52rem]">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-white/60">
              <span className="text-white/55">6</span>
              <span className="h-px w-6 bg-white/15" />
              <span>What we will cover</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em]">
              What we will cover in{" "}
              <span style={{ color: "var(--sw-mint)" }}>45 minutes</span>
            </h2>
          </Reveal>
        </div>

        {/* column-wise flow: 1-4 down the left column, 5-8 down the right */}
        <ol className="grid grid-cols-1 md:grid-flow-col md:grid-cols-2 md:grid-rows-4 gap-x-10 gap-y-4">
          {agenda.map((item, i) => (
            <Reveal key={i} delay={(i % 2) * 0.06} className="h-full">
              <li className="flex h-full gap-4 border-b border-white/10 pb-4">
                <span className="font-head font-bold text-[var(--sw-mint)] text-[18px] md:text-[20px] tabular-nums leading-tight shrink-0 w-7">
                  {i + 1}
                </span>
                <span className="text-white/80 text-[16px] md:text-[17px] leading-snug">
                  {item}
                </span>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
