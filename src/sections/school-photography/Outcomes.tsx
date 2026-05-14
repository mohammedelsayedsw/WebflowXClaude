"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { btnLight } from "@/components/primitives/buttonStyles";

type OutcomeBlock = {
  n: string;
  kicker: string;
  title: React.ReactNode;
  lede: string;
  results: string[];
  diagram: React.ReactNode;
  theme: "dark" | "beige";
  reverse?: boolean;
  diagramDark?: boolean;
};


function OutcomeBlockRow({ n, kicker, title, lede, results, diagram, theme, reverse, diagramDark }: OutcomeBlock) {
  const dark = theme === "dark";
  const diagramOnDark = diagramDark ?? dark;
  const textColor = dark ? "text-white" : "text-[var(--sw-black)]";
  const mutedColor = dark ? "text-white/75" : "text-[var(--sw-black)]/70";
  const bulletColor = dark ? "text-white/85" : "text-[var(--sw-black)]/80";
  const labelColor = dark ? "text-white/55" : "text-[var(--sw-black)]/55";
  const bg = dark ? "bg-[var(--sw-black)]" : "bg-lp-bright";
  const accentColor = dark ? "var(--sw-mint)" : "var(--sw-blue)";

  // Diagram presentation differs:
  // - dark section, dark diagram → flush on the dark bg, minimal framing
  // - light section, light diagram → flush on the gradient with bracket marks, no white card
  // - light section, dark diagram (e.g. Outcome 06) → premium dark tile
  let diagramWrapClass = "";
  let diagramWrapStyle: React.CSSProperties | undefined;
  if (diagramOnDark && !dark) {
    diagramWrapClass = "rounded-[4px] p-6 md:p-8 text-white";
    diagramWrapStyle = {
      background:
        "linear-gradient(180deg, rgba(16,19,44,1) 0%, rgba(23,26,56,1) 100%)",
      border: "1px solid rgba(230,231,239,0.08)",
    };
  } else if (dark) {
    diagramWrapClass = "p-4 md:p-6 text-white";
  } else {
    diagramWrapClass = "bracket-frame p-5 md:p-7 text-[var(--sw-black)]";
  }

  return (
    <section id={`outcome-${n}`} className={`${bg} relative overflow-hidden scroll-mt-24`}>
      {/* section hairline on light sections */}
      {!dark && <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />}

      {/* Bright-section editorial depth · ghost outcome number + side ruler + corner ticks */}
      {!dark && (
        <>
          {/* Massive ghost outcome number drifting off the edge */}
          <div
            aria-hidden
            className="absolute pointer-events-none select-none hidden md:block"
            style={{
              [reverse ? "right" : "left"]: "-3%",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "var(--font-golos)",
              fontWeight: 700,
              fontSize: "clamp(260px, 32vw, 460px)",
              lineHeight: 0.85,
              color: "rgba(63, 74, 175, 0.055)",
              letterSpacing: "-0.05em",
            }}
          >
            {n}
          </div>

          {/* Side ruler – vertical editorial label */}
          <div
            aria-hidden
            className="hidden lg:flex absolute flex-col items-center gap-3 z-0"
            style={{
              [reverse ? "left" : "right"]: "24px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <span className="h-10 w-px bg-[var(--sw-black)]/20" />
            <span
              className="label-code text-[var(--sw-black)]/45"
              style={{
                writingMode: "vertical-rl",
                letterSpacing: "0.3em",
              }}
            >
              OUTCOME / {n}
            </span>
            <span className="h-10 w-px bg-[var(--sw-black)]/20" />
          </div>

          {/* Corner tick marks at section extents */}
          <span className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[var(--sw-black)]/20 pointer-events-none" />
          <span className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[var(--sw-black)]/20 pointer-events-none" />
          <span className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-[var(--sw-black)]/20 pointer-events-none" />
          <span className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-[var(--sw-black)]/20 pointer-events-none" />
        </>
      )}

      <div className="wrap relative py-24 md:py-32">
        <div className={`grid gap-12 lg:gap-16 md:grid-cols-2 items-center`}>
          <Reveal className={`min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6">
              <span className={`label-code ${labelColor}`}>OUTCOME · {n}</span>
              <span className={`h-px w-6 hidden sm:block `} />
              <span className={`label-code ${labelColor} whitespace-normal sm:whitespace-nowrap`}>{kicker}</span>
            </div>
            <h3 className={`font-head ${textColor} text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mb-5 max-w-[22ch]`}>
              {title}
            </h3>
            <p className={`${mutedColor} text-[15px] md:text-[17px] leading-relaxed max-w-[46ch] mb-7`}>
              {lede}
            </p>
            <ul className="space-y-3">
              {results.map((r, i) => (
                <li key={i} className={`flex gap-3 ${bulletColor} text-[14px] md:text-[15px] leading-relaxed`}>
                  <Check className="h-4 w-4 shrink-0 mt-1" style={{ color: accentColor }} />
                  <span className="min-w-0">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12} className={`min-w-0 ${reverse ? "md:order-1" : "md:order-2"}`}>
            <div className={`relative ${diagramWrapClass}`} style={diagramWrapStyle}>
              {/* bracket corners only render on the bracket-frame variant */}
              <span className="bracket-bl" />
              <span className="bracket-br" />
              {diagram}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}


function SvgPortal() {
  // Support-ticket curve (before → after) over 6 time slots
  // Clean, chart-style – NOT label-lines-crossing-through-text
  const before = [78, 82, 88, 90, 94, 96]; // Before: climbing load on your team
  const after = [72, 40, 22, 12, 8, 5];     // After: portal absorbs it, team load crashes
  const w = 560;
  const h = 340;
  const ox = 60;  // origin x
  const oy = 270; // origin y (axis line)
  const cw = 420; // chart width
  const ch = 200; // chart height
  const step = cw / (before.length - 1);
  const scale = (v: number) => oy - (v / 100) * ch;

  const pathOf = (arr: number[]) =>
    arr
      .map((v, i) => {
        const x = ox + i * step;
        const y = scale(v);
        if (i === 0) return `M ${x} ${y}`;
        const prevX = ox + (i - 1) * step;
        const prevY = scale(arr[i - 1]);
        const cx1 = prevX + step / 2;
        const cx2 = x - step / 2;
        return `C ${cx1} ${prevY}, ${cx2} ${y}, ${x} ${y}`;
      })
      .join(" ");

  const areaOf = (arr: number[]) => `${pathOf(arr)} L ${ox + cw} ${oy} L ${ox} ${oy} Z`;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-auto" role="img" aria-label="Support load before vs after">
      <defs>
        <linearGradient id="gradBefore" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E04F4F" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#E04F4F" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="gradAfter" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6EF76E" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#6EF76E" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* y-axis helper label */}
      <text x={ox} y={36} fill="currentColor" opacity="0.55" fontSize="11" fontFamily="Inter" letterSpacing="1.5">
        SUPPORT LOAD · TICKETS / WEEK
      </text>

      {/* gridlines */}
      {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
        <line
          key={i}
          x1={ox}
          x2={ox + cw}
          y1={oy - p * ch}
          y2={oy - p * ch}
          stroke="currentColor"
          strokeOpacity={0.08}
          strokeWidth={1}
        />
      ))}
      {/* baseline */}
      <line x1={ox} x2={ox + cw} y1={oy} y2={oy} stroke="currentColor" strokeOpacity={0.25} strokeWidth={1} />

      {/* Before area + line */}
      <motion.path
        d={areaOf(before)}
        fill="url(#gradBefore)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <DrawnPath d={pathOf(before)} stroke="#E04F4F" strokeWidth={2} duration={1.4} delay={0.2} />

      {/* After area + line */}
      <motion.path
        d={areaOf(after)}
        fill="url(#gradAfter)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <DrawnPath d={pathOf(after)} stroke="#6EF76E" strokeWidth={2} duration={1.6} delay={0.7} />

      {/* end-point markers + values */}
      <motion.circle
        cx={ox + cw}
        cy={scale(before[before.length - 1])}
        r={5}
        fill="#E04F4F"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <motion.circle
        cx={ox + cw}
        cy={scale(after[after.length - 1])}
        r={5}
        fill="#6EF76E"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2.1, duration: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
      />

      {/* annotations */}
      <g>
        <rect x={ox + cw + 12} y={scale(before[before.length - 1]) - 14} width={70} height={28} rx={2} fill="none" stroke="#E04F4F" strokeOpacity="0.5" />
        <text x={ox + cw + 22} y={scale(before[before.length - 1]) - 1} fill="#E04F4F" fontSize="10" fontFamily="Inter" letterSpacing="1">BEFORE</text>
        <text x={ox + cw + 22} y={scale(before[before.length - 1]) + 10} fill="#fff" opacity="0.9" fontSize="11" fontFamily="Inter" fontWeight="600">climbing</text>
      </g>
      <g>
        <rect x={ox + cw + 12} y={scale(after[after.length - 1]) - 14} width={70} height={28} rx={2} fill="none" stroke="#6EF76E" strokeOpacity="0.7" />
        <text x={ox + cw + 22} y={scale(after[after.length - 1]) - 1} fill="#6EF76E" fontSize="10" fontFamily="Inter" letterSpacing="1">AFTER</text>
        <text x={ox + cw + 22} y={scale(after[after.length - 1]) + 10} fill="#fff" opacity="0.9" fontSize="11" fontFamily="Inter" fontWeight="600">−95%</text>
      </g>

      {/* x-axis labels */}
      {["T0", "T+1 mo", "T+2 mo", "T+3 mo", "T+4 mo", "T+6 mo"].map((t, i) => (
        <text
          key={t}
          x={ox + i * step}
          y={oy + 22}
          fill="currentColor"
          opacity="0.55"
          fontSize="10"
          fontFamily="Inter"
          textAnchor="middle"
        >
          {t}
        </text>
      ))}
    </svg>
  );
}


function SvgCron() {
  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  return (
    <svg viewBox="0 0 560 340" className="w-full h-auto" role="img" aria-label="Cron batch export schedule">
      {/* header label */}
      <text x={30} y={34} fill="#6EF76E" fontSize="11" fontFamily="Inter" letterSpacing="2">
        CRON · 03:00 · OFF-PEAK
      </text>
      <DrawnPath d="M30 48 H530" stroke="rgba(255,255,255,0.12)" strokeWidth={1} />

      {days.map((d, i) => {
        const y = 80 + i * 34;
        return (
          <g key={d}>
            <text x={30} y={y + 10} fill="currentColor" opacity="0.55" fontSize="11" fontFamily="Inter" letterSpacing="1.5">
              {d}
            </text>
            {/* timeline bar */}
            <motion.rect
              x={90}
              y={y}
              width={420}
              height={14}
              rx={2}
              fill="rgba(255,255,255,0.04)"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth={1}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ delay: 0.2 + i * 0.06, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ transformOrigin: "90px" }}
            />
            {/* scheduled slot */}
            <motion.rect
              x={90 + (i * 10) + 20}
              y={y}
              width={26}
              height={14}
              rx={2}
              fill="#6EF76E"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
              style={{ transformOrigin: `${90 + (i * 10) + 20 + 13}px ${y + 7}px` }}
            />
            <text x={520} y={y + 10} fill="currentColor" opacity="0.55" fontSize="9" fontFamily="Inter" textAnchor="end">
              03:00 · auto
            </text>
          </g>
        );
      })}
    </svg>
  );
}


function SvgDataGraph() {
  // Five legacy sources → normalization lane → one clean entity graph
  const W = 720;
  const H = 420;
  const legacy = ["GlobalJade", "ImageDB", "The Hub", "CRM", "eWay"];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Five legacy systems collapse into one normalized graph">
      <defs>
        <linearGradient id="dgLegacy" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#E04F4F" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#E04F4F" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="dgClean" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#6EF76E" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#6EF76E" stopOpacity="0.7" />
        </linearGradient>
      </defs>

      {/* LEFT column – legacy stack */}
      <text x={20} y={28} fill="rgba(224,79,79,0.9)" fontSize="10" fontFamily="Inter" letterSpacing="2">
        BEFORE · 5 LEGACY SYSTEMS
      </text>
      {legacy.map((n, i) => {
        const y = 56 + i * 58;
        return (
          <motion.g
            key={n}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 + i * 0.06, duration: 0.45 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* cylinder body */}
            <rect x={20} y={y + 6} width={170} height={34} fill="rgba(224,79,79,0.06)" stroke="rgba(224,79,79,0.55)" strokeWidth={1} />
            <ellipse cx={105} cy={y + 6} rx={85} ry={7} fill="rgba(224,79,79,0.14)" stroke="rgba(224,79,79,0.75)" strokeWidth={1} />
            <ellipse cx={105} cy={y + 40} rx={85} ry={7} fill="rgba(224,79,79,0.06)" stroke="rgba(224,79,79,0.45)" strokeWidth={1} />
            <text x={36} y={y + 28} fill="#fff" fontSize="12" fontFamily="Inter" fontWeight="500">
              {n}
            </text>
            <text x={174} y={y + 28} fill="rgba(224,79,79,0.85)" fontSize="9" fontFamily="Inter" textAnchor="end" letterSpacing="1">
              {[".mdb", ".sql", "api", "xml", "csv"][i]}
            </text>
          </motion.g>
        );
      })}

      {/* CENTRE – normalization lane */}
      <motion.rect
        x={220}
        y={56}
        width={210}
        height={300}
        rx={3}
        fill="rgba(63,74,175,0.05)"
        stroke="rgba(63,74,175,0.35)"
        strokeWidth={1}
        strokeDasharray="3 4"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        viewport={{ once: true, amount: 0.25 }}
      />
      <text x={325} y={78} fill="rgba(63,74,175,0.95)" fontSize="10" fontFamily="Inter" letterSpacing="2" textAnchor="middle">
        NORMALIZATION LANE
      </text>
      <text x={325} y={94} fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="Inter" letterSpacing="1" textAnchor="middle">
        pimcore · mdm
      </text>

      {/* connectors: legacy → lane */}
      {legacy.map((_, i) => {
        const y1 = 56 + i * 58 + 23;
        const y2 = 170 + i * 10;
        return (
          <DrawnPath
            key={`lc${i}`}
            d={`M 190 ${y1} C 205 ${y1}, 215 ${y2}, 220 ${y2}`}
            stroke="url(#dgLegacy)"
            strokeWidth={1.2}
            strokeDasharray="3 4"
            duration={0.8}
            delay={0.8 + i * 0.05}
          />
        );
      })}

      {/* lane: flowing dots */}
      {[0, 1, 2, 3].map((i) => (
        <motion.circle
          key={`dot${i}`}
          cx={240 + i * 52}
          cy={210}
          r={2.5}
          fill="#3F4AAF"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0], x: [0, 10, 20] }}
          transition={{
            delay: 1.2 + i * 0.25,
            duration: 1.8,
            repeat: Infinity,
            repeatDelay: 1.6,
          }}
        />
      ))}
      <line x1={230} x2={420} y1={210} y2={210} stroke="rgba(63,74,175,0.35)" strokeWidth={0.5} strokeDasharray="2 3" />

      {/* centre – transformation rules */}
      {[
        ["SIC → student_fk", 250],
        ["dedupe · sibling_of", 280],
        ["audit log · every row", 310],
        ["SCHOOL → STUDENT → ASSET", 340],
      ].map(([t, y], i) => (
        <motion.text
          key={i}
          x={325}
          y={y as number}
          fill="rgba(255,255,255,0.85)"
          fontSize="11"
          fontFamily="Inter"
          textAnchor="middle"
          initial={{ opacity: 0, y: (y as number) + 4 }}
          whileInView={{ opacity: 1, y: y as number }}
          transition={{ delay: 0.9 + i * 0.08, duration: 0.4 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          {t}
        </motion.text>
      ))}

      {/* RIGHT – one clean entity graph */}
      <text x={W - 20} y={28} fill="#6EF76E" fontSize="10" fontFamily="Inter" letterSpacing="2" textAnchor="end">
        AFTER · ONE CLEAN GRAPH
      </text>

      {(() => {
        const nodes = [
          { id: "school", label: "SCHOOL", x: 530, y: 80 },
          { id: "student", label: "STUDENT", x: 620, y: 160 },
          { id: "parent", label: "PARENT", x: 490, y: 240 },
          { id: "asset", label: "ASSET", x: 650, y: 290 },
          { id: "order", label: "ORDER", x: 520, y: 360 },
        ];
        const edges = [
          ["school", "student", "1 : N"],
          ["student", "asset", "1 : N"],
          ["student", "parent", "N : 1"],
          ["parent", "order", "1 : N"],
          ["asset", "order", "N : 1"],
        ];
        const find = (id: string) => nodes.find((n) => n.id === id)!;
        return (
          <g>
            {/* edges first (behind nodes) */}
            {edges.map(([a, b, label], i) => {
              const A = find(a as string);
              const B = find(b as string);
              const mx = (A.x + B.x) / 2;
              const my = (A.y + B.y) / 2;
              return (
                <g key={i}>
                  <DrawnPath
                    d={`M ${A.x} ${A.y} L ${B.x} ${B.y}`}
                    stroke="#6EF76E"
                    strokeOpacity={0.55}
                    strokeWidth={1}
                    duration={0.7}
                    delay={1.4 + i * 0.08}
                  />
                  <motion.g
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.9 + i * 0.05, duration: 0.3 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <rect x={mx - 18} y={my - 7} width={36} height={14} rx={2} fill="#10132C" stroke="rgba(110,247,110,0.3)" strokeWidth={0.5} />
                    <text x={mx} y={my + 3} fill="rgba(110,247,110,0.9)" fontSize="8.5" fontFamily="Inter" textAnchor="middle" letterSpacing="0.5">
                      {label}
                    </text>
                  </motion.g>
                </g>
              );
            })}
            {/* nodes */}
            {nodes.map((n, i) => (
              <motion.g
                key={n.id}
                initial={{ opacity: 0, scale: 0.82 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.1, duration: 0.4 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <circle cx={n.x} cy={n.y} r={30} fill="rgba(110,247,110,0.05)" stroke="url(#dgClean)" strokeWidth={1.5} />
                <circle cx={n.x} cy={n.y} r={22} fill="rgba(16,19,44,0.55)" stroke="rgba(110,247,110,0.5)" strokeWidth={0.7} />
                <circle cx={n.x} cy={n.y} r={3} fill="#6EF76E" className="pulse-green" />
                <text x={n.x} y={n.y + 46} fill="#fff" fontSize="11" fontFamily="Inter" fontWeight="700" textAnchor="middle" letterSpacing="0.5">
                  {n.label}
                </text>
              </motion.g>
            ))}
          </g>
        );
      })()}
    </svg>
  );
}


function SvgIdCard() {
  // Two-panel split · BEFORE (CSV chaos) on left | AFTER (ID card + pipeline) on right
  const W = 720;
  const H = 420;

  // Split geometry
  const leftW = 280;
  const leftPad = 20;
  const divX = 300;
  const rightX = 320;
  const rightW = W - rightX - 20;

  // AFTER side – ID card anchor
  const cx = rightX + 24;
  const cy = 54;
  const cw = rightW - 48;
  const ch = 200;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="ID card builder · before CSV chaos, after in-platform builder">
      <defs>
        <linearGradient id="idFaceSkin" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#DADCF1" />
          <stop offset="100%" stopColor="#8d91a8" />
        </linearGradient>
        <linearGradient id="idCardBg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#f1efe9" />
        </linearGradient>
      </defs>

      {/* Vertical divider – splits BEFORE / AFTER */}
      <DrawnPath
        d={`M ${divX} 40 V ${H - 40}`}
        stroke="rgba(230,231,239,0.14)"
        strokeWidth={1}
        strokeDasharray="3 5"
        duration={1}
      />

      {/* ======================================== LEFT PANEL · BEFORE ======================================== */}
      <text x={leftPad} y={28} fill="rgba(224,79,79,0.9)" fontSize="10" fontFamily="Inter" letterSpacing="2">
        BEFORE · CSV EMAIL CHAIN
      </text>

      {(() => {
        // 3 email threads, clean vertical stack, no offset-pile
        const threads = [
          { v: "v4", meta: "3 threads · 12 replies" },
          { v: "v3", meta: "merge conflicts" },
          { v: "v2", meta: "which version is final?" },
        ];
        const threadX = leftPad;
        const threadW = leftW;
        const threadH = 54;
        const threadGap = 16;
        const firstY = 58;
        return threads.map((t, i) => {
          const y = firstY + i * (threadH + threadGap);
          return (
            <motion.g
              key={t.v}
              initial={{ opacity: 0, x: -6 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.45 }}
              viewport={{ once: true, amount: 0.25 }}
            >
              <rect
                x={threadX}
                y={y}
                width={threadW}
                height={threadH}
                rx={2}
                fill="rgba(224,79,79,0.05)"
                stroke="rgba(224,79,79,0.4)"
                strokeWidth={1}
              />
              <rect x={threadX} y={y} width={3} height={threadH} fill="#E04F4F" opacity={0.75} />
              {/* subject line + status */}
              <circle cx={threadX + 22} cy={y + 22} r={3} fill="#E04F4F" />
              <text x={threadX + 34} y={y + 25} fill="#fff" fontSize="12" fontFamily="Inter">
                RE: RE: cards-{t.v}.csv
              </text>
              <text x={threadX + 34} y={y + 42} fill="rgba(255,255,255,0.5)" fontSize="10" fontFamily="Inter">
                {t.meta}
              </text>
              {/* strike-through on subject */}
              <motion.line
                x1={threadX + 34}
                y1={y + 22}
                x2={threadX + threadW - 12}
                y2={y + 22}
                stroke="#E04F4F"
                strokeOpacity={0.55}
                strokeWidth={1}
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.45 }}
                viewport={{ once: true, amount: 0.25 }}
              />
            </motion.g>
          );
        });
      })()}

      {/* BEFORE footer count */}
      <motion.text
        x={leftPad}
        y={H - 30}
        fill="rgba(224,79,79,0.75)"
        fontSize="10"
        fontFamily="Inter"
        letterSpacing="1.5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.4 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        ↯ 14 THREADS · 52 REPLIES
      </motion.text>

      {/* ======================================== RIGHT PANEL · AFTER ======================================== */}
      <text x={W - 20} y={28} fill="#6EF76E" fontSize="10" fontFamily="Inter" letterSpacing="2" textAnchor="end">
        AFTER · IN-PLATFORM BUILDER
      </text>

      {/* REALISTIC ID CARD */}
      <motion.g
        initial={{ opacity: 0, y: 10, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.45, duration: 0.55 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* card body */}
        <rect x={cx} y={cy} width={cw} height={ch} rx={4} fill="url(#idCardBg)" stroke="rgba(16,19,44,0.15)" strokeWidth={1} />
        {/* left accent bar */}
        <rect x={cx} y={cy} width={6} height={ch} fill="#3F4AAF" />

        {/* top header row */}
        <rect x={cx + 18} y={cy + 14} width={96} height={14} rx={2} fill="#10132C" />
        <text x={cx + 24} y={cy + 24} fill="#fff" fontSize="8" fontFamily="Inter" letterSpacing="1.5" fontWeight="700">
          LINCOLN HIGH
        </text>
        <text x={cx + cw - 18} y={cy + 24} fill="rgba(16,19,44,0.55)" fontSize="8" fontFamily="Inter" textAnchor="end" letterSpacing="1.5">
          2026 / GRADE 10
        </text>

        {/* photo frame with stylized silhouette */}
        <rect x={cx + 18} y={cy + 40} width={78} height={100} rx={2} fill="#1f2346" />
        <circle cx={cx + 57} cy={cy + 74} r={16} fill="url(#idFaceSkin)" />
        <path
          d={`M ${cx + 33} ${cy + 132} Q ${cx + 57} ${cy + 100}, ${cx + 81} ${cy + 132} L ${cx + 81} ${cy + 140} L ${cx + 33} ${cy + 140} Z`}
          fill="url(#idFaceSkin)"
        />
        {/* photo frame corner ticks */}
        {[
          [cx + 18, cy + 40],
          [cx + 96, cy + 40],
          [cx + 18, cy + 140],
          [cx + 96, cy + 140],
        ].map(([x, y], i) => (
          <g key={i}>
            <line x1={x - 2} x2={x + 4} y1={y} y2={y} stroke="rgba(255,255,255,0.6)" strokeWidth={1} />
            <line x1={x} x2={x} y1={y - 2} y2={y + 4} stroke="rgba(255,255,255,0.6)" strokeWidth={1} />
          </g>
        ))}

        {/* name + meta */}
        <text x={cx + 114} y={cy + 58} fill="#10132C" fontSize="16" fontFamily="Golos Text" fontWeight="700">
          Aidan Park
        </text>
        <text x={cx + 114} y={cy + 76} fill="rgba(16,19,44,0.7)" fontSize="10" fontFamily="Inter">
          Student ID · 4452981
        </text>

        {/* field rows */}
        {[
          ["HOUSE", "Wellington"],
          ["FORM", "10-C"],
          ["SIC", "L-0442-10-C"],
          ["EXPIRES", "12 / 2026"],
        ].map(([k, v], i) => (
          <g key={i}>
            <text x={cx + 114} y={cy + 98 + i * 14} fill="rgba(16,19,44,0.45)" fontSize="8" fontFamily="Inter" letterSpacing="1.5">
              {k}
            </text>
            <text x={cx + 176} y={cy + 98 + i * 14} fill="#10132C" fontSize="10" fontFamily="Inter">
              {v}
            </text>
          </g>
        ))}

        {/* barcode strip */}
        <g transform={`translate(${cx + 18}, ${cy + 162})`}>
          {Array.from({ length: Math.floor((cw - 36) / 6.3) }).map((_, i) => (
            <rect
              key={i}
              x={i * 6.3}
              y={0}
              width={i % 3 === 0 ? 3 : i % 2 === 0 ? 1.4 : 2}
              height={16}
              fill="#10132C"
              opacity={0.85}
            />
          ))}
        </g>
        <text x={cx + cw - 18} y={cy + ch - 8} fill="rgba(16,19,44,0.55)" fontSize="8" fontFamily="Inter" textAnchor="end" letterSpacing="1">
          v1 · LOCKED
        </text>
      </motion.g>

      {/* Pipeline strip · Preview → Lock → Export → Audit */}
      {(() => {
        const stages = [
          { label: "Preview", meta: "1,420 cards", color: "#6EF76E" },
          { label: "Lock", meta: "v1 final", color: "#3F4AAF" },
          { label: "Export", meta: "CSV · print", color: "#3F4AAF" },
          { label: "Audit", meta: "every action", color: "#6EF76E" },
        ];
        const stripY = cy + ch + 34;
        const gap = 8;
        const tileW = (cw - gap * 3) / 4;
        return (
          <g>
            {/* connecting rail behind the chips */}
            <line
              x1={cx + tileW / 2}
              x2={cx + cw - tileW / 2}
              y1={stripY + 22}
              y2={stripY + 22}
              stroke="rgba(110,247,110,0.25)"
              strokeWidth={1}
              strokeDasharray="3 4"
            />
            {stages.map((s, i) => {
              const x = cx + i * (tileW + gap);
              return (
                <motion.g
                  key={s.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.12, duration: 0.4 }}
                  viewport={{ once: true, amount: 0.25 }}
                >
                  <rect
                    x={x}
                    y={stripY}
                    width={tileW}
                    height={46}
                    rx={3}
                    fill="rgba(16,19,44,0.55)"
                    stroke="rgba(230,231,239,0.14)"
                    strokeWidth={1}
                  />
                  <circle cx={x + 10} cy={stripY + 15} r={3.5} fill={s.color} />
                  <text x={x + 20} y={stripY + 19} fill="#fff" fontSize="11" fontFamily="Inter" fontWeight="600">
                    {s.label}
                  </text>
                  <text x={x + 10} y={stripY + 36} fill="rgba(255,255,255,0.6)" fontSize="9" fontFamily="Inter">
                    {s.meta}
                  </text>
                </motion.g>
              );
            })}
          </g>
        );
      })()}
    </svg>
  );
}


function SvgSSO() {
  const W = 720;
  const H = 420;

  const providers: { name: string; sub: string; users: string; color: string; letters: string }[] = [
    { name: "AWS Cognito", sub: "SAML · JWT", users: "School admins", color: "#FF5A31", letters: "AW" },
    { name: "Microsoft Entra ID", sub: "OIDC · SAML", users: "Internal staff", color: "#3F4AAF", letters: "MS" },
    { name: "Google OAuth 2.0", sub: "OIDC", users: "Parents · commerce", color: "#6EF76E", letters: "GO" },
  ];

  const logs: [string, string, string, string][] = [
    ["09:42:11", "school.admin", "login", "OK"],
    ["09:42:58", "student.edit", "114 rows", "OK"],
    ["09:44:03", "export.start", "grade-5", "OK"],
    ["09:47:18", "order.create", "#3104", "OK"],
    ["09:49:45", "parent.login", "oauth", "OK"],
    ["09:52:02", "export.done", "4.2 MB", "OK"],
  ];

  // hub – placed to the right of the trunk line
  const hx = 380;
  const hy = 210;
  const hubR = 44;
  const trunkX = 280;

  // provider layout
  const cardX = 20;
  const cardW = 240;
  const cardH = 78;
  const firstY = 48;
  const gapY = 100;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Dual SSO with audit pipeline">
      <defs>
        <radialGradient id="ssoRing" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#6EF76E" stopOpacity="0.0" />
          <stop offset="70%" stopColor="#6EF76E" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#6EF76E" stopOpacity="0.0" />
        </radialGradient>
      </defs>

      <text x={20} y={26} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter" letterSpacing="2">
        IDENTITY PROVIDERS
      </text>

      {/* Provider cards */}
      {providers.map((p, i) => {
        const y = firstY + i * gapY;
        const midY = y + cardH / 2;
        return (
          <motion.g
            key={p.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            {/* card */}
            <rect
              x={cardX}
              y={y}
              width={cardW}
              height={cardH}
              rx={3}
              fill="rgba(230,231,239,0.035)"
              stroke="rgba(230,231,239,0.12)"
              strokeWidth={1}
            />
            {/* left accent bar */}
            <rect x={cardX} y={y} width={3} height={cardH} fill={p.color} />

            {/* Brand badge – clean colored chip with 2-letter ID */}
            <g>
              <rect
                x={cardX + 16}
                y={y + 18}
                width={42}
                height={42}
                rx={3}
                fill={p.color}
                opacity={0.14}
              />
              <rect
                x={cardX + 16}
                y={y + 18}
                width={42}
                height={42}
                rx={3}
                fill="none"
                stroke={p.color}
                strokeWidth={1.2}
                strokeOpacity={0.9}
              />
              <text
                x={cardX + 37}
                y={y + 45}
                fill={p.color}
                fontSize="15"
                fontFamily="Inter"
                fontWeight="700"
                textAnchor="middle"
                letterSpacing="0.5"
              >
                {p.letters}
              </text>
            </g>

            {/* name · sub · users */}
            <text
              x={cardX + 70}
              y={y + 28}
              fill="#fff"
              fontSize="13"
              fontFamily="Inter"
              fontWeight="600"
            >
              {p.name}
            </text>
            <text
              x={cardX + 70}
              y={y + 45}
              fill={p.color}
              fontSize="9"
              fontFamily="Inter"
              letterSpacing="1.5"
            >
              {p.sub.toUpperCase()}
            </text>
            <text
              x={cardX + 70}
              y={y + 62}
              fill="rgba(255,255,255,0.6)"
              fontSize="10"
              fontFamily="Inter"
            >
              {p.users}
            </text>

            {/* feeder line · card right edge to trunk */}
            <DrawnPath
              d={`M ${cardX + cardW} ${midY} H ${trunkX}`}
              stroke={p.color}
              strokeOpacity={0.5}
              strokeWidth={1}
              strokeDasharray="3 4"
              duration={0.5}
              delay={0.5 + i * 0.08}
            />
            {/* trunk junction dot */}
            <motion.circle
              cx={trunkX}
              cy={midY}
              r={2.5}
              fill={p.color}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.0 + i * 0.08, duration: 0.3 }}
              viewport={{ once: true, amount: 0.25 }}
            />

            {/* packet dot traveling along feeder */}
            <motion.circle
              r={2.5}
              fill={p.color}
              initial={{ cx: cardX + cardW, cy: midY, opacity: 0 }}
              animate={{
                cx: [cardX + cardW, trunkX],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                delay: 1.6 + i * 0.35,
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 2.5,
                times: [0, 0.2, 0.8, 1],
              }}
            />
          </motion.g>
        );
      })}

      {/* Vertical trunk connecting all three providers */}
      <DrawnPath
        d={`M ${trunkX} ${firstY + cardH / 2} L ${trunkX} ${firstY + cardH / 2 + 2 * gapY}`}
        stroke="rgba(110,247,110,0.5)"
        strokeWidth={1.2}
        duration={0.8}
        delay={0.9}
      />

      {/* Single feeder from trunk mid-point to hub left edge */}
      <DrawnPath
        d={`M ${trunkX} ${hy} L ${hx - hubR} ${hy}`}
        stroke="rgba(110,247,110,0.7)"
        strokeWidth={1.3}
        strokeDasharray="3 4"
        duration={0.5}
        delay={1.2}
      />
      <motion.polygon
        points={`${hx - hubR - 2} ${hy - 4}, ${hx - hubR + 4} ${hy}, ${hx - hubR - 2} ${hy + 4}`}
        fill="#6EF76E"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 0.3 }}
        viewport={{ once: true, amount: 0.25 }}
      />

      {/* HUB – audit core */}
      <motion.g
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* soft green ambient */}
        <circle cx={hx} cy={hy} r={76} fill="url(#ssoRing)" />
        {/* rotating orbit ring */}
        <motion.circle
          cx={hx}
          cy={hy}
          r={hubR + 12}
          fill="none"
          stroke="rgba(110,247,110,0.35)"
          strokeWidth={1}
          strokeDasharray="2 6"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          style={{ transformOrigin: `${hx}px ${hy}px` }}
        />
        {/* hub body */}
        <circle cx={hx} cy={hy} r={hubR} fill="rgba(16,19,44,0.85)" stroke="rgba(110,247,110,0.85)" strokeWidth={1.5} />
        {/* lock glyph */}
        <path
          d={`M ${hx - 10} ${hy - 2} h 20 v 16 h -20 z`}
          fill="rgba(110,247,110,0.12)"
          stroke="#6EF76E"
          strokeWidth={1.5}
        />
        <path
          d={`M ${hx - 6} ${hy - 2} v -8 a 6 6 0 0 1 12 0 v 8`}
          fill="none"
          stroke="#6EF76E"
          strokeWidth={1.5}
        />
        <circle cx={hx} cy={hy + 6} r={1.8} fill="#6EF76E" />
        {/* label */}
        <text x={hx} y={hy + hubR + 22} fill="#6EF76E" fontSize="10" fontFamily="Inter" letterSpacing="2" textAnchor="middle" fontWeight="700">
          AUDIT · SYSTEM LEVEL
        </text>
        <text x={hx} y={hy + hubR + 38} fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="Inter" textAnchor="middle" letterSpacing="1">
          every login · every action
        </text>
      </motion.g>

      {/* pipeline arrow hub → log panel */}
      <DrawnPath
        d={`M ${hx + hubR} ${hy} H 484`}
        stroke="rgba(110,247,110,0.55)"
        strokeWidth={1}
        strokeDasharray="3 4"
        delay={1.0}
        duration={0.5}
      />
      <motion.polygon
        points={`482 ${hy - 4}, 490 ${hy}, 482 ${hy + 4}`}
        fill="#6EF76E"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.3 }}
        viewport={{ once: true, amount: 0.25 }}
      />

      {/* LOG stream */}
      <text x={500} y={28} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter" letterSpacing="2">
        LOG · LIVE
      </text>
      {/* log card bg */}
      <rect x={500} y={42} width={200} height={348} rx={3} fill="rgba(230,231,239,0.025)" stroke="rgba(230,231,239,0.1)" strokeWidth={1} />

      {/* static table header */}
      <text x={512} y={62} fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter" letterSpacing="1.5">TIME</text>
      <text x={578} y={62} fill="rgba(255,255,255,0.4)" fontSize="9" fontFamily="Inter" letterSpacing="1.5">EVENT</text>
      <line x1={508} x2={692} y1={70} y2={70} stroke="rgba(230,231,239,0.1)" strokeWidth={1} />

      {logs.map(([t, ev, meta, status], i) => {
        const y = 82 + i * 48;
        return (
          <motion.g
            key={i}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3 + i * 0.08, duration: 0.35 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <rect x={508} y={y - 8} width={184} height={40} fill={i === 0 ? "rgba(110,247,110,0.05)" : "transparent"} />
            <text x={512} y={y + 6} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter">{t}</text>
            <rect x={570} y={y - 6} width={2} height={14} fill="#6EF76E" opacity={0.7} />
            <text x={578} y={y + 6} fill="#fff" fontSize="11" fontFamily="Inter" fontWeight="500">{ev}</text>
            <text x={578} y={y + 22} fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Inter">{meta}</text>
            <text x={686} y={y + 6} fill="#6EF76E" fontSize="9" fontFamily="Inter" textAnchor="end" fontWeight="700" letterSpacing="1">{status}</text>
          </motion.g>
        );
      })}

      {/* live tick dot */}
      <motion.circle
        cx={686}
        cy={54}
        r={3}
        fill="#6EF76E"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <text x={678} y={58} fill="rgba(110,247,110,0.85)" fontSize="8" fontFamily="Inter" letterSpacing="1.5" textAnchor="end" fontWeight="700">LIVE</text>
    </svg>
  );
}


function SvgIntegration() {
  return (
    <svg viewBox="0 0 560 340" className="w-full h-auto" role="img" aria-label="Legacy integration layer">
      {/* left: legacy */}
      <text x={20} y={30} fill="#E04F4F" fontSize="10" fontFamily="Inter" letterSpacing="2">
        LEGACY · STAYS LIVE
      </text>
      {["GlobalJade", "ImageDB", "The Hub", "CRM", "eWay"].map((n, i) => {
        const y = 56 + i * 44;
        return (
          <motion.g
            key={n}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 + i * 0.05, duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <rect x={20} y={y} width={120} height={28} rx={2} fill="rgba(224,79,79,0.05)" stroke="#E04F4F" strokeOpacity={0.55} strokeWidth={1} />
            <text x={34} y={y + 18} fill="#fff" fontSize="11" fontFamily="Inter" fontWeight="500">{n}</text>
          </motion.g>
        );
      })}
      {/* connectors left → mw */}
      {[0, 1, 2, 3, 4].map((i) => (
        <DrawnPath
          key={`Ll${i}`}
          d={`M140 ${70 + i * 44} Q 180 ${70 + i * 44}, 230 ${170 + (i - 2) * 4}`}
          stroke="#E04F4F"
          strokeOpacity={0.45}
          strokeWidth={1}
          duration={0.9}
          delay={0.6 + i * 0.06}
        />
      ))}

      {/* MIDDLEWARE */}
      <motion.g
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <rect x={230} y={94} width={120} height={180} rx={3} fill="rgba(110,247,110,0.04)" stroke="#6EF76E" strokeWidth={1.5} />
        <text x={290} y={120} fill="#fff" fontSize="12" fontWeight="700" fontFamily="Golos Text" textAnchor="middle">MIDDLEWARE</text>
        <text x={290} y={136} fill="#6EF76E" fontSize="9" fontFamily="Inter" letterSpacing="1.5" textAnchor="middle">ADAPTER · .NET</text>
        <DrawnPath d="M246 148 H334" stroke="rgba(255,255,255,0.08)" strokeWidth={1} duration={0.6} delay={1.2} />
        {["REST", "GraphQL", "SOAP", "webhooks", "Kafka/SQS", "SFTP", "EDI"].map((p, i) => (
          <motion.g
            key={p}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.3 + i * 0.05, duration: 0.3 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <circle cx={252} cy={162 + i * 14} r={2} fill="#6EF76E" opacity={0.5 + i * 0.06} />
            <text x={260} y={166 + i * 14} fill="#fff" opacity="0.85" fontSize="10" fontFamily="Inter">{p}</text>
          </motion.g>
        ))}
      </motion.g>

      {/* connectors mw → new */}
      {[0, 1, 2, 3, 4].map((i) => (
        <DrawnPath
          key={`Rl${i}`}
          d={`M350 ${170 + (i - 2) * 4} Q 390 ${70 + i * 44}, 430 ${70 + i * 44}`}
          stroke="#6EF76E"
          strokeOpacity={0.6}
          strokeWidth={1}
          duration={0.9}
          delay={1.0 + i * 0.06}
        />
      ))}

      {/* right: new */}
      <text x={430} y={30} fill="#6EF76E" fontSize="10" fontFamily="Inter" letterSpacing="2">
        NEW · PRODUCTION
      </text>
      {["Data model", "Commerce", "Portal", "Batch Engine", "ID Builder"].map((n, i) => {
        const y = 56 + i * 44;
        return (
          <motion.g
            key={n}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2 + i * 0.05, duration: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <rect x={430} y={y} width={120} height={28} rx={2} fill="rgba(110,247,110,0.05)" stroke="#6EF76E" strokeOpacity={0.7} strokeWidth={1} />
            <text x={444} y={y + 18} fill="#fff" fontSize="11" fontFamily="Inter" fontWeight="500">{n}</text>
          </motion.g>
        );
      })}
    </svg>
  );
}


export function Outcomes() {
  const items: OutcomeBlock[] = [
    {
      n: "1",
      kicker: "Self-service school portal",
      title: (
        <>
          Schools <span className="text-[var(--sw-mint)]">stop calling</span> your team
        </>
      ),
      lede:
        "Schools upload rosters, correct data, and download their images themselves. Role-based access per school, per user type. Every action audit-logged.",
      results: [
        "Support queue stops growing term on term",
        "Region-aware IP allowlist per deployment",
        "Escalations remain possible, but rare",
      ],
      diagram: <SvgPortal />,
      theme: "dark",
    },
    {
      n: "2",
      kicker: "Batch export engine",
      title: (
        <>
          Your weekly export <span className="text-[var(--sw-blue)]">stops being a job</span>
        </>
      ),
      lede:
        "Ten export formats, dynamic naming rules per school, running on a CRON schedule. Manual re-runs are one click from the portal.",
      results: [
        "CRON-scheduled off-peak, no human in the loop",
        "SchoolCode-StudentID-Grade-Year.jpg per school",
        "Every export audit-logged – who, what, when, where",
      ],
      diagram: <SvgCron />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "3",
      kicker: "Student data model",
      title: (
        <>
          Five systems collapse into <span className="text-[var(--sw-mint)]">one clean graph</span>
        </>
      ),
      lede:
        "SCHOOL → STUDENT → ASSET → PARENT → ORDER, normalized from day one. Sibling relationships, co-parenting, returning-student flags are first-class.",
      results: [
        "One source of truth replaces five disconnected databases",
        "SIC codes attached to students, not images",
        "Audit-logged end to end, every field, every change",
      ],
      diagram: <SvgDataGraph />,
      theme: "dark",
    },
    {
      n: "4",
      kicker: "ID card & admin services",
      title: (
        <>
          No more <span className="text-[var(--sw-blue)]">CSV email chains</span>
        </>
      ),
      lede:
        "Order, preview, and export ID cards with a full audit trail. Reorders and replacements handled in-platform. No manual handoffs, no wrong versions.",
      results: [
        "Static JPG preview per card before order lock",
        "CSV export for downstream print pipelines",
        "Reorder flow for lost cards, name changes, grade transitions",
      ],
      diagram: <SvgIdCard />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "5",
      kicker: "Dual SSO + audit",
      title: (
        <>
          Compliance by design, <span className="text-[var(--sw-mint)]">not by memory</span>
        </>
      ),
      lede:
        "AWS Cognito for school admins. Microsoft Entra ID for internal staff. Google OAuth for parent commerce. Every login, every action, audit-logged at the system level.",
      results: [
        "Role-based access, scoped per user pool",
        "SAML or OIDC supported for downstream federation",
        "Admin panel on VPN, school portal IP-allowlisted",
      ],
      diagram: <SvgSSO />,
      theme: "dark",
    },
    {
      n: "6",
      kicker: "Legacy integration layer",
      title: (
        <>
          Modernize without <span className="text-[var(--sw-blue)]">ripping out</span> what works
        </>
      ),
      lede:
        "A middleware API connects new systems to your existing stack. File servers, databases, SIS, ERP, print pipelines. Legacy stays live throughout delivery.",
      results: [
        "REST, GraphQL, SOAP, webhooks, Kafka/SQS, SFTP/CSV, EDI",
        "Adapter pattern extends to SAP, Navision, Odoo, NetSuite",
        "Reference: 5 legacy systems live · 0 decommissioned mid-project",
      ],
      diagram: <SvgIntegration />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
  ];
  return (
    <>
      <section id="outcomes" className="bg-[var(--sw-black)] pt-28 md:pt-36 pb-14 md:pb-20 relative overflow-hidden">
        {/* ambient blue wash · adds depth to the intro */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(1000px 600px at 85% 30%, rgba(63,74,175,0.20) 0%, transparent 60%), radial-gradient(800px 500px at 10% 100%, rgba(110,247,110,0.06) 0%, transparent 55%)",
          }}
        />
        <div className="wrap relative">
          <div className="grid gap-10 md:gap-14 lg:grid-cols-[1.1fr_0.9fr] items-end">
            <Reveal>
              <h2 className="font-head text-white text-[40px] md:text-[68px] lg:text-[88px] leading-[0.98] tracking-[-0.015em] max-w-[14ch]">
                Six operational problems.{" "}
                <span className="text-[var(--sw-mint)]">Gone.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[46ch]">
                Each module is live in production. No prototypes, no roadmap,
                no whiteboard architecture. Configure against your catalog,
                your schools, your stack.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-5 max-w-[420px]">
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">6</div>
                  <div className="label-code text-white/50 mt-2">Outcomes</div>
                </div>
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">14</div>
                  <div className="label-code text-white/50 mt-2">Weeks to live</div>
                </div>
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">0</div>
                  <div className="label-code text-white/50 mt-2">Peak incidents</div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Horizontal index · 6 chip cards · spaced, no outer frame */}
          <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {items.map((it, i) => (
              <Reveal key={it.n} delay={i * 0.05}>
                <a
                  href={`#outcome-${it.n}`}
                  className="group flex flex-col gap-2 p-4 md:p-5 rounded-[3px] border border-white/10 hover:border-white/25 hover:bg-white/[0.03] transition-colors h-full"
                >
                  <span className="label-code text-white/45 group-hover:text-[var(--sw-mint)] transition-colors">
                    {it.n}
                  </span>
                  <span className="font-head text-white text-[14px] md:text-[15px] leading-[1.25]">
                    {it.kicker}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      {items.map((it) => (
        <OutcomeBlockRow key={it.n} {...it} />
      ))}

      {/* mid-page CTA · sits as the tail of Outcome 06 (bright theme) */}
      <section className="relative bg-lp-bright overflow-hidden">
        <div className="wrap py-16 md:py-20 border-t border-[var(--sw-black)]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.25] max-w-[44ch]">
            Cut a year off your roadmap. Start with the workflow costing you the most.
          </p>
          <a href="#cta" className={btnLight}>
            Start the accelerator
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
