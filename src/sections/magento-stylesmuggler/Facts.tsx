"use client";

import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { PATCH_DATE, UPGRADE_URL } from "./status";
import { scrollToId } from "./scrollTo";

const FACTS: { title: string; body: string; link?: { label: string; href: string } }[] = [
  {
    title: "Recent updates may not protect you",
    body:
      `The attack has affected a store with Adobe’s July and August security updates installed. Only the ${PATCH_DATE} hotfix closes the hole, and installing it does not undo a break-in that happened before.`,
  },
  {
    title: "Attackers do not need a login",
    body:
      "The vulnerability allows attackers to run malicious code without a customer or administrator account.",
  },
  {
    title: "Your store and its data could be at risk",
    body:
      "A successful attack could allow someone to access sensitive data, modify your store, or install malware.",
  },
  {
    title: "Protection and investigation both matter",
    body:
      "The hotfix blocks new attacks. Your team also needs to check whether attackers gained access before it was installed, and to rotate the encryption key and credentials, as Adobe requires.",
  },
  {
    title: "Older versions get no patch",
    body:
      "Adobe’s hotfix covers Magento Open Source 2.4.6 to 2.4.9 and Adobe Commerce 2.4.4 to 2.4.9. Magento Open Source stores on 2.4.5 or older get no fix, and the only way to close the hole for good is to upgrade.",
    link: { label: "Fixed-price Magento upgrade", href: UPGRADE_URL },
  },
];

export function Facts() {
  return (
    <section id="what-we-know" className="relative z-10 py-24 md:py-32">
      <div className="wrap">
        <Reveal>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[18ch]">
            What this means for your store
          </h2>
          <p className="mt-6 text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[56ch]">
            Every version from 2.4.4 to 2.4.9 is affected. That is well over
            100,000 stores worldwide.
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16 border-t border-white/10">
          {FACTS.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.07}>
              <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-3 md:gap-12 py-7 md:py-8 border-b border-white/10">
                <h3 className="font-head font-semibold text-white text-[22px] md:text-[28px] leading-[1.15] tracking-[-0.01em]">
                  {f.title}
                </h3>
                <div>
                  <p className="text-white/75 text-[15px] md:text-[17px] leading-relaxed max-w-[58ch]">
                    {f.body}
                  </p>
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
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-10 md:mt-12 flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
            <p className="font-head font-semibold text-white text-[18px] md:text-[22px] leading-[1.25] max-w-[38ch]">
              This alert does not mean your store has been compromised. It means
              you should check your exposure and take protective action now.
            </p>
            <a href="#check" onClick={scrollToId("check")} className={`${btnPrimary} h-auto min-h-12 py-3 w-full sm:w-auto`}>
              Get a free security check
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
