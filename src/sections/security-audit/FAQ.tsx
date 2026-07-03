"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Q = { q: string; a: string };

const faqs: Q[] = [
  {
    q: "Do you need admin access to run the check?",
    a: "No. The free check works from your domain and public or shared signals only. A full audit is scoped with you and run in a safe way, never against live production without your agreement.",
  },
  {
    q: "Will the test take my store down?",
    a: "No. We test carefully and non-destructively, and schedule anything intrusive with your team in advance. The free check is entirely passive.",
  },
  {
    q: "Is this just an automated scanner?",
    a: "No. Senior security engineers run every audit by hand and sign off the findings. Scanners miss the flaws that matter most: broken access control, business-logic abuse, and chained exploits.",
  },
  {
    q: "What do we get at the end?",
    a: "A findings report ranked by real-world risk, with the exact fix for each issue and the regulation it affects, plus a re-test once your team has remediated.",
  },
  {
    q: "We already have PCI compliance. Isn't that enough?",
    a: "PCI covers how card data is handled, not your whole attack surface. Most breaches exploit account takeover, exposed APIs, and customer-data access that sit outside a PCI checklist.",
  },
  {
    q: "Which platforms do you cover?",
    a: "Magento and Adobe Commerce first, plus the extensions, integrations, and infrastructure around them. We assess other eCommerce stacks on request.",
  },
  {
    q: "What does it cost?",
    a: "The initial security check is free. A full audit is scoped to your store and quoted before any work starts, with no obligation from the free check.",
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
              what people ask first
            </div>
            <h2 className="font-head text-white text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[18ch]">
              Questions,{" "}
              <span style={{ color: "var(--sw-mint)" }}>answered</span>.
            </h2>
            <p className="mt-7 text-[15px] md:text-[17px] text-white/80 leading-relaxed max-w-[44ch]">
              If yours isn&apos;t here, ask it on the free check. We&apos;ll
              answer it then.
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
