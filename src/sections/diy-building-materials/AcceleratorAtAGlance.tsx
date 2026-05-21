"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { btnLight } from "@/components/primitives/buttonStyles";

export function AcceleratorAtAGlance() {
  const modules = [
    { n: "1", name: "Multi-warehouse stock that doesn't lie" },
    { n: "2", name: "Trade and DIY in one storefront" },
    { n: "3", name: "Supplier-fed catalogs that stay clean" },
    { n: "4", name: "Search that matches intent, not keywords" },
    { n: "5", name: "Content velocity for seasonal campaigns" },
    { n: "6", name: "Peak resilience across spring and Black Friday" },
  ];

  const spec: [string, string][] = [
    ["Live in", "14 weeks · kickoff to production"],
    ["Stack", "Magento 2.4 LTS · Hyvä · Akeneo PIM · Loop54 · Amplience"],
    ["Connects to", "REST · GraphQL · SOAP · webhooks · message queues · SFTP · CSV"],
    ["ERP-ready", "SAP · Navision · Odoo · NetSuite · Pyramid · custom"],
    ["Proven across", "Sweden · Denmark · Lithuania · 3 peak seasons"],
    ["You keep", "Code · runbooks · architecture docs · admin training"],
  ];

  return (
    <section
      id="at-a-glance"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden text-[var(--sw-black)] scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[60px] leading-[1.04] max-w-[26ch]">
            The DIY back office is already built.{" "}
            <span className="text-[var(--sw-blue)]">Configure it to your business</span>
          </h2>
          <p className="mt-6 text-[15px] md:text-[17px] text-[var(--sw-black)]/70 leading-relaxed max-w-[58ch]">
            Production code, proven architecture, battle-tested through three peak seasons across Northern Europe. Configure it against your warehouses, your supplier feeds, and your trade accounts – instead of spending 18 months discovering what DIY retail actually needs.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-10 lg:gap-14 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Left – modules list */}
          <Reveal>
            <div className="relative bracket-frame p-5 md:p-7">
              <span className="bracket-bl" />
              <span className="bracket-br" />
              <h3 className="font-head text-[var(--sw-black)] text-[18px] md:text-[20px] leading-tight mb-6">
                Six modules that ship together
              </h3>

              <ul className="space-y-0">
                {modules.map((m, i) => (
                  <li key={m.n} className="group relative">
                    <div className="grid grid-cols-[40px_1fr] items-center gap-4 py-4 md:py-5 border-b border-[var(--sw-black)]/10 last:border-b-0">
                      <div className="label-code text-[var(--sw-blue)] tabular-nums">
                        {m.n}
                      </div>
                      <div className="font-head text-[var(--sw-black)] text-[16px] md:text-[18px] leading-tight">
                        {m.name}
                      </div>
                    </div>
                    {i < modules.length - 1 && (
                      <div className="absolute left-[19px] top-full w-px h-0 bg-[var(--sw-blue)]/30" />
                    )}
                  </li>
                ))}
              </ul>

              <svg viewBox="0 0 100 1" className="w-full h-px mt-4" preserveAspectRatio="none">
                <DrawnPath
                  d="M0 0.5 H100"
                  stroke="#3F4AAF"
                  strokeOpacity={0.6}
                  strokeWidth={1}
                  duration={1.2}
                  delay={0.4}
                />
              </svg>
            </div>
          </Reveal>

          {/* Right – spec sheet */}
          <Reveal delay={0.1}>
            <div
              className="relative rounded-[4px] p-6 md:p-8 text-white overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #171a38 0%, #10132c 100%)",
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

              <dl className="space-y-0">
                {spec.map(([k, v], i) => (
                  <motion.div
                    key={k}
                    initial={{ opacity: 0, x: 6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.35 }}
                    viewport={{ once: true, amount: 0.25 }}
                    className="grid grid-cols-[150px_1fr] gap-4 py-3 border-b border-white/10 last:border-b-0"
                  >
                    <dt className="label-code text-white/55">{k}</dt>
                    <dd className="text-[13px] md:text-[14px] text-white/90 leading-snug">
                      {v}
                    </dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {/* mid-page CTA */}
        <Reveal>
          <div className="mt-16 md:mt-20 pt-10 border-t border-[var(--sw-black)]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.25] max-w-[44ch]">
              Live in 14 weeks. Configured to your warehouses and your ERP, not built from scratch.
            </p>
            <a href="#cta" className={btnLight}>
              Start the accelerator
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
