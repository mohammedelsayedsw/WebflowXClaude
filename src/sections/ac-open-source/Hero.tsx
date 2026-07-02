"use client";

import { ArrowRight, Check } from "lucide-react";
import { assetUrl } from "@/lib/assets";
import { MovedBrandsBar } from "@/sections/ac-open-source/MovedBrandsBar";

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

function MigrationCheckCard() {
  const bullets = [
    "What breaks, and what's safe to keep",
    "What gets rebuilt, and what it costs",
    "Your license saving, on paper",
  ];
  return (
    <div
      className="relative block overflow-hidden rounded-[4px] backdrop-blur"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.04) 100%), rgba(16,19,44,0.55)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.12)",
      }}
    >
      <div className="p-7 md:p-8">
        <span className="inline-block rounded-[2px] bg-[var(--sw-mint)] px-3 py-1 font-head text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--sw-black)]">
          First step, no commitment
        </span>
        <h2 className="mt-5 font-head text-white text-[34px] md:text-[40px] leading-[1.05]">
          <span style={{ color: "var(--sw-mint)" }}>$0</span> migration check
        </h2>
        <p className="mt-4 text-[14px] md:text-[15px] text-white/75 leading-relaxed">
          See exactly what moving to Open Source takes for your store, before
          you commit anything.
        </p>
        <ul className="mt-6 space-y-3">
          {bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 text-[14px] md:text-[15px] text-white leading-snug"
            >
              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-[2px] bg-[var(--sw-mint)]">
                <Check className="h-3 w-3 text-[var(--sw-black)]" strokeWidth={3} />
              </span>
              {b}
            </li>
          ))}
        </ul>
        <a
          href="#cta"
          className="mt-7 flex items-center justify-center gap-2 rounded-[2px] border border-[var(--sw-mint)] px-5 py-3 text-white hover:bg-[var(--sw-mint)]/10 transition"
        >
          <span className="font-head text-[15px]">Claim your free check</span>
          <ArrowRight className="h-4 w-4" />
        </a>
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
          <img
            src={assetUrl("/magento/adobe-commerce-to-magento-open-source/team/aigars.png")}
            alt="Aigars Pavlovics"
            className="h-12 w-12 rounded-full object-cover shrink-0"
            style={{ border: "1px solid rgba(230,231,239,0.2)" }}
          />
          <div>
            <div className="text-white text-[14px] font-medium">
              Aigars Pavlovics
            </div>
            <div className="label-code text-white/55 mt-0.5">
              Co-Founder, scandiweb
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex flex-col">
      <HeroBg />

      <div className="flex-1 flex items-center">
        <div className="wrap relative z-10 pt-24 md:pt-28 pb-12 md:pb-16 w-full">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-7 md:mb-9">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  Adobe Commerce to Magento Open Source
                </span>
              </div>

              <h1 className="font-head text-white text-[32px] sm:text-[40px] md:text-[50px] lg:text-[58px] leading-[1.05] tracking-[-0.015em] max-w-[16ch]">
                Keep your store. Drop the license.{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  Reinvest the savings.
                </span>
              </h1>

              <p className="mt-6 md:mt-7 text-[16px] md:text-[18px] text-white/85 max-w-[52ch] leading-relaxed">
                Magento Open Source is the same platform as Adobe Commerce,
                without the license. Keep your catalog, checkout, and storefront,
                rebuild only the enterprise features you actually use, and put
                the license budget back into growth.
              </p>

              <div className="mt-9 md:mt-10 flex flex-wrap items-center gap-5">
                <a
                  href="#offer"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--sw-mint)] px-6 py-3 text-white hover:bg-[var(--sw-mint)]/10 transition"
                >
                  <span className="font-head text-[15px] md:text-[16px]">
                    See how it works
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition text-[14px] md:text-[15px]"
                >
                  Speak with a migration expert
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <MigrationCheckCard />
            </div>
          </div>
        </div>
      </div>

      <MovedBrandsBar />
    </section>
  );
}
