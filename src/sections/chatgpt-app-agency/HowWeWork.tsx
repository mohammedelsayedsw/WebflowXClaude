"use client";

import { Reveal } from "@/components/primitives/Reveal";

export function HowWeWork() {
  const steps = [
    { n: "01", title: "Strategy", body: "The use case that actually moves the metric." },
    { n: "02", title: "MCP server", body: "Tools, schemas, auth, hosting." },
    { n: "03", title: "Integrations", body: "Your platforms, ERP, CRM, PIM, and search." },
    { n: "04", title: "Widgets + auth", body: "ChatGPT UI where text isn’t enough." },
    { n: "05", title: "Submission", body: "Test, harden, and ship to OpenAI review." },
  ];

  return (
    <section
      id="how-we-work"
      className="relative bg-[var(--sw-black)] py-28 md:py-36"
    >
      <div className="wrap">
        <div className="max-w-[64ch] mb-16 md:mb-24">
          <Reveal>
            <p className="text-[13px] uppercase tracking-[0.18em] font-semibold text-[var(--sw-mint)] mb-5">
              How we build it
            </p>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              From idea to live{" "}
              <span className="text-[var(--sw-mint)]">ChatGPT App</span>{" "}
              in weeks.
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[58ch] leading-relaxed">
              One team. One contract. From workflow to OpenAI review.
            </p>
          </Reveal>
        </div>

        <div className="relative">
          {/* solid connecting line — runs across the row at the circles' centers */}
          <div
            aria-hidden
            className="hidden md:block absolute top-7 h-px bg-white/15"
            style={{ left: "calc(10% + 28px - 1px)", right: "calc(10% + 28px - 1px)" }}
          />

          <div className="grid gap-10 md:gap-6 md:grid-cols-5">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <div className="relative h-full">
                  <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--sw-black)] border border-[var(--sw-mint)]/40 mb-7">
                    <span className="font-head font-bold text-[15px] text-[var(--sw-mint)] tabular-nums">
                      {s.n}
                    </span>
                  </div>
                  <h3 className="font-head text-white text-[20px] md:text-[22px] leading-[1.2] mb-3 font-bold">
                    {s.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-white/65 leading-relaxed max-w-[28ch]">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
