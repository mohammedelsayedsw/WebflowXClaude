"use client";

import { btnLight } from "@/components/primitives/buttonStyles";
import { Reveal } from "@/components/primitives/Reveal";
import { scrollToId } from "./scrollTo";
import { BODY_LIGHT, Eyebrow, H2_LIGHT, LINE_LIGHT } from "./ui";

const STEPS = [
  {
    title: "Review your setup",
    body: "We go through your features, product data, and integrations, and note your renewal date and notice period.",
  },
  {
    title: "Fix the plan and the price",
    body: "You get a written plan with how each feature is covered, which workflows change, the schedule, and the fixed prices.",
  },
  {
    title: "Run a trial migration",
    body: "We move your product data to a test environment, configure the bundle, connect your integrations, and compare the result with your live system.",
  },
  {
    title: "Your team tests it",
    body: "Your users run their daily tasks in the test setup. We fix what they find, then agree the go-live date and a rollback plan with you.",
    approve: true,
  },
  {
    title: "Go live",
    body: "We run the final data transfer and check every integration. From then on, hosting, updates, and support are ours.",
  },
];

export function Migration() {
  return (
    <section id="migration" className="relative z-10 bg-white py-16 md:py-28">
      <div className="wrap">
        <Reveal>
          <Eyebrow>Migration</Eyebrow>
          <h2 className={`${H2_LIGHT} max-w-[22ch]`}>Five steps, and nothing switches until you approve</h2>
          <p className={`${BODY_LIGHT} mt-6 max-w-[60ch]`}>
            We plan backward from your license renewal date, so the migration and testing fit before it.
          </p>
        </Reveal>
        <ol className="mt-8 md:mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07} className="h-full">
              <li
                className={`h-full rounded-[2px] p-5 md:p-8 border ${
                  s.approve ? "bg-[var(--sw-black)] border-[var(--sw-black)]" : `bg-white ${LINE_LIGHT}`
                }`}
              >
                {s.approve && (
                  <div className="md:hidden mb-3 font-head font-bold uppercase text-[12px] tracking-[0.16em]" style={{ color: "var(--sw-mint)" }}>
                    You approve the switch
                  </div>
                )}
                <div className="flex md:block items-center gap-4">
                <span
                  className="grid place-items-center h-9 w-9 md:h-10 md:w-10 shrink-0 border font-head text-[16px] md:text-[17px]"
                  style={
                    s.approve
                      ? { color: "var(--sw-mint)", borderColor: "var(--sw-mint)" }
                      : { color: "var(--sw-blue)", borderColor: "#dfe1f0" }
                  }
                >
                  {i + 1}
                </span>
                {s.approve && (
                  <div className="hidden md:block mt-6 font-head font-bold uppercase text-[12px] tracking-[0.16em]" style={{ color: "var(--sw-mint)" }}>
                    You approve the switch
                  </div>
                )}
                <h3
                  className={`${s.approve ? "md:mt-2 text-white" : "md:mt-8 text-[var(--sw-black)]"} font-head font-bold text-[19px] md:text-[22px] leading-[1.25]`}
                >
                  {s.title}
                </h3>
                </div>
                <p className={`mt-3 md:mt-4 text-[15px] md:text-[16px] leading-relaxed ${s.approve ? "text-white/75" : "text-[var(--sw-black)]/70"}`}>
                  {s.body}
                </p>
              </li>
            </Reveal>
          ))}
          <Reveal delay={0.35} className="h-full">
            <li className="h-full flex flex-col justify-center p-2 md:p-8 list-none">
              <p className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.25]">Get a migration plan for your Akeneo setup</p>
              <a href="#cta" onClick={scrollToId("cta")} className={`${btnLight} mt-6 self-start`}>
                Discuss my migration
              </a>
            </li>
          </Reveal>
        </ol>
      </div>
    </section>
  );
}
