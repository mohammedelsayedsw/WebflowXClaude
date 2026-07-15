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
// Module 1 - Device & plan bundles
// Device + plan combined into one product with a plan-gated price
// ============================================================
function SvgDeviceBundle() {
  const W = 700;
  const H = 440;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="A device and a plan sold as one bundle with a plan-gated installment price">
      {/* device */}
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={26} y={50} width={258} height={150} rx={4} fill="rgba(63,74,175,0.10)" stroke="rgba(63,74,175,0.45)" />
        <rect x={26} y={50} width={258} height={4} fill="#6EF76E" />
        <rect x={44} y={82} width={30} height={54} rx={4} fill="none" stroke="rgba(255,255,255,0.6)" />
        <line x1={51} y1={128} x2={67} y2={128} stroke="rgba(255,255,255,0.5)" />
        <text x={92} y={102} fill="#fff" fontFamily={INK} fontSize="18" fontWeight="700">iPhone 15</text>
        <text x={92} y={126} fill="rgba(255,255,255,0.6)" fontFamily={INK} fontSize="14">smartphone</text>
        <text x={44} y={182} fill="#fff" fontFamily={INK} fontSize="20" fontWeight="700">€999</text>
        <text x={122} y={182} fill="rgba(255,255,255,0.6)" fontFamily={INK} fontSize="13">or in installments</text>
      </motion.g>

      <text x={155} y={224} fill="#6EF76E" fontFamily={INK} fontSize="30" fontWeight="700" textAnchor="middle">+</text>

      {/* plan */}
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.15, duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={26} y={244} width={258} height={150} rx={4} fill="rgba(63,74,175,0.10)" stroke="rgba(63,74,175,0.45)" />
        <rect x={26} y={244} width={258} height={4} fill="#3F4AAF" />
        <g transform="translate(44, 274)">
          {[0, 1, 2, 3].map((i) => (
            <rect key={i} x={i * 9} y={20 - i * 6} width={6} height={6 + i * 6} rx={1} fill="#6EF76E" fillOpacity={0.85} />
          ))}
        </g>
        <text x={96} y={290} fill="#fff" fontFamily={INK} fontSize="18" fontWeight="700">Postpaid plan</text>
        <text x={96} y={314} fill="rgba(255,255,255,0.6)" fontFamily={INK} fontSize="14">24 months</text>
        <text x={44} y={374} fill="#fff" fontFamily={INK} fontSize="20" fontWeight="700">€29 / mo</text>
      </motion.g>

      {/* combine arrow */}
      <DrawnPath d={`M 284 222 C 320 222, 344 218, 372 218`} stroke="#6EF76E" strokeOpacity={0.75} strokeWidth={1.5} duration={0.8} delay={0.6} />
      <path d={`M 361 213 L 372 218 L 361 223`} fill="none" stroke="#6EF76E" strokeOpacity={0.9} strokeWidth={1.5} />
      <text x={328} y={204} fill="#6EF76E" fontFamily={INK} fontSize="14" fontWeight="600" textAnchor="middle">one product</text>

      {/* bundle */}
      <motion.g initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={372} y={50} width={300} height={344} rx={4} fill="rgba(110,247,110,0.06)" stroke="#6EF76E" strokeOpacity={0.45} />
        <rect x={372} y={50} width={300} height={4} fill="#6EF76E" />
        <text x={394} y={88} fill="#fff" fontFamily={INK} fontSize="18" fontWeight="700">Bundle</text>
        <text x={394} y={112} fill="rgba(255,255,255,0.65)" fontFamily={INK} fontSize="14">iPhone 15 + Postpaid</text>
        <rect x={394} y={126} width={212} height={32} rx={16} fill="rgba(110,247,110,0.14)" stroke="rgba(110,247,110,0.5)" />
        <text x={500} y={147} fill="#6EF76E" fontFamily={INK} fontSize="13" fontWeight="700" letterSpacing="0.5" textAnchor="middle">PLAN-GATED PRICE</text>
        <line x1={394} x2={650} y1={180} y2={180} stroke="rgba(230,231,239,0.12)" />
        {[
          ["Upfront", "€0"],
          ["Installments", "€41 / mo × 24"],
          ["Through", "one bank"],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x={394} y={214 + i * 38} fill="rgba(255,255,255,0.72)" fontFamily={INK} fontSize="16">{k}</text>
            <text x={650} y={214 + i * 38} fill="#fff" fontFamily={INK} fontSize="16" fontWeight="700" textAnchor="end">{v}</text>
          </g>
        ))}
        <rect x={394} y={324} width={256} height={56} rx={4} fill="rgba(110,247,110,0.10)" stroke="rgba(110,247,110,0.4)" />
        <text x={410} y={349} fill="#fff" fontFamily={INK} fontSize="15" fontWeight="700">This device price exists</text>
        <text x={410} y={369} fill="#6EF76E" fontFamily={INK} fontSize="15" fontWeight="600">only with this plan</text>
      </motion.g>

      <text x={W / 2} y={H - 12} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="14" letterSpacing="1.2" textAnchor="middle">DEVICE + PLAN = ONE PRODUCT</text>
    </svg>
  );
}

// ============================================================
// Module 2 - Telecom payments
// Checkout with installments, balance pay, OTP, wallets, COD
// ============================================================
function SvgPayments() {
  const W = 700;
  const H = 440;
  const methods = [
    "Pay in installments, your bank's rules",
    "Pay from your phone balance",
    "Confirm with an SMS code",
    "Apple Pay, wallet, or card",
    "Cash or card on delivery",
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Every way your customers pay, in one checkout">
      {/* payment methods */}
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={26} y={44} width={356} height={356} rx={5} fill="rgba(63,74,175,0.10)" stroke="rgba(63,74,175,0.45)" />
        <rect x={26} y={44} width={356} height={4} fill="#6EF76E" />
        {methods.map((m, i) => {
          const rowY = 64 + i * 64;
          const midY = rowY + 25;
          return (
            <g key={m}>
              <rect x={42} y={rowY} width={324} height={50} rx={4} fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.16)" />
              <circle cx={66} cy={midY} r={9} fill="none" stroke="#6EF76E" strokeWidth={1.4} />
              <path d={`M 62 ${midY} l3 3 6 -7`} fill="none" stroke="#6EF76E" strokeWidth={1.6} />
              <text x={86} y={midY + 5} fill="#fff" fontFamily={INK} fontSize="15" fontWeight="600">{m}</text>
            </g>
          );
        })}
      </motion.g>

      {/* one clear example */}
      <motion.g initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.35, duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={396} y={128} width={278} height={184} rx={5} fill="rgba(110,247,110,0.06)" stroke="#6EF76E" strokeOpacity={0.45} />
        <rect x={396} y={128} width={278} height={4} fill="#6EF76E" />
        <text x={418} y={168} fill="#fff" fontFamily={INK} fontSize="15" fontWeight="700">Pay from your phone balance</text>
        <rect x={416} y={186} width={242} height={44} rx={4} fill="rgba(110,247,110,0.10)" stroke="rgba(110,247,110,0.4)" />
        <circle cx={438} cy={208} r={9} fill="none" stroke="#6EF76E" strokeWidth={1.4} />
        <path d="M 434 208 l3 3 6 -7" fill="none" stroke="#6EF76E" strokeWidth={1.6} />
        <text x={460} y={213} fill="#fff" fontFamily={INK} fontSize="14" fontWeight="600">Balance €54.20, enough</text>
        <rect x={416} y={240} width={242} height={44} rx={4} fill="rgba(110,247,110,0.10)" stroke="rgba(110,247,110,0.4)" />
        <circle cx={438} cy={262} r={9} fill="none" stroke="#6EF76E" strokeWidth={1.4} />
        <path d="M 434 262 l3 3 6 -7" fill="none" stroke="#6EF76E" strokeWidth={1.6} />
        <text x={460} y={267} fill="#fff" fontFamily={INK} fontSize="14" fontWeight="600">Confirmed by SMS code</text>
      </motion.g>

      <text x={W / 2} y={H - 14} fill="rgba(255,255,255,0.6)" fontFamily={INK} fontSize="14" textAnchor="middle">Every way your customers pay, in one checkout.</text>
    </svg>
  );
}

// ============================================================
// Module 3 - Numbers, SIM & eligibility
// Pick a number, check coverage, verify ID, deliver - all online
// ============================================================
function SvgSimEligibility() {
  const W = 700;
  const H = 440;
  const cards: { x: number; y: number; n: string; title: string; sub: string; chip: string; note: string }[] = [
    { x: 26, y: 46, n: "1", title: "Pick a number", sub: "070 123 4567", chip: "RESERVED VIA CRM", note: "auto-release if abandoned" },
    { x: 356, y: 46, n: "2", title: "Coverage check", sub: "at this address", chip: "FIBER & 5G OK", note: "straight from your systems" },
    { x: 26, y: 232, n: "3", title: "Verify ID", sub: "document upload", chip: "ID VERIFIED", note: "at checkout" },
    { x: 356, y: 232, n: "4", title: "Deliver", sub: "2h · same-day · next-day", chip: "e-SIM BY SMS", note: "fits telecom" },
  ];
  const cw = 318;
  const ch = 156;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Pick a number, check coverage, verify ID, and deliver, all handled online">
      {cards.map((c, i) => (
        <motion.g key={c.n} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 + i * 0.1, duration: 0.45 }} viewport={{ once: true, amount: 0.2 }}>
          <rect x={c.x} y={c.y} width={cw} height={ch} rx={4} fill="rgba(63,74,175,0.09)" stroke="rgba(63,74,175,0.4)" />
          <rect x={c.x} y={c.y} width={cw} height={4} fill="#6EF76E" />
          <circle cx={c.x + 34} cy={c.y + 40} r={15} fill="none" stroke="#6EF76E" strokeOpacity={0.6} />
          <text x={c.x + 34} y={c.y + 46} fill="#6EF76E" fontFamily={INK} fontSize="16" fontWeight="700" textAnchor="middle">{c.n}</text>
          <text x={c.x + 62} y={c.y + 38} fill="#fff" fontFamily={INK} fontSize="17" fontWeight="700">{c.title}</text>
          <text x={c.x + 62} y={c.y + 60} fill="rgba(255,255,255,0.6)" fontFamily={INK} fontSize="14">{c.sub}</text>
          <line x1={c.x + 20} x2={c.x + cw - 20} y1={c.y + 82} y2={c.y + 82} stroke="rgba(230,231,239,0.12)" />
          {/* chip */}
          <rect x={c.x + 20} y={c.y + 96} width={c.chip.length * 8.4 + 34} height={30} rx={15} fill="rgba(110,247,110,0.12)" stroke="rgba(110,247,110,0.45)" />
          <circle cx={c.x + 39} cy={c.y + 111} r={4.5} fill="#6EF76E" />
          <text x={c.x + 54} y={c.y + 116} fill="#6EF76E" fontFamily={INK} fontSize="13" fontWeight="700" letterSpacing="0.3">{c.chip}</text>
          {/* helper note below chip */}
          <text x={c.x + 20} y={c.y + 146} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="12">{c.note}</text>
        </motion.g>
      ))}
      <text x={W / 2} y={H - 10} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="13" letterSpacing="1.2" textAnchor="middle">EVERYTHING THE STORE VISIT WAS FOR, ONLINE</text>
    </svg>
  );
}

// ============================================================
// Module 4 - BSS & CRM connection
// One order -> connection layer -> CRM, BSS, provisioning, logistics
// ============================================================
function SvgConnection() {
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
    { y: 30, name: "CRM", sub: "customer + number", ok: true },
    { y: 118, name: "Billing · BSS", sub: "untouched", ok: true },
    { y: 206, name: "Provisioning", sub: "line activated", ok: true },
    { y: 294, name: "Logistics", sub: "needs review", ok: false },
  ];
  const tX = 470;
  const tW = 204;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="The store connects to CRM, BSS, provisioning, and logistics, with a failed step surfaced and monitoring wired in">
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={orderX} y={orderY} width={orderW} height={orderH} rx={4} fill="rgba(63,74,175,0.10)" stroke="rgba(63,74,175,0.45)" />
        <rect x={orderX} y={orderY} width={orderW} height={4} fill="#6EF76E" />
        <text x={orderX + orderW / 2} y={orderY + 40} fill="#fff" fontFamily={INK} fontSize="13" fontWeight="700" textAnchor="middle">The store</text>
        <text x={orderX + orderW / 2} y={orderY + 58} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="10" textAnchor="middle">order · number · balance</text>
        {[0, 1, 2].map((r) => (
          <rect key={r} x={orderX + 22} y={orderY + 78 + r * 16} width={orderW - 44} height={9} rx={2} fill="rgba(255,255,255,0.12)" />
        ))}
      </motion.g>

      <DrawnPath d={`M ${orderX + orderW} ${orderY + orderH / 2} H ${hubX}`} stroke="#6EF76E" strokeOpacity={0.7} strokeWidth={1.5} duration={0.7} delay={0.5} />

      <motion.g initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={hubX} y={hubY} width={hubW} height={hubH} rx={4} fill="rgba(110,247,110,0.07)" stroke="#6EF76E" strokeOpacity={0.5} />
        <text x={hubX + hubW / 2} y={hubY + 34} fill="#fff" fontFamily={INK} fontSize="12.5" fontWeight="700" textAnchor="middle">Connection layer</text>
        <text x={hubX + hubW / 2} y={hubY + 52} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="9" textAnchor="middle">the store adapts to you</text>
        <rect x={hubX + 26} y={hubY + 70} width={hubW - 52} height={28} rx={14} fill="rgba(110,247,110,0.14)" stroke="rgba(110,247,110,0.5)" />
        <circle cx={hubX + 44} cy={hubY + 84} r={4} fill="#6EF76E" />
        <text x={hubX + hubW / 2 + 8} y={hubY + 88} fill="#6EF76E" fontFamily={INK} fontSize="9.5" fontWeight="700" textAnchor="middle">MONITORED</text>
        <text x={hubX + hubW / 2} y={hubY + 120} fill="rgba(255,255,255,0.5)" fontFamily={INK} fontSize="9" textAnchor="middle">VPN · your hosting</text>
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
                <line x1={tX + 24} y1={midY - 4} x2={tX + 24} y2={midY + 1} stroke="#FF5A31" strokeWidth={1.8} />
                <circle cx={tX + 24} cy={midY + 4} r={1} fill="#FF5A31" />
              </>
            )}
            <text x={tX + 44} y={midY - 3} fill="#fff" fontFamily={INK} fontSize="11.5" fontWeight="700">{t.name}</text>
            <text x={tX + 44} y={midY + 13} fill={t.ok ? "rgba(255,255,255,0.5)" : "#FF5A31"} fontFamily={INK} fontSize="9.5" fontWeight={t.ok ? 400 : 700}>{t.sub}</text>
          </motion.g>
        );
      })}

      <text x={W / 2} y={H - 8} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="10" letterSpacing="1.4" textAnchor="middle">THE STORE ADAPTS · YOUR BSS STAYS UNTOUCHED</text>
    </svg>
  );
}

// ============================================================
// Module 5 - Launch & campaign machinery
// Migration, SEO redirects, stress test, bilingual/RTL, campaigns
// ============================================================
function SvgLaunch() {
  const W = 700;
  const H = 440;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Data migration, SEO redirects, stress testing at real peak, bilingual right-to-left storefronts, and campaign layouts">
      {/* migration */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} viewport={{ once: true, amount: 0.2 }}>
        <rect x={26} y={50} width={318} height={104} rx={4} fill="rgba(63,74,175,0.09)" stroke="rgba(63,74,175,0.4)" />
        <rect x={26} y={50} width={318} height={4} fill="#6EF76E" />
        <text x={44} y={80} fill="#fff" fontFamily={INK} fontSize="12.5" fontWeight="700">Data migration</text>
        <rect x={44} y={94} width={96} height={44} rx={3} fill="rgba(255,255,255,0.04)" stroke="rgba(230,231,239,0.16)" />
        <text x={92} y={112} fill="rgba(255,255,255,0.7)" fontFamily={INK} fontSize="10" textAnchor="middle">old store</text>
        <text x={92} y={128} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="8.5" textAnchor="middle">orders · customers</text>
        <line x1={148} y1={116} x2={228} y2={116} stroke="#6EF76E" strokeOpacity={0.7} strokeWidth={1.5} />
        <path d="M222 111 l6 5 -6 5" fill="none" stroke="#6EF76E" strokeWidth={1.5} />
        <rect x={232} y={94} width={96} height={44} rx={3} fill="rgba(110,247,110,0.08)" stroke="rgba(110,247,110,0.4)" />
        <text x={280} y={112} fill="#fff" fontFamily={INK} fontSize="10" textAnchor="middle">new store</text>
        <text x={280} y={128} fill="#6EF76E" fontFamily={INK} fontSize="8.5" textAnchor="middle">history kept</text>
      </motion.g>

      {/* SEO redirects */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.12, duration: 0.45 }} viewport={{ once: true, amount: 0.2 }}>
        <rect x={26} y={170} width={318} height={104} rx={4} fill="rgba(63,74,175,0.09)" stroke="rgba(63,74,175,0.4)" />
        <rect x={26} y={170} width={318} height={4} fill="#3F4AAF" />
        <text x={44} y={200} fill="#fff" fontFamily={INK} fontSize="12.5" fontWeight="700">SEO migration</text>
        {[0, 1].map((r) => (
          <g key={r}>
            <text x={44} y={224 + r * 24} fill="rgba(255,255,255,0.6)" fontFamily={INK} fontSize="9.5">/old/url-{r + 1}</text>
            <rect x={150} y={214 + r * 24} width={34} height={16} rx={8} fill="rgba(110,247,110,0.14)" stroke="rgba(110,247,110,0.45)" />
            <text x={167} y={226 + r * 24} fill="#6EF76E" fontFamily={INK} fontSize="8.5" fontWeight="700" textAnchor="middle">301</text>
            <text x={196} y={224 + r * 24} fill="rgba(255,255,255,0.7)" fontFamily={INK} fontSize="9.5">/new/url-{r + 1}</text>
          </g>
        ))}
        <text x={328} y={200} fill="#6EF76E" fontFamily={INK} fontSize="9" textAnchor="end">rankings survive</text>
      </motion.g>

      {/* stress test */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.45 }} viewport={{ once: true, amount: 0.2 }}>
        <rect x={356} y={50} width={318} height={104} rx={4} fill="rgba(63,74,175,0.09)" stroke="rgba(63,74,175,0.4)" />
        <rect x={356} y={50} width={318} height={4} fill="#6EF76E" />
        <text x={374} y={80} fill="#fff" fontFamily={INK} fontSize="12.5" fontWeight="700">Stress test at real peak</text>
        {[26, 40, 30, 52, 44, 60].map((h, i) => (
          <rect key={i} x={378 + i * 20} y={140 - h} width={12} height={h} rx={1.5} fill="#3F4AAF" fillOpacity={0.7} />
        ))}
        <line x1={374} y1={92} x2={506} y2={92} stroke="#FF5A31" strokeOpacity={0.7} strokeWidth={1.2} strokeDasharray="4 3" />
        <text x={512} y={95} fill="#FF5A31" fontFamily={INK} fontSize="8.5">capacity</text>
        <rect x={560} y={112} width={98} height={28} rx={14} fill="rgba(110,247,110,0.12)" stroke="rgba(110,247,110,0.45)" />
        <text x={609} y={130} fill="#6EF76E" fontFamily={INK} fontSize="10" fontWeight="700" textAnchor="middle">PASSED</text>
      </motion.g>

      {/* bilingual RTL */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.45 }} viewport={{ once: true, amount: 0.2 }}>
        <rect x={356} y={170} width={318} height={104} rx={4} fill="rgba(63,74,175,0.09)" stroke="rgba(63,74,175,0.4)" />
        <rect x={356} y={170} width={318} height={4} fill="#3F4AAF" />
        <text x={374} y={200} fill="#fff" fontFamily={INK} fontSize="12.5" fontWeight="700">Bilingual · right-to-left</text>
        <rect x={374} y={214} width={130} height={44} rx={3} fill="rgba(255,255,255,0.04)" stroke="rgba(230,231,239,0.16)" />
        <text x={386} y={234} fill="#fff" fontFamily={INK} fontSize="10" fontWeight="700">EN</text>
        {[0, 1, 2].map((r) => (
          <rect key={r} x={386} y={242 + r * 4} width={110 - r * 22} height={2.2} rx={1} fill="rgba(255,255,255,0.25)" />
        ))}
        <rect x={526} y={214} width={130} height={44} rx={3} fill="rgba(110,247,110,0.06)" stroke="rgba(110,247,110,0.35)" />
        <text x={644} y={234} fill="#6EF76E" fontFamily={INK} fontSize="10" fontWeight="700" textAnchor="end">ع  AR</text>
        {[0, 1, 2].map((r) => (
          <rect key={r} x={548 + r * 22} y={242 + r * 4} width={110 - r * 22} height={2.2} rx={1} fill="rgba(110,247,110,0.35)" />
        ))}
      </motion.g>

      {/* campaign layouts */}
      <motion.g initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.36, duration: 0.45 }} viewport={{ once: true, amount: 0.2 }}>
        <rect x={26} y={290} width={648} height={70} rx={4} fill="rgba(110,247,110,0.06)" stroke="#6EF76E" strokeOpacity={0.4} />
        <text x={46} y={320} fill="#fff" fontFamily={INK} fontSize="12.5" fontWeight="700">Campaign layouts</text>
        <text x={46} y={340} fill="rgba(255,255,255,0.55)" fontFamily={INK} fontSize="10">holiday and launch layouts your team switches on from the admin</text>
        <rect x={520} y={308} width={134} height={34} rx={17} fill="rgba(110,247,110,0.14)" stroke="rgba(110,247,110,0.5)" />
        <circle cx={637} cy={325} r={11} fill="#6EF76E" fillOpacity={0.85} />
        <text x={560} y={330} fill="#6EF76E" fontFamily={INK} fontSize="10.5" fontWeight="700" textAnchor="middle">CAMPAIGN ON</text>
      </motion.g>

      <text x={W / 2} y={H - 8} fill="rgba(255,255,255,0.45)" fontFamily={INK} fontSize="10" letterSpacing="1.4" textAnchor="middle">LIVE ON THE DEADLINE · STANDS AT PEAK</text>
    </svg>
  );
}

// ============================================================
// Module Ca - One catalog, every channel
// Team edits one catalog -> every channel shows the same offer
// ============================================================
function SvgOneCatalog() {
  const W = 700;
  const H = 440;
  const cardX = 44;
  const cardW = 220;
  const cardH = 150;
  const cardY = (H - cardH) / 2;
  const cardMidY = cardY + cardH / 2;
  const chX = 432;
  const chW = 224;
  const chH = 66;
  const channels = [
    { name: "Website", y: 96 },
    { name: "App", y: 187 },
    { name: "Store", y: 278 },
  ];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label="Change the price in one place and it is the same everywhere a customer buys">
      {/* calm connecting lines */}
      {channels.map((c, i) => (
        <path
          key={`l-${i}`}
          d={`M ${cardX + cardW} ${cardMidY} C ${cardX + cardW + 60} ${cardMidY}, ${chX - 60} ${c.y + chH / 2}, ${chX} ${c.y + chH / 2}`}
          fill="none"
          stroke="rgba(255,255,255,0.22)"
          strokeWidth={1}
        />
      ))}

      {/* left card - you edit it here */}
      <motion.g initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true, amount: 0.25 }}>
        <rect x={cardX} y={cardY} width={cardW} height={cardH} rx={5} fill="rgba(63,74,175,0.10)" stroke="rgba(63,74,175,0.5)" />
        <rect x={cardX} y={cardY} width={cardW} height={4} fill="#6EF76E" />
        <text x={cardX + cardW / 2} y={cardY + 36} fill="#fff" fontFamily={INK} fontSize="14" fontWeight="700" textAnchor="middle">You edit it here</text>
        <rect x={cardX + 22} y={cardY + 54} width={cardW - 44} height={40} rx={4} fill="rgba(255,255,255,0.05)" stroke="rgba(230,231,239,0.18)" />
        <text x={cardX + 38} y={cardY + 79} fill="rgba(255,255,255,0.75)" fontFamily={INK} fontSize="13">Price</text>
        <text x={cardX + cardW - 38} y={cardY + 79} fill="#6EF76E" fontFamily={INK} fontSize="16" fontWeight="700" textAnchor="end">€49.99</text>
        <rect x={cardX + 22} y={cardY + 104} width={cardW - 44} height={34} rx={4} fill="#6EF76E" />
        <text x={cardX + cardW / 2} y={cardY + 126} fill="#10132c" fontFamily={INK} fontSize="13" fontWeight="700" textAnchor="middle">Publish</text>
      </motion.g>

      {/* three destinations */}
      {channels.map((c, i) => {
        const midY = c.y + chH / 2;
        return (
          <motion.g key={c.name} initial={{ opacity: 0, x: 8 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }} viewport={{ once: true, amount: 0.2 }}>
            <rect x={chX} y={c.y} width={chW} height={chH} rx={4} fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.2)" />
            <text x={chX + 22} y={midY + 5} fill="#fff" fontFamily={INK} fontSize="14" fontWeight="700">{c.name}</text>
            <circle cx={chX + chW - 96} cy={midY} r={9} fill="none" stroke="#6EF76E" strokeWidth={1.4} />
            <path d={`M ${chX + chW - 100} ${midY} l3 3 6 -7`} fill="none" stroke="#6EF76E" strokeWidth={1.6} />
            <text x={chX + chW - 22} y={midY + 5} fill="#6EF76E" fontFamily={INK} fontSize="15" fontWeight="700" textAnchor="end">€49.99</text>
          </motion.g>
        );
      })}

      <text x={W / 2} y={H - 18} fill="rgba(255,255,255,0.6)" fontFamily={INK} fontSize="13" textAnchor="middle">Change it once. It is the same everywhere.</text>
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
                <li key={i} className={`flex min-w-0 gap-3 ${bulletColor} text-[15px] leading-relaxed md:text-[17px]`}>
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
const TILES: { n: string; name: React.ReactNode }[] = [
  { n: "1", name: "One catalog, every channel" },
  { n: "2", name: "Device & plan bundles" },
  { n: "3", name: "Telecom payments" },
  { n: "4", name: "Numbers, SIM & eligibility" },
  { n: "5", name: "BSS & CRM connection" },
  { n: "6", name: "Launch & campaign machinery" },
];

function ModuleTiles() {
  return (
    <div className="grid grid-cols-2 items-start gap-3 md:grid-cols-6 md:gap-4">
      {TILES.map((m) => (
        <SimTile key={m.n} n={m.n} name={m.name} tone="dark" />
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
          Your team edits one catalog.{" "}
          <span className="text-[var(--sw-blue)]">Every channel shows the same offer</span>.
        </>
      ),
      lede:
        "Right now every price change waits on a developer, and your channels drift out of step. This module gives your team one screen to build and edit every offer, bundle, and price, with no code.",
      results: [
        "One screen to create and edit offers, bundles, and prices, no developer needed",
        "Set eligibility and contract terms on an offer without engineering",
        "Roll back a change in one click if something looks wrong",
        "Preview an offer before it goes live, copy an existing offer in one click",
        "Scope offers per brand or MVNO from the same catalog, kept fully separate",
      ],
      diagram: <SvgOneCatalog />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "2",
      title: (
        <>
          Sell the phone and the plan{" "}
          <span className="text-[var(--sw-mint)]">as one product</span>
        </>
      ),
      lede:
        "Telecom selling is bundles: a device with a postpaid plan, fiber with TV, 5G with a router. This module makes bundles first-class products, with prices and conditions that depend on the plan.",
      results: [
        "Devices sold together with postpaid, prepaid, fiber, and 5G plans",
        "Plan-gated offers: a special device price that exists only with a specific plan",
        "Campaign offers built fast: the reference operator ran a device campaign with plan-gated installment pricing",
        "Product pages that present plans and devices differently, because they are different",
        "One-time, monthly, and installment pricing combined on one offer",
      ],
      diagram: <SvgDeviceBundle />,
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "3",
      title: (
        <>
          Installments, balance payment, and OTP,{" "}
          <span className="text-[var(--sw-blue)]">all in one checkout</span>
        </>
      ),
      lede:
        "Telecom customers pay in ways normal shops never see. This module ships the whole set, proven in production.",
      results: [
        "Bank installments with per-bank rules: which cards, which terms, which products",
        "Payment from the customer's phone account, with a live balance check before confirming",
        "OTP verification built into the payment step",
        "Wallets, Apple Pay, cards, cash on delivery, and card on delivery",
        "Payment edge cases handled: no charges without an order, no lost redirects",
      ],
      diagram: <SvgPayments />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "4",
      title: (
        <>
          Pick a number, check coverage, verify ID,{" "}
          <span className="text-[var(--sw-mint)]">all online</span>
        </>
      ),
      lede:
        "The reasons customers still visit a store for a SIM are all solvable online. This module solves them.",
      results: [
        "Number selection with reservation through your CRM, and automatic release of abandoned numbers",
        "Coverage check at the customer's address for fiber and 5G, straight from your systems",
        "ID verification and document upload at checkout",
        "E-cards and digital products delivered by SMS",
        "Delivery options that fit telecom: 2-hour, same-day, next-day",
      ],
      diagram: <SvgSimEligibility />,
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "5",
      title: (
        <>
          The store talks to your BSS.{" "}
          <span className="text-[var(--sw-blue)]">Your BSS doesn&apos;t change</span>
        </>
      ),
      lede:
        "Every order, number, and balance lives in your systems of record. This module is the connection layer between them and the store, built so the BSS side stays untouched.",
      results: [
        "Checkout, orders, and customer data flow to your BSS, OSS, and CRM automatically",
        "Zero changes required on the BSS side: the store adapts to your systems",
        "Failures surface for review instead of disappearing: no silently lost orders",
        "Secure connection to your infrastructure (VPN, your hosting, your rules)",
        "Monitoring wired in, so problems are seen before customers report them",
      ],
      diagram: <SvgConnection />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "6",
      title: (
        <>
          Go live on the deadline,{" "}
          <span className="text-[var(--sw-mint)]">survive the peak</span>
        </>
      ),
      lede:
        "Telecom launches have hard marketing deadlines and real peak traffic. This module is the practiced process that gets a store live on time and keeps it standing.",
      results: [
        "Full data migration from your current store: orders, customers, history",
        "SEO migration with redirects, so rankings survive the move",
        "Stress testing against your real historical peak before launch, not after",
        "Bilingual and right-to-left storefronts, proven with English and Arabic in production",
        "Holiday and campaign layouts your team can switch on from the admin",
      ],
      diagram: <SvgLaunch />,
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
                Six modules.{" "}
                <span className="text-[var(--sw-mint)]">Each one cuts a real cost or brings in real revenue</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="max-w-[46ch] text-[16px] leading-relaxed text-white/75 md:text-[18px]">
                Configure them to your catalog, systems, and channels. Apply
                them all, or pick just the one you are missing.
              </p>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
                <div>
                  <div className="font-head text-[34px] leading-none tabular-nums text-white md:text-[44px]">6</div>
                  <div className="label-code mt-2 text-white/50">Modules</div>
                </div>
                <div>
                  <div className="font-head whitespace-nowrap text-[34px] leading-none tabular-nums text-white md:text-[44px]">6-12 wk</div>
                  <div className="label-code mt-2 text-white/50">Kickoff to live</div>
                </div>
                <div>
                  <div className="font-head text-[34px] leading-none tabular-nums text-white md:text-[44px]">Once</div>
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
            Like the modules? They are already running in production. You fit
            them to your systems in 6 to 12 weeks.
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
