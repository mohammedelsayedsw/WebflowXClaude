"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * One product, twelve records, no agreement.
 *
 * Drawn as SVG so it scales exactly at every breakpoint, and so the twelve
 * cards can fan out from the single source chip on load. Under
 * prefers-reduced-motion the cards render straight into their final slots.
 *
 * Two layouts share the same code: three columns from `sm` up, two columns on
 * phones, where three would shrink the record text past reading size.
 */

type Rec = { source: string; field: string; value: string; clash?: boolean };

const RECORDS: Rec[] = [
  { source: "Launch spreadsheet", field: "Price", value: "£129.00" },
  { source: "ERP extension", field: "Price", value: "£129.99", clash: true },
  { source: "Shared drive", field: "Weight", value: "2.4 kg" },
  { source: "Marketplace listing", field: "Weight", value: "2.6 kg", clash: true },
  { source: "Partner datasheet", field: "Spec", value: "v1.2" },
  { source: "German site", field: "Spec", value: "v2.0", clash: true },
  { source: "Website CMS", field: "Colour", value: "Blue" },
  { source: "Supplier feed", field: "Colour", value: "Navy", clash: true },
  { source: "Print catalogue", field: "Length", value: "40 cm" },
  { source: "Sales deck", field: "Length", value: "42 cm", clash: true },
  { source: "Old export", field: "SKU", value: "1041" },
  { source: "Import file", field: "SKU", value: "1041-A", clash: true },
];

/** Small fixed tilts, so the wall of records reads as a mess rather than a table. */
const TILT = [-1.4, 0.9, -0.7, 1.2, -1.1, 0.6, 1.4, -0.9, 0.8, -1.2, 1.1, -0.6];

const CARD_H = 66;
const GAP_X = 14;
const GAP_Y = 13;
const GRID_Y = 118;
const PAD_X = 15;

function Diagram({ cols, cardW }: { cols: number; cardW: number }) {
  const reduce = useReducedMotion();

  const vbW = PAD_X * 2 + cols * cardW + (cols - 1) * GAP_X;
  const rows = Math.ceil(RECORDS.length / cols);
  const vbH = GRID_Y + rows * CARD_H + (rows - 1) * GAP_Y + 20;
  const sourceCx = vbW / 2;
  const chipW = Math.min(192, vbW - 40);

  const slot = (i: number) => ({
    x: PAD_X + (i % cols) * (cardW + GAP_X),
    y: GRID_Y + Math.floor(i / cols) * (CARD_H + GAP_Y),
  });

  return (
    <svg
      viewBox={`0 0 ${vbW} ${vbH}`}
      className="w-full h-auto"
      role="img"
      aria-label="One product held as twelve conflicting records across spreadsheets, an ERP, a shared drive, a marketplace listing and a partner datasheet, each with a different price, weight, spec or SKU"
    >
      {/* connectors, drawn under the cards */}
      <g stroke="rgba(255,255,255,0.14)" strokeWidth="1" fill="none">
        {RECORDS.map((r, i) => {
          const s = slot(i);
          return (
            <motion.path
              key={`line-${r.source}`}
              d={`M ${sourceCx} 78 C ${sourceCx} ${GRID_Y - 24}, ${
                s.x + cardW / 2
              } ${GRID_Y - 30}, ${s.x + cardW / 2} ${s.y}`}
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: reduce ? 0 : 0.7,
                delay: reduce ? 0 : 0.25 + i * 0.035,
                ease: "easeOut",
              }}
            />
          );
        })}
      </g>

      {/* the single product, at the top */}
      <motion.g
        initial={reduce ? false : { opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: reduce ? 0 : 0.5, ease: "easeOut" }}
      >
        <rect
          x={sourceCx - chipW / 2}
          y={16}
          width={chipW}
          height={62}
          rx={4}
          fill="rgba(110,247,110,0.10)"
          stroke="rgba(110,247,110,0.45)"
        />
        <text
          x={sourceCx}
          y={40}
          textAnchor="middle"
          fill="rgba(255,255,255,0.55)"
          fontSize="10.5"
          letterSpacing="1.6"
          fontFamily="var(--font-golos), sans-serif"
        >
          ONE PRODUCT
        </text>
        <text
          x={sourceCx}
          y={62}
          textAnchor="middle"
          fill="#ffffff"
          fontSize="17"
          fontWeight="600"
          fontFamily="var(--font-golos), sans-serif"
        >
          Trail jacket, SKU 1041
        </text>
      </motion.g>

      {/* the twelve versions, fanning out of the chip */}
      {RECORDS.map((r, i) => {
        const s = slot(i);
        const cx = s.x + cardW / 2;
        const cy = s.y + CARD_H / 2;
        return (
          <motion.g
            key={r.source}
            initial={
              reduce
                ? false
                : {
                    opacity: 0,
                    x: sourceCx - cx,
                    y: 47 - cy,
                    scale: 0.55,
                    rotate: 0,
                  }
            }
            animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: TILT[i] }}
            transition={{
              duration: reduce ? 0 : 0.75,
              delay: reduce ? 0 : 0.3 + i * 0.055,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{ transformOrigin: `${cx}px ${cy}px` }}
          >
            <rect
              x={s.x}
              y={s.y}
              width={cardW}
              height={CARD_H}
              rx={4}
              fill="rgba(255,255,255,0.045)"
              stroke="rgba(255,255,255,0.14)"
            />
            <text
              x={s.x + 12}
              y={s.y + 24}
              fill="rgba(255,255,255,0.5)"
              fontSize="10"
              letterSpacing="0.9"
              fontFamily="var(--font-golos), sans-serif"
            >
              {r.source.toUpperCase()}
            </text>
            <text
              x={s.x + 12}
              y={s.y + 47}
              fill="rgba(255,255,255,0.45)"
              fontSize="12.5"
              fontFamily="var(--font-golos), sans-serif"
            >
              {r.field}
            </text>
            <text
              x={s.x + cardW - 12}
              y={s.y + 47}
              textAnchor="end"
              fill={r.clash ? "var(--sw-orange)" : "rgba(255,255,255,0.92)"}
              fontSize="14"
              fontWeight="600"
              fontFamily="var(--font-golos), sans-serif"
            >
              {r.value}
            </text>
          </motion.g>
        );
      })}
    </svg>
  );
}

export function HeroVisual() {
  return (
    <div className="w-full max-w-[560px] mx-auto lg:mx-0 lg:ml-auto">
      <div className="hidden sm:block">
        <Diagram cols={3} cardW={170} />
      </div>
      <div className="sm:hidden">
        <Diagram cols={2} cardW={168} />
      </div>
    </div>
  );
}
