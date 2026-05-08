"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function BuiltByCommerce() {
  const realities = [
    "real catalog logic",
    "inventory rules",
    "customer groups",
    "tax + market rules",
    "product variants",
    "search behavior",
    "order states",
    "ERP delays",
    "return policies",
    "payment limits",
    "B2B pricing",
    "approval flows",
    "data privacy",
    "production support",
  ];

  return (
    <section id="why-us" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-start">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.18em] font-semibold text-[var(--sw-blue)] mb-5">
              Why us
            </p>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              Built by commerce engineers,{" "}
              <span className="text-[var(--sw-blue)]">not chatbot generalists</span>.
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-[var(--sw-black)]/70 max-w-[58ch] leading-relaxed">
              Most AI demos fail because the team behind them does not understand the business system underneath the screen.
            </p>
            <p className="mt-4 text-[15px] md:text-[16px] text-[var(--sw-black)]/65 max-w-[58ch] leading-relaxed">
              A commerce ChatGPT App is not just an AI prompt. It needs the same disciplines that hold a real store together. We already work across the systems that power serious commerce operations every day. ChatGPT is simply the next interface on top of those systems.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8">
              <p className="text-[11px] uppercase tracking-[0.16em] font-semibold text-[var(--sw-black)]/55 mb-5">
                A commerce ChatGPT App needs:
              </p>
              <div className="grid grid-cols-2 gap-x-5 gap-y-2 text-[14px] text-[var(--sw-black)]/85">
                {realities.map((r) => (
                  <div key={r} className="flex gap-2 py-1">
                    <span className="text-[var(--sw-blue)] font-semibold shrink-0">→</span>
                    <span>{r}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
