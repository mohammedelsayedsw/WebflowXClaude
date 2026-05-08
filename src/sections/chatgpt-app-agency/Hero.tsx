"use client";

import { ArrowUp, Sparkles } from "lucide-react";
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

/** ChatGPT-style conversation card — header avatar + chat + input box. */
function ChatMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-[8px]"
      style={{
        background: "#212121",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(255,255,255,0.08), 0 30px 60px -20px rgba(0,0,0,0.6)",
      }}
    >
      {/* Top bar — looks like ChatGPT app chrome */}
      <div className="px-4 py-3 border-b border-white/[0.07] flex items-center gap-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center text-[12px] text-white/40 font-medium">
          ChatGPT
        </div>
        <div className="w-12" />
      </div>

      {/* Conversation area */}
      <div className="px-5 md:px-6 py-6 space-y-6">
        {/* User turn */}
        <div className="flex gap-3 justify-end">
          <div className="rounded-[18px] bg-white/[0.08] px-4 py-3 max-w-[90%]">
            <div className="text-white text-[15px] leading-relaxed">
              Find me a waterproof hiking jacket under €200, in stock for next-day.
            </div>
          </div>
        </div>

        {/* Assistant turn */}
        <div className="flex gap-3 items-start">
          <div className="h-7 w-7 rounded-full bg-[var(--sw-mint)]/15 ring-1 ring-[var(--sw-mint)]/40 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles className="h-3.5 w-3.5 text-[var(--sw-mint)]" strokeWidth={2.5} />
          </div>
          <div className="flex-1 space-y-2">
            <div className="rounded-[6px] border border-white/[0.07] bg-white/[0.02] px-4 py-3 flex items-center justify-between gap-4">
              <div>
                <div className="text-white text-[14px] font-semibold">North Face Resolve 2</div>
                <div className="text-white/40 text-[12px] mt-0.5">M, L · ships next-day</div>
              </div>
              <div className="text-white font-head text-[15px] tabular-nums">€179</div>
            </div>
            <div className="rounded-[6px] border border-white/[0.07] bg-white/[0.02] px-4 py-3 flex items-center justify-between gap-4">
              <div>
                <div className="text-white text-[14px] font-semibold">Patagonia Torrentshell</div>
                <div className="text-white/40 text-[12px] mt-0.5">S, M, L · ships next-day</div>
              </div>
              <div className="text-white font-head text-[15px] tabular-nums">€189</div>
            </div>
            <div className="rounded-[6px] border border-white/[0.07] bg-white/[0.02] px-4 py-3 flex items-center justify-between gap-4">
              <div>
                <div className="text-white text-[14px] font-semibold">Marmot PreCip Eco</div>
                <div className="text-white/40 text-[12px] mt-0.5">M · ships next-day</div>
              </div>
              <div className="text-white font-head text-[15px] tabular-nums">€169</div>
            </div>
          </div>
        </div>
      </div>

      {/* Input row at bottom — looks like ChatGPT&rsquo;s composer */}
      <div className="px-5 md:px-6 pb-5">
        <div className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] pl-5 pr-2 py-2.5">
          <span className="text-[13px] text-white/35 flex-1">Message ChatGPT…</span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white">
            <ArrowUp className="h-3.5 w-3.5 text-[#212121]" strokeWidth={3} />
          </span>
        </div>
      </div>
    </div>
  );
}

function TrustBar() {
  const logos: { src: string; alt: string; h: number }[] = [
    { src: "/shared/logos/clients/puma.svg",      alt: "PUMA",                            h: 22 },
    { src: "/shared/logos/clients/nytimes.svg",   alt: "The New York Times",              h: 18 },
    { src: "/shared/logos/clients/samsung.svg",   alt: "Samsung",                         h: 18 },
    { src: "/shared/logos/clients/adobe.svg",     alt: "Adobe",                           h: 18 },
    { src: "/shared/logos/clients/olympus.png",   alt: "OM Digital Solutions / Olympus",  h: 20 },
    { src: "/shared/logos/clients/acer.png",      alt: "Acer",                            h: 18 },
    { src: "/shared/logos/clients/mercedes.svg",  alt: "Mercedes-Benz",                   h: 24 },
  ];
  return (
    <div
      className="relative z-10"
      style={{
        background: "linear-gradient(180deg, rgba(16,19,44,0) 0%, rgba(16,19,44,0.55) 100%)",
        borderTop: "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="wrap py-4 md:py-5 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10">
        <div className="font-head font-bold text-white text-[14px] md:text-[15px] leading-[1.35] max-w-[22ch] shrink-0">
          Trusted by 700+ brands worldwide
        </div>
        <div className="flex flex-wrap items-center gap-x-6 md:gap-x-8 gap-y-3 flex-1 md:justify-end">
          {logos.map((l, i) => (
            <img
              key={i}
              src={assetUrl(l.src)}
              alt={l.alt}
              className="w-auto opacity-75"
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
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[1.15fr_1fr] items-center">
            <div>
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-8 md:mb-10">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  ChatGPT App development
                </span>
              </div>

              <h1 className="font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[18ch]">
                ChatGPT Apps for{" "}
                <span style={{ color: "var(--sw-mint)" }}>eCommerce</span>.
              </h1>

              <p className="mt-7 md:mt-8 text-[16px] md:text-[18px] text-white/85 max-w-[54ch] leading-relaxed">
                Build an <span className="font-semibold text-white">MCP-powered ChatGPT App</span> connected to your real catalog, real prices, and real customer data. Customers search, compare, reorder, and buy directly inside ChatGPT.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--sw-mint)] px-7 py-3.5 font-head font-semibold text-[14px] text-[var(--sw-mint)] hover:bg-[var(--sw-mint)] hover:text-[var(--sw-black)] transition"
                >
                  Get my MCP App plan →
                </a>
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-white/40 px-7 py-3.5 font-head font-semibold text-[14px] text-white hover:bg-white/10 transition"
                >
                  See package pricing
                </a>
              </div>
            </div>

            <div>
              <ChatMockup />
            </div>
          </div>
        </div>
      </div>

      <TrustBar />
    </section>
  );
}
