"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { SignalBars } from "./motifs";

export function CaseStudy() {
  const stats: [string, string][] = [
    ["~6 mo", "kickoff to live, the original build"],
    ["0", "changes to the operator's BSS"],
    ["50+", "scandiweb specialists on the project"],
    ["9,700", "hours logged"],
    ["1,184", "tasks tracked"],
    ["2 h", "fastest delivery option built in"],
  ];
  const built = [
    "Phones and plans sold as one bundle, including an iPhone campaign with a different installment price for each bank",
    "A checkout with bank installments, payment from the phone balance with a live check, SMS codes, wallets, Apple Pay, and cash or card on delivery",
    "Number selection reserved and released through the CRM, fiber and 5G coverage checks, and ID upload at checkout",
    "Delivery in 2 hours, same day, or next day",
  ];
  return (
    <section id="case-study" className="relative overflow-hidden bg-lp-bright py-28 text-[var(--sw-black)] md:py-36">
      <div className="absolute inset-x-0 top-0 h-px bg-[var(--sw-black)]/12" />
      <div className="wrap relative">
        {/* header: eyebrow + logo slot */}
        <Reveal>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-4">
            <div className="flex items-center gap-2.5">
              <SignalBars tone="light" />
              <span className="label-code text-[var(--sw-black)]/55">CASE STUDY · A NATIONAL TELECOM OPERATOR</span>
            </div>
            {/* logo slot - dark client logo, reads on the light background */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/accelerator/telecom-commerce/case-study-logo.png")}
              alt=""
              aria-hidden
              className="h-7 w-auto md:h-8"
            />
          </div>

          <h2 className="font-head mt-6 max-w-[22ch] text-[34px] leading-[1.05] text-[var(--sw-black)] md:text-[48px] lg:text-[56px]">
            This accelerator is made of a real build
          </h2>
          <p className="mt-6 max-w-[64ch] text-[15px] leading-relaxed text-[var(--sw-black)]/70 md:text-[17px]">
            Every module here comes from a full online store we built and still
            run for a national telecom operator. We moved their store onto
            Magento 2 and Hyvä, in English and Arabic, and we did it without
            changing their BSS.
          </p>
        </Reveal>

        {/* stat row */}
        <Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-[var(--sw-black)]/12 py-10 sm:grid-cols-3 lg:grid-cols-6">
            {stats.map(([v, l], i) => (
              <div key={i}>
                <div className="font-head text-[30px] leading-none tabular-nums text-[var(--sw-black)] md:text-[38px]">
                  {v}
                </div>
                <div className="mt-2 text-[12px] leading-snug text-[var(--sw-black)]/55 [text-wrap:pretty] md:text-[13px]">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* what we built + quote */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h3 className="font-head text-[22px] leading-tight text-[var(--sw-black)] md:text-[26px]">
              What we built
            </h3>
            <ul className="mt-6 space-y-4">
              {built.map((b, i) => (
                <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-[var(--sw-black)]/80 md:text-[16px]">
                  <span
                    className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[3px]"
                    style={{ background: "var(--sw-mint)" }}
                  >
                    <Check className="h-3.5 w-3.5" strokeWidth={3} style={{ color: "var(--sw-black)" }} />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[52ch] text-[15px] font-medium leading-relaxed text-[var(--sw-black)] md:text-[16px]">
              The project won an industry award in 2025, and the client takes
              reference calls for us.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-[4px] border border-[var(--sw-black)]/12 bg-white/70 p-6 md:p-8">
              <blockquote
                className="font-head border-l-2 pl-4 text-[20px] leading-[1.3] text-[var(--sw-black)] md:text-[24px]"
                style={{ borderColor: "var(--sw-mint)" }}
              >
                &ldquo;I would like to congratulate the Scandiweb team on winning
                the award. It reflects the strength of our collaboration.&rdquo;
              </blockquote>
              <div className="mt-5 border-t border-[var(--sw-black)]/10 pt-4">
                <div className="text-[14px] font-medium text-[var(--sw-black)]">
                  IT leadership, national telecom operator
                </div>
              </div>
              <p className="mt-6 text-[14px] leading-relaxed text-[var(--sw-black)]/70 md:text-[15px]">
                That build took about six months. Because the modules are already
                built and proven, a new operator goes live in 6 to 12 weeks.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
