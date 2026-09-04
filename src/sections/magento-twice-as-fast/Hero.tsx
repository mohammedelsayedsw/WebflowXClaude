"use client";

import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { Countdown } from "./Countdown";
import { REVEAL_AT, REVEAL_LABEL } from "./reveal";

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
      <div aria-hidden className="absolute inset-0 -z-10 grid-backdrop opacity-40" />
      <div
        aria-hidden
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

/**
 * Scroll down to the sign-up form.
 *
 * The app sets `scroll-behavior: smooth` on <html> while <body> carries the
 * overflow, and in Chrome that combination leaves every smooth scroll doing
 * nothing: a plain `href="#cta"` updates the address bar and the page stays
 * put. It affects the other pages in this app too, so rather than change the
 * global rule from a campaign page, this one animates its own scroll and asks
 * for each step instantly.
 */
function scrollToForm(e: React.MouseEvent<HTMLAnchorElement>) {
  const cta = document.getElementById("cta");
  if (!cta) return;

  e.preventDefault();
  const from = window.scrollY;
  const to = from + cta.getBoundingClientRect().top;
  const started = performance.now();

  const step = (now: number) => {
    const t = Math.min(1, (now - started) / 600);
    const eased = 1 - Math.pow(1 - t, 3);
    window.scrollTo({ top: from + (to - from) * eased, behavior: "instant" });
    if (t < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
  window.history.replaceState(null, "", "#cta");
}

export function Hero() {
  return (
    <section
      id="reveal"
      className="relative -mt-[60px] md:-mt-[75px] overflow-hidden min-h-screen flex flex-col"
    >
      <HeroBg />

      <div className="flex-1 flex items-center">
        <div className="wrap relative z-10 pt-32 md:pt-44 pb-20 md:pb-28 w-full">
          <Reveal>
            <div className="label-code text-white/55">
              Magento · {REVEAL_LABEL}, 2026
            </div>
          </Reveal>

          <Reveal delay={0.07}>
            <h1 className="mt-7 md:mt-9 font-head text-white text-[44px] sm:text-[56px] md:text-[72px] lg:text-[88px] leading-[1.02] tracking-[-0.015em] max-w-[16ch]">
              We made Magento{" "}
              <span style={{ color: "var(--sw-mint)" }}>&times;2 faster.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.14}>
            <p className="mt-6 md:mt-7 font-head text-white/85 text-[24px] sm:text-[28px] md:text-[34px] leading-[1.12]">
              Faster than Shopify.
            </p>
          </Reveal>

          <Reveal delay={0.21}>
            <ul className="mt-12 md:mt-14 max-w-[30ch]">
              {["No new platform.", "No replatforming.", "Your Magento."].map(
                (line, i) => (
                  <li
                    key={line}
                    className="border-l border-white/15 pl-5 py-2.5 font-head text-[20px] md:text-[26px] leading-[1.2]"
                    style={{ color: i === 2 ? "#ffffff" : "rgba(255,255,255,0.6)" }}
                  >
                    {line}
                  </li>
                )
              )}
            </ul>
          </Reveal>

          <Reveal delay={0.28}>
            <p className="mt-12 md:mt-14 text-white/80 text-[16px] md:text-[18px]">
              See it yourself on {REVEAL_LABEL}.
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-7 md:mt-9">
              <Countdown deadline={REVEAL_AT} />
            </div>
          </Reveal>

          <Reveal delay={0.42}>
            <div className="mt-12 md:mt-14">
              <a href="#cta" onClick={scrollToForm} className={btnPrimary}>
                Stay updated
                <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
