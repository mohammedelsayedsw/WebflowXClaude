"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { btnLight } from "@/components/primitives/buttonStyles";
import { SignalBars, SimTile } from "./motifs";

type OutcomeBlock = {
  n: string;
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
// Module 1 - Offer & catalog manager
// Offer builder UI -> Publish (no IT ticket) -> live preview
// ============================================================
function SvgOfferManager() {
  const W = 700;
  const H = 440;
  const bx = 26;
  const by = 64;
  const bw = 300;
  const bh = 312;
  const px = 452;
  const pw = 222;
  const fields = [
    ["Offer name", "Fiber 1 Gbit + Mobile"],
    ["Bundle", "3 parts"],
    ["Monthly price", "auto"],
  ];
  const lifecycle = ["Draft", "Live", "Archived"];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Offer builder interface publishing a new offer without an IT ticket">
      <defs>
        <linearGradient id="offerBuilder" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3F4AAF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3F4AAF" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* builder */}
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={bx} y={by} width={bw} height={bh} rx={4} fill="url(#offerBuilder)" stroke="rgba(63,74,175,0.45)" />
        <rect x={bx} y={by} width={bw} height={4} fill="#6EF76E" />
        <text x={bx + 20} y={by + 34} fill="#fff" fontFamily={INK} fontSize="14" fontWeight="700">Offer builder</text>
        <text x={bx + 20} y={by + 52} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="9.5" letterSpacing="0.8">SELF-SERVE · NO IT TICKET</text>
        <line x1={bx + 20} x2={bx + bw - 20} y1={by + 66} y2={by + 66} stroke="rgba(230,231,239,0.14)" />
        {fields.map(([k, v], i) => (
          <g key={k}>
            <rect x={bx + 20} y={by + 84 + i * 46} width={bw - 40} height={34} rx={3} fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.16)" />
            <text x={bx + 32} y={by + 105 + i * 46} fill="rgba(255,255,255,0.6)" fontFamily={INK} fontSize="10.5">{k}</text>
            <text x={bx + bw - 32} y={by + 105 + i * 46} fill="#fff" fontFamily={INK} fontSize="11.5" fontWeight="600" textAnchor="end">{v}</text>
          </g>
        ))}
        {/* lifecycle pills */}
        <text x={bx + 20} y={by + 240} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="9.5" letterSpacing="0.6">LIFECYCLE</text>
        {lifecycle.map((l, i) => {
          const active = i === 1;
          return (
            <g key={l}>
              <rect x={bx + 20 + i * 90} y={by + 252} width={82} height={30} rx={15}
                fill={active ? "rgba(110,247,110,0.16)" : "rgba(230,231,239,0.04)"}
                stroke={active ? "rgba(110,247,110,0.55)" : "rgba(230,231,239,0.2)"} />
              <text x={bx + 20 + i * 90 + 41} y={by + 271} fill={active ? "#6EF76E" : "rgba(255,255,255,0.7)"} fontFamily={INK} fontSize="11" fontWeight={active ? 700 : 600} textAnchor="middle">{l}</text>
            </g>
          );
        })}
      </motion.g>

      {/* publish arrow */}
      <DrawnPath d={`M ${bx + bw} ${by + bh / 2} H ${px}`} stroke="#6EF76E" strokeOpacity={0.75} strokeWidth={1.5} duration={0.8} delay={0.6} />
      <path d={`M ${px - 11} ${by + bh / 2 - 5} L ${px} ${by + bh / 2} L ${px - 11} ${by + bh / 2 + 5}`} fill="none" stroke="#6EF76E" strokeOpacity={0.9} strokeWidth={1.5} />
      <text x={(bx + bw + px) / 2} y={by + bh / 2 - 12} fill="#6EF76E" fontFamily={INK} fontSize="10.5" fontWeight="600" textAnchor="middle">Publish</text>
      <text x={(bx + bw + px) / 2} y={by + bh / 2 + 20} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="9" textAnchor="middle">live preview</text>

      {/* preview */}
      <motion.g initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={px} y={by} width={pw} height={bh} rx={4} fill="rgba(110,247,110,0.06)" stroke="#6EF76E" strokeOpacity={0.45} />
        <rect x={px} y={by} width={pw} height={4} fill="#6EF76E" />
        <text x={px + 18} y={by + 34} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700">Live preview</text>
        <text x={px + 18} y={by + 52} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="9.5" letterSpacing="0.8">WHAT LAUNCHES = WHAT YOU BUILT</text>
        <line x1={px + 18} x2={px + pw - 18} y1={by + 66} y2={by + 66} stroke="rgba(230,231,239,0.12)" />
        <text x={px + 18} y={by + 96} fill="#fff" fontFamily={INK} fontSize="12.5" fontWeight="700">Fiber 1 Gbit + Mobile</text>
        <text x={px + 18} y={by + 116} fill="rgba(255,255,255,0.6)" fontFamily={INK} fontSize="10.5">fiber · mobile · TV add-on</text>
        <text x={px + 18} y={by + 158} fill="#6EF76E" fontFamily={INK} fontSize="26" fontWeight="700" letterSpacing="-0.5">€49.99</text>
        <text x={px + 128} y={by + 158} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="11">/ mo</text>
        <rect x={px + 18} y={by + 190} width={pw - 36} height={34} rx={3} fill="rgba(110,247,110,0.16)" stroke="rgba(110,247,110,0.55)" />
        <text x={px + pw / 2} y={by + 212} fill="#6EF76E" fontFamily={INK} fontSize="11.5" fontWeight="700" textAnchor="middle">Configure</text>
        <rect x={px + 18} y={by + 250} width={pw - 36} height={32} rx={2} fill="rgba(255,255,255,0.03)" stroke="rgba(230,231,239,0.14)" />
        <text x={px + pw / 2} y={by + 270} fill="rgba(255,255,255,0.6)" fontFamily={INK} fontSize="10" letterSpacing="0.5" textAnchor="middle">PROTOTYPE READY IN 72 H</text>
      </motion.g>

      <text x={W / 2} y={H - 10} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="10" letterSpacing="1.5" textAnchor="middle">BUILT BY YOUR TEAM · PREVIEWED · PUBLISHED</text>
    </svg>
  );
}

// ============================================================
// Module 2 - Pricing & bundles
// Bundle composition (rules) + price model + eligibility
// ============================================================
function SvgPricingBundles() {
  const W = 700;
  const H = 440;
  const bx = 26;
  const bw = 320;
  const by = 54;
  const parts = [
    ["Fiber 1 Gbit", "mandatory", "#6EF76E"],
    ["Mobile 20 GB", "mandatory", "#6EF76E"],
    ["TV package", "optional", "#3F4AAF"],
    ["Second line", "incompatible", "#FF5A31"],
  ];
  const px = 388;
  const pw = 286;
  const prices = [
    ["One-time", "activation"],
    ["Recurring", "monthly"],
    ["Usage-based", "per GB over"],
    ["Tiered", "volume steps"],
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="A bundle with composition rules, a mixed price model, and eligibility by address">
      {/* bundle composition */}
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={bx} y={by} width={bw} height={252} rx={4} fill="rgba(63,74,175,0.10)" stroke="rgba(63,74,175,0.45)" />
        <rect x={bx} y={by} width={bw} height={4} fill="#6EF76E" />
        <text x={bx + 20} y={by + 32} fill="#fff" fontFamily={INK} fontSize="14" fontWeight="700">Bundle</text>
        <text x={bx + 20} y={by + 50} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="9.5" letterSpacing="0.8">PARTS + RULES IN ONE OFFER</text>
        {parts.map(([name, rule, color], i) => (
          <g key={name}>
            <rect x={bx + 20} y={by + 66 + i * 42} width={bw - 40} height={34} rx={3} fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.16)" />
            <circle cx={bx + 38} cy={by + 83 + i * 42} r={4} fill={color as string} fillOpacity={0.9} />
            <text x={bx + 54} y={by + 87 + i * 42} fill="#fff" fontFamily={INK} fontSize="11.5" fontWeight="600">{name}</text>
            <text x={bx + bw - 32} y={by + 87 + i * 42} fill={color as string} fontFamily={INK} fontSize="10" fontWeight="700" textAnchor="end" letterSpacing="0.4">{(rule as string).toUpperCase()}</text>
          </g>
        ))}
      </motion.g>

      {/* price model */}
      <motion.g initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={px} y={by} width={pw} height={184} rx={4} fill="rgba(110,247,110,0.06)" stroke="#6EF76E" strokeOpacity={0.45} />
        <rect x={px} y={by} width={pw} height={4} fill="#6EF76E" />
        <text x={px + 18} y={by + 32} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700">Price model</text>
        <text x={px + 18} y={by + 50} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="9.5" letterSpacing="0.8">FOUR TYPES · ONE OFFER</text>
        {prices.map(([k, v], i) => {
          const col = i % 2;
          const row = Math.floor(i / 2);
          return (
            <g key={k}>
              <rect x={px + 18 + col * 132} y={by + 64 + row * 56} width={120} height={46} rx={3} fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.16)" />
              <text x={px + 30 + col * 132} y={by + 86 + row * 56} fill="#fff" fontFamily={INK} fontSize="11.5" fontWeight="700">{k}</text>
              <text x={px + 30 + col * 132} y={by + 102 + row * 56} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="9.5">{v}</text>
            </g>
          );
        })}
      </motion.g>

      {/* eligibility strip */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.5 }} viewport={{ once: true, amount: 0.2 }}>
        <rect x={px} y={by + 200} width={pw} height={52} rx={4} fill="rgba(63,74,175,0.10)" stroke="rgba(63,74,175,0.4)" />
        <circle cx={px + 34} cy={by + 226} r={10} fill="none" stroke="#6EF76E" />
        <path d={`M ${px + 29} ${by + 226} l4 4 7 -8`} stroke="#6EF76E" strokeWidth={1.8} fill="none" />
        <text x={px + 54} y={by + 222} fill="#fff" fontFamily={INK} fontSize="11.5" fontWeight="700">Eligible at this address</text>
        <text x={px + 54} y={by + 238} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="9.5">right offer · right customer · right place</text>
      </motion.g>

      {/* contract note */}
      <motion.g initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.5 }} viewport={{ once: true, amount: 0.2 }}>
        <rect x={bx} y={by + 268} width={bw} height={44} rx={3} fill="rgba(255,255,255,0.03)" stroke="rgba(230,231,239,0.14)" />
        <text x={bx + 20} y={by + 288} fill="#fff" fontFamily={INK} fontSize="11" fontWeight="600">Contract terms attached to the offer</text>
        <text x={bx + 20} y={by + 304} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="9.5">not scattered across systems</text>
      </motion.g>

      <text x={W / 2} y={H - 6} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="10" letterSpacing="1.5" textAnchor="middle">CHANGES GO LIVE IN MINUTES</text>
    </svg>
  );
}

// ============================================================
// Module 3 - One catalog, every channel
// One API -> web shop, app, call center, store, same price
// ============================================================
function SvgOneChannel() {
  const W = 700;
  const H = 440;
  const apiX = 30;
  const apiY = 150;
  const apiW = 180;
  const apiH = 150;
  const channels = [
    { y: 26, name: "Web shop" },
    { y: 120, name: "App" },
    { y: 214, name: "Call center" },
    { y: 308, name: "Store" },
  ];
  const chX = 380;
  const chW = 290;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="One API serving every channel the same catalog and the same price">
      <defs>
        <linearGradient id="apiGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3F4AAF" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#3F4AAF" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={apiX} y={apiY} width={apiW} height={apiH} rx={4} fill="url(#apiGrad)" stroke="rgba(63,74,175,0.45)" />
        <rect x={apiX} y={apiY} width={apiW} height={4} fill="#6EF76E" />
        <text x={apiX + apiW / 2} y={apiY + 38} fill="#fff" fontFamily={INK} fontSize="14" fontWeight="700" textAnchor="middle">One catalog</text>
        <text x={apiX + apiW / 2} y={apiY + 58} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="10" letterSpacing="0.8" textAnchor="middle">ONE API</text>
        <text x={apiX + apiW / 2} y={apiY + 98} fill="#6EF76E" fontFamily={INK} fontSize="22" fontWeight="700" textAnchor="middle" letterSpacing="-0.5">€49.99</text>
        <text x={apiX + apiW / 2} y={apiY + 118} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="10" textAnchor="middle">one source of truth</text>
      </motion.g>

      {channels.map((c, i) => {
        const midY = c.y + 33;
        return (
          <motion.g key={c.name} initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.09, duration: 0.4 }} viewport={{ once: true, amount: 0.2 }}>
            <DrawnPath
              d={`M ${apiX + apiW} ${apiY + apiH / 2} C ${apiX + apiW + 50} ${apiY + apiH / 2}, ${chX - 50} ${midY}, ${chX} ${midY}`}
              stroke="#3F4AAF" strokeOpacity={0.5} strokeWidth={1.2} strokeDasharray="4 5" duration={0.7} delay={0.4 + i * 0.06}
            />
            <rect x={chX} y={c.y} width={chW} height={66} rx={3} fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.18)" />
            <circle cx={chX + 26} cy={midY} r={7} fill="none" stroke="#6EF76E" strokeOpacity={0.7} />
            <circle cx={chX + 26} cy={midY} r={2.6} fill="#6EF76E" />
            <text x={chX + 48} y={midY - 4} fill="#fff" fontFamily={INK} fontSize="12.5" fontWeight="700">{c.name}</text>
            <text x={chX + 48} y={midY + 13} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="9.5">discovery · cart · order capture</text>
            <text x={chX + chW - 18} y={midY + 4} fill="#6EF76E" fontFamily={INK} fontSize="13" fontWeight="700" textAnchor="end">€49.99</text>
          </motion.g>
        );
      })}

      <text x={W / 2} y={H - 8} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="10" letterSpacing="1.5" textAnchor="middle">SAME CATALOG · SAME PRICE · SAME ANSWER EVERYWHERE</text>
    </svg>
  );
}

// ============================================================
// Module 4 - Order orchestration
// One order -> splitter (TMF622) -> BSS, OSS, logistics, CRM
// ============================================================
function SvgOrchestration() {
  const W = 700;
  const H = 440;
  const orderX = 26;
  const orderY = 150;
  const orderW = 150;
  const orderH = 140;
  const hubX = 250;
  const hubY = 150;
  const hubW = 150;
  const hubH = 140;
  const targets = [
    { y: 30, name: "Billing · BSS", sub: "charges set up", ok: true },
    { y: 118, name: "Provisioning · OSS", sub: "line activated", ok: true },
    { y: 206, name: "Logistics", sub: "router shipped", ok: true },
    { y: 294, name: "CRM", sub: "needs review", ok: false },
  ];
  const tX = 470;
  const tW = 204;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="One order split and routed to billing, provisioning, logistics, and CRM, with a failed step surfaced">
      {/* one order */}
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={orderX} y={orderY} width={orderW} height={orderH} rx={4} fill="rgba(63,74,175,0.10)" stroke="rgba(63,74,175,0.45)" />
        <rect x={orderX} y={orderY} width={orderW} height={4} fill="#6EF76E" />
        <text x={orderX + orderW / 2} y={orderY + 40} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700" textAnchor="middle">One order</text>
        <text x={orderX + orderW / 2} y={orderY + 58} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="10" textAnchor="middle">bundle · 3 parts</text>
        {[0, 1, 2].map((r) => (
          <rect key={r} x={orderX + 22} y={orderY + 78 + r * 16} width={orderW - 44} height={9} rx={2} fill="rgba(255,255,255,0.12)" />
        ))}
      </motion.g>

      <DrawnPath d={`M ${orderX + orderW} ${orderY + orderH / 2} H ${hubX}`} stroke="#6EF76E" strokeOpacity={0.7} strokeWidth={1.5} duration={0.7} delay={0.5} />

      {/* orchestration hub */}
      <motion.g initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={hubX} y={hubY} width={hubW} height={hubH} rx={4} fill="rgba(110,247,110,0.07)" stroke="#6EF76E" strokeOpacity={0.5} />
        <text x={hubX + hubW / 2} y={hubY + 36} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700" textAnchor="middle">Orchestration</text>
        <text x={hubX + hubW / 2} y={hubY + 54} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="9.5" textAnchor="middle">splits the order</text>
        <rect x={hubX + 28} y={hubY + 74} width={hubW - 56} height={30} rx={15} fill="rgba(110,247,110,0.14)" stroke="rgba(110,247,110,0.5)" />
        <text x={hubX + hubW / 2} y={hubY + 93} fill="#6EF76E" fontFamily={INK} fontSize="10.5" fontWeight="700" textAnchor="middle">TMF622</text>
      </motion.g>

      {targets.map((t, i) => {
        const midY = t.y + 30;
        const stroke = t.ok ? "#6EF76E" : "#FF5A31";
        return (
          <motion.g key={t.name} initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 + i * 0.09, duration: 0.4 }} viewport={{ once: true, amount: 0.2 }}>
            <DrawnPath
              d={`M ${hubX + hubW} ${hubY + hubH / 2} C ${hubX + hubW + 45} ${hubY + hubH / 2}, ${tX - 45} ${midY}, ${tX} ${midY}`}
              stroke={stroke} strokeOpacity={0.5} strokeWidth={1.2} strokeDasharray="4 5" duration={0.7} delay={0.5 + i * 0.06}
            />
            <rect x={tX} y={t.y} width={tW} height={60} rx={3}
              fill={t.ok ? "rgba(230,231,239,0.04)" : "rgba(255,90,49,0.08)"}
              stroke={t.ok ? "rgba(230,231,239,0.18)" : "rgba(255,90,49,0.45)"} />
            {t.ok ? (
              <>
                <circle cx={tX + 24} cy={midY} r={8} fill="none" stroke="#6EF76E" />
                <path d={`M ${tX + 20} ${midY} l3 3 6 -7`} stroke="#6EF76E" strokeWidth={1.6} fill="none" />
              </>
            ) : (
              <>
                <circle cx={tX + 24} cy={midY} r={8} fill="none" stroke="#FF5A31" />
                <path d={`M ${tX + 20} ${midY - 4} v5 M ${tX + 20} ${midY + 4} v0.5`} stroke="#FF5A31" strokeWidth={1.8} />
                <line x1={tX + 20} y1={midY - 4} x2={tX + 20} y2={midY + 1} stroke="#FF5A31" strokeWidth={1.8} />
                <circle cx={tX + 20} cy={midY + 4} r={1} fill="#FF5A31" />
              </>
            )}
            <text x={tX + 44} y={midY - 3} fill="#fff" fontFamily={INK} fontSize="11.5" fontWeight="700">{t.name}</text>
            <text x={tX + 44} y={midY + 13} fill={t.ok ? "rgba(255,255,255,0.5)" : "#FF5A31"} fontFamily={INK} fontSize="9.5" fontWeight={t.ok ? 400 : 700}>{t.sub}</text>
          </motion.g>
        );
      })}

      <text x={W / 2} y={H - 8} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="10" letterSpacing="1.5" textAnchor="middle">SYSTEMS OF RECORD UNTOUCHED · STATUS IN ONE PLACE</text>
    </svg>
  );
}

// ============================================================
// Module 5 - Multi-brand & partners
// One platform -> isolated scoped tenants
// ============================================================
function SvgMultiBrand() {
  const W = 700;
  const H = 440;
  const tenants = [
    { name: "Brand A", sub: "own catalog · own prices", accent: "#6EF76E" },
    { name: "Brand B", sub: "own catalog · own prices", accent: "#3F4AAF" },
    { name: "Partner C", sub: "own scope only", accent: "#6EF76E" },
  ];
  const px = 40;
  const py = 70;
  const pw = W - 80;
  const ph = 300;
  const cardW = (pw - 40 - 32) / 3;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="One platform hosting isolated brand and partner tenants">
      {/* platform frame */}
      <motion.g initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={px} y={py} width={pw} height={ph} rx={5} fill="rgba(63,74,175,0.07)" stroke="rgba(63,74,175,0.4)" />
        <rect x={px} y={py} width={pw} height={4} fill="#6EF76E" />
        <text x={px + 24} y={py + 34} fill="#fff" fontFamily={INK} fontSize="14" fontWeight="700">One platform</text>
        <text x={px + 24} y={py + 52} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="9.5" letterSpacing="0.8">SCOPED TENANTS · FULL DATA ISOLATION</text>
        {/* switch context control */}
        <rect x={px + pw - 168} y={py + 20} width={148} height={30} rx={15} fill="rgba(110,247,110,0.14)" stroke="rgba(110,247,110,0.5)" />
        <text x={px + pw - 94} y={py + 39} fill="#6EF76E" fontFamily={INK} fontSize="10.5" fontWeight="700" textAnchor="middle">Switch context</text>
      </motion.g>

      {tenants.map((t, i) => {
        const x = px + 20 + i * (cardW + 16);
        const y = py + 74;
        return (
          <motion.g key={t.name} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.12, duration: 0.4 }} viewport={{ once: true, amount: 0.2 }}>
            <rect x={x} y={y} width={cardW} height={190} rx={4} fill="rgba(230,231,239,0.03)" stroke="rgba(230,231,239,0.18)" />
            <rect x={x} y={y} width={cardW} height={3} fill={t.accent} />
            <text x={x + 18} y={y + 32} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700">{t.name}</text>
            <text x={x + 18} y={y + 50} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="9.5">{t.sub}</text>
            <line x1={x + 18} x2={x + cardW - 18} y1={y + 64} y2={y + 64} stroke="rgba(230,231,239,0.12)" />
            {["Catalog", "Prices", "Offers"].map((row, r) => (
              <g key={row}>
                <rect x={x + 18} y={y + 78 + r * 32} width={cardW - 36} height={24} rx={2} fill="rgba(255,255,255,0.03)" stroke="rgba(230,231,239,0.12)" />
                <text x={x + 28} y={y + 94 + r * 32} fill="rgba(255,255,255,0.7)" fontFamily={INK} fontSize="10">{row}</text>
                <text x={x + cardW - 28} y={y + 94 + r * 32} fill={t.accent} fontFamily={INK} fontSize="9" fontWeight="700" textAnchor="end" letterSpacing="0.5">ISOLATED</text>
              </g>
            ))}
          </motion.g>
        );
      })}

      <text x={W / 2} y={H - 8} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="10" letterSpacing="1.5" textAnchor="middle">A NEW BRAND LAUNCHES AS CONFIGURATION, NOT A PROJECT</text>
    </svg>
  );
}

// ============================================================
// OutcomeBlockRow - layout shell (signal-bar accent)
// ============================================================
function OutcomeBlockRow({ n, title, lede, results, diagram, theme, reverse, diagramDark }: OutcomeBlock) {
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
    <section id={`module-${n}`} className={`${bg} relative scroll-mt-24 overflow-hidden`}>
      {!dark && <div className="absolute inset-x-0 top-0 h-px bg-[var(--sw-black)]/10" />}

      <div className="wrap relative py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 lg:gap-16">
          <Reveal className={`min-w-0 ${reverse ? "md:order-2" : "md:order-1"}`}>
            <div className="mb-4 flex flex-wrap items-center gap-x-3 gap-y-2">
              <SignalBars tone={dark ? "dark" : "light"} />
              <span className={`label-code ${labelColor}`}>MODULE · {n}</span>
            </div>
            <h3 className={`font-head ${textColor} mb-5 text-[28px] leading-[1.05] tracking-[-0.01em] md:text-[40px] lg:text-[46px]`}>
              {title}
            </h3>
            <p className={`${mutedColor} mb-7 max-w-[50ch] text-[15px] leading-relaxed md:text-[17px]`}>
              {lede}
            </p>
            <ul className="max-w-[48ch] space-y-3">
              {results.map((r, i) => (
                <li key={i} className={`flex min-w-0 gap-3 ${bulletColor} text-[14px] leading-relaxed md:text-[15px]`}>
                  <Check className="mt-1 h-4 w-4 shrink-0" style={{ color: accentColor }} />
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
// Module tiles - SIM-card shaped, static (no link, no scroll)
// ============================================================
const TILES: { n: string; code: string; name: string }[] = [
  { n: "1", code: "Of", name: "Offer & catalog manager" },
  { n: "2", code: "Pr", name: "Pricing & bundles" },
  { n: "3", code: "Ch", name: "One catalog, every channel" },
  { n: "4", code: "Or", name: "Order orchestration" },
  { n: "5", code: "Br", name: "Multi-brand & partners" },
];

function ModuleTiles() {
  return (
    <div className="grid grid-cols-2 items-start gap-3 md:grid-cols-5 md:gap-4">
      {TILES.map((m) => (
        <SimTile key={m.n} n={m.n} code={m.code} name={m.name} tone="dark" />
      ))}
    </div>
  );
}

// ============================================================
// Outcomes - main export
// ============================================================
export function Outcomes() {
  const items: OutcomeBlock[] = [
    {
      n: "1",
      title: (
        <>
          Your business team launches offers{" "}
          <span className="text-[var(--sw-mint)]">without IT tickets</span>
        </>
      ),
      lede:
        "Today a new offer waits in the IT queue behind network work. This module gives the commercial team one interface where offers, bundles, and prices are created, previewed, and published.",
      results: [
        "New offers built in an interface, not in code",
        "Live preview before publishing, so what launches is what was designed",
        "Duplicate an existing offer and adjust it, instead of starting from zero",
        "Offer lifecycle managed in one place: draft, live, archived",
        "A working prototype of a new offer in 72 hours",
      ],
      diagram: <SvgOfferManager />,
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "2",
      title: (
        <>
          Prices and bundles as complex as{" "}
          <span className="text-[var(--sw-blue)]">telecom actually needs</span>
        </>
      ),
      lede:
        "Telecom pricing doesn't fit a normal web shop: one-time, monthly, usage-based, tiered, all in one bundle, with rules about who can buy it. This module handles exactly that.",
      results: [
        "One-time, recurring, usage-based, and tiered prices in one offer",
        "Bundles with rules: mandatory parts, optional parts, incompatible combinations",
        "Eligibility logic: the right offers for the right customer at the right address",
        "Contract terms and policies attached to the offer, not scattered in systems",
        "Changes go live in minutes, not in the next release",
      ],
      diagram: <SvgPricingBundles />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "3",
      title: (
        <>
          The web shop, app, call center, and store{" "}
          <span className="text-[var(--sw-mint)]">sell from one source</span>
        </>
      ),
      lede:
        "Every channel reads the same catalog, the same prices, the same rules, through one API. Customers hear the same answer everywhere.",
      results: [
        "One API serves discovery, configuration, cart, and order capture for every channel",
        "A price change appears everywhere at once",
        "New channels connect to the same contract, without rebuilding logic",
        "Works with the storefronts you already run",
        "No more 'the call center sees a different price'",
      ],
      diagram: <SvgOneChannel />,
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "4",
      title: (
        <>
          One order finds its way to{" "}
          <span className="text-[var(--sw-blue)]">every system by itself</span>
        </>
      ),
      lede:
        "An order for a bundle must reach billing, provisioning, and logistics, each with its own piece. This module splits the order and delivers each piece where it belongs.",
      results: [
        "Orders decomposed and routed to BSS, OSS, and fulfillment automatically",
        "Your systems of record stay untouched: billing bills, provisioning provisions",
        "Failed steps surface for review instead of disappearing",
        "Order status visible in one place, across all systems",
        "TMF622-aligned, so it speaks the language your architecture already knows",
      ],
      diagram: <SvgOrchestration />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "5",
      title: (
        <>
          Launch a sub-brand{" "}
          <span className="text-[var(--sw-mint)]">without building a second stack</span>
        </>
      ),
      lede:
        "Sub-brands and partner sales usually mean copies of everything. This module scopes offers per brand or partner inside one platform.",
      results: [
        "Separate catalogs and prices per brand or partner",
        "Full data isolation between tenants",
        "Switch context in one click from the same interface",
        "A new brand launches as configuration, not as a project",
        "Partners manage their own scope without seeing yours",
      ],
      diagram: <SvgMultiBrand />,
      theme: "dark",
      diagramDark: true,
    },
  ];

  return (
    <>
      <section id="modules" className="relative overflow-hidden bg-[var(--sw-black)] pt-28 pb-14 md:pt-36 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1000px 600px at 85% 30%, rgba(63,74,175,0.20) 0%, transparent 60%), radial-gradient(800px 500px at 10% 100%, rgba(110,247,110,0.06) 0%, transparent 55%)",
          }}
        />
        <div className="wrap relative">
          <div className="grid items-end gap-10 md:gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <h2 className="font-head max-w-[18ch] text-[36px] leading-[1.0] tracking-[-0.015em] text-white md:text-[58px] lg:text-[72px]">
                Five modules.{" "}
                <span className="text-[var(--sw-mint)]">Each one removes a real cost or opens real revenue</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[46ch] text-[16px] leading-relaxed text-white/75 md:text-[18px]">
                Configure them against your catalog, your systems, and your
                channels. Start with the one that costs you the most.
              </p>
              <div className="mt-8 grid max-w-[440px] grid-cols-3 gap-5">
                <div>
                  <div className="font-head text-[34px] leading-none tabular-nums text-white md:text-[44px]">5</div>
                  <div className="label-code mt-2 text-white/50">Modules</div>
                </div>
                <div>
                  <div className="font-head text-[34px] leading-none tabular-nums text-white md:text-[44px]">6 wk</div>
                  <div className="label-code mt-2 text-white/50">To a live offer</div>
                </div>
                <div>
                  <div className="font-head text-[34px] leading-none tabular-nums text-white md:text-[44px]">1×</div>
                  <div className="label-code mt-2 text-white/50">One-time setup</div>
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

      <section className="relative overflow-hidden bg-lp-bright">
        <div className="wrap flex flex-col items-start justify-between gap-6 border-t border-[var(--sw-black)]/10 py-16 md:flex-row md:items-center md:py-20">
          <p className="font-head max-w-[46ch] text-[20px] leading-[1.25] text-[var(--sw-black)] md:text-[24px]">
            Like the modules? You can have them live in weeks, not months.
          </p>
          <a href="#cta" className={btnLight}>
            See if it fits your systems
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </>
  );
}
