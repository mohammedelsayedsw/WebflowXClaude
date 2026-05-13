"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Step = { number: string; title: string; body: string; duration: string };

const steps: Step[] = [
  {
    number: "01",
    title: "Math call",
    body: "Thirty minutes. You bring your current support invoice and a rough sketch of your team shape. We bring rate comparisons against your actual numbers, not generic averages. If the math doesn't beat your current setup, we say so on the call.",
    duration: "30 minutes",
  },
  {
    number: "02",
    title: "Transition plan",
    body: "If the math works, we map the handover. Codebase walkthrough, ticket triage, on-call rotation, releases, key access. Most transitions complete in 2-4 weeks of parallel work; no big-bang switchovers, no gap in coverage.",
    duration: "2–4 weeks",
  },
  {
    number: "03",
    title: "Live in production",
    body: "Same team every month. PR reviews, releases, bug fixes, integration work, performance tuning. Monthly invoice with hour-by-hour breakdown. No surprise scope changes, no mid-quarter rate adjustments.",
    duration: "ongoing",
  },
  {
    number: "04",
    title: "Quarterly math review",
    body: "Every three months we look at the numbers together. What was billed, what was delivered, what changed. If the math stops working for either side, we say so. Predictable spend, no annual renewal theater.",
    duration: "quarterly",
  },
];

export function HowWeWork() {
  return (
    <section id="how" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            how this actually runs
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            Four steps.{" "}
            <span className="text-[var(--sw-blue)]">No pitch deck</span>. No
            sales theater.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            We don&apos;t lead with case study slides. We lead with the math
            against your actual spend, then a transition plan, then the work.
            The whole process from call to live is usually inside a calendar
            month.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.07}>
              <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8">
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="font-head text-[var(--sw-black)]/25 text-[40px] md:text-[48px] leading-none tabular-nums">
                    {s.number}
                  </div>
                  <div className="label-code text-[var(--sw-black)]/55 text-right">
                    {s.duration}
                  </div>
                </div>
                <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.15]">
                  {s.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed">
                  {s.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
