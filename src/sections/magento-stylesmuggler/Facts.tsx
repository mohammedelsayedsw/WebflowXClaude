"use client";

import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { NEXT_BULLETIN, UPDATED_SHORT } from "./status";
import { scrollToId } from "./scrollTo";

const FACTS: { title: string; body: string }[] = [
  {
    title: "Patched is not protected",
    body:
      "The first known victim ran 2.4.6-p15 with the July and August 2026 security patches applied and a clean patch status. Sansec reproduced the attack on clean 2.4.7, 2.4.8, and 2.4.9.",
  },
  {
    title: "No login required",
    body:
      "The attacker plants PHP code through a public endpoint, then makes Magento execute it while it renders a failed-payment reminder email. Nobody has to open anything, and it works even if the email is never delivered.",
  },
  {
    title: "Full control at stake",
    body:
      "A successful attack installs a backdoor that waits for commands. From there an attacker can reach the whole store and its database: customer data, orders, and the ability to delete them.",
  },
  {
    title: "No official fix yet",
    body: `As of ${UPDATED_SHORT}, Adobe has published no CVE, no patch, and no workaround. The next scheduled Adobe bulletin is ${NEXT_BULLETIN}, and it is not confirmed to cover StyleSmuggler.`,
  },
];

export function Facts() {
  return (
    <section id="what-we-know" className="relative z-10 py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-white/45">What we know · from Sansec&apos;s analysis, updated September 6</div>
          <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[18ch]">
            What StyleSmuggler is
          </h2>
        </Reveal>

        <div className="mt-12 md:mt-16 border-t border-white/10">
          {FACTS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-3 md:gap-12 py-7 md:py-8 border-b border-white/10">
                <h3 className="font-head font-semibold text-white text-[22px] md:text-[28px] leading-[1.15] tracking-[-0.01em]">
                  {f.title}
                </h3>
                <p className="text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[58ch]">
                  {f.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
            <p className="font-head font-semibold text-white text-[18px] md:text-[22px] leading-[1.25] max-w-[34ch]">
              This alert does not mean your store has been compromised. It means
              the check has to happen now.
            </p>
            <a href="#check" onClick={scrollToId("check")} className={btnPrimary}>
              Check if your store has been affected
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
