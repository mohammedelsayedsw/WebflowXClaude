"use client";

import { Check, RefreshCw } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";

/* ── "What stays / what's rebuilt" panel ───────────────────────────
   Mirrors the ai-apps mockup card styling. Left story: moving to Open
   Source keeps the store intact and rebuilds only the licensed features
   you actually use. */

const stays = [
  "Catalog, checkout & payments",
  "Custom modules & code",
  "Extensions & integrations",
  "Your storefront & admin",
];

const rebuilt = [
  "Native B2B suite",
  "Page Builder & content staging",
  "Visual merchandiser & segmentation",
  "Gift cards, rewards & RMA",
  "AI search",
];

function ParityPanel() {
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
          <span>your-store / migration-plan</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-5">
        {/* Stays the same */}
        <div>
          <div
            className="font-head font-bold uppercase mb-3 flex items-center gap-2"
            style={{
              color: "var(--sw-mint)",
              fontSize: "11px",
              letterSpacing: "0.16em",
            }}
          >
            <Check className="h-3.5 w-3.5" />
            Stays exactly the same
          </div>
          <div className="space-y-2">
            {stays.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2.5 rounded-[4px] bg-white/[0.03] border border-white/[0.08] px-3 py-2"
              >
                <span
                  className="inline-flex h-3.5 w-3.5 items-center justify-center rounded-full text-[8px] font-bold shrink-0"
                  style={{ background: "var(--sw-mint)", color: "#0a0d24" }}
                >
                  ✓
                </span>
                <span className="text-white text-[12px] leading-tight">
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Rebuilt once */}
        <div>
          <div
            className="font-head font-bold uppercase mb-3 flex items-center gap-2"
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "11px",
              letterSpacing: "0.16em",
            }}
          >
            <RefreshCw className="h-3.5 w-3.5" />
            Rebuilt once, then owned
          </div>
          <div className="flex flex-wrap gap-1.5">
            {rebuilt.map((r) => (
              <span
                key={r}
                className="inline-flex items-center rounded-full border border-white/[0.12] bg-white/[0.04] px-2.5 py-1 text-white/75 font-head text-[10.5px]"
              >
                {r}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3.5 py-2 border-t border-white/[0.07] flex items-center justify-between">
        <span
          className="font-head uppercase text-white/40"
          style={{ fontSize: "9px", letterSpacing: "0.16em" }}
        >
          Same core &middot;{" "}
          <span className="text-white/65">no license</span>
        </span>
        <span className="text-white/30 text-[10px]">zero downtime</span>
      </div>
    </div>
  );
}

/* ── Section ───────────────────────────────────────────────────── */

export function TheGap() {
  return (
    <section
      id="why-it-matters"
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
                  you&apos;re renting a platform you could own
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-9 text-[var(--sw-black)]/80 text-[16px] md:text-[18px] leading-relaxed">
                Adobe Commerce is Magento Open Source plus a layer of licensed
                enterprise modules. The platform, admin, data model, and
                developer experience are identical, so your catalog, checkout,
                custom code, and integrations all carry across untouched.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <div
                className="mt-9 md:mt-10 pl-5 md:pl-6 border-l-2"
                style={{ borderColor: "var(--sw-blue)" }}
              >
                <p className="font-head font-semibold text-[19px] md:text-[24px] lg:text-[28px] leading-[1.25] tracking-[-0.005em]">
                  <span className="text-[var(--sw-blue)]">
                    Same platform, no license fee.
                  </span>{" "}
                  <span className="text-[var(--sw-black)]">
                    You keep what you built and stop renting it, self-hosted on
                    infrastructure you control, with no vendor lock-in.
                  </span>
                </p>
              </div>
            </Reveal>
          </div>

          {/* RIGHT · parity panel, sticky on lg+ so it stays visible
              while reading the copy column */}
          <div className="lg:sticky lg:top-24">
            <Reveal delay={0.15}>
              <ParityPanel />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
