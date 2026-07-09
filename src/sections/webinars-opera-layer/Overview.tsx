"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const systems = ["ERP", "CRM", "E-comm", "WMS", "Finance"];
const outcomes = ["Dashboards", "Forecasts", "Automations"];

function ConceptDiagram() {
  return (
    <div className="w-full max-w-[440px] mx-auto lg:mr-0 lg:ml-auto rounded-[4px] border border-white/10 bg-white/[0.025] p-5 sm:p-7">
      {/* Tier 1 · outcomes */}
      <div className="label-code text-white/45 text-[10px] mb-3 text-center">
        What you see
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {outcomes.map((o) => (
          <span
            key={o}
            className="rounded-[2px] border border-white/12 bg-white/[0.05] px-3 py-1.5 text-white/80 text-[12px] font-head"
          >
            {o}
          </span>
        ))}
      </div>

      {/* connector */}
      <div className="flex justify-center my-3" aria-hidden>
        <div className="h-6 w-px bg-white/15" />
      </div>

      {/* Tier 2 · OperaLayer */}
      <div
        className="rounded-[2px] px-4 py-3.5 text-center"
        style={{
          background: "rgba(110,247,110,0.08)",
          border: "1px solid rgba(110,247,110,0.35)",
        }}
      >
        <div
          className="font-head font-bold text-[15px]"
          style={{ color: "var(--sw-mint)" }}
        >
          OperaLayer
        </div>
        <div className="text-white/60 text-[11.5px] mt-1">
          One data model across your systems
        </div>
      </div>

      {/* connector */}
      <div className="flex justify-center my-3" aria-hidden>
        <div className="h-6 w-px bg-white/15" />
      </div>

      {/* Tier 3 · systems */}
      <div className="label-code text-white/45 text-[10px] mb-3 text-center">
        Your existing systems
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {systems.map((s) => (
          <span
            key={s}
            className="rounded-[2px] border border-white/10 bg-white/[0.03] px-1 py-2.5 text-white/70 text-[10.5px] font-head text-center leading-none"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export function Overview() {
  return (
    <section
      id="overview"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          {/* LEFT · copy */}
          <div className="max-w-[620px]">
            <Reveal>
              <SectionLabel index="1">In short</SectionLabel>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.08] tracking-[-0.01em] mt-6 max-w-[20ch]">
                What OperaLayer is, and what this{" "}
                <span style={{ color: "var(--sw-mint)" }}>session covers</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                OperaLayer is a thin operational layer that runs across the
                systems you already use, unifies their data into one model, and
                hosts focused apps that close the gaps between them. Nothing gets
                replaced.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
                In this webinar we look at why work keeps falling between your
                ERP, CRM, e-commerce, and warehouse, what OperaLayer actually
                is, and how it closes that gap, with time for your questions at
                the end.
              </p>
            </Reveal>
          </div>

          {/* RIGHT · concept diagram */}
          <Reveal delay={0.15}>
            <ConceptDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
