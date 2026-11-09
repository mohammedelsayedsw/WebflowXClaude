"use client";

import { useEffect, useState } from "react";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { assetUrl } from "@/lib/assets";
import { Rise, btnMain, go } from "@/sections/operalayer/kit/parts";
import {
  QUICK,
  PROBLEMS,
  FULL,
  STATS,
  STEPS,
  ROLES,
  FIT,
  START,
  HOOD,
  FAQ_GROUPS,
} from "@/sections/operalayer-invoice-matching/copy";

/* ---------- Shared bits ---------- */

const PAD = "py-[clamp(64px,11vh,128px)]";
const ON_LIGHT_H2 =
  "font-head font-bold text-[var(--sw-black)] text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]";
const ON_DARK_H2 =
  "font-head font-bold text-white text-[36px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.02em]";
const RULE_LIGHT = "border-[rgba(63,74,175,0.2)]";
const RULE_DARK = "border-[rgba(126,131,160,0.3)]";

export const btnBlue =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[2px] border border-[var(--sw-blue)] text-[var(--sw-blue)] px-8 text-[17px] font-head font-semibold hover:bg-[var(--sw-blue)] hover:text-white transition whitespace-nowrap";

const INSPECT = "ol-im-inspect";

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className={`font-head font-semibold text-[15px] md:text-[16px] mb-4 md:mb-5 ${dark ? "text-[var(--sw-mint)]" : "text-[var(--sw-blue)]"}`}>
      {children}
    </div>
  );
}

function PlusMinus({ dark = false }: { dark?: boolean }) {
  const c = dark ? "bg-[var(--sw-mint)]" : "bg-[var(--sw-blue)]";
  return (
    <span aria-hidden className="relative h-4 w-4 shrink-0">
      <span className={`absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 ${c}`} />
      <span className={`absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 ${c} transition-transform duration-200 group-open:scale-y-0`} />
    </span>
  );
}

function Acc({ title, children, open = false }: { title: string; children: React.ReactNode; open?: boolean }) {
  return (
    <details open={open} className={`group border-b ${RULE_LIGHT}`}>
      <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 md:py-6 text-[var(--sw-black)] text-[18px] md:text-[20px] font-semibold font-head leading-snug [&::-webkit-details-marker]:hidden hover:text-[var(--sw-blue)] transition-colors">
        {title}
        <PlusMinus />
      </summary>
      <div className="pb-6 md:pb-7 pr-2 md:pr-10">{children}</div>
    </details>
  );
}

function Bullets({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <ul className="grid gap-3">
      {items.map((t) => (
        <li key={t} className={`relative pl-6 text-[16px] md:text-[17px] leading-[1.55] ${dark ? "text-white/75" : "text-[var(--sw-black)]/75"}`}>
          <span aria-hidden className={`absolute left-0 top-[0.62em] h-[6px] w-[6px] ${dark ? "bg-[var(--sw-mint)]" : "bg-[var(--sw-blue)]"}`} />
          {t}
        </li>
      ))}
    </ul>
  );
}

/** Keyboard support for a row of tabs, as on Anton's page: arrows, Home, End. */
function onTabKeys(e: React.KeyboardEvent, i: number, n: number, set: (k: number) => void, group: string) {
  const order: Record<string, number> = { ArrowRight: (i + 1) % n, ArrowLeft: (i + n - 1) % n, Home: 0, End: n - 1 };
  if (!(e.key in order)) return;
  e.preventDefault();
  set(order[e.key]);
  document.getElementById(`${group}-tab-${order[e.key]}`)?.focus();
}

/* ---------- Hero ---------- */

export function Hero() {
  const [i, setI] = useState(0);
  const s = QUICK[i];
  const inspect = (e: React.MouseEvent) => {
    window.dispatchEvent(new CustomEvent(INSPECT, { detail: i }));
    go("example")(e);
  };
  return (
    <section id="top" className="relative bg-[var(--sw-black)] min-h-[100svh] flex flex-col overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(52rem 34rem at 88% 38%, rgba(63,74,175,0.32), rgba(63,74,175,0) 70%), radial-gradient(40rem 26rem at 0% 100%, rgba(63,74,175,0.14), rgba(63,74,175,0) 70%)",
        }}
      />
      <div className="wrap relative w-full flex-1 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] items-center gap-12 lg:gap-10 xl:gap-16 pt-[96px] pb-12 lg:pt-[clamp(88px,14vh,140px)] lg:pb-[clamp(20px,4vh,72px)]">
        <div>
          <Rise>
            <Eyebrow dark>Invoice matching</Eyebrow>
            <h1 className="font-head font-bold text-white text-[44px] sm:text-[60px] lg:text-[clamp(48px,min(4.2vw,8.6vh),64px)] leading-[1.04] tracking-[-0.025em]">
              Catch invoice errors
              <span className="block text-[var(--sw-mint)]">before you pay.</span>
            </h1>
          </Rise>
          <Rise delay={0.08}>
            <p className="mt-6 lg:mt-[clamp(12px,2.4vh,24px)] max-w-[38rem] text-white/80 text-[17px] md:text-[19px] lg:text-[clamp(15px,2.2vh,19px)] leading-[1.55]">
              OperaLayer connects your warehouse, accounting and ERP to check every invoice against what you ordered and received. Wrong prices, missing
              quantities and different products reach your team before the bill is approved.
            </p>
            <p className="mt-3 text-white/55 text-[15px] leading-[1.5]">For wholesalers, distributors and retailers buying stock from many suppliers.</p>
            <p className="mt-5 lg:mt-[clamp(10px,2vh,20px)] font-head font-semibold text-white text-[18px] md:text-[20px] lg:text-[clamp(17px,2.4vh,20px)]">Give your team its mornings back.</p>
          </Rise>
          <Rise delay={0.16} className="mt-7 lg:mt-[clamp(14px,2.8vh,28px)] flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-7">
            <a href="#demo" onClick={go("demo")} className={btnMain}>
              Book a demo call
            </a>
            <a href="#example" onClick={go("example")} className="font-head font-semibold text-[17px] text-white/80 hover:text-[var(--sw-mint)] transition self-start sm:self-auto">
              See an invoice example ↓
            </a>
          </Rise>
        </div>

        <Rise delay={0.2} className="w-full max-w-[34rem] lg:justify-self-end">
          <div className="rounded-[2px] border border-white/15 bg-[rgba(255,255,255,0.04)] p-4 md:p-5 lg:p-[clamp(12px,2vh,20px)] backdrop-blur-[2px]">
            <div className="flex items-center justify-between gap-4 text-[13px] md:text-[14px] mb-4 lg:mb-[clamp(8px,1.6vh,16px)]">
              <span className="font-head font-semibold text-white">Example invoice</span>
              <span className="text-white/55 tabular-nums">PO-1048 / INV-2846</span>
            </div>
            <div role="tablist" aria-label="Invoice quick examples" className="grid grid-cols-3 rounded-[2px] border border-white/20 p-1 mb-4 lg:mb-[clamp(8px,1.6vh,16px)]">
              {QUICK.map((q, k) => (
                <button
                  key={q.tab}
                  id={`quick-tab-${k}`}
                  role="tab"
                  aria-selected={k === i}
                  aria-controls="quick-panel"
                  tabIndex={k === i ? 0 : -1}
                  onClick={() => setI(k)}
                  onKeyDown={(e) => onTabKeys(e, k, QUICK.length, setI, "quick")}
                  className={`h-9 md:h-10 lg:h-[clamp(32px,5vh,40px)] rounded-[2px] font-head font-semibold text-[14px] md:text-[15px] transition ${
                    k === i ? "bg-[var(--sw-beige)] text-[var(--sw-black)]" : "text-white/70 hover:text-white"
                  }`}
                >
                  {q.tab}
                </button>
              ))}
            </div>
            <div id="quick-panel" role="tabpanel" aria-labelledby={`quick-tab-${i}`} className="rounded-[2px] bg-white text-[var(--sw-black)] p-5 md:p-6 lg:p-[clamp(14px,2.4vh,24px)]">
              <div className="flex items-center justify-between text-[12px] tracking-[0.06em] text-[var(--sw-black)]/55 pb-3 border-b border-dashed border-[var(--sw-black)]/20">
                <span>SUPPLIER INVOICE</span>
                <span className="tabular-nums">INV-2846</span>
              </div>
              <div className="mt-4 lg:mt-[clamp(8px,1.6vh,16px)] text-[14px] text-[var(--sw-blue)] font-head font-semibold">{s.product}</div>
              <h3 className="mt-1.5 font-head font-bold text-[var(--sw-black)] text-[24px] md:text-[28px] lg:text-[clamp(20px,3.4vh,28px)] leading-[1.1] tracking-[-0.02em]">{s.title}</h3>
              <div className="mt-4 lg:mt-[clamp(8px,1.6vh,16px)] grid grid-cols-2 border border-[var(--sw-light-grey)] rounded-[2px]">
                {s.pair.map((p, k) => (
                  <div key={p.k} className={`px-4 py-3 lg:py-[clamp(6px,1.2vh,12px)] ${k ? "border-l border-[var(--sw-light-grey)] bg-[rgba(224,79,79,0.07)]" : "bg-[var(--sw-beige)]"}`}>
                    <div className="text-[12px] text-[var(--sw-black)]/55">{p.k}</div>
                    <div className={`mt-1 font-head font-semibold text-[19px] tabular-nums ${k ? "text-[var(--sw-red)]" : "text-[var(--sw-black)]"}`}>{p.v}</div>
                  </div>
                ))}
              </div>
              <p className="mt-4 lg:mt-[clamp(8px,1.6vh,16px)] text-[15px] leading-[1.5] text-[var(--sw-black)]/80">{s.note}</p>
              <div className="mt-4 pt-4 lg:mt-[clamp(8px,1.6vh,16px)] lg:pt-[clamp(8px,1.6vh,16px)] border-t border-dashed border-[var(--sw-black)]/20">
                <div className="text-[13px] font-head font-semibold text-[var(--sw-black)]">Suggested action</div>
                <p className="mt-1 text-[15px] leading-[1.5] text-[var(--sw-black)]/80">{s.action}</p>
              </div>
              <a href="#example" onClick={inspect} className="mt-4 lg:mt-[clamp(8px,1.6vh,16px)] inline-flex font-head font-semibold text-[15px] text-[var(--sw-blue)] hover:underline underline-offset-4">
                Inspect this line →
              </a>
            </div>
          </div>
        </Rise>
      </div>

      <div className="wrap relative w-full">
        <div className={`border-t ${RULE_DARK} py-5 md:py-6 lg:py-[clamp(12px,2.4vh,24px)] flex flex-col md:flex-row md:items-center md:justify-between gap-3 md:gap-10`}>
          <div>
            <p className="font-head font-semibold text-white text-[17px] md:text-[19px] lg:text-[clamp(16px,2.3vh,19px)] leading-snug">
              “Our employees smiling again. Two hours per person of ‘monkey work’ gone.”
            </p>
            <p className="mt-1 text-white/55 text-[14px]">Māris Renigers, E-business Manager, ESELO</p>
          </div>
          <a href="#customer-case" onClick={go("customer-case")} className="font-head font-semibold text-[16px] text-white/85 hover:text-[var(--sw-mint)] transition whitespace-nowrap self-start md:self-auto">
            Read one customer’s story →
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------- The problem ---------- */

export function Problem() {
  return (
    <section id="problem" className={`bg-[var(--sw-beige)] ${PAD}`}>
      <div className="wrap">
        <Rise>
          <Eyebrow>The problem</Eyebrow>
          <h2 className={`${ON_LIGHT_H2} max-w-[22ch]`}>A supplier can send you a perfectly good invoice for the wrong thing.</h2>
        </Rise>
        <div className="mt-12 md:mt-16 grid grid-cols-[minmax(0,1fr)] md:grid-cols-3 gap-10 md:gap-8 lg:gap-12">
          {PROBLEMS.map((p, i) => (
            <Rise key={p.title} delay={i * 0.07} className={`border-t ${RULE_LIGHT} pt-6`}>
              <h3 className="font-head font-bold text-[var(--sw-black)] text-[22px] md:text-[24px] leading-[1.2] tracking-[-0.01em]">{p.title}</h3>
              <p className="mt-4 text-[var(--sw-black)]/70 text-[16px] md:text-[17px] leading-[1.6]">{p.body}</p>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Inside an invoice ---------- */

export function Example() {
  const [i, setI] = useState(0);
  const [held, setHeld] = useState<boolean[]>([false, false, false]);
  useEffect(() => {
    const on = (e: Event) => setI((e as CustomEvent<number>).detail);
    window.addEventListener(INSPECT, on);
    return () => window.removeEventListener(INSPECT, on);
  }, []);
  const x = FULL[i];
  const setHold = (v: boolean) => setHeld((h) => h.map((b, k) => (k === i ? v : b)));
  return (
    <section id="example" className={`bg-white ${PAD} scroll-mt-16`}>
      <div className="wrap">
        <Rise>
          <Eyebrow>Inside an invoice</Eyebrow>
          <h2 className={`${ON_LIGHT_H2} max-w-[20ch]`}>Follow one invoice with three different problems.</h2>
          <p className="mt-5 max-w-[46rem] text-[var(--sw-black)]/70 text-[17px] md:text-[19px] leading-[1.55]">
            Switch between the lines. In each example you can see what the supplier billed, what the order says and who can settle the difference.
          </p>
        </Rise>

        <Rise delay={0.08} className="mt-10 md:mt-12">
          <div className="rounded-[2px] border border-[var(--sw-light-grey)] overflow-hidden">
            <div className="flex items-center justify-between gap-4 bg-[var(--sw-black)] px-5 md:px-8 py-3.5 text-[14px]">
              <span className="font-head font-semibold text-white">Invoice review</span>
              <span className="text-white/55 tabular-nums">Example records · INV-2846</span>
            </div>
            <div role="tablist" aria-label="Invoice full examples" className="grid grid-cols-3 md:flex bg-[var(--sw-beige)] border-b border-[var(--sw-light-grey)] px-1 md:px-5">
              {FULL.map((f, k) => (
                <button
                  key={f.tab}
                  id={`full-tab-${k}`}
                  role="tab"
                  aria-selected={k === i}
                  aria-controls="full-panel"
                  tabIndex={k === i ? 0 : -1}
                  onClick={() => setI(k)}
                  onKeyDown={(e) => onTabKeys(e, k, FULL.length, setI, "full")}
                  className={`relative shrink-0 min-h-14 py-3 px-2 md:px-4 font-head font-semibold text-[14px] leading-[1.2] md:text-[16px] md:whitespace-nowrap transition ${
                    k === i ? "text-[var(--sw-black)]" : "text-[var(--sw-black)]/50 hover:text-[var(--sw-black)]"
                  }`}
                >
                  {f.tab}
                  <span aria-hidden className={`absolute left-2 right-2 md:left-4 md:right-4 bottom-0 h-[2px] bg-[var(--sw-blue)] transition-opacity ${k === i ? "opacity-100" : "opacity-0"}`} />
                </button>
              ))}
            </div>

            <div id="full-panel" role="tabpanel" aria-labelledby={`full-tab-${i}`} className="p-5 md:p-8 lg:p-10">
              <div className="text-[14px] text-[var(--sw-blue)] font-head font-semibold">{x.line}</div>
              <h3 className="mt-2 font-head font-bold text-[var(--sw-black)] text-[28px] md:text-[36px] leading-[1.1] tracking-[-0.02em]">{x.title}</h3>
              <p className="mt-3 max-w-[48rem] text-[var(--sw-black)]/70 text-[16px] md:text-[17px] leading-[1.6]">{x.body}</p>

              <div className="mt-6 md:hidden grid gap-2">
                {x.rows.map((r, k) => {
                  const last = k === x.rows.length - 1;
                  return (
                    <div key={r[0]} className={`rounded-[2px] border border-[var(--sw-light-grey)] p-4 ${last ? "bg-[rgba(224,79,79,0.07)] shadow-[inset_2px_0_0_var(--sw-red)]" : ""}`}>
                      <div className="font-semibold text-[15px] text-[var(--sw-black)]">{r[0]}</div>
                      <dl className="mt-2 grid grid-cols-3 gap-3 text-[14px]">
                        {["Item", "Quantity", "Unit price"].map((h, n) => (
                          <div key={h}>
                            <dt className="text-[12px] text-[var(--sw-black)]/55">{h}</dt>
                            <dd className="mt-0.5 text-[var(--sw-black)] tabular-nums">{r[n + 1]}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  );
                })}
              </div>

              <div className="mt-7 hidden md:block overflow-x-auto rounded-[2px] border border-[var(--sw-light-grey)]">
                <table className="w-full min-w-[600px] text-left text-[15px]">
                  <thead className="bg-[var(--sw-beige)] text-[13px] text-[var(--sw-black)]/60">
                    <tr>
                      {["Record", "Item", "Quantity", "Unit price"].map((h) => (
                        <th key={h} scope="col" className="font-head font-semibold px-4 md:px-5 py-3">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="text-[var(--sw-black)]">
                    {x.rows.map((r, k) => {
                      const last = k === x.rows.length - 1;
                      return (
                        <tr key={r[0]} className={`border-t border-[var(--sw-light-grey)] ${last ? "bg-[rgba(224,79,79,0.07)]" : ""}`}>
                          {r.map((c, n) => (
                            <td key={n} className={`px-4 md:px-5 py-3.5 tabular-nums ${n === 0 ? "font-semibold" : ""} ${last && n === 0 ? "shadow-[inset_2px_0_0_var(--sw-red)]" : ""}`}>
                              {c}
                            </td>
                          ))}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-6 md:gap-10">
                <div>
                  <h4 className="font-head font-semibold text-[var(--sw-black)] text-[18px]">Why it matters</h4>
                  <p className="mt-2 text-[var(--sw-black)]/70 text-[16px] leading-[1.6]">{x.why}</p>
                </div>
                <div>
                  <h4 className="font-head font-semibold text-[var(--sw-black)] text-[18px]">Suggested action</h4>
                  <p className="mt-2 text-[var(--sw-black)]/70 text-[16px] leading-[1.6]">{x.action}</p>
                </div>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <button
                  type="button"
                  disabled={held[i]}
                  onClick={() => setHold(true)}
                  className={`${btnBlue} self-start disabled:cursor-default disabled:border-[var(--sw-dark-grey)] disabled:text-[var(--sw-dark-grey)] disabled:hover:bg-transparent`}
                >
                  {held[i] ? "On hold" : `${x.hold} →`}
                </button>
                <span role="status" className="text-[15px] text-[var(--sw-black)]/80">
                  {held[i] ? x.result : ""}
                </span>
                {held[i] && (
                  <button type="button" onClick={() => setHold(false)} className="text-[15px] font-head font-semibold text-[var(--sw-blue)] underline underline-offset-4 self-start sm:self-auto">
                    Reset example
                  </button>
                )}
              </div>
            </div>
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* ---------- One customer's story ---------- */

export function CustomerCase() {
  return (
    <section id="customer-case" className={`relative bg-[var(--sw-black)] ${PAD} scroll-mt-16 overflow-hidden`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(46rem 30rem at 100% 0%, rgba(63,74,175,0.22), rgba(63,74,175,0) 70%)" }}
      />
      <div className="wrap relative">
        <Rise>
          <Eyebrow dark>One customer’s story</Eyebrow>
          <h2 className={`${ON_DARK_H2} max-w-[20ch]`}>What changed for an electrical goods distributor</h2>
          <p className="mt-5 max-w-[48rem] text-white/75 text-[17px] md:text-[19px] leading-[1.55]">
            For one of our customers, electrical goods distributor ESELO, buying from more than 150 suppliers meant working through different document layouts,
            product codes and pack sizes. Purchasing, warehouse and finance now use OperaLayer to compare orders, deliveries and invoices.
          </p>
        </Rise>

        <Rise delay={0.08} className="mt-10 md:mt-12">
          <figure className="border-l-2 border-[var(--sw-mint)] pl-6 md:pl-8 max-w-[60rem]">
            <blockquote className="font-head font-semibold text-white text-[24px] md:text-[32px] lg:text-[36px] leading-[1.22] tracking-[-0.015em]">
              “From demo to live in weeks. Fastest implementation we have experienced so far for such a complex system and functionality.”
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3">
              <img src={assetUrl("/operalayer/invoice-matching/eselo-mark.png")} alt="ESELO" className="h-8 w-8 object-contain brightness-0 invert" />
              <span className="text-white/60 text-[15px]">Māris Renigers, E-business Manager, ESELO</span>
            </figcaption>
          </figure>
        </Rise>

        <div className="mt-12 md:mt-16 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-3 gap-10 lg:gap-12">
          {STATS.map((s, i) => (
            <Rise key={s.n} delay={i * 0.07} className={`border-t ${RULE_DARK} pt-6`}>
              <div className="font-head font-bold text-[var(--sw-mint)] text-[38px] sm:text-[44px] lg:text-[clamp(34px,2.9vw,42px)] leading-[1.05] tracking-[-0.03em] whitespace-nowrap">{s.n}</div>
              <div className="mt-3 font-head font-semibold text-white text-[18px] md:text-[19px]">{s.label}</div>
              <p className="mt-2 text-white/60 text-[15px] md:text-[16px] leading-[1.6]">{s.body}</p>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */

export function HowItWorks() {
  return (
    <section id="solution" className={`bg-[var(--sw-beige)] ${PAD}`}>
      <div className="wrap">
        <Rise>
          <Eyebrow>How it works</Eyebrow>
          <h2 className={`${ON_LIGHT_H2} max-w-[20ch]`}>From the supplier inbox to an invoice you can approve.</h2>
          <p className="mt-5 max-w-[46rem] text-[var(--sw-black)]/70 text-[17px] md:text-[19px] leading-[1.55]">
            OperaLayer reads the documents, finds the purchase order in your ERP and compares the lines. Your rules decide what can move ahead and what needs a buyer,
            a warehouse colleague or an accountant.
          </p>
        </Rise>
        <ol className="mt-12 md:mt-14 grid grid-cols-[minmax(0,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-8">
          {STEPS.map((t, i) => (
            <li key={t} className={`list-none border-t ${RULE_LIGHT} pt-5`}>
              <Rise delay={i * 0.07}>
                <div className="font-head font-bold text-[var(--sw-blue)] text-[28px] leading-none">{i + 1}</div>
                <p className="mt-4 text-[var(--sw-black)]/85 text-[16px] md:text-[17px] leading-[1.55]">{t}</p>
              </Rise>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Roles + best fit ---------- */

export function Roles() {
  return (
    <section id="roles" className={`bg-white ${PAD}`}>
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-16">
          <Rise className="lg:col-span-5">
            <h2 className={`${ON_LIGHT_H2} max-w-[14ch]`}>What does it change for you?</h2>
          </Rise>
          <Rise delay={0.08} className={`lg:col-span-7 border-t ${RULE_LIGHT}`}>
            {ROLES.map((r, i) => (
              <Acc key={r.role} title={r.role} open={i === 0}>
                <Bullets items={r.items} />
              </Acc>
            ))}
          </Rise>
        </div>

        <Rise delay={0.05} className="mt-14 md:mt-20">
          <div className="rounded-[2px] bg-[var(--sw-beige)] p-7 md:p-10 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-8 lg:gap-14">
            <div>
              <Eyebrow>Best fit</Eyebrow>
              <h3 className="font-head font-bold text-[var(--sw-black)] text-[26px] md:text-[32px] leading-[1.12] tracking-[-0.015em]">
                Built for businesses that buy stock from many suppliers
              </h3>
              <p className="mt-4 text-[var(--sw-black)]/60 text-[15px] md:text-[16px] leading-[1.6]">
                Electrical and industrial distribution · Wholesale · Food service supply · Multi-store retail
              </p>
            </div>
            <div className="lg:pt-10">
              <Bullets items={FIT} />
            </div>
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* ---------- Calculator ---------- */

const DEFAULTS = { volume: "2000", minutes: "4", rate: "25", credits: "8", amount: "65" };
type Key = keyof typeof DEFAULTS;
const euro = new Intl.NumberFormat("en-IE", { style: "currency", currency: "EUR", maximumFractionDigits: 2, minimumFractionDigits: 0 });
const count = new Intl.NumberFormat("en-IE", { maximumFractionDigits: 1 });

function Field({ id, label, step, value, onChange }: { id: Key; label: string; step: string; value: string; onChange: (k: Key, v: string) => void }) {
  return (
    <label htmlFor={`calc-${id}`} className="flex items-center justify-between gap-4 py-2">
      <span className="text-white/80 text-[15px] md:text-[16px]">{label}</span>
      <input
        id={`calc-${id}`}
        type="number"
        inputMode="decimal"
        min="0"
        step={step}
        value={value}
        onChange={(e) => onChange(id, e.target.value)}
        className="w-[112px] h-11 shrink-0 rounded-[2px] border border-white/25 bg-transparent px-3 text-right text-white text-[16px] tabular-nums outline-none focus:border-[var(--sw-mint)] transition [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
    </label>
  );
}

export function Calculator() {
  const [v, setV] = useState<Record<Key, string>>(DEFAULTS);
  const set = (k: Key, val: string) => setV((o) => ({ ...o, [k]: val }));
  const n = (k: Key) => Number(v[k]);
  const valid = (Object.keys(v) as Key[]).every((k) => v[k] !== "" && Number.isFinite(n(k)) && n(k) >= 0);
  const hours = (n("volume") * n("minutes")) / 60 * 12;
  const capacity = hours * n("rate");
  const reductions = n("credits") * n("amount") * 12;
  const ok = valid && Number.isFinite(capacity + reductions);
  const isDefault = (Object.keys(v) as Key[]).every((k) => v[k] === DEFAULTS[k]);
  const out = (s: string) => (ok ? s : "…");

  return (
    <section id="calculator" className={`bg-[var(--sw-black)] ${PAD} scroll-mt-16`}>
      <div className="wrap">
        <Rise>
          <Eyebrow dark>Annual value calculator</Eyebrow>
          <h2 className={ON_DARK_H2}>What is invoice checking costing you?</h2>
          <p className="mt-5 max-w-[46rem] text-white/70 text-[17px] md:text-[19px] leading-[1.55]">
            Use your own volumes and costs to explore a year. The example separates the value of staff time from actual supplier corrections.
          </p>
        </Rise>

        <Rise delay={0.08} className="mt-10 md:mt-12 max-w-[64rem]">
          <div className="flex items-center justify-between mb-3 text-[14px]">
            <span className="text-white/55">{isDefault ? "Example inputs" : "Your inputs"}</span>
            <button type="button" onClick={() => setV(DEFAULTS)} className="font-head font-semibold text-white/80 underline underline-offset-4 hover:text-[var(--sw-mint)] transition">
              Reset example
            </button>
          </div>
          <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-4">
            <div className="rounded-[2px] border border-white/15 bg-white/[0.03] p-6 md:p-7 flex flex-col">
              <h3 className="font-head font-bold text-white text-[22px] md:text-[24px]">Time back for your team</h3>
              <div className="mt-4">
                <Field id="volume" label="Invoices per month" step="1" value={v.volume} onChange={set} />
                <Field id="minutes" label="Minutes saved per invoice" step="0.1" value={v.minutes} onChange={set} />
                <Field id="rate" label="Staff cost per hour (€)" step="0.01" value={v.rate} onChange={set} />
              </div>
              <div className="mt-auto pt-5 border-t border-white/15">
                <div className="mt-5 font-head font-bold text-white text-[36px] md:text-[40px] leading-none tabular-nums">{out(euro.format(capacity))}</div>
                <div className="mt-2 text-white/60 text-[15px]">
                  value of <strong className="text-white font-semibold">{out(count.format(hours))}</strong> hours per year
                </div>
              </div>
            </div>
            <div className="rounded-[2px] border border-white/15 bg-white/[0.03] p-6 md:p-7 flex flex-col">
              <h3 className="font-head font-bold text-white text-[22px] md:text-[24px]">Supplier bills corrected</h3>
              <div className="mt-4">
                <Field id="credits" label="Confirmed corrections per month" step="1" value={v.credits} onChange={set} />
                <Field id="amount" label="Average accepted reduction (€)" step="0.01" value={v.amount} onChange={set} />
              </div>
              <div className="mt-auto pt-5 border-t border-white/15">
                <div className="mt-5 font-head font-bold text-white text-[36px] md:text-[40px] leading-none tabular-nums">{out(euro.format(reductions))}</div>
                <div className="mt-2 text-white/60 text-[15px]">in confirmed reductions per year</div>
              </div>
            </div>
          </div>
          <div className="mt-4 rounded-[2px] border border-[var(--sw-mint)]/50 px-6 md:px-7 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="font-head font-semibold text-white text-[17px] md:text-[18px]">Gross annual value in this scenario</span>
            <span className="font-head font-bold text-[var(--sw-mint)] text-[40px] md:text-[48px] leading-none tabular-nums">{out(euro.format(capacity + reductions))}</span>
          </div>
          <p className="mt-5 text-white/65 text-[15px] leading-[1.6]" aria-live="polite">
            {ok
              ? `This combines ${euro.format(capacity)} of staff time and ${euro.format(reductions)} in corrected bills.`
              : "Enter a valid number in each field. Use zero for any amount you want to leave out."}
          </p>
          <p className="mt-2 max-w-[52rem] text-white/50 text-[14px] leading-[1.6]">
            Time released becomes a cash saving when it reduces overtime, hiring or other spending. Deduct licence, setup and support costs when you estimate the return.
          </p>
        </Rise>
      </div>
    </section>
  );
}

/* ---------- Getting started ---------- */

export function GettingStarted() {
  return (
    <section id="first-step" className={`bg-[var(--sw-beige)] ${PAD}`}>
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-16">
          <Rise className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Eyebrow>Getting started</Eyebrow>
              <h2 className={`${ON_LIGHT_H2} max-w-[16ch]`}>Start with one supplier and one real invoice.</h2>
              <p className="mt-5 text-[var(--sw-black)]/70 text-[17px] md:text-[19px] leading-[1.55]">
                Choose an invoice your team knows well. The best example is one where somebody had to call the warehouse, check a price or ask what the supplier meant.
              </p>
            </div>
          </Rise>
          <ol className={`lg:col-span-7 border-t ${RULE_LIGHT}`}>
            {START.map((s, i) => (
              <li key={s.title} className={`list-none border-b ${RULE_LIGHT} py-6 md:py-7`}>
                <Rise delay={i * 0.05} className="grid grid-cols-[2rem_minmax(0,1fr)] gap-x-3">
                  <span className="font-head font-bold text-[var(--sw-blue)] text-[22px] leading-[1.25]">{i + 1}</span>
                  <div>
                    <h3 className="font-head font-bold text-[var(--sw-black)] text-[21px] md:text-[23px] leading-[1.25]">{s.title}</h3>
                    <p className="mt-3 text-[var(--sw-black)]/80 text-[16px] leading-[1.6]">{s.team}</p>
                    <p className="mt-2 text-[var(--sw-black)]/60 text-[16px] leading-[1.6]">{s.us}</p>
                  </div>
                </Rise>
              </li>
            ))}
          </ol>
        </div>

        <Rise delay={0.05} className="mt-14 md:mt-16">
          <div className="rounded-[2px] bg-white p-7 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12">
            <div className="max-w-[44rem]">
              <h3 className="font-head font-bold text-[var(--sw-black)] text-[24px] md:text-[28px] leading-[1.15]">See it before connecting your ERP</h3>
              <p className="mt-3 text-[var(--sw-black)]/70 text-[16px] leading-[1.6]">
                The first call uses example documents. Follow a price change, a short delivery and a different product code, then discuss the suppliers and records that
                matter in your business.
              </p>
            </div>
            <a href="#demo" onClick={go("demo")} className={`${btnBlue} self-start md:self-auto`}>
              Book a demo call
            </a>
          </div>
        </Rise>
      </div>
    </section>
  );
}

/* ---------- Under the hood ---------- */

export function UnderTheHood() {
  return (
    <section id="technology" className={`bg-white ${PAD}`}>
      <div className="wrap grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-16">
        <Rise className="lg:col-span-5">
          <Eyebrow>Under the hood</Eyebrow>
          <h2 className={`${ON_LIGHT_H2} max-w-[16ch]`}>How OperaLayer knows two different lines refer to the same item</h2>
          <p className="mt-5 text-[var(--sw-black)]/70 text-[17px] md:text-[19px] leading-[1.55]">
            Your PO might say 120 pieces. The supplier might write 10 boxes of 12 and use its own item code. OperaLayer has to establish the product and the unit before a
            price comparison means anything.
          </p>
        </Rise>
        <Rise delay={0.08} className={`lg:col-span-7 border-t ${RULE_LIGHT} self-start`}>
          {HOOD.map((h) => (
            <Acc key={h.q} title={h.q}>
              <p className="text-[var(--sw-black)]/75 text-[16px] md:text-[17px] leading-[1.65]">{h.a}</p>
            </Acc>
          ))}
        </Rise>
      </div>
    </section>
  );
}

/* ---------- Questions ---------- */

export function Questions() {
  return (
    <section id="questions" className={`bg-[var(--sw-beige)] ${PAD}`}>
      <div className="wrap">
        <Rise>
          <Eyebrow>Questions</Eyebrow>
          <h2 className={ON_LIGHT_H2}>Fair questions before you start</h2>
        </Rise>
        <div className="mt-10 md:mt-14 grid gap-12 md:gap-14">
          {FAQ_GROUPS.map((g, i) => (
            <Rise key={g.group} delay={i * 0.05} className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-5 lg:gap-16">
              <h3 className="lg:col-span-4 font-head font-bold text-[var(--sw-black)] text-[21px] md:text-[23px] leading-[1.25] lg:pt-5">{g.group}</h3>
              <div className={`lg:col-span-8 border-t ${RULE_LIGHT}`}>
                {g.items.map((x) => (
                  <Acc key={x.q} title={x.q}>
                    <p className="text-[var(--sw-black)]/75 text-[16px] md:text-[17px] leading-[1.65]">{x.a}</p>
                  </Acc>
                ))}
              </div>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Book a demo call ---------- */

export function Demo() {
  return (
    <section id="demo" className={`relative bg-[var(--sw-black)] ${PAD} scroll-mt-4 overflow-hidden`}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(50rem 32rem at 12% 10%, rgba(63,74,175,0.3), rgba(63,74,175,0) 70%)" }}
      />
      <div className="wrap relative grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <Rise className="lg:col-span-6">
          <h2 className={`${ON_DARK_H2} max-w-[16ch]`}>Bring the invoice that made three people stop working.</h2>
          <p className="mt-6 text-white/80 text-[17px] md:text-[19px] leading-[1.55]">
            See which line OperaLayer would flag, the evidence the reviewer would see, and how an accepted invoice gets back into your ERP.
          </p>
          <p className="mt-4 text-white/60 text-[15px] md:text-[16px] leading-[1.6]">
            Start with our example records. You leave knowing which documents, checks and connections to test in your own business.
          </p>
        </Rise>
        <Rise delay={0.08} className="lg:col-span-6">
          <HubSpotForm portalId="25724996" formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6" region="eu1" submitText="Book a demo call" />
        </Rise>
      </div>
    </section>
  );
}
