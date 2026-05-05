"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { DrawnPath } from "@/components/primitives/DrawnPath";

export function Problems() {
  const problems = [
    {
      n: "1",
      title: "Your developer is retiring",
      body:
        "Half the uniform retailers we speak to run on a platform built by one freelancer a decade ago. When that person stops picking up the phone, everything breaks. The business case writes itself.",
    },
    {
      n: "2",
      title: "Multiple sources of truth",
      body:
        "A custom admin for the website. The ERP for everything else. Staff manually key in the same data twice. When syntax does not match, orders sit in the exception pool and a human has to unblock them.",
    },
    {
      n: "3",
      title: "One account, many children, many schools",
      body:
        "A parent buys for multiple children across multiple schools. Each child has their own catalog, grade, gender, and personalization. Default customer models treat them as one context.",
    },
    {
      n: "4",
      title: "Seasonal by design",
      body:
        "Fitting appointments, name tape personalization, deferred term-start delivery, international-student flows. None of this ships as default in Shopify, Magento, or BigCommerce.",
    },
  ];

  return (
    <section id="problems" className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      {/* top accent line draws in on scroll */}
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
              Generic commerce platforms weren’t built for{" "}
              <span className="text-[var(--sw-mint)]">uniform retailers</span>
            </h2>
            <p className="mt-6 text-[16px] md:text-[17px] text-white/75 max-w-[56ch] leading-relaxed">
              Uniform retail is not fashion retail. A parent buys for three
              children across two schools, each with its own catalog, grades,
              sizing rules, and calendar. The ERP owns pricing and inventory.
              Fittings are seasonal and in-person. Every uniform retailer
              we speak to recognises all three problems below.
            </p>
          </Reveal>
        </div>

        {/* 4 problem cards */}
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
                {/* accent tick line */}
                <span className="absolute top-0 left-6 h-px w-10 bg-[var(--sw-mint)]/70" />
              </div>
            </Reveal>
          ))}
        </div>

        {/* Client pullquote – reference retailer Operations */}
        <Reveal>
          <figure className="max-w-[72ch] mx-auto text-center">
            <svg aria-hidden className="mx-auto mb-6 h-8 opacity-60" viewBox="0 0 48 32" fill="none">
              <path
                d="M4 24 Q 4 4, 20 4 L 20 12 Q 14 12, 12 20 L 20 20 L 20 30 L 4 30 Z M28 24 Q 28 4, 44 4 L 44 12 Q 38 12, 36 20 L 44 20 L 44 30 L 28 30 Z"
                fill="var(--sw-mint)"
              />
            </svg>
            <blockquote className="font-head text-white text-[24px] md:text-[36px] lg:text-[44px] leading-[1.2] tracking-[-0.01em]">
              We have 125 schools under contract. Someone could spend a million dollars on SEO and they still wouldn’t sell anything to our customers, because <span className="text-[var(--sw-mint)]">our customers can only buy from us</span>.
            </blockquote>
            <figcaption className="mt-7 label-code text-white/60">
              CEO · Reference uniform retailer
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
