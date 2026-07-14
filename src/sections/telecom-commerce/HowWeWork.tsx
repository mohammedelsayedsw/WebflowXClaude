"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { StepNumber, SignalBars } from "./motifs";

export function HowWeWork() {
  const steps = [
    {
      n: "1",
      length: "1 week",
      label: "Discovery workshop",
      body:
        "We map your catalog and systems, pick three quick wins, and demo the accelerator against your real offers.",
    },
    {
      n: "2",
      length: "4 weeks",
      label: "Proof of concept",
      body:
        "Your real products and real prices, working in your environment.",
    },
    {
      n: "3",
      length: "3 to 4 months",
      label: "Full rollout",
      body:
        "Production-ready, integrated, live across your channels. We stay with you through the first campaign season.",
    },
  ];

  return (
    <section id="how-we-work" className="relative bg-lp-bright py-28 text-[var(--sw-black)] md:py-40">
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <Reveal>
          <div className="mb-5 flex items-center gap-2.5">
            <SignalBars tone="light" />
            <span className="label-code text-[var(--sw-black)]/55">ROLLOUT · 3 STEPS</span>
          </div>
          <h2 className="font-head max-w-[20ch] text-[34px] leading-[1.05] text-[var(--sw-black)] md:text-[52px] lg:text-[60px]">
            A simple{" "}
            <span className="text-[var(--sw-blue)]">three-step plan</span>
          </h2>
          <p className="mt-6 max-w-[92ch] text-[16px] leading-relaxed text-[var(--sw-black)]/75 md:text-[17px]">
            Three steps from a first look to live across your channels: review,
            prove, roll out.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative h-full overflow-hidden rounded-[4px] border border-[var(--sw-black)]/12 bg-white/60 p-7 md:p-9">
                <div className="mb-6 flex items-center justify-between">
                  <StepNumber n={s.n} tone="light" />
                  <span
                    className="label-code rounded-[2px] px-2.5 py-1"
                    style={{
                      border: "1px solid rgba(63,74,175,0.25)",
                      color: "rgba(63,74,175,0.85)",
                    }}
                  >
                    {s.length}
                  </span>
                </div>

                <h3 className="font-head mb-3 max-w-[18ch] text-[22px] leading-[1.12] text-[var(--sw-black)] md:text-[26px]">
                  {s.label}
                </h3>
                <p className="text-[14px] leading-relaxed text-[var(--sw-black)]/70 md:text-[15px]">
                  {s.body}
                </p>

                <svg viewBox="0 0 100 1" className="absolute bottom-0 left-0 right-0 h-px w-full" preserveAspectRatio="none">
                  <DrawnPath
                    d="M0 0.5 H100"
                    stroke="#3F4AAF"
                    strokeWidth={1}
                    strokeOpacity={0.6}
                    duration={1}
                    delay={0.4 + i * 0.1}
                  />
                </svg>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
