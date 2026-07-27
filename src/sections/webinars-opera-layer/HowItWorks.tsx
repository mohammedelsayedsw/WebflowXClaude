"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

const systems = ["ERP", "Warehouse", "Accounting", "Supplier portal", "Email"];

// Bottom-tier box geometry.
const BOX_W = 84;
const BOX_GAP = 6;
const BOX_Y = 290;
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
      aria-label="OperaLayer sits as one wide layer on top of your existing systems — ERP, warehouse, accounting, supplier portal, and email — and surfaces one thing above it: what needs your attention."
    >
      {/* line from band up to the top box */}
      <line
        x1="230"
        y1="150"
        x2="230"
        y2="78"
        stroke={MINT}
        strokeOpacity="0.5"
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />

      {/* lines from each system up into the band */}
      {systems.map((s, i) => (
        <line
          key={s}
          x1={boxCx(i)}
          y1={BOX_Y}
          x2={boxCx(i)}
          y2="200"
          stroke={MINT}
          strokeOpacity="0.4"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      ))}

      {/* TOP · what surfaces */}
      <rect
        x="120"
        y="30"
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
        y="59"
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

      {/* BOTTOM · your existing systems */}
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
            fontSize="9.5"
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
                OperaLayer, in{" "}
                <span style={{ color: "var(--sw-mint)" }}>plain English</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 text-white/70 text-[15px] md:text-[17px] leading-relaxed">
                It sits on top of the systems you already run and takes over the
                manual work between them.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-5 max-w-[60ch] text-white/70 text-[15px] md:text-[17px] leading-relaxed">
                From there, it connects your operational data and documents, does
                the repetitive checking and matching your team does by hand, and
                flags the exceptions that actually need a person. As your team
                corrects those, it learns from them, and everything lands in one
                place where you can see what needs action.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-5 max-w-[60ch] text-white/85 text-[15px] md:text-[17px] leading-relaxed">
                And there&apos;s no long rollout to sit through, your first
                workflow can be live in days.
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
