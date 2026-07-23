"use client";

import { Reveal } from "@/components/primitives/Reveal";

const decisions = [
  "Occupancy",
  "Board reporting",
  "Expansion",
  "Admissions",
  "Staffing",
];
const systems = [
  "Nursery management",
  "CRM",
  "Recruitment",
  "Web and enquiries",
  "Finance",
  "Market and regulator data",
];

function ConnectorFan({ count, up }: { count: number; up: boolean }) {
  const xs = Array.from({ length: count }, (_, i) => ((i + 0.5) / count) * 100);
  return (
    <svg
      viewBox="0 0 100 22"
      preserveAspectRatio="none"
      className="my-1.5 h-5 w-full"
      aria-hidden
    >
      {xs.map((x, i) => (
        <line
          key={i}
          x1={up ? "50" : `${x}`}
          y1={up ? "22" : "22"}
          x2={up ? `${x}` : "50"}
          y2="0"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}
    </svg>
  );
}

function ConnectedDiagram() {
  return (
    <div
      className="mx-auto w-full max-w-[760px] rounded-[4px] p-5 sm:p-7"
      style={{ background: "#10132c", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      {/* Top · the decisions it supports */}
      <div className="label-code text-white/45 text-[10px] mb-3 text-center">
        The decisions it supports
      </div>
      <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-5">
        {decisions.map((c) => (
          <span
            key={c}
            className="font-head flex items-center justify-center rounded-[2px] border border-white/12 bg-white/[0.05] px-1 py-2 text-center text-[9px] leading-tight text-white/80"
          >
            {c}
          </span>
        ))}
      </div>

      <ConnectorFan count={5} up />

      {/* Middle · hub */}
      <div
        className="rounded-[2px] px-4 py-3.5 text-center"
        style={{
          background: "rgba(110,247,110,0.08)",
          border: "1px solid rgba(110,247,110,0.35)",
        }}
      >
        <div
          className="font-head font-bold text-[14px] leading-tight"
          style={{ color: "var(--sw-mint)" }}
        >
          Childcare Growth Intelligence Hub
        </div>
      </div>

      <ConnectorFan count={6} up={false} />

      {/* Bottom · your systems */}
      <div className="label-code text-white/45 text-[10px] mb-3 text-center">
        Your systems
      </div>
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-3 md:grid-cols-6">
        {systems.map((m) => (
          <span
            key={m}
            className="font-head flex items-center justify-center rounded-[2px] border border-white/10 bg-white/[0.03] px-1 py-2 text-center text-[9px] leading-tight text-white/80"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

export function ConnectedData() {
  return (
    <section id="connected-data" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="mx-auto mb-12 max-w-[60rem] text-center md:mb-16">
          <Reveal>
            <span className="label-code mb-4 block text-[var(--sw-black)]/50">
              What it connects
            </span>
            <h2 className="font-head text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
              It connects the systems{" "}
              <span className="text-[var(--sw-blue)]">
                already running your group
              </span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ConnectedDiagram />
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-[13px] leading-relaxed text-[var(--sw-black)]/50 md:text-[14px]">
            The exact set-up is agreed during the readiness assessment.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
