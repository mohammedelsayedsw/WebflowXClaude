"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Step = { number: string; title: string; body: string; duration: string };

const steps: Step[] = [
  {
    number: "1",
    title: "Free migration check",
    body: "We look at your store and hand you a map. What breaks, what carries over, what gets rebuilt, and the license saving in writing. No commitment, no fee. If the move does not make sense for you, we say so.",
    duration: "free",
  },
  {
    number: "2",
    title: "Live demo of your store",
    body: "For a fixed fee we stand up your own catalog and checkout on Magento Open Source. You click through the real flows and confirm the parity holds before committing to anything bigger. The fee is credited toward migration.",
    duration: "$1,500, credited",
  },
  {
    number: "3",
    title: "Full migration",
    body: "Data, custom code, extensions, and storefront moved across and validated. Licensed enterprise features rebuilt as owned solutions. We run the cutover with no gap in trading and no surprise scope.",
    duration: "from $15,000",
  },
  {
    number: "4",
    title: "Live, and yours",
    body: "You go live on a platform you own outright. No annual license, no vendor lock-in, self-hosted on infrastructure you control. Optional performance and CRO work continues only if you want it.",
    duration: "ongoing",
  },
];

export function HowWeWork() {
  return (
    <section id="how" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            how the move actually runs
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            Four steps.{" "}
            <span className="text-[var(--sw-blue)]">Stop after any of them</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            See the exact cost before you commit. See your own store running on
            Open Source. Move the whole thing when you are ready. If it stops
            making sense at any point, you stop, and nothing is locked in.
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
