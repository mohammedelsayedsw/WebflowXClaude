"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SevBadge, type Sev } from "@/sections/security-audit/severity";

type Threat = { level: Sev; title: string; body: string; stat: string };

const threats: Threat[] = [
  {
    level: "critical",
    title: "Account takeover",
    body: "A single unpatched flaw can let an attacker log in as any customer through the store API, then read orders, addresses, and personal data at will.",
    stat: "62% of Magento stores were still exposed six weeks after the last critical fix shipped",
  },
  {
    level: "high",
    title: "Card skimming",
    body: "Injected JavaScript quietly reads card numbers and personal details at checkout and sends them to attackers. The store looks and works normally.",
    stat: "Skimming campaigns often run for months on a live checkout before anyone notices",
  },
  {
    level: "high",
    title: "Broken access control",
    body: "When one customer can reach another customer's orders and data by changing a value in a request. Invisible in normal use, until someone scripts it across the whole database.",
    stat: "Customer PII is the most-stolen data type, involved in 53% of breaches",
  },
];

export function Exposure() {
  return (
    <section id="exposure" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            how exposed you are right now
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[24ch]">
            Three patterns behind most{" "}
            <span className="text-[var(--sw-blue)]">eCommerce breaches</span>.
          </h2>
          <p className="mt-7 max-w-[64ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            These are not hypotheticals. They are the exposures attackers use
            first, running on live stores today. An audit finds them before an
            attacker does.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-6 md:gap-8 lg:grid-cols-3">
          {threats.map((t, i) => (
            <Reveal key={t.title} delay={i * 0.07}>
              <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8 flex flex-col">
                <div className="mb-4">
                  <SevBadge level={t.level} />
                </div>
                <h3 className="font-head text-[var(--sw-black)] text-[22px] md:text-[26px] leading-[1.15]">
                  {t.title}
                </h3>
                <p className="mt-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed flex-1">
                  {t.body}
                </p>
                <p className="mt-6 pt-5 border-t border-[var(--sw-black)]/10 font-head text-[15px] md:text-[16px] text-[var(--sw-blue)] leading-snug">
                  {t.stat}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
