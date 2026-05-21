"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

export function Problems() {
  const problems = [
    {
      n: "1",
      title: "Stock that lies",
      body:
        "The site says yes. The warehouse bay says no. Central stock, regional stock, store stock, transfer-in-progress. Every DIY retailer pretends these reconcile in real time. They do not. Cancellations and refunds carry the cost.",
    },
    {
      n: "2",
      title: "Trade and DIY in one cart",
      body:
        "A builder buying 40 sheets of plasterboard sees the same interface as a homeowner buying one. Tiered pricing, role-based access, account-specific catalogs, bulk purchase orders. None of this ships as default in Shopify, Magento, or BigCommerce.",
    },
    {
      n: "3",
      title: "Supplier feeds break on Saturday night",
      body:
        "Hundreds of vendors. Weekly catalog churn. Bad CSV from one supplier kills your category page. Someone in your team patches it on Monday morning while the search results are wrong.",
    },
    {
      n: "4",
      title: "Every sale breaks the site",
      body:
        "A campaign goes live. A sale lands. Traffic doubles overnight. The platform creaks. The ERP queue backs up. Customer service answers the same questions for two weeks. Every year. Built-in.",
    },
  ];

  return (
    <section id="problems" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <svg
        className="absolute top-0 inset-x-0 h-px opacity-40"
        viewBox="0 0 1000 1"
        preserveAspectRatio="none"
      >
        <DrawnPath d="M0 0.5 H1000" stroke="rgba(110,247,110,0.45)" strokeWidth={1} duration={1.8} />
      </svg>

      <div className="wrap relative">
        <div className="max-w-[64ch] mb-14 md:mb-20">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05]">
              Generic commerce platforms were not built for{" "}
              <span className="text-[var(--sw-mint)]">DIY retail</span>
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[56ch] leading-relaxed">
              DIY is not fashion retail. Stock lives across central, regional, and store bays. Trade customers and DIY shoppers buy from the same catalog at different prices. Supplier feeds change weekly. Spring and autumn double the load. Every DIY retailer we speak to recognises all four pains below.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4 mb-16 md:mb-24">
          {problems.map((f, i) => (
            <Reveal key={f.n} delay={i * 0.08}>
              <div className="relative rounded-[4px] border border-white/10 bg-white/[0.02] p-6 md:p-7 h-full">
                <div className="label-code text-white/55 mb-5">Problem · {f.n}</div>
                <h3 className="font-head text-white text-[20px] md:text-[22px] leading-[1.15] mb-3">
                  {f.title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-white/70 leading-relaxed">
                  {f.body}
                </p>
                <span className="absolute top-0 left-6 h-px w-10 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <figure className="max-w-[72ch] mx-auto text-center">
            <svg aria-hidden className="mx-auto mb-6 h-8 opacity-60" viewBox="0 0 48 32" fill="none">
              <path
                d="M4 24 Q 4 4, 20 4 L 20 12 Q 14 12, 12 20 L 20 20 L 20 30 L 4 30 Z M28 24 Q 28 4, 44 4 L 44 12 Q 38 12, 36 20 L 44 20 L 44 30 L 28 30 Z"
                fill="var(--sw-mint)"
              />
            </svg>
            <blockquote className="font-head text-white text-[24px] md:text-[36px] lg:text-[44px] leading-[1.2] tracking-[-0.01em]">
              Our customers do not care whether the stock lives in the central DC or in store 47. They just want the truth. <span className="text-[var(--sw-mint)]">Until we made one warehouse the source of truth on the storefront</span>, every Saturday morning was a refund queue.
            </blockquote>
            <figcaption className="mt-7 label-code text-white/60">
              Head of eCommerce · Nordic DIY chain · 80+ stores
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
