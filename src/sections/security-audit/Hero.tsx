"use client";

import { ArrowRight, Check } from "lucide-react";
import { assetUrl } from "@/lib/assets";
import { StatsBar } from "@/sections/security-audit/StatsBar";

const A = "/magento/security-audit";

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

function CheckCard() {
  const bullets = [
    "What an attacker could reach today",
    "What customer data is exposed",
    "Exactly what to fix, ranked by risk",
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
        <span className="inline-block rounded-[2px] bg-[var(--sw-mint)] px-3 py-1 font-head text-[11px] font-bold uppercase tracking-[0.12em] text-[var(--sw-black)]">
          Free, no access needed
        </span>
        <h2 className="mt-4 md:mt-5 font-head text-white text-[24px] md:text-[36px] leading-[1.08]">
          Free security <span style={{ color: "var(--sw-mint)" }}>check</span>
        </h2>
        <p className="mt-3 md:mt-4 text-[14px] md:text-[15px] text-white/75 leading-relaxed">
          Send your domain. We surface the highest-risk exposures on your store,
          from the outside, in 48 hours.
        </p>
        <ul className="mt-5 md:mt-6 space-y-3">
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
          <span className="font-head text-[15px]">Get my free security check</span>
          <ArrowRight className="h-4 w-4" />
        </a>
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
          <img
            src={assetUrl(`${A}/team/aigars.png`)}
            alt="Aigars Pavlovics"
            className="h-12 w-12 rounded-full object-cover shrink-0"
            style={{ border: "1px solid rgba(230,231,239,0.2)" }}
          />
          <div>
            <div className="text-white text-[14px] font-medium">
              Aigars Pavlovics
            </div>
            <div className="label-code text-white/55 mt-0.5">
              Confidential, no live changes
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

      <div className="flex-1 flex items-start lg:items-center">
        <div className="wrap relative z-10 pt-20 md:pt-28 pb-12 md:pb-16 w-full">
          <div className="grid gap-6 md:gap-12 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <div className="inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 mb-5 md:mb-9">
                <span className="font-head text-[11px] md:text-[12px] font-semibold tracking-[0.14em] text-white uppercase">
                  eCommerce security audit
                </span>
              </div>

              <h1 className="font-head text-white text-[28px] sm:text-[40px] md:text-[50px] lg:text-[56px] leading-[1.05] tracking-[-0.015em] max-w-[18ch]">
                One flaw. Log in as any customer.{" "}
                <span style={{ color: "var(--sw-mint)" }}>
                  31,000 records exposed.
                </span>
              </h1>

              <p className="hidden sm:block mt-5 md:mt-7 text-[16px] md:text-[18px] text-white/85 max-w-[56ch] leading-relaxed">
                That is not a worst case. It is a single missed patch on a live
                Magento store. We find the exposures an attacker would use
                first, then hand you exactly what to fix, before it becomes a
                breach and a fine.
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
              <CheckCard />
            </div>
          </div>
        </div>
      </div>

      <StatsBar />
    </section>
  );
}
