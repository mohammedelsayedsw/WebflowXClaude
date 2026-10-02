"use client";

import { motion } from "motion/react";
import { H2, Rise, useSeq } from "@/sections/operalayer/kit/parts";
import { C, Window, Tag, AppButton, ease } from "@/sections/operalayer/kit/ui";
import { StateMap } from "@/sections/operalayer-pricing-control/StateMap";

/* One product's price in California, built up from the state's rules. */
const PARTS = [
  { k: "Supplier cost", v: 14.2, c: C.grey },
  { k: "California excise", v: 3.15, c: C.blue },
  { k: "Margin type 3 of 8", v: 7.3, c: C.mint },
  { k: "Rounded to .90", v: 0.25, c: "rgba(255,255,255,0.4)" },
];
const TOTAL = PARTS.reduce((a, p) => a + p.v, 0);
const usd = (n: number) => `$${n.toFixed(2)}`;

function PricePanel({ t }: { t: number }) {
  return (
    <div className="p-[1.5em] flex flex-col gap-[1.1em] h-full">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div style={{ color: C.faint, fontSize: "0.85em" }}>Product 10442 in</div>
          <div className="font-semibold" style={{ fontSize: "1.35em" }}>
            California
          </div>
        </div>
        <Tag tone={t >= 2 ? "mint" : "dim"}>{t >= 2 ? "Recalculated" : "Waiting"}</Tag>
      </div>

      {/* stacked price bar */}
      <div className="flex h-[0.7em] w-full overflow-hidden rounded-[1px]" style={{ background: "rgba(255,255,255,0.06)" }}>
        {PARTS.map((p, i) => (
          <motion.span
            key={p.k}
            className="h-full origin-left"
            style={{ width: `${(p.v / TOTAL) * 100}%`, background: p.c }}
            initial={false}
            animate={{ scaleX: t >= 2 ? 1 : 0, opacity: t >= 2 ? 1 : 0 }}
            transition={{ duration: 0.5, delay: t >= 2 ? i * 0.18 : 0, ease }}
          />
        ))}
      </div>

      <div>
        {PARTS.map((p, i) => (
          <motion.div
            key={p.k}
            className="flex items-center justify-between gap-3 py-[0.55em] border-t"
            style={{ borderColor: C.line }}
            initial={false}
            animate={{ opacity: t >= 2 ? 1 : 0.3 }}
            transition={{ delay: t >= 2 ? i * 0.18 : 0 }}
          >
            <span className="flex items-center gap-[0.6em]" style={{ color: C.dim }}>
              <span className="h-[0.55em] w-[0.55em] rounded-[1px]" style={{ background: p.c }} />
              {p.k}
            </span>
            <span className="font-mono">{i === 0 ? usd(p.v) : `+${usd(p.v)}`}</span>
          </motion.div>
        ))}
        <div className="flex items-baseline justify-between gap-3 pt-[0.8em] border-t" style={{ borderColor: "rgba(255,255,255,0.25)" }}>
          <span className="font-semibold">Shelf price</span>
          <span className="font-mono">
            <span className="line-through mr-[0.6em]" style={{ color: C.faint, fontSize: "0.85em" }}>
              $24.50
            </span>
            <span className="font-semibold" style={{ fontSize: "1.35em" }}>
              {usd(TOTAL)}
            </span>
          </span>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-[0.4em]">
        <span style={{ color: C.dim, fontSize: "0.9em" }}>
          {t >= 4 ? "Goes to Magento Monday at 06:00" : t >= 3 ? "50 of 50 states ready" : "Working out new prices"}
        </span>
        <AppButton state={t >= 4 ? 2 : t >= 3 ? 1 : 0} idle="Approve" busy="Approve" done="Scheduled" />
      </div>
    </div>
  );
}

export function Demo() {
  const { ref, t } = useSeq(4, 1300, 500);
  return (
    <section id="demo" className="relative py-24 md:py-32 scroll-mt-20 overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-1/3 h-[60%]" style={{ background: "radial-gradient(800px 400px at 40% 50%, rgba(110,247,110,0.08), transparent 70%)" }} />
      <div className="wrap relative">
        <div className="grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <Rise className="lg:col-span-7">
            <h2 className={H2}>One cost change, priced in all 50 states</h2>
          </Rise>
          <Rise delay={0.08} className="lg:col-span-5">
            <p className="text-white/70 text-[17px] leading-[1.6]">
              A supplier raises the cost of one product. Pricing Control works out the new price in every state from
              that state&apos;s rules, and waits for a person to approve the update.
            </p>
          </Rise>
        </div>

        <div ref={ref} className="mt-14" style={{ containerType: "inline-size" }}>
          <Rise delay={0.1}>
            <div style={{ fontSize: "clamp(10px, 1.15cqw, 14px)" }}>
              <Window title="Pricing Control · Product 10442 · cost $14.20">
                <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)]">
                  <div className="p-[1.5em] border-b md:border-b-0 md:border-r" style={{ borderColor: C.line }}>
                    <div className="flex items-center justify-between gap-3 mb-[1.2em]">
                      <span style={{ color: C.dim }}>New price by state</span>
                      <span className="flex items-center gap-[1em]" style={{ color: C.faint, fontSize: "0.85em" }}>
                        <span className="flex items-center gap-[0.4em]">
                          <span className="h-[0.6em] w-[0.6em] rounded-[1px]" style={{ background: C.mint }} />
                          Recalculated
                        </span>
                        <span className="flex items-center gap-[0.4em]">
                          <span className="h-[0.6em] w-[0.6em] rounded-[1px] bg-white/10" />
                          Not yet
                        </span>
                      </span>
                    </div>
                    <StateMap on={t >= 1} focus="CA" />
                  </div>
                  <PricePanel t={t} />
                </div>
              </Window>
            </div>
          </Rise>
        </div>
      </div>
    </section>
  );
}
