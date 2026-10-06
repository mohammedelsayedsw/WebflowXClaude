"use client";

import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { scrollToId } from "./scrollTo";

const STEPS = [
  {
    title: "Review your current setup",
    body: "We review your features, product data, and integrations, then plan around your renewal date and notice period.",
  },
  {
    title: "Agree the plan and fixed costs",
    body: "We agree how each capability is supported, any workflow changes, and the schedule. Migration and service prices are fixed upfront.",
  },
  {
    title: "Run a trial migration",
    body: "Your product data moves into a test environment with the bundle configured and integrations adapted, then we compare it with your current system.",
  },
  {
    title: "Your team tests and approves",
    body: "Your team tests the features and workflows it uses. We fix what they find and agree the switch and recovery plan with you.",
    approve: true,
  },
  {
    title: "Go live, then we run it",
    body: "We complete the final data transfer and check integrations. After that, hosting, maintenance, upgrades, and support are ours.",
  },
];

export function Migration() {
  return (
    <section id="migration" className="relative z-10 py-24 md:py-32 bg-[var(--sw-black)]">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-white/45">Migration</div>
          <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[20ch]">
            Your Akeneo migration,{" "}
            <span style={{ color: "var(--sw-mint)" }}>fully managed</span>
          </h2>
          <p className="mt-6 text-white/70 text-[15px] md:text-[17px] leading-relaxed max-w-[56ch]">
            We migrate your data, configure the bundle, and connect your systems. Nothing switches
            over until your team has tested it.
          </p>
        </Reveal>

        <ol className="mt-14 border-t border-white/10">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <li className="grid grid-cols-[48px_minmax(0,1fr)] md:grid-cols-[80px_minmax(0,5fr)_minmax(0,7fr)] gap-x-4 md:gap-x-10 gap-y-2 py-7 border-b border-white/10">
                <span className="font-head font-bold text-white/35 text-[22px] md:text-[28px] leading-none md:row-span-1">
                  {i + 1}
                </span>
                <h3 className="font-head font-semibold text-white text-[20px] md:text-[22px] leading-[1.2]">
                  {s.title}
                  {s.approve && (
                    <span className="ml-3 align-middle label-code" style={{ color: "var(--sw-mint)" }}>
                      You approve the switch
                    </span>
                  )}
                </h3>
                <p className="col-start-2 md:col-start-3 text-white/70 text-[15px] md:text-[16px] leading-relaxed max-w-[60ch]">
                  {s.body}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal>
          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <p className="text-white/70 text-[16px]">Review the plan for your Akeneo setup</p>
            <a href="#cta" onClick={scrollToId("cta")} className={btnPrimary}>
              Discuss my migration
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
