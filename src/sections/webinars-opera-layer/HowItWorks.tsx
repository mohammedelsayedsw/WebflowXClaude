"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const systems = [
  "ERP",
  "Warehouse",
  "Accounting",
  "Supplier portal",
  "CRM",
  "Email",
];

// Top-tier box geometry — the source systems that feed into OperaLayer.
// Width is sized so six boxes plus their gaps span the same 444 as the band.
const BOX_W = 69;
const BOX_GAP = 6;
const BOX_Y = 30;
const BOX_H = 48;
const START_X = 8;
const boxX = (i: number) => START_X + i * (BOX_W + BOX_GAP);
const boxCx = (i: number) => boxX(i) + BOX_W / 2;

const MINT = "#6EF76E";
const PAPER = "255,255,255";

function StackDiagram() {
  return (
    <svg
      viewBox="0 0 460 360"
      className="w-full h-auto"
      role="img"
      aria-label="Your existing systems, ERP, warehouse, accounting, supplier portal, CRM, and email, feed down into OperaLayer, which surfaces one thing below it, what needs your attention."
    >
      {/* line from band down to the result box */}
      <line
        x1="230"
        y1="200"
        x2="230"
        y2="290"
        stroke={MINT}
        strokeOpacity="0.5"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />

      {/* lines from each system down into the band */}
      {systems.map((s, i) => (
        <line
          key={s}
          x1={boxCx(i)}
          y1={BOX_Y + BOX_H}
          x2={boxCx(i)}
          y2="150"
          stroke={MINT}
          strokeOpacity="0.4"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {/* BOTTOM · what surfaces */}
      <rect
        x="120"
        y="290"
        width="220"
        height="48"
        rx="4"
        fill={`rgba(${PAPER},0.03)`}
        stroke={MINT}
        strokeOpacity="0.5"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x="230"
        y="319"
        textAnchor="middle"
        className="font-head"
        fontSize="14"
        fill={`rgba(${PAPER},0.92)`}
      >
        What needs your attention
      </text>

      {/* MIDDLE · the OperaLayer band */}
      <rect
        x={START_X}
        y="150"
        width={460 - START_X * 2}
        height="50"
        rx="4"
        fill={MINT}
        fillOpacity="0.1"
        stroke={MINT}
        strokeOpacity="0.75"
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x="230"
        y="181"
        textAnchor="middle"
        className="font-head"
        fontSize="20"
        fontWeight="700"
        fill={MINT}
      >
        OperaLayer
      </text>

      {/* TOP · your existing systems */}
      {systems.map((s, i) => (
        <g key={s}>
          <rect
            x={boxX(i)}
            y={BOX_Y}
            width={BOX_W}
            height={BOX_H}
            rx="4"
            fill={`rgba(${PAPER},0.03)`}
            stroke={`rgba(${PAPER},0.28)`}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
          <text
            x={boxCx(i)}
            y={BOX_Y + BOX_H / 2 + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-head"
            fontSize="8.5"
            fill={`rgba(${PAPER},0.8)`}
          >
            {s}
          </text>
        </g>
      ))}
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* LEFT · copy */}
          <div className="max-w-[560px]">
            <Reveal>
              <SectionLabel index="1">What it is</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.06] tracking-[-0.01em] mt-6">
                Operational Layer,{" "}
                <span style={{ color: "var(--sw-mint)" }}>or OperaLayer</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-[60ch] text-white/85 text-[15px] md:text-[17px] leading-relaxed">
                OperaLayer sits on top of the systems you already run, your ERP,
                warehouse, accounting, suppliers, CRM, and email. It builds one
                connected picture of how your operation actually works.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-[60ch] text-white/85 text-[15px] md:text-[17px] leading-relaxed">
                On top of that picture, it takes over the manual work that lives
                between those systems, the checking and matching your team does
                by hand, and flags the exceptions that actually need a person.
                Your team stays in control, and every correction they make
                teaches the system.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-5 max-w-[60ch] text-white/85 text-[15px] md:text-[17px] leading-relaxed">
                The more of your operation runs on it, the more it sees across
                your business. The data and context are already there, so each
                new use case builds on the last, and everything lands in one
                place where you can see what needs your attention.
              </p>
            </Reveal>
          </div>

          {/* RIGHT · three-tier stack */}
          <Reveal delay={0.1} className="w-full">
            <div className="mx-auto w-full max-w-[460px]">
              <StackDiagram />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
