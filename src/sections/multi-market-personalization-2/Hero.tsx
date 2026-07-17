"use client";

import { ArrowUpRight } from "lucide-react";
import { Stat } from "@/components/primitives/Stat";
import { btnPrimary, btnGhost } from "@/components/primitives/buttonStyles";

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

/** Sportland proof, three numbers. The detail lives in the case study section. */
function ProofStats() {
  const stats = [
    { value: "+20%", label: "email orders" },
    { value: "+39%", label: "paid-media return" },
    { value: "21% less", label: "ad spend" },
  ];
  return (
    <div className="flex flex-col gap-8 border-t border-white/15 pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
      {stats.map((s) => (
        <Stat
          key={s.label}
          value={s.value}
          label={s.label}
          accent="var(--sw-mint)"
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col overflow-hidden"
    >
      <HeroBg />

      <div className="flex flex-1 items-center">
        <div className="wrap relative z-10 w-full pt-24 pb-16 md:pt-28 md:pb-20">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.4fr_1fr]">
            {/* LEFT · copy */}
            <div>
              <div className="mb-5 inline-flex items-center rounded-[2px] border border-white/70 px-3 py-1.5 md:mb-7">
                <span className="font-head text-[11px] font-semibold uppercase tracking-[0.14em] text-white md:text-[12px]">
                  scandiweb solution · retail
                </span>
              </div>

              <h1 className="font-head max-w-[15ch] text-[40px] leading-[1.03] tracking-[-0.015em] text-white sm:text-[52px] md:text-[60px] lg:text-[72px]">
                Multi-Market{" "}
                <span className="text-[var(--sw-mint)]">Personalization</span>{" "}
                Engine
              </h1>

              <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-white/85 md:mt-6 md:text-[18px]">
                Selling across markets means separate email tools, separate
                recommendation engines, and customer data that never joins up.
                This replaces them with one platform that personalizes every
                market from a single view of the customer.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 md:mt-10">
                {/* height via inline style: the label wraps to 2 lines under
                    ~390px, and btnPrimary's fixed h-12 would clip it. */}
                <a
                  href="#cta"
                  className={`${btnPrimary} w-full py-3 text-center leading-snug sm:w-auto`}
                  style={{ height: "auto", minHeight: "3rem" }}
                >
                  Book a free analytics consultation
                  <ArrowUpRight className="h-4 w-4 shrink-0" />
                </a>
                <a href="#proof" className={btnGhost}>
                  See the Sportland results
                </a>
              </div>
            </div>

            {/* RIGHT · proof numbers */}
            <ProofStats />
          </div>
        </div>
      </div>
    </section>
  );
}
