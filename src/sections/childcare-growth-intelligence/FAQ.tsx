"use client";

import { Plus, Minus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

function FAQItem({ q, a, i }: { q: string; a: string; i: number }) {
  return (
    <Reveal delay={i * 0.04}>
      <details className="group border-b border-[var(--sw-black)]/10 py-5 md:py-6 [&_summary]:list-none [&_summary::-webkit-details-marker]:hidden">
        <summary className="flex cursor-pointer items-start justify-between gap-6 font-head text-[var(--sw-black)] text-[17px] md:text-[19px] leading-[1.3]">
          <span>{q}</span>
          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[2px] border border-[var(--sw-black)]/15 bg-[var(--sw-black)]/[0.02] transition group-open:border-[var(--sw-blue)]/50 group-open:bg-[var(--sw-blue)]/10">
            <Plus className="h-4 w-4 text-[var(--sw-black)] group-open:hidden" />
            <Minus className="hidden h-4 w-4 text-[var(--sw-blue)] group-open:block" />
          </span>
        </summary>
        <div className="pt-4 pr-12 text-[14px] leading-relaxed text-[var(--sw-black)]/70 md:text-[16px]">
          {a}
        </div>
      </details>
    </Reveal>
  );
}

const ITEMS = [
  {
    q: "Is this a nursery-management system?",
    a: "No. It connects the data from your nursery and business systems into one place for reporting and forecasting. It does not replace the systems you run day to day.",
  },
  {
    q: "Do we need Databricks?",
    a: "Family First was built on Databricks and AWS. The right set-up for your group is agreed during the readiness assessment.",
  },
  {
    q: "How accurate will an occupancy forecast be?",
    a: "It depends on your data history, coverage, and consistency. Family First's baseline room forecast was off by less than one child on average, but every model has to be tested on your own data first.",
  },
  {
    q: "Can we start with just occupancy?",
    a: "Yes, if your room, booking, session, and capacity data is good enough. The assessment confirms what is needed.",
  },
  {
    q: "Does this make us GDPR compliant?",
    a: "No platform on its own makes you compliant. It supports good governance through data protection, access controls, and a clear record of where numbers come from.",
  },
  {
    q: "Does the acquisition scoring replace judgement?",
    a: "No. It gives you a consistent way to screen and rank opportunities. The decision stays with your leadership.",
  },
  {
    q: "What is the first step?",
    a: "A 20-minute fit call, then a scoped Childcare Data and Forecasting Readiness Assessment when there is a real use case.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:gap-20">
          <Reveal>
            <span className="label-code mb-4 block text-[var(--sw-black)]/50">
              Common questions
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[44px]">
              The things every group{" "}
              <span className="text-[var(--sw-blue)]">asks first</span>
            </h2>
          </Reveal>
          <div>
            {ITEMS.map((it, i) => (
              <FAQItem key={i} q={it.q} a={it.a} i={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
