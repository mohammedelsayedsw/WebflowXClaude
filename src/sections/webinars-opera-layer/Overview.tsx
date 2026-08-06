"use client";

import { Reveal } from "@/components/primitives/Reveal";

const PAPER = "255,255,255";
const ORANGE = "#ff5a31";

// The work that happens outside the ERP's view. Positioned around the frame,
// deliberately unconnected to it — the absence of lines is the point.
const outside: { label: string; x: number; y: number; w: number }[] = [
  { label: "Documents", x: 12, y: 52, w: 150 },
  { label: "Emails", x: 278, y: 52, w: 150 },
  { label: "Spreadsheets", x: 12, y: 332, w: 150 },
  { label: "Supplier messages", x: 278, y: 332, w: 150 },
];

const OUT_H = 36;

// The framed zone — everything the ERP actually holds.
const FRAME_X = 116;
const FRAME_Y = 150;
const FRAME_W = 208;
const FRAME_H = 130;
const FRAME_CX = FRAME_X + FRAME_W / 2;

function ErpGapDiagram() {
  return (
    <svg
      viewBox="0 0 440 400"
      className="w-full h-auto"
      role="img"
      aria-label="A framed zone labelled What your ERP sees, holding only records and transactions. Outside the frame and unconnected to it sit documents, emails, spreadsheets, and supplier messages, the operational work the ERP is blind to."
    >
      {/* OUTSIDE · the work the ERP never sees */}
      {outside.map((o) => (
        <g key={o.label}>
          <rect
            x={o.x}
            y={o.y}
            width={o.w}
            height={OUT_H}
            rx="4"
            fill={ORANGE}
            fillOpacity="0.07"
            stroke={ORANGE}
            strokeOpacity="0.55"
            strokeWidth="1"
            strokeDasharray="5 4"
            vectorEffect="non-scaling-stroke"
          />
          <text
            x={o.x + o.w / 2}
            y={o.y + OUT_H / 2 + 1}
            textAnchor="middle"
            dominantBaseline="middle"
            className="font-head"
            fontSize="12.5"
            fill={ORANGE}
            fillOpacity="0.9"
          >
            {o.label}
          </text>
        </g>
      ))}

      {/* LABEL · names the framed zone */}
      <text
        x={FRAME_CX}
        y={FRAME_Y - 14}
        textAnchor="middle"
        className="font-head"
        fontSize="10.5"
        letterSpacing="1.4"
        fill={`rgba(${PAPER},0.55)`}
      >
        WHAT YOUR ERP SEES
      </text>

      {/* FRAME · the ERP's field of view, solid and closed */}
      <rect
        x={FRAME_X}
        y={FRAME_Y}
        width={FRAME_W}
        height={FRAME_H}
        rx="4"
        fill={`rgba(${PAPER},0.05)`}
        stroke={`rgba(${PAPER},0.5)`}
        strokeWidth="1.25"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={FRAME_CX}
        y={FRAME_Y + 52}
        textAnchor="middle"
        className="font-head"
        fontSize="17"
        fill={`rgba(${PAPER},0.92)`}
      >
        Records
      </text>
      <line
        x1={FRAME_X + 52}
        y1={FRAME_Y + 68}
        x2={FRAME_X + FRAME_W - 52}
        y2={FRAME_Y + 68}
        stroke={`rgba(${PAPER},0.15)`}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
      <text
        x={FRAME_CX}
        y={FRAME_Y + 94}
        textAnchor="middle"
        className="font-head"
        fontSize="17"
        fill={`rgba(${PAPER},0.92)`}
      >
        Transactions
      </text>
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
                Why your ERP can&apos;t close the gap
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-white/75 text-[16px] md:text-[18px] leading-relaxed">
                Your ERP holds your core records, and little else. The real work
                happens around it, in the documents, emails, and spreadsheets
                your team passes around by hand, where your ERP was never built
                to look.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-white/75 text-[16px] md:text-[18px] leading-relaxed">
                So customizing or replacing it rarely fixes anything. Those
                projects run slow and cost a lot, and when they are finished,
                the manual work is still there.
              </p>
            </Reveal>
          </div>

          {/* RIGHT · vertical gap diagram */}
          <Reveal delay={0.1} className="w-full">
            <div className="mx-auto mt-[15px] w-full max-w-[400px]">
              <ErpGapDiagram />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
