"use client";

import { useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";
import { BrickStrip, SectionIcon } from "./motifs";

type Module = { n: string; sym: string; name: string; line: string; desc: string };

const MODULES: Module[] = [
  {
    n: "1",
    sym: "Ca",
    name: "Catalog & supplier feed engine",
    line: "Supplier feeds in, clean catalog out — no retyping.",
    desc: "Connect supplier price lists and feeds so prices and stock update automatically — whether the supplier sends an API feed or an Excel file — and get fast tools to make product pages your own, instead of copies of every other shop’s.",
  },
  {
    n: "2",
    sym: "Mk",
    name: "Marketplaces & shopping feeds",
    line: "Sell on Amazon and Google Shopping from one catalog.",
    desc: "List on Amazon, eBay, local marketplaces and Google Shopping from the catalog you already have. Stock and prices stay synced, and every order lands in one screen — no double bookkeeping.",
  },
  {
    n: "3",
    sym: "Su",
    name: "Subscription boxes & gift subscriptions",
    line: "Monthly boxes and gift subscriptions that bill themselves.",
    desc: "Curate a monthly box from the catalog you already carry. Subscriptions per child and age group, 3- and 6-month gift subscriptions, and self-serve pause, skip and cancel — the billing runs itself.",
  },
  {
    n: "4",
    sym: "Sh",
    name: "Shipping rules for difficult products",
    line: "Battery, chemical and magnet rules enforced at checkout.",
    desc: "Flag products as battery, chemical or magnet and the checkout enforces the rules — ground-only, no air freight, not shipped abroad, declarations where required. The problem is caught before the order exists.",
  },
  {
    n: "5",
    sym: "Ba",
    name: "Batteries & extras reminder",
    line: "The cart reminds buyers what the kit needs to work.",
    desc: "Each product carries a short “needed to use it” list. The cart checks it quietly — “this kit needs 4 AA batteries — add them?” Higher order value, and fewer ruined gift mornings.",
  },
];

function ModuleTiles() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4 items-start">
      {MODULES.map((m) => {
        const isOpen = open === m.n;

        if (isOpen) {
          return (
            <div
              key={m.n}
              className="col-span-2 md:col-span-2 flex flex-col rounded-[4px] p-5 md:p-6"
              style={{
                background: "rgba(63,74,175,0.06)",
                border: "1px solid rgba(63,74,175,0.55)",
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <span className="font-head text-[var(--sw-blue)] text-[26px] md:text-[30px] leading-none tracking-[-0.01em]">
                  {m.sym}
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(null)}
                  aria-label={`Close ${m.name}`}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-[2px] border border-[var(--sw-black)]/15 text-[var(--sw-black)]/60 hover:bg-[var(--sw-black)]/5 transition"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              </div>
              <h4 className="font-head text-[var(--sw-black)] text-[16px] md:text-[18px] leading-snug mt-3">
                {m.name}
              </h4>
              <p className="text-[13px] md:text-[14px] text-[var(--sw-black)]/70 leading-relaxed mt-2">
                {m.desc}
              </p>
            </div>
          );
        }

        return (
          <button
            key={m.n}
            type="button"
            onClick={() => setOpen(m.n)}
            aria-expanded={false}
            className="group relative h-full text-left rounded-[4px] p-5 md:p-6 transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "rgba(63,74,175,0.04)",
              border: "1px solid rgba(63,74,175,0.25)",
            }}
          >
            <span className="absolute top-3 right-3.5 label-code text-[10px] text-[var(--sw-blue)]/50 tabular-nums">
              {m.n}
            </span>
            <span className="block font-head text-[var(--sw-black)] text-[30px] md:text-[38px] leading-none tracking-[-0.01em] group-hover:text-[var(--sw-blue)] transition-colors">
              {m.sym}
            </span>
            <span className="block font-head text-[var(--sw-black)] text-[13px] md:text-[14px] leading-snug mt-3">
              {m.name}
            </span>
            <span className="block text-[11px] md:text-[12px] text-[var(--sw-black)]/55 leading-snug mt-1.5">
              {m.line}
            </span>
            <span className="mt-3 inline-flex items-center gap-1 label-code text-[9px] text-[var(--sw-blue)]/70 group-hover:text-[var(--sw-blue)] transition-colors">
              Open
              <ArrowUpRight className="h-3 w-3" />
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function AcceleratorAtAGlance() {
  const spec: [string, React.ReactNode][] = [
    [
      "Live in",
      <>
        12 weeks · kickoff to production{" "}
        <span className="text-amber-600/90">[confirm against reference delivery]</span>
      </>,
    ],
    ["Works on", "Shopify · Magento / Adobe Commerce · BigCommerce · WooCommerce · custom"],
    [
      "Connects to",
      "Supplier feeds (API, Excel/CSV, SFTP) · marketplaces · Google Shopping · your ERP or warehouse software",
    ],
    ["Peak season", "Sized for the Q4 gift rush and the January exchange wave"],
    ["After launch", "Your admin team runs every module — no monthly developer dependency"],
    ["You keep", "Runbooks · architecture docs · admin training · full code ownership"],
  ];

  return (
    <section
      id="at-a-glance"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden text-[var(--sw-black)] scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <Reveal>
          <div className="flex items-center gap-2.5 mb-5">
            <SectionIcon name="atom" tone="light" />
            <span className="label-code text-[var(--sw-black)]/55">ACCELERATOR · CHARGED</span>
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[60px] leading-[1.04] max-w-[26ch]">
            The accelerator is already built.{" "}
            <span className="text-[var(--sw-blue)]">Configure it to your business</span>
          </h2>
          <p className="mt-6 text-[15px] md:text-[17px] text-[var(--sw-black)]/70 leading-relaxed max-w-[62ch]">
            These modules sit on top of your existing commerce platform —
            Shopify, Magento / Adobe Commerce, BigCommerce, WooCommerce, or
            custom. Not instead of it. You keep everything your store already
            does well. You add the parts a STEM toy retailer actually needs —
            instead of spending 18 months discovering them on your own budget.
            Every module is a one-time build: after launch your own team runs it
            from the admin, with no monthly developer dependency.
          </p>
        </Reveal>

        {/* Five module tiles — click to open in place */}
        <Reveal>
          <div className="mt-12 md:mt-16">
            <div className="label-code text-[var(--sw-blue)] mb-5">
              FIVE MODULES · LIVE IN 12 WEEKS
            </div>
            <ModuleTiles />
          </div>
        </Reveal>

        {/* Always included, not a module */}
        <Reveal>
          <div className="mt-10 md:mt-12">
            <BrickStrip tone="light" count={20} className="mb-5" />
            <p className="text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed max-w-[80ch] italic">
              Always included, not a module: speed, analytics, accessibility,
              privacy fit for a children&apos;s audience, documentation, and
              training ship with every delivery as the baseline — never billed
              as extras.
            </p>
          </div>
        </Reveal>

        {/* What you get on day one */}
        <Reveal delay={0.1}>
          <div
            className="relative rounded-[4px] p-6 md:p-8 text-white overflow-hidden mt-12 md:mt-16"
            style={{
              background: "linear-gradient(180deg, #171a38 0%, #10132c 100%)",
              border: "1px solid rgba(230,231,239,0.08)",
            }}
          >
            <span
              className="absolute top-0 left-0 h-[3px] w-20"
              style={{ background: "var(--sw-mint)" }}
            />
            <h3 className="font-head text-white text-[18px] md:text-[20px] leading-tight mb-7">
              What you get on day one
            </h3>
            <dl className="grid md:grid-cols-2 gap-x-10 gap-y-0">
              {spec.map(([k, v], i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 6 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.35 }}
                  viewport={{ once: true, amount: 0.25 }}
                  className="grid grid-cols-[110px_1fr] gap-4 py-3 border-b border-white/10"
                >
                  <dt className="label-code text-white/55">{k}</dt>
                  <dd className="text-[13px] md:text-[14px] text-white/90 leading-snug">{v}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </Reveal>

        {/* mid-page CTA */}
        <Reveal>
          <div className="mt-14 md:mt-16 pt-10 border-t border-[var(--sw-black)]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.25] max-w-[46ch]">
              12 weeks kickoff to live. Layered onto the platform you already
              run, not a forced replatform.
            </p>
            <a href="#cta" className={btnLight}>
              See if it fits your store
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
