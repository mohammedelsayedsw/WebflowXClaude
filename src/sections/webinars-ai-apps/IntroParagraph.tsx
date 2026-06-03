"use client";

import { ArrowUp, Sparkles } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

/** ChatGPT-style conversation card — header chrome, chat turns, composer. Ported from chatgpt-app-agency Hero. */
function ChatMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-[8px]"
      style={{
        background: "#212121",
        boxShadow:
          "0 1px 0 rgba(255,255,255,0.06) inset, 0 0 0 1px rgba(255,255,255,0.08), 0 30px 60px -20px rgba(0,0,0,0.45)",
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
              Find me a waterproof hiking jacket under &euro;200, in stock for
              next-day.
            </div>
          </div>
        </div>

        {/* Assistant turn */}
        <div className="flex gap-3 items-start">
          <div className="h-7 w-7 rounded-full bg-[var(--sw-mint)]/15 ring-1 ring-[var(--sw-mint)]/40 flex items-center justify-center shrink-0 mt-0.5">
            <Sparkles
              className="h-3.5 w-3.5 text-[var(--sw-mint)]"
              strokeWidth={2.5}
            />
          </div>
          <div className="flex-1 space-y-2">
            <div className="rounded-[6px] border border-white/[0.07] bg-white/[0.02] px-4 py-3 flex items-center justify-between gap-4">
              <div>
                <div className="text-white text-[14px] font-semibold">
                  North Face Resolve 2
                </div>
                <div className="text-white/40 text-[12px] mt-0.5">
                  M, L &middot; ships next-day
                </div>
              </div>
              <div className="text-white font-head text-[15px] tabular-nums">
                &euro;179
              </div>
            </div>
            <div className="rounded-[6px] border border-white/[0.07] bg-white/[0.02] px-4 py-3 flex items-center justify-between gap-4">
              <div>
                <div className="text-white text-[14px] font-semibold">
                  Patagonia Torrentshell
                </div>
                <div className="text-white/40 text-[12px] mt-0.5">
                  S, M, L &middot; ships next-day
                </div>
              </div>
              <div className="text-white font-head text-[15px] tabular-nums">
                &euro;189
              </div>
            </div>
            <div className="rounded-[6px] border border-white/[0.07] bg-white/[0.02] px-4 py-3 flex items-center justify-between gap-4">
              <div>
                <div className="text-white text-[14px] font-semibold">
                  Marmot PreCip Eco
                </div>
                <div className="text-white/40 text-[12px] mt-0.5">
                  M &middot; ships next-day
                </div>
              </div>
              <div className="text-white font-head text-[15px] tabular-nums">
                &euro;169
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Input row at bottom — looks like ChatGPT's composer */}
      <div className="px-5 md:px-6 pb-5">
        <div className="flex items-center gap-2 rounded-full bg-white/[0.06] border border-white/[0.08] pl-5 pr-2 py-2.5">
          <span className="text-[13px] text-white/35 flex-1">
            Message ChatGPT&hellip;
          </span>
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-white">
            <ArrowUp className="h-3.5 w-3.5 text-[#212121]" strokeWidth={3} />
          </span>
        </div>
      </div>
    </div>
  );
}

export function IntroParagraph() {
  return (
    <section
      id="the-shift"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-start">
          {/* LEFT · copy */}
          <div className="max-w-[640px]">
            <Reveal>
              <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
                <span className="text-[var(--sw-black)]/55">1</span>
                <span className="h-px w-6 bg-[var(--sw-black)]/20" />
                <span>The shift</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-[var(--sw-black)] text-[32px] sm:text-[36px] md:text-[44px] lg:text-[48px] leading-[1.05] tracking-[-0.01em] max-w-[24ch]">
                Buyers now ask{" "}
                <span className="text-[var(--sw-blue)]">
                  ChatGPT and Claude
                </span>{" "}
                what your business used to answer
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-9 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                When the App Store launched in 2008, the brands that built
                early owned their category for years. ChatGPT and Claude
                reached that same moment now. Hundreds of millions of people
                already ask them what to buy, where to book, and how to get
                support.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-5 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed">
                Both platforms opened a new app layer. People use brand apps
                inside the chat to search products, place orders, get quotes,
                and manage their accounts. The first brands went live already.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 text-[var(--sw-black)]/75 text-[15px] md:text-[17px] leading-relaxed">
                In this webinar, scandiweb&apos;s COO Rolands Popovs walks you
                through a working ChatGPT and Claude app for a real eCommerce
                business, shows how it connects to your systems, and explains
                what it takes to go live in under two weeks.
              </p>
            </Reveal>

            <Reveal delay={0.25}>
              <p className="mt-9 font-head font-semibold text-[var(--sw-black)] text-[17px] md:text-[19px]">
                Tuesday, June 17, 2026 at 10:00 AM (GMT)
              </p>
            </Reveal>
          </div>

          {/* RIGHT · animated ChatGPT mockup */}
          <Reveal delay={0.15} className="lg:sticky lg:top-24">
            <ChatMockup />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
