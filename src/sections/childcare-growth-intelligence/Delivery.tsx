"use client";

import { Reveal } from "@/components/primitives/Reveal";

const STAGES = [
  {
    n: "1",
    title: "Assess",
    body: "We map your systems, test how far your numbers can be trusted, review privacy, and confirm whether a reliable view of the weeks ahead is possible, around one priority decision.",
  },
  {
    n: "2",
    title: "Unify",
    body: "We build the one reliable data foundation, tidy the core information, and set the refresh and access rules, with a clear record of where every number comes from.",
  },
  {
    n: "3",
    title: "Predict",
    body: "We add occupancy views, capacity alerts, and the operating dashboards your teams act on, where the data supports a reliable model.",
  },
  {
    n: "4",
    title: "Expand",
    body: "We add market insight, family types, workforce planning, and board reporting.",
  },
];

export function Delivery() {
  return (
    <section id="how-we-start" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="mb-12 max-w-[54rem] md:mb-16">
          <Reveal>
            <span className="label-code mb-4 block text-[var(--sw-black)]/50">
              How we start
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
              Start with one decision,{" "}
              <span className="text-[var(--sw-blue)]">
                build a platform that grows
              </span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:gap-4">
          {STAGES.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-6">
                <span className="font-head text-[26px] leading-none text-[var(--sw-blue)] md:text-[30px]">
                  {s.n}
                </span>
                <h3 className="font-head mt-4 text-[18px] leading-[1.2] text-[var(--sw-black)] md:text-[20px]">
                  {s.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-[var(--sw-black)]/60 md:text-[14px]">
                  {s.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
