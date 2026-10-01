"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FileText, Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { useCycle } from "@/sections/operalayer/shared/useCycle";
import { INVOICES } from "./data";
import { StatusChip } from "./StatusChip";

const STEPS = [
  {
    title: "The invoice comes in",
    body: "Your team drops the supplier PDF into OperaLayer, one file or a whole batch at a time.",
  },
  {
    title: "Every line is read",
    body: "The extraction module pulls the supplier, the invoice number, and each line with its quantity and price, whatever the layout.",
  },
  {
    title: "Each line is checked against the PO",
    body: "OperaLayer finds the purchase order in Navision and compares the invoice to it line by line.",
  },
  {
    title: "People decide on the differences",
    body: "Lines with a difference or a low confidence score wait in a review queue for someone on your team.",
  },
  {
    title: "Navision gets a clean file",
    body: "Approved invoices go out as an export Navision can import, with every decision kept in the log.",
  },
];

const inv = INVOICES[0];

function StageIntake() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-6">
      <div className="relative flex h-40 w-full max-w-[340px] items-center justify-center rounded-[4px] border border-dashed border-white/25">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute flex h-20 w-16 flex-col gap-1 rounded-[2px] bg-white p-2"
            initial={{ y: -90, opacity: 0, rotate: (i - 1) * 8 }}
            animate={{ y: 0, opacity: 1, rotate: (i - 1) * 8, x: (i - 1) * 46 }}
            transition={{ delay: 0.15 + i * 0.25, duration: 0.5, ease: "easeOut" }}
          >
            <div className="h-2 w-6 bg-[var(--sw-blue)]/60" />
            {[0, 1, 2, 3].map((k) => (
              <div key={k} className="h-[3px] rounded-full bg-[var(--sw-black)]/25" style={{ width: `${80 - k * 12}%` }} />
            ))}
          </motion.div>
        ))}
      </div>
      <div className="label-code text-white/55">3 supplier PDFs received</div>
    </div>
  );
}

function StageRead() {
  const fields = [
    ["Supplier", inv.supplier],
    ["Invoice", inv.number],
    ["Line 1", inv.lines[0].item],
    ["Qty × price", inv.lines[0].inv],
  ];
  return (
    <div className="grid h-full grid-cols-[110px_1fr] sm:grid-cols-[140px_1fr] items-center gap-5">
      <div className="relative h-44 rounded-[2px] bg-white p-3">
        <div className="h-3 w-10 bg-[var(--sw-blue)]/60" />
        <div className="mt-3 flex flex-col gap-1.5">
          {[0, 1, 2, 3, 4, 5].map((k) => (
            <motion.div
              key={k}
              className="h-[5px] rounded-full"
              style={{ width: `${90 - (k % 3) * 18}%` }}
              initial={{ background: "rgba(16,19,44,0.2)" }}
              animate={{ background: k < 4 ? "rgba(110,247,110,0.9)" : "rgba(16,19,44,0.2)" }}
              transition={{ delay: 0.3 + k * 0.25 }}
            />
          ))}
        </div>
      </div>
      <dl className="min-w-0 border-t border-white/10">
        {fields.map(([k, v], i) => (
          <motion.div
            key={k}
            className="flex items-baseline justify-between gap-3 border-b border-white/10 py-2.5"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + i * 0.25 }}
          >
            <dt className="label-code text-white/45 shrink-0">{k}</dt>
            <dd className="text-white/90 text-[13px] md:text-[14px] truncate">{v}</dd>
          </motion.div>
        ))}
      </dl>
    </div>
  );
}

function StageCompare() {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="grid grid-cols-2 gap-4 label-code text-white/45 mb-3">
        <span>Invoice</span>
        <span>Purchase order in NAV</span>
      </div>
      {inv.lines.map((l, i) => (
        <motion.div
          key={l.item}
          className="grid grid-cols-2 gap-4 border-t border-white/10 py-3 text-[13px] md:text-[14px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 + i * 0.3 }}
        >
          <span className="text-white/80 tabular-nums">{l.inv}</span>
          <span className="flex items-center justify-between gap-2 tabular-nums">
            <span style={{ color: l.status === "agrees" ? "rgba(255,255,255,0.8)" : "var(--sw-orange)" }}>{l.po}</span>
            {l.status === "agrees" ? (
              <Check className="h-4 w-4 text-[var(--sw-mint)] shrink-0" />
            ) : (
              <span className="h-2 w-2 rounded-full bg-[var(--sw-orange)] shrink-0" />
            )}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function StageReview() {
  const l = inv.lines[1];
  return (
    <div className="flex h-full flex-col justify-center gap-5">
      <div className="flex items-center justify-between gap-3">
        <div className="font-head text-white text-[16px]">{l.item}</div>
        <StatusChip status={l.status} />
      </div>
      <div className="grid grid-cols-2 border-t border-white/10">
        <div className="py-3 pr-3 border-r border-white/10">
          <div className="label-code text-white/45">Invoice</div>
          <div className="mt-1 text-[var(--sw-orange)] tabular-nums text-[18px]">88.90</div>
        </div>
        <div className="py-3 pl-4">
          <div className="label-code text-white/45">PO price</div>
          <div className="mt-1 text-white/85 tabular-nums text-[18px]">84.50</div>
        </div>
      </div>
      <div>
        <div className="flex justify-between label-code text-white/45 mb-2">
          <span>Read confidence</span>
          <span>{l.conf}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full bg-[var(--sw-mint)]"
            initial={{ width: 0 }}
            animate={{ width: `${l.conf}%` }}
            transition={{ duration: 0.9, delay: 0.2 }}
          />
        </div>
      </div>
      <div className="flex gap-2">
        <span className="rounded-[2px] border border-[var(--sw-beige)]/60 px-4 py-2 text-[13px] text-[var(--sw-beige)] font-head font-semibold">Approve</span>
        <span className="rounded-[2px] border border-white/20 px-4 py-2 text-[13px] text-white/70 font-head font-semibold">Reject</span>
      </div>
    </div>
  );
}

function StageExport() {
  const rows = ["INV 48213", "2026-11904", "F-77031"];
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="flex items-center gap-3 mb-5">
        <FileText className="h-5 w-5 text-[var(--sw-mint)]" />
        <span className="font-head text-white text-[15px]">nav-import.csv</span>
      </div>
      {rows.map((r, i) => (
        <motion.div
          key={r}
          className="flex items-center justify-between border-t border-white/10 py-3 text-[13px] md:text-[14px]"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 + i * 0.3 }}
        >
          <span className="text-white/80 tabular-nums">{r}</span>
          <span className="label-code text-[var(--sw-mint)]">Ready to import</span>
        </motion.div>
      ))}
    </div>
  );
}

const STAGES = [StageIntake, StageRead, StageCompare, StageReview, StageExport];

export function HowItWorks() {
  const { ref, index, pick } = useCycle(STEPS.length, 5200);
  const [picked, setPicked] = useState(false);
  const Stage = STAGES[index];

  return (
    <section id="how-it-works" className="bg-[var(--sw-black)] py-28 md:py-36 scroll-mt-20">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[54px] leading-[1.05] max-w-[18ch]">
            How a supplier invoice goes through
          </h2>
        </Reveal>

        <div ref={ref} className="mt-14 md:mt-16 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-16 items-stretch">
          <ol className="border-t border-white/10">
            {STEPS.map((s, i) => {
              const on = i === index;
              return (
                <li key={s.title} className="border-b border-white/10">
                  <button
                    type="button"
                    onClick={() => {
                      pick(i);
                      setPicked(true);
                    }}
                    className="relative w-full text-left py-5 pl-10 pr-2"
                    aria-expanded={on}
                  >
                    <span
                      className="absolute left-0 top-5 label-code transition"
                      style={{ color: on ? "var(--sw-mint)" : "rgba(255,255,255,0.4)" }}
                    >
                      {i + 1}
                    </span>
                    <span
                      className={`block font-head text-[18px] md:text-[20px] leading-tight transition ${
                        on ? "text-white" : "text-white/55 hover:text-white/85"
                      }`}
                    >
                      {s.title}
                    </span>
                    <AnimatePresence initial={false}>
                      {on && (
                        <motion.span
                          className="block overflow-hidden"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="block pt-2 text-white/70 text-[15px] leading-relaxed max-w-[44ch]">
                            {s.body}
                          </span>
                        </motion.span>
                      )}
                    </AnimatePresence>
                    {on && !picked && (
                      <motion.span
                        key={`bar-${index}`}
                        className="absolute left-0 bottom-[-1px] h-px bg-[var(--sw-mint)]"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 5.2, ease: "linear" }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ol>

          <div
            className="relative min-h-[340px] md:min-h-[380px] rounded-[4px] border border-white/10 p-6 md:p-8"
            style={{ background: "linear-gradient(160deg, #1a1f4d 0%, #10132c 70%)" }}
          >
            <div className="label-code text-white/40 mb-4">Step {index + 1} of {STEPS.length}</div>
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                className="h-[280px] md:h-[300px]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Stage />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
