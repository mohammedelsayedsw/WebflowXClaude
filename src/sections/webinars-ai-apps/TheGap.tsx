"use client";

import { Search, Sparkles, Star } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

/* ── Vertical ChatGPT-apps directory mockup ────────────────────── */

const nav = [
  "Featured",
  "Top picks",
  "Productivity",
  "Shopping",
  "Travel",
  "Learning",
];

const apps: { letter: string; name: string; tag: string; bg: string }[] = [
  { letter: "C", name: "Canva", tag: "Design anything", bg: "#7cc4ff" },
  { letter: "S", name: "Spotify", tag: "Music for every moment", bg: "#1ed760" },
  { letter: "B", name: "Booking.com", tag: "Book your next trip", bg: "#0a2e8f" },
  { letter: "F", name: "Figma", tag: "Turn ideas into designs", bg: "#9a6cff" },
  { letter: "C", name: "Coursera", tag: "Learn without limits", bg: "#2861ff" },
  { letter: "Z", name: "Zillow", tag: "Find your next home", bg: "#3f7afe" },
];

function AppRow({
  index,
  app,
}: {
  index: number;
  app: (typeof apps)[number];
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="text-white/45 font-head text-[11px] tabular-nums w-3 shrink-0">
        {index}
      </span>
      <span
        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[4px] font-head font-bold text-white text-[14px]"
        style={{ background: app.bg }}
      >
        {app.letter}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-white text-[12.5px] font-semibold leading-tight">
          {app.name}
        </div>
        <div className="text-white/55 text-[10.5px] mt-0.5 truncate">
          {app.tag}
        </div>
      </div>
      <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-2.5 py-0.5 text-white/75 font-head text-[10.5px] shrink-0">
        Open
      </span>
    </div>
  );
}

function AppStoreMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-[4px] w-full max-w-[340px] mx-auto lg:mr-0 lg:ml-auto"
      style={{
        background:
          "linear-gradient(180deg, #0d1414 0%, #0a1110 60%, #080c0c 100%)",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2.5 px-3.5 py-2.5 border-b border-white/[0.10]">
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/25" />
        </div>
        <div className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-white/[0.08] border border-white/[0.10] px-2.5 py-1 text-[10.5px] text-white/70">
          <Search className="h-2.5 w-2.5 opacity-70" />
          <span>chatgpt.com / apps</span>
        </div>
      </div>

      {/* Horizontal nav (replaces left sidebar in vertical layout) */}
      <div className="px-3.5 pt-3 pb-3 border-b border-white/[0.08]">
        <div className="flex gap-1.5 overflow-x-auto pb-0.5 -mx-1 px-1">
          {nav.map((n, i) => (
            <span
              key={n}
              className={
                "rounded-full px-2.5 py-1 text-[10.5px] font-head font-medium shrink-0 transition-colors " +
                (i === 0
                  ? "bg-white/[0.14] text-white border border-white/[0.18]"
                  : "text-white/65 border border-white/[0.08]")
              }
            >
              {n}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-5">
        {/* Editor's pick */}
        <div>
          <div
            className="font-head font-bold uppercase mb-3"
            style={{
              color: "#ffffff",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textShadow: "0 1px 2px rgba(0,0,0,0.4)",
            }}
          >
            Editor&apos;s pick
          </div>
          <div
            className="relative rounded-[4px] overflow-hidden p-3.5"
            style={{
              background: "rgba(255,255,255,0.025)",
              border: "1px solid rgba(110,247,110,0.18)",
            }}
          >
            <div className="flex items-start gap-3">
              <span
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[4px]"
                style={{
                  background: "rgba(110,247,110,0.10)",
                  border: "1px solid rgba(110,247,110,0.28)",
                }}
              >
                <Sparkles
                  className="h-5 w-5"
                  style={{ color: "var(--sw-mint)" }}
                />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span
                    className="font-head font-bold text-[13.5px] tracking-[0.04em] uppercase"
                    style={{ color: "var(--sw-mint)" }}
                  >
                    Your brand
                  </span>
                  <span className="text-white/45 text-[11px]">
                    &middot; Shopping
                  </span>
                </div>
                <p className="mt-1.5 text-white text-[12.5px] leading-snug">
                  Shop, search and get help &ndash; directly inside ChatGPT
                  and Claude.
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-white text-[var(--sw-black)] px-3 py-1 font-head font-semibold text-[11px]">
                    Open
                  </span>
                  <span className="inline-flex items-center gap-1 text-white/60 text-[11px]">
                    <Star
                      className="h-2.5 w-2.5"
                      style={{
                        color: "var(--sw-mint)",
                        fill: "var(--sw-mint)",
                      }}
                    />
                    <span className="font-head text-white">4.9</span>
                    <span>&middot; 12k</span>
                  </span>
                </div>
              </div>
            </div>
            {/* Featured chip — bottom-right of card so it doesn't crowd content */}
            <span
              className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-head text-[8.5px] tracking-[0.14em] uppercase font-semibold"
              style={{
                background: "rgba(110,247,110,0.10)",
                border: "1px solid rgba(110,247,110,0.35)",
                color: "var(--sw-mint)",
              }}
            >
              <Sparkles className="h-2.5 w-2.5" />
              Featured
            </span>
          </div>
        </div>

        {/* Top apps - single column */}
        <div>
          <div
            className="font-head font-bold uppercase mb-3"
            style={{
              color: "#ffffff",
              fontSize: "11px",
              letterSpacing: "0.18em",
              textShadow: "0 1px 2px rgba(0,0,0,0.4)",
            }}
          >
            Top apps this week
          </div>
          <div className="space-y-3">
            {apps.map((a, i) => (
              <AppRow key={a.name + i} index={i + 1} app={a} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */

export function TheGap() {
  return (
    <section
      id="the-gap"
      className="bg-lp-bright py-28 md:py-36 scroll-mt-20"
    >
      <div className="wrap">
        <div className="grid gap-12 md:gap-14 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          {/* LEFT · copy */}
          <div className="max-w-[640px]">
            <Reveal>
              <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
                <span className="text-[var(--sw-black)]/55">3</span>
                <span className="h-px w-6 bg-[var(--sw-black)]/20" />
                <span>Why it matters</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[42px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] mt-6 max-w-[24ch]">
                The gap:{" "}
                <span style={{ color: "var(--sw-blue)" }}>
                  ChatGPT and Claude cannot see what you sell
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-9 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                Buyers ask ChatGPT and Claude what to buy and who to trust.
                Today the platforms cannot reach your catalog, stock, or
                prices, so your brand stays out of the answer while others
                get named.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div
                className="mt-9 md:mt-10 pl-5 md:pl-6 border-l-2"
                style={{ borderColor: "var(--sw-blue)" }}
              >
                <p className="font-head font-semibold text-[19px] md:text-[24px] lg:text-[28px] leading-[1.25] tracking-[-0.005em]">
                  <span className="text-[var(--sw-blue)]">
                    An app closes the gap.
                  </span>{" "}
                  <span className="text-[var(--sw-black)]">
                    Customers get accurate answers straight from your
                    business, live stock, real prices, and order status, right
                    inside the chat.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT · vertical mockup, sticky on lg+ so it stays visible
              while reading the copy column */}
          <div className="lg:sticky lg:top-24">
            <Reveal delay={0.15}>
              <AppStoreMockup />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
