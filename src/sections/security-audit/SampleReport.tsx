"use client";

import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { SevBadge } from "@/sections/security-audit/severity";

export function SampleReport() {
  return (
    <section
      id="report"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden"
    >
      <div className="wrap relative">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[1fr_1.1fr] items-center">
          <Reveal>
            <div className="label-code text-white/55 mb-5">the deliverable</div>
            <h2 className="font-head text-white text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] max-w-[20ch]">
              You get a report you can{" "}
              <span style={{ color: "var(--sw-mint)" }}>act on</span>.
            </h2>
            <p className="mt-7 text-[15px] md:text-[17px] text-white/80 leading-relaxed max-w-[52ch]">
              Not a scanner dump. Each finding is written for both your board and
              your engineers: what an attacker can do, what data is exposed,
              which regulation it triggers, and the exact fix. Here is one
              finding, redacted.
            </p>
            <a
              href="#cta"
              className="mt-9 inline-flex items-center gap-2 rounded-[2px] border border-[var(--sw-mint)] px-6 py-3 text-white hover:bg-[var(--sw-mint)]/10 transition"
            >
              <span className="font-head text-[15px] md:text-[16px]">
                Get the sample report
              </span>
              <ArrowRight className="h-4 w-4" />
            </a>
          </Reveal>

          <Reveal delay={0.15}>
            <div
              className="rounded-[4px] border border-white/12 overflow-hidden"
              style={{
                background:
                  "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 60%), rgba(16,19,44,0.6)",
              }}
            >
              <div className="flex items-center justify-between gap-3 px-6 py-4 border-b border-white/10">
                <span className="label-code text-white/55">
                  Finding 01 of 14
                </span>
                <SevBadge level="critical" />
              </div>
              <div className="p-6 md:p-8">
                <h3 className="font-head text-white text-[20px] md:text-[24px] leading-[1.15]">
                  Authentication bypass, customer account takeover
                </h3>
                <dl className="mt-6 space-y-5">
                  {[
                    {
                      k: "What an attacker can do",
                      v: "Knowing only a customer email, authenticate as that customer through the ▓▓▓▓▓ endpoint, no password required.",
                    },
                    {
                      k: "Data exposed",
                      v: "From one account, all ~31,000 customer records become reachable: emails, addresses, and full order history.",
                    },
                    {
                      k: "Regulation triggered",
                      v: "Reportable personal-data breach under GDPR and CCPA. Notification clock starts at discovery.",
                    },
                    {
                      k: "Fix",
                      v: "Patch ▓▓▓▓▓▓▓▓, enforce server-side authorization on the ▓▓▓▓▓ endpoint, and rotate active sessions.",
                    },
                  ].map((row) => (
                    <div key={row.k}>
                      <dt className="label-code text-[var(--sw-mint)]">
                        {row.k}
                      </dt>
                      <dd className="mt-2 text-[14px] md:text-[15px] text-white/80 leading-relaxed">
                        {row.v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
