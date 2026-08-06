"use client";

import { Reveal } from "@/components/primitives/Reveal";

const MINT = "#6EF76E";
const PAPER = "255,255,255";

// Solid, defined systems — a vertical spine.
const systems: {
  label: string;
  sub?: string;
  y: number;
  h: number;
}[] = [
  { label: "ERP", sub: "records transactions", y: 16, h: 60 },
  { label: "Warehouse", y: 154, h: 48 },
  { label: "Accounting", y: 280, h: 48 },
  { label: "Suppliers", y: 406, h: 48 },
];

// Loose, unowned work — sits in the gaps between the systems above.
const gapItems: { label: string; y: number }[] = [
  { label: "Documents", y: 96 },
  { label: "Emails & PDFs", y: 222 },
  { label: "Spreadsheets", y: 348 },
];

const SYS_X = 40;
const SYS_W = 360;
const GAP_X = 92;
const GAP_W = 256;
const GAP_H = 38;

function VerticalGapDiagram() {
  return (
    <svg
      viewBox="0 0 440 470"
      className="w-full h-auto"
      role="img"
      aria-label="A vertical stack of your systems — ERP (which only records transactions), Warehouse, Accounting, Suppliers — with the manual work no system owns, Documents, Emails and PDFs, and Spreadsheets, sitting loose in the gaps between them."
    >
      {/* GAP ITEMS · loose, unowned work floating in the gaps */}
      {gapItems.map((g) => (
        <g key={g.label}>
          <rect
            x={GAP_X}
            y={g.y}
            width={GAP_W}
            height={GAP_H}
            rx="4"
            fill={`rgba(${PAPER},0.015)`}
            stroke={`rgba(${PAPER},0.32)`}
            strokeWidth="1"
            strokeDasharray="5 4"
            vectorEffect="non-scaling-stroke"
          />
          <text
            x={GAP_X + GAP_W / 2}
            y={g.y + GAP_H / 2 + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-head"
            fontSize="12.5"
            fill={`rgba(${PAPER},0.6)`}
          >
            {g.label}
          </text>
        </g>
      ))}

      {/* SYSTEMS · solid, defined */}
      {systems.map((s) => (
        <g key={s.label}>
          <rect
            x={SYS_X}
            y={s.y}
            width={SYS_W}
            height={s.h}
            rx="4"
            fill={`rgba(${PAPER},0.035)`}
            stroke={MINT}
            strokeOpacity="0.55"
            strokeWidth="1.25"
            vectorEffect="non-scaling-stroke"
          />
          {s.sub ? (
            <>
              <text
                x={SYS_X + SYS_W / 2}
                y={s.y + 28}
                textAnchor="middle"
                className="font-head"
                fontSize="18"
                fontWeight="700"
                fill={MINT}
              >
                {s.label}
              </text>
              <text
                x={SYS_X + SYS_W / 2}
                y={s.y + 48}
                textAnchor="middle"
                className="font-head"
                fontSize="11.5"
                fill={`rgba(${PAPER},0.6)`}
              >
                {s.sub}
              </text>
            </>
          ) : (
            <text
              x={SYS_X + SYS_W / 2}
              y={s.y + s.h / 2 + 1}
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-head"
              fontSize="15"
              fill={`rgba(${PAPER},0.92)`}
            >
              {s.label}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
}

export function Overview() {
  return (
    <section
      id="overview"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div aria-hidden className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* LEFT · copy */}
          <div className="max-w-[560px]">
            <Reveal>
              <div className="label-code mb-5 inline-flex items-center gap-3 text-white/60">
                <span className="text-white/55">3</span>
                <span className="h-px w-6 bg-white/15" />
                <span>The ERP gap</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.08] tracking-[-0.01em] mt-6 max-w-[22ch]">
                Why your ERP does not fix the work between systems
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-white/75 text-[16px] md:text-[18px] leading-relaxed">
                Your ERP holds your core records. The operational work lives
                around it, in documents, emails, warehouse systems, supplier
                portals, and spreadsheets, and your ERP was never built to see
                any of it.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-white/75 text-[16px] md:text-[18px] leading-relaxed">
                That is why customizing or replacing your ERP rarely fixes the
                problem. Those projects run slow and cost a lot to fit every
                document format, edge case, and internal rule, and the gaps
                between systems are still there when they finish.
              </p>
            </Reveal>
          </div>

          {/* RIGHT · vertical gap diagram */}
          <Reveal delay={0.1} className="w-full">
            <div className="mx-auto mt-[15px] w-full max-w-[400px]">
              <VerticalGapDiagram />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
