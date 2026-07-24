"use client";

import { Reveal } from "@/components/primitives/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Audit",
    body: "We check your tracking, your GA4, and where your numbers break, so you know what you can trust today and what you cannot.",
  },
  {
    n: "2",
    title: "Rebuild",
    body: "We fix the tracking from the ground up and pull your order data into one place, so the numbers finally agree.",
  },
  {
    n: "3",
    title: "Build",
    body: "We build the dashboards your leadership decides from and your team can trust and use every day, covering traffic, products, checkout, and customers.",
  },
  {
    n: "4",
    title: "Run",
    body: "We keep it accurate as your business changes, and run deep dives on the live questions you are deciding on.",
  },
];

export function HowWeStart() {
  return (
    <section id="how-we-start" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="mb-14 max-w-[54rem] md:mb-20">
          <Reveal>
            <span className="label-code mb-5 block text-[var(--sw-black)]/50">
              How we start
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
              Fix the foundation first,{" "}
              <span className="text-[var(--sw-blue)]">
                then the dashboards you decide from
              </span>
            </h2>
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
