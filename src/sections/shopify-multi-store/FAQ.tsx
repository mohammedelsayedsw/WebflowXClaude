"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Q = { q: string; a: string };

const faqs: Q[] = [
  {
    q: "Do you need full access to our stores to start?",
    a: "No. The first conversation works from a store and system map plus a few examples of recurring issues. Deeper access comes later, only if we move forward.",
  },
  {
    q: "Is OperaLayer a replacement for Shopify?",
    a: "No. Your storefronts stay on Shopify. OperaLayer is the operating layer underneath that connects the systems your stores share.",
  },
  {
    q: "We run B2B and D2C on separate stores. Does that work?",
    a: "Yes. Separate stores for B2B and D2C is one of the most common setups this is built for.",
  },
  {
    q: "Can you connect our ERP and CMS?",
    a: "Yes. Validated ERP, OMS, WMS, and CMS connectors are part of the layer, with release and localization governance.",
  },
  {
    q: "Will this cut our app costs?",
    a: "It gives you the visibility to see duplicated apps and per-store cost first. From there the savings decisions are yours, made with real numbers.",
  },
  {
    q: "Can we add mobile apps later?",
    a: "Yes. The Mobile Commerce Accelerator runs on the same data layer and business rules, so mobile is an extension, not a rebuild.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_2fr] items-start">
          <Reveal>
            <div className="label-code text-white/55 mb-5">
              before you book the call
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[18ch]">
              The questions{" "}
              <span style={{ color: "var(--sw-mint)" }}>merchants ask first</span>
            </h2>
            <p className="mt-7 text-[15px] md:text-[17px] text-white/80 leading-relaxed max-w-[44ch]">
              If yours is not here, bring it to the call. We will answer it then.
            </p>
          </Reveal>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details
                  className="group rounded-[4px] border border-white/10 px-6 py-5 md:px-7 md:py-6 open:bg-white/[0.03]"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.45)",
                  }}
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <span className="font-head text-white text-[16px] md:text-[18px] leading-[1.3]">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 mt-1 h-5 w-5 rounded-full border border-white/40 grid place-items-center text-white/70 group-open:rotate-45 transition"
                    >
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-[14px] md:text-[15px] text-white/75 leading-relaxed">
                    {f.a}
                  </div>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
