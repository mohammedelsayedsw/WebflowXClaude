"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

function SvgWarehouseFlow() {
  const W = 720;
  const H = 520;

  // Three warehouse sources on the left, normalization in the middle, storefront on the right
  const sources: { id: string; title: string; sub: string; y: number; color: string; status: string }[] = [
    { id: "central", title: "Central DC", sub: "Live · 24/7 feed", y: 60, color: "#3F4AAF", status: "12,418 SKU" },
    { id: "regional", title: "Regional hubs · ×4", sub: "Hourly polling", y: 200, color: "#3F4AAF", status: "8,213 SKU" },
    { id: "store", title: "Store bays · ×80", sub: "30-min sync", y: 340, color: "#3F4AAF", status: "1,604 SKU" },
  ];

  const hubX = 290;
  const hubY = 200;
  const hubW = 170;
  const hubH = 220;

  const cardX = 0;
  const cardW = 220;
  const cardH = 96;

  const storeX = 510;
  const storeW = 200;

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img" aria-label="Multi-warehouse stock normalization to storefront">
      <defs>
        <linearGradient id="hubGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#6EF76E" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#6EF76E" stopOpacity="0.04" />
        </linearGradient>
      </defs>

      {/* Source cards */}
      {sources.map((s, i) => {
        const midY = s.y + cardH / 2;
        return (
          <motion.g
            key={s.id}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 + i * 0.1, duration: 0.45 }}
            viewport={{ once: true, amount: 0.25 }}
          >
            <rect
              x={cardX}
              y={s.y}
              width={cardW}
              height={cardH}
              rx={3}
              fill="#ffffff"
              stroke="rgba(16,19,44,0.12)"
              strokeWidth={1}
            />
            <rect x={cardX} y={s.y} width={cardW} height={4} rx={2} fill={s.color} />
            <text x={cardX + 18} y={s.y + 30} fill="#10132C" fontFamily="Inter" fontSize="13" fontWeight="700">
              {s.title}
            </text>
            <text x={cardX + 18} y={s.y + 50} fill="rgba(16,19,44,0.55)" fontFamily="Inter" fontSize="11">
              {s.sub}
            </text>
            <rect
              x={cardX + 18}
              y={s.y + 62}
              width={108}
              height={20}
              rx={2}
              fill="rgba(63,74,175,0.08)"
              stroke="rgba(63,74,175,0.18)"
            />
            <text x={cardX + 24} y={s.y + 76} fill="#3F4AAF" fontFamily="Inter" fontSize="10" fontWeight="600" letterSpacing="0.5">
              {s.status}
            </text>

            {/* feeder */}
            <DrawnPath
              d={`M ${cardX + cardW} ${midY} C ${cardX + cardW + 30} ${midY}, ${hubX - 30} ${hubY + hubH / 2}, ${hubX} ${hubY + hubH / 2}`}
              stroke={s.color}
              strokeOpacity={0.55}
              strokeWidth={1.3}
              strokeDasharray="4 5"
              duration={0.7}
              delay={0.5 + i * 0.08}
            />
            {/* packet dot animation */}
            <motion.circle
              r={3}
              fill={s.color}
              initial={{ cx: cardX + cardW, cy: midY, opacity: 0 }}
              animate={{
                cx: [cardX + cardW, hubX],
                cy: [midY, hubY + hubH / 2],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                delay: 1.4 + i * 0.4,
                duration: 1.3,
                repeat: Infinity,
                repeatDelay: 2.5,
                times: [0, 0.2, 0.8, 1],
              }}
            />
          </motion.g>
        );
      })}

      {/* Hub – normalization */}
      <motion.g
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <rect x={hubX} y={hubY} width={hubW} height={hubH} rx={4} fill="url(#hubGrad)" stroke="#6EF76E" strokeOpacity={0.5} strokeWidth={1} />
        <text x={hubX + hubW / 2} y={hubY + 40} fill="#10132C" fontFamily="Inter" fontSize="13" fontWeight="700" textAnchor="middle">
          Normalization
        </text>
        <text x={hubX + hubW / 2} y={hubY + 60} fill="#10132C" fontFamily="Inter" fontSize="13" fontWeight="700" textAnchor="middle">
          + reconciliation
        </text>
        <line x1={hubX + 20} x2={hubX + hubW - 20} y1={hubY + 80} y2={hubY + 80} stroke="rgba(16,19,44,0.12)" />
        {[
          ["Origin tag", "warehouse_id"],
          ["Lock", "transfer_in"],
          ["Truth", "available_now"],
          ["Ledger", "tx_log"],
        ].map(([k, v], i) => (
          <g key={k}>
            <text x={hubX + 18} y={hubY + 105 + i * 24} fill="#10132C" fontFamily="Inter" fontSize="11" fontWeight="600">
              {k}
            </text>
            <text x={hubX + hubW - 18} y={hubY + 105 + i * 24} fill="#3F4AAF" fontFamily="Inter" fontSize="10" textAnchor="end">
              {v}
            </text>
          </g>
        ))}
      </motion.g>

      {/* Storefront card on the right */}
      <motion.g
        initial={{ opacity: 0, x: 10 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        viewport={{ once: true, amount: 0.25 }}
      >
        <rect x={storeX} y={170} width={storeW} height={180} rx={3} fill="#ffffff" stroke="rgba(16,19,44,0.12)" strokeWidth={1} />
        <rect x={storeX} y={170} width={storeW} height={4} rx={2} fill="#6EF76E" />
        <text x={storeX + 18} y={196} fill="#10132C" fontFamily="Inter" fontSize="13" fontWeight="700">
          Storefront PDP
        </text>
        <text x={storeX + 18} y={214} fill="rgba(16,19,44,0.55)" fontFamily="Inter" fontSize="11">
          What the parent sees
        </text>
        <line x1={storeX + 18} x2={storeX + storeW - 18} y1={224} y2={224} stroke="rgba(16,19,44,0.08)" />
        <text x={storeX + 18} y={246} fill="#10132C" fontFamily="Inter" fontSize="12" fontWeight="600">
          In stock
        </text>
        <text x={storeX + storeW - 18} y={246} fill="#0A6E3A" fontFamily="Inter" fontSize="12" fontWeight="600" textAnchor="end">
          178
        </text>
        <text x={storeX + 18} y={272} fill="#10132C" fontFamily="Inter" fontSize="11">
          Available now
        </text>
        <text x={storeX + storeW - 18} y={272} fill="#3F4AAF" fontFamily="Inter" fontSize="11" textAnchor="end">
          156
        </text>
        <text x={storeX + 18} y={295} fill="#10132C" fontFamily="Inter" fontSize="11">
          Ships from
        </text>
        <text x={storeX + storeW - 18} y={295} fill="rgba(16,19,44,0.65)" fontFamily="Inter" fontSize="11" textAnchor="end">
          Central DC
        </text>
        <rect x={storeX + 18} y={310} width={storeW - 36} height={24} rx={2} fill="#6EF76E" fillOpacity={0.18} stroke="#6EF76E" strokeOpacity={0.5} />
        <text x={storeX + storeW / 2} y={326} fill="#0A6E3A" fontFamily="Inter" fontSize="11" fontWeight="700" textAnchor="middle" letterSpacing="0.5">
          ONE SOURCE OF TRUTH
        </text>
      </motion.g>

      {/* Hub to storefront */}
      <DrawnPath
        d={`M ${hubX + hubW} ${hubY + hubH / 2} C ${hubX + hubW + 30} ${hubY + hubH / 2}, ${storeX - 30} 260, ${storeX} 260`}
        stroke="#6EF76E"
        strokeOpacity={0.7}
        strokeWidth={1.5}
        duration={1.0}
        delay={1.0}
      />
      <motion.circle
        r={3.5}
        fill="#6EF76E"
        initial={{ cx: hubX + hubW, cy: hubY + hubH / 2, opacity: 0 }}
        animate={{
          cx: [hubX + hubW, storeX],
          cy: [hubY + hubH / 2, 260],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          delay: 2.4,
          duration: 1.4,
          repeat: Infinity,
          repeatDelay: 1.5,
          times: [0, 0.2, 0.8, 1],
        }}
      />
    </svg>
  );
}


export function Differentiator() {
  const decisions = [
    {
      n: "1",
      title: "Multi-warehouse is the architecture",
      body:
        "Stock is not a number on a product. It is a graph of central, regional, store, and in-transit positions with origin tags and reservation locks. The storefront sees one truth per request.",
      tag: "inventory",
    },
    {
      n: "2",
      title: "Trade and DIY share one catalog",
      body:
        "Tiered pricing, role-based access, gated SKUs, bulk PO upload, and credit terms are first-class. A homeowner and a contractor open the same PDP and see two different worlds.",
      tag: "accounts",
    },
    {
      n: "3",
      title: "Supplier feeds run through a clean pipe",
      body:
        "PIM-first or supplier-feed-first depending on where you start. Family hierarchies with dynamic attribute inheritance. Vendor mapping that resolves duplicate-supplier SKUs to one canonical product. Bad CSV never reaches the storefront.",
      tag: "catalog",
    },
  ];

  return (
    <section
      id="differentiator"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden text-[var(--sw-black)]"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />

      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[60px] leading-[1.04] max-w-[24ch]">
            Multi-warehouse, multi-supplier, multi-channel{" "}
            <span className="text-[var(--sw-blue)]">is the architecture, not a feature</span>
          </h2>
          <p className="mt-6 text-[15px] md:text-[17px] text-[var(--sw-black)]/70 leading-relaxed max-w-[62ch]">
            Every module in this stack flows from one modeling decision. Treat stock origin, account type, and supplier feed as first-class entities. Linked, audited, reconciled. Generic platforms get this wrong. It is what makes every downstream feature work.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid lg:grid-cols-[0.95fr_1.2fr] gap-10 lg:gap-16 items-stretch">
          <div className="flex flex-col">
            {decisions.map((d, i) => (
              <Reveal key={d.n} delay={i * 0.1}>
                <div className="relative flex gap-5 md:gap-6 py-6 md:py-7 border-b border-[var(--sw-black)]/10 last:border-0">
                  <div
                    className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white font-head font-semibold text-[13px] text-[var(--sw-blue)]"
                    style={{ border: "1.5px solid rgba(63,74,175,0.4)" }}
                  >
                    {d.n}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="font-head text-[var(--sw-black)] text-[20px] md:text-[22px] leading-snug">
                        {d.title}
                      </h3>
                      <span className="label-code px-2 py-0.5 rounded-[2px] border border-[var(--sw-blue)]/25 text-[var(--sw-blue)]/80">
                        {d.tag}
                      </span>
                    </div>
                    <p className="text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed max-w-[54ch]">
                      {d.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div
              className="relative rounded-[6px] h-full flex flex-col overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, rgba(63,74,175,0.05) 0%, rgba(63,74,175,0.01) 100%)",
                border: "1px solid rgba(63,74,175,0.14)",
              }}
            >
              <div className="flex-1 flex items-center justify-center px-5 md:px-7 py-10 md:py-14">
                <SvgWarehouseFlow />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
