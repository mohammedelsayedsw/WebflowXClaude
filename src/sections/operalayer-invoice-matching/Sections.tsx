"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { H2, Rise, Stats } from "@/sections/operalayer/kit/parts";
import { ease } from "@/sections/operalayer/kit/ui";
import {
  InvoiceList,
  CaptureVisual,
  ReadingVisual,
  LineCheckVisual,
  DuplicateVisual,
  ExportVisual,
} from "@/sections/operalayer-invoice-matching/Visuals";

/* ---------- Results ---------- */

export function Results() {
  return (
    <section id="results" className="relative py-24 md:py-32 scroll-mt-20">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <Rise className="lg:col-span-6">
            <h2 className={H2}>What changed at a B2B supplier</h2>
          </Rise>
          <Rise delay={0.08} className="lg:col-span-6">
            <p className="text-white/70 text-[17px] md:text-[19px] leading-[1.6]">
              An electrical and industrial supplier buys from about a hundred vendors, and every vendor sends its
              invoice in its own layout. One app now reads all of them and checks each line against Navision.
            </p>
          </Rise>
        </div>
        <div className="mt-16">
          <Stats
            items={[
              { pre: "~", n: 100, label: "supplier layouts", sub: "read by one app, in any format each vendor sends" },
              { n: 87, post: "%", label: "of invoices pass untouched", sub: "the rest reach a person with the reason attached" },
              { n: 2, label: "people, every morning", sub: "used to check each invoice against the order by hand" },
              { n: 4, post: " wk", label: "from start to live", sub: "with a prototype on the client's own invoices in week one" },
            ]}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Demo ---------- */

export function Demo() {
  return (
    <section id="demo" className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-1/4 h-[70%]"
        style={{ background: "radial-gradient(760px 420px at 70% 50%, rgba(63,74,175,0.26), transparent 70%)" }}
      />
      <div className="wrap relative">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <Rise className="lg:col-span-7">
            <h2 className={H2}>A morning of invoices, sorted before anyone opens one</h2>
          </Rise>
          <Rise delay={0.08} className="lg:col-span-5">
            <p className="text-white/70 text-[17px] leading-[1.6]">
              Every invoice gets a status as soon as it is read. The ones that agree with the order are ready to
              post, and each problem carries its reason on the row.
            </p>
          </Rise>
        </div>
        <Rise delay={0.1} className="mt-14">
          <InvoiceList />
        </Rise>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */

const STEPS = [
  {
    key: "capture",
    tab: "Upload",
    title: "Drop in a pile of PDFs or take a photo",
    body: "Invoices arrive the way suppliers send them. Up to 50 files go in at once, and each joins the queue on its own.",
    Visual: CaptureVisual,
  },
  {
    key: "read",
    tab: "Read",
    title: "Every field is read, in any language",
    body: "This invoice is in German. OperaLayer reads each field, says how sure it is, and remembers the layout for this supplier.",
    Visual: ReadingVisual,
  },
  {
    key: "check",
    tab: "Check",
    title: "Each line is checked against the order in Navision",
    body: "The price on this line is 192 € above the purchase order and outside the tolerance you set, so the invoice cannot be exported yet.",
    Visual: LineCheckVisual,
  },
  {
    key: "duplicate",
    tab: "Catch duplicates",
    title: "The same invoice never gets paid twice",
    body: "An invoice that matches one already received is held back and flagged for a person to decide.",
    Visual: DuplicateVisual,
  },
  {
    key: "export",
    tab: "Post",
    title: "Clean invoices go into Navision with one click",
    body: "When every line agrees, your team confirms the invoice and exports it. Nobody types it in a second time.",
    Visual: ExportVisual,
  },
];

export function HowItWorks() {
  const [i, setI] = useState(0);
  const s = STEPS[i];
  return (
    <section id="how" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <Rise>
          <h2 className={H2}>How an invoice goes through</h2>
        </Rise>
        <div className="mt-10 overflow-x-auto -mx-5 px-5">
          <div className="inline-flex rounded-[2px] border border-white/20 p-1">
            {STEPS.map((x, j) => (
              <button
                key={x.key}
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
            key={s.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="mt-12 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            <div className="lg:col-span-4">
              <h3 className="font-head text-white text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.015em]">{s.title}</h3>
              <p className="mt-5 text-white/70 text-[17px] leading-[1.6]">{s.body}</p>
              {i < STEPS.length - 1 && (
                <button
                  type="button"
                  onClick={() => setI(i + 1)}
                  className="mt-8 font-head font-semibold text-[16px] text-[var(--sw-mint)] hover:text-white transition"
                >
                  Next: {STEPS[i + 1].tab} →
                </button>
              )}
            </div>
            <div className="lg:col-span-8">
              <s.Visual />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------- Quote ---------- */

export function Quote() {
  return (
    <section id="quote" className="relative py-20 md:py-32">
      <div className="wrap grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-14 lg:gap-16">
        <Rise className="lg:col-span-8">
          <blockquote>
            <p className="font-head text-white text-[28px] md:text-[40px] leading-[1.18] tracking-[-0.02em] font-semibold">
              &ldquo;Buyers are matching invoices to POs by hand because every supplier sends the PDF in a different
              format.{" "}
              <span className="text-[var(--sw-orange)]">Two people, every morning.</span>&rdquo;
            </p>
            <footer className="mt-8">
              <div className="text-white text-[17px] font-semibold">Head of Procurement</div>
              <div className="text-white/55 text-[15px] mt-1">Industrial supplier, before OperaLayer</div>
            </footer>
          </blockquote>
        </Rise>
        <Rise delay={0.1} className="lg:col-span-4">
          <h3 className="font-head text-white text-[22px] md:text-[24px]">What the app took over</h3>
          <ol className="mt-6 border-t border-white/10">
            {[
              ["Before", "Each PDF opened, retyped, and checked against the order by hand"],
              ["Now", "Invoices read and checked against Navision as they arrive"],
              ["Next", "Invoices read straight from the email inbox, and a direct connection to Navision"],
            ].map(([k, v], i) => (
              <li key={k} className="grid grid-cols-[64px_1fr] gap-4 py-4 border-b border-white/10">
                <span className="font-head font-bold text-[16px]" style={{ color: i === 1 ? "var(--sw-mint)" : "rgba(255,255,255,.5)" }}>
                  {k}
                </span>
                <span className={`text-[16px] leading-[1.5] ${i === 1 ? "text-white font-semibold" : "text-white/75"}`}>{v}</span>
              </li>
            ))}
          </ol>
        </Rise>
      </div>
    </section>
  );
}
