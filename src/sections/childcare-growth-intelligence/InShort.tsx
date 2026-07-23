"use client";

import { Reveal } from "@/components/primitives/Reveal";

const decisions = ["Occupancy", "Board reporting", "Expansion", "Staffing"];
const systems = ["Nursery systems", "CRM", "Recruitment", "Finance and market data"];

/** Static layered diagram: systems (bottom) -> hub (middle) -> decisions (top). */
function GroupDiagram() {
  return (
    <div
      className="w-full max-w-[440px] mx-auto lg:mr-0 lg:ml-auto rounded-[4px] p-5 sm:p-7"
      style={{ background: "#10132c", border: "1px solid rgba(255,255,255,0.1)" }}
    >
      {/* Top · the decisions it supports */}
      <div className="label-code text-white/45 text-[10px] mb-3 text-center">
        The decisions it supports
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {decisions.map((c) => (
          <span
            key={c}
            className="font-head flex items-center justify-center rounded-[2px] border border-white/12 bg-white/[0.05] px-1 py-2 text-center text-[8.5px] leading-tight text-white/80"
          >
            {c}
          </span>
        ))}
      </div>

      {/* connector: hub up into the four boxes */}
      <svg
        viewBox="0 0 100 22"
        preserveAspectRatio="none"
        className="my-1.5 h-5 w-full"
        aria-hidden
      >
        {[12.5, 37.5, 62.5, 87.5].map((x, i) => (
          <line
            key={i}
            x1="50"
            y1="22"
            x2={x}
            y2="0"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

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
        <div className="text-white/60 text-[11px] mt-1.5">
          One trusted view of your whole group
        </div>
      </div>

      {/* connector: four systems up into the hub */}
      <svg
        viewBox="0 0 100 22"
        preserveAspectRatio="none"
        className="my-1.5 h-5 w-full"
        aria-hidden
      >
        {[12.5, 37.5, 62.5, 87.5].map((x, i) => (
          <line
            key={i}
            x1={x}
            y1="22"
            x2="50"
            y2="0"
            stroke="rgba(255,255,255,0.22)"
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        ))}
      </svg>

      {/* Bottom · the systems it connects */}
      <div className="label-code text-white/45 text-[10px] mb-3 text-center">
        The systems it connects
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {systems.map((m) => (
          <span
            key={m}
            className="font-head flex items-center justify-center rounded-[2px] border border-white/10 bg-white/[0.03] px-1 py-2 text-center text-[8.5px] leading-tight text-white/80"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

export function InShort() {
  return (
    <section id="in-short" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16 lg:items-center">
          {/* LEFT · text */}
          <div className="max-w-[40rem]">
            <Reveal>
              <span className="label-code block text-[var(--sw-black)]/50">
                In short
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="font-head mt-5 max-w-[26ch] text-[26px] leading-[1.08] tracking-[-0.01em] text-[var(--sw-black)] sm:text-[32px] md:text-[40px] lg:text-[46px]">
                What the{" "}
                <span className="text-[var(--sw-blue)]">
                  Childcare Growth Intelligence Hub
                </span>{" "}
                is
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-7 max-w-[68ch] text-[16px] leading-relaxed text-[var(--sw-black)]/70 md:text-[18px]">
                It answers three questions a growing nursery group cannot answer
                well from spreadsheets: how full will each room be in the weeks
                ahead, can you stand behind the numbers you put in front of
                investors, and where is the next site or acquisition worth
                making. The Childcare Growth Intelligence Hub pulls your nursery,
                CRM, recruitment, finance, and market data into one place, and
                turns it into those answers.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-5 max-w-[68ch] text-[16px] leading-relaxed text-[var(--sw-black)]/70 md:text-[18px]">
                And your own team can rely on it. Every number traces back to
                one trusted source, so board reporting, capacity planning, and
                expansion decisions no longer wait on spreadsheets.
              </p>
            </Reveal>
          </div>

          {/* RIGHT · diagram */}
          <Reveal delay={0.15}>
            <GroupDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
