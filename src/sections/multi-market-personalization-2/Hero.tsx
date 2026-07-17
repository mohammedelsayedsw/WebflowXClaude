"use client";

import { ArrowUpRight } from "lucide-react";
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

/** Offer card · free analytics consultation. */
function ConsultCard() {
  const steps = [
    "We map your markets and tools",
    "We show you where spend and orders are leaking",
    "We tell you honestly whether this fits",
  ];
  return (
    <div className="rounded-[4px] border border-white/15 bg-white/[0.04] p-6 backdrop-blur md:p-7">
      <span className="font-head inline-flex rounded-[2px] bg-[var(--sw-mint)] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-[var(--sw-black)]">
        Free, no commitment
      </span>
      <h2 className="font-head mt-5 text-[22px] leading-[1.15] text-white md:text-[26px]">
        Free analytics consultation
      </h2>
      <p className="mt-3 text-[14px] leading-relaxed text-white/70">
        Thirty minutes with our analytics team, on your markets and your numbers.
      </p>
      <ul className="mt-6 flex flex-col gap-3">
        {steps.map((s, i) => (
          <li key={i} className="flex gap-3 text-[14px] leading-snug text-white/85">
            <span className="label-code shrink-0 pt-0.5 text-[var(--sw-mint)]">
              {i + 1}
            </span>
            {s}
          </li>
        ))}
      </ul>
      <div className="mt-7 border-t border-white/10 pt-5">
        <a
          href="#cta"
          className={`${btnPrimary} w-full py-3 text-center leading-snug`}
          style={{ height: "auto", minHeight: "3rem" }}
        >
          Book my consultation
          <ArrowUpRight className="h-4 w-4 shrink-0" />
        </a>
        <div className="label-code mt-3 text-center text-white/45">
          We reply within one business day
        </div>
      </div>
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
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-[1.25fr_1fr]">
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
                recommendation engines, and customer data that never joins up.{" "}
                <span className="font-semibold text-white">
                  This replaces them with one platform that personalizes every
                  market from a single view of the customer.
                </span>
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4 md:mt-8">
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

              <p className="mt-8 max-w-[54ch] border-t border-white/10 pt-6 text-[15px] leading-relaxed text-white/70 md:mt-10">
                The Baltics&apos; leading sportswear retailer used it to grow
                email orders{" "}
                <span className="font-semibold text-[var(--sw-mint)]">20%</span>{" "}
                and paid-media return{" "}
                <span className="font-semibold text-[var(--sw-mint)]">39%</span>,
                while cutting ad spend{" "}
                <span className="font-semibold text-[var(--sw-mint)]">21%</span>.
              </p>
            </div>

            {/* RIGHT · offer card */}
            <div className="lg:pt-8">
              <ConsultCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
