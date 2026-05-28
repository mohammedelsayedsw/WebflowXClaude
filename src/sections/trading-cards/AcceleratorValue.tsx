"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";

export function AcceleratorValue() {
  return (
    <section
      id="value"
      className="relative bg-lp-bright py-28 md:py-40 overflow-hidden text-[var(--sw-black)]"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/15" />
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[18ch]">
            Skip the{" "}
            <span className="text-[var(--sw-blue)]">discovery year</span>
          </h2>
          <p className="mt-6 text-[var(--sw-black)]/75 max-w-[58ch] text-[16px] md:text-[17px] leading-relaxed">
            Pack product type, FMV randomization, PSA Vault, buyback, Stripe Radar tuned for high AOV, trust FAQ. Already built. You inherit the proven stack, configured to your catalog and your grading partner.
          </p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          <Reveal>
            <div className="rounded-[4px] border border-[var(--sw-black)]/12 bg-white/60 p-8 md:p-10 h-full">
              <div className="flex items-baseline justify-between mb-8">
                <span className="label-code text-[var(--sw-black)]/55">WITHOUT ACCELERATOR</span>
                <span className="font-head text-[40px] md:text-[52px] leading-none text-[var(--sw-black)]/55 tabular-nums">
                  avg 18 mo
                </span>
              </div>
              <ul className="space-y-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/75 leading-relaxed">
                {[
                  "Agency learns what an FMV engine is on your budget",
                  "Pack product type built from scratch, randomization audit log invented late",
                  "PSA Vault integration negotiated by your team, not theirs",
                  "Buyback loop discovered as a feature request after launch",
                  "Stripe gateway gets frozen on the first $5,000 personal",
                  "Trust content gets written after the first negative Reddit thread",
                ].map((t, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="h-px w-3 bg-[var(--sw-black)]/35 mt-3 shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div
              className="relative rounded-[4px] p-8 md:p-10 h-full overflow-hidden"
              style={{
                background:
                  "linear-gradient(180deg, #171a38 0%, #10132c 100%)",
                border: "1px solid rgba(63,74,175,0.35)",
              }}
            >
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(420px 260px at 110% -10%, rgba(63,74,175,0.25), transparent 60%), radial-gradient(320px 200px at -10% 100%, rgba(110,247,110,0.08), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-baseline justify-between mb-8">
                  <span className="label-code text-[var(--sw-mint)]">WITH ACCELERATOR</span>
                  <span className="font-head text-[40px] md:text-[52px] leading-none text-white tabular-nums">
                    14 wk
                  </span>
                </div>
                <ul className="space-y-4 text-[14px] md:text-[15px] text-white/90 leading-relaxed">
                  {[
                    "Pack product type, FMV engine, audit log in production from day one",
                    "PSA Vault on every purchase, vault status live in customer account",
                    "Buyback loop closes the lifecycle inside your platform",
                    "Stripe Radar tuned for $500 to $5,000 ranges, Diamond and Legend pack protection",
                    "Trust FAQ and AEO content cited by ChatGPT, Perplexity, Gemini on day one",
                    "Whatnot to website customer bridge, your top 50 buyers finally identified",
                  ].map((t, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="h-4 w-4 shrink-0 mt-1 text-[var(--sw-mint)]" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-16 md:mt-20 pt-10 border-t border-[var(--sw-black)]/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <p className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.25] max-w-[44ch]">
              Eight modules in production from day one. Saves you a year of discovery and a six-figure bill.
            </p>
            <a href="#cta" className={btnLight}>
              Start the accelerator
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
