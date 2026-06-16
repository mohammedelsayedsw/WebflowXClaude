"use client";

import { Check, X } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

const goodFit: string[] = [
  "3 or more Shopify stores",
  "Shopify Plus, or a busy Advanced setup",
  "Several countries, currencies, or brands",
  "Separate B2B and direct stores",
  "An ERP, CMS, or warehouse system connected",
  "Custom apps or scripts in play",
  "Duplicated apps or app costs no one can fully explain",
  "Regional teams",
  "Issues that keep coming back",
];

const notYet: string[] = [
  "One simple store",
  "Nothing else connected to it",
  "No custom apps",
  "No regional complexity",
  "The odd theme tweak now and then",
];

export function GoodFit() {
  return (
    <section className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden">
      <div className="wrap relative">
        <Reveal>
          <div className="label-code text-white/55 mb-5">is this for you</div>
          <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            Where this fits,{" "}
            <span style={{ color: "var(--sw-mint)" }}>
              and where it does not
            </span>
          </h2>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2">
          <Reveal>
            <article className="h-full rounded-[4px] border border-white/12 bg-white/[0.04] p-7 md:p-8">
              <div className="label-code mb-6" style={{ color: "var(--sw-mint)" }}>
                a good fit if you have
              </div>
              <ul className="space-y-3.5">
                {goodFit.map((g) => (
                  <li
                    key={g}
                    className="flex items-start gap-3 text-[15px] md:text-[16px] text-white/85 leading-snug"
                  >
                    <Check
                      className="h-5 w-5 shrink-0 mt-0.5"
                      style={{ color: "var(--sw-mint)" }}
                    />
                    <span>{g}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>

          <Reveal delay={0.08}>
            <article className="h-full rounded-[4px] border border-white/10 bg-white/[0.015] p-7 md:p-8">
              <div className="label-code text-white/45 mb-6">
                probably not yet if you have
              </div>
              <ul className="space-y-3.5">
                {notYet.map((n) => (
                  <li
                    key={n}
                    className="flex items-start gap-3 text-[15px] md:text-[16px] text-white/60 leading-snug"
                  >
                    <X className="h-5 w-5 text-white/35 shrink-0 mt-0.5" />
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
