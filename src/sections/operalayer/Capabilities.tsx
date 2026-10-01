"use client";

import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { AppFrame } from "@/sections/operalayer/shared/AppFrame";
import { useCycle } from "@/sections/operalayer/shared/useCycle";

const ITEMS = [
  {
    key: "visibility",
    title: "Visibility",
    body: "Views that cannot exist today because the data sits in three systems with three definitions.",
    examples: ["One view of a customer, order, or SKU", "Executive dashboards across systems", "Drill-downs for each department"],
  },
  {
    key: "prediction",
    title: "Prediction",
    body: "The forward-looking numbers your team now builds by hand on Friday afternoon, ready while there is still time to act.",
    examples: ["Demand and inventory forecasts", "Churn and revenue risk", "Margin and anomaly alerts"],
  },
  {
    key: "automation",
    title: "Automation",
    body: "Decisions that repeat every week and need a person only to press the button. People stay in the loop wherever judgment matters.",
    examples: ["Reorders and replenishment", "Sync and checks between systems", "Approvals sent to the right person"],
  },
] as const;

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function VisibilityStage() {
  const fields = [
    { k: "Customer", v: "Trade customer, Germany", src: "CRM" },
    { k: "Account ID", v: "C-10442 · W-88120 · S-5531", src: "3 systems" },
    { k: "Open orders", v: "4 orders · €18,240", src: "ERP" },
    { k: "Last web order", v: "12 days ago", src: "eCommerce" },
    { k: "Unpaid invoices", v: "1 · €2,410 · 9 days overdue", src: "Finance", warn: true },
    { k: "Open tickets", v: "2 · delivery question", src: "Support" },
  ];
  return (
    <div className="p-5 md:p-6">
      <div className="label-code text-white/45 mb-4">One customer, six sources</div>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {fields.map((f, i) => (
          <motion.div
            key={f.k}
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.09, duration: 0.45, ease }}
            className="grid grid-cols-[1fr_auto] sm:grid-cols-[8.5rem_1fr_auto] gap-x-4 gap-y-0.5 py-3 text-[13px] md:text-[14px] items-baseline"
          >
            <span className="text-white/50">{f.k}</span>
            <span
              className="order-3 sm:order-none col-span-2 sm:col-span-1"
              style={{ color: f.warn ? "var(--sw-orange)" : "white" }}
            >
              {f.v}
            </span>
            <span className="label-code text-white/40 text-right">{f.src}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PredictionStage() {
  const actual = [42, 46, 44, 51, 49, 55, 58, 54, 61];
  const fc = [61, 64, 62, 68, 71, 69, 74];
  const all = [...actual, ...fc.slice(1)];
  const w = 100;
  const h = 56;
  const max = 85;
  const x = (i: number) => (i / (all.length - 1)) * w;
  const y = (v: number) => h - (v / max) * h;
  const actualD = actual.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(2)} ${y(v).toFixed(2)}`).join(" ");
  const off = actual.length - 1;
  const fcD = fc.map((v, i) => `${i ? "L" : "M"}${x(off + i).toFixed(2)} ${y(v).toFixed(2)}`).join(" ");
  const band =
    fc.map((v, i) => `${i ? "L" : "M"}${x(off + i).toFixed(2)} ${y(v + 2 + i * 1.6).toFixed(2)}`).join(" ") +
    " " +
    [...fc]
      .reverse()
      .map((v, j) => {
        const i = fc.length - 1 - j;
        return `L${x(off + i).toFixed(2)} ${y(v - 2 - i * 1.6).toFixed(2)}`;
      })
      .join(" ") +
    " Z";
  return (
    <div className="p-5 md:p-6">
      <div className="flex items-baseline justify-between gap-4 mb-4">
        <div className="label-code text-white/45">Weekly demand, SKU group A</div>
        <div className="label-code text-white/45">Forecast · 6 weeks</div>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="w-full h-44 md:h-52" preserveAspectRatio="none" aria-hidden>
        {[0.25, 0.5, 0.75].map((g) => (
          <line key={g} x1="0" x2={w} y1={h * g} y2={h * g} stroke="rgba(255,255,255,0.08)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
        ))}
        <motion.path d={band} fill="rgba(110,247,110,0.12)" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} />
        <motion.path
          d={actualD}
          fill="none"
          stroke="white"
          strokeWidth={1.75}
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.path
          d={fcD}
          fill="none"
          stroke="var(--sw-mint)"
          strokeWidth={1.75}
          strokeDasharray="3 3"
          vectorEffect="non-scaling-stroke"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        />
        <line x1={x(off)} x2={x(off)} y1="0" y2={h} stroke="rgba(255,255,255,0.25)" strokeWidth={1} strokeDasharray="2 3" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="mt-3 flex justify-between label-code text-white/35">
        <span>8 weeks ago</span>
        <span>Today</span>
        <span>+6 weeks</span>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        className="mt-5 flex items-start gap-3 border-l-2 border-[var(--sw-orange)] bg-white/[0.04] px-4 py-3"
      >
        <div className="text-[13px] md:text-[14px] text-white/85 leading-snug">
          Stock covers demand until week 4. Reorder by Thursday to avoid a gap.
          <span className="block mt-1 text-white/45">Sent to the category buyer</span>
        </div>
      </motion.div>
    </div>
  );
}

function AutomationStage() {
  const rows = [
    { a: "Reorder 240 units, SKU 10-4471", who: "Rule", st: "Done automatically", ok: true },
    { a: "Sync 38 price changes to the store", who: "Schedule", st: "Done automatically", ok: true },
    { a: "Reorder 1,200 units, new supplier", who: "Above €10,000", st: "Waiting for approval", ok: false },
    { a: "Credit note for a damaged delivery", who: "Exception", st: "Waiting for approval", ok: false },
    { a: "Match 64 delivery notes to orders", who: "Rule", st: "Done automatically", ok: true },
  ];
  return (
    <div className="p-5 md:p-6">
      <div className="label-code text-white/45 mb-4">This morning&apos;s actions</div>
      <div className="divide-y divide-white/10 border-y border-white/10">
        {rows.map((r, i) => (
          <motion.div
            key={r.a}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="grid grid-cols-[1fr_auto] gap-x-4 gap-y-1 py-3 items-center"
          >
            <div className="min-w-0">
              <div className="text-white text-[13px] md:text-[14px] truncate">{r.a}</div>
              <div className="text-white/40 text-[12px]">{r.who}</div>
            </div>
            {r.ok ? (
              <span className="label-code text-[var(--sw-mint)]"><span className="hidden sm:inline">{r.st}</span><span className="sm:hidden">Done</span></span>
            ) : (
              <span className="inline-flex items-center rounded-[2px] border border-[var(--sw-beige)]/60 px-2.5 py-1 label-code text-[var(--sw-beige)]">
                Approve
              </span>
            )}
          </motion.div>
        ))}
      </div>
      <div className="mt-4 text-[13px] text-white/50">
        3 actions ran on their own. 2 need a person, because they cross a limit you set.
      </div>
    </div>
  );
}

export function Capabilities() {
  const { ref, index, pick } = useCycle(ITEMS.length, 6500);
  const item = ITEMS[index];
  return (
    <section id="capabilities" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(900px 600px at 10% 100%, rgba(63,74,175,0.25), transparent 60%)" }}
      />
      <div className="wrap relative" ref={ref}>
        <Reveal>
          <div className="label-code text-white/55 mb-5">What the apps do</div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[54px] leading-[1.05] max-w-[20ch]">
            What each module does{" "}
            <span className="text-[var(--sw-mint)]">for your team</span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-16 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-14 items-start">
          <div className="border-t border-white/15">
            {ITEMS.map((it, i) => {
              const active = i === index;
              return (
                <button
                  key={it.key}
                  type="button"
                  onClick={() => pick(i)}
                  className="relative block w-full text-left border-b border-white/10 py-6 md:py-7"
                  aria-expanded={active}
                >
                  <span className="absolute left-0 right-0 -top-px h-px bg-white/10 overflow-hidden">
                    {active && (
                      <motion.span
                        key={`bar-${index}`}
                        className="absolute inset-y-0 left-0 bg-[var(--sw-mint)]"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 6.5, ease: "linear" }}
                      />
                    )}
                  </span>
                  <div className="flex items-baseline gap-4">
                    <span className={`label-code ${active ? "text-[var(--sw-mint)]" : "text-white/35"}`}>{i + 1}</span>
                    <span className={`font-head text-[24px] md:text-[30px] leading-none transition ${active ? "text-white" : "text-white/45"}`}>
                      {it.title}
                    </span>
                  </div>
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 pl-8 text-white/75 text-[15px] md:text-[16px] leading-relaxed max-w-[46ch]">{it.body}</p>
                        <ul className="pt-4 pl-8 space-y-1.5">
                          {it.examples.map((e) => (
                            <li key={e} className="text-[14px] text-white/55 flex gap-2.5 items-center">
                              <span className="h-1 w-1 rounded-full bg-white/40" />
                              {e}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          <div className="lg:sticky lg:top-28">
            <AppFrame module={item.key === "visibility" ? "customer view" : item.key === "prediction" ? "demand forecast" : "action queue"}>
              <div className="min-h-[380px] md:min-h-[400px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={item.key}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    {item.key === "visibility" && <VisibilityStage />}
                    {item.key === "prediction" && <PredictionStage />}
                    {item.key === "automation" && <AutomationStage />}
                  </motion.div>
                </AnimatePresence>
              </div>
            </AppFrame>
            <div className="mt-3 label-code text-white/35">Example data</div>
          </div>
        </div>
      </div>
    </section>
  );
}
