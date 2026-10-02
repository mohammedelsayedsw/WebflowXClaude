"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { assetUrl } from "@/lib/assets";
import { H2, Rise, Stats } from "@/sections/operalayer/kit/parts";
import { ease } from "@/sections/operalayer/kit/ui";
import { Workspace } from "@/sections/operalayer/Hero";
import { ReadVisual, CheckVisual, ApproveVisual, SeeVisual } from "@/sections/operalayer/Product";

/* ---------- What it is ---------- */

export function WhatItIs() {
  return (
    <section id="what" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <Rise className="lg:col-span-6">
            <h2 className={H2}>What OperaLayer is</h2>
          </Rise>
          <Rise delay={0.08} className="lg:col-span-6">
            <p className="text-white/70 text-[17px] md:text-[19px] leading-[1.6]">
              A set of small AI apps that run on top of the systems you already have. Each app takes one
              process your team still does by hand, in a spreadsheet or an inbox, and runs it against your
              ERP. People only see what needs a decision.
            </p>
          </Rise>
        </div>
        <div className="mt-16">
          <Stats
            items={[
              { n: 87, post: "%", label: "of supplier invoices", sub: "go through with nobody touching them, at a B2B electrical supplier" },
              { pre: "€", n: 34, post: "M", label: "of seasonal purchasing", sub: "tracked live across 50+ supplier brands by a Baltic retailer" },
              { n: 50, label: "US states priced", sub: "from one set of rules, with updates sent to Magento on schedule" },
              { n: 4, post: " wk", label: "from start to live", sub: "with a working prototype on your own data in week one" },
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
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/3 h-[60%]" style={{ background: "radial-gradient(800px 400px at 50% 50%, rgba(63,74,175,0.28), transparent 70%)" }} />
      <div className="wrap relative">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <Rise className="lg:col-span-7">
            <h2 className={H2}>One supplier invoice, checked against Navision</h2>
          </Rise>
          <Rise delay={0.08} className="lg:col-span-5">
            <p className="text-white/70 text-[17px] leading-[1.6]">
              A German invoice from Cascade Cable Works arrives as a PDF. OperaLayer reads both lines, finds the
              purchase order in Navision, checks each line against it, and gets the invoice ready to post.
            </p>
          </Rise>
        </div>
        <Rise delay={0.1} className="mt-14">
          <Workspace />
        </Rise>
      </div>
    </section>
  );
}

/* ---------- How it works: four parts, one at a time ---------- */

const PARTS = [
  {
    key: "read",
    tab: "Reads",
    title: "Reads any supplier document",
    body: "PDFs, scans, and phone photos in any layout or language. Every field comes with how sure OperaLayer is about it.",
    Visual: ReadVisual,
  },
  {
    key: "check",
    tab: "Checks",
    title: "Checks every line against your ERP",
    body: "Each line is compared with the purchase order. A price or quantity that does not agree stops the document before it is posted.",
    Visual: CheckVisual,
  },
  {
    key: "decide",
    tab: "Asks a person",
    title: "Asks a person only about the exceptions",
    body: "Your team sees a short list of what needs a decision, with the reason on every row. Everything that agrees goes through by itself.",
    Visual: ApproveVisual,
  },
  {
    key: "see",
    tab: "Reports",
    title: "Shows the whole operation on one screen",
    body: "Money at risk, open orders, and the health of the ERP connection, live, for the people who run the business.",
    Visual: SeeVisual,
  },
];

export function HowItWorks() {
  const [i, setI] = useState(0);
  const p = PARTS[i];
  return (
    <section id="how" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <Rise>
          <h2 className={H2}>How it works</h2>
        </Rise>
        <div className="mt-10 overflow-x-auto -mx-5 px-5">
          <div className="inline-flex rounded-[2px] border border-white/20 p-1">
            {PARTS.map((x, j) => (
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
            key={p.key}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease }}
            className="mt-12 grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-10 lg:gap-14 items-center"
          >
            <div className="lg:col-span-4">
              <h3 className="font-head text-white text-[28px] md:text-[34px] leading-[1.1] tracking-[-0.015em]">{p.title}</h3>
              <p className="mt-5 text-white/70 text-[17px] leading-[1.6]">{p.body}</p>
              {i < PARTS.length - 1 && (
                <button type="button" onClick={() => setI(i + 1)} className="mt-8 font-head font-semibold text-[16px] text-[var(--sw-mint)] hover:text-white transition">
                  Next: {PARTS[i + 1].tab} →
                </button>
              )}
            </div>
            <div className="lg:col-span-8">
              <p.Visual />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ---------- Apps: before and after, like a benchmark ---------- */

const APPS = [
  {
    slug: "invoice-matching",
    name: "Invoice matching",
    erp: "Microsoft Dynamics NAV",
    before: "Two people checked every supplier invoice against the order by hand, every morning.",
    after: "87% of invoices go through with nobody touching them. People see the rest.",
    result: "87%",
  },
  {
    slug: "supplier-purchasing",
    name: "Supplier purchasing",
    erp: "Microsoft Business Central",
    before: "Each of 50+ supplier brands had its own spreadsheet, and changes came by email.",
    after: "The whole SS26 season is tracked live, and 52 invoice differences were caught before the goods reached the shelves.",
    result: "€34M",
  },
  {
    slug: "pricing-control",
    name: "Pricing control",
    erp: "Magento (Adobe Commerce)",
    before: "One Excel workbook, kept running by one person, priced every US state.",
    after: "All 50 states are priced from one set of rules, with 8 margin types recalculated per state.",
    result: "50 states",
  },
];

export function AppsRows() {
  return (
    <section id="apps" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="wrap">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <Rise className="lg:col-span-7">
            <h2 className={H2}>Apps already running at clients</h2>
          </Rise>
          <Rise delay={0.08} className="lg:col-span-5">
            <p className="text-white/70 text-[17px] leading-[1.6]">
              Each app started as one process a client kept doing by hand. Here is what each one replaced.
            </p>
          </Rise>
        </div>
        <div className="mt-14 border-t border-white/10">
          {APPS.map((a, i) => (
            <Rise key={a.slug} delay={i * 0.06}>
              <a href={assetUrl(`/operalayer/${a.slug}`)} className="group grid grid-cols-[minmax(0,1fr)] md:grid-cols-12 gap-x-8 gap-y-5 py-9 border-b border-white/10">
                <div className="md:col-span-3">
                  <div className="font-head text-white text-[22px] md:text-[24px] font-semibold group-hover:text-[var(--sw-mint)] transition">{a.name} →</div>
                  <div className="mt-1 text-white/50 text-[14px]">{a.erp}</div>
                </div>
                <div className="md:col-span-7 space-y-3">
                  <div className="flex gap-4">
                    <span className="w-[4.5rem] shrink-0 text-[13px] text-[var(--sw-dark-grey)] pt-1">Before</span>
                    <p className="text-white/55 text-[16px] leading-relaxed">{a.before}</p>
                  </div>
                  <div className="flex gap-4">
                    <span className="w-[4.5rem] shrink-0 text-[13px] text-[var(--sw-mint)] pt-1">Now</span>
                    <p className="text-white text-[16px] leading-relaxed">{a.after}</p>
                  </div>
                </div>
                <div className="md:col-span-2 md:text-right font-head font-bold text-[var(--sw-mint)] text-[32px] md:text-[38px] leading-none tracking-[-0.02em]">
                  {a.result}
                </div>
              </a>
            </Rise>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Built on your systems, owned by you ---------- */

const SYSTEMS = [
  ["Microsoft Dynamics NAV", "Purchase orders in, invoices and goods receipts out"],
  ["Microsoft Business Central", "Orders and supplier data for seasonal purchasing"],
  ["Magento (Adobe Commerce)", "Prices sent to the store through its API"],
];
const OWN = [
  ["Your code and your data", "You own what we build. No lock-in and no hidden costs."],
  ["People make the calls", "Anything unusual waits for a person to approve it."],
  ["Every decision on record", "Who approved what, and when, stays in the audit trail."],
  ["ISO-based processes", "For information security, cloud security, and quality management."],
];

export function Systems() {
  return (
    <section id="systems" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="wrap grid grid-cols-[minmax(0,1fr)] lg:grid-cols-2 gap-16 lg:gap-20">
        <Rise>
          <h2 className="font-head text-white text-[32px] md:text-[42px] leading-[1.06] tracking-[-0.02em]">Runs on the ERP you already have</h2>
          <p className="mt-5 text-white/65 text-[17px] leading-[1.6] max-w-[36rem]">
            OperaLayer reads from your ERP and writes back to it. Nothing is migrated. For other systems we look at
            what they can share through an API, a database, or a file export.
          </p>
          <div className="mt-10 border-t border-white/10">
            {SYSTEMS.map(([n, d]) => (
              <div key={n} className="py-5 border-b border-white/10 grid grid-cols-[minmax(0,1fr)_auto] gap-4 items-baseline">
                <div>
                  <div className="text-white font-semibold font-head text-[18px]">{n}</div>
                  <div className="mt-1 text-white/55 text-[15px]">{d}</div>
                </div>
                <span className="inline-flex items-center gap-2 text-[13px] text-[var(--sw-mint)]">
                  <span className="h-1.5 w-1.5 bg-[var(--sw-mint)]" /> In production
                </span>
              </div>
            ))}
          </div>
        </Rise>
        <Rise delay={0.1}>
          <h2 className="font-head text-white text-[32px] md:text-[42px] leading-[1.06] tracking-[-0.02em]">Owned by you</h2>
          <p className="mt-5 text-white/65 text-[17px] leading-[1.6] max-w-[36rem]">
            OperaLayer sits next to the systems that run your business, so it is built to be checked and trusted.
          </p>
          <div className="mt-10 border-t border-white/10">
            {OWN.map(([n, d]) => (
              <div key={n} className="py-5 border-b border-white/10">
                <div className="text-white font-semibold font-head text-[18px]">{n}</div>
                <div className="mt-1 text-white/55 text-[15px]">{d}</div>
              </div>
            ))}
          </div>
        </Rise>
      </div>
    </section>
  );
}
