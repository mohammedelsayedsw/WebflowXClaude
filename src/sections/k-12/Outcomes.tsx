"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { btnLight } from "@/components/primitives/buttonStyles";
import { SectionIcon } from "./motifs";

type OutcomeBlock = {
  n: string;
  kicker: string;
  age: string;
  icon: string;
  title: React.ReactNode;
  lede: string;
  results: string[];
  diagram: React.ReactNode;
  theme: "dark" | "beige";
  reverse?: boolean;
  diagramDark?: boolean;
};

const INK = "Inter";

// ============================================================
// Module 1 – Catalog & supplier feed engine
// Excel/feed files → mapping hub → clean store PDP
// ============================================================
function SvgSupplierFeed() {
  const W = 700;
  const H = 440;
  const sources = [
    { y: 40, label: "Supplier A · Excel", sub: "xlsx upload", color: "#3F4AAF" },
    { y: 165, label: "Supplier B · API", sub: "REST feed", color: "#3F4AAF" },
    { y: 290, label: "Supplier C · SFTP", sub: "nightly CSV", color: "#3F4AAF" },
  ];
  const hubX = 270;
  const hubY = 110;
  const hubW = 175;
  const hubH = 215;
  const pdpX = 510;
  const pdpY = 110;
  const pdpW = 175;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Supplier feeds normalized into a clean catalog">
      <defs>
        <linearGradient id="feedHub" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6EF76E" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#6EF76E" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {sources.map((s, i) => {
        const cardW = 215;
        const cardH = 92;
        const midY = s.y + cardH / 2;
        return (
          <motion.g
            key={s.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <rect x={0} y={s.y} width={cardW} height={cardH} rx={3} fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.18)" />
            <rect x={0} y={s.y} width={4} height={cardH} fill={s.color} />
            {/* tiny spreadsheet glyph */}
            <rect x={16} y={s.y + 18} width={26} height={20} rx={1.5} fill="none" stroke="rgba(255,255,255,0.5)" />
            <line x1={16} x2={42} y1={s.y + 25} y2={s.y + 25} stroke="rgba(255,255,255,0.4)" />
            <line x1={29} x2={29} y1={s.y + 18} y2={s.y + 38} stroke="rgba(255,255,255,0.4)" />
            <text x={56} y={s.y + 28} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700">{s.label}</text>
            <text x={56} y={s.y + 46} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="11">{s.sub}</text>
            <text x={16} y={s.y + 78} fill="rgba(255,255,255,0.4)" fontFamily={INK} fontSize="10">price · stock · attributes</text>

            <DrawnPath
              d={`M ${cardW} ${midY} C ${cardW + 30} ${midY}, ${hubX - 30} ${hubY + hubH / 2}, ${hubX} ${hubY + hubH / 2}`}
              stroke={s.color} strokeOpacity={0.55} strokeWidth={1.3} strokeDasharray="4 5" duration={0.7} delay={0.5 + i * 0.08}
            />
            <motion.circle r={3} fill={s.color}
              initial={{ cx: cardW, cy: midY, opacity: 0 }}
              animate={{ cx: [cardW, hubX], cy: [midY, hubY + hubH / 2], opacity: [0, 1, 1, 0] }}
              transition={{ delay: 1.4 + i * 0.4, duration: 1.3, repeat: Infinity, repeatDelay: 2.5, times: [0, 0.2, 0.8, 1] }}
            />
          </motion.g>
        );
      })}

      <motion.g initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={hubX} y={hubY} width={hubW} height={hubH} rx={4} fill="url(#feedHub)" stroke="#6EF76E" strokeOpacity={0.5} />
        <text x={hubX + hubW / 2} y={hubY + 34} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700" textAnchor="middle">Mapping engine</text>
        <text x={hubX + hubW / 2} y={hubY + 52} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="8.5" letterSpacing="0.4" textAnchor="middle">SELF-SERVE · NO DEV TICKET</text>
        <line x1={hubX + 18} x2={hubX + hubW - 18} y1={hubY + 68} y2={hubY + 68} stroke="rgba(230,231,239,0.14)" />
        {["Column mapping", "Margin guard", "Stock = supplier truth", "Enrichment queue"].map((label, i) => (
          <g key={label}>
            <circle cx={hubX + 24} cy={hubY + 94 + i * 28} r={3} fill="#6EF76E" />
            <text x={hubX + 38} y={hubY + 98 + i * 28} fill="#fff" fontFamily={INK} fontSize="11" fontWeight="600">{label}</text>
          </g>
        ))}
      </motion.g>

      <DrawnPath d={`M ${hubX + hubW} ${hubY + hubH / 2} C ${hubX + hubW + 25} ${hubY + hubH / 2}, ${pdpX - 25} ${pdpY + 110}, ${pdpX} ${pdpY + 110}`} stroke="#6EF76E" strokeOpacity={0.75} strokeWidth={1.5} duration={0.9} delay={1.0} />

      <motion.g initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7, duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={pdpX} y={pdpY} width={pdpW} height={215} rx={4} fill="rgba(63,74,175,0.10)" stroke="rgba(63,74,175,0.4)" />
        <rect x={pdpX} y={pdpY} width={pdpW} height={4} fill="#6EF76E" />
        <text x={pdpX + 16} y={pdpY + 28} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700">Your product page</text>
        <text x={pdpX + 16} y={pdpY + 46} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="10" letterSpacing="1">FRESH · YOURS · RANKABLE</text>
        <line x1={pdpX + 16} x2={pdpX + pdpW - 16} y1={pdpY + 60} y2={pdpY + 60} stroke="rgba(230,231,239,0.1)" />
        <text x={pdpX + 16} y={pdpY + 84} fill="rgba(255,255,255,0.7)" fontFamily={INK} fontSize="11">Price</text>
        <text x={pdpX + pdpW - 16} y={pdpY + 84} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700" textAnchor="end">auto</text>
        <text x={pdpX + 16} y={pdpY + 108} fill="rgba(255,255,255,0.7)" fontFamily={INK} fontSize="11">In stock</text>
        <text x={pdpX + pdpW - 16} y={pdpY + 108} fill="#6EF76E" fontFamily={INK} fontSize="13" fontWeight="700" textAnchor="end">live</text>
        <text x={pdpX + 16} y={pdpY + 132} fill="rgba(255,255,255,0.7)" fontFamily={INK} fontSize="11">Copy</text>
        <text x={pdpX + pdpW - 16} y={pdpY + 132} fill="#fff" fontFamily={INK} fontSize="11" textAnchor="end">your own</text>
        <rect x={pdpX + 16} y={pdpY + 158} width={pdpW - 32} height={26} rx={2} fill="rgba(110,247,110,0.16)" stroke="rgba(110,247,110,0.55)" />
        <text x={pdpX + pdpW / 2} y={pdpY + 175} fill="#6EF76E" fontFamily={INK} fontSize="10" fontWeight="700" letterSpacing="0.5" textAnchor="middle">ALWAYS CURRENT</text>
      </motion.g>

      <text x={W / 2} y={H - 12} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="10" letterSpacing="1.5" textAnchor="middle">FEEDS IN · CLEAN CATALOG OUT · YOUR TEAM IN CONTROL</text>
    </svg>
  );
}

// ============================================================
// Module 2 – Marketplaces & shopping feeds
// One catalog → fans out to channels → orders return to one screen
// ============================================================
function SvgChannels() {
  const W = 700;
  const H = 440;
  const catX = 30;
  const catY = 150;
  const catW = 175;
  const catH = 140;
  const channels = [
    { y: 30, name: "Amazon" },
    { y: 95, name: "eBay" },
    { y: 160, name: "Google Shopping" },
    { y: 225, name: "bol · Kaufland" },
    { y: 290, name: "Cdiscount" },
  ];
  const chX = 300;
  const chW = 175;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="One catalog feeding multiple sales channels">
      <defs>
        <linearGradient id="catGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3F4AAF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3F4AAF" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={catX} y={catY} width={catW} height={catH} rx={4} fill="url(#catGrad)" stroke="rgba(63,74,175,0.45)" />
        <rect x={catX} y={catY} width={catW} height={4} fill="#6EF76E" />
        <text x={catX + catW / 2} y={catY + 36} fill="#fff" fontFamily={INK} fontSize="14" fontWeight="700" textAnchor="middle">One catalog</text>
        <text x={catX + catW / 2} y={catY + 56} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="10" letterSpacing="1" textAnchor="middle">KEPT FRESH BY MODULE 1</text>
        <text x={catX + catW / 2} y={catY + 92} fill="#6EF76E" fontFamily={INK} fontSize="22" fontWeight="700" textAnchor="middle" letterSpacing="-0.5">8,240</text>
        <text x={catX + catW / 2} y={catY + 112} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="10" textAnchor="middle">products · one source</text>
      </motion.g>

      {channels.map((c, i) => {
        const midY = c.y + 24;
        return (
          <motion.g key={c.name} initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.08, duration: 0.4 }} viewport={{ once: true, amount: 0.2 }}>
            <DrawnPath
              d={`M ${catX + catW} ${catY + catH / 2} C ${catX + catW + 40} ${catY + catH / 2}, ${chX - 40} ${midY}, ${chX} ${midY}`}
              stroke="#3F4AAF" strokeOpacity={0.5} strokeWidth={1.2} strokeDasharray="4 5" duration={0.7} delay={0.4 + i * 0.06}
            />
            <rect x={chX} y={c.y} width={chW} height={48} rx={3} fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.18)" />
            <circle cx={chX + 22} cy={midY} r={6} fill="none" stroke="#6EF76E" strokeOpacity={0.7} />
            <circle cx={chX + 22} cy={midY} r={2.5} fill="#6EF76E" />
            <text x={chX + 40} y={midY - 1} fill="#fff" fontFamily={INK} fontSize="12" fontWeight="700">{c.name}</text>
            <text x={chX + 40} y={midY + 14} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="9.5">stock synced · price-ruled</text>
          </motion.g>
        );
      })}

      {/* orders return to one screen */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.5 }} viewport={{ once: true, amount: 0.2 }}>
        <rect x={520} y={150} width={150} height={140} rx={4} fill="rgba(110,247,110,0.08)" stroke="#6EF76E" strokeOpacity={0.5} />
        <text x={595} y={186} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700" textAnchor="middle">One order screen</text>
        <text x={595} y={206} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="10" textAnchor="middle">every channel</text>
        {[0, 1, 2].map((r) => (
          <rect key={r} x={540} y={222 + r * 18} width={110} height={10} rx={2} fill="rgba(255,255,255,0.12)" />
        ))}
        <text x={595} y={H - 70} fill="#6EF76E" fontFamily={INK} fontSize="10" fontWeight="700" letterSpacing="0.5" textAnchor="middle">NO DOUBLE BOOKKEEPING</text>
      </motion.g>
      {channels.map((c, i) => (
        <DrawnPath key={i} d={`M ${chX + chW} ${c.y + 24} C ${chX + chW + 20} ${c.y + 24}, ${500} 220, ${520} 220`} stroke="#6EF76E" strokeOpacity={0.4} strokeWidth={1} duration={0.6} delay={1.0 + i * 0.05} />
      ))}
    </svg>
  );
}

// ============================================================
// Module 3 – Subscription boxes & gift subscriptions
// Monthly cycle of boxes + a gift tag
// ============================================================
function SvgSubscription() {
  const W = 700;
  const H = 440;
  const months = [
    { x: 60, label: "Month 1" },
    { x: 270, label: "Month 2" },
    { x: 480, label: "Month 3" },
  ];
  const boxY = 120;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Monthly subscription box cycle with gift subscription">
      {months.map((m, i) => (
        <motion.g key={m.label} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.12, duration: 0.45 }} viewport={{ once: true, amount: 0.2 }}>
          {/* box */}
          <rect x={m.x} y={boxY} width={150} height={120} rx={4} fill="rgba(63,74,175,0.10)" stroke="rgba(63,74,175,0.45)" />
          <path d={`M ${m.x} ${boxY + 34} H ${m.x + 150}`} stroke="rgba(255,255,255,0.18)" />
          <path d={`M ${m.x + 75} ${boxY} V ${boxY + 34}`} stroke="rgba(255,255,255,0.18)" />
          {/* lid ribbon */}
          <rect x={m.x + 64} y={boxY + 34} width={22} height={86} fill="rgba(110,247,110,0.16)" />
          <text x={m.x + 75} y={boxY + 22} fill="rgba(255,255,255,0.6)" fontFamily={INK} fontSize="10" letterSpacing="1" textAnchor="middle">{m.label.toUpperCase()}</text>
          <text x={m.x + 75} y={boxY + 80} fill="#fff" fontFamily={INK} fontSize="12" fontWeight="700" textAnchor="middle">STEM box</text>
          <text x={m.x + 75} y={boxY + 98} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="9.5" textAnchor="middle">curated · age-fit</text>
          {i < months.length - 1 && (
            <DrawnPath d={`M ${m.x + 150} ${boxY + 60} H ${m.x + 210}`} stroke="#6EF76E" strokeOpacity={0.6} strokeWidth={1.4} duration={0.6} delay={0.5 + i * 0.1} />
          )}
        </motion.g>
      ))}

      {/* recurring loop arrow */}
      <DrawnPath d={`M 540 ${boxY + 130} C 540 320, 120 320, 120 ${boxY + 130}`} stroke="#6EF76E" strokeOpacity={0.45} strokeWidth={1.3} strokeDasharray="5 6" duration={1.2} delay={0.9} />
      <text x={330} y={332} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="11" letterSpacing="1" textAnchor="middle">RECURRING · BILLED AUTOMATICALLY · PAUSE / SKIP / CANCEL</text>

      {/* account controls */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.5 }} viewport={{ once: true, amount: 0.2 }}>
        {["Pause", "Skip", "Gift 3–6 mo"].map((c, i) => (
          <g key={c}>
            <rect x={60 + i * 160} y={360} width={140} height={40} rx={3} fill="rgba(230,231,239,0.04)" stroke={i === 2 ? "#6EF76E" : "rgba(230,231,239,0.18)"} strokeOpacity={i === 2 ? 0.6 : 1} />
            <text x={130 + i * 160} y={385} fill={i === 2 ? "#6EF76E" : "#fff"} fontFamily={INK} fontSize="12" fontWeight={i === 2 ? 700 : 600} textAnchor="middle">{c}</text>
          </g>
        ))}
      </motion.g>

      {/* gift tag on month 3 */}
      <motion.g initial={{ opacity: 0, rotate: -6 }} whileInView={{ opacity: 1, rotate: -6 }} transition={{ delay: 0.7, duration: 0.4 }} viewport={{ once: true, amount: 0.2 }}>
        <rect x={560} y={60} width={96} height={40} rx={4} fill="rgba(110,247,110,0.14)" stroke="#6EF76E" strokeOpacity={0.6} />
        <circle cx={568} cy={70} r={3} fill="none" stroke="#6EF76E" />
        <text x={612} y={85} fill="#6EF76E" fontFamily={INK} fontSize="11" fontWeight="700" textAnchor="middle">GIFT BOX</text>
      </motion.g>
    </svg>
  );
}

// ============================================================
// Module 4 – Shipping rules for difficult products
// Parcel with flags + blocked-plane / ground-only logic
// ============================================================
function SvgShipping() {
  const W = 700;
  const H = 440;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Product flags drive checkout shipping rules">
      {/* parcel with flags */}
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={40} y={120} width={210} height={170} rx={4} fill="rgba(63,74,175,0.10)" stroke="rgba(63,74,175,0.45)" />
        <path d="M40 160 H250 M145 120 V160" stroke="rgba(255,255,255,0.18)" />
        <text x={145} y={146} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700" textAnchor="middle">Product flags</text>
        {[
          ["Battery", "lithium"],
          ["Chemical", "postal limit"],
          ["Magnet", "strong"],
        ].map(([k, v], i) => (
          <g key={k}>
            <rect x={60} y={176 + i * 34} width={170} height={26} rx={2} fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.18)" />
            <circle cx={76} cy={189 + i * 34} r={4} fill="#FF5A31" fillOpacity={0.85} />
            <text x={92} y={193 + i * 34} fill="#fff" fontFamily={INK} fontSize="11" fontWeight="700">{k}</text>
            <text x={222} y={193 + i * 34} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="10" textAnchor="end">{v}</text>
          </g>
        ))}
        <text x={145} y={H - 60} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="10" letterSpacing="1" textAnchor="middle">SET IN ADMIN · OR FROM FEED</text>
      </motion.g>

      <DrawnPath d="M 250 205 H 330" stroke="#6EF76E" strokeOpacity={0.7} strokeWidth={1.5} duration={0.8} delay={0.6} />

      {/* checkout decision */}
      <motion.g initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={330} y={110} width={330} height={195} rx={4} fill="rgba(110,247,110,0.06)" stroke="#6EF76E" strokeOpacity={0.4} />
        <text x={350} y={140} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700">Checkout enforces the rules</text>

        {/* air blocked */}
        <g>
          <rect x={350} y={158} width={290} height={40} rx={3} fill="rgba(255,90,49,0.08)" stroke="rgba(255,90,49,0.4)" />
          {/* plane glyph */}
          <path d="M366 178 l16 -6 -4 6 4 6 -16 -6z" fill="rgba(255,90,49,0.8)" />
          <line x1={360} y1={172} x2={388} y2={184} stroke="#FF5A31" strokeWidth={1.6} />
          <text x={400} y={182} fill="#fff" fontFamily={INK} fontSize="11" fontWeight="600">Air freight – removed (lithium battery)</text>
        </g>

        {/* ground allowed */}
        <g>
          <rect x={350} y={206} width={290} height={40} rx={3} fill="rgba(110,247,110,0.10)" stroke="rgba(110,247,110,0.5)" />
          <circle cx={372} cy={226} r={9} fill="none" stroke="#6EF76E" />
          <path d="M368 226 l3 3 6 -7" stroke="#6EF76E" strokeWidth={1.6} fill="none" />
          <text x={392} y={230} fill="#fff" fontFamily={INK} fontSize="11" fontWeight="600">Ground – available</text>
        </g>

        {/* abroad blocked */}
        <g>
          <rect x={350} y={254} width={290} height={36} rx={3} fill="rgba(255,255,255,0.03)" stroke="rgba(230,231,239,0.16)" />
          <text x={362} y={276} fill="rgba(255,255,255,0.7)" fontFamily={INK} fontSize="11">Ships abroad?</text>
          <text x={628} y={276} fill="#FF5A31" fontFamily={INK} fontSize="11" fontWeight="700" textAnchor="end">blocked for this item</text>
        </g>
      </motion.g>

      <text x={W / 2} y={H - 18} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="10" letterSpacing="1.5" textAnchor="middle">CAUGHT BEFORE THE ORDER EXISTS · NOT AT THE COURIER DESK</text>
    </svg>
  );
}

// ============================================================
// Module 5 – Batteries & extras reminder
// Cart line + "needs 4 AA batteries – add?" prompt
// ============================================================
function SvgCompleteness() {
  const W = 700;
  const H = 440;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Cart batteries and extras reminder prompts for needed items">
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        {/* cart frame */}
        <rect x={60} y={60} width={580} height={320} rx={6} fill="rgba(63,74,175,0.06)" stroke="rgba(63,74,175,0.35)" />
        <text x={84} y={96} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700">Cart</text>
        <line x1={84} x2={616} y1={110} y2={110} stroke="rgba(230,231,239,0.12)" />

        {/* line item */}
        <text x={84} y={146} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="600">Robotics starter kit</text>
        <text x={616} y={146} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700" textAnchor="end">$ 59.00</text>
        <text x={84} y={166} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="10">needed to use it: 4× AA battery</text>
      </motion.g>

      {/* prompt */}
      <motion.g initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.45 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={84} y={196} width={532} height={70} rx={4} fill="rgba(110,247,110,0.10)" stroke="#6EF76E" strokeOpacity={0.55} />
        {/* battery glyph at ~80% */}
        <rect x={104} y={222} width={34} height={18} rx={2} fill="none" stroke="#6EF76E" />
        <rect x={138} y={227} width={3} height={8} rx={1} fill="#6EF76E" />
        <rect x={107} y={225} width={24} height={12} rx={1} fill="#6EF76E" fillOpacity={0.85} />
        <text x={158} y={228} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700">This kit needs 4 AA batteries – add them?</text>
        <text x={158} y={248} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="11">helpful, honest add-on – not a pushy upsell</text>
        <rect x={508} y={216} width={92} height={32} rx={3} fill="#6EF76E" fillOpacity={0.85} />
        <text x={554} y={237} fill="#10132c" fontFamily={INK} fontSize="12" fontWeight="700" textAnchor="middle">Add · $4.90</text>
      </motion.g>

      {/* checklist of product types */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} viewport={{ once: true, amount: 0.2 }}>
        {[
          ["Electronics", "batteries"],
          ["Chemistry set", "goggles"],
          ["Microscope", "slides"],
        ].map(([k, v], i) => (
          <g key={k}>
            <rect x={84 + i * 178} y={296} width={166} height={48} rx={3} fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.16)" />
            <circle cx={106 + i * 178} cy={320} r={8} fill="none" stroke="#6EF76E" />
            <path d={`M ${102 + i * 178} 320 l3 3 6 -7`} stroke="#6EF76E" strokeWidth={1.6} fill="none" />
            <text x={124 + i * 178} y={316} fill="#fff" fontFamily={INK} fontSize="11" fontWeight="700">{k}</text>
            <text x={124 + i * 178} y={332} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="10">needs {v}</text>
          </g>
        ))}
      </motion.g>

      <text x={W / 2} y={H - 8} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="10" letterSpacing="1.5" textAnchor="middle">ADMIN-MANAGED DATA · NO DEVELOPERS · NO AI · NO THIRD-PARTY TOOLS</text>
    </svg>
  );
}

// ============================================================
// OutcomeBlockRow – layout shell (adds the age-chip motif)
// ============================================================
function OutcomeBlockRow({ n, kicker, icon, title, lede, results, diagram, theme, reverse, diagramDark }: OutcomeBlock) {
  const dark = theme === "dark";
  const diagramOnDark = diagramDark ?? dark;
  const textColor = dark ? "text-white" : "text-[var(--sw-black)]";
  const mutedColor = dark ? "text-white/75" : "text-[var(--sw-black)]/70";
  const bulletColor = dark ? "text-white/85" : "text-[var(--sw-black)]/80";
  const labelColor = dark ? "text-white/55" : "text-[var(--sw-black)]/55";
  const bg = dark ? "bg-[var(--sw-black)]" : "bg-lp-bright";
  const accentColor = dark ? "var(--sw-mint)" : "var(--sw-blue)";

  let diagramWrapClass = "";
  let diagramWrapStyle: React.CSSProperties | undefined;
  if (diagramOnDark && !dark) {
    diagramWrapClass = "rounded-[4px] p-3 md:p-4 text-white";
    diagramWrapStyle = {
      background: "linear-gradient(180deg, rgba(16,19,44,1) 0%, rgba(23,26,56,1) 100%)",
      border: "1px solid rgba(230,231,239,0.08)",
    };
  } else if (dark) {
    diagramWrapClass = "p-1.5 md:p-2 text-white";
  } else {
    diagramWrapClass = "bracket-frame p-2 md:p-3 text-[var(--sw-black)]";
  }

  return (
    <section id={`outcome-${n}`} className={`${bg} relative overflow-hidden scroll-mt-24`}>
      {!dark && <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />}

      <div className="wrap relative py-24 md:py-32">
        <div className="grid gap-12 lg:gap-16 md:grid-cols-2 items-center">
          <Reveal className={`min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mb-4">
              <SectionIcon name={icon} tone={dark ? "dark" : "light"} />
              <span className={`label-code ${labelColor}`}>MODULE · {n}</span>
            </div>
            <div className={`label-code ${dark ? "text-[var(--sw-mint)]" : "text-[var(--sw-blue)]"} mb-4`}>
              {kicker}
            </div>
            <h3 className={`font-head ${textColor} text-[28px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] mb-5 max-w-[24ch]`}>
              {title}
            </h3>
            <p className={`${mutedColor} text-[15px] md:text-[17px] leading-relaxed max-w-[50ch] mb-7`}>
              {lede}
            </p>
            <ul className="space-y-3 max-w-[48ch]">
              {results.map((r, i) => (
                <li key={i} className={`flex gap-3 min-w-0 ${bulletColor} text-[14px] md:text-[15px] leading-relaxed`}>
                  <Check className="h-4 w-4 shrink-0 mt-1" style={{ color: accentColor }} />
                  <span className="min-w-0 break-words">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12} className={`min-w-0 ${reverse ? "md:order-1" : "md:order-2"}`}>
            <div className={`relative ${diagramWrapClass}`} style={diagramWrapStyle}>
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

// ============================================================
// Module tiles – periodic-table-style, open-as-card in place
// (dark section styling). No links, no scroll.
// ============================================================
const TILES: { n: string; sym: string; name: string; line: string; desc: string }[] = [
  {
    n: "1",
    sym: "Ca",
    name: "Catalog & supplier feed engine",
    line: "Supplier feeds in, clean catalog out – no retyping.",
    desc: "Connect supplier price lists and feeds so prices and stock update automatically – whether the supplier sends an API feed or an Excel file – and get fast tools to make product pages your own, instead of copies of every other shop’s.",
  },
  {
    n: "2",
    sym: "Mk",
    name: "Marketplaces & shopping feeds",
    line: "Sell on Amazon and Google Shopping from one catalog.",
    desc: "List on Amazon, eBay, local marketplaces and Google Shopping from the catalog you already have. Stock and prices stay synced, and every order lands in one screen – no double bookkeeping.",
  },
  {
    n: "3",
    sym: "Su",
    name: "Subscription boxes & gift subscriptions",
    line: "Monthly boxes and gift subscriptions that bill themselves.",
    desc: "Curate a monthly box from the catalog you already carry. Subscriptions per child and age group, 3- and 6-month gift subscriptions, and self-serve pause, skip and cancel – the billing runs itself.",
  },
  {
    n: "4",
    sym: "Sh",
    name: "Shipping rules for difficult products",
    line: "Battery, chemical and magnet rules enforced at checkout.",
    desc: "Flag products as battery, chemical or magnet and the checkout enforces the rules – ground-only, no air freight, not shipped abroad, declarations where required. The problem is caught before the order exists.",
  },
  {
    n: "5",
    sym: "Ba",
    name: "Batteries & extras reminder",
    line: "The cart reminds buyers what the kit needs to work.",
    desc: "Each product carries a short “needed to use it” list. The cart checks it quietly – “this kit needs 4 AA batteries – add them?” Higher order value, and fewer ruined gift mornings.",
  },
];

function ModuleTiles() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 items-start">
      {TILES.map((m) => (
        <div
          key={m.n}
          className="relative h-full rounded-[4px] p-5 md:p-6"
          style={{
            background: "rgba(255,255,255,0.025)",
            border: "1px solid rgba(110,247,110,0.22)",
          }}
        >
          <span className="absolute top-3 right-3.5 label-code text-[10px] text-white/40 tabular-nums">
            {m.n}
          </span>
          <span className="block font-head text-white text-[30px] md:text-[38px] leading-none tracking-[-0.01em]">
            {m.sym}
          </span>
          <span className="block font-head text-white text-[13px] md:text-[14px] leading-snug mt-3">
            {m.name}
          </span>
          <span className="block text-[11px] md:text-[12px] text-white/55 leading-snug mt-1.5">
            {m.line}
          </span>
        </div>
      ))}
    </div>
  );
}

// ============================================================
// Outcomes – main export
// ============================================================
export function Outcomes() {
  const items: OutcomeBlock[] = [
    {
      n: "1",
      kicker: "Catalog & supplier feed engine",
      age: "AGES: ALL",
      icon: "flowchart",
      title: (
        <>
          New products live in hours. Prices and stock{" "}
          <span className="text-[var(--sw-mint)]">always current</span>.
        </>
      ),
      lede:
        "Retailers in this industry run catalogs of 5,000–10,000 products from dozens of suppliers, each sending data in their own format. Keeping all of it correct, and getting new lines online fast, is the daily work this module takes over.",
      results: [
        "Supplier feeds connected: prices and stock update automatically, whatever format the supplier sends",
        "New products from a supplier's list go live in hours, not weeks",
        "Out of stock at the supplier shows in your store before a customer orders it",
        "Your team adjusts feed mappings in the interface, no developer needed",
        "When a supplier raises prices, your prices follow rules you set, so margin doesn't quietly disappear",
      ],
      diagram: <SvgSupplierFeed />,
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "2",
      kicker: "Marketplaces & shopping feeds",
      age: "AGES: ALL",
      icon: "circuit-board",
      title: (
        <>
          Sell everywhere your buyers search –{" "}
          <span className="text-[var(--sw-blue)]">from one catalog</span>
        </>
      ),
      lede:
        "Many parents start their search on Amazon or Google Shopping, not on your website. This module sells your existing catalog on those channels, without giving your team a second job.",
      results: [
        "Listings created from your catalog data for Amazon, eBay, Google Shopping, and your markets' local marketplaces",
        "Stock synced across all channels, so peak weeks can't oversell you",
        "Prices follow rules per channel, with marketplace fees counted in",
        "All orders land in one screen, whichever channel they came from",
        "Profit per channel visible after fees, so you see which marketplace actually earns",
      ],
      diagram: <SvgChannels />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "3",
      kicker: "Subscription boxes & gift subscriptions",
      age: "AGES 3–14",
      icon: "robot-head",
      title: (
        <>
          Turn one-time buyers into{" "}
          <span className="text-[var(--sw-mint)]">monthly subscribers</span>
        </>
      ),
      lede:
        "KiwiCo and CrunchLabs built businesses with over 100,000 subscribers on STEM boxes for kids. Yet only 7 of 100 STEM stores sell any subscription. You don't need to manufacture anything: your team picks a monthly box from the catalog you already carry, and this module sells it, bills it, and manages it.",
      results: [
        "Subscription per child and age group, so the box grows with the kid",
        "Gift subscriptions for 3 or 6 months, one of the strongest Christmas products a STEM store can have",
        "Customers pause, skip, or cancel in their account, not through support",
        "Billing runs itself: recurring charges, failed-payment retries, prepaid plans",
        "Your team's only job is picking next month's box; no ongoing development",
      ],
      diagram: <SvgSubscription />,
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "4",
      kicker: "Shipping rules for “difficult” products",
      age: "HANDLE WITH CARE",
      icon: "flask-gear",
      title: (
        <>
          The checkout knows{" "}
          <span className="text-[var(--sw-blue)]">what can ship where</span>
        </>
      ),
      lede:
        "STEM stores ship things normal toy stores don't: lithium batteries, chemicals with postal limits, strong magnets. Some of it can't fly or cross borders, and today that surfaces at the courier desk, after the customer has paid. This module teaches the checkout the rules, so the problem is caught before the order exists.",
      results: [
        "Every product carries flags (battery, chemical, magnet), set in admin or arriving with the supplier feed",
        "The checkout applies the rules: ground only, not abroad, declaration needed on the label",
        "If one item in the cart can't fly, air shipping simply isn't offered",
        "Label notes and declarations print automatically at the packing desk",
        "When a carrier changes its policy, your team updates a rule in admin, not code",
      ],
      diagram: <SvgShipping />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "5",
      kicker: "Batteries & extras reminder",
      age: "BATTERIES? CHECK",
      icon: "math-operations",
      title: (
        <>
          Batteries, goggles, chargers: the cart offers{" "}
          <span className="text-[var(--sw-mint)]">what the box doesn&apos;t include</span>
        </>
      ),
      lede:
        "Many products don't include everything they need: batteries, goggles, SD cards, chargers. The gift buyer has no way to know that, and finds out when the box is already open. The store knows, and this module makes the cart say so and offer the missing item right away.",
      results: [
        "Each product carries a short “needed to use it” list, filled once by your team from supplier specs",
        "The cart checks the list and offers what's not included, one tap to add",
        "Works for every product type: electronics, chemistry sets, microscopes, anything with extras",
        "Higher order value from helpful add-ons, and fewer angry January reviews",
        "Data lives in admin: no developers after launch, no AI, no third-party tools",
      ],
      diagram: <SvgCompleteness />,
      theme: "dark",
      diagramDark: true,
    },
  ];

  return (
    <>
      <section id="outcomes" className="bg-[var(--sw-black)] pt-28 md:pt-36 pb-14 md:pb-20 relative overflow-hidden">
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
              <h2 className="font-head text-white text-[36px] md:text-[58px] lg:text-[72px] leading-[1.0] tracking-[-0.015em] max-w-[18ch]">
                Five modules.{" "}
                <span className="text-[var(--sw-mint)]">Each one saves real work or brings in real revenue.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[46ch]">
                Already built and proven. We shape them around your catalog,
                your suppliers, and your buyers.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-5 max-w-[420px]">
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">5</div>
                  <div className="label-code text-white/50 mt-2">Modules</div>
                </div>
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">12</div>
                  <div className="label-code text-white/50 mt-2">Weeks to live</div>
                </div>
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">1×</div>
                  <div className="label-code text-white/50 mt-2">One-time build</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 md:mt-20">
            <ModuleTiles />
          </div>
        </div>
      </section>

      {items.map((it) => (
        <OutcomeBlockRow key={it.n} {...it} />
      ))}

      <section className="relative bg-lp-bright overflow-hidden">
        <div className="wrap py-16 md:py-20 border-t border-[var(--sw-black)]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.25] max-w-[46ch]">
            Like the modules? You can have them live in 12 weeks, not months.
          </p>
          <a href="#cta" className={btnLight}>
            See if it fits your store
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
