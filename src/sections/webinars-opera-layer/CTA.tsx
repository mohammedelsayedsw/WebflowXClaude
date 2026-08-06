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
          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[26px] sm:text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.01em] max-w-[18ch] mx-auto">
              Save your seat
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[60ch] mx-auto">
              August 25, 2026 &middot; 1 PM GMT &middot; Online &middot; Free to
              attend.
              <br />
              Can&apos;t join live? Register and we&apos;ll send the recording.
            </p>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 md:mt-12 flex justify-center">
              {/* TODO: replace with real registration link / HubSpot form */}
              <a href="#cta" className={btnPrimary}>
                Save your seat
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
