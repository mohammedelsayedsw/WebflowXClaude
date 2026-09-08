"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { ArrowUpRight } from "lucide-react";
import { ADOBE_BULLETIN, CVE, PATCH_DATE } from "./status";

type Q = { q: string; a: string; link?: { label: string; href: string } };

const FAQS: Q[] = [
  {
    q: "Does StyleSmuggler affect Adobe Commerce, or only Magento Open Source?",
    a: "Both. Adobe Commerce and Magento Open Source share the same core code, and the flaw is in that core. Stores on Adobe Commerce Cloud are affected too.",
  },
  {
    q: "Which versions are affected?",
    a: "Every version from 2.4.4 up to 2.4.9, including the latest patch levels, and older versions are affected too. The first confirmed victim ran 2.4.6 with the latest security patches installed.",
  },
  {
    q: "My store has all the latest security patches. Am I safe?",
    a: `Not unless the ${PATCH_DATE} hotfix is installed. The first confirmed victim had Adobe’s July and August 2026 security updates installed. Even with the hotfix in place, a store that was attacked before it went in still needs to be checked.`,
  },
  {
    q: "How many stores are affected?",
    a: "Every store running a current version of Magento Open Source or Adobe Commerce, which is well over 100,000 stores worldwide.",
  },
  {
    q: "Is there an official fix from Adobe?",
    a: `Yes. Adobe published an emergency hotfix on ${PATCH_DATE} (bulletin ${ADOBE_BULLETIN}, ${CVE}, the highest severity rating). It ships as a composer patch, not a full release, and Adobe also requires rotating your encryption key and credentials.`,
  },
  {
    q: "Is the fix available for my version?",
    a: "The hotfix covers Magento Open Source 2.4.6 to 2.4.9 and Adobe Commerce 2.4.4 to 2.4.9. Magento Open Source stores on 2.4.5 or older get no patch from Adobe. For those, temporary protection buys time, and an upgrade closes the hole for good. For Magento 2.2.0 to 2.4.3, scandiweb has rebuilt Adobe’s hotfix in the meantime; download the patch on this page.",
  },
  {
    q: "How do I know if my store has been hacked?",
    a: "From the outside you often cannot tell. Known signs include unexpected “Payment Transaction Failed Reminder” emails, unfamiliar background processes on the server, new scheduled tasks, and unknown files in the report and temp folders. Someone needs to look at the server. The free security check on this page is the first step: it tells our engineers what to look at before the call.",
  },
  {
    q: "What should I do right now?",
    a: "Three things: install Adobe’s hotfix and rotate your encryption key and credentials, have someone check the store for signs of compromise, and test cart and checkout afterwards. If you have a Magento partner, ask them today. If not, start with the free security check on this page or book a call.",
  },
  {
    q: "Do I need to take my store offline?",
    a: "Usually not. Temporary protection can be put in place while the store keeps selling. Taking a store offline is a last resort for a store that is confirmed compromised.",
  },
  {
    q: "Does installing the patch make my store safe?",
    a: "It closes the hole for new attacks. It does not remove a backdoor planted earlier, and it does not undo credentials an attacker already read. That is why Adobe requires rotating the encryption key and every credential it protected, and why the check for compromise still matters.",
  },
  {
    q: "Does this affect Hyvä, PWA, or headless stores?",
    a: "Yes. The flaw sits in the Magento core, not in the theme or frontend. The attack goes through an API that headless and PWA storefronts rely on, so switching that API off is not an option there and protection has to be more targeted.",
  },
  {
    q: "I am not a scandiweb client. Can you help?",
    a: "Yes. Start with the free security check on this page or book a call. If your store needs work, we agree on the scope with you first.",
  },
];

export function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="faq" className="relative z-10 bg-[var(--sw-black)] py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="wrap">
        <div className="grid gap-10 md:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
          <Reveal>
            <div className="label-code text-white/45">Questions</div>
            <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[14ch]">
              Common{" "}
              <span style={{ color: "var(--sw-mint)" }}>questions</span>
            </h2>
          </Reveal>

          <div className="border-t border-white/10">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.04}>
                <details className="group border-b border-white/10">
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-6 py-5 md:py-6 [&::-webkit-details-marker]:hidden">
                    <span className="font-head font-semibold text-white text-[17px] md:text-[19px] leading-[1.3]">
                      {f.q}
                    </span>
                    <span
                      aria-hidden
                      className="shrink-0 mt-0.5 h-6 w-6 rounded-full border border-white/30 grid place-items-center text-white/70 text-[16px] leading-none group-open:rotate-45 transition"
                    >
                      +
                    </span>
                  </summary>
                  <div className="pb-6 pr-12 max-w-[64ch]">
                    <p className="text-[15px] md:text-[16px] text-white/75 leading-relaxed">{f.a}</p>
                    {f.link && (
                      <a
                        href={f.link.href}
                        className="mt-3 inline-flex items-center gap-1.5 font-head font-semibold text-[15px] text-white/80 hover:text-white transition"
                      >
                        {f.link.label}
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
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
