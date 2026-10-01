"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
import {
  LayoutGrid,
  FileText,
  ShoppingCart,
  Building2,
  Sparkles,
  Plug,
  ArrowRight,
} from "lucide-react";
import { btnLight } from "@/components/primitives/buttonStyles";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";
import { OL, Logo, Window, Pill, Tick, ease } from "@/sections/operalayer/ui";

/* Data: the Cascade Cable Works invoice from the OperaLayer demo app. */
const LINES = [
  { code: "W-5G4-H07RNF", erp: "CC-CBL-5X4", name: "H07RN-F 5G4mm² control cable, black", qty: "80 m", price: "2,85 €", sum: "228,00 €" },
  { code: "CC-GLAND-M20", erp: "CC-GLAND-M20", name: "Cable gland M20 IP68", qty: "40 pc", price: "1,15 €", sum: "46,00 €" },
];

const NAV = [
  { icon: LayoutGrid, label: "Dashboard" },
  { icon: FileText, label: "Invoices", active: true, badge: "14" },
  { icon: ShoppingCart, label: "Purchase orders" },
  { icon: Building2, label: "Suppliers" },
  { icon: Sparkles, label: "AI learning" },
  { icon: Plug, label: "Integrations" },
];

function Paper({ lit }: { lit: number }) {
  return (
    <div className="bg-white text-[#14151c] rounded-[3px] p-[7%] h-full" style={{ fontSize: "clamp(6px,0.78cqw,10px)" }}>
      <div className="flex justify-between">
        <div>
          <div className="font-bold" style={{ fontSize: "1.6em" }}>
            CASCADE CABLE WORKS
          </div>
          <div className="mt-1 text-black/50">Industriestraße 48, 42107 Wuppertal</div>
        </div>
        <div className="text-right">
          <div className="font-bold tracking-[0.05em]" style={{ fontSize: "1.6em", color: "#c8581f" }}>
            RECHNUNG
          </div>
          <div className="text-black/50 font-mono">INV-CC-3420</div>
        </div>
      </div>
      <div className="mt-[6%] h-[2px]" style={{ background: "#c8581f" }} />
      <div className="mt-[6%] flex justify-between text-black/55">
        <span>SIA ESELO, Rīga</span>
        <span className="font-mono">Bestell-Nr. I-PAS100202</span>
      </div>
      <div className="mt-[7%] grid grid-cols-[1fr_4em_4.5em] gap-x-2 px-2 py-[0.6em] bg-[#14151c] text-white font-semibold">
        <span>BEZEICHNUNG</span>
        <span className="text-right">MENGE</span>
        <span className="text-right">BETRAG</span>
      </div>
      {LINES.map((l, i) => (
        <div key={l.code} className="relative grid grid-cols-[1fr_4em_4.5em] gap-x-2 px-2 py-[0.8em] border-b border-black/10">
          <motion.span
            className="absolute inset-0"
            initial={false}
            animate={{ opacity: lit > i ? 1 : 0 }}
            style={{ background: "rgba(124,108,246,0.12)", boxShadow: `inset 2px 0 0 ${OL.violet}` }}
          />
          <span className="relative truncate">{l.name}</span>
          <span className="relative text-right font-mono">{l.qty}</span>
          <span className="relative text-right font-mono">{l.sum}</span>
        </div>
      ))}
      <div className="mt-[6%] flex justify-end gap-4 font-semibold">
        <span className="text-black/55">Gesamtbetrag</span>
        <span className="font-mono">326,06 EUR</span>
      </div>
      <div className="mt-[10%] space-y-[0.7em]">
        {[92, 70, 84, 55].map((w) => (
          <div key={w} className="h-[0.5em] rounded-full bg-black/[0.06]" style={{ width: `${w}%` }} />
        ))}
      </div>
    </div>
  );
}

function Workspace() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const reduce = useReducedMotion();
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) return setT(6);
    const ids = [900, 1500, 2100, 2700, 3400, 4100].map((ms, i) => window.setTimeout(() => setT(i + 1), ms));
    return () => ids.forEach((id) => window.clearTimeout(id));
  }, [inView, reduce]);
  const lit = t >= 3 ? 2 : t >= 1 ? 1 : 0;
  const ticked = t >= 4 ? 2 : t >= 2 ? 1 : 0;
  const ready = t >= 5;
  const posted = t >= 6;

  return (
    <div ref={ref} style={{ containerType: "inline-size" }}>
      <Window title="app.operalayer / invoices / INV-CC-3420">
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[17%_minmax(0,1fr)]" style={{ fontSize: "clamp(9px,1.05cqw,13px)" }}>
          {/* sidebar */}
          <aside className="hidden md:flex flex-col gap-1 p-[1.2em] border-r" style={{ borderColor: OL.line, background: OL.panel }}>
            <div className="mb-[1.4em]">
              <Logo />
            </div>
            {NAV.map((n) => (
              <div
                key={n.label}
                className="flex items-center gap-[0.7em] rounded-[6px] px-[0.7em] py-[0.55em]"
                style={{ background: n.active ? "rgba(124,108,246,0.16)" : "transparent", color: n.active ? OL.text : OL.dim }}
              >
                <n.icon style={{ width: "1.1em", height: "1.1em" }} />
                <span className="flex-1 truncate">{n.label}</span>
                {n.badge && (
                  <span className="rounded-full px-[0.5em]" style={{ background: OL.violet, color: "white", fontSize: "0.8em" }}>
                    {n.badge}
                  </span>
                )}
              </div>
            ))}
          </aside>

          {/* main */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-[1em] gap-y-2 px-[1.6em] py-[1em] border-b" style={{ borderColor: OL.line }}>
              <span className="font-semibold">Cascade Cable Works GmbH</span>
              <span className="font-mono" style={{ color: OL.dim }}>
                INV-CC-3420
              </span>
              <Pill tone="violet">PO I-PAS100202</Pill>
              <span className="ml-auto">
                {posted ? <Pill tone="mint">Posted to Navision</Pill> : ready ? <Pill tone="mint">Ready to post</Pill> : <Pill tone="amber">Reading</Pill>}
              </span>
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)] sm:grid-cols-[42%_minmax(0,1fr)]">
              <div className="hidden sm:block p-[1.4em] border-r" style={{ borderColor: OL.line, background: "#1b1c23" }}>
                <Paper lit={lit} />
              </div>

              <div className="p-[1.4em] flex flex-col gap-[1em]">
                <div className="flex items-center justify-between">
                  <span style={{ color: OL.dim }}>Line items checked against Navision</span>
                  <Pill tone="mint">88% confident</Pill>
                </div>
                <div className="rounded-[8px] overflow-hidden" style={{ boxShadow: `0 0 0 1px ${OL.line}` }}>
                  <div className="grid grid-cols-[minmax(0,1fr)_5em_5.5em_2em] gap-x-[0.8em] px-[1em] py-[0.6em]" style={{ background: OL.panel, color: OL.faint, fontSize: "0.85em" }}>
                    <span>Item</span>
                    <span className="text-right">Qty</span>
                    <span className="text-right">Price · ERP</span>
                    <span />
                  </div>
                  {LINES.map((l, i) => (
                    <div key={l.code} className="grid grid-cols-[minmax(0,1fr)_5em_5.5em_2em] gap-x-[0.8em] items-center px-[1em] py-[0.9em] border-t" style={{ borderColor: OL.line }}>
                      <div className="min-w-0">
                        <div className="truncate">{l.name}</div>
                        <div className="font-mono truncate" style={{ color: OL.faint, fontSize: "0.85em" }}>
                          {l.code} → {l.erp}
                        </div>
                      </div>
                      <span className="text-right font-mono">{l.qty}</span>
                      <span className="text-right font-mono">
                        {l.price}
                        <span className="block" style={{ color: OL.faint, fontSize: "0.85em" }}>
                          {l.price}
                        </span>
                      </span>
                      <span className="flex justify-end">
                        <Tick on={ticked > i} />
                      </span>
                    </div>
                  ))}
                </div>

                <div className="rounded-[8px] px-[1em] py-[0.4em]" style={{ boxShadow: `0 0 0 1px ${OL.line}` }}>
                  {[
                    ["Net", "274,00 €"],
                    ["VAT 19%", "52,06 €"],
                    ["Total", "326,06 €"],
                  ].map(([k, v], i) => (
                    <div key={k} className="flex justify-between py-[0.5em]" style={{ color: i === 2 ? OL.text : OL.dim, fontWeight: i === 2 ? 600 : 400 }}>
                      <span>{k}</span>
                      <span className="font-mono">{v}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-[0.6em]">
                  <span style={{ color: OL.dim }}>{ready ? "2 of 2 lines agree with the order" : "Checking lines…"}</span>
                  <motion.span
                    className="inline-flex items-center gap-[0.5em] rounded-[6px] px-[1em] py-[0.6em] font-semibold"
                    initial={false}
                    animate={{
                      backgroundColor: posted ? OL.mint : ready ? OL.violet : "rgba(255,255,255,0.06)",
                      color: posted ? "#0f1014" : ready ? "#ffffff" : OL.faint,
                    }}
                  >
                    {posted ? "Posted" : "Export to Navision"} <ArrowRight style={{ width: "1em", height: "1em" }} />
                  </motion.span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Window>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="ol-light relative overflow-hidden"
      style={{
        background:
          "radial-gradient(1200px 600px at 50% 100%, rgba(124,108,246,0.16), transparent 70%), linear-gradient(180deg, #ffffff 0%, #f5f4f8 100%)",
      }}
    >
      <div className="wrap w-full pt-32 md:pt-44 pb-16 md:pb-24 text-center">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease }}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--sw-black)]/10 bg-white px-3 py-1.5 text-[13px] text-[var(--sw-black)]/70">
            <span className="h-1.5 w-1.5 rounded-full bg-[#4ade80]" />
            Live in production at three companies
          </div>
          <h1 className="mt-7 mx-auto font-head text-[var(--sw-black)] text-[42px] sm:text-[58px] lg:text-[76px] leading-[1.0] tracking-[-0.03em] max-w-[16ch] text-balance">
            OperaLayer Runs the Work Your ERP Leaves Behind
          </h1>
          <p className="mt-7 mx-auto text-[var(--sw-black)]/65 text-[18px] md:text-[21px] leading-relaxed max-w-[48ch]">
            AI apps that check every document against your ERP and ask a person only
            when something is off. Built on top of the systems you already run.
          </p>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-x-8 gap-y-4">
            <a href="#cta" onClick={scrollToSection("cta")} className={btnLight}>
              Book a demo
            </a>
            <a
              href="#product"
              onClick={scrollToSection("product")}
              className="inline-flex items-center gap-2 font-head font-semibold text-[16px] text-[var(--sw-black)]/70 hover:text-[var(--sw-black)] transition"
            >
              See how it works <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="mt-16 md:mt-20 mx-auto max-w-[1180px] text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.2 }}
        >
          <Workspace />
        </motion.div>
      </div>
    </section>
  );
}
