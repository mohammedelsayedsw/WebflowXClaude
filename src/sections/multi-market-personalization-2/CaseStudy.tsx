"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const GROUPS = [
  {
    name: "Email marketing",
    metrics: [
      { v: "+20.6%", k: "orders" },
      { v: "+11.3%", k: "placed-order rate" },
      { v: "+10.4%", k: "revenue" },
    ],
  },
  {
    name: "Paid media",
    metrics: [
      { v: "+39.1%", k: "ROAS" },
      { v: "+25.1%", k: "average order value" },
      { v: "+9.5%", k: "revenue" },
      { v: "21.3%", k: "less ad spend", down: true },
    ],
  },
];

const BADGES = ["Multi-market · multi-store-view", "Klaviyo + Clerk.io → one platform"];

export function CaseStudy() {
  return (
    <section
      id="proof"
      className="relative overflow-hidden bg-[var(--sw-black)] py-28 md:py-36"
    >
      <div className="wrap relative">
        <div className="max-w-[56rem]">
          <Reveal>
            <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-4">
              <span className="label-code text-[var(--sw-mint)]">
                Proven with Sportland
              </span>
              {/* keeps Sportland red, unlike the white-flattened trust-bar logos:
                  this is a named case study, not a logo wall */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={assetUrl("/shared/logos/clients/sportland.png")}
                alt="Sportland"
                className="h-6 w-auto shrink-0 md:h-7"
              />
            </div>
            <h2 className="font-head text-[32px] leading-[1.06] text-white md:text-[44px] lg:text-[52px]">
              The Baltics&apos; leading sportswear retailer, running{" "}
              <span className="text-[var(--sw-mint)]">
                every market from one platform
              </span>
            </h2>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              {BADGES.map((b) => (
                <span
                  key={b}
                  className="label-code rounded-[2px] border border-white/15 px-3 py-1.5 text-white/70"
                >
                  {b}
                </span>
              ))}
            </div>
            <p className="mt-7 max-w-[78ch] text-[16px] leading-relaxed text-white/75 md:text-[17px]">
              Sportland sells across several countries, each with its own store
              view, language, and customer database. Their email ran on one tool
              and recommendations on another, on data that never joined up. We
              moved them onto one unified platform with a market-specific setup,
              and rebuilt their automation on top of it.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-4 md:mt-16 md:grid-cols-2">
          {GROUPS.map((g, gi) => (
            <Reveal key={g.name} delay={gi * 0.07}>
              <div className="h-full rounded-[4px] border border-white/10 bg-white/[0.02] p-6 md:p-8">
                <div className="label-code border-b border-white/10 pb-4 text-white/60">
                  {g.name}
                </div>
                <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-8">
                  {g.metrics.map((m) => (
                    <div key={m.k}>
                      <div
                        className={`font-head text-[28px] leading-none tracking-[-0.01em] md:text-[36px] ${
                          m.down ? "text-white" : "text-[var(--sw-mint)]"
                        }`}
                      >
                        {m.v}
                      </div>
                      <div className="label-code mt-2.5 text-white/55">{m.k}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="label-code mt-6 text-white/50">
            All within a few months of going live.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <figure className="mt-12 max-w-[70ch] border-l-2 border-[var(--sw-mint)] pl-6 md:mt-16">
            <blockquote className="font-head text-[20px] leading-[1.25] tracking-[-0.005em] text-white md:text-[26px]">
              &ldquo;scandiweb has a future-looking attitude.&rdquo;
            </blockquote>
            <figcaption className="mt-4">
              <div className="text-[14px] font-medium text-white">
                Henri Kruusel
              </div>
              <div className="label-code mt-0.5 text-white/55">
                Head of eCommerce and Marketing · Sportland
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
