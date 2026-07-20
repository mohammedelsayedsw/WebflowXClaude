"use client";

import { Reveal } from "@/components/primitives/Reveal";

const systems = ["ERP", "CRM", "eComm", "WMS", "Finance"];
const outcomes = ["Dashboards", "Forecasts", "Automations"];

function ConceptDiagram() {
  return (
    <div className="w-full max-w-[440px] mx-auto lg:mr-0 lg:ml-auto rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5 sm:p-7">
      {/* Tier 1 · outcomes */}
      <div className="label-code text-[var(--sw-black)]/45 text-[10px] mb-3 text-center">
        What you see
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {outcomes.map((o) => (
          <span
            key={o}
            className="rounded-[2px] border border-[var(--sw-black)]/10 bg-[var(--sw-black)]/[0.03] px-3 py-1.5 text-[var(--sw-black)]/80 text-[12px] font-head"
          >
            {o}
          </span>
        ))}
      </div>

      {/* connector */}
      <div className="flex justify-center my-3" aria-hidden>
        <div className="h-6 w-px bg-[var(--sw-black)]/15" />
      </div>

      {/* Tier 2 · OperaLayer */}
      <div
        className="rounded-[2px] px-4 py-3.5 text-center"
        style={{
          background: "rgba(110,247,110,0.12)",
          border: "1px solid rgba(110,247,110,0.5)",
        }}
      >
        <div className="font-head font-bold text-[15px] text-[var(--sw-black)]">
          OperaLayer
        </div>
        <div className="text-[var(--sw-black)]/60 text-[11.5px] mt-1">
          One data model across your systems
        </div>
      </div>

      {/* connector */}
      <div className="flex justify-center my-3" aria-hidden>
        <div className="h-6 w-px bg-[var(--sw-black)]/15" />
      </div>

      {/* Tier 3 · systems */}
      <div className="label-code text-[var(--sw-black)]/45 text-[10px] mb-3 text-center">
        Your existing systems
      </div>
      <div className="grid grid-cols-5 gap-1.5">
        {systems.map((s) => (
          <span
            key={s}
            className="rounded-[2px] border border-[var(--sw-black)]/10 bg-[var(--sw-black)]/[0.03] px-1 py-2.5 text-[var(--sw-black)]/70 text-[10.5px] font-head text-center leading-none"
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
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          {/* LEFT · copy */}
          <div className="max-w-[620px]">
            <Reveal>
              <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
                <span className="text-[var(--sw-black)]/55">1</span>
                <span className="h-px w-6 bg-[var(--sw-black)]/20" />
                <span>In short</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.08] tracking-[-0.01em] mt-6 max-w-[20ch]">
                What OperaLayer is, and what this{" "}
                <span className="text-[var(--sw-blue)]">session covers</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
                OperaLayer is a thin operational layer that runs across the
                systems you already use, unifies their data into one model, and
                hosts focused apps that close the gaps between them. Nothing gets
                replaced.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
                This session is built for B2B distribution and wholesale teams.
                We look at why work keeps falling between your ERP, CRM,
                eCommerce, and warehouse, what OperaLayer actually is, and how it
                closes that gap, with time for your questions at the end.
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
