"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";

const TRUST = [
  "Thirty minutes, no commitment",
  "No pitch deck",
  "Platform-neutral advice",
  "Analytics team, not a salesperson",
];

export function CTA() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden py-28 md:py-40"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 80% 80%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1200px 800px at 50% 50%, #1a2060 0%, #141a48 40%, #10132c 80%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <Reveal>
          <div className="mx-auto max-w-[46rem] text-center">
            <span className="label-code mb-5 block text-[var(--sw-mint)]">
              See if it fits
            </span>
            <h2 className="font-head mx-auto max-w-[18ch] text-[34px] leading-[1.05] text-white md:text-[52px] lg:text-[60px]">
              See what one platform would do{" "}
              <span className="text-[var(--sw-mint)]">across your markets</span>
            </h2>
            <p className="mx-auto mt-6 max-w-[54ch] text-[16px] leading-relaxed text-white/80 md:text-[17px]">
              Thirty minutes with our analytics team. We map your markets and
              tools, show you where spend and orders are leaking, and tell you
              honestly whether this fits.
            </p>

            <div className="mt-9 flex justify-center md:mt-10">
              {/* TODO: swap the mailto for <HubSpotForm> once a formId is available */}
              {/* height via inline style: the label wraps to 2 lines under
                  ~390px, and btnPrimary's fixed h-12 would clip it. */}
              <a
                href="mailto:hello@scandiweb.com?subject=Free%20analytics%20consultation%20-%20Multi-Market%20Personalization"
                className={`${btnPrimary} w-full py-3 text-center leading-snug sm:w-auto`}
                style={{ height: "auto", minHeight: "3rem" }}
              >
                Book a free analytics consultation
                <ArrowUpRight className="h-4 w-4 shrink-0" />
              </a>
            </div>

            <ul className="mx-auto mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-[13px] text-white/70 md:text-[14px]">
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[var(--sw-mint)]" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
