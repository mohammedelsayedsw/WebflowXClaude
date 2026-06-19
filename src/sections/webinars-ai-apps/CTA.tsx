"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 overflow-hidden scroll-mt-20"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(800px 580px at 85% 82%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
      }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-70 mix-blend-overlay -z-10"
        style={{
          background:
            "radial-gradient(620px 900px at 28% 62%, rgba(7, 10, 30, 0.85), transparent 60%)," +
            "radial-gradient(540px 720px at 72% 28%, rgba(63, 74, 175, 0.22), transparent 60%)",
          filter: "blur(50px)",
        }}
      />

      <div className="wrap relative">
        <div className="max-w-[820px] mx-auto text-center flex flex-col items-center">
          <Reveal>
            <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8">
              <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                Free webinar &middot; June 17, 2026 &middot; 10:00 AM (GMT)
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[26px] sm:text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.01em] max-w-[22ch] mx-auto">
              The App Store moment is happening inside AI.
              <br />
              <span style={{ color: "var(--sw-mint)" }}>
                Will your business be there?
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[60ch] mx-auto">
              Join the webinar to see it work live, get your questions
              answered,
              <br />
              and decide your next move.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 md:mt-12 flex justify-center">
              <a
                href="https://youtu.be/kY-MZtjSi9c"
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Watch now
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
