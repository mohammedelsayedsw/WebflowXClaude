"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

export function HowWeWork() {
  const steps = [
    {
      n: "1",
      length: "€490 · 5 days",
      label: "Check",
      title: "Vertical commerce audit",
      body:
        "We map your current commerce setup against the accelerator pattern. You get a gap list, reusable parts you already have, custom work needed, and a first-sprint recommendation. Useful even if you stop here.",
    },
    {
      n: "2",
      length: "€990 · 5 days",
      label: "Proof",
      title: "One-module build",
      body:
        "Bring one painful workflow. Two working sessions, prototype with workflow logic, integration map, and build estimate. Credited toward the next step within 14 days. Output is ready-to-build, not a slide deck.",
    },
    {
      n: "3",
      length: "€1,900",
      label: "Start",
      title: "First accelerator sprint",
      body:
        "First delivery sprint on the highest-value workflow once module fit is clear. From here you can either ramp into a full configure-and-launch programme, or stop with a working module shipped.",
    },
  ];
  return (
    <section id="how-we-work" className="relative bg-lp-bright py-28 md:py-40 text-[var(--sw-black)]">
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[22ch] text-[var(--sw-black)]">
            Start small.{" "}
            <span className="text-[var(--sw-blue)]">Step up only when each step earns the next</span>
          </h2>
          <p className="mt-6 text-[var(--sw-black)]/75 max-w-[58ch] text-[16px] md:text-[17px] leading-relaxed">
            Three levels, three concrete outputs. The €490 audit is the lowest-friction entry – credited toward the next step within 14 days if you continue. You only commit to a full programme once you have already seen one module working.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-5 md:gap-6">
          {steps.map((s, i) => {
            const accent = i === 0 ? "#3F4AAF" : i === 1 ? "#6EF76E" : "#DADCF1";
            return (
              <Reveal key={s.n} delay={i * 0.1}>
                <div
                  className="relative h-full rounded-[4px] p-7 md:p-9 text-white overflow-hidden transition-all hover:-translate-y-0.5"
                  style={{
                    background:
                      "linear-gradient(180deg, #171a38 0%, #10132c 100%)",
                    border: "1px solid rgba(230,231,239,0.08)",
                  }}
                >
                  <span
                    className="absolute top-0 left-0 h-[3px] w-12"
                    style={{ background: accent }}
                  />

                  <div className="flex items-center justify-between mb-8">
                    <span
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full font-head font-semibold text-[14px]"
                      style={{
                        border: `1px solid ${accent}`,
                        color: accent,
                        background: `${accent}11`,
                      }}
                    >
                      {s.n}
                    </span>
                    <span
                      className="label-code px-2.5 py-1 rounded-[2px]"
                      style={{
                        border: "1px solid rgba(230,231,239,0.18)",
                        color: "rgba(255,255,255,0.7)",
                      }}
                    >
                      {s.length}
                    </span>
                  </div>

                  <div className="label-code text-[var(--sw-mint)] mb-2 tracking-[0.2em]">
                    {s.label.toUpperCase()}
                  </div>
                  <h3 className="font-head text-white text-[22px] md:text-[26px] leading-[1.12] mb-3 max-w-[18ch]">
                    {s.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-white/70 leading-relaxed max-w-[40ch]">
                    {s.body}
                  </p>

                  <svg viewBox="0 0 100 1" className="absolute left-0 right-0 bottom-0 w-full h-px" preserveAspectRatio="none">
                    <DrawnPath
                      d="M0 0.5 H100"
                      stroke={accent}
                      strokeWidth={1}
                      strokeOpacity={0.7}
                      duration={1}
                      delay={0.4 + i * 0.1}
                    />
                  </svg>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
