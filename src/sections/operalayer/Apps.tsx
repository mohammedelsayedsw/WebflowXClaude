"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, animate, motion, useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/assets";
import { UsTiles } from "@/sections/operalayer/shared/UsTiles";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function Count({ to, run }: { to: number; run: boolean }) {
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    const c = animate(0, to, { duration: 1.6, ease, onUpdate: (n) => setV(Math.round(n)) });
    return () => c.stop();
  }, [run, to]);
  return <>{v}</>;
}

// a fixed shuffle so the 13 exceptions are scattered, not bunched at the end
const ORDER = Array.from({ length: 100 }, (_, i) => (i * 37) % 100);
const EXCEPTIONS = new Set(ORDER.filter((_, i) => i % 8 === 3).slice(0, 13));

function InvoiceScene({ run }: { run: boolean }) {
  return (
    <div className="grid grid-cols-10 gap-[6px] md:gap-2 w-full max-w-[460px] mx-auto">
      {Array.from({ length: 100 }).map((_, i) => {
        const bad = EXCEPTIONS.has(i);
        const at = ORDER.indexOf(i);
        return (
          <motion.div
            key={i}
            className="aspect-[3/4] rounded-[2px] relative overflow-hidden"
            initial={{ backgroundColor: "rgba(16,19,44,0.08)" }}
            animate={run ? { backgroundColor: bad ? "#ff5a31" : "#3f4aaf" } : {}}
            transition={{ delay: 0.3 + at * 0.025, duration: 0.25 }}
          >
            <span className="absolute left-[18%] right-[18%] top-[22%] h-[8%] rounded-full bg-white/50" />
            <span className="absolute left-[18%] right-[35%] top-[42%] h-[8%] rounded-full bg-white/35" />
          </motion.div>
        );
      })}
    </div>
  );
}

function PurchasingScene({ run }: { run: boolean }) {
  return (
    <div className="w-full max-w-[460px] mx-auto">
      <div className="grid grid-cols-10 gap-[6px] md:gap-2">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="aspect-square rounded-[2px] border border-[var(--sw-black)]/20 bg-white"
            style={{
              backgroundImage:
                "linear-gradient(rgba(16,19,44,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(16,19,44,0.12) 1px, transparent 1px)",
              backgroundSize: "100% 33%, 33% 100%",
            }}
            initial={{ opacity: 1, y: 0, scale: 1 }}
            animate={run ? { opacity: 0.12, y: 30, scale: 0.6 } : {}}
            transition={{ delay: 0.4 + i * 0.035, duration: 0.5, ease }}
          />
        ))}
      </div>
      <div className="mt-10 h-14 rounded-[4px] border border-[var(--sw-black)]/15 bg-white overflow-hidden relative">
        <motion.div
          className="absolute inset-y-0 left-0 bg-[var(--sw-blue)]"
          initial={{ width: "0%" }}
          animate={run ? { width: "100%" } : {}}
          transition={{ delay: 0.5, duration: 2.1, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 flex items-center px-5 font-head text-white text-[15px] md:text-[17px]">
          One view of the whole season
        </div>
      </div>
    </div>
  );
}

function PricingScene({ run }: { run: boolean }) {
  return (
    <div className="w-full max-w-[460px] mx-auto">
      <UsTiles run={run} on="#3f4aaf" off="rgba(16,19,44,0.08)" textOn="#ffffff" textOff="rgba(16,19,44,0.45)" />
    </div>
  );
}

const APPS = [
  {
    key: "invoices",
    name: "Invoice matching",
    href: "/operalayer/invoice-matching",
    n: 87,
    unit: "%",
    line: "of supplier invoices pass the check without anyone touching them. The rest wait for a person.",
    who: "A B2B electrical supplier on Microsoft Dynamics NAV",
    Scene: InvoiceScene,
  },
  {
    key: "purchasing",
    name: "Supplier purchasing",
    href: "/operalayer/supplier-purchasing",
    n: 34,
    pre: "€",
    unit: " million",
    line: "of seasonal purchasing across more than 50 supplier brands, tracked in one place.",
    who: "A Baltic sports retailer on Microsoft Business Central",
    Scene: PurchasingScene,
  },
  {
    key: "pricing",
    name: "Pricing control",
    href: "/operalayer/pricing-control",
    n: 50,
    unit: " states",
    line: "priced from one set of rules, with new prices sent to the store on schedule.",
    who: "A US specialty retailer on Magento",
    Scene: PricingScene,
  },
];

export function Apps() {
  const [i, setI] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.35 });
  const a = APPS[i];

  return (
    <section id="apps" className="bg-lp-bright py-28 md:py-40">
      <div className="wrap" ref={ref}>
        <h2 className="font-head text-[var(--sw-black)] text-[36px] md:text-[52px] leading-[1.05] max-w-[18ch]">
          Three apps we built this year
        </h2>

        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-b border-[var(--sw-black)]/12" role="tablist">
          {APPS.map((x, j) => (
            <button
              key={x.key}
              type="button"
              role="tab"
              aria-selected={j === i}
              onClick={() => setI(j)}
              className={`relative pb-4 font-head text-[17px] md:text-[20px] transition ${
                j === i ? "text-[var(--sw-black)]" : "text-[var(--sw-black)]/40 hover:text-[var(--sw-black)]/70"
              }`}
            >
              {x.name}
              {j === i && (
                <motion.span layoutId="ol-apps-tab" className="absolute left-0 right-0 -bottom-px h-[2px] bg-[var(--sw-blue)]" />
              )}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={a.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease }}
            className="mt-14 md:mt-16 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-12 lg:gap-20 items-center"
          >
            <div>
              <div className="font-head text-[var(--sw-black)] text-[72px] md:text-[104px] leading-none tracking-[-0.03em] tabular-nums">
                {a.pre}
                <Count to={a.n} run={inView} />
                <span className="text-[0.45em] tracking-[-0.01em]">{a.unit}</span>
              </div>
              <p className="mt-6 text-[var(--sw-black)]/75 text-[18px] md:text-[20px] leading-relaxed max-w-[30ch]">
                {a.line}
              </p>
              <p className="mt-6 text-[var(--sw-black)]/50 text-[15px]">{a.who}</p>
              <a
                href={assetUrl(a.href)}
                className="group mt-8 inline-flex items-center gap-2 font-head font-semibold text-[16px] text-[var(--sw-blue)]"
              >
                See how it works
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </div>
            <a.Scene run={inView} />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
