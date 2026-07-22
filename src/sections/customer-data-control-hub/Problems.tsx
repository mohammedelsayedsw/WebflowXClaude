"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

const PROBLEMS = [
  {
    n: "1",
    title: "The same person shows up many times",
    body: "One shopper appears as separate records across your website, stores, guest checkout, CRM, and clienteling, so your customer counts are never quite real.",
  },
  {
    n: "2",
    title: "A vendor controls who counts as who",
    body: "Your team can see how records are matched but cannot safely change the rules without paying for a support ticket and waiting.",
  },
  {
    n: "3",
    title: "Reporting is held together by hand",
    body: "Analysts spend their week on exports, spreadsheets, and reconciliations instead of on retention and campaigns.",
  },
  {
    n: "4",
    title: "Your best audiences get stuck",
    body: "High-intent segments reach email, but cannot move cleanly into Google, Meta, messaging, and store workflows.",
  },
  {
    n: "5",
    title: "The wrong records pollute the good ones",
    body: "Wholesale, fulfillment, staff, and guest records get merged into customer profiles unless someone explicitly keeps them out.",
  },
];

export function Problems() {
  return (
    <section
      id="problems"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
      <svg
        className="absolute inset-x-0 top-0 h-px w-full opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <DrawnPath
          d="M0 0.5 H1000"
          stroke="rgba(110,247,110,0.45)"
          strokeWidth={1}
          duration={1.8}
        />
      </svg>

      <div className="wrap relative">
        <div className="mb-14 max-w-[54rem] md:mb-20">
          <Reveal>
            <span className="label-code mb-5 block text-white/60">
              The problem
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-white sm:text-[32px] md:text-[40px] lg:text-[46px]">
              Your customer data works everywhere{" "}
              <span className="text-[var(--sw-mint)]">except together</span>
            </h2>
            <p className="mt-6 max-w-[80ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              You collect customer data in every system, and still cannot answer
              a simple question: which of these records are the same person, and
              what do we do about it? These five gaps are why.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.07} className="h-full">
              <div className="relative flex h-full flex-col rounded-[4px] border border-white/10 bg-white/[0.02] p-5">
                <div className="label-code mb-4 text-white/55">
                  Gap · {p.n}
                </div>
                <h3 className="font-head mb-3 text-[18px] leading-[1.2] text-white lg:text-[17px] xl:text-[18px]">
                  {p.title}
                </h3>
                <p className="text-[13px] leading-relaxed text-white/70">
                  {p.body}
                </p>
                <span className="absolute left-5 top-0 h-px w-8 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
