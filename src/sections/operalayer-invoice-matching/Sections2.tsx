"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Boxes, Check, ChevronRight, Database, FileText, Landmark, Package, Plus, Receipt, Scale, Search, Server, ShoppingCart, TriangleAlert, Workflow } from "lucide-react";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { assetUrl } from "@/lib/assets";
import { ROLES, FIT, START, HOOD, FAQ_GROUPS } from "@/sections/operalayer-invoice-matching/copy";
import { EASE, H2, LEAD, SECTION_Y, CalendlyLink, Eyebrow, Hi, Logo, Panels, Reveal, Stage, Swipe, btnGhost, onTabKeys, scrollToId } from "@/sections/operalayer-invoice-matching/kit";
import { Status } from "@/sections/operalayer-invoice-matching/app";
import { DYNAMICS_365, SAP } from "@/sections/operalayer-invoice-matching/logos";

const CARD = "bg-white rounded-[2px] font-body text-[var(--ink)] shadow-[0_30px_60px_-34px_rgba(15,19,48,0.55),0_0_0_1px_rgba(15,19,48,0.06)]";

/* ============================================================
   6. What does it change for you? Pick a role. Then the best fit.
   ============================================================ */

const ROLE_ICONS = [Landmark, Receipt, ShoppingCart, Package, Workflow, Server];

function Changes({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((t, n) => (
        <li key={t} className={`flex gap-3 md:gap-3.5 px-5 md:px-7 py-3.5 md:py-[22px] font-body text-[var(--ink)] text-[15.5px] md:text-[18px] lg:text-[19px] leading-[1.45] ${n ? "border-t border-[var(--line)]" : ""}`}>
          <Check aria-hidden className="mt-[4px] h-[18px] w-[18px] shrink-0 text-[var(--green)]" strokeWidth={2.75} />
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Roles() {
  const [i, setI] = useState(0);
  return (
    <section id="roles" className={`relative ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <h2 className={H2}>
            What does it change <Hi>for you?</Hi>
          </h2>
        </Reveal>

        {/* laptops and up: the roles on the left, the chosen role's changes on the right */}
        <Reveal delay={0.06} className="mt-10 md:mt-12 hidden md:grid grid-cols-[minmax(0,0.72fr)_minmax(0,1.5fr)] gap-8 lg:gap-12 items-stretch">
          <div role="tablist" aria-label="Roles" aria-orientation="vertical" className="self-center border-t border-[var(--line)]">
            {ROLES.map((r, k) => {
              const Icon = ROLE_ICONS[k];
              const on = k === i;
              return (
                <button
                  key={r.role}
                  id={`role-tab-${k}`}
                  role="tab"
                  aria-selected={on}
                  aria-controls={`role-panel-${k}`}
                  tabIndex={on ? 0 : -1}
                  onClick={() => setI(k)}
                  onKeyDown={(e) => onTabKeys(e, k, ROLES.length, setI, "role", true)}
                  className={`relative w-full flex items-center gap-3.5 border-b border-[var(--line)] py-[15px] lg:py-[18px] pl-4 pr-2 text-left font-head font-semibold text-[17px] lg:text-[19px] tracking-[-0.01em] transition-colors ${
                    on ? "text-[var(--ink)]" : "text-[var(--t3)] hover:text-[var(--ink)]"
                  }`}
                >
                  {on && <motion.span layoutId="role-rule" className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--accent)]" transition={{ duration: 0.35, ease: EASE }} />}
                  <Icon aria-hidden className={`h-5 w-5 shrink-0 transition-colors ${on ? "text-[var(--accent)]" : ""}`} strokeWidth={1.75} />
                  <span className="flex-1">{r.role}</span>
                  <ChevronRight aria-hidden className={`h-4 w-4 text-[var(--accent)] transition-opacity ${on ? "opacity-100" : "opacity-0"}`} />
                </button>
              );
            })}
          </div>
          <Stage soft className="p-6 lg:p-10 flex items-center [&>div]:w-full">
            <Panels i={i} group="role">
              {ROLES.map((r, k) => {
                const Icon = ROLE_ICONS[k];
                return (
                  <div key={r.role} className={CARD}>
                    <div className="flex items-center gap-3 px-5 md:px-7 py-[18px] border-b border-[var(--line)]">
                      <Icon aria-hidden className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.75} />
                      <h3 className="font-head font-bold text-[var(--ink)] text-[20px] lg:text-[22px] tracking-[-0.015em]">{r.role}</h3>
                    </div>
                    <Changes items={r.items} />
                  </div>
                );
              })}
            </Panels>
          </Stage>
        </Reveal>

        {/* phones: the six roles in one row */}
        <Reveal className="mt-7 md:hidden">
          <Swipe
            label="Roles"
            items={ROLES.map((r, k) => {
              const Icon = ROLE_ICONS[k];
              return (
                <div key={r.role} className="h-full rounded-[2px] border border-[var(--line)]">
                  <div className="flex items-center gap-3 px-5 py-4 border-b border-[var(--line)]">
                    <Icon aria-hidden className="h-5 w-5 text-[var(--accent)]" strokeWidth={1.75} />
                    <h3 className="font-head font-bold text-[var(--ink)] text-[18px] leading-[1.2]">{r.role}</h3>
                  </div>
                  <Changes items={r.items} />
                </div>
              );
            })}
          />
        </Reveal>

        {/* best fit */}
        <Reveal delay={0.05} className="mt-12 md:mt-20 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] gap-6 lg:gap-16 items-start">
          <div>
            <Eyebrow>Best fit</Eyebrow>
            <h3 className="mt-3 md:mt-4 font-head font-bold text-[var(--ink)] text-[26px] md:text-[38px] leading-[1.1] tracking-[-0.03em] text-balance">Built for businesses that buy stock from many suppliers</h3>
            <p className={`${LEAD} mt-4 md:mt-5`}>Electrical and industrial distribution, wholesale, food service supply and multi-store retail.</p>
          </div>
          <ul className="border-t border-[var(--line)]">
            {FIT.map((t) => (
              <li key={t} className="flex gap-3.5 border-b border-[var(--line)] py-3.5 md:py-[18px] font-body text-[var(--ink)] text-[15.5px] md:text-[17px] leading-[1.5]">
                <Check aria-hidden className="mt-[4px] h-[18px] w-[18px] shrink-0 text-[var(--accent)]" strokeWidth={2.75} />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   7. Calculator
   ============================================================ */

const DEFAULTS = { volume: 2000, minutes: 4, rate: 25, credits: 8, amount: 65 };
type Key = keyof typeof DEFAULTS;
const euro = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 2, minimumFractionDigits: 0 });
const count = new Intl.NumberFormat("en-IE", { maximumFractionDigits: 1 });

/*
 * The five questions, in the words a finance or purchasing lead would use (ours, not Anton's:
 * his labels were "Minutes saved per invoice", "Confirmed corrections per month", "Average accepted reduction").
 */
const QUESTIONS: { k: Key; label: string; min: number; max: number; step: number; money?: boolean }[] = [
  { k: "volume", label: "Supplier invoices you get each month", min: 0, max: 10000, step: 50 },
  { k: "minutes", label: "Minutes of checking saved on each invoice", min: 0, max: 15, step: 0.5 },
  { k: "rate", label: "What one hour of your team’s time costs", min: 10, max: 80, step: 1, money: true },
  { k: "credits", label: "Wrong invoices your suppliers correct each month", min: 0, max: 50, step: 1 },
  { k: "amount", label: "Average amount taken off a wrong invoice", min: 0, max: 500, step: 5, money: true },
];

function Slider({ label, min, max, step, v, money = false, onChange }: { label: string; min: number; max: number; step: number; v: number; money?: boolean; onChange: (n: number) => void }) {
  const p = ((v - min) / (max - min)) * 100;
  return (
    <label className="block">
      <span className="flex items-baseline justify-between gap-4">
        <span className="font-body text-[15.5px] md:text-[17px] leading-[1.35] text-[var(--ink)]">{label}</span>
        <span className="shrink-0 font-head font-bold text-[19px] md:text-[21px] text-[var(--ink)] tabular-nums">{money ? euro.format(v) : count.format(v)}</span>
      </span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => onChange(Number(e.target.value))} className="ol-range mt-3.5" style={{ ["--fill" as string]: `${p}%` } as React.CSSProperties} />
    </label>
  );
}

export function Calculator() {
  const [v, setV] = useState(DEFAULTS);
  const hours = ((v.volume * v.minutes) / 60) * 12;
  const capacity = hours * v.rate;
  const reductions = v.credits * v.amount * 12;
  const total = capacity + reductions;
  const isDefault = (Object.keys(v) as Key[]).every((k) => v[k] === DEFAULTS[k]);
  return (
    <section id="calculator" className={`relative bg-[var(--canvas)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <Eyebrow>Calculator</Eyebrow>
          <h2 className={`${H2} mt-4`}>
            What is invoice checking <Hi>costing you?</Hi>
          </h2>
          <p className={`${LEAD} mt-5 md:mt-6 max-w-[46rem]`}>
            Put in your own numbers. You will see how many hours your team gets back in a year, and how much comes off invoices your suppliers got wrong.
          </p>
        </Reveal>

        <Reveal delay={0.08} className={`mt-9 md:mt-12 ${CARD} overflow-hidden grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]`}>
          {/* your numbers */}
          <div className="p-6 md:p-9 lg:p-11">
            <div className="flex items-baseline justify-between gap-4 min-h-[28px]">
              <h3 className="font-head font-bold text-[var(--ink)] text-[20px] md:text-[22px] tracking-[-0.015em]">{isDefault ? "Start with our example, then use your numbers" : "Your numbers"}</h3>
              {!isDefault && (
                <button type="button" onClick={() => setV(DEFAULTS)} className="shrink-0 font-head font-semibold text-[14.5px] text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors">
                  Back to the example
                </button>
              )}
            </div>
            <div className="mt-7 md:mt-9 grid gap-7 md:gap-8">
              {QUESTIONS.map((q) => (
                <Slider key={q.k} label={q.label} min={q.min} max={q.max} step={q.step} money={q.money} v={v[q.k]} onChange={(n) => setV((o) => ({ ...o, [q.k]: n }))} />
              ))}
            </div>
          </div>

          {/* what a year of that is worth */}
          <div className="relative text-white p-6 md:p-9 lg:p-11 flex flex-col justify-center" style={{ background: "var(--stage)" }}>
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(15,19,48,0.08),rgba(15,19,48,0.3))]" />
            <div className="relative" aria-live="polite">
              <div className="font-head font-semibold text-[17px] md:text-[19px] text-white">In one year, that is worth</div>
              <div className="mt-3 font-head font-bold text-[54px] sm:text-[68px] lg:text-[clamp(54px,5.4vw,80px)] leading-[0.95] tracking-[-0.045em] tabular-nums">{euro.format(total)}</div>
              <dl className="mt-8 md:mt-10 border-t border-white/30 font-body text-[16px] md:text-[17px] leading-[1.4]">
                <div className="flex items-baseline justify-between gap-6 py-4 border-b border-white/30">
                  <dt>{count.format(hours)} hours your team gets back</dt>
                  <dd className="shrink-0 font-head font-bold text-[19px] md:text-[21px] tabular-nums">{euro.format(capacity)}</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 py-4 border-b border-white/30">
                  <dt>Taken off invoices your suppliers got wrong</dt>
                  <dd className="shrink-0 font-head font-bold text-[19px] md:text-[21px] tabular-nums">{euro.format(reductions)}</dd>
                </div>
              </dl>
              <p className="mt-5 font-body text-white/80 text-[13.5px] md:text-[14px] leading-[1.6]">
                Hours saved turn into cash when they cut overtime, hiring or other spending. The cost of OperaLayer is not taken off this total.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   8. Getting started: four steps, your team beside OperaLayer
   ============================================================ */

export function GettingStarted() {
  const COLS = "grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)_minmax(0,1fr)]";
  return (
    <section id="first-step" className={`relative ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <Eyebrow>Getting started</Eyebrow>
          <h2 className={`${H2} mt-4`}>
            Start with one supplier and <Hi>one real invoice.</Hi>
          </h2>
          <p className={`${LEAD} mt-5 md:mt-6 max-w-[46rem]`}>Choose an invoice your team knows well. The best example is one where somebody had to call the warehouse, check a price or ask what the supplier meant.</p>
        </Reveal>

        <Reveal delay={0.08} className="hidden md:block mt-12 rounded-[2px] border border-[var(--line)]">
          <div className={`grid ${COLS} bg-[var(--canvas)] border-b border-[var(--line)] font-head font-semibold text-[14px] text-[var(--t2)]`}>
            <span className="px-6 lg:px-8 py-3.5" />
            <span className="px-6 lg:px-8 py-3.5 border-l border-[var(--line)]">Your team</span>
            <span className="px-6 lg:px-8 py-3.5 border-l border-[var(--line)] flex items-center gap-2">
              <Logo className="h-[16px] w-auto" /> OperaLayer
            </span>
          </div>
          <ol>
            {START.map((s, i) => (
              <li key={s.title} className={`grid ${COLS} ${i ? "border-t border-[var(--line)]" : ""}`}>
                <div className="px-6 lg:px-8 py-7 lg:py-8 flex items-start gap-4">
                  <span className="mt-[1px] h-7 w-7 shrink-0 rounded-[2px] bg-[var(--accent)] text-white flex items-center justify-center font-head font-semibold text-[14px]">{i + 1}</span>
                  <h3 className="font-head font-bold text-[var(--ink)] text-[18px] lg:text-[21px] leading-[1.25] tracking-[-0.015em]">{s.title}</h3>
                </div>
                <div className="px-6 lg:px-8 py-7 lg:py-8 border-l border-[var(--line)]">
                  <p className="font-body text-[var(--ink)]/85 text-[15px] lg:text-[15.5px] leading-[1.6]">{s.team}</p>
                </div>
                <div className="px-6 lg:px-8 py-7 lg:py-8 border-l border-[var(--line)]">
                  <p className="font-body text-[var(--ink)]/85 text-[15px] lg:text-[15.5px] leading-[1.6]">{s.us}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.08} className="md:hidden mt-7">
          <Swipe
            label="Getting started"
            items={START.map((s, i) => (
              <div key={s.title} className="h-full rounded-[2px] border border-[var(--line)]">
                <div className="flex items-start gap-3.5 px-5 py-4 border-b border-[var(--line)]">
                  <span className="mt-[1px] h-7 w-7 shrink-0 rounded-[2px] bg-[var(--accent)] text-white flex items-center justify-center font-head font-semibold text-[14px]">{i + 1}</span>
                  <h3 className="font-head font-bold text-[var(--ink)] text-[18px] leading-[1.25] tracking-[-0.015em]">{s.title}</h3>
                </div>
                <div className="px-5 py-4 border-b border-[var(--line)]">
                  <div className="mb-1.5 font-head font-semibold text-[13px] text-[var(--t3)]">Your team</div>
                  <p className="font-body text-[var(--ink)]/85 text-[15px] leading-[1.55]">{s.team}</p>
                </div>
                <div className="px-5 py-4">
                  <div className="mb-1.5 flex items-center gap-1.5 font-head font-semibold text-[13px] text-[var(--t3)]">
                    <Logo className="h-[14px] w-auto" /> OperaLayer
                  </div>
                  <p className="font-body text-[var(--ink)]/85 text-[15px] leading-[1.55]">{s.us}</p>
                </div>
              </div>
            ))}
          />
        </Reveal>

        <Reveal delay={0.05} className="mt-8 md:mt-6">
          <Stage className="px-5 py-7 md:px-11 md:py-11">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12 text-white">
              <div className="max-w-[44rem]">
                <h3 className="font-head font-bold text-white text-[24px] md:text-[34px] leading-[1.12] tracking-[-0.025em]">See it before connecting your ERP</h3>
                <p className="mt-3 font-body text-white/85 text-[16px] md:text-[17px] leading-[1.55]">
                  The first call uses example documents. Follow a price change, a short delivery and a different product code, then discuss the suppliers and records that
                  matter in your business.
                </p>
              </div>
              <div className="shrink-0 flex flex-col items-start md:items-center gap-3.5">
                <a
                  href="#demo"
                  onClick={scrollToId("demo")}
                  className="group inline-flex items-center justify-center gap-2 h-[52px] px-6 rounded-[2px] bg-white text-[var(--ink)] font-head font-semibold text-[16px] hover:bg-[var(--ink)] hover:text-white transition-colors"
                >
                  Book a demo call <ChevronRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <CalendlyLink className="inline-flex items-center gap-1.5 font-head font-semibold text-[15px] text-white underline-offset-4 hover:underline">or pick a time on Calendly</CalendlyLink>
              </div>
            </div>
            {/* which ERPs: the two with a live connection, then the rest in Anton's terms */}
            <div className="mt-7 md:mt-9 pt-6 md:pt-7 border-t border-white/25 text-white">
              <ul className="flex flex-wrap items-center gap-x-8 gap-y-4 font-head font-semibold text-[16px] md:text-[17px] tracking-[-0.01em]">
                {["Dynamics NAV", "Business Central"].map((n) => (
                  <li key={n} className="flex items-center gap-2.5">
                    <svg viewBox="0 0 24 24" aria-hidden className="h-7 w-7 fill-white shrink-0">
                      <path d={DYNAMICS_365} />
                    </svg>
                    <span>
                      <span className="sr-only">Microsoft </span>
                      {n}
                    </span>
                  </li>
                ))}
                <li className="flex items-center">
                  <svg viewBox="0 0 24 24" role="img" aria-label="SAP" className="h-12 w-12 fill-white shrink-0">
                    <path d={SAP} />
                  </svg>
                </li>
                <li className="text-white/85">and other ERPs</li>
              </ul>
              <p className="mt-4 md:mt-5 max-w-[52rem] font-body text-white/85 text-[14.5px] md:text-[15.5px] leading-[1.55]">
                Microsoft Dynamics NAV and Business Central are connected today. For SAP or another ERP, we review its interfaces and test the connection with your records before rollout.
              </p>
            </div>
          </Stage>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   9. Under the hood: five steps, each with its screen
   ============================================================ */

const HOOD_ICONS = [FileText, Search, Boxes, Scale, Database];
const PANEL = `${CARD} w-full max-w-[440px]`;
const ROWT = "flex items-center justify-between gap-4 px-5 py-3 text-[14px]";

function VRead() {
  const rows: [string, string, boolean][] = [
    ["invoice number", "INV-2846", true],
    ["item code", "LP-3000", true],
    ["description", "3,000 K", false],
    ["quantity", "60", true],
    ["unit", "panels", true],
    ["price", "€28", true],
  ];
  return (
    <div className={PANEL}>
      <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-[var(--line)] text-[13px] text-[var(--t2)]">
        <FileText aria-hidden className="h-4 w-4 text-[var(--t3)]" strokeWidth={1.75} /> Supplier invoice <span className="font-medium text-[var(--ink)]">INV-2846</span>
      </div>
      {rows.map(([k, val, ok], n) => (
        <div key={k} className={`${ROWT} ${n ? "border-t border-[var(--line)]" : ""}`}>
          <span className="text-[var(--t2)]">{k}</span>
          <span className="flex items-center gap-2.5 font-medium tabular-nums">
            {!ok && (
              <span className="flex items-center gap-1.5 text-[12.5px] text-[var(--amber)]">
                <TriangleAlert aria-hidden className="h-3.5 w-3.5" /> poorly read
              </span>
            )}
            {val}
            {ok && <Check aria-hidden className="h-4 w-4 text-[var(--green)]" strokeWidth={2.75} />}
          </span>
        </div>
      ))}
    </div>
  );
}

function VAlias() {
  const rows: [string, boolean][] = [
    ["barcode", true],
    ["your item code", true],
    ["approved supplier aliases", true],
    ["Similar descriptions", false],
  ];
  return (
    <div className={PANEL}>
      {rows.map(([t, ok], n) => (
        <div key={t} className={`${ROWT} !py-3.5 ${n ? "border-t border-[var(--line)]" : ""}`}>
          <span className={ok ? "" : "text-[var(--t2)]"}>{t}</span>
          {ok ? <Check aria-hidden className="h-4 w-4 text-[var(--green)]" strokeWidth={2.75} /> : <Status tone="review">candidate</Status>}
        </div>
      ))}
    </div>
  );
}

function VPack() {
  return (
    <div className={`${PANEL} overflow-hidden`}>
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3 px-5 py-6">
        <div>
          <div className="text-[12.5px] text-[var(--t3)]">Supplier invoice</div>
          <div className="mt-1.5 font-head font-bold text-[21px] sm:text-[24px] leading-tight tracking-[-0.02em] whitespace-nowrap">10 boxes of 12</div>
        </div>
        <ArrowRight aria-hidden className="h-5 w-5 text-[var(--accent)]" />
        <div className="text-right">
          <div className="text-[12.5px] text-[var(--t3)]">Purchase order</div>
          <div className="mt-1.5 font-head font-bold text-[21px] sm:text-[24px] leading-tight tracking-[-0.02em] whitespace-nowrap text-[var(--green)]">120 pieces</div>
        </div>
      </div>
      <div className={`${ROWT} border-t border-[var(--line)]`}>
        <span className="text-[var(--t2)]">An unknown pack size</span>
        <Status tone="review">goes to review</Status>
      </div>
    </div>
  );
}

function VMatch() {
  const doc = (Icon: typeof FileText, label: string, id: string) => (
    <div className="flex-1 min-w-0 rounded-[2px] border border-[var(--line)] bg-white px-2 py-3 text-center">
      <Icon aria-hidden className="mx-auto h-[18px] w-[18px] text-[var(--t3)]" strokeWidth={1.75} />
      <div className="mt-1.5 text-[12px] leading-[1.25] text-[var(--t2)]">{label}</div>
      <div className="mt-0.5 font-head font-semibold text-[14px]">{id}</div>
    </div>
  );
  return (
    <div className={`${PANEL} p-5`}>
      <div className="relative rounded-[2px] border border-dashed border-[var(--accent)] px-3 pb-3 pt-7">
        <span className="absolute -top-[11px] left-3 rounded-[2px] bg-[var(--accent)] px-2 text-[12px] leading-[22px] font-medium text-white">Three-way matching</span>
        <div className="flex items-stretch gap-2.5">
          <div className="relative flex-[2] min-w-0 rounded-[2px] border border-dashed border-[#c3c8dd] px-2.5 pb-2.5 pt-6">
            <span className="absolute -top-[11px] left-2.5 rounded-[2px] border border-[#c3c8dd] bg-white px-2 text-[12px] leading-[20px] font-medium text-[var(--t2)]">Two-way matching</span>
            <div className="flex gap-2.5">
              {doc(ShoppingCart, "PO", "PO-1048")}
              {doc(FileText, "invoice", "INV-2846")}
            </div>
          </div>
          <div className="flex-1 min-w-0 flex pt-6 pb-2.5">{doc(Package, "warehouse receipt", "GR-1170")}</div>
        </div>
      </div>
    </div>
  );
}

function VPost() {
  return (
    <div className={PANEL}>
      <div className="px-5 py-3.5 border-b border-[var(--line)] text-[13px] text-[var(--t2)]">Export history</div>
      <div className={ROWT}>
        <span className="flex items-center gap-2.5 font-medium">
          <FileText aria-hidden className="h-4 w-4 text-[var(--t3)]" strokeWidth={1.75} /> INV-2846
        </span>
        <Status tone="ok">ERP</Status>
      </div>
      <div className={`${ROWT} border-t border-[var(--line)]`}>
        <span className="text-[var(--t2)]">source</span>
        <span className="font-medium">PO-1048</span>
      </div>
    </div>
  );
}

const VISUALS = [VRead, VAlias, VPack, VMatch, VPost];

export function UnderTheHood() {
  const [i, setI] = useState(0);
  const V = VISUALS[i];
  return (
    <section id="technology" className={`relative bg-[var(--canvas)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <Eyebrow>Under the hood</Eyebrow>
          <h2 className={`${H2} mt-4`}>
            How OperaLayer knows two different lines{" "}
            <span className="xl:block">
              refer to <Hi>the same item</Hi>
            </span>
          </h2>
          <p className={`${LEAD} mt-5 md:mt-6 max-w-[46rem]`}>
            Your PO might say 120 pieces. The supplier might write 10 boxes of 12 and use its own item code. OperaLayer has to establish the product and the unit before a price
            comparison means anything.
          </p>
        </Reveal>

        <div className="mt-7 md:mt-12 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.02fr)_minmax(0,1fr)] gap-6 lg:gap-12 items-stretch">
          <Reveal className="border-t border-[#d9dcea] self-center w-full">
            {HOOD.map((h, k) => {
              const Icon = HOOD_ICONS[k];
              const on = k === i;
              const Vk = VISUALS[k];
              return (
                <div key={h.q} className="border-b border-[#d9dcea]">
                  <button type="button" aria-expanded={on} aria-controls={`hood-${k}`} onClick={() => setI(k)} className="w-full flex items-center gap-4 py-4 md:py-[18px] text-left">
                    <Icon aria-hidden className={`h-5 w-5 shrink-0 transition-colors ${on ? "text-[var(--accent)]" : "text-[var(--t3)]"}`} strokeWidth={1.75} />
                    <span className={`flex-1 font-head font-bold text-[17px] md:text-[20px] leading-snug tracking-[-0.015em] transition-colors ${on ? "text-[var(--ink)]" : "text-[var(--t2)]"}`}>{h.q}</span>
                    <Plus aria-hidden className={`h-5 w-5 shrink-0 text-[var(--t3)] transition-transform duration-300 ${on ? "rotate-45" : ""}`} />
                  </button>
                  <motion.div id={`hood-${k}`} initial={false} animate={{ height: on ? "auto" : 0, opacity: on ? 1 : 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden" aria-hidden={!on}>
                    <p className="pb-5 md:pb-6 pl-9 pr-2 md:pr-8 font-body text-[var(--t2)] text-[15.5px] md:text-[16px] leading-[1.6]">{h.a}</p>
                    <div className="lg:hidden mb-5">
                      <Stage className="p-5 flex items-center justify-center [&>div]:w-full [&>div]:flex [&>div]:justify-center">
                        <Vk />
                      </Stage>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.08} className="hidden lg:block">
            <Stage className="h-full min-h-[460px] p-10 flex items-center justify-center [&>div]:w-full">
              <AnimatePresence mode="wait">
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3, ease: EASE }} className="w-full flex items-center justify-center">
                  <V />
                </motion.div>
              </AnimatePresence>
            </Stage>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   10. Questions
   ============================================================ */

export function Questions() {
  return (
    <section id="questions" className={`relative ${SECTION_Y}`}>
      <div className="wrap w-full grid grid-cols-[minmax(0,1fr)] gap-8 lg:gap-12 xl:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] xl:gap-16 items-start">
        <Reveal className="xl:sticky xl:top-28">
          <h2 className={H2}>
            Frequently <Hi>asked questions</Hi>
          </h2>
          <p className="mt-5 md:mt-6 font-body text-[16px] md:text-[17px] text-[var(--t2)] leading-[1.55]">
            Not answered here?{" "}
            <CalendlyLink className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors" />
          </p>
        </Reveal>
        <div className="grid gap-9 md:gap-11">
          {FAQ_GROUPS.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.04}>
              <h3 className="font-head font-semibold text-[var(--accent)] text-[15px]">{g.group}</h3>
              <div className="mt-3 border-t border-[var(--line)]">
                {g.items.map((x) => (
                  <details key={x.q} className="group border-b border-[var(--line)]">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-6 py-[18px] [&::-webkit-details-marker]:hidden">
                      <span className="font-head font-semibold text-[var(--ink)] text-[17px] md:text-[19px] leading-[1.35] tracking-[-0.01em]">{x.q}</span>
                      <Plus aria-hidden className="h-5 w-5 shrink-0 text-[var(--t3)] group-open:rotate-45 group-open:text-[var(--accent)] transition duration-300" />
                    </summary>
                    <p className="pb-6 pr-2 md:pr-12 max-w-[68ch] font-body text-[16px] text-[var(--t2)] leading-[1.6]">{x.a}</p>
                  </details>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   11. Out of the office: the team at AI WEEK 2026 in Milan (the team's own photos, from Martins)
   ============================================================ */

const PHOTOS = [
  { src: "/operalayer/invoice-matching/aiweek-team.jpg", alt: "Three people from the OperaLayer team in front of the large AI WEEK letters", w: 1760, h: 1100 },
  { src: "/operalayer/invoice-matching/aiweek-entrance.jpg", alt: "Two people from the team on the pink carpet at the entrance, under the AI WEEK sign", w: 1200, h: 800 },
  { src: "/operalayer/invoice-matching/aiweek-hall.jpg", alt: "The main stage at AI WEEK, seen from the back of a full hall", w: 1200, h: 800 },
];

export function Events() {
  return (
    <section id="events" className={`relative bg-[var(--canvas)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <Eyebrow>Events</Eyebrow>
          <h2 className={`${H2} mt-4`}>
            The OperaLayer team{" "}
            <span className="xl:block">
              <Hi>at AI WEEK in Milan</Hi>
            </span>
          </h2>
          <p className={`${LEAD} mt-5 md:mt-6 max-w-[46rem]`}>
            May 2026. You do not have to wait for the next event to meet us.{" "}
            <CalendlyLink className="inline-flex items-center gap-1 font-semibold text-[var(--accent)] hover:text-[var(--accent-deep)] transition-colors" />
          </p>
        </Reveal>

        {/* tablets and up: one large photo, two beside it */}
        <Reveal delay={0.06} className="mt-9 md:mt-12 hidden md:grid grid-cols-[minmax(0,1.86fr)_minmax(0,1fr)] gap-3 lg:gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetUrl(PHOTOS[0].src)} alt={PHOTOS[0].alt} width={PHOTOS[0].w} height={PHOTOS[0].h} loading="lazy" className="block w-full h-auto aspect-[16/10] object-cover rounded-[2px]" />
          <div className="grid grid-rows-2 gap-3 lg:gap-4">
            {PHOTOS.slice(1).map((p) => (
              <div key={p.src} className="relative min-h-0 overflow-hidden rounded-[2px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={assetUrl(p.src)} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
              </div>
            ))}
          </div>
        </Reveal>

        {/* phones: the same three in a row */}
        <Reveal className="mt-7 md:hidden">
          <Swipe
            label="Photos from AI WEEK"
            items={PHOTOS.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={p.src} src={assetUrl(p.src)} alt={p.alt} width={p.w} height={p.h} loading="lazy" className="block w-full aspect-[4/3] object-cover rounded-[2px]" />
            ))}
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   11. Book a demo call
   ============================================================ */

export function Demo() {
  return (
    <section id="demo" className="relative overflow-hidden text-white py-14 md:py-[clamp(64px,10vh,128px)]" style={{ background: "var(--stage)" }}>
      <div aria-hidden className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(50% 70% at 0% 0%, rgba(255,255,255,0.16), transparent 60%), linear-gradient(180deg, rgba(15,19,48,0.14), rgba(15,19,48,0.32))" }} />
      <div className="wrap relative w-full">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 lg:gap-16 items-center">
          <Reveal>
            <h2 className="font-head font-bold text-white text-[32px] sm:text-[46px] lg:text-[clamp(40px,3.9vw,56px)] leading-[1.06] tracking-[-0.035em] text-balance">Bring the invoice that made three people stop working.</h2>
            <p className="mt-5 md:mt-6 font-body text-white text-[17px] md:text-[20px] leading-[1.5]">
              See which line OperaLayer would flag, the evidence the reviewer would see, and how an accepted invoice gets back into your ERP.
            </p>
            <p className="mt-4 font-body text-white/80 text-[16px] leading-[1.6]">Start with our example records. You leave knowing which documents, checks and connections to test in your own business.</p>
          </Reveal>
          <Reveal delay={0.08} className="bg-white rounded-[2px] p-6 sm:p-8 shadow-[0_60px_120px_-50px_rgba(15,19,48,0.7)]">
            {/* its own HubSpot form, "[Contact form] OperaLayer invoice matching demo", so these leads are not counted under a shared form */}
            <HubSpotForm portalId="25724996" formId="5e39f0f9-5336-44a7-a062-5ef4ffeddf0a" region="eu1" submitText="Book a demo call" />
            <div aria-hidden className="mt-6 flex items-center gap-4 font-body text-[13px] text-[var(--t3)]">
              <span className="h-px flex-1 bg-[var(--line)]" />
              or
              <span className="h-px flex-1 bg-[var(--line)]" />
            </div>
            <CalendlyLink className={`${btnGhost} mt-5 w-full`} />
          </Reveal>
        </div>

      </div>
    </section>
  );
}
