"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";

/**
 * The four live demos, the second of the page's two centerpieces.
 *
 * Each block is a full-width card: the typed request at the top, the checklist
 * of what Ari did, and the status. Demo 4 adds a before and after row instead
 * of a preview, because the point of a Hyvä rebuild is the numbers.
 *
 * Checklists stagger in on scroll into view. Under prefers-reduced-motion the
 * stagger is dropped and the list renders in place.
 */

type Demo = {
  id: string;
  n: string;
  title: string;
  request: string;
  did: string[];
  status: string;
  note?: string;
  beforeAfter?: { label: string; before: string; after: string }[];
};

const DEMOS: Demo[] = [
  {
    id: "demo-sale",
    n: "1",
    title: "Launch a sale",
    request:
      "launch the autumn sale on Outerwear, 25% off, old price crossed out, a countdown banner, bestsellers first",
    did: [
      "Read the category and 90 days of orders, 4,108 products",
      "Wrote the catalog price rule, 25% off",
      "Built the countdown banner across 2 store views",
      "Re-sorted by units sold and reindexed",
    ],
    status: "Live in 2m 10s",
  },
  {
    id: "demo-upgrade",
    n: "2",
    title: "A version upgrade",
    request: "upgrade us from 2.4.6 to 2.4.9 and tell me what breaks",
    did: [
      "Resolved the dependency tree, 142 modules",
      "Patched 3 module conflicts",
      "Walked the storefront and admin, 58 pages, checkout and orders passed",
    ],
    status: "Done in 44 min, 0 regressions",
  },
  {
    id: "demo-payment",
    n: "3",
    title: "Add a payment method",
    request: "put Klarna in the checkout and place a test order",
    did: [
      "Installed and enabled the module",
      "Stored the API keys, sandbox on",
      "Enabled on the UK and IE store views only",
      "Placed, captured and refunded test order #100004821",
    ],
    status: "Live in 18 min",
  },
  {
    id: "demo-hyva",
    n: "4",
    title: "A full Hyvä rebuild",
    request: "rebuild the storefront on Hyvä from our brand",
    did: [],
    status: "Before and after",
    note: "Checkout left on your current payment provider, untouched",
    beforeAfter: [
      { label: "JavaScript loaded", before: "2.1 MB", after: "380 KB" },
      { label: "Largest paint", before: "4.8s", after: "1.2s" },
      { label: "Requests", before: "186", after: "Far fewer" },
    ],
  },
];

function Checklist({ items }: { items: string[] }) {
  const reduce = useReducedMotion();

  return (
    <ul className="flex flex-col gap-3">
      {items.map((item, i) => (
        <motion.li
          key={item}
          className="flex items-start gap-3"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.4,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Check
            className="mt-0.5 h-4 w-4 shrink-0"
            strokeWidth={2.5}
            style={{ color: "var(--sw-mint)" }}
          />
          <span className="text-white/75 text-[15px] md:text-[16px] leading-snug">
            {item}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

function BeforeAfter({
  rows,
}: {
  rows: { label: string; before: string; after: string }[];
}) {
  const reduce = useReducedMotion();

  return (
    <div className="flex flex-col gap-3">
      {rows.map((r, i) => (
        <motion.div
          key={r.label}
          className="flex flex-wrap items-center gap-x-4 gap-y-1 rounded-[4px] border border-white/10 bg-white/[0.03] px-5 py-4"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.4,
            delay: i * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <span className="text-white/55 text-[14px] md:text-[15px] min-w-[9rem]">
            {r.label}
          </span>
          <span className="font-head text-white/40 text-[18px] md:text-[22px] leading-none line-through">
            {r.before}
          </span>
          <ArrowRight
            className="h-4 w-4 text-white/30 shrink-0"
            strokeWidth={2}
            aria-hidden
          />
          <span
            className="font-head text-[20px] md:text-[26px] leading-none tracking-[-0.02em]"
            style={{ color: "var(--sw-mint)" }}
          >
            {r.after}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

function DemoCard({ demo }: { demo: Demo }) {
  return (
    <div className="rounded-[4px] border border-white/12 bg-white/[0.03] p-6 md:p-9">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span
          className="font-head text-[13px] md:text-[14px] tracking-[0.08em]"
          style={{ color: "var(--sw-mint)" }}
        >
          {demo.n}
        </span>
        <h3 className="font-head text-white text-[19px] md:text-[24px] leading-tight tracking-[-0.01em]">
          {demo.title}
        </h3>
      </div>

      <div className="mt-5 md:mt-6 rounded-[4px] bg-[var(--lp-bg-card)]/70 border border-white/8 px-5 py-4 md:px-6 md:py-5">
        <div className="label-code text-white/40 mb-2">The request</div>
        <p className="text-white/90 text-[15px] md:text-[17px] leading-[1.5]">
          &ldquo;{demo.request}&rdquo;
        </p>
      </div>

      <div className="mt-6 md:mt-7 grid gap-6 md:gap-8 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
        <div>
          {demo.beforeAfter ? (
            <BeforeAfter rows={demo.beforeAfter} />
          ) : (
            <>
              <div className="label-code text-white/40 mb-4">What Ari did</div>
              <Checklist items={demo.did} />
            </>
          )}
        </div>

        <div className="lg:pl-6 lg:border-l border-white/10">
          <div className="label-code text-white/40 mb-3">Status</div>
          <div
            className="font-head text-[20px] md:text-[24px] leading-tight tracking-[-0.02em]"
            style={{ color: "var(--sw-mint)" }}
          >
            {demo.status}
          </div>
          {demo.note ? (
            <p className="mt-3 text-white/55 text-[13px] md:text-[14px] leading-snug">
              {demo.note}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function Demos() {
  return (
    <section
      id="the-demos"
      className="relative py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(1000px 700px at 16% 28%, #303c96 0%, transparent 58%)," +
            "radial-gradient(720px 600px at 92% 12%, #060917 0%, transparent 55%)," +
            "radial-gradient(1200px 820px at 74% 86%, #223072 0%, transparent 50%)," +
            "radial-gradient(1500px 1000px at 56% 46%, #171d55 0%, #131843 40%, #0e1130 72%, #090c22 100%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 grid-backdrop opacity-30"
      />

      <div className="wrap relative">
        <div className="mb-12 md:mb-16 max-w-[48rem]">
          <Reveal>
            <div className="label-code mb-5 text-white/55">The demos</div>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
              Watch it build real changes, live
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 md:mt-6 text-white/75 text-[16px] md:text-[18px] leading-relaxed max-w-[64ch]">
              These are the kinds of requests we run in the session. Each one
              starts as a single sentence and ends as a change waiting for your
              approval.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col gap-5 md:gap-6">
          {DEMOS.map((d, i) => (
            <Reveal key={d.id} delay={i * 0.07}>
              <DemoCard demo={d} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-10 md:mt-12 text-white/70 text-[16px] md:text-[18px] leading-relaxed max-w-[70ch]">
            Every one of these started as a sentence, and none of them went live
            until a person approved it.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
