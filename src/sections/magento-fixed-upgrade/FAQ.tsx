"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Q = { q: string; a: string };

const faqs: Q[] = [
  {
    q: "Is AI doing the upgrade?",
    a: "No. AI-assisted analysis runs the compatibility scan, deprecated-method detection, and test generation. Senior Magento engineers run the execution and sign off on every change. AI replaces the hours of manual scoping, not the engineer who ships the code.",
  },
  {
    q: "Our store is heavily customized. Can a fixed price really cover it?",
    a: "That is exactly what the estimate is for. We read your custom modules and integrations first, map which need a refactor, which need replacing, and which stay as they are, then price it. Once we send the number, it is locked.",
  },
  {
    q: "Do you need access to our store to quote it?",
    a: "No. The estimate works from your domain, current version, and extension or module list. No admin access, no live changes. Access only comes later, if you decide to go ahead with the upgrade.",
  },
  {
    q: "We already have a team or an agency.",
    a: "Keep them. Plenty of merchants use us for the next upgrade and keep their team for everything else. You can also use the free estimate to pressure-test your current vendor's quote before you commit to anything.",
  },
  {
    q: "We cannot risk a checkout or SEO regression.",
    a: "The estimate flags checkout, payment, promo, and SEO redirect risk before any work starts, and we sequence the upgrade around your campaign calendar rather than against it. Regression QA covers your top flows before launch.",
  },
  {
    q: "What if we are on Magento 1, or on Adobe Commerce Cloud?",
    a: "Both are in scope. The estimate names your target version and the realistic path to it, whether that is a minor jump, a major upgrade, or a Magento 1 situation that needs a different plan and a different number.",
  },
  {
    q: "Does the fixed price actually hold?",
    a: "Yes. The price is locked the moment we send the estimate, before any work begins. If we miss something at estimate stage that we should have caught, that is on us, not a change order. The only thing that moves the price is you adding to the scope.",
  },
  {
    q: "What does the free estimate actually include?",
    a: "Your target version, the scope, your exact fixed price in the matched tier, a timeline, a written risk register, and a list of what we will not touch. It is yours to keep, whether you work with us or not.",
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
              what merchants ask first
            </div>
            <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[18ch]">
              The{" "}
              <span style={{ color: "var(--sw-mint)" }}>obvious questions</span>,
              answered.
            </h2>
            <p className="mt-7 text-[15px] md:text-[17px] text-white/80 leading-relaxed max-w-[44ch]">
              If yours is not here, ask it in the estimate request. We will
              answer it with your number.
            </p>
          </Reveal>

          <div className="space-y-3 md:space-y-4">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.07}>
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
