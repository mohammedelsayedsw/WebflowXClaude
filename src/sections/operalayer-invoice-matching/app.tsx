"use client";

import { Check, Minus, X } from "lucide-react";
import { Logo } from "@/sections/operalayer-invoice-matching/kit";

/*
 * The OperaLayer app, drawn for the page: one plain window, one type scale (Inter, Golos for titles),
 * 2px corners, grey structure, colour only where a record agrees or disagrees.
 * The data is the example invoice from Anton's copy: INV-2846 against PO-1048 and GR-1170.
 */

export type Tone = "review" | "hold" | "ok" | "bad" | "idle";
const DOT: Record<Tone, string> = { review: "var(--amber)", hold: "var(--accent)", ok: "var(--green)", bad: "var(--red)", idle: "var(--t3)" };

export function Status({ tone, children, pulse = false, light = false, className = "" }: { tone: Tone; children: React.ReactNode; pulse?: boolean; light?: boolean; className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-body font-medium text-[12.5px] whitespace-nowrap ${light ? "text-white" : "text-[var(--ink)]"} ${className}`}>
      <span className={`h-[7px] w-[7px] rounded-[1px] ${pulse ? "ol-pulse" : ""}`} style={{ background: DOT[tone] }} />
      {children}
    </span>
  );
}

/** Agrees, disagrees, or was not recorded. */
export function Mark({ v, className = "" }: { v: boolean | null; className?: string }) {
  if (v === null) return <Minus aria-label="not recorded" className={`h-4 w-4 text-[var(--t3)] ${className}`} strokeWidth={2} />;
  return v ? (
    <Check aria-label="agrees" className={`h-4 w-4 text-[var(--green)] ${className}`} strokeWidth={2.75} />
  ) : (
    <X aria-label="differs" className={`h-4 w-4 text-[var(--red)] ${className}`} strokeWidth={2.75} />
  );
}

/** The app window: a bar with where you are, then the screen. */
export function Window({
  crumbs,
  right,
  children,
  brand = false,
  className = "",
}: {
  crumbs: string[];
  right?: React.ReactNode;
  children: React.ReactNode;
  /** Show the OperaLayer mark at the start of the bar. */
  brand?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative bg-white rounded-[2px] overflow-hidden text-[var(--ink)] ${className}`} style={{ boxShadow: "var(--win-shadow)" }}>
      <div className="flex items-center justify-between gap-4 h-11 sm:h-12 px-4 sm:px-8 lg:px-10 border-b border-[var(--line)]">
        <div className="flex items-center gap-3 min-w-0 font-body text-[12.5px] sm:text-[13px] text-[var(--t3)]">
          {brand && (
            <span className="flex items-center gap-2 pr-3 border-r border-[var(--line)]">
              <Logo className="h-[18px] w-auto" />
              <span className="font-head font-semibold text-[13.5px] text-[var(--ink)] max-sm:hidden">OperaLayer</span>
            </span>
          )}
          <span className="flex items-center gap-2 min-w-0">
            {crumbs.map((c, n) => (
              <span key={c} className={`flex items-center gap-2 ${n === crumbs.length - 1 ? "text-[var(--ink)] font-medium" : "max-sm:hidden"}`}>
                {n > 0 && <span className="text-[var(--t3)] max-sm:hidden">/</span>}
                {c}
              </span>
            ))}
          </span>
        </div>
        {right}
      </div>
      {children}
    </div>
  );
}

/* ============================================================
   The example invoice
   ============================================================ */

/** The three lines of INV-2846 that the copy follows, and how each compares with the order and the receipt. */
export const LINES = [
  { n: "04", item: "M20 cable gland", qty: "1,000", price: "€5.10", po: false, rec: true, flag: "price" },
  { n: "11", item: "Junction boxes", qty: "100 cartons", price: "€30", po: true, rec: false, flag: "qty" },
  { n: "14", item: "LP-3000 · 3,000 K", qty: "60 panels", price: "€28", po: false, rec: null, flag: "item" },
] as const;

/** A value that disagrees. */
export function Bad({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`inline-block rounded-[2px] bg-[rgba(229,72,77,0.1)] px-1.5 font-semibold text-[var(--red)] ${className}`}>{children}</span>;
}
