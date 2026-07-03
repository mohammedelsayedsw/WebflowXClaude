"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Q = { q: string; a: string };

const faqs: Q[] = [
  {
    q: "Do I need to change my agency?",
    a: "No. Use us on the next upgrade and keep your team. Many clients use the free estimate to compare against, or push, their current vendor.",
  },
  {
    q: "Do you make live changes for the estimate?",
    a: "No. The estimate needs no live changes and no admin access, just your domain and current version. We analyze from public and shared signals.",
  },
  {
    q: "Is the price really fixed?",
    a: "Yes. Scope and price are locked before work starts. You approve the cost up front and there is no scope creep.",
  },
  {
    q: "What about custom modules and ERP integrations?",
    a: "They are reviewed and adjusted so they keep working. The estimate confirms which custom modules and integrations need work, and what each takes.",
  },
  {
    q: "How long does it take?",
    a: "It depends on the store. Most upgrades run from a few days to a few weeks. The estimate gives you the exact timeline before you commit.",
  },
  {
    q: "Which versions do you handle?",
    a: "Magento 2 and Adobe Commerce, any version behind, including Magento 1 to 2 migrations.",
  },
  {
    q: "Is this an AI upgrade?",
    a: "AI-assisted analysis compresses the compatibility scan and code review. Senior Magento engineers run the execution and sign off every change.",
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
              If yours isn&apos;t here, put it on the free estimate. We&apos;ll
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
