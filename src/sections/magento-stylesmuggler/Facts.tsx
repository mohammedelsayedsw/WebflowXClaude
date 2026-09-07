"use client";

import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { NEXT_BULLETIN, UPDATED_SHORT } from "./status";
import { scrollToId } from "./scrollTo";

const FACTS: { title: string; body: string }[] = [
  {
    title: "Updates did not help",
    body:
      "The first store hit had all of Adobe's July and August security updates installed. Being up to date does not protect you from this one.",
  },
  {
    title: "No password needed",
    body:
      "The attacker needs no account and no login. They send a crafted request to your store, and the store runs their code without anyone noticing.",
  },
  {
    title: "They get everything",
    body:
      "Once inside, the attacker controls the store and can read or delete the whole database: customers, orders, everything.",
  },
  {
    title: "No fix from Adobe yet",
    body: `As of ${UPDATED_SHORT} there is no patch and no official workaround. Adobe's next security update is due ${NEXT_BULLETIN}. It is not confirmed to fix this.`,
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
              This alert does not mean your store has been hacked. It means you
              need to check now.
            </p>
            <a href="#check" onClick={scrollToId("check")} className={`${btnPrimary} h-auto min-h-12 py-3 w-full sm:w-auto`}>
              Check if your store has been affected
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
