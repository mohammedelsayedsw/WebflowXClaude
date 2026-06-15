"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";
import { SectionIcon } from "./motifs";

export function AcceleratorAtAGlance() {
  const spec: [string, React.ReactNode][] = [
    ["Live in", "12 weeks · kickoff to production"],
    ["Works on", "Shopify · Magento / Adobe Commerce · BigCommerce · WooCommerce · custom"],
    [
      "Connects to",
      "Supplier feeds (API, Excel/CSV, SFTP) · marketplaces · Google Shopping · your ERP or warehouse software",
    ],
    ["Peak season", "Sized for your busiest weeks, from holiday gifting to back-to-school"],
    ["After launch", "Your admin team runs every module, no monthly developer dependency"],
    ["You keep", "Runbooks · architecture docs · admin training · full code ownership"],
  ];

  return (
    <section
      id="at-a-glance"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden text-[var(--sw-black)] scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT — intro text */}
          <Reveal>
            <div className="flex items-center gap-2.5 mb-5">
              <SectionIcon name="atom" tone="light" />
              <span className="label-code text-[var(--sw-black)]/55">ACCELERATOR · CHARGED</span>
            </div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.04] max-w-[26ch]">
              Everything your STEM store needs to run easier and sell more.{" "}
              <span className="text-[var(--sw-blue)]">Live on your store in 12 weeks.</span>
            </h2>
            <p className="mt-6 text-[15px] md:text-[17px] text-[var(--sw-black)]/70 leading-relaxed max-w-[60ch]">
              We have spent years building commerce for STEM brands and learned
              what actually lifts their sales and lightens their daily work. We
              packaged the pieces that performed best into ready-made modules
              you add to your store, so you get proven, fixed improvements
              instead of open-ended agency work.
            </p>
            <p className="mt-4 text-[15px] md:text-[17px] text-[var(--sw-black)]/70 leading-relaxed max-w-[60ch]">
              These modules sit on top of your existing commerce platform,
              whether that is Shopify, Magento / Adobe Commerce, BigCommerce,
              WooCommerce, or custom. Not instead of it. You keep everything
              your store already does well. You add the parts a STEM toy
              retailer actually needs, instead of spending 18 months discovering
              them on your own budget. Every module is a one-time build: after
              launch your own team runs it from the admin, with no monthly
              developer dependency.
            </p>
          </Reveal>

          {/* RIGHT — What you get on day one */}
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
                    <dd className="text-[13px] md:text-[14px] text-white/90 leading-snug">{v}</dd>
                  </motion.div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

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
