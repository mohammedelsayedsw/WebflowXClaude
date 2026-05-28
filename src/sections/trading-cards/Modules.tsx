"use client";

import { Check } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

type ModuleBlock = {
  n: string;
  kicker: string;
  title: string;
  lede: string;
  bullets: string[];
  diagram: React.ReactNode;
  theme: "dark" | "beige";
  reverse?: boolean;
};

function ModuleRow({ n, kicker, title, lede, bullets, diagram, theme, reverse }: ModuleBlock) {
  const dark = theme === "dark";
  const textColor = dark ? "text-white" : "text-[var(--sw-black)]";
  const mutedColor = dark ? "text-white/75" : "text-[var(--sw-black)]/70";
  const bulletColor = dark ? "text-white/85" : "text-[var(--sw-black)]/80";
  const labelColor = dark ? "text-white/55" : "text-[var(--sw-black)]/55";
  const bg = dark ? "bg-[var(--sw-black)]" : "bg-lp-bright";
  const accentColor = dark ? "var(--sw-mint)" : "var(--sw-blue)";

  const diagramWrapClass = dark
    ? "p-4 md:p-6 text-white"
    : "rounded-[4px] p-6 md:p-8 text-white";
  const diagramWrapStyle: React.CSSProperties | undefined = dark
    ? undefined
    : {
        background: "linear-gradient(180deg, #171a38 0%, #10132c 100%)",
        border: "1px solid rgba(230,231,239,0.08)",
      };

  return (
    <section id={`module-${n}`} className={`${bg} relative overflow-hidden scroll-mt-24`}>
      {!dark && <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />}

      {!dark && (
        <>
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
          <span className="absolute top-6 left-6 w-3 h-3 border-t border-l border-[var(--sw-black)]/20 pointer-events-none" />
          <span className="absolute top-6 right-6 w-3 h-3 border-t border-r border-[var(--sw-black)]/20 pointer-events-none" />
          <span className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-[var(--sw-black)]/20 pointer-events-none" />
          <span className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-[var(--sw-black)]/20 pointer-events-none" />
        </>
      )}

      <div className="wrap relative py-24 md:py-32">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-center">
          <Reveal className={`min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-6">
              <span className={`label-code ${labelColor}`}>MODULE · {n}</span>
              <span className={`h-px w-6 hidden sm:block ${dark ? "bg-white/15" : "bg-[var(--sw-black)]/15"}`} />
              <span className={`label-code ${labelColor} whitespace-normal sm:whitespace-nowrap`}>{kicker}</span>
            </div>
            <h3 className={`font-head ${textColor} text-[28px] md:text-[40px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] mb-5 max-w-[22ch]`}>
              {title}
            </h3>
            <p className={`${mutedColor} text-[15px] md:text-[17px] leading-relaxed max-w-[46ch] mb-7`}>
              {lede}
            </p>
            <ul className="space-y-3">
              {bullets.map((r, i) => (
                <li key={i} className={`flex gap-3 ${bulletColor} text-[14px] md:text-[15px] leading-relaxed`}>
                  <Check className="h-4 w-4 shrink-0 mt-1" style={{ color: accentColor }} />
                  <span className="min-w-0">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12} className={`min-w-0 ${reverse ? "md:order-1" : "md:order-2"}`}>
            <div className={`relative ${diagramWrapClass}`} style={diagramWrapStyle}>
              {diagram}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ====================================================================== */
/* SVG 1 — Pack product type: tiers, levels, odds                         */
/* ====================================================================== */
function SvgPackProduct() {
  return (
    <svg viewBox="0 0 560 380" className="w-full h-auto" role="img" aria-label="Pack product type with tier, level, and odds">
      {/* header */}
      <text x={30} y={32} fill="#6EF76E" fontSize="11" fontFamily="Inter" letterSpacing="2">
        PACK · DIAMOND · LEVEL 03
      </text>
      <DrawnPath d="M30 46 H530" stroke="rgba(255,255,255,0.12)" strokeWidth={1} duration={1.2} />

      {/* Pack card mockup */}
      <g transform="translate(30, 70)">
        <rect width={220} height={280} rx={6} fill="rgba(255,255,255,0.04)" stroke="rgba(110,247,110,0.35)" strokeWidth={1} />
        <rect x={12} y={12} width={196} height={156} rx={3} fill="rgba(63,74,175,0.18)" stroke="rgba(255,255,255,0.08)" strokeWidth={1} />
        {/* placeholder card art */}
        <path d="M48 60 L110 36 L172 60 L172 132 L110 156 L48 132 Z" fill="none" stroke="rgba(110,247,110,0.6)" strokeWidth={1.4} />
        <circle cx={110} cy={96} r={22} fill="none" stroke="rgba(110,247,110,0.4)" strokeWidth={1.2} />
        <text x={110} y={102} fill="rgba(255,255,255,0.7)" fontSize="14" fontFamily="Inter" fontWeight="600" textAnchor="middle">DIA</text>

        <text x={12} y={194} fill="#fff" fontSize="16" fontFamily="Inter" fontWeight="700">Diamond Pack</text>
        <text x={12} y={214} fill="rgba(255,255,255,0.55)" fontSize="11" fontFamily="Inter">PSA-stored · level 3</text>

        <line x1={12} y1={230} x2={208} y2={230} stroke="rgba(255,255,255,0.12)" strokeWidth={1} />

        <text x={12} y={252} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter" letterSpacing="1">PRICE</text>
        <text x={208} y={252} fill="#fff" fontSize="14" fontFamily="Inter" fontWeight="600" textAnchor="end">$500</text>
        <text x={12} y={270} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter" letterSpacing="1">EV BAND</text>
        <text x={208} y={270} fill="#fff" fontSize="13" fontFamily="Inter" textAnchor="end">$420 to $640</text>
      </g>

      {/* Odds panel */}
      <g transform="translate(290, 70)">
        <text x={0} y={14} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter" letterSpacing="1.5">ODDS BREAKDOWN</text>

        {[
          { label: "Case hit", value: "1 : 100", w: 32 },
          { label: "Auto", value: "1 : 25", w: 50 },
          { label: "Numbered parallel", value: "1 : 10", w: 70 },
          { label: "Base hit", value: "1 : 3", w: 95 },
          { label: "Common", value: "1 : 1", w: 100 },
        ].map((row, i) => {
          const y = 36 + i * 42;
          return (
            <g key={row.label}>
              <text x={0} y={y + 12} fill="#fff" fontSize="12" fontFamily="Inter">{row.label}</text>
              <text x={240} y={y + 12} fill="rgba(110,247,110,0.95)" fontSize="11" fontFamily="Inter" textAnchor="end" letterSpacing="0.5">{row.value}</text>
              <rect x={0} y={y + 18} width={240} height={4} rx={2} fill="rgba(255,255,255,0.08)" />
              <motion.rect
                x={0}
                y={y + 18}
                height={4}
                rx={2}
                fill="#6EF76E"
                initial={{ width: 0 }}
                whileInView={{ width: row.w * 2.4 }}
                transition={{ duration: 0.9, delay: 0.3 + i * 0.1 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

/* ====================================================================== */
/* SVG 2 — FMV randomization engine with audit log                        */
/* ====================================================================== */
function SvgFMV() {
  return (
    <svg viewBox="0 0 560 380" className="w-full h-auto" role="img" aria-label="Automatic restocking by market value">
      <text x={30} y={32} fill="currentColor" opacity="0.55" fontSize="11" fontFamily="Inter" letterSpacing="2">
        AUTO-RESTOCK · CLOSEST MARKET VALUE
      </text>
      <DrawnPath d="M30 46 H530" stroke="currentColor" strokeOpacity={0.18} strokeWidth={1} duration={1.2} />

      {/* Active pool */}
      <g transform="translate(30, 72)">
        <text x={0} y={12} fill="currentColor" opacity="0.55" fontSize="10" fontFamily="Inter" letterSpacing="1.5">ACTIVE POOL</text>
        {[
          { v: "$420", hit: false },
          { v: "$480", hit: true },
          { v: "$460", hit: false },
          { v: "$520", hit: false },
        ].map((c, i) => (
          <g key={i} transform={`translate(${i * 44}, 24)`}>
            <rect
              width={36}
              height={50}
              rx={3}
              fill={c.hit ? "rgba(224,79,79,0.18)" : "rgba(63,74,175,0.18)"}
              stroke={c.hit ? "#E04F4F" : "rgba(63,74,175,0.55)"}
              strokeWidth={1}
            />
            <text x={18} y={30} fill="currentColor" fontSize="11" fontFamily="Inter" textAnchor="middle" fontWeight="600">{c.v}</text>
          </g>
        ))}
        <text x={44} y={102} fill="#E04F4F" fontSize="10" fontFamily="Inter" letterSpacing="1">HIT · $480</text>
      </g>

      {/* arrow down */}
      <DrawnPath d="M74 200 L74 230" stroke="rgba(110,247,110,0.7)" strokeWidth={1.4} duration={0.7} delay={1.0} />
      <path d="M70 226 L74 234 L78 226" fill="none" stroke="rgba(110,247,110,0.7)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />

      {/* Reserve query */}
      <g transform="translate(30, 240)">
        <rect width={220} height={56} rx={3} fill="rgba(110,247,110,0.06)" stroke="rgba(110,247,110,0.35)" strokeWidth={1} />
        <text x={12} y={22} fill="rgba(110,247,110,0.85)" fontSize="10" fontFamily="Inter" letterSpacing="1.5">QUERY · RESERVE</text>
        <text x={12} y={42} fill="currentColor" fontSize="12" fontFamily="Inter" fontWeight="600">closest match to $480</text>
      </g>

      {/* arrow right */}
      <DrawnPath d="M260 270 L300 270" stroke="rgba(110,247,110,0.7)" strokeWidth={1.4} duration={0.6} delay={1.4} />
      <path d="M296 266 L304 270 L296 274" fill="none" stroke="rgba(110,247,110,0.7)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />

      {/* Reserve pool match */}
      <g transform="translate(310, 240)">
        <rect width={220} height={56} rx={3} fill="rgba(63,74,175,0.12)" stroke="rgba(63,74,175,0.55)" strokeWidth={1} />
        <text x={12} y={22} fill="rgba(63,74,175,0.95)" fontSize="10" fontFamily="Inter" letterSpacing="1.5">MATCHED · $475</text>
        <text x={12} y={42} fill="currentColor" fontSize="12" fontFamily="Inter" fontWeight="600">Jefferson Auto · serial 12/99</text>
      </g>

      {/* Audit log */}
      <g transform="translate(310, 80)">
        <text x={0} y={12} fill="currentColor" opacity="0.55" fontSize="10" fontFamily="Inter" letterSpacing="1.5">AUDIT LOG</text>
        {[
          "PACK 4231 · hit pulled · $480",
          "RESERVE QUERY · $480 ± 5%",
          "MATCH · cert 9412774 · $475",
          "REPLACE · pack 4231 refilled",
          "WRITE · ledger · 18:42:09 UTC",
        ].map((line, i) => (
          <motion.text
            key={i}
            x={0}
            y={32 + i * 18}
            fill="currentColor"
            opacity="0.85"
            fontSize="11"
            fontFamily="ui-monospace, Menlo, monospace"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.85 }}
            transition={{ duration: 0.3, delay: 0.4 + i * 0.12 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {line}
          </motion.text>
        ))}
      </g>
    </svg>
  );
}

/* ====================================================================== */
/* SVG 3 — PSA Vault integration                                          */
/* ====================================================================== */
function SvgPSAVault() {
  return (
    <svg viewBox="0 0 560 380" className="w-full h-auto" role="img" aria-label="PSA Vault integration">
      <text x={30} y={32} fill="#6EF76E" fontSize="11" fontFamily="Inter" letterSpacing="2">
        PSA VAULT · OWNERSHIP TRANSFER
      </text>
      <DrawnPath d="M30 46 H530" stroke="rgba(255,255,255,0.12)" strokeWidth={1} duration={1.2} />

      {/* Card with cert */}
      <g transform="translate(30, 80)">
        <rect width={140} height={180} rx={4} fill="rgba(63,74,175,0.18)" stroke="rgba(110,247,110,0.5)" strokeWidth={1.2} />
        <text x={70} y={28} fill="#6EF76E" fontSize="10" fontFamily="Inter" textAnchor="middle" letterSpacing="2">PSA · GEM MT 10</text>
        <DrawnPath d="M16 38 H124" stroke="rgba(255,255,255,0.12)" strokeWidth={1} delay={0.4} />
        <path d="M40 80 L70 60 L100 80 L100 130 L70 150 L40 130 Z" fill="none" stroke="rgba(110,247,110,0.6)" strokeWidth={1.4} />
        <text x={70} y={108} fill="#fff" fontSize="14" fontFamily="Inter" textAnchor="middle" fontWeight="700">CARD</text>
        <text x={70} y={168} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter" textAnchor="middle">CERT 9412774</text>
      </g>

      {/* Arrow */}
      <DrawnPath d="M190 170 L240 170" stroke="rgba(110,247,110,0.7)" strokeWidth={1.4} duration={0.7} delay={1.0} />
      <path d="M236 166 L244 170 L236 174" fill="none" stroke="rgba(110,247,110,0.7)" strokeWidth={1.4} strokeLinecap="round" strokeLinejoin="round" />
      <text x={215} y={158} fill="#6EF76E" fontSize="10" fontFamily="Inter" textAnchor="middle" letterSpacing="1">TRANSFER</text>

      {/* Vault hub */}
      <g transform="translate(250, 95)">
        <rect width={160} height={150} rx={4} fill="rgba(110,247,110,0.06)" stroke="rgba(110,247,110,0.45)" strokeWidth={1.2} />
        <text x={80} y={26} fill="#6EF76E" fontSize="10" fontFamily="Inter" textAnchor="middle" letterSpacing="2">PSA VAULT</text>
        <DrawnPath d="M16 38 H144" stroke="rgba(255,255,255,0.12)" strokeWidth={1} delay={1.2} />
        {/* lock icon */}
        <rect x={68} y={58} width={24} height={20} rx={2} fill="none" stroke="rgba(110,247,110,0.8)" strokeWidth={1.4} />
        <path d="M72 58 V52 a8 8 0 0 1 16 0 V58" fill="none" stroke="rgba(110,247,110,0.8)" strokeWidth={1.4} />
        <circle cx={80} cy={68} r={2} fill="#6EF76E" />
        <text x={80} y={110} fill="#fff" fontSize="13" fontFamily="Inter" textAnchor="middle" fontWeight="600">ownership: buyer</text>
        <text x={80} y={128} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="Inter" textAnchor="middle">status: stored at PSA</text>
      </g>

      {/* Outbound paths */}
      {[
        { label: "EBAY VIA VAULT", y: 100 },
        { label: "PSA OFFERS", y: 150 },
        { label: "BUYBACK", y: 200 },
        { label: "WITHDRAW", y: 250 },
      ].map((b, i) => (
        <g key={b.label}>
          <DrawnPath
            d={`M410 170 Q 440 170 460 ${b.y + 12}`}
            stroke="rgba(110,247,110,0.45)"
            strokeWidth={1}
            duration={0.6}
            delay={1.6 + i * 0.12}
          />
          <rect x={460} y={b.y} width={86} height={24} rx={2} fill="none" stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
          <text x={503} y={b.y + 15} fill="rgba(255,255,255,0.85)" fontSize="9" fontFamily="Inter" textAnchor="middle" letterSpacing="1">{b.label}</text>
        </g>
      ))}

      {/* Bottom log */}
      <text x={30} y={330} fill="rgba(255,255,255,0.55)" fontSize="10" fontFamily="ui-monospace, Menlo, monospace">
        purchase.completed → vault.ownership_transferred(cert=9412774, buyer=user_8821)
      </text>
    </svg>
  );
}

/* ====================================================================== */
/* SVG 4 — Card lifecycle + buyback                                       */
/* ====================================================================== */
function SvgLifecycle() {
  const node = (x: number, y: number, w: number, h: number, label: string, sub: string, active = false) => (
    <g transform={`translate(${x}, ${y})`}>
      <rect
        width={w}
        height={h}
        rx={3}
        fill={active ? "rgba(63,74,175,0.18)" : "rgba(63,74,175,0.06)"}
        stroke={active ? "var(--sw-blue)" : "rgba(63,74,175,0.5)"}
        strokeWidth={1.2}
      />
      <text x={w / 2} y={22} fill="currentColor" fontSize="12" fontFamily="Inter" fontWeight="700" textAnchor="middle">{label}</text>
      <text x={w / 2} y={h - 10} fill="currentColor" opacity="0.55" fontSize="9" fontFamily="Inter" textAnchor="middle" letterSpacing="1">{sub}</text>
    </g>
  );

  return (
    <svg viewBox="0 0 560 380" className="w-full h-auto" role="img" aria-label="Card lifecycle and buyback">
      <text x={30} y={32} fill="currentColor" opacity="0.55" fontSize="11" fontFamily="Inter" letterSpacing="2">
        CARD LIFECYCLE · STATE MACHINE
      </text>
      <DrawnPath d="M30 46 H530" stroke="currentColor" strokeOpacity={0.18} strokeWidth={1} duration={1.2} />

      {/* States */}
      {node(30, 90, 120, 48, "ACTIVE", "in reserve pool")}
      {node(170, 90, 120, 48, "PURCHASED", "in pack reveal", true)}
      {node(310, 90, 120, 48, "STORED", "at PSA")}

      {/* Flow arrows */}
      <DrawnPath d="M150 114 H170" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} duration={0.6} delay={0.6} />
      <path d="M166 110 L174 114 L166 118" fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} />

      <DrawnPath d="M290 114 H310" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} duration={0.6} delay={0.8} />
      <path d="M306 110 L314 114 L306 118" fill="none" stroke="currentColor" strokeOpacity={0.55} strokeWidth={1.2} />

      {/* Branches from vaulted */}
      <DrawnPath d="M370 138 V200" stroke="currentColor" strokeOpacity={0.4} strokeWidth={1} duration={0.6} delay={1.2} />
      <DrawnPath d="M370 200 H110" stroke="currentColor" strokeOpacity={0.4} strokeWidth={1} duration={0.7} delay={1.4} />

      {/* End states */}
      {node(50, 230, 120, 40, "EBAY", "via vault")}
      {node(190, 230, 120, 40, "PSA OFFERS", "secondary sale")}
      {node(330, 230, 120, 40, "WITHDRAW", "ship to buyer")}

      {/* Branch arrows down */}
      {[110, 250, 390].map((x, i) => (
        <g key={i}>
          <DrawnPath d={`M${x} 200 V230`} stroke="currentColor" strokeOpacity={0.4} strokeWidth={1} duration={0.5} delay={1.6 + i * 0.1} />
          <path d={`M${x - 4} 226 L${x} 234 L${x + 4} 226`} fill="none" stroke="currentColor" strokeOpacity={0.4} strokeWidth={1} />
        </g>
      ))}

      {/* Buyback loop back to active — right-angle path that clears all boxes */}
      <DrawnPath
        d="M430 114 H470 V300 H60 V138"
        stroke="rgba(110,247,110,0.7)"
        strokeWidth={1.2}
        duration={1.6}
        delay={2.0}
      />
      <path d="M56 142 L60 134 L64 142" fill="none" stroke="rgba(110,247,110,0.7)" strokeWidth={1.2} />
      <text x={265} y={325} fill="#6EF76E" fontSize="11" fontFamily="Inter" textAnchor="middle" letterSpacing="1.5">
        90% BUYBACK · REFRESH RESERVE
      </text>
    </svg>
  );
}

/* ====================================================================== */
/* SVG 5 — High-AOV payment + Stripe Radar                                */
/* ====================================================================== */
function SvgRadar() {
  const txs = [
    { t: 0, a: 80, ok: true },
    { t: 1, a: 80, ok: true },
    { t: 2, a: 80, ok: true },
    { t: 3, a: 80, ok: true },
    { t: 4, a: 250, ok: true },
    { t: 5, a: 80, ok: true },
    { t: 6, a: 1500, ok: true },
    { t: 7, a: 80, ok: true },
    { t: 8, a: 4500, ok: true },
    { t: 9, a: 250, ok: true },
  ];
  const maxA = 5000;
  const ox = 60;
  const oy = 230;
  const cw = 460;
  const ch = 170;
  const step = cw / (txs.length - 1);

  return (
    <svg viewBox="0 0 560 320" className="w-full h-auto" role="img" aria-label="Payment rules for high-value live show transactions">
      <text x={30} y={28} fill="#6EF76E" fontSize="11" fontFamily="Inter" letterSpacing="2">
        STREAM · 90 MINUTES · 10 TRANSACTIONS
      </text>
      <DrawnPath d="M30 42 H530" stroke="rgba(255,255,255,0.12)" strokeWidth={1} duration={1.2} />

      {/* gridlines */}
      {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
        <line
          key={i}
          x1={ox}
          x2={ox + cw}
          y1={oy - p * ch}
          y2={oy - p * ch}
          stroke="rgba(255,255,255,0.08)"
          strokeWidth={1}
        />
      ))}
      <line x1={ox} x2={ox + cw} y1={oy} y2={oy} stroke="rgba(255,255,255,0.18)" strokeWidth={1} />
      <text x={ox - 6} y={oy - ch + 4} fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="Inter" textAnchor="end">$5,000</text>
      <text x={ox - 6} y={oy + 4} fill="rgba(255,255,255,0.45)" fontSize="9" fontFamily="Inter" textAnchor="end">$0</text>

      {txs.map((tx, i) => {
        const x = ox + i * step;
        const barH = (tx.a / maxA) * ch;
        return (
          <g key={i}>
            <motion.rect
              x={x - 14}
              y={oy - barH}
              width={28}
              height={barH}
              rx={2}
              fill={tx.ok ? "rgba(110,247,110,0.5)" : "rgba(224,79,79,0.5)"}
              stroke={tx.ok ? "#6EF76E" : "#E04F4F"}
              strokeWidth={1}
              initial={{ height: 0, y: oy }}
              whileInView={{ height: barH, y: oy - barH }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
              viewport={{ once: true, amount: 0.3 }}
            />
            <text x={x} y={oy + 14} fill="rgba(255,255,255,0.5)" fontSize="9" fontFamily="Inter" textAnchor="middle">${tx.a}</text>
            {tx.ok && (
              <motion.circle
                cx={x}
                cy={oy - barH - 10}
                r={4}
                fill="#6EF76E"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 + i * 0.07 }}
                viewport={{ once: true, amount: 0.3 }}
              />
            )}
          </g>
        );
      })}

      {/* Inline summary — no card boxes, just a clear separated row */}
      <DrawnPath d="M30 268 H530" stroke="rgba(255,255,255,0.18)" strokeWidth={1} duration={1.0} delay={1.6} />

      <g transform="translate(0, 290)">
        <text x={60} y={0} fill="rgba(110,247,110,0.95)" fontSize="9" fontFamily="Inter" letterSpacing="1.5">APPROVED</text>
        <text x={60} y={18} fill="#fff" fontSize="15" fontFamily="Inter" fontWeight="700">10 / 10</text>

        <text x={230} y={0} fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="Inter" letterSpacing="1.5">PEAK SINGLE</text>
        <text x={230} y={18} fill="#fff" fontSize="15" fontFamily="Inter" fontWeight="700">$4,500</text>

        <text x={400} y={0} fill="rgba(255,255,255,0.55)" fontSize="9" fontFamily="Inter" letterSpacing="1.5">CHARGEBACKS</text>
        <text x={400} y={18} fill="#fff" fontSize="15" fontFamily="Inter" fontWeight="700">0</text>
      </g>
    </svg>
  );
}

/* ====================================================================== */
/* SVG 6 — Whatnot + eBay + Owned site → one customer file                */
/* ====================================================================== */
function SvgCustomerBridge() {
  return (
    <svg viewBox="0 0 560 380" className="w-full h-auto" role="img" aria-label="Customer file across channels">
      <text x={30} y={32} fill="currentColor" opacity="0.55" fontSize="11" fontFamily="Inter" letterSpacing="2">
        CUSTOMER FILE · CROSS-CHANNEL
      </text>
      <DrawnPath d="M30 46 H530" stroke="currentColor" strokeOpacity={0.18} strokeWidth={1} duration={1.2} />

      {/* Three source channels — neutral borders, story is the convergence */}
      {[
        { label: "WHATNOT", sub: "live show buyers", x: 30 },
        { label: "EBAY", sub: "secondary marketplace", x: 220 },
        { label: "OWNED SITE", sub: "direct purchases", x: 410 },
      ].map((c, i) => (
        <g key={c.label}>
          <rect
            x={c.x}
            y={80}
            width={120}
            height={56}
            rx={3}
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.35)"
            strokeWidth={1}
          />
          <text x={c.x + 60} y={104} fill="currentColor" fontSize="13" fontFamily="Inter" fontWeight="700" textAnchor="middle" letterSpacing="1">{c.label}</text>
          <text x={c.x + 60} y={122} fill="currentColor" opacity="0.55" fontSize="10" fontFamily="Inter" textAnchor="middle">{c.sub}</text>
          {/* Down arm */}
          <DrawnPath
            d={`M${c.x + 60} 136 V180`}
            stroke="currentColor"
            strokeOpacity={0.35}
            strokeWidth={1}
            duration={0.5}
            delay={0.4 + i * 0.12}
          />
        </g>
      ))}

      {/* Horizontal manifold connecting the three source arms */}
      <DrawnPath
        d="M90 180 H470"
        stroke="currentColor"
        strokeOpacity={0.35}
        strokeWidth={1}
        duration={0.9}
        delay={0.9}
      />

      {/* Drop into the customer record */}
      <DrawnPath
        d="M280 180 V210"
        stroke="rgba(110,247,110,0.6)"
        strokeWidth={1.2}
        duration={0.4}
        delay={1.3}
      />

      {/* Merged customer record */}
      <g transform="translate(160, 210)">
        <rect width={240} height={100} rx={4} fill="rgba(110,247,110,0.06)" stroke="rgba(110,247,110,0.55)" strokeWidth={1.2} />
        <text x={120} y={22} fill="rgba(110,247,110,0.95)" fontSize="10" fontFamily="Inter" textAnchor="middle" letterSpacing="2">SINGLE CUSTOMER</text>
        <text x={16} y={46} fill="currentColor" fontSize="14" fontFamily="Inter" fontWeight="700">Customer · user_8821</text>
        <DrawnPath d="M16 56 H224" stroke="currentColor" strokeOpacity={0.18} strokeWidth={1} delay={1.6} />
        <text x={16} y={74} fill="currentColor" opacity="0.55" fontSize="10" fontFamily="Inter" letterSpacing="1">LIFETIME VALUE</text>
        <text x={224} y={74} fill="currentColor" fontSize="13" fontFamily="Inter" fontWeight="600" textAnchor="end">$48,400</text>
        <text x={16} y={91} fill="currentColor" opacity="0.55" fontSize="10" fontFamily="Inter" letterSpacing="1">TIER</text>
        <text x={224} y={91} fill="rgba(110,247,110,0.95)" fontSize="13" fontFamily="Inter" fontWeight="600" textAnchor="end">WHALE · TOP 50</text>
      </g>

      {/* Outflow to Klaviyo — wider box so LIFECYCLE fits cleanly */}
      <DrawnPath d="M280 310 V340" stroke="rgba(110,247,110,0.5)" strokeWidth={1.2} duration={0.5} delay={1.9} />
      <rect x={190} y={340} width={180} height={28} rx={3} fill="none" stroke="rgba(110,247,110,0.6)" strokeWidth={1} />
      <text x={280} y={358} fill="rgba(110,247,110,0.95)" fontSize="11" fontFamily="Inter" textAnchor="middle" letterSpacing="1.5">KLAVIYO · LIFECYCLE</text>
    </svg>
  );
}

/* ====================================================================== */

export function Modules() {
  const modules: ModuleBlock[] = [
    {
      n: "1",
      kicker: "PURCHASABLE PACK",
      title: "A pack the customer can buy, with tiers, levels, and odds",
      lede:
        "A real product on your site that the customer buys, with a defined price, a defined set of cards inside it, and stated odds. Three tiers from entry to premium. Every sale logged.",
      bullets: [
        "Three tiers (Standard, Diamond, Legend) at separate price points",
        "Each tier has a stated expected value range so customers know what they pay for",
        "Stated odds for every pull type, configurable per tier",
        "Pop-up checklist shows the customer what is inside before purchase",
        "Public Top Pulls page logs every sale for transparency",
      ],
      diagram: <SvgPackProduct />,
      theme: "dark",
    },
    {
      n: "2",
      kicker: "AUTO RESTOCK",
      title: "Automatic restocking based on each card's market value",
      lede:
        "When a valuable card sells, the platform finds the closest-value card in your reserve stock and slots it back in to keep the pack live. No spreadsheet rebalancing. Every move logged.",
      bullets: [
        "Algorithm matches replacement cards by current market value",
        "Market value pulled live from Card Ladder, the category's reference index",
        "Full audit log of every replacement with timestamps",
        "Alerts when reserve stock at a price point runs low",
        "Each pack's value stays inside its stated range with no manual work",
      ],
      diagram: <SvgFMV />,
      theme: "beige",
      reverse: true,
    },
    {
      n: "3",
      kicker: "CARD GRADING",
      title: "Live connection to the leading card-grading service",
      lede:
        "When a customer buys a card, it transfers into their secure storage account at PSA, the category's leading grading service. From there it can stay stored, list to eBay, or come back to you for the buyback.",
      bullets: [
        "Card ownership transfers to the buyer the moment the sale completes",
        "Buyer sees their stored cards inside their account on your site",
        "List a stored card to eBay through the same secure storage chain",
        "Sell the card through PSA's offers system without leaving",
        "Bulk operations team tools to import by grading certificate number",
      ],
      diagram: <SvgPSAVault />,
      theme: "dark",
    },
    {
      n: "4",
      kicker: "CARD JOURNEY",
      title: "The full card journey, end to end, with a 90% buyback",
      lede:
        "Every card moves through a clear journey: it sits in your reserve, sells in a pack, lands in the buyer's storage, then can be listed, withdrawn, or sold back to you. The buyback brings it home to your reserve.",
      bullets: [
        "Five clear states (Active, Sold, Stored, Listed, Bought Back) and one engine governs them",
        "90% buyback at current market value, paid as store credit the customer can spend",
        "Cards bought back refresh into reserve and become available for the next pack",
        "Refunds for failed sales handled automatically with audit trail",
        "Customer disputes routed to a card-replacement workflow, not back-and-forth email",
      ],
      diagram: <SvgLifecycle />,
      theme: "beige",
      reverse: true,
    },
    {
      n: "5",
      kicker: "PAYMENT CONTROLS",
      title: "Payment rules that handle $20 and $5,000 in the same hour",
      lede:
        "Stripe Radar configured for the pattern your business actually has: a customer buying ten small spots and one large card in the same stream. The expensive purchases pass. The fraud gets caught.",
      bullets: [
        "Custom rules for the small-then-large transaction pattern unique to live shows",
        "Block-lists tuned for the fraud patterns documented in trading cards",
        "Diamond ($500) and Legend ($1,000) tier purchases protected with extra checks",
        "Written dispute-defence policy your support team can run from",
        "Optional Stripe Connect setup for split payouts and white-label flows",
      ],
      diagram: <SvgRadar />,
      theme: "dark",
    },
    {
      n: "6",
      kicker: "ONE CUSTOMER FILE",
      title: "One customer record across Whatnot, eBay, and your website",
      lede:
        "Today your best buyers are anonymous handles on a live-stream app. The platform matches them by email across Whatnot, eBay, and your site, so you can name your top 50 customers and run real lifecycle marketing.",
      bullets: [
        "Whatnot username, eBay account, and website login matched on email",
        "Klaviyo email segments built against the merged customer record",
        "Lifetime-value ranking, with manual override for known big spenders",
        "Attribution from a live show all the way to a website purchase",
        "Customer reviews and feedback from Whatnot pulled into the record",
      ],
      diagram: <SvgCustomerBridge />,
      theme: "beige",
      reverse: true,
    },
  ];

  return (
    <>
      {modules.map((m) => (
        <ModuleRow key={m.n} {...m} />
      ))}
    </>
  );
}
