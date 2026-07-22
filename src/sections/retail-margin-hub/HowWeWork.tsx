"use client";

import { Reveal } from "@/components/primitives/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Audit",
    body: "We map how you buy today, where the data sits, and which decisions are costing you margin.",
  },
  {
    n: "2",
    title: "Data foundation",
    body: "We build the pipeline from Business Central and your retail and web systems into one forecast-ready layer, reusable for whatever you model next.",
  },
  {
    n: "3",
    title: "The forecast",
    body: "We train it on your own sales history, the way your team plans, and test it against a past period before anyone relies on it.",
  },
  {
    n: "4",
    title: "Sizes and reordering",
    body: "It works the forecast down to each size, then turns it into a list of what to reorder and when.",
  },
  {
    n: "5",
    title: "Dashboards your buyers use",
    body: "Replenishment, size mix, and seasonality views, built around the decisions your category managers make each week.",
  },
];

export function HowWeWork() {
  return (
    <section id="how-we-work" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="mb-14 max-w-[52rem] md:mb-20">
          <Reveal>
            <span className="label-code mb-5 block text-[var(--sw-black)]/50">
              How we roll it out
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
              Built for how you buy,{" "}
              <span className="text-[var(--sw-blue)]">not a template</span>
            </h2>
            <p className="mt-6 max-w-[72ch] text-[16px] leading-relaxed text-[var(--sw-black)]/70 md:text-[17px]">
              The same approach that gave Sportland its first working system,
              run on your own data. We stay neutral on which tools to use, and
              build around the decisions your buyers make.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="grid grid-cols-[auto_1fr] items-start gap-5 rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-3.5 md:gap-7 md:p-4">
                <span className="font-head w-8 text-[24px] leading-none text-[var(--sw-blue)] md:w-10 md:text-[28px]">
                  {s.n}
                </span>
                <div>
                  <h3 className="font-head text-[18px] leading-[1.2] text-[var(--sw-black)] md:text-[20px]">
                    {s.title}
                  </h3>
                  <p className="mt-2 max-w-[72ch] text-[14px] leading-relaxed text-[var(--sw-black)]/65 md:text-[15px]">
                    {s.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
