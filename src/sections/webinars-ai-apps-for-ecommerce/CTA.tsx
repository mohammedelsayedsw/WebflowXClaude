"use client";

import { Reveal } from "@/components/primitives/Reveal";

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
                Free webinar &middot; July 29, 2026 &middot; 10:00 AM (GMT)
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-head text-white text-[26px] sm:text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] tracking-[-0.01em] max-w-[24ch] mx-auto">
              Stop piecing your store together across tabs.
              <br />
              <span style={{ color: "var(--sw-mint)" }}>
                Run it from one chat.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mt-6 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[60ch] mx-auto">
              Join on July 29 to see it work live, get your questions answered,
              and decide your next move.
            </p>
          </Reveal>

          <Reveal delay={0.25} className="w-full">
            <div className="mx-auto mt-10 w-full max-w-[760px] md:mt-12">
              {/* StreamYard's own registration form / player - inline, captures registrants directly in StreamYard */}
              <div
                style={{
                  width: "100%",
                  height: 0,
                  position: "relative",
                  paddingBottom: "56.25%",
                }}
              >
                <iframe
                  src="https://streamyard.com/watch/bjPKz5B4e5iV?embed=true"
                  title="AI apps for eCommerce webinar registration"
                  allow="autoplay; fullscreen"
                  frameBorder={0}
                  style={{
                    width: "100%",
                    height: "100%",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    overflow: "hidden",
                    border: 0,
                    borderRadius: 4,
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
