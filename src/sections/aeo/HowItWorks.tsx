"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { BODY_DARK, H2_DARK } from "./ui";

const STEPS = [
  { title: "We prepare the drafts", body: "FAQ answers, category copy and five articles a month." },
  { title: "You approve and publish", body: "Your approver checks facts, tone and language." },
  { title: "We track the results", body: "Publication status and AI search performance, monthly." },
];

export function HowItWorks() {
  return (
    <section id="delivery" className="relative z-10 bg-[var(--sw-black)] py-16 md:py-28">
      <div className="wrap grid gap-12 lg:grid-cols-2 lg:gap-24 items-start">
        <Reveal>
          <h2 className={`${H2_DARK} max-w-[16ch]`}>
            Keep your agency. <span style={{ color: "var(--sw-mint)" }}>Add AI search.</span>
          </h2>
          <p className={`${BODY_DARK} mt-6 max-w-[44ch]`}>
            AI visibility gets a clear owner and measurable KPIs, next to your current SEO and marketing.
          </p>
        </Reveal>
        <div className="border-t border-white/15">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.07}>
              <div className="grid grid-cols-[48px_minmax(0,1fr)] md:grid-cols-[64px_minmax(0,1fr)] gap-4 border-b border-white/15 py-6 md:py-7">
                <span className="font-head font-bold text-[28px] md:text-[34px] leading-none" style={{ color: "var(--sw-mint)" }}>
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-head font-bold text-white text-[20px] md:text-[22px] leading-[1.2]">{s.title}</h3>
                  <p className="mt-1.5 text-white/65 text-[15px] md:text-[16px]">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
