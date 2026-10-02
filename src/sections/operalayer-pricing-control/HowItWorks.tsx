"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { H2, Rise, useSeq } from "@/sections/operalayer/kit/parts";
import { C, Window, Tag, Tick, AppButton, ease } from "@/sections/operalayer/kit/ui";

/* 1. Every state keeps its own rules */
function Rules() {
  const { ref, t } = useSeq(5, 160, 200);
  const rows = [
    ["Texas", "Excise rule TX-2", "Margin type 1", ".99"],
    ["California", "Excise rule CA-4", "Margin type 3", ".90"],
    ["New York", "Excise rule NY-1", "Margin type 3", ".90"],
    ["Florida", "Excise rule FL-2", "Margin type 2", ".99"],
    ["Ohio", "Excise rule OH-3", "Margin type 5", ".49"],
  ];
  return (
    <div ref={ref}>
      <Window title="Rules · 50 states · 8 margin types">
        <div className="px-[1.5em] py-[1em]">
          <div className="grid grid-cols-[1.1fr_1.2fr_1.2fr_0.6fr] gap-[1em] pb-[0.6em]" style={{ color: C.faint, fontSize: "0.85em" }}>
            <span>State</span>
            <span>Excise and tax</span>
            <span>Margin</span>
            <span className="text-right">Ends in</span>
          </div>
          {rows.map((r, i) => (
            <motion.div
              key={r[0]}
              className="grid grid-cols-[1.1fr_1.2fr_1.2fr_0.6fr] gap-[1em] py-[0.75em] border-t"
              style={{ borderColor: C.line }}
              initial={false}
              animate={{ opacity: t > i ? 1 : 0, y: t > i ? 0 : 6 }}
              transition={{ duration: 0.4, ease }}
            >
              <span className="font-semibold">{r[0]}</span>
              <span style={{ color: C.dim }}>{r[1]}</span>
              <span style={{ color: C.dim }}>{r[2]}</span>
              <span className="text-right font-mono">{r[3]}</span>
            </motion.div>
          ))}
          <div className="pt-[0.9em] border-t" style={{ borderColor: C.line, color: C.faint, fontSize: "0.85em" }}>
            45 more states
          </div>
        </div>
      </Window>
    </div>
  );
}

/* 2. A cost change reprices every state */
function Recalc() {
  const { ref, t } = useSeq(6, 380, 400);
  const rows = [
    ["Texas", "$21.49", "$21.99"],
    ["California", "$24.50", "$24.90"],
    ["New York", "$26.20", "$26.90"],
    ["Florida", "$22.10", "$22.49"],
    ["Ohio", "$23.49", "$23.99"],
  ];
  return (
    <div ref={ref}>
      <Window title="Cost change · Product 10442">
        <div className="px-[1.5em] py-[1.2em]">
          <div className="flex flex-wrap items-center gap-[1em]">
            <span style={{ color: C.dim }}>Supplier cost</span>
            <span className="font-mono line-through" style={{ color: C.faint }}>
              $13.80
            </span>
            <span className="font-mono font-semibold" style={{ fontSize: "1.25em" }}>
              $14.20
            </span>
            <span className="ml-auto">
              <Tag tone={t >= 6 ? "mint" : "blue"}>{t >= 6 ? "50 of 50 states repriced" : `${Math.min(50, t * 10)} of 50 states`}</Tag>
            </span>
          </div>
          <div className="mt-[1em]">
            {rows.map((r, i) => (
              <div key={r[0]} className="grid grid-cols-[1fr_auto_auto_auto] gap-[1.2em] items-center py-[0.7em] border-t" style={{ borderColor: C.line }}>
                <span>{r[0]}</span>
                <span className="font-mono" style={{ color: C.faint }}>
                  {r[1]}
                </span>
                <motion.span className="font-mono font-semibold" initial={false} animate={{ opacity: t > i ? 1 : 0.15 }}>
                  {r[2]}
                </motion.span>
                <Tick on={t > i} />
              </div>
            ))}
          </div>
        </div>
      </Window>
    </div>
  );
}

/* 3. A person reviews and approves */
function Approve() {
  const { ref, t } = useSeq(3, 900, 500);
  return (
    <div ref={ref}>
      <Window title="Review · price update 2026-10-05">
        <div className="px-[1.5em] py-[1.2em]">
          <div className="grid grid-cols-3 gap-[1em]">
            {[
              ["States changing", "50"],
              ["Biggest rise", "+$0.70"],
              ["Margin types used", "8"],
            ].map(([k, v]) => (
              <div key={k} className="py-[0.8em] border-t" style={{ borderColor: C.line }}>
                <div style={{ color: C.faint, fontSize: "0.85em" }}>{k}</div>
                <div className="mt-[0.3em] font-semibold font-mono" style={{ fontSize: "1.5em" }}>
                  {v}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-[1em] space-y-[0.5em]">
            {[
              ["New York", "+$0.70", 1],
              ["Texas", "+$0.50", 0.72],
              ["Ohio", "+$0.50", 0.72],
              ["California", "+$0.40", 0.57],
            ].map(([s, d, w]) => (
              <div key={s as string} className="grid grid-cols-[6.5em_1fr_auto] gap-[1em] items-center">
                <span style={{ color: C.dim }}>{s}</span>
                <span className="h-[0.5em] rounded-[1px] overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
                  <motion.span
                    className="block h-full origin-left"
                    style={{ width: `${(w as number) * 100}%`, background: C.blue }}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: t >= 1 ? 1 : 0 }}
                    transition={{ duration: 0.7, ease }}
                  />
                </span>
                <span className="font-mono">{d}</span>
              </div>
            ))}
          </div>
          <div className="mt-[1.4em] flex flex-wrap items-center justify-between gap-3">
            <span style={{ color: C.dim, fontSize: "0.9em" }}>{t >= 3 ? "Approved by the pricing manager" : "Waiting for approval"}</span>
            <AppButton state={t >= 3 ? 2 : t >= 2 ? 1 : 0} idle="Approve" busy="Approve" done="Approved" />
          </div>
        </div>
      </Window>
    </div>
  );
}

/* 4. Sent to Magento on schedule */
function Schedule() {
  const { ref, t } = useSeq(4, 650, 400);
  const steps = [
    ["Approved", "Friday 16:20"],
    ["Price file built for 50 states", "Monday 05:55"],
    ["Sent through the Magento API", "Monday 06:00"],
    ["Live on the store", "Monday 06:01"],
  ];
  return (
    <div ref={ref}>
      <Window title="Schedule · Magento (Adobe Commerce)">
        <div className="px-[1.5em] py-[1.2em]">
          {steps.map(([k, v], i) => (
            <div key={k} className="grid grid-cols-[auto_1fr_auto] gap-[1em] items-center py-[0.95em] border-t first:border-t-0" style={{ borderColor: C.line }}>
              <Tick on={t > i} />
              <span style={{ color: t > i ? C.text : C.faint }}>{k}</span>
              <span className="font-mono" style={{ color: C.faint, fontSize: "0.9em" }}>
                {v}
              </span>
            </div>
          ))}
          <div className="mt-[0.8em] h-[0.35em] rounded-[1px] overflow-hidden" style={{ background: "rgba(255,255,255,0.06)" }}>
            <motion.div
              className="h-full origin-left"
              style={{ background: C.mint }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: t / 4 }}
              transition={{ duration: 0.6, ease }}
            />
          </div>
        </div>
      </Window>
    </div>
  );
}

/* 5. Next: competitor prices with gap alerts */
function Competitors() {
  const { ref, t } = useSeq(4, 600, 400);
  const rows = [
    ["Product 10442", "Texas", "$21.99", "$22.40", false],
    ["Product 20871", "New York", "$33.90", "$31.50", true],
    ["Product 10977", "Florida", "$18.49", "$18.60", false],
  ] as const;
  return (
    <div ref={ref}>
      <Window title="Competitor prices · being added">
        <div className="px-[1.5em] py-[1em]">
          <div className="grid grid-cols-[1.4fr_1fr_1fr_auto] gap-[1em] pb-[0.6em]" style={{ color: C.faint, fontSize: "0.85em" }}>
            <span>Product</span>
            <span className="text-right">Your price</span>
            <span className="text-right">Lowest rival</span>
            <span className="w-[6.5em]" />
          </div>
          {rows.map(([p, s, ours, rival, alert], i) => (
            <motion.div
              key={p}
              className="grid grid-cols-[1.4fr_1fr_1fr_auto] gap-[1em] items-center py-[0.8em] border-t"
              style={{ borderColor: C.line }}
              initial={false}
              animate={{ backgroundColor: alert && t > i ? "rgba(255,90,49,0.07)" : "rgba(0,0,0,0)" }}
            >
              <span className="min-w-0">
                <span className="block truncate">{p}</span>
                <span style={{ color: C.faint, fontSize: "0.85em" }}>{s}</span>
              </span>
              <span className="text-right font-mono">{ours}</span>
              <motion.span className="text-right font-mono" initial={false} animate={{ color: alert && t > i ? C.orange : C.dim }}>
                {rival}
              </motion.span>
              <span className="w-[6.5em] flex justify-end">{alert && t > i ? <Tag tone="orange">7% gap</Tag> : <Tag tone="dim">Within range</Tag>}</span>
            </motion.div>
          ))}
          <motion.div
            className="mt-[1em] flex flex-wrap items-center justify-between gap-3 rounded-[2px] px-[1em] py-[0.8em]"
            style={{ background: "rgba(255,255,255,0.04)", boxShadow: `inset 0 0 0 1px ${C.line}` }}
            initial={false}
            animate={{ opacity: t >= 4 ? 1 : 0.3 }}
          >
            <span style={{ color: C.dim }}>Suggested for New York: $31.90, with the margin still above your limit</span>
            <AppButton state={t >= 4 ? 1 : 0} idle="Approve" busy="Approve" done="Approved" />
          </motion.div>
        </div>
      </Window>
    </div>
  );
}

const STEPS = [
  {
    tab: "Rules",
    title: "Every state keeps its own rules",
    body: "Excise and sales tax differ from state to state. Each state carries its own rule, one of eight margin types, and how its prices should end.",
    Visual: Rules,
  },
  {
    tab: "Recalculate",
    title: "A cost change reprices every state at once",
    body: "When a supplier cost moves, all 50 state prices are worked out again from the rules. Nobody edits a formula.",
    Visual: Recalc,
  },
  {
    tab: "Approve",
    title: "A person approves before anything changes",
    body: "The pricing manager sees what changes and by how much. Nothing reaches the store until it is approved.",
    Visual: Approve,
  },
  {
    tab: "Schedule",
    title: "Magento gets the new prices on schedule",
    body: "Approved prices go to Magento through its API at the time you choose, so the store changes at the hour you pick.",
    Visual: Schedule,
  },
  {
    tab: "Next",
    title: "Competitor prices with gap alerts",
    body: "The retailer is now adding a feed of competitor prices. When a rival undercuts by more than the set gap, a new price is suggested and a person decides.",
    Visual: Competitors,
  },
];

export function HowItWorks() {
  const [i, setI] = useState(0);
  const s = STEPS[i];
  return (
    <section id="how" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <Rise>
          <h2 className={H2}>How a price gets to the store</h2>
        </Rise>
        <div className="mt-10 overflow-x-auto -mx-5 px-5">
          <div className="inline-flex rounded-[2px] border border-white/20 p-1">
            {STEPS.map((x, j) => (
              <button
                key={x.tab}
                type="button"
                onClick={() => setI(j)}
                className={`h-9 px-4 text-[14px] font-semibold rounded-[2px] transition whitespace-nowrap ${
                  j === i ? "bg-[var(--sw-beige)] text-[var(--sw-black)]" : "text-white/70 hover:text-white"
                }`}
              >
                {j + 1}. {x.tab}
              </button>
            ))}
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={s.tab}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="mt-12 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            <div className="lg:col-span-5">
              <h3 className="font-head text-white text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.015em]">{s.title}</h3>
              <p className="mt-5 text-white/70 text-[17px] leading-[1.6] max-w-[30rem]">{s.body}</p>
              {i < STEPS.length - 1 && (
                <button type="button" onClick={() => setI(i + 1)} className="mt-8 font-head font-semibold text-[16px] text-[var(--sw-mint)] hover:text-white transition">
                  Next: {STEPS[i + 1].tab} →
                </button>
              )}
            </div>
            <div className="lg:col-span-7" style={{ containerType: "inline-size" }}>
              <div style={{ fontSize: "clamp(11px, 2cqw, 15px)" }}>
                <s.Visual />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
