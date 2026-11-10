"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Boxes,
  Check,
  ChevronRight,
  Clock,
  Database,
  FileText,
  Landmark,
  Package,
  Plus,
  Receipt,
  ReceiptText,
  Scale,
  Search,
  Server,
  ShoppingCart,
  Sparkles,
  TriangleAlert,
  Users,
  Workflow,
} from "lucide-react";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { assetUrl } from "@/lib/assets";
import { ROLES, FIT, START, HOOD, FAQ_GROUPS } from "@/sections/operalayer-invoice-matching/copy";
import {
  EASE,
  H2,
  LEAD,
  SECTION_Y,
  Doc,
  Eyebrow,
  Hi,
  Mark,
  Panels,
  Reveal,
  Row,
  Tag,
  btnPrimary,
  scrollToId,
  uiPrimary,
  uiSecondary,
} from "@/sections/operalayer-invoice-matching/kit";

const STAGE = "rounded-[20px] border border-[var(--ol-accent-line)] bg-[linear-gradient(155deg,#eae9fc_0%,#f3f2fe_55%,#faf9ff_100%)]";

/* ============================================================
   6. What does it change for you? Pick a role, read its three changes.
   ============================================================ */

const ROLE_ICONS = [Landmark, Receipt, ShoppingCart, Package, Workflow, Server];

function Changes({ items }: { items: string[] }) {
  return (
    <ul className="grid">
      {items.map((t, n) => (
        <li key={t} className={`flex gap-3.5 md:gap-4 py-4 md:py-5 font-body text-[var(--ol-text)] text-[16px] md:text-[19px] lg:text-[20px] leading-[1.45] ${n ? "border-t border-dotted border-[var(--ol-border-strong)]" : ""}`}>
          <span className="mt-[3px] md:mt-[4px] h-[22px] w-[22px] shrink-0 rounded-full bg-[var(--ol-accent)] flex items-center justify-center">
            <Check aria-hidden className="h-3 w-3 text-white" strokeWidth={3.5} />
          </span>
          {t}
        </li>
      ))}
    </ul>
  );
}

export function Roles() {
  const [i, setI] = useState(0);
  const keys = (e: React.KeyboardEvent, k: number) => {
    const next = e.key === "ArrowDown" ? (k + 1) % ROLES.length : e.key === "ArrowUp" ? (k + ROLES.length - 1) % ROLES.length : -1;
    if (next < 0) return;
    e.preventDefault();
    setI(next);
    document.getElementById(`role-tab-${next}`)?.focus();
  };
  return (
    <section id="roles" className={`relative bg-[var(--ol-bg)] border-y border-[var(--ol-border)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <h2 className={H2}>
            What does it change <Hi>for you?</Hi>
          </h2>
        </Reveal>

        {/* laptops and up: the roles on the left, the chosen role's changes on the right */}
        <Reveal delay={0.06} className="mt-10 md:mt-12 hidden md:grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)] gap-3 bg-white border border-[var(--ol-border)] rounded-[16px] p-3 shadow-[var(--ol-shadow)]">
          <div role="tablist" aria-label="Roles" aria-orientation="vertical" className="grid content-start gap-1 p-1">
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
                  onKeyDown={(e) => keys(e, k)}
                  className={`relative flex items-center gap-3 rounded-[8px] px-3.5 py-3 lg:py-3.5 text-left font-body font-medium text-[15px] lg:text-[16px] transition-colors ${
                    on ? "text-[var(--ol-accent-strong)]" : "text-[var(--ol-text2)] hover:bg-[var(--ol-s2)] hover:text-[var(--ol-text)]"
                  }`}
                >
                  {on && <motion.span layoutId="role-pill" className="absolute inset-0 rounded-[8px] bg-[var(--ol-accent-bg)]" transition={{ duration: 0.3, ease: EASE }} />}
                  <Icon aria-hidden className="relative h-[18px] w-[18px] shrink-0" strokeWidth={1.75} />
                  <span className="relative flex-1">{r.role}</span>
                  <ChevronRight aria-hidden className={`relative h-4 w-4 transition-opacity ${on ? "opacity-100" : "opacity-0"}`} />
                </button>
              );
            })}
          </div>
          <div className="rounded-[10px] border border-[var(--ol-border)] bg-[var(--ol-bg)] px-7 py-6 lg:px-10 lg:py-8">
            <Panels i={i} group="role">
              {ROLES.map((r, k) => {
                const Icon = ROLE_ICONS[k];
                return (
                  <div key={r.role}>
                    <div className="flex items-center gap-3">
                      <span className="h-10 w-10 rounded-[8px] bg-white border border-[var(--ol-border)] flex items-center justify-center">
                        <Icon aria-hidden className="h-5 w-5 text-[var(--ol-accent)]" strokeWidth={1.75} />
                      </span>
                      <h3 className="font-head font-bold text-[var(--ol-text)] text-[24px] lg:text-[28px] leading-[1.15] tracking-[-0.02em]">{r.role}</h3>
                    </div>
                    <div className="mt-3 lg:mt-4">
                      <Changes items={r.items} />
                    </div>
                  </div>
                );
              })}
            </Panels>
          </div>
        </Reveal>

        {/* phones: every role, one under another */}
        <div className="mt-8 md:hidden grid gap-3">
          {ROLES.map((r, k) => {
            const Icon = ROLE_ICONS[k];
            return (
              <Reveal key={r.role} className="bg-white border border-[var(--ol-border)] rounded-[14px] px-5 pt-5 pb-1 shadow-[var(--ol-shadow-sm)]">
                <div className="flex items-center gap-3">
                  <Icon aria-hidden className="h-5 w-5 text-[var(--ol-accent)]" strokeWidth={1.75} />
                  <h3 className="font-head font-bold text-[var(--ol-text)] text-[19px] leading-[1.2]">{r.role}</h3>
                </div>
                <div className="mt-1">
                  <Changes items={r.items} />
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* best fit */}
        <Reveal delay={0.05} className="mt-5 md:mt-6 bg-white border border-[var(--ol-border)] rounded-[16px] shadow-[var(--ol-shadow-sm)] grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] overflow-hidden">
          <div className="p-6 md:p-8 lg:p-10 lg:border-r border-[var(--ol-border)]">
            <Eyebrow>Best fit</Eyebrow>
            <h3 className="mt-3 font-head font-bold text-[var(--ol-text)] text-[26px] md:text-[32px] leading-[1.12] tracking-[-0.025em] text-balance">Built for businesses that buy stock from many suppliers</h3>
            <ul className="mt-6 flex flex-wrap gap-2">
              {["Electrical and industrial distribution", "Wholesale", "Food service supply", "Multi-store retail"].map((c) => (
                <li key={c} className="rounded-[6px] border border-[var(--ol-border-strong)] bg-[var(--ol-s2)] px-2.5 py-1 font-body font-medium text-[13.5px] text-[var(--ol-text)]">
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <ul className="px-6 md:px-8 lg:px-10 py-2 lg:py-5 self-center">
            {FIT.map((t, n) => (
              <li key={t} className={`flex gap-3 py-3.5 font-body text-[var(--ol-text)] text-[15.5px] md:text-[16px] leading-[1.5] ${n ? "border-t border-dotted border-[var(--ol-border-strong)]" : ""}`}>
                <Check aria-hidden className="mt-[3px] h-[18px] w-[18px] shrink-0 text-[var(--ol-ok)]" strokeWidth={3} />
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

function Slider({ k, label, min, max, step, v, set }: { k: Key; label: string; min: number; max: number; step: number; v: number; set: (k: Key, n: number) => void }) {
  const p = ((v - min) / (max - min)) * 100;
  return (
    <label className="block">
      <span className="flex items-center justify-between gap-4 font-body text-[14.5px]">
        <span className="text-[var(--ol-text2)]">{label}</span>
        <span className="ol-mono min-w-[4.5rem] rounded-[5px] border border-[var(--ol-border)] bg-[var(--ol-s2)] px-2 py-0.5 text-right text-[13.5px] font-medium text-[var(--ol-text)]">{count.format(v)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => set(k, Number(e.target.value))}
        className="ol-range mt-3.5"
        style={{ ["--fill" as string]: `${p}%` } as React.CSSProperties}
      />
    </label>
  );
}

export function Calculator() {
  const [v, setV] = useState(DEFAULTS);
  const set = (k: Key, n: number) => setV((o) => ({ ...o, [k]: n }));
  const hours = ((v.volume * v.minutes) / 60) * 12;
  const capacity = hours * v.rate;
  const reductions = v.credits * v.amount * 12;
  const total = capacity + reductions;
  const share = total > 0 ? (capacity / total) * 100 : 0;
  const isDefault = (Object.keys(v) as Key[]).every((k) => v[k] === DEFAULTS[k]);
  return (
    <section id="calculator" className={`relative ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Annual value calculator</Eyebrow>
            <h2 className={`${H2} mt-4`}>
              What is invoice checking <Hi>costing you?</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD}`}>Use your own volumes and costs to explore a year. The example separates the value of staff time from actual supplier corrections.</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 md:mt-12 bg-white rounded-[16px] border border-[var(--ol-border)] shadow-[var(--ol-shadow-lg)] overflow-hidden grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
          {/* inputs */}
          <div className="p-6 md:p-8 lg:p-10">
            <div className="flex items-center justify-between">
              <Tag tone={isDefault ? "neutral" : "accent"}>{isDefault ? "Example inputs" : "Your inputs"}</Tag>
              <button type="button" onClick={() => setV(DEFAULTS)} className={`${uiSecondary} !h-8 !px-3 !text-[13px]`}>
                Reset example
              </button>
            </div>

            <div className="mt-7 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 gap-x-10 gap-y-9">
              <div>
                <h3 className="flex items-center gap-2.5 font-head font-bold text-[var(--ol-text)] text-[19px]">
                  <Clock aria-hidden className="h-[18px] w-[18px] text-[var(--ol-accent)]" strokeWidth={2} />
                  Time back for your team
                </h3>
                <div className="mt-5 grid gap-6">
                  <Slider k="volume" label="Invoices per month" min={0} max={10000} step={50} v={v.volume} set={set} />
                  <Slider k="minutes" label="Minutes saved per invoice" min={0} max={15} step={0.5} v={v.minutes} set={set} />
                  <Slider k="rate" label="Staff cost per hour (€)" min={10} max={80} step={1} v={v.rate} set={set} />
                </div>
                <div className="mt-7 pt-5 border-t border-dotted border-[var(--ol-border-strong)]">
                  <div className="font-head font-bold text-[var(--ol-text)] text-[30px] leading-none tracking-[-0.03em] tabular-nums">{euro.format(capacity)}</div>
                  <div className="mt-1.5 font-body text-[var(--ol-text2)] text-[14.5px]">
                    value of <strong className="font-semibold text-[var(--ol-text)]">{count.format(hours)}</strong> hours per year
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="flex items-center gap-2.5 font-head font-bold text-[var(--ol-text)] text-[19px]">
                  <ReceiptText aria-hidden className="h-[18px] w-[18px] text-[var(--ol-ok)]" strokeWidth={2} />
                  Supplier bills corrected
                </h3>
                <div className="mt-5 grid gap-6">
                  <Slider k="credits" label="Confirmed corrections per month" min={0} max={50} step={1} v={v.credits} set={set} />
                  <Slider k="amount" label="Average accepted reduction (€)" min={0} max={500} step={5} v={v.amount} set={set} />
                </div>
                <div className="mt-auto pt-7">
                  <div className="pt-5 border-t border-dotted border-[var(--ol-border-strong)]">
                    <div className="font-head font-bold text-[var(--ol-text)] text-[30px] leading-none tracking-[-0.03em] tabular-nums">{euro.format(reductions)}</div>
                    <div className="mt-1.5 font-body text-[var(--ol-text2)] text-[14.5px]">in confirmed reductions per year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* result */}
          <div className="relative border-t lg:border-t-0 lg:border-l border-[var(--ol-accent-line)] bg-[linear-gradient(155deg,#eae9fc_0%,#f3f2fe_55%,#faf9ff_100%)] p-6 md:p-8 lg:p-10 flex flex-col justify-center">
            <div className="font-head font-semibold text-[var(--ol-text)] text-[16px] md:text-[17px]">Gross annual value in this scenario</div>
            <div className="mt-3 font-head font-bold text-[var(--ol-accent-strong)] text-[52px] sm:text-[64px] lg:text-[clamp(52px,5vw,72px)] leading-none tracking-[-0.045em] tabular-nums">{euro.format(total)}</div>
            <div className="mt-7 h-3 rounded-full bg-white/70 overflow-hidden flex">
              <motion.div className="h-full bg-[var(--ol-accent)]" initial={false} animate={{ width: `${share}%` }} transition={{ duration: 0.4, ease: EASE }} />
              <div className="h-full flex-1 bg-[var(--ol-ok)]" style={{ opacity: total > 0 ? 1 : 0 }} />
            </div>
            <div className="mt-4 grid gap-2 font-body text-[14.5px]">
              <Row
                k={
                  <span className="flex items-center gap-2 text-[var(--ol-text)]">
                    <span className="h-2.5 w-2.5 rounded-[3px] bg-[var(--ol-accent)]" />
                    staff time
                  </span>
                }
              >
                <span className="ol-mono font-medium">{euro.format(capacity)}</span>
              </Row>
              <Row
                k={
                  <span className="flex items-center gap-2 text-[var(--ol-text)]">
                    <span className="h-2.5 w-2.5 rounded-[3px] bg-[var(--ol-ok)]" />
                    corrected bills
                  </span>
                }
              >
                <span className="ol-mono font-medium">{euro.format(reductions)}</span>
              </Row>
            </div>
            <p className="mt-6 font-body text-[var(--ol-text)] text-[15px] leading-[1.55]" aria-live="polite">
              This combines {euro.format(capacity)} of staff time and {euro.format(reductions)} in corrected bills.
            </p>
            <p className="mt-2 font-body text-[var(--ol-text2)] text-[13.5px] leading-[1.55]">
              Time released becomes a cash saving when it reduces overtime, hiring or other spending. Deduct licence, setup and support costs when you estimate the return.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   8. Getting started: four steps, two lanes
   ============================================================ */

export function GettingStarted() {
  const COLS = "lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)_minmax(0,1fr)]";
  return (
    <section id="first-step" className={`relative bg-[var(--ol-bg)] border-y border-[var(--ol-border)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Getting started</Eyebrow>
            <h2 className={`${H2} mt-4`}>
              Start with one supplier and <Hi>one real invoice.</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD}`}>
            Choose an invoice your team knows well. The best example is one where somebody had to call the warehouse, check a price or ask what the supplier meant.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 md:mt-12 bg-white border border-[var(--ol-border)] rounded-[16px] shadow-[var(--ol-shadow)] overflow-hidden">
          <div className={`hidden lg:grid ${COLS} bg-[var(--ol-s2)] border-b border-[var(--ol-border)] font-body font-medium text-[13px] text-[var(--ol-text2)]`}>
            <span className="px-7 py-2.5" />
            <span className="px-7 py-2.5 flex items-center gap-2 border-l border-[var(--ol-border)]">
              <Users aria-hidden className="h-4 w-4" strokeWidth={1.75} /> Your team
            </span>
            <span className="px-7 py-2.5 flex items-center gap-2 border-l border-[var(--ol-border)]">
              <Mark size={16} /> OperaLayer
            </span>
          </div>
          <ol>
            {START.map((s, i) => (
              <li key={s.title} className={`grid grid-cols-[minmax(0,1fr)] ${COLS} ${i ? "border-t border-[var(--ol-border)]" : ""}`}>
                <div className="px-5 md:px-7 pt-6 lg:py-7 flex items-start gap-3.5">
                  <span className="mt-0.5 h-7 w-7 shrink-0 rounded-[6px] bg-[var(--ol-accent)] text-white flex items-center justify-center ol-mono text-[13px] font-semibold">{i + 1}</span>
                  <h3 className="font-head font-bold text-[var(--ol-text)] text-[19px] lg:text-[20px] leading-[1.25] tracking-[-0.01em]">{s.title}</h3>
                </div>
                <div className="px-5 md:px-7 pt-4 lg:py-7 lg:border-l border-[var(--ol-border)]">
                  <div className="lg:hidden mb-1.5 flex items-center gap-2 font-body font-medium text-[12.5px] text-[var(--ol-text3)]">
                    <Users aria-hidden className="h-3.5 w-3.5" strokeWidth={1.75} /> Your team
                  </div>
                  <p className="font-body text-[var(--ol-text)] text-[15px] md:text-[15.5px] leading-[1.6]">{s.team}</p>
                </div>
                <div className="px-5 md:px-7 pt-4 pb-6 lg:py-7 lg:border-l border-[var(--ol-border)] lg:bg-[var(--ol-accent-bg)]/35">
                  <div className="lg:hidden mb-1.5 flex items-center gap-2 font-body font-medium text-[12.5px] text-[var(--ol-text3)]">
                    <Mark size={14} /> OperaLayer
                  </div>
                  <p className="font-body text-[var(--ol-text)] text-[15px] md:text-[15.5px] leading-[1.6]">{s.us}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.05} className={`mt-5 md:mt-6 ${STAGE} p-6 md:p-9 lg:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12`}>
          <div className="max-w-[44rem]">
            <h3 className="font-head font-bold text-[var(--ol-text)] text-[24px] md:text-[30px] leading-[1.15] tracking-[-0.025em]">See it before connecting your ERP</h3>
            <p className="mt-3 font-body text-[var(--ol-text2)] text-[16px] leading-[1.6]">
              The first call uses example documents. Follow a price change, a short delivery and a different product code, then discuss the suppliers and records that matter
              in your business.
            </p>
          </div>
          <a href="#demo" onClick={scrollToId("demo")} className={`${btnPrimary} self-start md:self-auto whitespace-nowrap`}>
            Book a demo call
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   9. Under the hood: five steps, each with its picture
   ============================================================ */

const HOOD_ICONS = [FileText, Search, Boxes, Scale, Database];
const PANEL = "w-full max-w-[440px] rounded-[10px] border border-[var(--ol-border)] bg-white shadow-[var(--ol-shadow)] font-body";

function VRead() {
  const rows: [string, string, boolean][] = [
    ["Invoice number", "INV-2846", true],
    ["Item code", "LP-3000", true],
    ["Description", "3,000 K", false],
    ["Quantity", "60", true],
    ["Unit", "panels", true],
    ["Price", "€28", true],
  ];
  return (
    <div className={`${PANEL} p-5`}>
      <div className="flex items-center gap-2 text-[13px] font-medium text-[var(--ol-text2)]">
        <FileText aria-hidden className="h-4 w-4" strokeWidth={1.75} /> Supplier invoice <Doc>INV-2846</Doc>
      </div>
      <div className="mt-3.5 grid gap-2.5 text-[14px]">
        {rows.map(([k, val, ok]) => (
          <Row key={k} k={k}>
            <span className="inline-flex items-center gap-2">
              {!ok && (
                <Tag tone="caution">
                  <TriangleAlert aria-hidden className="h-3 w-3" /> Low read confidence
                </Tag>
              )}
              <span className="ol-mono font-medium">{val}</span>
              {ok && <Check aria-hidden className="h-3.5 w-3.5 text-[var(--ol-ok)]" strokeWidth={3} />}
            </span>
          </Row>
        ))}
      </div>
    </div>
  );
}

function VAlias() {
  const rows: [string, boolean][] = [
    ["Barcode", true],
    ["Your item code", true],
    ["Approved supplier aliases", true],
    ["Similar descriptions", false],
  ];
  return (
    <div className={`${PANEL} overflow-hidden`}>
      <div className="flex items-center gap-2 px-5 py-3 bg-[var(--ol-accent-bg)] border-b border-[var(--ol-accent-line)] text-[14px] font-semibold text-[var(--ol-accent-strong)]">
        <Sparkles aria-hidden className="h-4 w-4" /> Suggested matches
      </div>
      {rows.map(([t, ok], n) => (
        <div key={t} className={`flex items-center justify-between gap-3 px-5 py-3 text-[14px] ${n ? "border-t border-[var(--ol-border)]" : ""}`}>
          <span className="text-[var(--ol-text)]">{t}</span>
          <Tag tone={ok ? "ok" : "caution"}>{ok ? "Confirmed" : "Needs review"}</Tag>
        </div>
      ))}
    </div>
  );
}

function VPack() {
  return (
    <div className="w-full max-w-[440px] grid gap-3 font-body">
      <div className="grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-3">
        <div className="rounded-[10px] border border-[var(--ol-border)] bg-white shadow-[var(--ol-shadow)] p-4">
          <div className="text-[12.5px] font-medium text-[var(--ol-text3)]">Supplier invoice</div>
          <div className="mt-1.5 font-head font-bold text-[var(--ol-text)] text-[19px] sm:text-[21px] leading-tight whitespace-nowrap">10 boxes of 12</div>
        </div>
        <div className="flex flex-col items-center gap-1.5">
          <span className="ol-mono rounded-[5px] bg-[var(--ol-accent)] px-1.5 py-0.5 text-[12px] font-semibold text-white">× 12</span>
          <ArrowRight aria-hidden className="h-4 w-4 text-[var(--ol-accent)]" />
        </div>
        <div className="rounded-[10px] border border-[var(--ol-ok)] bg-white shadow-[var(--ol-shadow)] p-4">
          <div className="text-[12.5px] font-medium text-[var(--ol-text3)]">Purchase order</div>
          <div className="mt-1.5 font-head font-bold text-[var(--ol-ok-strong)] text-[19px] sm:text-[21px] leading-tight whitespace-nowrap">120 pieces</div>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-[8px] border border-[var(--ol-border)] bg-white px-4 py-2.5 text-[13.5px]">
        <span className="text-[var(--ol-text2)]">Unknown pack size</span>
        <Tag tone="caution">Needs review</Tag>
      </div>
    </div>
  );
}

function VMatch() {
  const doc = (Icon: typeof FileText, label: string, id: string) => (
    <div className="flex-1 min-w-0 rounded-[8px] border border-[var(--ol-border)] bg-white shadow-[var(--ol-shadow-sm)] px-2.5 py-2.5 text-center">
      <Icon aria-hidden className="mx-auto h-[18px] w-[18px] text-[var(--ol-text2)]" strokeWidth={1.75} />
      <div className="mt-1.5 text-[12px] leading-[1.25] font-medium text-[var(--ol-text)]">{label}</div>
      <div className="mt-1">
        <Doc>{id}</Doc>
      </div>
    </div>
  );
  return (
    <div className="w-full max-w-[460px] font-body">
      <div className="relative rounded-[12px] border border-dashed border-[var(--ol-accent)] px-3 pb-3 pt-7 sm:px-4 sm:pb-4">
        <span className="absolute -top-[11px] left-4 rounded-[5px] bg-[var(--ol-accent)] px-2 text-[12px] leading-[22px] font-semibold text-white">Three-way matching</span>
        <div className="flex items-stretch gap-2 sm:gap-3">
          <div className="relative flex-[2] min-w-0 rounded-[10px] border border-dashed border-[var(--ol-border-strong)] bg-white/50 px-2 pb-2 pt-6 sm:px-3 sm:pb-3">
            <span className="absolute -top-[11px] left-3 rounded-[5px] border border-[var(--ol-border-strong)] bg-white px-2 text-[12px] leading-[20px] font-semibold text-[var(--ol-text2)]">Two-way matching</span>
            <div className="flex gap-2 sm:gap-3">
              {doc(ShoppingCart, "PO", "PO-1048")}
              {doc(FileText, "Invoice", "INV-2846")}
            </div>
          </div>
          <div className="flex-1 min-w-0 flex pt-6 pb-2 sm:pb-3">{doc(Package, "Warehouse receipt", "GR-1170")}</div>
        </div>
      </div>
    </div>
  );
}

function VPost() {
  return (
    <div className={`${PANEL} overflow-hidden`}>
      <div className="flex items-center gap-2.5 px-5 py-4">
        <span className={`${uiSecondary} flex-1 pointer-events-none`}>
          <span className="ol-mono text-[12px] text-[var(--ol-accent)]">1</span> Confirm All
        </span>
        <ArrowRight aria-hidden className="h-4 w-4 shrink-0 text-[var(--ol-text3)]" />
        <span className={`${uiPrimary} flex-1 pointer-events-none`}>
          <span className="ol-mono text-[12px] text-white/70">2</span> Export to ERP
        </span>
      </div>
      <div className="px-5 py-2 bg-[var(--ol-s2)] border-y border-[var(--ol-border)] text-[12.5px] font-medium text-[var(--ol-text2)]">Export history</div>
      <div className="flex items-center justify-between gap-3 px-5 py-3 text-[14px]">
        <span className="ol-mono">INV-2846</span>
        <span className="text-[13px] text-[var(--ol-text3)] max-sm:hidden">NAV</span>
        <Tag tone="info">Exported</Tag>
      </div>
    </div>
  );
}

const VISUALS = [VRead, VAlias, VPack, VMatch, VPost];

export function UnderTheHood() {
  const [i, setI] = useState(0);
  const V = VISUALS[i];
  return (
    <section id="technology" className={`relative ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Under the hood</Eyebrow>
            <h2 className={`${H2} mt-4`}>
              How OperaLayer knows two different lines refer to <Hi>the same item</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD}`}>
            Your PO might say 120 pieces. The supplier might write 10 boxes of 12 and use its own item code. OperaLayer has to establish the product and the unit before a price
            comparison means anything.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-12 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)] gap-6 lg:gap-10 items-stretch">
          <Reveal className="border-t border-[var(--ol-border)]">
            {HOOD.map((h, k) => {
              const Icon = HOOD_ICONS[k];
              const on = k === i;
              const Vk = VISUALS[k];
              return (
                <div key={h.q} className="border-b border-[var(--ol-border)]">
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={`hood-${k}`}
                    onClick={() => setI(k)}
                    className="w-full flex items-center gap-3.5 py-4 md:py-5 text-left"
                  >
                    <span
                      className={`h-9 w-9 shrink-0 rounded-[8px] flex items-center justify-center border transition-colors duration-300 ${
                        on ? "bg-[var(--ol-accent)] border-[var(--ol-accent)] text-white" : "bg-white border-[var(--ol-border)] text-[var(--ol-text2)]"
                      }`}
                    >
                      <Icon aria-hidden className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    </span>
                    <span className={`flex-1 font-head font-bold text-[17px] md:text-[19px] leading-snug tracking-[-0.01em] transition-colors ${on ? "text-[var(--ol-text)]" : "text-[var(--ol-text2)]"}`}>{h.q}</span>
                    <Plus aria-hidden className={`h-5 w-5 shrink-0 text-[var(--ol-text3)] transition-transform duration-300 ${on ? "rotate-45" : ""}`} />
                  </button>
                  <motion.div id={`hood-${k}`} initial={false} animate={{ height: on ? "auto" : 0, opacity: on ? 1 : 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden" aria-hidden={!on}>
                    <p className="pb-5 md:pb-6 pl-[50px] pr-2 md:pr-8 font-body text-[var(--ol-text2)] text-[15px] md:text-[16px] leading-[1.6]">{h.a}</p>
                    <div className={`lg:hidden mb-5 ${STAGE} p-5 flex items-center justify-center`}>
                      <Vk />
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.08} className={`hidden lg:flex ${STAGE} p-8 xl:p-10 items-center justify-center min-h-[440px]`}>
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="w-full flex items-center justify-center"
              >
                <V />
              </motion.div>
            </AnimatePresence>
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
    <section id="questions" className={`relative bg-[var(--ol-bg)] border-y border-[var(--ol-border)] ${SECTION_Y}`}>
      <div className="wrap w-full grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16 items-start">
        <Reveal className="lg:sticky lg:top-28">
          <Eyebrow>Questions</Eyebrow>
          <h2 className={`${H2} mt-4`}>
            Fair questions <Hi>before you start</Hi>
          </h2>
          <a href="#demo" onClick={scrollToId("demo")} className={`${btnPrimary} mt-7 md:mt-8`}>
            Book a demo call
          </a>
        </Reveal>
        <div className="grid gap-8 md:gap-10">
          {FAQ_GROUPS.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.04}>
              <h3 className="font-head font-semibold text-[var(--ol-accent)] text-[15px]">{g.group}</h3>
              <div className="mt-3 bg-white border border-[var(--ol-border)] rounded-[12px] shadow-[var(--ol-shadow-sm)] overflow-hidden">
                {g.items.map((x, n) => (
                  <details key={x.q} className={`group ${n ? "border-t border-[var(--ol-border)]" : ""}`}>
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-6 px-5 md:px-6 py-4 md:py-[18px] [&::-webkit-details-marker]:hidden hover:bg-[var(--ol-bg)] transition-colors">
                      <span className="font-head font-semibold text-[var(--ol-text)] text-[16px] md:text-[17px] leading-[1.35]">{x.q}</span>
                      <Plus aria-hidden className="h-5 w-5 shrink-0 text-[var(--ol-text3)] group-open:rotate-45 group-open:text-[var(--ol-accent)] transition" />
                    </summary>
                    <p className="px-5 md:px-6 pb-5 md:pb-6 max-w-[68ch] font-body text-[15px] md:text-[16px] text-[var(--ol-text2)] leading-[1.6]">{x.a}</p>
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
   11. Book a demo call
   ============================================================ */

export function Demo() {
  return (
    <section id="demo" className={`relative ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className={`${STAGE} p-5 sm:p-8 lg:p-12 xl:p-14 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-8 lg:gap-14 items-center`}>
          <div>
            <h2 className="font-head font-bold text-[var(--ol-text)] text-[34px] sm:text-[42px] lg:text-[clamp(40px,3.9vw,54px)] leading-[1.05] tracking-[-0.035em] text-balance">
              Bring the invoice that made three people <Hi>stop working.</Hi>
            </h2>
            <p className="mt-5 md:mt-6 font-body text-[var(--ol-text)] text-[17px] md:text-[19px] leading-[1.55]">
              See which line OperaLayer would flag, the evidence the reviewer would see, and how an accepted invoice gets back into your ERP.
            </p>
            <p className="mt-3 font-body text-[var(--ol-text2)] text-[15px] md:text-[16px] leading-[1.6]">
              Start with our example records. You leave knowing which documents, checks and connections to test in your own business.
            </p>
          </div>
          <div className="bg-white rounded-[14px] border border-[var(--ol-border)] shadow-[var(--ol-shadow-lg)] p-5 sm:p-7">
            <HubSpotForm portalId="25724996" formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6" region="eu1" submitText="Book a demo call" />
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 border-t border-[var(--ol-border)] pt-7 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
          <div className="font-body text-[var(--ol-text3)] text-[15px] shrink-0">More from OperaLayer</div>
          <div className="flex flex-wrap gap-x-9 gap-y-3">
            {[
              ["", "OperaLayer overview"],
              ["supplier-purchasing", "Supplier purchasing"],
              ["pricing-control", "Pricing control"],
            ].map(([slug, title]) => (
              <a
                key={title}
                href={assetUrl(slug ? `/operalayer/${slug}` : "/operalayer")}
                className="group inline-flex items-center gap-1.5 font-head font-semibold text-[var(--ol-text)] text-[17px] hover:text-[var(--ol-accent)] transition-colors"
              >
                {title} <ArrowRight aria-hidden className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
