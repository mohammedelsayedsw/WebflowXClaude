"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { AppFrame } from "@/sections/operalayer/shared/AppFrame";

/**
 * Before and after for the buyers' data. Left: the scattered sources the
 * retailer described (one order sheet per supplier brand, supplier email, and
 * purchase orders in Business Central). Right: the one table OperaLayer builds
 * from them. Tiles land first, then the arrow draws, then the rows fill in.
 */
const SHEETS = 54;

const EMAILS = [
  "Re: SS26 order confirmation (rev 3)",
  "Updated delivery dates for March",
  "Invoice attached, see new prices",
  "Correction to the price list",
];

const POS = ["PO-26-0412", "PO-26-0413", "PO-26-0419", "PO-26-0427"];

const ROWS = [
  { group: "Running footwear", confirmed: "€8.6M", ordered: "€8.6M", status: "ok" },
  { group: "Outdoor apparel", confirmed: "€7.2M", ordered: "€7.1M", status: "flag" },
  { group: "Team sports", confirmed: "€5.4M", ordered: "€5.4M", status: "ok" },
  { group: "Training apparel", confirmed: "€4.9M", ordered: "€4.9M", status: "ok" },
  { group: "Kids", confirmed: "€3.8M", ordered: "€3.7M", status: "flag" },
];

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Sheet({ i }: { i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: 0.02 * i, ease }}
      className="relative h-[22px] w-[18px] rounded-[1px] border border-[var(--sw-black)]/20 bg-white overflow-hidden"
      aria-hidden
    >
      <div className="h-[4px] bg-[var(--sw-black)]/15" />
      <div className="mt-[3px] mx-[3px] space-y-[3px]">
        <div className="h-px bg-[var(--sw-black)]/15" />
        <div className="h-px bg-[var(--sw-black)]/15" />
        <div className="h-px bg-[var(--sw-black)]/15" />
      </div>
    </motion.div>
  );
}

export function BeforeSources() {
  return (
    <section id="before" className="bg-lp-bright py-28 md:py-36 overflow-hidden">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-end">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/50 mb-5">The retailer</div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[52px] leading-[1.05] max-w-[16ch]">
              Where purchasing data lived before
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[52ch]">
              A Baltic sports and apparel retailer with more than €100 million in revenue buys from
              over 50 supplier brands. Business Central held the purchase orders, while seasonal
              commitments and invoice checks lived in spreadsheets and email.
            </p>
            <p className="mt-4 text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[52ch]">
              Buyers put the season together by hand, one brand at a time. The work did not fit
              naturally in the ERP, and it was too specific to justify a full ERP customization.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1fr_80px_1fr] gap-8 lg:gap-0 items-center">
          {/* Before */}
          <div className="border-t border-[var(--sw-black)]/15">
            <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-4 py-6 border-b border-[var(--sw-black)]/15">
              <div>
                <div className="font-head text-[var(--sw-black)] text-[15px] md:text-[16px]">Order sheets</div>
                <div className="mt-1 text-[13px] text-[var(--sw-black)]/55">One per supplier brand</div>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {Array.from({ length: SHEETS }).map((_, i) => (
                  <Sheet key={i} i={i} />
                ))}
              </div>
            </div>
            <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-4 py-6 border-b border-[var(--sw-black)]/15">
              <div>
                <div className="font-head text-[var(--sw-black)] text-[15px] md:text-[16px]">Supplier email</div>
                <div className="mt-1 text-[13px] text-[var(--sw-black)]/55">Confirmations and changes</div>
              </div>
              <ul className="space-y-1.5 min-w-0">
                {EMAILS.map((e, i) => (
                  <motion.li
                    key={e}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease }}
                    className="flex items-center gap-2 text-[12px] md:text-[13px] text-[var(--sw-black)]/75 min-w-0"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--sw-blue)]" />
                    <span className="truncate">{e}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-[120px_1fr] md:grid-cols-[150px_1fr] gap-4 py-6 border-b border-[var(--sw-black)]/15">
              <div>
                <div className="font-head text-[var(--sw-black)] text-[15px] md:text-[16px]">Business Central</div>
                <div className="mt-1 text-[13px] text-[var(--sw-black)]/55">Purchase orders</div>
              </div>
              <div className="flex flex-wrap gap-2">
                {POS.map((p, i) => (
                  <motion.span
                    key={p}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.4, delay: 1 + i * 0.08 }}
                    className="label-code rounded-[2px] border border-[var(--sw-black)]/15 bg-white px-2 py-1 text-[var(--sw-black)]/70"
                  >
                    {p}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div className="flex lg:flex-col items-center justify-center" aria-hidden>
            <svg viewBox="0 0 80 40" className="w-16 lg:w-20 h-10 rotate-90 lg:rotate-0">
              <motion.path
                d="M4 20 H70"
                stroke="var(--sw-blue)"
                strokeWidth={1.5}
                fill="none"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8, delay: 1.3, ease }}
              />
              <motion.path
                d="M62 12 L72 20 L62 28"
                stroke="var(--sw-blue)"
                strokeWidth={1.5}
                fill="none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.3, delay: 2 }}
              />
            </svg>
          </div>

          {/* After */}
          <Reveal delay={0.2}>
            <AppFrame module="supplier purchasing" tone="light">
              <div className="px-4 md:px-5 py-2">
                <div className="grid grid-cols-[1.4fr_0.8fr_0.8fr_auto] gap-x-3 py-2 label-code text-[var(--sw-black)]/45">
                  <span>Category</span>
                  <span className="text-right">Confirmed</span>
                  <span className="text-right">In BC</span>
                  <span className="w-16 text-right">Check</span>
                </div>
                {ROWS.map((r, i) => (
                  <motion.div
                    key={r.group}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 2.1 + i * 0.12, ease }}
                    className="grid grid-cols-[1.4fr_0.8fr_0.8fr_auto] gap-x-3 items-center py-2.5 border-t border-[var(--sw-black)]/[0.08] text-[12px] md:text-[13px]"
                  >
                    <span className="truncate text-[var(--sw-black)]">{r.group}</span>
                    <span className="text-right tabular-nums text-[var(--sw-black)]/75">{r.confirmed}</span>
                    <span className="text-right tabular-nums text-[var(--sw-black)]/75">{r.ordered}</span>
                    <span
                      className={`w-16 text-right text-[11px] font-medium ${
                        r.status === "ok" ? "text-[var(--sw-blue)]" : "text-[var(--sw-orange)]"
                      }`}
                    >
                      {r.status === "ok" ? "Agrees" : "Differs"}
                    </span>
                  </motion.div>
                ))}
              </div>
              <div className="px-4 md:px-5 py-3 border-t border-[var(--sw-black)]/10 text-[12px] text-[var(--sw-black)]/55">
                One table for every brand, refreshed from the sources above
              </div>
            </AppFrame>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
