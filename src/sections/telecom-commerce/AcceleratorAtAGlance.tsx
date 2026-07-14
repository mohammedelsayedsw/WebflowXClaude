"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { SignalBars } from "./motifs";

export function AcceleratorAtAGlance() {
  const spec: [string, React.ReactNode][] = [
    [
      "Live in",
      <>
        6 weeks to a first live offer{" "}
        <span
          className="ml-1 inline-block rounded-[2px] px-1.5 py-0.5 align-middle text-[10px] tracking-[0.04em]"
          style={{
            border: "1px dashed rgba(63,74,175,0.5)",
            color: "rgba(63,74,175,0.85)",
            background: "rgba(63,74,175,0.06)",
          }}
        >
          TODO: confirm against reference delivery
        </span>
      </>,
    ],
    ["Works with", "Adobe Commerce · commercetools · Medusa · other modern engines"],
    ["Connects to", "Your BSS, CRM, ERP, provisioning, and fulfillment systems"],
    ["Standards", "TM Forum TMF620 (Product Catalog) and TMF622 (Product Ordering)"],
    ["After launch", "Your business team manages offers and prices, no IT tickets"],
    ["You keep", "Full code ownership · runbooks · architecture docs · training"],
  ];

  return (
    <section
      id="at-a-glance"
      className="relative scroll-mt-20 overflow-hidden bg-lp-bright py-28 text-[var(--sw-black)] md:py-36"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT — intro text */}
          <Reveal>
            <div className="mb-5 flex items-center gap-2.5">
              <SignalBars tone="light" />
              <span className="label-code text-[var(--sw-black)]/55">BUILT · CONFIGURE TO YOUR SYSTEMS</span>
            </div>
            <h2 className="font-head max-w-[26ch] text-[34px] leading-[1.04] text-[var(--sw-black)] md:text-[48px] lg:text-[56px]">
              The accelerator is already built.{" "}
              <span className="text-[var(--sw-blue)]">Configure it to your systems</span>
            </h2>
            <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-[var(--sw-black)]/70 md:text-[17px]">
              This is not a new BSS and not a generic web shop. It is the missing
              layer between the two, built for the way telecoms sell: bundles
              across fiber, mobile, and TV, prices that depend on who the
              customer is, orders that must reach several systems at once. You
              keep what works. We add what is missing. After launch your business
              team runs it from one interface, without IT tickets.
            </p>
          </Reveal>

          {/* RIGHT — What you get on day one */}
          <Reveal delay={0.1}>
            <div
              className="relative overflow-hidden rounded-[4px] p-6 text-white md:p-8"
              style={{
                background: "linear-gradient(180deg, #171a38 0%, #10132c 100%)",
                border: "1px solid rgba(230,231,239,0.08)",
              }}
            >
              <span
                className="absolute left-0 top-0 h-[3px] w-20"
                style={{ background: "var(--sw-mint)" }}
              />
              <h3 className="font-head mb-7 text-[18px] leading-tight text-white md:text-[20px]">
                What you get on day one
              </h3>
              <dl className="space-y-0">
                {spec.map(([k, v], i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.35 }}
                    viewport={{ once: true, amount: 0.25 }}
                    className="grid grid-cols-[110px_1fr] gap-4 border-b border-white/10 py-3 last:border-b-0"
                  >
                    <dt className="label-code text-white/55">{k}</dt>
                    <dd className="text-[13px] leading-snug text-white/90 md:text-[14px]">{v}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* Always included, not a module */}
        <Reveal>
          <div
            className="mt-12 flex flex-col gap-3 rounded-[4px] border border-[var(--sw-black)]/12 bg-white/60 p-6 md:flex-row md:items-center md:gap-6 md:p-7"
          >
            <span className="label-code shrink-0 text-[var(--sw-blue)]">ALWAYS INCLUDED, NOT A MODULE</span>
            <p className="text-[14px] leading-relaxed text-[var(--sw-black)]/75 md:text-[15px]">
              TM Forum aligned architecture (TMF620, TMF622), any commerce
              engine, any cloud, full code ownership, documentation, and
              training.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
