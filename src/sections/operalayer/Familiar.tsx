"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { assetUrl } from "@/lib/assets";

/**
 * Six things clients told us this year, from the OperaLayer proposal deck.
 * One quote at a time, large. The roles on the left switch it, and it moves on
 * by itself until someone picks one.
 */
const QUOTES = [
  {
    role: "CFO",
    org: "Manufacturer, 600 staff",
    text: "Month-end close still takes us four working days. Half of that is reconciling numbers between the ERP and the data warehouse.",
  },
  {
    role: "Head of Procurement",
    org: "Industrial supplier",
    text: "Buyers are matching invoices to POs by hand because every supplier sends the PDF in a different format. Two people, every morning.",
    link: { href: "/operalayer/invoice-matching", label: "How we fixed this one" },
  },
  {
    role: "Commercial Director",
    org: "Retailer in several countries",
    text: "Pricing across regions lives in a spreadsheet that one person maintains. If she's on holiday, nothing changes price.",
    link: { href: "/operalayer/pricing-control", label: "How we fixed this one" },
  },
  {
    role: "COO",
    org: "B2B distributor",
    text: "There's a process the team runs every Monday morning. It's been on the automation backlog for two years.",
  },
  {
    role: "Head of eCommerce",
    org: "Direct-to-consumer beauty brand",
    text: "The same customer has three different IDs across our CRM, store, and support desk. We've tried to fix it twice, and nobody wants to own it.",
  },
  {
    role: "CIO",
    org: "Specialty retailer",
    text: "The dashboard the board asked for needs data from five systems. It has been planned for next quarter, three quarters in a row.",
  },
];

const HOLD = 6500;
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

export function Familiar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    if (!inView || held || reduce) return;
    const t = window.setTimeout(() => setI((x) => (x + 1) % QUOTES.length), HOLD);
    return () => window.clearTimeout(t);
  }, [i, inView, held, reduce]);

  const q = QUOTES[i];

  return (
    <section
      id="familiar"
      className="relative py-28 md:py-40 overflow-hidden scroll-mt-10"
      style={{ background: "radial-gradient(1000px 600px at 80% 0%, #1d2566 0%, transparent 60%), #10132c" }}
    >
      <div className="wrap" ref={ref}>
        <h2 className="font-head text-white text-[30px] md:text-[40px] leading-[1.1] max-w-[22ch]">
          Sound familiar? This is what leaders told us this year.
        </h2>

        <div className="mt-14 md:mt-20 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-[minmax(0,0.42fr)_minmax(0,1.58fr)] gap-10 lg:gap-16">
          <ul className="flex lg:flex-col gap-x-6 gap-y-1 overflow-x-auto lg:overflow-visible -mx-5 px-5 lg:mx-0 lg:px-0 lg:border-l lg:border-white/12">
            {QUOTES.map((x, j) => {
              const active = j === i;
              return (
                <li key={x.role} className="relative shrink-0">
                  {active && (
                    <motion.span
                      layoutId="ol-familiar-bar"
                      className="hidden lg:block absolute -left-px top-0 bottom-0 w-[2px] bg-white/25 overflow-hidden"
                    >
                      {!held && !reduce && inView && (
                        <motion.span
                          key={i}
                          className="absolute inset-x-0 top-0 bg-[var(--sw-mint)]"
                          initial={{ height: "0%" }}
                          animate={{ height: "100%" }}
                          transition={{ duration: HOLD / 1000, ease: "linear" }}
                        />
                      )}
                    </motion.span>
                  )}
                  <button
                    type="button"
                    onClick={() => {
                      setHeld(true);
                      setI(j);
                    }}
                    className={`text-left py-2.5 lg:pl-6 whitespace-nowrap font-head text-[16px] md:text-[18px] transition ${
                      active ? "text-white" : "text-white/40 hover:text-white/70"
                    }`}
                  >
                    {x.role}
                  </button>
                </li>
              );
            })}
          </ul>

          <div className="min-h-[300px] md:min-h-[340px]">
            <AnimatePresence mode="wait">
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5, ease }}
              >
                <blockquote className="font-head text-white text-[26px] sm:text-[34px] lg:text-[44px] leading-[1.18] tracking-[-0.01em] max-w-[26ch] text-balance">
                  &ldquo;{q.text}&rdquo;
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <span className="text-white/55 text-[16px]">
                    {q.role}, {q.org}
                  </span>
                  {q.link && (
                    <a
                      href={assetUrl(q.link.href)}
                      className="group inline-flex items-center gap-2 font-head font-semibold text-[16px] text-[var(--sw-mint)]"
                    >
                      {q.link.label}
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </a>
                  )}
                </figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
