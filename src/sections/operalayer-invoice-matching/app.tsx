"use client";

import { Building2, Check, FileText, Home, Inbox, Minus, ShoppingCart, Truck, X } from "lucide-react";
import { Logo } from "@/sections/operalayer-invoice-matching/kit";

/*
 * The OperaLayer app, drawn for the page: one window, one type scale (Inter, Golos for titles),
 * 2px corners, grey structure, colour only where a record agrees or disagrees.
 * The data is the example invoice from Anton's copy: INV-2846 against PO-1048 and GR-1170.
 */

export type Tone = "review" | "hold" | "ok" | "bad" | "idle";
const DOT: Record<Tone, string> = { review: "var(--amber)", hold: "var(--accent)", ok: "var(--green)", bad: "var(--red)", idle: "var(--t3)" };

export function Status({ tone, children, pulse = false, light = false }: { tone: Tone; children: React.ReactNode; pulse?: boolean; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 font-body font-medium text-[12.5px] whitespace-nowrap ${light ? "text-white" : "text-[var(--ink)]"}`}>
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

const NAV: [typeof Home, string][] = [
  [Home, "Home"],
  [Inbox, "Inbox"],
  [FileText, "Invoices"],
  [Truck, "Delivery notes"],
  [ShoppingCart, "Purchase orders"],
  [Building2, "Suppliers"],
];

/** The app window: ink sidebar, a bar with where you are, then the screen. */
export function Window({
  crumbs,
  right,
  children,
  active = "Invoices",
  sidebar = true,
  className = "",
}: {
  crumbs: string[];
  right?: React.ReactNode;
  children: React.ReactNode;
  active?: string;
  sidebar?: boolean;
  className?: string;
}) {
  return (
    <div className={`relative flex bg-white rounded-[2px] overflow-hidden text-[var(--ink)] ${className}`} style={{ boxShadow: "var(--win-shadow)" }}>
      {sidebar && (
        <aside aria-hidden className="hidden lg:flex w-[172px] shrink-0 flex-col bg-[var(--ink)] py-4">
          <div className="flex items-center gap-2 px-4">
            <Logo className="h-[20px] w-auto" />
            <span className="font-head font-semibold text-[14px] text-white">OperaLayer</span>
          </div>
          <div className="mt-5 grid gap-0.5 px-2">
            {NAV.map(([Icon, label]) => (
              <span
                key={label}
                className={`flex items-center gap-2.5 rounded-[2px] px-2.5 py-[7px] font-body text-[12.5px] ${label === active ? "bg-white/10 text-white font-medium" : "text-white/50"}`}
              >
                <Icon className="h-[15px] w-[15px]" strokeWidth={1.75} />
                {label}
              </span>
            ))}
          </div>
        </aside>
      )}
      <div className="min-w-0 flex-1 flex flex-col">
        <div className="flex items-center justify-between gap-4 h-11 px-4 md:px-5 border-b border-[var(--line)]">
          <div className="flex items-center gap-2 min-w-0 font-body text-[12.5px] text-[var(--t3)]">
            {crumbs.map((c, n) => (
              <span key={c} className={`flex items-center gap-2 ${n === crumbs.length - 1 ? "text-[var(--ink)] font-medium" : "max-sm:hidden"}`}>
                {n > 0 && <span className="text-[var(--t3)] max-sm:hidden">/</span>}
                {c}
              </span>
            ))}
          </div>
          {right}
        </div>
        {children}
      </div>
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

/** The supplier's document as it arrives. `active` marks a line; `scan` plays the reading band once. */
export function Paper({ active = -1, scan = false, className = "" }: { active?: number; scan?: boolean; className?: string }) {
  const flagged = "rounded-[2px] bg-[rgba(229,72,77,0.1)] text-[var(--red)] font-semibold px-1 -mx-1";
  return (
    <div className={`relative overflow-hidden bg-white rounded-[2px] border border-[var(--line)] ${className}`}>
      {scan && <div aria-hidden className="ol-scan pointer-events-none absolute inset-x-0 top-0 h-[38%] bg-[linear-gradient(180deg,rgba(42,85,245,0),rgba(42,85,245,0.14)_70%,rgba(42,85,245,0.3))] border-b border-[var(--accent)]" />}
      <div className="flex items-start justify-between gap-4 px-5 pt-5">
        <div className="font-body font-medium text-[12px] text-[var(--t2)]">Supplier invoice</div>
        <div className="text-right">
          <div className="font-head font-bold text-[18px] leading-none tracking-[0.01em] text-[var(--ink)]">INVOICE</div>
          <div className="mt-2 font-body font-semibold text-[11px] text-[var(--ink)]">No. INV-2846</div>
          <div className="mt-0.5 font-body text-[10.5px] text-[var(--t3)]">PO ref: PO-1048</div>
        </div>
      </div>
      <div className="mt-6 px-5 pb-5">
        <div className="grid grid-cols-[20px_minmax(0,1fr)_auto_52px] gap-x-2.5 pb-2 border-b border-[var(--line)] font-body font-medium text-[10px] text-[var(--t3)]">
          <span>Line</span>
          <span>Item</span>
          <span className="text-right">Qty</span>
          <span className="text-right">Unit price</span>
        </div>
        {LINES.map((r, k) => {
          const on = k === active;
          return (
            <div
              key={r.n}
              className={`grid grid-cols-[20px_minmax(0,1fr)_auto_52px] gap-x-2.5 items-center py-2.5 -mx-2 px-2 rounded-[2px] font-body text-[12px] leading-[1.3] tabular-nums text-[var(--ink)] transition-colors duration-300 ${
                on ? "bg-[rgba(42,85,245,0.07)]" : ""
              }`}
            >
              <span className="text-[var(--t3)]">{r.n}</span>
              <span className="min-w-0">
                <span className={on && r.flag === "item" ? flagged : ""}>{r.item}</span>
              </span>
              <span className="text-right whitespace-nowrap">
                <span className={on && r.flag === "qty" ? flagged : ""}>{r.qty}</span>
              </span>
              <span className="text-right">
                <span className={on && r.flag === "price" ? flagged : ""}>{r.price}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** A value that disagrees. */
export function Bad({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <span className={`inline-block rounded-[2px] bg-[rgba(229,72,77,0.1)] px-1.5 font-semibold text-[var(--red)] ${className}`}>{children}</span>;
}
