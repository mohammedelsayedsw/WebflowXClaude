"use client";

import { Reveal } from "@/components/primitives/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Audit",
    body: "We map your systems and where your numbers break, so you know what you can trust today and what you cannot.",
  },
  {
    n: "2",
    title: "Centralise",
    body: "We bring your online, in-store, ad, email, and search data into one place, tied to your real sales.",
  },
  {
    n: "3",
    title: "Build",
    body: "We build the dashboards your team can trust and rely on for making decisions every day.",
  },
  {
    n: "4",
    title: "Rely",
    body: "Your team gets a setup they can rely on, and clear answers when the big questions come up. We stay on for the first 30 days to help you settle in.",
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
              First the data,{" "}
              <span className="text-[var(--sw-blue)]">
                then the dashboards
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
