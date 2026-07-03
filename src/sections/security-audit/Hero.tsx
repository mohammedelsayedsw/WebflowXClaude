"use client";

import { ArrowRight, Lock } from "lucide-react";
import { StatsBar } from "@/sections/security-audit/StatsBar";
import { SevBadge, sevColor, type Sev } from "@/sections/security-audit/severity";

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

const counts: { level: Sev; n: number }[] = [
  { level: "critical", n: 1 },
  { level: "high", n: 3 },
  { level: "medium", n: 6 },
  { level: "low", n: 4 },
];

const findings: { level: Sev; title: string }[] = [
  { level: "critical", title: "Customer account takeover via store API" },
  { level: "high", title: "Admin panel reachable from the public internet" },
  { level: "high", title: "Magento core behind on security patches" },
  { level: "medium", title: "Checkout scripts load without integrity checks" },
];

function ScanPanel() {
  return (
    <div
      className="relative block overflow-hidden rounded-[6px] backdrop-blur"
      style={{
        background:
          "linear-gradient(160deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.04) 100%), rgba(10,13,32,0.72)",
        boxShadow:
          "inset 0 1px 0 rgba(255,255,255,0.16), inset 0 -1px 0 rgba(255,255,255,0.06), 0 0 0 1px rgba(255,255,255,0.12)",
      }}
    >
      {/* window bar */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
        <div className="flex items-center gap-2 rounded-[4px] bg-white/[0.06] px-3 py-1.5 flex-1 min-w-0">
          <Lock className="h-3.5 w-3.5 text-[var(--sw-mint)] shrink-0" />
          <span className="font-head text-[13px] text-white/80 truncate">
            yourstore.com
          </span>
          <span className="label-code text-white/40 ml-auto shrink-0">
            security scan
          </span>
        </div>
        <span className="label-code text-white/40 shrink-0">example</span>
      </div>

      <div className="p-5 md:p-6">
        {/* summary */}
        <div className="flex items-end justify-between gap-4">
          <div>
            <div className="font-head text-white text-[44px] md:text-[52px] leading-none">
              14
            </div>
            <div className="label-code text-white/55 mt-2">exposures found</div>
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5">
            {counts.map((c) => (
              <div key={c.level} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-2 w-2 rounded-full"
                  style={{ background: sevColor[c.level] }}
                />
                <span className="font-head text-white text-[14px] tabular-nums">
                  {c.n}
                </span>
                <span className="label-code text-white/45">{c.level}</span>
              </div>
            ))}
          </div>
        </div>

        {/* findings */}
        <div className="mt-6 space-y-2.5">
          {findings.map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-3 rounded-[4px] border border-white/8 bg-white/[0.03] px-3.5 py-3"
            >
              <SevBadge level={f.level} />
              <span className="text-[13px] md:text-[14px] text-white/85 leading-snug">
                {f.title}
              </span>
            </div>
          ))}
          <div className="pl-1 label-code text-white/40">
            + 10 more, ranked by risk
          </div>
        </div>

        <a
          href="#cta"
          className="mt-6 flex items-center justify-center gap-2 rounded-[2px] border border-[var(--sw-mint)] px-5 py-3 text-white hover:bg-[var(--sw-mint)]/10 transition"
        >
          <span className="font-head text-[15px]">Scan my store</span>
          <ArrowRight className="h-4 w-4" />
        </a>
        <p className="label-code text-white/45 mt-4 text-center">
          Free · 48 hours · no admin access
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[100svh] flex flex-col">
      <HeroBg />

      <div className="flex-1 flex items-start lg:items-center">
        <div className="wrap relative z-10 pt-20 md:pt-28 pb-12 md:pb-16 w-full">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-[1.05fr_0.95fr] items-center">
            <div>
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-5 md:mb-9">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  eCommerce security audit
                </span>
              </div>

              <h1 className="font-head text-white text-[28px] sm:text-[40px] md:text-[50px] lg:text-[56px] leading-[1.05] tracking-[-0.015em] max-w-[18ch]">
                Find your store&apos;s exposures{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  before an attacker does.
                </span>
              </h1>

              <p className="hidden sm:block mt-5 md:mt-7 text-[16px] md:text-[18px] text-white/85 max-w-[56ch] leading-relaxed">
                Every eCommerce store carries risk it cannot see: account
                takeover, exposed customer data, unpatched flaws. We test yours
                the way a real attacker would, then hand you exactly what to fix,
                before it becomes a breach and a fine.
              </p>

              <div className="mt-9 md:mt-10 hidden lg:flex flex-wrap items-center gap-5">
                <a
                  href="#stakes"
                  className="inline-flex items-center gap-2 rounded-[2px] border border-[var(--sw-mint)] px-6 py-3 text-white hover:bg-[var(--sw-mint)]/10 transition"
                >
                  <span className="font-head text-[15px] md:text-[16px]">
                    See what is at stake
                  </span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 text-white/80 hover:text-white transition text-[14px] md:text-[15px]"
                >
                  Speak with a security lead
                </a>
              </div>
            </div>

            <div className="mt-2 lg:mt-0">
              <ScanPanel />
            </div>
          </div>
        </div>
      </div>

      <StatsBar />
    </section>
  );
}
