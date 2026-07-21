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

const STEPS = [
  "We map your markets and tools",
  "We show you where spend and orders are leaking",
  "We tell you honestly whether this fits",
];

/** The booking module. Moved here from the hero so the hero carries one message. */
function ConsultCard() {
  return (
    <div className="rounded-[4px] border border-white/15 bg-white/[0.04] p-6 backdrop-blur md:p-8">
      <h3 className="font-head text-[22px] leading-[1.15] text-white md:text-[26px]">
        Free analytics consultation
      </h3>
      <p className="mt-3 text-[14px] leading-relaxed text-white/70 md:text-[15px]">
        Thirty minutes with our analytics team, on your markets and your numbers.
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {STEPS.map((s, i) => (
          <li key={s} className="flex gap-3 text-[14px] leading-snug text-white/85">
            <span className="label-code shrink-0 pt-0.5 text-[var(--sw-mint)]">
              {i + 1}
            </span>
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-7 border-t border-white/10 pt-6">
        {/* TODO: swap the mailto for <HubSpotForm> once a formId is available */}
        {/* height via inline style: the label wraps on narrow screens, and
            btnPrimary's fixed h-12 would clip it. */}
        <a
          href="mailto:hello@scandiweb.com?subject=Free%20analytics%20consultation%20-%20Multi-Market%20Personalization"
          className={`${btnPrimary} w-full py-3 text-center leading-snug`}
          style={{ height: "auto", minHeight: "3rem" }}
        >
          Book my consultation
          <ArrowUpRight className="h-4 w-4 shrink-0" />
        </a>
        <div className="label-code mt-3 text-center text-white/45">
          We reply within one business day
        </div>
      </div>
    </div>
  );
}

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
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* LEFT · the pitch */}
          <Reveal>
            <span className="label-code mb-5 block text-[var(--sw-mint)]">
              See if it fits
            </span>
            <h2 className="font-head max-w-[18ch] text-[34px] leading-[1.05] text-white md:text-[48px] lg:text-[56px]">
              See what one platform would do{" "}
              <span className="text-[var(--sw-mint)]">across your markets</span>
            </h2>
            <ul className="mt-8 space-y-3 text-[14px] text-white/75 md:mt-10 md:text-[15px]">
              {TRUST.map((t) => (
                <li key={t} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-[var(--sw-mint)]" />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>

          {/* RIGHT · booking module */}
          <Reveal delay={0.1}>
            <ConsultCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
