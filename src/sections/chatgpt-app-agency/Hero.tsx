"use client";

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

function HeroSpecCard() {
  const stats: [string, string][] = [
    ["2,100+", "Magento + Shopify projects shipped"],
    ["$4B+", "client commerce processed annually"],
    ["894+", "Adobe certifications · Gold Partner"],
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
      <div className="p-6 md:p-8">
        <div className="label-code text-white/55 mb-4">scandiweb · the proof</div>
        <blockquote className="font-head text-white text-[22px] md:text-[26px] leading-[1.2] tracking-[-0.005em]">
          The{" "}
          <span className="text-[var(--sw-mint)]">#1 most-certified</span>{" "}
          Adobe Commerce + Hyvä agency in the world. Now building ChatGPT Apps on top of the same stack.
        </blockquote>

        <div className="mt-7 pt-6 border-t border-white/10 grid grid-cols-3 gap-2">
          {stats.map(([k, l]) => (
            <div
              key={k}
              className="rounded-[2px] border border-white/10 bg-white/[0.03] px-3 py-3"
            >
              <div className="font-head text-white text-[20px] md:text-[22px] leading-none tabular-nums">
                {k}
              </div>
              <div className="label-code mt-2 text-[9px] text-white/55 leading-snug">
                {l}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[11px] text-white/60">
          <span className="text-white">Adobe Commerce Gold Partner</span>
          <span className="text-white/30">·</span>
          <span className="text-white">Hyvä Platinum Partner</span>
          <span className="text-white/30">·</span>
          <span className="text-white">Organizers of Meet Magento NY · Canada · Baltics</span>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  const logos: { src: string; alt: string; h: number }[] = [
    { src: "/shared/logos/clients/puma.svg",      alt: "PUMA",                            h: 30 },
    { src: "/shared/logos/clients/nytimes.svg",   alt: "The New York Times",              h: 22 },
    { src: "/shared/logos/clients/samsung.svg",   alt: "Samsung",                         h: 22 },
    { src: "/shared/logos/clients/adobe.svg",     alt: "Adobe",                           h: 22 },
    { src: "/shared/logos/clients/olympus.png",   alt: "OM Digital Solutions / Olympus",  h: 24 },
    { src: "/shared/logos/clients/acer.png",      alt: "Acer",                            h: 22 },
    { src: "/shared/logos/clients/mercedes.svg",  alt: "Mercedes-Benz",                   h: 30 },
  ];
  return (
    <div
      className="relative z-10"
      style={{
        background: "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="wrap py-6 md:py-8 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
        <div className="font-head font-bold text-white text-[16px] md:text-[18px] leading-[1.35] max-w-[22ch] shrink-0">
          Trusted by 700+ brands worldwide
        </div>
        <div className="flex flex-wrap items-center gap-x-8 md:gap-x-10 gap-y-5 flex-1 md:justify-end">
          {logos.map((l, i) => (
            <img
              key={i}
              src={assetUrl(l.src)}
              alt={l.alt}
              className="w-auto opacity-80"
              style={{
                maxHeight: `${l.h}px`,
                height: "auto",
                filter: "brightness(0) invert(1)",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative -mt-[60px] md:-mt-[75px] overflow-hidden min-h-screen flex flex-col">
      <HeroBg />

      <div className="flex-1 flex items-center">
        <div className="wrap relative z-10 pt-28 md:pt-36 pb-16 md:pb-24 w-full">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.3fr_1fr] items-start">
            <div>
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8 md:mb-10">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  ChatGPT App development · MCP · OpenAI
                </span>
              </div>

              <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[18ch]">
                ChatGPT Apps for{" "}
                <span style={{ color: "var(--sw-mint)" }}>eCommerce</span>.
                <br className="hidden md:block" />
                <span className="text-white/85 text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.1]">
                  Built by the people who ship eCommerce.
                </span>
              </h1>

              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/90 max-w-[58ch] leading-relaxed">
                <span className="font-semibold text-white">scandiweb is an Adobe Commerce Gold Partner and Hyvä Platinum Partner with 22+ years of eCommerce engineering.</span> We build MCP-powered ChatGPT Apps that connect to Shopify, Adobe Commerce, BigCommerce, and B2B commerce systems – so customers can search, compare, reorder, and buy directly inside ChatGPT.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-full border border-[var(--sw-mint)] px-7 py-3.5 font-head font-semibold text-[14px] text-[var(--sw-mint)] hover:bg-[var(--sw-mint)] hover:text-[var(--sw-black)] transition"
                >
                  Get my MCP App plan →
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 font-head font-semibold text-[14px] text-white hover:bg-white/10 transition"
                >
                  See package pricing
                </a>
              </div>
            </div>

            <div className="lg:pt-24">
              <HeroSpecCard />
            </div>
          </div>
        </div>
      </div>

      <TrustBar />
    </section>
  );
}
