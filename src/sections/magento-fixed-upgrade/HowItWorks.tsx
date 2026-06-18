"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Step = { number: string; title: string; body: string; duration: string };

const steps: Step[] = [
  {
    number: "1",
    title: "Send your store",
    body: "Your domain, current Magento version, extension list, and any custom modules or integrations you are unsure about. That is all we need to start.",
    duration: "5 minutes",
  },
  {
    number: "2",
    title: "We read it",
    body: "AI-assisted analysis runs the compatibility scan, flags deprecated methods, and maps extension and custom-module risk. Senior Magento engineers review the output and sign off. No code is touched, no admin access is needed.",
    duration: "behind the scenes",
  },
  {
    number: "3",
    title: "You get a fixed price",
    body: "Within 48 business hours you get your target version, the scope, your exact fixed price in the matched tier, a timeline, a written risk register, and a clear list of what we will not touch.",
    duration: "within 48 hours",
  },
  {
    number: "4",
    title: "We run the upgrade",
    body: "If you go ahead, senior engineers deliver it at the price we quoted. Scope locked, zero-downtime deploy, post-launch cover. If you do not, the estimate is yours to keep and use however you like.",
    duration: "5 days to 8 weeks",
  },
];

export function HowItWorks() {
  return (
    <section
      id="how"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">how it works</div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            From your store to a fixed price in{" "}
            <span style={{ color: "var(--sw-mint)" }}>48 hours</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-white/80">
            The estimate is the whole entry point. No call needed to get a
            number, no access to your store, no commitment. The scan is
            automated, and a senior engineer reviews every result before it
            becomes a quote.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <Reveal key={s.number} delay={i * 0.07}>
              <article
                className="h-full rounded-[4px] border border-white/10 p-7 md:p-8"
                style={{
                  background:
                    "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.55)",
                }}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div className="font-head text-[var(--sw-mint)] text-[40px] md:text-[48px] leading-none tabular-nums">
                    {s.number}
                  </div>
                  <div className="label-code text-white/55 text-right">
                    {s.duration}
                  </div>
                </div>
                <h3 className="font-head text-white text-[22px] md:text-[26px] leading-[1.15]">
                  {s.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-white/80 leading-relaxed">
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
