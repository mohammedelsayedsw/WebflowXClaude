"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Q = { q: string; a: string };

const faqs: Q[] = [
  {
    q: "Do you need full access to our stores to start?",
    a: "No. The first conversation works from a simple map of your stores and systems, plus a few examples of issues that keep coming back. Deeper access only comes later, if we move forward.",
  },
  {
    q: "Is this a replacement for Shopify?",
    a: "No. Your stores stay on Shopify exactly as they are. We connect the shared systems underneath, we do not replace your storefronts.",
  },
  {
    q: "We run B2B and direct on separate stores. Does that work?",
    a: "Yes. Separate B2B and direct stores is one of the most common setups this is built for.",
  },
  {
    q: "Can you connect our ERP and content tools?",
    a: "Yes. Connecting your ERP, orders, warehouse, and content tools is a core part of what we do, with control over what goes live where.",
  },
  {
    q: "Will this cut our app costs?",
    a: "First it shows you the duplicated apps and the cost per store. The savings decisions are then yours, made with real numbers in front of you.",
  },
  {
    q: "Can we add mobile apps later?",
    a: "Yes. Mobile apps run on the same data and rules you already have, so it is an add-on rather than a rebuild.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_2fr] items-start">
          <Reveal>
            <div className="label-code text-[var(--sw-black)]/55 mb-5">
              before you book the call
            </div>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[18ch]">
              The questions{" "}
              <span className="text-[var(--sw-blue)]">merchants ask first</span>
            </h2>
            <p className="mt-7 text-[15px] md:text-[17px] text-[var(--sw-black)]/70 leading-relaxed max-w-[44ch]">
              Not here? Bring it to the call and we will answer it then.
            </p>
          </Reveal>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group rounded-[4px] border border-[var(--sw-black)]/12 bg-white px-6 py-5 md:px-7 md:py-6">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4">
                    <span className="font-head text-[var(--sw-black)] text-[16px] md:text-[18px] leading-[1.3]">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 mt-1 h-5 w-5 rounded-full border border-[var(--sw-black)]/40 grid place-items-center text-[var(--sw-black)]/70 group-open:rotate-45 transition"
                    >
                      +
                    </span>
                  </summary>
                  <div className="mt-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed">
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
