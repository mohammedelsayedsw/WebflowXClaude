"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { ArrowUpRight, Calendar, MapPin, Handshake } from "lucide-react";
import { assetUrl } from "@/lib/assets";

function HeroBg() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 620px at 18% 22%, #2a3380 0%, transparent 55%)," +
            "radial-gradient(800px 580px at 85% 82%, #070a1e 0%, transparent 52%)," +
            "radial-gradient(1400px 900px at 50% 50%, #1a2060 0%, #141a48 35%, #10132c 70%, #0a0d24 100%)",
        }}
      />
      <div
        className="absolute inset-0 -z-10 opacity-70 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(620px 900px at 28% 62%, rgba(7, 10, 30, 0.85), transparent 60%)," +
            "radial-gradient(540px 720px at 72% 28%, rgba(63, 74, 175, 0.22), transparent 60%)",
          filter: "blur(50px)",
        }}
      />
    </>
  );
}

export function Hero() {
  return (
    <section className="relative -mt-[60px] md:-mt-[75px] overflow-hidden min-h-screen flex flex-col">
      <HeroBg />

      <div className="flex-1 flex items-center">
        <div className="wrap relative z-10 pt-28 md:pt-36 pb-16 md:pb-24 w-full">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
            {/* LEFT · copy */}
            <div>
              {/* Pill eyebrow */}
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8 md:mb-10">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  Event · 25 Jun 2026 · Paris
                </span>
              </div>

              {/* H1 */}
              <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[14ch]">
                We&apos;re at Meet Magento{" "}
                <span style={{ color: "var(--sw-mint)" }}>France 2026</span>
              </h1>

              {/* Subhead */}
              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[54ch] leading-relaxed">
                We&apos;re attending. Grab a slot and let&apos;s talk Magento,
                headless, and where eCommerce is heading next.
              </p>

              {/* CTAs */}
              <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3">
                <a
                  href="https://calendly.com/scandi-bd/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnPrimary}
                >
                  Book a call with our team
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href="#meet-michael"
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[14px] underline underline-offset-4 px-4 py-3"
                >
                  Meet Michael
                </a>
              </div>
            </div>

            {/* RIGHT · banner image */}
            <div className="lg:pt-6">
              <div className="relative rounded-[4px] overflow-hidden border border-white/10 bg-white/[0.02]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/events/meet-magento-france/banner.png")}
                  alt="Meet Magento France 2026"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>

          {/* Event details strip */}
          <div className="mt-14 md:mt-20 pt-10 border-t border-white/10">
            <Reveal>
              <div className="grid sm:grid-cols-3 gap-8 max-w-[760px]">
                <div className="flex items-start gap-3">
                  <Calendar className="h-5 w-5 text-[var(--sw-mint)] mt-0.5 shrink-0" />
                  <div>
                    <div className="label-code text-white/55">When</div>
                    <div className="text-white text-[15px] mt-1">25 June 2026</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[var(--sw-mint)] mt-0.5 shrink-0" />
                  <div>
                    <div className="label-code text-white/55">Where</div>
                    <div className="text-white text-[15px] mt-1">Paris</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Handshake className="h-5 w-5 text-[var(--sw-mint)] mt-0.5 shrink-0" />
                  <div>
                    <div className="label-code text-white/55">scandiweb</div>
                    <div className="text-white text-[15px] mt-1">Attending</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
