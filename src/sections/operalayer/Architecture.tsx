"use client";

import { motion, useReducedMotion } from "motion/react";
import { Check, Minus } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const OUTCOMES = ["Executive dashboard", "Forecasts and alerts", "Operational views", "Automated workflows"];
const CORE = [
  { k: "Data model", v: "One definition for every number" },
  { k: "AI models", v: "Reading documents, forecasting" },
  { k: "Automation", v: "Rules, schedules, approvals" },
  { k: "Access control", v: "Roles and a full audit trail" },
];
const SYSTEMS = ["ERP", "CRM", "eCommerce", "Warehouse / OMS", "Finance", "Marketing", "Spreadsheets"];

const GET = [
  "Focused apps that close one specific gap each",
  "One data model across your existing systems",
  "Dashboards your leadership team uses every week",
  "Forecasts that arrive early enough to act on",
  "Automations that give your team hours back",
];
const SKIP = [
  "Replacing any system you already run",
  "Moving data away from where it lives today",
  "Retraining your team on a new platform",
  "A transformation program that runs for years",
  "Lock-in, hidden costs, or code you do not own",
];

function Flow({ lanes = 7, dark = false }: { lanes?: number; dark?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative h-14 md:h-16" aria-hidden>
      {Array.from({ length: lanes }).map((_, i) => {
        const left = `${((i + 0.5) / lanes) * 100}%`;
        return (
          <div key={i} className="absolute top-0 bottom-0" style={{ left }}>
            <div className={`absolute inset-y-0 w-px ${dark ? "bg-[var(--sw-black)]/25" : "bg-[var(--sw-black)]/15"}`} />
            {!reduce && (
              <motion.span
                className="absolute -left-[2.5px] h-1.5 w-1.5 rounded-full bg-[var(--sw-blue)]"
                initial={{ top: "100%", opacity: 0 }}
                animate={{ top: ["100%", "0%"], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  delay: (i * 0.37) % 1.6,
                  repeatDelay: 0.6,
                  ease: "easeInOut",
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

function TierLabel({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <div className="label-code text-[var(--sw-black)]/50 mb-3 flex items-center gap-3">
      <span>{n}</span>
      <span className="h-px w-6 bg-[var(--sw-black)]/20" />
      <span>{children}</span>
    </div>
  );
}

export function Architecture() {
  return (
    <section id="architecture" className="bg-lp-bright py-28 md:py-36 scroll-mt-20">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-end">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/50 mb-5">How it works</div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[54px] leading-[1.05] max-w-[16ch]">
              How OperaLayer sits on top of{" "}
              <span className="text-[var(--sw-blue)]">your systems</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed max-w-[50ch]">
              Read the diagram from the bottom up. Your systems stay where they are,
              OperaLayer reads from them, and your team works in the apps at the top.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20 max-w-[1040px] mx-auto">
          <Reveal>
            <TierLabel n={3}>What your team uses</TierLabel>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[var(--sw-black)]/12 border border-[var(--sw-black)]/12">
              {OUTCOMES.map((o) => (
                <div key={o} className="bg-white px-4 py-5 md:py-6 font-head text-[var(--sw-black)] text-[15px] md:text-[17px] leading-tight">
                  {o}
                </div>
              ))}
            </div>
          </Reveal>

          <Flow lanes={4} />

          <Reveal>
            <div
              className="relative rounded-[4px] overflow-hidden px-5 md:px-8 py-7 md:py-9"
              style={{
                background:
                  "radial-gradient(600px 240px at 15% 0%, rgba(63,74,175,0.55), transparent 70%), var(--sw-black)",
              }}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-3 mb-6">
                <div className="font-head text-white text-[26px] md:text-[32px] leading-none">OperaLayer</div>
                <div className="label-code text-white/50">2 · built by scandiweb, owned by you</div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-6 border-t border-white/10 pt-6">
                {CORE.map((c, i) => (
                  <motion.div
                    key={c.k}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="label-code text-[var(--sw-mint)]">{c.k}</div>
                    <div className="mt-2 text-white/75 text-[14px] leading-snug">{c.v}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </Reveal>

          <Flow lanes={7} />

          <Reveal>
            <div className="flex flex-wrap md:grid md:grid-cols-7 gap-2 md:gap-px md:bg-[var(--sw-black)]/12 md:border md:border-[var(--sw-black)]/12">
              {SYSTEMS.map((s) => (
                <div
                  key={s}
                  className="bg-white md:bg-[#f4f1ec] border md:border-0 border-[var(--sw-black)]/12 rounded-[2px] md:rounded-none px-3 py-3 md:py-4 text-center text-[13px] md:text-[14px] text-[var(--sw-black)]/75"
                >
                  {s}
                </div>
              ))}
            </div>
            <div className="mt-3">
              <TierLabel n={1}>Your systems, unchanged</TierLabel>
            </div>
          </Reveal>
        </div>

        <div className="mt-20 md:mt-24 grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-12 md:gap-16 max-w-[1040px] mx-auto">
          <Reveal>
            <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[26px]">What you get</h3>
            <ul className="mt-5 border-t border-[var(--sw-black)]/15">
              {GET.map((g) => (
                <li key={g} className="flex gap-3 items-start py-3.5 border-b border-[var(--sw-black)]/10 text-[15px] md:text-[16px] text-[var(--sw-black)]/80">
                  <Check className="h-4 w-4 mt-1 shrink-0 text-[var(--sw-blue)]" />
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[26px]">What you do not have to do</h3>
            <ul className="mt-5 border-t border-[var(--sw-black)]/15">
              {SKIP.map((g) => (
                <li key={g} className="flex gap-3 items-start py-3.5 border-b border-[var(--sw-black)]/10 text-[15px] md:text-[16px] text-[var(--sw-black)]/60">
                  <Minus className="h-4 w-4 mt-1 shrink-0 text-[var(--sw-black)]/40" />
                  {g}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
