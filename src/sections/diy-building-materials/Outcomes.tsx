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


// ============================================================
// Outcome 1 — External WMS as source of truth
// 3 stock sources → WMS hub → PDP card with origin tag
// ============================================================
function SvgWMS() {
  const W = 700;
  const H = 480;

  const sources = [
    { y: 50, color: "#3F4AAF", label: "Central DC", sub: "Live · 24/7 feed", stock: "12,418 SKU" },
    { y: 180, color: "#3F4AAF", label: "Regional hubs", sub: "Hourly polling", stock: "8,213 SKU" },
    { y: 310, color: "#3F4AAF", label: "Store bays", sub: "30-min sync", stock: "1,604 SKU" },
  ];

  const hubX = 270;
  const hubY = 130;
  const hubW = 180;
  const hubH = 220;

  const pdpX = 510;
  const pdpY = 130;
  const pdpW = 175;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="External WMS as source of truth">
      <defs>
        <linearGradient id="wmsHub" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6EF76E" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#6EF76E" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="wmsPdp" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3F4AAF" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#3F4AAF" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {sources.map((s, i) => {
        const cardX = 0;
        const cardW = 215;
        const cardH = 100;
        const midY = s.y + cardH / 2;

        return (
          <motion.g
            key={s.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <rect x={cardX} y={s.y} width={cardW} height={cardH} rx={3}
                  fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.18)" strokeWidth={1} />
            <rect x={cardX} y={s.y} width={4} height={cardH} fill={s.color} />
            <text x={cardX + 18} y={s.y + 30} fill="#fff" fontFamily="Inter" fontSize="14" fontWeight="700">{s.label}</text>
            <text x={cardX + 18} y={s.y + 50} fill="rgba(255,255,255,0.6)" fontFamily="Inter" fontSize="11">{s.sub}</text>
            <rect x={cardX + 18} y={s.y + 62} width={120} height={22} rx={2}
                  fill="rgba(63,74,175,0.18)" stroke="rgba(63,74,175,0.4)" />
            <text x={cardX + 26} y={s.y + 77} fill="#9aa3e0" fontFamily="Inter" fontSize="11" fontWeight="600" letterSpacing="0.5">{s.stock}</text>

            <DrawnPath
              d={`M ${cardX + cardW} ${midY} C ${cardX + cardW + 30} ${midY}, ${hubX - 30} ${hubY + hubH / 2}, ${hubX} ${hubY + hubH / 2}`}
              stroke={s.color} strokeOpacity={0.55} strokeWidth={1.3} strokeDasharray="4 5"
              duration={0.7} delay={0.5 + i * 0.08}
            />
            <motion.circle r={3} fill={s.color}
              initial={{ cx: cardX + cardW, cy: midY, opacity: 0 }}
              animate={{ cx: [cardX + cardW, hubX], cy: [midY, hubY + hubH / 2], opacity: [0, 1, 1, 0] }}
              transition={{ delay: 1.4 + i * 0.4, duration: 1.3, repeat: Infinity, repeatDelay: 2.5, times: [0, 0.2, 0.8, 1] }}
            />
          </motion.g>
        );
      })}

      {/* WMS hub */}
      <motion.g
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <rect x={hubX} y={hubY} width={hubW} height={hubH} rx={4}
              fill="url(#wmsHub)" stroke="#6EF76E" strokeOpacity={0.5} strokeWidth={1} />
        <text x={hubX + hubW / 2} y={hubY + 36} fill="#fff" fontFamily="Inter" fontSize="14" fontWeight="700" textAnchor="middle">WMS · source of truth</text>
        <text x={hubX + hubW / 2} y={hubY + 56} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="10" letterSpacing="1.5" textAnchor="middle">YOUWE · MANHATTAN · CUSTOM</text>
        <line x1={hubX + 18} x2={hubX + hubW - 18} y1={hubY + 74} y2={hubY + 74} stroke="rgba(230,231,239,0.14)" />
        {[
          "Owns reservations",
          "Owns allocations",
          "Append-only ledger",
          "Nightly reconciliation",
        ].map((label, i) => (
          <g key={label}>
            <circle cx={hubX + 26} cy={hubY + 100 + i * 30} r={3} fill="#6EF76E" />
            <text x={hubX + 40} y={hubY + 104 + i * 30} fill="#fff" fontFamily="Inter" fontSize="11" fontWeight="600">{label}</text>
          </g>
        ))}
      </motion.g>

      {/* hub → PDP arrow */}
      <DrawnPath
        d={`M ${hubX + hubW} ${hubY + hubH / 2} C ${hubX + hubW + 25} ${hubY + hubH / 2}, ${pdpX - 25} ${pdpY + 120}, ${pdpX} ${pdpY + 120}`}
        stroke="#6EF76E" strokeOpacity={0.75} strokeWidth={1.5} duration={0.9} delay={1.0}
      />
      <motion.circle r={3.5} fill="#6EF76E"
        initial={{ cx: hubX + hubW, cy: hubY + hubH / 2, opacity: 0 }}
        animate={{ cx: [hubX + hubW, pdpX], cy: [hubY + hubH / 2, pdpY + 120], opacity: [0, 1, 1, 0] }}
        transition={{ delay: 2.4, duration: 1.4, repeat: Infinity, repeatDelay: 1.5, times: [0, 0.2, 0.8, 1] }}
      />

      {/* Storefront PDP card */}
      <motion.g
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <rect x={pdpX} y={pdpY} width={pdpW} height={240} rx={4}
              fill="url(#wmsPdp)" stroke="rgba(63,74,175,0.4)" strokeWidth={1} />
        <rect x={pdpX} y={pdpY} width={pdpW} height={4} rx={2} fill="#6EF76E" />
        <text x={pdpX + 16} y={pdpY + 28} fill="#fff" fontFamily="Inter" fontSize="13" fontWeight="700">Storefront PDP</text>
        <text x={pdpX + 16} y={pdpY + 46} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="10" letterSpacing="1">VIEW-ONLY ON STOCK</text>
        <line x1={pdpX + 16} x2={pdpX + pdpW - 16} y1={pdpY + 60} y2={pdpY + 60} stroke="rgba(230,231,239,0.1)" />

        <text x={pdpX + 16} y={pdpY + 82} fill="rgba(255,255,255,0.7)" fontFamily="Inter" fontSize="11">In stock</text>
        <text x={pdpX + pdpW - 16} y={pdpY + 82} fill="#6EF76E" fontFamily="Inter" fontSize="14" fontWeight="700" textAnchor="end">178</text>

        <text x={pdpX + 16} y={pdpY + 108} fill="rgba(255,255,255,0.7)" fontFamily="Inter" fontSize="11">Available now</text>
        <text x={pdpX + pdpW - 16} y={pdpY + 108} fill="#fff" fontFamily="Inter" fontSize="12" fontWeight="600" textAnchor="end">156</text>

        <text x={pdpX + 16} y={pdpY + 132} fill="rgba(255,255,255,0.7)" fontFamily="Inter" fontSize="11">Ships from</text>
        <text x={pdpX + pdpW - 16} y={pdpY + 132} fill="#fff" fontFamily="Inter" fontSize="11" textAnchor="end">Central DC</text>

        <text x={pdpX + 16} y={pdpY + 156} fill="rgba(255,255,255,0.7)" fontFamily="Inter" fontSize="11">From remote bay</text>
        <text x={pdpX + pdpW - 16} y={pdpY + 156} fill="rgba(110,247,110,0.85)" fontFamily="Inter" fontSize="11" textAnchor="end">22</text>

        <rect x={pdpX + 16} y={pdpY + 182} width={pdpW - 32} height={28} rx={2}
              fill="rgba(110,247,110,0.16)" stroke="rgba(110,247,110,0.55)" />
        <text x={pdpX + pdpW / 2} y={pdpY + 200} fill="#6EF76E" fontFamily="Inter" fontSize="10" fontWeight="700" letterSpacing="0.5" textAnchor="middle">ONE SOURCE OF TRUTH</text>
      </motion.g>

      <text x={W / 2} y={H - 14} fill="rgba(255,255,255,0.45)" fontFamily="Inter" fontSize="10" letterSpacing="1.5" textAnchor="middle">
        ONE WMS · ONE TRUTH · OWN YOUR INVENTORY MODEL
      </text>
    </svg>
  );
}


// ============================================================
// Outcome 2 — B2B + B2C: VAT toggle + pallet math
// Centered toggle + two PDP cards side by side
// ============================================================
function SvgB2B() {
  const W = 700;
  const H = 480;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="VAT toggle and pallet math">
      <defs>
        <linearGradient id="b2bDark" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3F4AAF" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#3F4AAF" stopOpacity="0.02" />
        </linearGradient>
        <linearGradient id="b2bMint" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6EF76E" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#6EF76E" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      {/* VAT toggle */}
      <motion.g
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <text x={W / 2} y={32} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="10" letterSpacing="2" textAnchor="middle">SESSION-BASED VAT TOGGLE · FIRST-VISIT MODAL</text>
        <rect x={W / 2 - 130} y={48} width={260} height={42} rx={3}
              fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.16)" />
        <rect x={W / 2 - 130} y={48} width={130} height={42} rx={3} fill="rgba(63,74,175,0.25)" stroke="#3F4AAF" />
        <text x={W / 2 - 65} y={74} fill="#fff" fontFamily="Inter" fontSize="13" fontWeight="700" textAnchor="middle">€ incl VAT</text>
        <text x={W / 2 + 65} y={74} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="13" fontWeight="600" textAnchor="middle">€ ex VAT</text>
      </motion.g>

      {/* Left PDP card · B2C */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {(() => {
          const x = 40, y = 130, w = 280, h = 250;
          return (
            <>
              <rect x={x} y={y} width={w} height={h} rx={4}
                    fill="url(#b2bDark)" stroke="rgba(63,74,175,0.4)" strokeWidth={1} />
              <rect x={x} y={y} width={w} height={4} rx={2} fill="#3F4AAF" />
              <text x={x + 18} y={y + 28} fill="#fff" fontFamily="Inter" fontSize="14" fontWeight="700">B2C view · homeowner</text>
              <text x={x + 18} y={y + 46} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="10" letterSpacing="1.2">€ INCL VAT · 1 UNIT · RETAIL</text>
              <line x1={x + 18} x2={x + w - 18} y1={y + 60} y2={y + 60} stroke="rgba(230,231,239,0.1)" />

              <text x={x + 18} y={y + 90} fill="rgba(255,255,255,0.8)" fontFamily="Inter" fontSize="12">Plasterboard 12.5mm</text>
              <text x={x + 18} y={y + 108} fill="rgba(255,255,255,0.5)" fontFamily="Inter" fontSize="10">SKU 4029-12-100</text>

              <text x={x + 18} y={y + 152} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="11">Unit price</text>
              <text x={x + w - 18} y={y + 152} fill="#fff" fontFamily="Inter" fontSize="20" fontWeight="700" textAnchor="end" letterSpacing="-0.3">€ 19.99</text>

              <text x={x + 18} y={y + 174} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="11">Quantity</text>
              <text x={x + w - 18} y={y + 174} fill="rgba(255,255,255,0.85)" fontFamily="Inter" fontSize="12" textAnchor="end">1 unit</text>

              <rect x={x + 18} y={y + 200} width={w - 36} height={32} rx={2}
                    fill="rgba(63,74,175,0.18)" stroke="rgba(63,74,175,0.5)" />
              <text x={x + w / 2} y={y + 220} fill="#fff" fontFamily="Inter" fontSize="11" fontWeight="700" letterSpacing="0.5" textAnchor="middle">ADD TO CART · € 19.99</text>
            </>
          );
        })()}
      </motion.g>

      {/* Right PDP card · B2B */}
      <motion.g
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {(() => {
          const x = 380, y = 130, w = 280, h = 250;
          return (
            <>
              <rect x={x} y={y} width={w} height={h} rx={4}
                    fill="url(#b2bMint)" stroke="rgba(110,247,110,0.45)" strokeWidth={1} />
              <rect x={x} y={y} width={w} height={4} rx={2} fill="#6EF76E" />
              <text x={x + 18} y={y + 28} fill="#fff" fontFamily="Inter" fontSize="14" fontWeight="700">B2B view · contractor</text>
              <text x={x + 18} y={y + 46} fill="rgba(110,247,110,0.7)" fontFamily="Inter" fontSize="10" letterSpacing="1.2">€ EX VAT · PALLET · TIER PRICE</text>
              <line x1={x + 18} x2={x + w - 18} y1={y + 60} y2={y + 60} stroke="rgba(230,231,239,0.1)" />

              <text x={x + 18} y={y + 90} fill="rgba(255,255,255,0.8)" fontFamily="Inter" fontSize="12">Plasterboard 12.5mm</text>
              <text x={x + 18} y={y + 108} fill="rgba(255,255,255,0.5)" fontFamily="Inter" fontSize="10">SKU 4029-12-100 · contract A</text>

              <text x={x + 18} y={y + 132} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="11">Pack size</text>
              <text x={x + w - 18} y={y + 132} fill="#fff" fontFamily="Inter" fontSize="12" fontWeight="600" textAnchor="end">1 pallet = 48 units</text>

              <text x={x + 18} y={y + 152} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="11">Unit price</text>
              <text x={x + w - 18} y={y + 152} fill="#fff" fontFamily="Inter" fontSize="20" fontWeight="700" textAnchor="end" letterSpacing="-0.3">€ 15.99</text>

              <text x={x + 18} y={y + 174} fill="rgba(110,247,110,0.85)" fontFamily="Inter" fontSize="11">Save vs unit price</text>
              <text x={x + w - 18} y={y + 174} fill="#6EF76E" fontFamily="Inter" fontSize="12" fontWeight="700" textAnchor="end">€ 192 / pallet</text>

              <rect x={x + 18} y={y + 200} width={w - 36} height={32} rx={2}
                    fill="rgba(110,247,110,0.18)" stroke="rgba(110,247,110,0.55)" />
              <text x={x + w / 2} y={y + 220} fill="#6EF76E" fontFamily="Inter" fontSize="11" fontWeight="700" letterSpacing="0.5" textAnchor="middle">ADD PALLET · € 767.52 EX</text>
            </>
          );
        })()}
      </motion.g>

      {/* Roles row */}
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.4 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <text x={40} y={420} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="10" letterSpacing="1.5">ACCOUNT ROLES (B2B)</text>
        {["buyer", "approver", "finance", "branch manager"].map((r, i) => (
          <g key={r}>
            <rect x={40 + i * 150} y={432} width={138} height={26} rx={2}
                  fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.18)" />
            <text x={40 + i * 150 + 69} y={449} fill="#fff" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle">{r}</text>
          </g>
        ))}
      </motion.g>
    </svg>
  );
}


// ============================================================
// Outcome 3 — Catalog: 4-level family tree + exception workspace
// ============================================================
function SvgCatalog() {
  const W = 700;
  const H = 480;

  const levels = [
    { y: 40, label: "Category", value: "Plumbing", attrs: ["base attributes"] },
    { y: 130, label: "Subcategory", value: "Pipes & fittings", attrs: ["inherits +"] },
    { y: 220, label: "Family", value: "Copper pipes", attrs: ["inherits +"] },
    { y: 310, label: "Product", value: "22mm × 3m", attrs: ["inherits + size, length, grade"] },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="4-level catalog hierarchy with attribute inheritance">
      <defs>
        <linearGradient id="catTile" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#3F4AAF" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#3F4AAF" stopOpacity="0.02" />
        </linearGradient>
      </defs>

      <text x={20} y={24} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="10" letterSpacing="2">4-LEVEL HIERARCHY · DYNAMIC ATTRIBUTE INHERITANCE</text>

      {levels.map((lv, i) => {
        const x = 40 + i * 30;
        const w = 320;
        return (
          <motion.g
            key={lv.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <rect x={x} y={lv.y} width={w} height={62} rx={3}
                  fill="url(#catTile)" stroke="rgba(63,74,175,0.4)" strokeWidth={1} />
            <rect x={x} y={lv.y} width={4} height={62} fill={i === 3 ? "#6EF76E" : "#3F4AAF"} />
            <text x={x + 18} y={lv.y + 22} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="9" letterSpacing="1.5">{`LEVEL ${i + 1} · ${lv.label.toUpperCase()}`}</text>
            <text x={x + 18} y={lv.y + 42} fill="#fff" fontFamily="Inter" fontSize="14" fontWeight="700">{lv.value}</text>
            <text x={x + w - 18} y={lv.y + 42} fill={i === 3 ? "#6EF76E" : "rgba(255,255,255,0.6)"} fontFamily="Inter" fontSize="10" textAnchor="end">{lv.attrs[0]}</text>

            {i < 3 && (
              <DrawnPath
                d={`M ${x + 18} ${lv.y + 62} V ${levels[i + 1].y}`}
                stroke="rgba(110,247,110,0.5)" strokeWidth={1.2} strokeDasharray="3 4"
                duration={0.5} delay={0.5 + i * 0.1}
              />
            )}
          </motion.g>
        );
      })}

      {/* Exception workspace */}
      <motion.g
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {(() => {
          const x = 460, y = 40, w = 220;
          return (
            <>
              <rect x={x} y={y} width={w} height={332} rx={3}
                    fill="rgba(224,79,79,0.06)" stroke="rgba(224,79,79,0.35)" strokeWidth={1} />
              <rect x={x} y={y} width={w} height={4} rx={2} fill="#E04F4F" />
              <text x={x + 16} y={y + 26} fill="#fff" fontFamily="Inter" fontSize="13" fontWeight="700">Exception workspace</text>
              <text x={x + 16} y={y + 44} fill="rgba(224,79,79,0.8)" fontFamily="Inter" fontSize="9" letterSpacing="1.5">REJECTED SUPPLIER ROWS · 3</text>
              <line x1={x + 16} x2={x + w - 16} y1={y + 56} y2={y + 56} stroke="rgba(224,79,79,0.2)" />

              {[
                ["SKU 4029-12-100", "missing PEI"],
                ["SKU 7741-22-150", "img 404"],
                ["SKU 3122-A4-80", "attr mismatch"],
              ].map(([sku, reason], i) => (
                <motion.g
                  key={sku}
                  initial={{ opacity: 0, y: 4 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.12, duration: 0.35 }}
                  viewport={{ once: true, amount: 0.2 }}
                >
                  <rect x={x + 12} y={y + 70 + i * 56} width={w - 24} height={46} rx={2}
                        fill="rgba(224,79,79,0.08)" stroke="rgba(224,79,79,0.25)" />
                  <text x={x + 22} y={y + 90 + i * 56} fill="#fff" fontFamily="Inter" fontSize="11" fontWeight="600">{sku}</text>
                  <text x={x + 22} y={y + 106 + i * 56} fill="rgba(224,79,79,0.85)" fontFamily="Inter" fontSize="10">⚠ {reason}</text>
                </motion.g>
              ))}

              <rect x={x + 12} y={y + 250} width={w - 24} height={62} rx={2}
                    fill="rgba(110,247,110,0.06)" stroke="rgba(110,247,110,0.3)" />
              <text x={x + 22} y={y + 270} fill="#6EF76E" fontFamily="Inter" fontSize="10" fontWeight="700" letterSpacing="0.5">NEVER REACHES STOREFRONT</text>
              <text x={x + 22} y={y + 286} fill="rgba(255,255,255,0.7)" fontFamily="Inter" fontSize="10">Routed to merchandiser</text>
              <text x={x + 22} y={y + 302} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="10">Reviewed · fixed · promoted</text>
            </>
          );
        })()}
      </motion.g>

      <text x={20} y={H - 18} fill="rgba(255,255,255,0.45)" fontFamily="Inter" fontSize="10" letterSpacing="1.5">
        4-LEVEL HIERARCHY · DYNAMIC INHERITANCE · EXCEPTION WORKSPACE · BULK OPS AT SCALE
      </text>
    </svg>
  );
}


// ============================================================
// Outcome 4 — Search + A/B test result (+15% lift)
// ============================================================
function SvgSearch() {
  const W = 700;
  const H = 480;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Semantic search and A/B test result">
      <defs>
        <linearGradient id="srchA" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
      </defs>

      {/* Search bar + results */}
      <motion.g
        initial={{ opacity: 0, y: -6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <text x={20} y={24} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="10" letterSpacing="2">SEMANTIC SEARCH · MATCHES INTENT</text>
        <rect x={20} y={36} width={660} height={42} rx={3}
              fill="rgba(230,231,239,0.04)" stroke="rgba(230,231,239,0.18)" />
        <circle cx={42} cy={57} r={6} fill="none" stroke="rgba(255,255,255,0.55)" strokeWidth={1.5} />
        <line x1={47} x2={54} y1={62} y2={69} stroke="rgba(255,255,255,0.55)" strokeWidth={1.5} />
        <text x={64} y={62} fill="#fff" fontFamily="Inter" fontSize="14" fontWeight="600">paint roller 9 inch</text>
        <text x={660} y={62} fill="rgba(110,247,110,0.85)" fontFamily="Inter" fontSize="11" textAnchor="end">3 matched</text>
      </motion.g>

      {/* Ranked results */}
      {[
        { name: "9-inch roller · medium pile", brand: "Hamilton · stock 142", score: 95, top: true },
        { name: "Nine-inch microfibre roller", brand: "Harris · stock 28", score: 87, top: false },
        { name: "9\" paint frame roller kit", brand: "Wickes · stock 6", score: 71, top: false },
      ].map((r, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, x: -6 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
          viewport={{ once: true, amount: 0.25 }}
        >
          {(() => {
            const x = 20, y = 100 + i * 54, w = 350;
            return (
              <>
                <rect x={x} y={y} width={w} height={46} rx={3}
                      fill={r.top ? "rgba(110,247,110,0.06)" : "rgba(230,231,239,0.03)"}
                      stroke={r.top ? "rgba(110,247,110,0.4)" : "rgba(230,231,239,0.14)"} strokeWidth={1} />
                {r.top && <rect x={x} y={y} width={3} height={46} fill="#6EF76E" />}
                <text x={x + 16} y={y + 20} fill="#fff" fontFamily="Inter" fontSize="12" fontWeight="600">{r.name}</text>
                <text x={x + 16} y={y + 36} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="10">{r.brand}</text>
                <text x={x + w - 16} y={y + 20} fill={r.top ? "#6EF76E" : "rgba(255,255,255,0.7)"} fontFamily="Inter" fontSize="11" fontWeight="700" textAnchor="end">{r.score}%</text>
                <text x={x + w - 16} y={y + 36} fill="rgba(255,255,255,0.45)" fontFamily="Inter" fontSize="9" textAnchor="end">relevance</text>
              </>
            );
          })()}
        </motion.g>
      ))}

      {/* A/B test result chart */}
      <motion.g
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {(() => {
          const x = 410, y = 90, w = 270, h = 290;
          const barWidth = 70;
          const bar1X = x + 35;
          const bar2X = x + 165;
          const bar1H = 85;
          const bar2H = 130;
          const baseline = y + h - 60;
          return (
            <>
              <rect x={x} y={y} width={w} height={h} rx={3}
                    fill="url(#srchA)" stroke="rgba(230,231,239,0.16)" strokeWidth={1} />
              <text x={x + 16} y={y + 24} fill="#fff" fontFamily="Inter" fontSize="13" fontWeight="700">A/B test result</text>
              <text x={x + 16} y={y + 42} fill="rgba(110,247,110,0.8)" fontFamily="Inter" fontSize="9" letterSpacing="1.5">PUBLISHED CASE STUDY</text>
              <text x={x + 16} y={y + 60} fill="rgba(255,255,255,0.6)" fontFamily="Inter" fontSize="11">Hero CTA color · revenue per visitor</text>

              {/* baseline rule */}
              <line x1={x + 16} x2={x + w - 16} y1={baseline} y2={baseline} stroke="rgba(230,231,239,0.18)" />

              {/* Bar 1 — Control */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <rect x={bar1X} y={baseline - bar1H} width={barWidth} height={bar1H}
                      fill="rgba(230,231,239,0.14)" stroke="rgba(230,231,239,0.3)" />
                <text x={bar1X + barWidth / 2} y={baseline - bar1H - 10} fill="rgba(255,255,255,0.7)" fontFamily="Inter" fontSize="12" fontWeight="600" textAnchor="middle">100</text>
                <text x={bar1X + barWidth / 2} y={baseline + 22} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="11" textAnchor="middle">Control</text>
              </motion.g>

              {/* Bar 2 — Variant */}
              <motion.g
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1, duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <rect x={bar2X} y={baseline - bar2H} width={barWidth} height={bar2H}
                      fill="rgba(110,247,110,0.22)" stroke="#6EF76E" strokeWidth={1.2} />
                <text x={bar2X + barWidth / 2} y={baseline - bar2H - 10} fill="#6EF76E" fontFamily="Inter" fontSize="14" fontWeight="700" textAnchor="middle">+15%</text>
                <text x={bar2X + barWidth / 2} y={baseline + 22} fill="rgba(110,247,110,0.85)" fontFamily="Inter" fontSize="11" textAnchor="middle">Variant</text>
              </motion.g>
            </>
          );
        })()}
      </motion.g>

      <text x={20} y={H - 18} fill="rgba(255,255,255,0.45)" fontFamily="Inter" fontSize="10" letterSpacing="1.5">
        SEMANTIC SEARCH · DIY VOCABULARY · TRADE VS DIY SEGMENTS · A/B TESTED
      </text>
    </svg>
  );
}


// ============================================================
// Outcome 5 — Page builder → Headless CMS migration
// ============================================================
function SvgCMS() {
  const W = 700;
  const H = 480;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Page builder to headless CMS migration">
      <defs>
        <linearGradient id="cmsBefore" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(224,79,79,0.08)" />
          <stop offset="100%" stopColor="rgba(224,79,79,0.02)" />
        </linearGradient>
        <linearGradient id="cmsAfter" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(110,247,110,0.1)" />
          <stop offset="100%" stopColor="rgba(110,247,110,0.02)" />
        </linearGradient>
      </defs>

      <text x={20} y={24} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="10" letterSpacing="2">BYGGMAX · 17 PAGE TEMPLATES MAPPED FROM MAGENTO PAGE BUILDER TO AMPLIENCE</text>

      {/* BEFORE — page builder chaos */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {(() => {
          const x = 30, y = 50, w = 280, h = 380;
          return (
            <>
              <rect x={x} y={y} width={w} height={h} rx={3}
                    fill="url(#cmsBefore)" stroke="rgba(224,79,79,0.35)" strokeWidth={1} />
              <rect x={x} y={y} width={w} height={4} rx={2} fill="#E04F4F" />
              <text x={x + 16} y={y + 24} fill="#fff" fontFamily="Inter" fontSize="13" fontWeight="700">Before · page builder</text>
              <text x={x + 16} y={y + 42} fill="rgba(224,79,79,0.85)" fontFamily="Inter" fontSize="9" letterSpacing="1.5">UP TO 15 BLOCKS PER PAGE</text>

              {/* Chaotic block stack */}
              {[0, 1, 2, 3, 4].map((i) => {
                const rotation = (i % 2 === 0 ? -1 : 1) * (1 + i * 0.5);
                const offsetX = i % 2 === 0 ? -4 : 6;
                const yy = y + 70 + i * 56;
                return (
                  <motion.g
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + i * 0.08, duration: 0.35 }}
                    viewport={{ once: true, amount: 0.2 }}
                  >
                    <g transform={`rotate(${rotation} ${x + w / 2 + offsetX} ${yy + 22})`}>
                      <rect x={x + 16 + offsetX} y={yy} width={w - 32} height={44} rx={2}
                            fill="rgba(224,79,79,0.08)" stroke="rgba(224,79,79,0.3)" />
                      <rect x={x + 24 + offsetX} y={yy + 10} width={24} height={24} rx={2} fill="rgba(224,79,79,0.18)" />
                      <line x1={x + 56 + offsetX} x2={x + w - 24 + offsetX} y1={yy + 16} y2={yy + 16} stroke="rgba(255,255,255,0.4)" strokeWidth={1.5} />
                      <line x1={x + 56 + offsetX} x2={x + w - 70 + offsetX} y1={yy + 24} y2={yy + 24} stroke="rgba(255,255,255,0.25)" strokeWidth={1.2} />
                      <line x1={x + 56 + offsetX} x2={x + w - 90 + offsetX} y1={yy + 32} y2={yy + 32} stroke="rgba(255,255,255,0.2)" strokeWidth={1.2} />
                    </g>
                  </motion.g>
                );
              })}
            </>
          );
        })()}
      </motion.g>

      {/* Arrow migration */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.0, duration: 0.4 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <DrawnPath
          d="M 320 230 L 380 230"
          stroke="#6EF76E" strokeWidth={2} duration={0.6} delay={1.1}
        />
        <path d="M 375 224 L 384 230 L 375 236 Z" fill="#6EF76E" />
        <text x={350} y={216} fill="rgba(110,247,110,0.85)" fontFamily="Inter" fontSize="9" letterSpacing="1" textAnchor="middle">MIGRATE</text>
      </motion.g>

      {/* AFTER — headless schema */}
      <motion.g
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {(() => {
          const x = 390, y = 50, w = 280, h = 380;
          return (
            <>
              <rect x={x} y={y} width={w} height={h} rx={3}
                    fill="url(#cmsAfter)" stroke="rgba(110,247,110,0.5)" strokeWidth={1} />
              <rect x={x} y={y} width={w} height={4} rx={2} fill="#6EF76E" />
              <text x={x + 16} y={y + 24} fill="#fff" fontFamily="Inter" fontSize="13" fontWeight="700">After · headless CMS</text>
              <text x={x + 16} y={y + 42} fill="rgba(110,247,110,0.8)" fontFamily="Inter" fontSize="9" letterSpacing="1.5">17 CLEAN CONTENT TYPES</text>

              {/* Code block: schema */}
              <rect x={x + 14} y={y + 60} width={w - 28} height={132} rx={2}
                    fill="rgba(16,19,44,0.55)" stroke="rgba(110,247,110,0.18)" />
              <text x={x + 26} y={y + 80} fill="rgba(110,247,110,0.65)" fontFamily="JetBrains Mono, monospace" fontSize="10">{`{`}</text>
              <text x={x + 38} y={y + 94} fill="rgba(255,255,255,0.85)" fontFamily="JetBrains Mono, monospace" fontSize="10">{`"type": "campaign_block",`}</text>
              <text x={x + 38} y={y + 108} fill="rgba(255,255,255,0.85)" fontFamily="JetBrains Mono, monospace" fontSize="10">{`"id": "spring-build-2026",`}</text>
              <text x={x + 38} y={y + 122} fill="rgba(255,255,255,0.85)" fontFamily="JetBrains Mono, monospace" fontSize="10">{`"region": "SE",`}</text>
              <text x={x + 38} y={y + 136} fill="rgba(255,255,255,0.85)" fontFamily="JetBrains Mono, monospace" fontSize="10">{`"hero": { … },`}</text>
              <text x={x + 38} y={y + 150} fill="rgba(255,255,255,0.85)" fontFamily="JetBrains Mono, monospace" fontSize="10">{`"products": [ … ],`}</text>
              <text x={x + 38} y={y + 164} fill="rgba(255,255,255,0.85)" fontFamily="JetBrains Mono, monospace" fontSize="10">{`"cta": { … }`}</text>
              <text x={x + 26} y={y + 180} fill="rgba(110,247,110,0.65)" fontFamily="JetBrains Mono, monospace" fontSize="10">{`}`}</text>

              {/* Multi-region tabs */}
              <text x={x + 16} y={y + 220} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="9" letterSpacing="1.5">MULTI-REGION VARIANTS</text>
              {["SE", "NO", "DK", "FI"].map((c, i) => {
                const active = i === 0;
                return (
                  <g key={c}>
                    <rect x={x + 16 + i * 60} y={y + 232} width={50} height={26} rx={2}
                          fill={active ? "rgba(110,247,110,0.18)" : "rgba(230,231,239,0.04)"}
                          stroke={active ? "rgba(110,247,110,0.5)" : "rgba(230,231,239,0.14)"} />
                    <text x={x + 16 + i * 60 + 25} y={y + 249} fill={active ? "#6EF76E" : "rgba(255,255,255,0.7)"} fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle">{c}</text>
                  </g>
                );
              })}

              {/* Template registry */}
              <rect x={x + 14} y={y + 280} width={w - 28} height={86} rx={2}
                    fill="rgba(230,231,239,0.03)" stroke="rgba(230,231,239,0.14)" />
              <text x={x + 26} y={y + 300} fill="rgba(255,255,255,0.7)" fontFamily="Inter" fontSize="11" fontWeight="600">Template registry</text>
              <text x={x + w - 24} y={y + 300} fill="#6EF76E" fontFamily="Inter" fontSize="11" fontWeight="700" textAnchor="end">17 live</text>
              {["Campaign block · 4 variants", "Category overlay · 3 variants", "Comparison table · 2 variants"].map((t, i) => (
                <g key={t}>
                  <circle cx={x + 30} cy={y + 320 + i * 16} r={2} fill="#6EF76E" />
                  <text x={x + 40} y={y + 324 + i * 16} fill="rgba(255,255,255,0.75)" fontFamily="Inter" fontSize="10">{t}</text>
                </g>
              ))}
            </>
          );
        })()}
      </motion.g>

      <text x={20} y={H - 18} fill="rgba(255,255,255,0.45)" fontFamily="Inter" fontSize="10" letterSpacing="1.5">
        AI CONTENT-TYPE PROTOTYPE · APRIL 2026 · CO-INNOVATION TRACK
      </text>
    </svg>
  );
}


// ============================================================
// Outcome 6 — Peak resilience: traffic curve through spring + Q4
// ============================================================
function SvgPeak() {
  const W = 700;
  const H = 480;

  // y-axis: capacity %
  // x-axis: time (Jan → Dec)
  const ox = 60;
  const oy = 380;
  const cw = 600;
  const ch = 320;
  const baseline = oy;

  // Two curves through Spring (Apr-May) and Black Friday (Nov)
  const old = [30, 35, 40, 75, 95, 60, 50, 55, 60, 70, 105, 45]; // hits ceiling, crashes
  const fresh = [28, 32, 36, 62, 78, 55, 48, 52, 58, 68, 90, 75]; // stable

  const scale = (v: number) => baseline - (v / 110) * ch;
  const step = cw / (old.length - 1);

  const pathOf = (arr: number[]) =>
    arr.map((v, i) => {
      const x = ox + i * step;
      const y = scale(v);
      if (i === 0) return `M ${x} ${y}`;
      const prevX = ox + (i - 1) * step;
      const prevY = scale(arr[i - 1]);
      const cx1 = prevX + step / 2;
      const cx2 = x - step / 2;
      return `C ${cx1} ${prevY}, ${cx2} ${y}, ${x} ${y}`;
    }).join(" ");

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Peak season resilience curve">
      <defs>
        <linearGradient id="peakOld" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#E04F4F" stopOpacity="0.32" />
          <stop offset="100%" stopColor="#E04F4F" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="peakNew" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6EF76E" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#6EF76E" stopOpacity="0" />
        </linearGradient>
      </defs>

      <text x={ox} y={28} fill="rgba(255,255,255,0.55)" fontFamily="Inter" fontSize="10" letterSpacing="2">% PLATFORM CAPACITY</text>

      {/* Gridlines */}
      {[0, 0.25, 0.5, 0.75, 1].map((p, i) => (
        <line key={i} x1={ox} x2={ox + cw} y1={baseline - p * ch} y2={baseline - p * ch}
              stroke="rgba(230,231,239,0.08)" strokeWidth={1} />
      ))}
      {/* Capacity ceiling */}
      <line x1={ox} x2={ox + cw} y1={scale(100)} y2={scale(100)} stroke="rgba(224,79,79,0.55)" strokeWidth={1} strokeDasharray="4 5" />
      <text x={ox + 4} y={scale(100) - 6} fill="rgba(224,79,79,0.85)" fontFamily="Inter" fontSize="9" textAnchor="start" letterSpacing="0.5">100% CEILING</text>

      {/* Baseline */}
      <line x1={ox} x2={ox + cw} y1={baseline} y2={baseline} stroke="rgba(230,231,239,0.3)" strokeWidth={1} />

      {/* Old stack area + line */}
      <motion.path
        d={`${pathOf(old)} L ${ox + cw} ${baseline} L ${ox} ${baseline} Z`}
        fill="url(#peakOld)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <DrawnPath d={pathOf(old)} stroke="#E04F4F" strokeWidth={2.2} duration={1.6} delay={0.2} />

      {/* New stack area + line */}
      <motion.path
        d={`${pathOf(fresh)} L ${ox + cw} ${baseline} L ${ox} ${baseline} Z`}
        fill="url(#peakNew)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        viewport={{ once: true, amount: 0.3 }}
      />
      <DrawnPath d={pathOf(fresh)} stroke="#6EF76E" strokeWidth={2.2} duration={1.8} delay={0.8} />

      {/* Peak markers */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Spring marker */}
        <line x1={ox + 4 * step} x2={ox + 4 * step} y1={baseline - ch} y2={baseline} stroke="rgba(255,255,255,0.18)" strokeDasharray="2 4" />
        <rect x={ox + 4 * step - 36} y={baseline - ch - 28} width={72} height={20} rx={2}
              fill="rgba(110,247,110,0.18)" stroke="rgba(110,247,110,0.4)" />
        <text x={ox + 4 * step} y={baseline - ch - 14} fill="#6EF76E" fontFamily="Inter" fontSize="10" fontWeight="700" textAnchor="middle">SPRING</text>

        {/* Black Friday marker */}
        <line x1={ox + 10 * step} x2={ox + 10 * step} y1={baseline - ch} y2={baseline} stroke="rgba(255,255,255,0.18)" strokeDasharray="2 4" />
        <rect x={ox + 10 * step - 50} y={baseline - ch - 28} width={100} height={20} rx={2}
              fill="rgba(110,247,110,0.18)" stroke="rgba(110,247,110,0.4)" />
        <text x={ox + 10 * step} y={baseline - ch - 14} fill="#6EF76E" fontFamily="Inter" fontSize="10" fontWeight="700" textAnchor="middle">BLACK FRIDAY</text>
      </motion.g>

      {/* Old crash marker */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <circle cx={ox + 10 * step} cy={scale(105)} r={5} fill="#E04F4F" />
        <line x1={ox + 10 * step + 8} x2={ox + 10 * step + 36} y1={scale(105)} y2={scale(105) - 12} stroke="rgba(224,79,79,0.7)" strokeWidth={1} />
        <text x={ox + 10 * step + 42} y={scale(105) - 8} fill="rgba(224,79,79,0.95)" fontFamily="Inter" fontSize="10" fontWeight="700">OUTAGE</text>
      </motion.g>

      {/* New stable marker */}
      <motion.g
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <circle cx={ox + 10 * step} cy={scale(90)} r={5} fill="#6EF76E" />
        <line x1={ox + 10 * step - 8} x2={ox + 10 * step - 56} y1={scale(90)} y2={scale(90) + 22} stroke="rgba(110,247,110,0.7)" strokeWidth={1} />
        <text x={ox + 10 * step - 60} y={scale(90) + 26} fill="#6EF76E" fontFamily="Inter" fontSize="10" fontWeight="700" textAnchor="end">SITE HOLDS</text>
      </motion.g>

      {/* Legend */}
      <motion.g
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0, duration: 0.4 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <line x1={ox} x2={ox + 24} y1={H - 36} y2={H - 36} stroke="#E04F4F" strokeWidth={2.2} />
        <text x={ox + 32} y={H - 33} fill="rgba(255,255,255,0.75)" fontFamily="Inter" fontSize="11">Before · old stack</text>
        <line x1={ox + 180} x2={ox + 204} y1={H - 36} y2={H - 36} stroke="#6EF76E" strokeWidth={2.2} />
        <text x={ox + 212} y={H - 33} fill="rgba(255,255,255,0.75)" fontFamily="Inter" fontSize="11">After · resilience stack tuned for DIY peaks</text>
      </motion.g>

      <text x={ox} y={H - 12} fill="rgba(255,255,255,0.45)" fontFamily="Inter" fontSize="10" letterSpacing="1.5">
        OPTIMISED FRONTEND · CACHE + QUEUE TUNED · LOAD TESTED ON YOUR REAL CATALOG
      </text>
    </svg>
  );
}


// ============================================================
// OutcomeBlockRow — layout shell (unchanged from original)
// ============================================================
function OutcomeBlockRow({ n, kicker, title, lede, results, diagram, theme, reverse, diagramDark }: OutcomeBlock) {
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
// Outcomes — main export
// ============================================================
export function Outcomes() {
  const items: OutcomeBlock[] = [
    {
      n: "1",
      kicker: "Multi-warehouse truth",
      title: (
        <>
          One <span className="text-[var(--sw-mint)]">stock truth</span> on every product page
        </>
      ),
      lede:
        "Central stock, regional stock, store stock, in-transit. None of it shows on the product page today. The site says 'in stock', the warehouse bay says 'gone'. One reconciled truth per product page, live from your warehouse system. The customer sees where their order ships from before they buy.",
      results: [
        "One reconciled stock truth on every product page, surfaced live from your warehouse system",
        "Origin tag per product page. Customers see which warehouse or store ships their order before they buy",
        "Remote-warehouse flag tells the customer up front when an item ships from a different bay",
        "Reservation locks across bays prevent oversell when two carts compete for the same unit",
        "Persistent store-selector keeps a customer's chosen branch through every page refresh",
        "Dual-source inventory: primary stock plus supplier-direct dropship live in one cart",
      ],
      diagram: <SvgWMS />,
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "2",
      kicker: "Trade and DIY in one storefront",
      title: (
        <>
          Trade and DIY in <span className="text-[var(--sw-blue)]">one storefront</span>
        </>
      ),
      lede:
        "A homeowner and a contractor open the same PDP. One sees €19.99 retail, one unit. The other sees €15.99 ex VAT, one pallet, save €192 vs unit price. Same SKU, two prices, one storefront. Trade and DIY share a catalog without splitting the site in two.",
      results: [
        "Session-based VAT toggle. First-visit modal asks once whether the buyer is B2B or retail",
        "Pallet-count math live on the product page, with savings shown inline as the customer adds units",
        "Tier pricing with promo-rule stacking. Pallet rule plus per-unit promo can run together cleanly",
        "B2B invoice email at checkout for approved trade accounts. No phone calls, no manual workarounds",
        "Quote-to-order workflow with status tracking. Contractor configures, admin approves, back office picks up",
        "Role-based access in one trade account. Buyer, approver, finance, branch manager each with scoped permissions",
      ],
      diagram: <SvgB2B />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "3",
      kicker: "Supplier-fed catalogs that stay clean",
      title: (
        <>
          Supplier-fed catalogs that <span className="text-[var(--sw-mint)]">stay clean</span>
        </>
      ),
      lede:
        "Your category page broke at the weekend because one supplier sent bad CSV. Your merchandiser patches it Monday morning while search results are wrong. We've built the PIM and supplier-feed pipeline that catches exceptions before they reach the storefront, models 4-level family hierarchies with dynamic attribute inheritance, and lets bulk operations run at 2000-SKU scale without timing out.",
      results: [
        "4-level family hierarchy with dynamic attribute inheritance. Parent attributes flow down, children override where needed",
        "Custom save handler beyond stock Akeneo's capability. Supports the hierarchical inheritance the platform itself cannot",
        "Exception workspace catches rejected supplier rows. They surface to a merchandiser, never silently drop to the storefront",
        "Bulk attribute copy with selective inclusion. Modal pulls source SKU, displays per-attribute checkboxes",
        "Completeness scoring with operator filtering. Family-gated publishing means incomplete products cannot go live",
        "Vendor SKU mapping. The same product across three suppliers resolves to one canonical SKU on the storefront",
      ],
      diagram: <SvgCatalog />,
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "4",
      kicker: "Search and personalisation",
      title: (
        <>
          Search built for <span className="text-[var(--sw-blue)]">DIY language</span>
        </>
      ),
      lede:
        "Most DIY sites return doors for 'paint roller 9 inch'. Semantic search trained on DIY vocabulary matches the intent, not the keywords. Personalisation separates trade buyers from homeowners and feeds the right SKUs to each. Small storefront changes compound at scale, validated by A/B testing on the live catalog.",
      results: [
        "Semantic search with DIY synonym dictionaries. Matches 'paint roller 9 inch' to nine-inch roller, paint frame roller, microfibre roller",
        "Multi-language vocabulary. Swedish, Norwegian, Danish, Finnish, English trained on real DIY queries",
        "Personalisation across product page, category, and cart. Trade vs DIY segmentation drives recommended SKUs",
        "Hybrid product-listing loading. Instant skeleton plus async price load cuts perceived load time on large category pages",
        "Image-based color swatches. Real product images per variant, with unavailable combos grayed out so customers never click into dead ends",
        "3D product configurator pattern for SKU ranges where 2D swatches cannot show the variation",
      ],
      diagram: <SvgSearch />,
      theme: "beige",
      reverse: true,
      diagramDark: true,
    },
    {
      n: "5",
      kicker: "Content velocity for seasonal campaigns",
      title: (
        <>
          Headless content for <span className="text-[var(--sw-mint)]">fast campaigns</span>
        </>
      ),
      lede:
        "Your merchandising team stitches 5-15 page-builder blocks to assemble one spring-build landing page. Updates take weeks. Multi-region variants multiply the chaos. Headless CMS migration cuts that to days. Reusable content blocks, multi-region variants from one model, AI-prompted new content types that scaffold themselves without a dev cycle.",
      results: [
        "Headless CMS replaces the page builder. Reusable content types, no more block-stacking marathons for every campaign",
        "Reusable content blocks for campaign banners, category overlays, comparison tables, calculator widgets",
        "Multi-region content from one model. Merchandising team owns updates per market without dev cycles",
        "AI content-type scaffolding. Content lead describes a new block in natural language, the system generates the schema",
        "Preview environment that mirrors production. Sign off before publish, not after",
        "GDPR-compliant tracking wired across all stores. Cookiebot, GTM, GA4 in production from day one",
      ],
      diagram: <SvgCMS />,
      theme: "dark",
      diagramDark: true,
    },
    {
      n: "6",
      kicker: "Built for sales events",
      title: (
        <>
          Resilience for <span className="text-[var(--sw-blue)]">every sales event</span>
        </>
      ),
      lede:
        "A campaign goes live or a sale lands. Traffic doubles overnight. Customer service answers the same questions for two weeks while the platform creaks. The resilience stack absorbs the spike. Long-term-support commerce engine, optimised frontend, caching layers, queue with retry logic, and load testing scripted against your real catalog.",
      results: [
        "Long-term-support commerce engine. Security patched, open-source, no licensing wall",
        "Optimised frontend tested under live peak conditions, not on a blank dev environment",
        "Horizontal scaling with split fleets for cart, catalog, and admin so a spike in one does not break the others",
        "ERP queue with retry logic, dead-letter capture, and saturation alerting before the queue locks up",
        "Search infrastructure tuned for DIY catalog scale and deep family hierarchies",
        "Pre-peak hardening package. Security, performance, QA bundle shipped before each sales event, scripted against the real catalog",
      ],
      diagram: <SvgPeak />,
      theme: "beige",
      reverse: true,
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
              <h2 className="font-head text-white text-[40px] md:text-[68px] lg:text-[88px] leading-[0.98] tracking-[-0.015em] max-w-[14ch]">
                Six modules.{" "}
                <span className="text-[var(--sw-mint)]">All in production.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[46ch]">
                Every module ships as proven, production code. Not concepts. Not roadmap. Configure them against your warehouses, your supplier feeds, and your back office. That is the project.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-5 max-w-[420px]">
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">6</div>
                  <div className="label-code text-white/50 mt-2">Modules</div>
                </div>
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">14</div>
                  <div className="label-code text-white/50 mt-2">Weeks to live</div>
                </div>
                <div>
                  <div className="font-head text-white text-[34px] md:text-[44px] leading-none tabular-nums">3</div>
                  <div className="label-code text-white/50 mt-2">Reference retailers</div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="mt-14 md:mt-20 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
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
