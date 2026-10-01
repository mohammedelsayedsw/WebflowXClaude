"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Plus } from "lucide-react";
import { assetUrl } from "@/lib/assets";
import { OL, Window, Pill, Tick, ease, SectionHead } from "@/sections/operalayer/ui";

function InvoiceApp() {
  const rows = [
    ["Baltic Fasteners SIA", "198,50 €", "mint", "Confirmed"],
    ["Cascade Cable Works GmbH", "274,00 €", "mint", "Ready to export"],
    ["Ferrum Metalworks Ltd", "1 920,00 €", "coral", "Price mismatch"],
    ["Elektra Components UAB", "425,00 €", "mint", "Confirmed"],
    ["Polarveld Industrial Oy", "202,40 €", "amber", "No PO match"],
    ["NordTool Distribution AB", "−23,80 €", "mint", "Credit note"],
  ] as const;
  return (
    <Window title="Invoices · 22 total">
      <div>
        {rows.map(([who, amt, tone, label], i) => (
          <motion.div
            key={who}
            className="flex items-center gap-[1em] px-[5%] py-[0.95em] border-t first:border-t-0"
            style={{ borderColor: OL.line }}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4, ease }}
          >
            <span className="flex-1 truncate">{who}</span>
            <span className="font-mono" style={{ color: OL.dim }}>
              {amt}
            </span>
            <span className="w-[9.5em] flex justify-end">
              <Pill tone={tone}>{label}</Pill>
            </span>
          </motion.div>
        ))}
      </div>
    </Window>
  );
}

function PurchasingApp() {
  const rows = [
    { c: "Running footwear", p: 0.82, flag: false },
    { c: "Outdoor apparel", p: 0.64, flag: true },
    { c: "Team sports", p: 0.71, flag: false },
    { c: "Training apparel", p: 0.58, flag: false },
    { c: "Kids", p: 0.49, flag: true },
  ];
  return (
    <Window title="SS26 season · every supplier brand">
      <div className="px-[5%] pt-[4%] pb-[2%] flex items-end justify-between">
        <div>
          <div style={{ color: OL.faint, fontSize: "0.85em" }}>Committed for the season</div>
          <div className="font-semibold" style={{ fontSize: "2em" }}>
            €34 million
          </div>
        </div>
        <Pill tone="coral">52 invoice differences caught</Pill>
      </div>
      <div className="px-[5%] pb-[5%]">
        {rows.map((r, i) => (
          <div key={r.c} className="grid grid-cols-[9em_minmax(0,1fr)_auto] gap-[1em] items-center py-[0.7em] border-t" style={{ borderColor: OL.line }}>
            <span className="truncate">{r.c}</span>
            <span className="relative h-[0.55em] rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.07)" }}>
              <motion.span
                className="absolute inset-y-0 left-0 rounded-full"
                style={{ background: OL.violet }}
                initial={{ width: 0 }}
                animate={{ width: `${r.p * 100}%` }}
                transition={{ delay: 0.2 + i * 0.08, duration: 0.8, ease }}
              />
            </span>
            <span className="w-[5.5em] flex justify-end">{r.flag ? <Pill tone="coral">Check</Pill> : <Tick on />}</span>
          </div>
        ))}
      </div>
    </Window>
  );
}

function PricingApp() {
  const rows = [
    ["California", "Margin type 3", "+$0.40"],
    ["Texas", "Margin type 1", "no change"],
    ["New York", "Margin type 3", "+$0.60"],
    ["Florida", "Margin type 2", "+$0.20"],
    ["Illinois", "Margin type 5", "no change"],
  ];
  return (
    <Window title="Price update · 50 states">
      <div className="px-[5%] pt-[4%] pb-[2%] flex items-center justify-between gap-3">
        <div>
          <div style={{ color: OL.faint, fontSize: "0.85em" }}>Scheduled for Magento</div>
          <div className="font-semibold" style={{ fontSize: "1.4em" }}>
            Monday, 06:00
          </div>
        </div>
        <Pill tone="violet">8 margin types</Pill>
      </div>
      <div className="px-[5%] pb-[5%]">
        {rows.map(([s, m, d], i) => (
          <motion.div
            key={s}
            className="grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] gap-[1em] py-[0.8em] border-t"
            style={{ borderColor: OL.line }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * 0.07 }}
          >
            <span>{s}</span>
            <span style={{ color: OL.dim }}>{m}</span>
            <span className="font-mono" style={{ color: d.startsWith("+") ? OL.mint : OL.faint }}>
              {d}
            </span>
          </motion.div>
        ))}
      </div>
    </Window>
  );
}

const APPS = [
  {
    key: "invoices",
    name: "Invoice matching",
    erp: "Microsoft Dynamics NAV",
    big: "87%",
    line: "of supplier invoices at a B2B electrical supplier go through with nobody touching them.",
    href: "/operalayer/invoice-matching",
    Visual: InvoiceApp,
  },
  {
    key: "purchasing",
    name: "Supplier purchasing",
    erp: "Microsoft Business Central",
    big: "€34 million",
    line: "of seasonal purchasing across 50+ supplier brands, tracked live by a Baltic sports retailer.",
    href: "/operalayer/supplier-purchasing",
    Visual: PurchasingApp,
  },
  {
    key: "pricing",
    name: "Pricing control",
    erp: "Magento (Adobe Commerce)",
    big: "50 states",
    line: "priced from one set of rules by a US retailer, with updates sent to the store on schedule.",
    href: "/operalayer/pricing-control",
    Visual: PricingApp,
  },
];

const MORE = [
  "Month-end close",
  "Demand forecasting",
  "Reorder suggestions",
  "Vendor scorecards",
  "Competitor price tracking",
  "Single customer view",
  "Churn alerts",
  "Approval flows",
];

export function Apps() {
  const [i, setI] = useState(0);
  const a = APPS[i];
  return (
    <section
      id="apps"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ background: "radial-gradient(1000px 600px at 20% 0%, #24206b 0%, transparent 60%), #0e0f1a" }}
    >
      <div className="wrap">
        <SectionHead
          dark
          title="Apps already running on OperaLayer"
          lede="Each one started as a single process a client kept doing by hand. Pick one to see it."
        />

        <div className="mt-12 flex flex-wrap gap-2" role="tablist">
          {APPS.map((x, j) => (
            <button
              key={x.key}
              type="button"
              role="tab"
              aria-selected={j === i}
              onClick={() => setI(j)}
              className={`rounded-full px-5 py-2.5 font-head font-semibold text-[15px] transition ${
                j === i ? "bg-white text-[#0e0f1a]" : "text-white/70 hover:text-white bg-white/[0.06]"
              }`}
            >
              {x.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={a.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="mt-12 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] gap-12 lg:gap-16 items-center"
          >
            <div>
              <div className="text-white/50 text-[15px]">Runs on {a.erp}</div>
              <div className="mt-4 font-head text-white text-[56px] md:text-[76px] leading-none tracking-[-0.03em]">{a.big}</div>
              <p className="mt-5 text-white/70 text-[18px] leading-relaxed max-w-[34ch]">{a.line}</p>
              <a href={assetUrl(a.href)} className="group mt-8 inline-flex items-center gap-2 font-head font-semibold text-[16px] text-white">
                See the {a.name.toLowerCase()} app
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
            <div style={{ containerType: "inline-size", fontSize: "clamp(10px,1.4cqw,14px)" }}>
              <a.Visual />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-20 pt-10 border-t border-white/10 grid grid-cols-[minmax(0,1fr)] md:grid-cols-[16rem_minmax(0,1fr)] gap-6 items-start">
          <div className="text-white text-[17px] font-head">Apps we build next</div>
          <div className="flex flex-wrap gap-2">
            {MORE.map((m) => (
              <span key={m} className="inline-flex items-center gap-1.5 rounded-full px-3.5 py-2 text-[14px] text-white/75 bg-white/[0.05] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]">
                <Plus className="h-3.5 w-3.5 text-white/40" />
                {m}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
