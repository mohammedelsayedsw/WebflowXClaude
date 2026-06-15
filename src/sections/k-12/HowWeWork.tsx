"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { AssemblyStep, SectionIcon } from "./motifs";

export function HowWeWork() {
  const steps = [
    {
      n: "1",
      length: "2 to 4 weeks",
      label: "First review",
      body:
        "We look at your catalog, suppliers, sales channels, and season calendar, then agree where the accelerator can help your team most.",
    },
    {
      n: "2",
      length: "2 to 12 weeks",
      label: "Modules set up, live",
      body:
        "We set up what you chose – one module or the full accelerator – connect it to your systems, and put it into real use, with no risky overnight switch.",
    },
    {
      n: "3",
      length: "ongoing",
      label: "Your easiest season yet",
      body:
        "Supplier updates run themselves, every channel stays in sync, subscription boxes bill on time, and the shipping rules catch problems before the courier does. Your team finally has time to grow the store. We stay with you through your first peak season.",
    },
  ];

  return (
    <section id="how-we-work" className="relative bg-lp-bright py-28 md:py-40 text-[var(--sw-black)]">
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <Reveal>
          <div className="flex items-center gap-2.5 mb-5">
            <SectionIcon name="ruler-pencil" tone="light" />
            <span className="label-code text-[var(--sw-black)]/55">ASSEMBLY · 3 STEPS</span>
          </div>
          <h2 className="font-head text-[34px] md:text-[52px] lg:text-[60px] leading-[1.05] max-w-[20ch] text-[var(--sw-black)]">
            A simple{" "}
            <span className="text-[var(--sw-blue)]">three-step plan</span>
          </h2>
          <p className="mt-6 text-[var(--sw-black)]/75 max-w-[56ch] text-[16px] md:text-[17px] leading-relaxed">
            Like the numbered steps in a construction-kit instruction sheet:
            review, set up, run.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-5 md:gap-6 relative">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <div className="relative h-full rounded-[4px] border border-[var(--sw-black)]/12 bg-white/60 p-7 md:p-9 overflow-hidden">
                <div className="flex items-center justify-between mb-6">
                  <AssemblyStep n={s.n} tone="light" />
                  <span
                    className="label-code px-2.5 py-1 rounded-[2px]"
                    style={{
                      border: "1px solid rgba(63,74,175,0.25)",
                      color: "rgba(63,74,175,0.85)",
                    }}
                  >
                    {s.length}
                  </span>
                </div>

                <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.12] mb-3 max-w-[18ch]">
                  {s.label}
                </h3>
                <p className="text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed">
                  {s.body}
                </p>

                <svg viewBox="0 0 100 1" className="absolute left-0 right-0 bottom-0 w-full h-px" preserveAspectRatio="none">
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
