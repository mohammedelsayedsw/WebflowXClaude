"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

export function TheGap() {
  return (
    <section
      id="the-gap"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="max-w-[860px]">
          <Reveal>
            <SectionLabel index="4">Why it matters</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] mt-6 max-w-[24ch]">
              The gap:{" "}
              <span style={{ color: "var(--sw-mint)" }}>
                ChatGPT and Claude cannot see what you sell
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-9 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
              A buyer asks ChatGPT or Claude to reorder last month&apos;s
              order. Neither can reach your catalog or their account, so the
              request stalls and your rep answers the email days later.
            </p>
          </Reveal>

          {/* Highlighted payoff line — left accent border + mint + heavier weight */}
          <Reveal delay={0.18}>
            <div
              className="mt-9 md:mt-10 pl-5 md:pl-6 border-l-2"
              style={{ borderColor: "var(--sw-mint)" }}
            >
              <p
                className="font-head font-semibold text-[19px] md:text-[24px] lg:text-[28px] leading-[1.25] tracking-[-0.005em]"
                style={{ color: "var(--sw-mint)" }}
              >
                With an app inside the chat, the buyer sees their contract
                pricing and stock, and confirms the reorder in one message.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
