"use client";

import { Reveal } from "@/components/primitives/Reveal";

type Q = { q: string; a: string };

const faqs: Q[] = [
  {
    q: "How can the upgrades be free?",
    a: "The engineers applying the release are already on your store. There is no discovery phase, no handover and no fresh scoping, which is where most of an agency upgrade quote goes. scandiweb carries that cost inside the retainer.",
  },
  {
    q: "What does working with scandiweb cost?",
    a: "Perpetual sits inside your monthly development retainer, sized to your store and your roadmap. Bringing your store current is quoted once as onboarding, at a fixed price. Both numbers are in your compatibility report before you commit.",
  },
  {
    q: "I am joining from another agency. What happens first?",
    a: "We scope bringing your store current, once, at a fixed price you approve before any work starts. How far back your version sits and how much custom code carries forward decide that price. From the day Perpetual begins, upgrades stop being billable.",
  },
  {
    q: "Will my store go down or lose data?",
    a: "The upgrade is built and tested on a staging copy while production keeps selling, then deployed in a window you pick. Your catalog, customers and order history arrive intact, and a rollback stays ready through go-live.",
  },
  {
    q: "Will an upgrade affect my search rankings?",
    a: "It can. Version jumps change URL structures and template markup. Our SEO team reviews redirects and structured data on staging, then measures Core Web Vitals before and after go-live.",
  },
  {
    q: "How do I check which Magento version I am on?",
    a: "The version number sits in the footer of your Magento admin, or run bin/magento --version on your server. If neither is reachable, send us your store URL and we will identify it.",
  },
];

/** Questions as rows between hairlines; the answers stay closed until asked for. */
export function FAQ() {
  return (
    <section id="faq" className="relative z-10 bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-[1fr_2fr] items-start">
          <Reveal>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[52px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[12ch]">
              Questions about Perpetual
            </h2>
          </Reveal>

          <div className="border-b border-[var(--sw-black)]/12">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.05}>
                <details className="group border-t border-[var(--sw-black)]/12">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-6 py-6 md:py-7 [&::-webkit-details-marker]:hidden">
                    <span className="font-head font-semibold text-[var(--sw-black)] text-[18px] md:text-[22px] leading-[1.25]">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 mt-0.5 font-head text-[26px] leading-none text-[var(--sw-blue)] group-open:rotate-45 transition"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-7 -mt-1 text-[var(--sw-black)]/70 text-[16px] md:text-[17px] leading-relaxed max-w-[62ch]">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
