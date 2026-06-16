"use client";

import { Check, X } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const goodFit: string[] = [
  "3 or more Shopify stores",
  "Shopify Plus, or a complex Advanced setup",
  "Multiple countries, currencies, or brands",
  "Separate B2B and D2C",
  "ERP, CMS, PIM, OMS, or WMS connected",
  "Custom apps or scripts in play",
  "Duplicated apps or unclear app cost",
  "Regional teams",
  "Recurring issues and limited visibility",
];

const notYet: string[] = [
  "One simple store",
  "No integrations",
  "No custom apps",
  "No regional complexity",
  "Only occasional theme updates",
];

export function GoodFit() {
  return (
    <section className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            is this for you
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            Where this fits, and{" "}
            <span className="text-[var(--sw-blue)]">where it does not</span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[4px] border border-[var(--sw-black)]/12 bg-white p-7 md:p-8">
              <div className="label-code text-[var(--sw-blue)] mb-6">
                a good fit if you have
              </div>
              <ul className="space-y-3.5">
                {goodFit.map((g) => (
                  <li
                    key={g}
                    className="flex items-start gap-3 text-[15px] md:text-[16px] text-[var(--sw-black)]/85 leading-snug"
                  >
                    <Check className="h-5 w-5 text-[var(--sw-blue)] shrink-0 mt-0.5" />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white/50 p-7 md:p-8">
              <div className="label-code text-[var(--sw-black)]/45 mb-6">
                probably not yet if you have
              </div>
              <ul className="space-y-3.5">
                {notYet.map((n) => (
                  <li
                    key={n}
                    className="flex items-start gap-3 text-[15px] md:text-[16px] text-[var(--sw-black)]/70 leading-snug"
                  >
                    <X className="h-5 w-5 text-[var(--sw-black)]/55 shrink-0 mt-0.5" />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
