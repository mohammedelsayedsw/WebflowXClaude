"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

type Mod = { name: string; dept: string; body: string; start?: boolean; page?: string };

const MODULES: Mod[] = [
  { name: "AI invoice matching", dept: "Procurement", start: true, page: "invoice-matching", body: "Reads any supplier PDF, checks each line against the purchase order, and sends only the exceptions to a person." },
  { name: "Supplier purchasing intelligence", dept: "Procurement", start: true, page: "supplier-purchasing", body: "Seasonal commitments, brand reconciliation, and invoice variance flags in one view for your buyers." },
  { name: "Executive dashboard", dept: "Insight", start: true, body: "One board-ready screen where every number has one definition across departments, live from your systems." },
  { name: "Month-end close", dept: "Finance", start: true, body: "Close in days instead of weeks, with reconciliations and variance checks done automatically." },
  { name: "Single customer view", dept: "Customer", body: "Every order, contact, payment, and ticket for a customer in one place." },
  { name: "Churn detection", dept: "Customer", body: "Flags accounts that are about to go quiet while there is still time to call them." },
  { name: "Demand forecasting", dept: "Demand", body: "SKU-level forecasts that account for seasonality, campaigns, and supply." },
  { name: "Reorder automation", dept: "Demand", body: "Draft purchase orders that are ready for a buyer to approve." },
  { name: "Pricing control", dept: "Pricing", page: "pricing-control", body: "Price rules by region, state, or channel, recalculated and scheduled to your store." },
  { name: "Pricing protection", dept: "Pricing", body: "Repricing that keeps margin in view, with people approving the calls that matter." },
  { name: "Competitor price tracking", dept: "Pricing", body: "A live feed of competitor prices with alerts on the SKUs that matter most." },
  { name: "Anomaly and margin alerts", dept: "Finance", body: "Quiet by default and sent to the right owner when something looks wrong." },
  { name: "Vendor scorecards", dept: "Procurement", body: "On-time delivery, price changes, and defect rates in one live view per vendor." },
  { name: "Sync between systems", dept: "Operations", body: "The updates people now chase by email, done automatically and logged." },
  { name: "Approval flows", dept: "Operations", body: "The right approver gets the right context and deadline, with escalation and a full log." },
  { name: "Questions to your data", dept: "Insight", body: "Ask a question in a sentence and get an answer that uses the same definitions as your dashboards." },
];

const DEPTS = ["All", ...Array.from(new Set(MODULES.map((m) => m.dept)))];

export function ModuleMenu() {
  const [dept, setDept] = useState("All");
  const shown = dept === "All" ? MODULES : MODULES.filter((m) => m.dept === dept);

  return (
    <section id="modules" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-end">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/50 mb-5">Modules</div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[54px] leading-[1.05] max-w-[18ch]">
              Pick the module for the gap that{" "}
              <span className="text-[var(--sw-blue)]">costs you most</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[48ch]">
              Most clients start with one of the four marked below and add more over
              the first six months. If your problem is not on the list, we scope a
              module for it the same way.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12 flex flex-wrap gap-2" role="tablist" aria-label="Filter modules by department">
            {DEPTS.map((d) => {
              const n = d === "All" ? MODULES.length : MODULES.filter((m) => m.dept === d).length;
              const active = d === dept;
              return (
                <button
                  key={d}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setDept(d)}
                  className={`inline-flex items-center gap-2 rounded-[2px] border px-3.5 py-2 text-[14px] transition ${
                    active
                      ? "border-[var(--sw-black)] bg-[var(--sw-black)] text-white"
                      : "border-[var(--sw-black)]/15 bg-white text-[var(--sw-black)]/75 hover:border-[var(--sw-black)]/40"
                  }`}
                >
                  {d}
                  <span className={`tabular-nums text-[12px] ${active ? "text-white/60" : "text-[var(--sw-black)]/40"}`}>{n}</span>
                </button>
              );
            })}
          </div>
        </Reveal>

        <div className="mt-8 border-t border-[var(--sw-black)]/20">
          <AnimatePresence initial={false} mode="popLayout">
            {shown.map((m) => {
              const Row = (
                <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[17rem_8rem_1fr_7rem] gap-x-8 gap-y-1.5 py-5 items-baseline">
                  <div className="font-head text-[var(--sw-black)] text-[17px] md:text-[19px] leading-tight flex items-center gap-2.5">
                    {m.name}
                    {m.page && <ArrowUpRight className="h-4 w-4 text-[var(--sw-blue)] shrink-0" />}
                  </div>
                  <div className="label-code text-[var(--sw-black)]/45">{m.dept}</div>
                  <div className="text-[14px] md:text-[15px] text-[var(--sw-black)]/65 leading-relaxed">{m.body}</div>
                  <div className="md:text-right">
                    {m.start && (
                      <span className="inline-flex items-center gap-2 label-code text-[var(--sw-blue)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--sw-blue)]" />
                        Common start
                      </span>
                    )}
                  </div>
                </div>
              );
              return (
                <motion.div
                  key={m.name}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="border-b border-[var(--sw-black)]/12"
                >
                  {m.page ? (
                    <a href={assetUrl(`/operalayer/${m.page}`)} className="block hover:bg-white/70 transition -mx-3 px-3">
                      {Row}
                    </a>
                  ) : (
                    Row
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
