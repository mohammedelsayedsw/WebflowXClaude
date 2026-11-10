"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ChevronRight, Plus } from "lucide-react";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { assetUrl } from "@/lib/assets";
import { ROLES, FIT, START, HOOD, FAQ_GROUPS } from "@/sections/operalayer-invoice-matching/copy";
import { EASE, H2, LEAD, SECTION_Y, Dot, Eyebrow, Hi, Panels, Reveal, btn, scrollToId } from "@/sections/operalayer-invoice-matching/kit";

/* ============================================================
   6. What does it change for you? Pick a role, read its three changes. Then the best fit.
   ============================================================ */

function Changes({ items }: { items: string[] }) {
  return (
    <ol>
      {items.map((t, n) => (
        <li key={t} className={`grid grid-cols-[28px_minmax(0,1fr)] md:grid-cols-[44px_minmax(0,1fr)] gap-x-3 py-5 md:py-6 ${n ? "border-t border-[var(--line)]" : ""}`}>
          <span className="font-head font-medium text-[var(--blue)] text-[20px] md:text-[24px] leading-[1.3]">{n + 1}</span>
          <span className="font-body text-[var(--ink)] text-[17px] md:text-[21px] leading-[1.45]">{t}</span>
        </li>
      ))}
    </ol>
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
    <section id="roles" className={`relative bg-[var(--lav)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal>
          <h2 className={`${H2} text-[var(--ink)]`}>
            What does it change <Hi>for you?</Hi>
          </h2>
        </Reveal>

        {/* laptops and up: the roles on the left, the chosen role's changes on the right */}
        <Reveal delay={0.06} className="mt-10 md:mt-14 hidden md:grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.5fr)] bg-white rounded-[2px]">
          <div role="tablist" aria-label="Roles" aria-orientation="vertical" className="border-r border-[var(--line)] py-4">
            {ROLES.map((r, k) => {
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
                  className={`relative w-full flex items-center justify-between gap-4 px-8 lg:px-10 py-4 lg:py-[18px] text-left font-head font-semibold text-[17px] lg:text-[19px] transition-colors ${
                    on ? "text-[var(--blue)]" : "text-[var(--ink)]/55 hover:text-[var(--ink)]"
                  }`}
                >
                  {on && <motion.span layoutId="role-rule" className="absolute left-0 top-2 bottom-2 w-[3px] bg-[var(--blue)]" transition={{ duration: 0.35, ease: EASE }} />}
                  {r.role}
                  <ChevronRight aria-hidden className={`h-4 w-4 shrink-0 transition-opacity ${on ? "opacity-100" : "opacity-0"}`} />
                </button>
              );
            })}
          </div>
          <div className="px-9 lg:px-14 py-6 lg:py-9">
            <Panels i={i} group="role">
              {ROLES.map((r) => (
                <div key={r.role}>
                  <h3 className="sr-only">{r.role}</h3>
                  <Changes items={r.items} />
                </div>
              ))}
            </Panels>
          </div>
        </Reveal>

        {/* phones: every role, one under another */}
        <div className="mt-8 md:hidden grid gap-3">
          {ROLES.map((r) => (
            <Reveal key={r.role} className="bg-white rounded-[2px] px-5 pt-6 pb-1">
              <h3 className="font-head font-bold text-[var(--ink)] text-[20px] leading-[1.2]">{r.role}</h3>
              <div className="mt-1">
                <Changes items={r.items} />
              </div>
            </Reveal>
          ))}
        </div>

        {/* best fit */}
        <Reveal delay={0.05} className="mt-16 md:mt-24 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-10 lg:gap-20 items-start">
          <div>
            <Eyebrow>Best fit</Eyebrow>
            <h3 className={`${H2} mt-4 text-[var(--ink)]`}>
              Built for businesses that buy stock from <Hi>many suppliers</Hi>
            </h3>
            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-head font-semibold text-[16px] text-[var(--ink)]">
              {["Electrical and industrial distribution", "Wholesale", "Food service supply", "Multi-store retail"].map((c, n) => (
                <li key={c} className={`flex items-center gap-5 ${n ? "before:content-[''] before:h-4 before:w-px before:bg-[var(--ink)]/25" : ""}`}>
                  {c}
                </li>
              ))}
            </ul>
          </div>
          <ul className="border-t border-[var(--ink)]/15">
            {FIT.map((t) => (
              <li key={t} className="flex gap-4 border-b border-[var(--ink)]/15 py-5 font-body text-[var(--ink)] text-[17px] md:text-[18px] leading-[1.5]">
                <ArrowRight aria-hidden className="mt-[5px] h-[18px] w-[18px] shrink-0 text-[var(--blue)]" />
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
      <span className="flex items-baseline justify-between gap-4">
        <span className="font-body text-[15px] text-[var(--slate)]">{label}</span>
        <span className="font-head font-semibold text-[18px] text-[var(--ink)] tabular-nums">{count.format(v)}</span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => set(k, Number(e.target.value))}
        className="ol-range mt-4"
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
  const RESULT = "font-head font-medium text-[var(--ink)] text-[40px] leading-none tracking-[-0.03em] tabular-nums";
  return (
    <section id="calculator" className={`relative bg-white ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Annual value calculator</Eyebrow>
            <h2 className={`${H2} mt-4 text-[var(--ink)]`}>
              What is invoice checking <Hi>costing you?</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD} text-[var(--slate)]`}>Use your own volumes and costs to explore a year. The example separates the value of staff time from actual supplier corrections.</p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 md:mt-14 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] rounded-[2px] border border-[var(--line)]">
          {/* inputs */}
          <div className="p-6 md:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <span className="font-head font-semibold text-[15px] text-[var(--slate)]">{isDefault ? "Example inputs" : "Your inputs"}</span>
              <button type="button" onClick={() => setV(DEFAULTS)} className="font-head font-semibold text-[15px] text-[var(--blue)] underline underline-offset-4 hover:text-[var(--blue-deep)] transition-colors">
                Reset example
              </button>
            </div>
            <div className="mt-8 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 gap-x-12 gap-y-12">
              <div className="flex flex-col">
                <h3 className="font-head font-bold text-[var(--ink)] text-[21px] tracking-[-0.01em]">Time back for your team</h3>
                <div className="mt-6 grid gap-7">
                  <Slider k="volume" label="Invoices per month" min={0} max={10000} step={50} v={v.volume} set={set} />
                  <Slider k="minutes" label="Minutes saved per invoice" min={0} max={15} step={0.5} v={v.minutes} set={set} />
                  <Slider k="rate" label="Staff cost per hour (€)" min={10} max={80} step={1} v={v.rate} set={set} />
                </div>
                <div className="mt-auto pt-9">
                  <div className="pt-6 border-t border-[var(--ink)]">
                    <div className={RESULT}>{euro.format(capacity)}</div>
                    <div className="mt-2 font-body text-[var(--slate)] text-[15px]">
                      value of <strong className="font-semibold text-[var(--ink)]">{count.format(hours)}</strong> hours per year
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <h3 className="font-head font-bold text-[var(--ink)] text-[21px] tracking-[-0.01em]">Supplier bills corrected</h3>
                <div className="mt-6 grid gap-7">
                  <Slider k="credits" label="Confirmed corrections per month" min={0} max={50} step={1} v={v.credits} set={set} />
                  <Slider k="amount" label="Average accepted reduction (€)" min={0} max={500} step={5} v={v.amount} set={set} />
                </div>
                <div className="mt-auto pt-9">
                  <div className="pt-6 border-t border-[var(--ink)]">
                    <div className={RESULT}>{euro.format(reductions)}</div>
                    <div className="mt-2 font-body text-[var(--slate)] text-[15px]">in confirmed reductions per year</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* result */}
          <div className="bg-[var(--blue)] text-white p-6 md:p-10 lg:p-12 flex flex-col justify-center">
            <div className="font-head font-semibold text-[17px] md:text-[18px] text-white/85">Gross annual value in this scenario</div>
            <div className="mt-4 font-head font-medium text-[56px] sm:text-[72px] lg:text-[clamp(56px,5.6vw,84px)] leading-[0.95] tracking-[-0.045em] tabular-nums">{euro.format(total)}</div>
            <div className="mt-8 h-[6px] bg-white/25 flex">
              <motion.div className="h-full bg-white" initial={false} animate={{ width: `${share}%` }} transition={{ duration: 0.4, ease: EASE }} />
            </div>
            <p className="mt-6 font-body text-white text-[16px] md:text-[17px] leading-[1.55]" aria-live="polite">
              This combines {euro.format(capacity)} of staff time and {euro.format(reductions)} in corrected bills.
            </p>
            <p className="mt-3 font-body text-white/70 text-[14px] leading-[1.6]">
              Time released becomes a cash saving when it reduces overtime, hiring or other spending. Deduct licence, setup and support costs when you estimate the return.
            </p>
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
  const COLS = "lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)_minmax(0,1fr)]";
  return (
    <section id="first-step" className={`relative bg-[var(--lav)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Getting started</Eyebrow>
            <h2 className={`${H2} mt-4 text-[var(--ink)]`}>
              Start with one supplier and <Hi>one real invoice.</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD} text-[var(--slate)]`}>
            Choose an invoice your team knows well. The best example is one where somebody had to call the warehouse, check a price or ask what the supplier meant.
          </p>
        </Reveal>

        <Reveal delay={0.08} className="mt-10 md:mt-14 bg-white rounded-[2px]">
          <div className={`hidden lg:grid ${COLS} border-b border-[var(--ink)] font-head font-semibold text-[14px] text-[var(--slate)]`}>
            <span className="px-10 py-4" />
            <span className="px-10 py-4">Your team</span>
            <span className="px-10 py-4">OperaLayer</span>
          </div>
          <ol>
            {START.map((s, i) => (
              <li key={s.title} className={`grid grid-cols-[minmax(0,1fr)] ${COLS} ${i ? "border-t border-[var(--line)]" : ""}`}>
                <div className="px-5 md:px-10 pt-7 lg:py-9 flex items-baseline gap-5">
                  <span className="font-head font-medium text-[var(--blue)] text-[36px] lg:text-[44px] leading-none tracking-[-0.03em]">{i + 1}</span>
                  <h3 className="font-head font-bold text-[var(--ink)] text-[20px] lg:text-[22px] leading-[1.25] tracking-[-0.01em]">{s.title}</h3>
                </div>
                <div className="px-5 md:px-10 pt-4 lg:py-9">
                  <div className="lg:hidden mb-1 font-head font-semibold text-[13px] text-[var(--slate)]">Your team</div>
                  <p className="font-body text-[var(--ink)]/85 text-[16px] leading-[1.6]">{s.team}</p>
                </div>
                <div className="px-5 md:px-10 pt-4 pb-7 lg:py-9">
                  <div className="lg:hidden mb-1 font-head font-semibold text-[13px] text-[var(--slate)]">OperaLayer</div>
                  <p className="font-body text-[var(--ink)]/85 text-[16px] leading-[1.6]">{s.us}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>

        <Reveal delay={0.05} className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-14">
          <div className="max-w-[46rem]">
            <h3 className="font-head font-bold text-[var(--ink)] text-[26px] md:text-[32px] leading-[1.15] tracking-[-0.025em]">See it before connecting your ERP</h3>
            <p className="mt-3 font-body text-[var(--slate)] text-[17px] leading-[1.6]">
              The first call uses example documents. Follow a price change, a short delivery and a different product code, then discuss the suppliers and records that matter
              in your business.
            </p>
          </div>
          <a href="#demo" onClick={scrollToId("demo")} className={`${btn} self-start md:self-auto whitespace-nowrap`}>
            Book a demo call <ChevronRight aria-hidden className="h-[18px] w-[18px] transition-transform group-hover:translate-x-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   9. Under the hood
   ============================================================ */

/** Two lines that look different and are the same item: the supplier's wording above, yours below. */
function SameItem() {
  return (
    <div className="rounded-[2px] bg-[var(--lav)] px-7 py-9 md:px-10 md:py-12 lg:px-12 lg:py-14">
      <div className="flex items-center gap-3 font-body text-[14.5px] text-[var(--slate)]">
        <Dot layer="inv" /> Supplier invoice
      </div>
      <div className="mt-3 font-head font-medium text-[var(--ink)] text-[38px] sm:text-[52px] lg:text-[clamp(38px,3.7vw,54px)] leading-[1] tracking-[-0.04em] whitespace-nowrap">10 boxes of 12</div>
      <div className="my-7 md:my-9 flex items-center gap-5">
        <span className="h-px flex-1 bg-[var(--ink)]/20" />
        <span className="font-head font-medium text-[var(--blue)] text-[30px] leading-none">=</span>
        <span className="h-px flex-1 bg-[var(--ink)]/20" />
      </div>
      <div className="flex items-center gap-3 font-body text-[14.5px] text-[var(--slate)]">
        <Dot layer="po" /> Purchase order
      </div>
      <div className="mt-3 font-head font-medium text-[var(--ink)] text-[38px] sm:text-[52px] lg:text-[clamp(38px,3.7vw,54px)] leading-[1] tracking-[-0.04em] whitespace-nowrap">120 pieces</div>
    </div>
  );
}

export function UnderTheHood() {
  const [i, setI] = useState(0);
  return (
    <section id="technology" className={`relative bg-white ${SECTION_Y}`}>
      <div className="wrap w-full">
        <Reveal className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Eyebrow>Under the hood</Eyebrow>
            <h2 className={`${H2} mt-4 text-[var(--ink)]`}>
              How OperaLayer knows two different lines refer to <Hi>the same item</Hi>
            </h2>
          </div>
          <p className={`lg:col-span-5 ${LEAD} text-[var(--slate)]`}>
            Your PO might say 120 pieces. The supplier might write 10 boxes of 12 and use its own item code. OperaLayer has to establish the product and the unit before a price
            comparison means anything.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 items-start">
          <Reveal className="lg:sticky lg:top-10">
            <SameItem />
          </Reveal>
          <Reveal delay={0.08} className="border-t border-[var(--ink)]">
            {HOOD.map((h, k) => {
              const on = k === i;
              return (
                <div key={h.q} className="border-b border-[var(--line)]">
                  <button type="button" aria-expanded={on} aria-controls={`hood-${k}`} onClick={() => setI(on ? -1 : k)} className="w-full flex items-center gap-5 py-5 md:py-6 text-left">
                    <span className={`w-6 font-head font-medium text-[20px] leading-none transition-colors ${on ? "text-[var(--blue)]" : "text-[var(--ink)]/35"}`}>{k + 1}</span>
                    <span className="flex-1 font-head font-bold text-[var(--ink)] text-[18px] md:text-[21px] leading-snug tracking-[-0.01em]">{h.q}</span>
                    <Plus aria-hidden className={`h-5 w-5 shrink-0 text-[var(--blue)] transition-transform duration-300 ${on ? "rotate-45" : ""}`} />
                  </button>
                  <motion.div id={`hood-${k}`} initial={false} animate={{ height: on ? "auto" : 0, opacity: on ? 1 : 0 }} transition={{ duration: 0.35, ease: EASE }} className="overflow-hidden" aria-hidden={!on}>
                    <p className="pb-6 md:pb-7 pl-11 pr-2 md:pr-10 font-body text-[var(--slate)] text-[16px] md:text-[17px] leading-[1.6]">{h.a}</p>
                  </motion.div>
                </div>
              );
            })}
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
    <section id="questions" className={`relative bg-[var(--lav)] ${SECTION_Y}`}>
      <div className="wrap w-full grid grid-cols-[minmax(0,1fr)] gap-8 lg:grid-cols-[minmax(0,4fr)_minmax(0,7fr)] lg:gap-16 items-start">
        <Reveal className="lg:sticky lg:top-10">
          <Eyebrow>Questions</Eyebrow>
          <h2 className={`${H2} mt-4 text-[var(--ink)]`}>
            Fair questions <Hi>before you start</Hi>
          </h2>
        </Reveal>
        <div className="grid gap-10 md:gap-12">
          {FAQ_GROUPS.map((g, i) => (
            <Reveal key={g.group} delay={i * 0.04}>
              <h3 className="font-head font-semibold text-[var(--blue)] text-[16px]">{g.group}</h3>
              <div className="mt-4 grid gap-2">
                {g.items.map((x) => (
                  <details key={x.q} className="group bg-white rounded-[2px]">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-6 px-6 md:px-7 py-5 [&::-webkit-details-marker]:hidden">
                      <span className="font-head font-semibold text-[var(--ink)] text-[17px] md:text-[18px] leading-[1.35]">{x.q}</span>
                      <Plus aria-hidden className="h-5 w-5 shrink-0 text-[var(--blue)] group-open:rotate-45 transition-transform duration-300" />
                    </summary>
                    <p className="px-6 md:px-7 pb-6 max-w-[68ch] font-body text-[16px] text-[var(--slate)] leading-[1.6]">{x.a}</p>
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
    <section id="demo" className={`relative bg-[var(--ink)] ${SECTION_Y}`}>
      <div className="wrap w-full">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-10 lg:gap-20 items-center">
          <Reveal>
            <h2 className="font-head font-bold text-white text-[36px] sm:text-[44px] lg:text-[clamp(42px,4.2vw,60px)] leading-[1.05] tracking-[-0.03em] text-balance">
              Bring the invoice that made three people <Hi dark>stop working.</Hi>
            </h2>
            <p className="mt-6 font-body text-white/85 text-[18px] md:text-[20px] leading-[1.55]">
              See which line OperaLayer would flag, the evidence the reviewer would see, and how an accepted invoice gets back into your ERP.
            </p>
            <p className="mt-4 font-body text-white/60 text-[16px] leading-[1.6]">
              Start with our example records. You leave knowing which documents, checks and connections to test in your own business.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <HubSpotForm portalId="25724996" formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6" region="eu1" submitText="Book a demo call" />
          </Reveal>
        </div>

        <div className="mt-16 md:mt-24 border-t border-white/15 pt-7 flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12">
          <div className="font-body text-white/55 text-[15px] shrink-0">More from OperaLayer</div>
          <div className="flex flex-wrap gap-x-10 gap-y-3">
            {[
              ["", "OperaLayer overview"],
              ["supplier-purchasing", "Supplier purchasing"],
              ["pricing-control", "Pricing control"],
            ].map(([slug, title]) => (
              <a
                key={title}
                href={assetUrl(slug ? `/operalayer/${slug}` : "/operalayer")}
                className="group inline-flex items-center gap-1.5 font-head font-semibold text-white text-[17px] hover:text-[var(--peri)] transition-colors"
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
