"use client";

import { Search, Sparkles, Star } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";

/* ── App Store mockup (colors adapted for dark section) ────────── */

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
    <div className="flex items-center gap-3 md:gap-4">
      <span className="text-white/40 font-head text-[12px] md:text-[13px] tabular-nums w-3 shrink-0">
        {index}
      </span>
      <span
        className="inline-flex h-9 w-9 md:h-10 md:w-10 shrink-0 items-center justify-center rounded-[6px] font-head font-bold text-white text-[16px] md:text-[18px]"
        style={{ background: app.bg }}
      >
        {app.letter}
      </span>
      <div className="min-w-0 flex-1">
        <div className="text-white text-[13.5px] md:text-[14.5px] font-semibold leading-tight">
          {app.name}
        </div>
        <div className="text-white/55 text-[11.5px] md:text-[12.5px] mt-0.5 truncate">
          {app.tag}
        </div>
      </div>
      <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-white/70 font-head text-[11.5px] md:text-[12px] shrink-0">
        Open
      </span>
    </div>
  );
}

function AppStoreMockup() {
  return (
    <div
      className="relative overflow-hidden rounded-[10px] w-full"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 60%), rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.10)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.10), 0 30px 60px -20px rgba(16,19,44,0.45)",
      }}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-3 px-4 py-2.5 border-b border-white/[0.08] bg-white/[0.015]">
        <div className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-white/25" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.05] border border-white/[0.08] px-3 py-1 text-[11.5px] text-white/55">
            <Search className="h-3 w-3 opacity-70" />
            <span>chatgpt.com / apps</span>
          </div>
        </div>
        <span className="text-[11.5px] text-white/55 shrink-0">Apps</span>
      </div>

      {/* Body */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr]">
        {/* Sidebar */}
        <aside className="hidden md:block border-r border-white/[0.06] p-5">
          <div className="label-code text-white/40 mb-4">Browse</div>
          <ul className="space-y-1.5">
            {nav.map((n, i) => (
              <li key={n}>
                <div
                  className={
                    "rounded-[2px] px-3 py-2 text-[13px] font-head transition-colors " +
                    (i === 0
                      ? "bg-white/[0.06] border border-white/[0.08] text-white"
                      : "text-white/65 hover:bg-white/[0.03]")
                  }
                >
                  {n}
                </div>
              </li>
            ))}
          </ul>
        </aside>

        {/* Main */}
        <div className="p-5 md:p-6 space-y-7">
          {/* Editor's pick */}
          <div>
            <div className="label-code text-white/40 mb-3">
              Editor&apos;s pick
            </div>
            <div
              className="relative rounded-[8px] overflow-hidden p-4 md:p-5"
              style={{
                background:
                  "linear-gradient(120deg, rgba(110,247,110,0.12) 0%, rgba(110,247,110,0.04) 45%, rgba(255,255,255,0.02) 100%)",
                border: "1px solid rgba(110,247,110,0.22)",
              }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="inline-flex h-12 w-12 md:h-14 md:w-14 shrink-0 items-center justify-center rounded-[8px]"
                  style={{
                    background:
                      "linear-gradient(160deg, rgba(110,247,110,0.45) 0%, rgba(110,247,110,0.18) 100%)",
                    border: "1px solid rgba(110,247,110,0.45)",
                  }}
                >
                  <Sparkles
                    className="h-6 w-6 md:h-7 md:w-7"
                    style={{ color: "var(--sw-mint)" }}
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className="font-head font-bold text-[16px] md:text-[18px] tracking-[0.04em] uppercase"
                      style={{ color: "var(--sw-mint)" }}
                    >
                      Your brand
                    </span>
                    <span className="text-white/40 text-[12.5px]">
                      &middot; Shopping
                    </span>
                  </div>
                  <p className="mt-2 text-white text-[13.5px] md:text-[15px] leading-relaxed max-w-[60ch]">
                    Shop, search and get help &ndash; directly inside ChatGPT
                    and Claude.
                  </p>
                  <div className="mt-4 flex items-center gap-4">
                    <span className="inline-flex items-center rounded-full bg-white text-[var(--sw-black)] px-4 py-1.5 font-head font-semibold text-[12px]">
                      Open
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-white/55 text-[12px]">
                      <Star
                        className="h-3 w-3"
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
                <span
                  className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-head text-[10px] tracking-[0.14em] uppercase font-semibold shrink-0"
                  style={{
                    background: "rgba(110,247,110,0.10)",
                    border: "1px solid rgba(110,247,110,0.35)",
                    color: "var(--sw-mint)",
                  }}
                >
                  <Sparkles className="h-3 w-3" />
                  Featured
                </span>
              </div>
            </div>
          </div>

          {/* Top apps this week */}
          <div>
            <div className="label-code text-white/40 mb-3">
              Top apps this week
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-7 gap-y-4">
              {apps.map((a, i) => (
                <AppRow key={a.name + i} index={i + 1} app={a} />
              ))}
            </div>
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
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="max-w-[860px]">
          <Reveal>
            <SectionLabel index="4">Why it matters</SectionLabel>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-head text-white text-[32px] sm:text-[36px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-[-0.01em] mt-6 max-w-[24ch]">
              The gap:{" "}
              <span style={{ color: "var(--sw-orange)" }}>
                ChatGPT and Claude cannot see what you sell
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-9 text-white/80 text-[16px] md:text-[18px] leading-relaxed">
              Buyers ask ChatGPT and Claude what to buy and who to trust.
              Today the platforms cannot reach your catalog, stock, or prices,
              so your brand stays out of the answer while others get named.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div
              className="mt-9 md:mt-10 pl-5 md:pl-6 border-l-2"
              style={{ borderColor: "var(--sw-mint)" }}
            >
              <p className="font-head font-semibold text-[19px] md:text-[24px] lg:text-[28px] leading-[1.25] tracking-[-0.005em]">
                <span style={{ color: "var(--sw-mint)" }}>
                  An app closes the gap.
                </span>{" "}
                <span className="text-white">
                  Your brand gets a listing in the app store and surfaces when
                  buyers ask, next to Canva and Spotify.
                </span>
              </p>
            </div>
          </Reveal>
        </div>

        {/* App Store mockup — full-width visual below the copy */}
        <Reveal delay={0.25} className="block mt-14 md:mt-20">
          <AppStoreMockup />
        </Reveal>
      </div>
    </section>
  );
}
