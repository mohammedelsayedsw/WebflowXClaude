"use client";

import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { SignalBars } from "./motifs";

export function AcceleratorAtAGlance() {
  const spec: [string, React.ReactNode][] = [
    ["Live in", "6 to 12 weeks, scoped per module set"],
    ["Works with", "Magento / Adobe Commerce · Shopify · BigCommerce · commercetools · Salesforce Commerce Cloud · SAP Commerce Cloud · custom platforms"],
    ["Connects to", "Your BSS, CRM, ERP, provisioning, and fulfillment systems"],
    ["Standards", "API-first architecture, aligned with TM Forum patterns for product catalog and ordering"],
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
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-14">
          {/* LEFT — intro text */}
          <Reveal>
            <div className="mb-5 flex items-center gap-2.5">
              <SignalBars tone="light" />
              <span className="label-code text-[var(--sw-black)]/55">BUILT · CONNECTS TO YOUR SYSTEMS</span>
            </div>
            <h2 className="font-head max-w-[26ch] text-[34px] leading-[1.04] text-[var(--sw-black)] md:text-[48px] lg:text-[56px]">
              The accelerator is already built.{" "}
              <span className="text-[var(--sw-blue)]">Connect it to your systems</span>
            </h2>
            <p className="mt-6 max-w-[60ch] text-[15px] leading-relaxed text-[var(--sw-black)]/70 md:text-[17px]">
              This is not a generic web shop and not a new BSS. It is the store
              layer built for how telecoms sell: a phone that comes with a plan,
              a price that depends on the bank and the contract, a SIM that needs
              a number and an ID check before it can ship.
            </p>
            <p className="mt-4 max-w-[60ch] text-[15px] leading-relaxed text-[var(--sw-black)]/70 md:text-[17px]">
              You keep the systems you already run. We add the store layer on
              top.
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
                    className="grid grid-cols-[96px_1fr] gap-4 border-b border-white/10 py-3 last:border-b-0"
                  >
                    <dt className="label-code text-white/55">{k}</dt>
                    <dd className="text-[13px] leading-snug text-white/90 md:text-[14px] [text-wrap:pretty]">{v}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
