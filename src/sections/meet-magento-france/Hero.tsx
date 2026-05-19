"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { ArrowUpRight, Calendar, MapPin, Handshake } from "lucide-react";
import { assetUrl } from "@/lib/assets";

export function Hero() {
  return (
    <section className="relative -mt-[60px] md:-mt-[75px] overflow-hidden min-h-screen flex flex-col">
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%), radial-gradient(1200px 800px at 80% 90%, #1a2060 0%, #0a0d24 100%)",
        }}
      />
      <div className="absolute inset-0 -z-10 grid-backdrop opacity-40" />

      <div className="flex-1 flex items-center">
        <div className="wrap relative z-10 pt-28 md:pt-36 pb-16 md:pb-24 w-full">
          <div className="grid gap-10 lg:gap-16 lg:grid-cols-[1.1fr_1fr] items-center">
            <div>
              <Reveal>
                <span className="label-code text-[var(--sw-mint)]">
                  EVENT · 25 JUN 2026 · PARIS
                </span>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] mt-6">
                  We&apos;re at Meet Magento{" "}
                  <span style={{ color: "var(--sw-mint)" }}>France 2026</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-white/80 text-[15px] md:text-[17px] leading-relaxed mt-6 max-w-[52ch]">
                  We&apos;re attending. Grab a slot and let&apos;s talk
                  Magento, headless, and where eCommerce is heading next.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap items-center gap-3">
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
                    href="#why-meet"
                    className="inline-flex items-center gap-2 text-white/70 hover:text-white text-[14px] underline underline-offset-4 px-4 py-3"
                  >
                    What you&apos;ll get out of it
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.15}>
              <div className="relative rounded-[4px] overflow-hidden border border-white/10 bg-white/[0.02]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/events/meet-magento-france/banner.png")}
                  alt="Meet Magento France 2026"
                  className="w-full h-auto block"
                />
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.4}>
            <div className="mt-16 md:mt-24 grid sm:grid-cols-3 gap-6 max-w-[760px]">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-[var(--sw-mint)] mt-0.5 shrink-0" />
                <div>
                  <div className="label-code text-white/50">When</div>
                  <div className="text-white text-[15px] mt-1">25 June 2026</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--sw-mint)] mt-0.5 shrink-0" />
                <div>
                  <div className="label-code text-white/50">Where</div>
                  <div className="text-white text-[15px] mt-1">Paris</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Handshake className="h-5 w-5 text-[var(--sw-mint)] mt-0.5 shrink-0" />
                <div>
                  <div className="label-code text-white/50">scandiweb</div>
                  <div className="text-white text-[15px] mt-1">Attending</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
