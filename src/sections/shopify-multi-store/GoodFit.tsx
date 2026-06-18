"use client";

import { Check, X } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const goodFit = [
  "3 or more Shopify stores",
  "Shopify Plus, or a complex Advanced setup",
  "Multiple countries, currencies, or brands",
  "Separate B2B and D2C stores",
  "ERP, CMS, PIM, OMS, or WMS connected",
  "Custom apps or scripts in play",
  "Duplicated apps or unclear app cost",
  "Regional teams running stores separately",
  "Recurring issues and limited visibility",
];

const notYet = [
  "One simple store",
  "No integrations",
  "No custom apps",
  "No regional complexity",
  "Only the occasional theme update",
];

export function GoodFit() {
  return (
    <section className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">is this for you</div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[18ch]">
            Where OperaLayer fits,{" "}
            <span className="text-[var(--sw-blue)]">and where it does not</span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-6 md:gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[14px] border border-[var(--sw-black)]/10 bg-white p-8 md:p-10 shadow-[0_20px_50px_-30px_rgba(16,19,44,0.4)]">
              <div className="font-head font-semibold text-[var(--sw-black)] text-[18px] md:text-[20px] mb-7">
                A good fit if you have
              </div>
              <ul className="space-y-4">
                {goodFit.map((g) => (
                  <li key={g} className="flex items-start gap-3.5">
                    <span
                      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "rgba(63,74,175,0.1)" }}
                    >
                      <Check className="h-3.5 w-3.5 text-[var(--sw-blue)]" />
                    </span>
                    <span className="text-[15px] md:text-[16px] text-[var(--sw-black)]/80 leading-snug">
                      {g}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="h-full rounded-[14px] border border-[var(--sw-black)]/8 bg-[var(--sw-black)]/[0.02] p-8 md:p-10">
              <div className="font-head font-semibold text-[var(--sw-black)]/55 text-[18px] md:text-[20px] mb-7">
                Probably not yet if you have
              </div>
              <ul className="space-y-4">
                {notYet.map((n) => (
                  <li key={n} className="flex items-start gap-3.5">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--sw-black)]/[0.05]">
                      <X className="h-3.5 w-3.5 text-[var(--sw-black)]/40" />
                    </span>
                    <span className="text-[15px] md:text-[16px] text-[var(--sw-black)]/55 leading-snug">
                      {n}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
