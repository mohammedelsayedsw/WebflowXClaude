"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Tier = {
  option: string;
  name: string;
  price: string;
  desc: string;
  youGet: string;
  cta: string;
  featured?: boolean;
};

const tiers: Tier[] = [
  {
    option: "Start here",
    name: "Free estimate",
    price: "$0",
    desc: "Send your domain and current version. We return your target version, scope, exact fixed price, timeline, and a risk register.",
    youGet:
      "Your exact fixed price in 48 hours, no live changes, no admin access.",
    cta: "Get my free estimate",
  },
  {
    option: "The upgrade",
    name: "Fixed-price upgrade",
    price: "From $990",
    desc: "Core upgrade $990 fixed. Extensions priced per item. Custom modules and integrations confirmed after the estimate. QA included.",
    youGet: "Your store upgraded on a locked price and timeline. Typically $2K to $5K.",
    cta: "Get my free estimate",
    featured: true,
  },
  {
    option: "Optional add-ons",
    name: "Improvements",
    price: "Per item",
    desc: "While the store is open, fix what affects speed, SEO, and sales. Priced per item, never required.",
    youGet:
      "Speed and Core Web Vitals $1,500. SEO health check $1,200. Analytics $900.",
    cta: "Get my free estimate",
  },
];

export function Offer() {
  return (
    <section id="offer" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            the offer
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[24ch]">
            From estimate to{" "}
            <span className="text-[var(--sw-blue)]">upgrade</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            Start with a free estimate that prices your exact upgrade. Go ahead
            at a fixed price, or just use the estimate to push your current
            vendor. No pressure either way.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-6 md:gap-8 lg:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.07}>
              <article
                className={`h-full rounded-[4px] border p-7 md:p-8 flex flex-col ${
                  t.featured
                    ? "border-[var(--sw-blue)]/40 bg-white shadow-[0_0_0_1px_var(--sw-blue)]"
                    : "border-[var(--sw-black)]/10 bg-white"
                }`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="label-code text-[var(--sw-black)]/55">
                    {t.option}
                  </div>
                  <span className="rounded-[2px] bg-[var(--sw-black)] px-3 py-1.5 font-head text-[13px] font-bold text-white">
                    {t.price}
                  </span>
                </div>
                <h3 className="mt-6 font-head text-[var(--sw-black)] text-[24px] md:text-[28px] leading-[1.15]">
                  {t.name}
                </h3>
                <p className="mt-4 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
                  {t.desc}
                </p>
                <div className="mt-auto pt-6 border-t border-[var(--sw-black)]/10">
                  <div className="label-code text-[var(--sw-black)]/55 mb-2">
                    what you get
                  </div>
                  <p className="text-[var(--sw-black)] font-medium text-[15px] md:text-[16px] leading-relaxed">
                    {t.youGet}
                  </p>
                </div>
                <a
                  href="#cta"
                  className={`mt-6 inline-flex items-center justify-center rounded-[2px] border px-5 py-2.5 font-head text-[14px] md:text-[15px] transition ${
                    t.featured
                      ? "border-[var(--sw-blue)] text-[var(--sw-blue)] hover:bg-[var(--sw-blue)]/5"
                      : "border-[var(--sw-black)]/30 text-[var(--sw-black)] hover:bg-[var(--sw-black)]/5"
                  }`}
                >
                  {t.cta}
                </a>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.25}>
          <div className="mt-12 md:mt-16 rounded-[4px] border border-[var(--sw-black)]/10 bg-white/60 px-6 md:px-8 py-5 md:py-6 text-[13px] md:text-[14px] text-[var(--sw-black)]/70 leading-relaxed">
            Every price is locked before work starts. You approve the full cost
            up front, so there is no scope creep and no surprise invoice.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
