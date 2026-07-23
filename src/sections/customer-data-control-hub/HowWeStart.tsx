"use client";

import { Reveal } from "@/components/primitives/Reveal";

const PACKAGES = [
  {
    n: "1",
    title: "Assess",
    body: "The control assessment and a target plan. Fixed scope, low-risk starting point.",
  },
  {
    n: "2",
    title: "Control",
    body: "The clean, checked customer database, plus one trusted view of each customer.",
  },
  {
    n: "3",
    title: "Activate",
    body: "Email, SMS, paid media, reporting, and store use cases, prioritised by value.",
  },
  {
    n: "4",
    title: "Operate",
    body: "We keep it running, fix issues, and help you add new campaigns and reports over time.",
  },
];

export function HowWeStart() {
  return (
    <section id="how-we-start" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="mb-12 max-w-[60rem] md:mb-16">
          <Reveal>
            <span className="label-code mb-5 block text-[var(--sw-black)]/50">
              How we start
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
              Start with an assessment,{" "}
              <span className="text-[var(--sw-blue)]">not a rebuild</span>
            </h2>
            <p className="mt-6 max-w-[80ch] text-[16px] leading-relaxed text-[var(--sw-black)]/70 md:text-[17px]">
              The first step is a fixed-scope Customer Data Control Assessment.
              We map where your customer data lives, how it is matched today,
              where it cannot reach, and what your renewal deadline looks like.
              You get a clear plan and a costed estimate, with no big commitment
              before you know what you are buying.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5">
                <span className="font-head text-[26px] leading-none text-[var(--sw-blue)] md:text-[30px]">
                  {p.n}
                </span>
                <h3 className="font-head mt-4 text-[18px] leading-[1.2] text-[var(--sw-black)] md:text-[20px]">
                  {p.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--sw-black)]/60 md:text-[14px]">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
