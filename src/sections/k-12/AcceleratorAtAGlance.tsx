"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";
import { btnLight } from "@/components/primitives/buttonStyles";
import { BatteryTag, BrickStrip } from "./motifs";

export function AcceleratorAtAGlance() {
  const modules = [
    { n: "1", name: "Catalog & supplier feed engine" },
    { n: "2", name: "Marketplaces & shopping feeds" },
    { n: "3", name: "Subscription boxes & gift subscriptions" },
    { n: "4", name: "Shipping rules for “difficult” products" },
    { n: "5", name: "Batteries & extras reminder" },
  ];

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
          <BatteryTag tone="light" label="ACCELERATOR · CHARGED" className="mb-5" />
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

        <div className="mt-14 md:mt-20 grid gap-10 lg:gap-14 lg:grid-cols-[1.1fr_1fr] items-start">
          {/* Left – modules list */}
          <Reveal>
            <div className="relative bracket-frame p-5 md:p-7">
              <span className="bracket-bl" />
              <span className="bracket-br" />
              <h3 className="font-head text-[var(--sw-black)] text-[18px] md:text-[20px] leading-tight mb-6">
                Five modules that ship together
              </h3>

              <ul className="space-y-0">
                {modules.map((m) => (
                  <li key={m.n} className="group relative">
                    <div className="grid grid-cols-[40px_1fr] items-center gap-4 py-4 md:py-5 border-b border-[var(--sw-black)]/10 last:border-b-0">
                      <div className="label-code text-[var(--sw-blue)] tabular-nums">
                        {m.n}
                      </div>
                      <div className="font-head text-[var(--sw-black)] text-[16px] md:text-[18px] leading-tight">
                        {m.name}
                      </div>
                    </div>
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

              <dl className="space-y-0">
                {spec.map(([k, v], i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 6 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.35 }}
                    viewport={{ once: true, amount: 0.25 }}
                    className="grid grid-cols-[110px_1fr] gap-4 py-3 border-b border-white/10 last:border-b-0"
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

        {/* Always included, not a module */}
        <Reveal>
          <div className="mt-12 md:mt-16">
            <BrickStrip tone="light" count={20} className="mb-5" />
            <p className="text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed max-w-[80ch] italic">
              Always included, not a module: speed, analytics, accessibility,
              privacy fit for a children&apos;s audience, documentation, and
              training ship with every delivery as the baseline — never billed
              as extras.
            </p>
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
