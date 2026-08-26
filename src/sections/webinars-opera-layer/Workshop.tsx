"use client";

import { useEffect } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { Countdown } from "./Countdown";

/** Registration closes at the end of 31 August 2026, UTC. */
const REGISTRATION_CLOSES = "2026-08-31T23:59:59Z";

/**
 * Holds the #workshop anchor in place.
 *
 * The browser jumps to the anchor as soon as the element exists, but this
 * section's own HubSpot form loads afterwards and grows, which shifts the
 * block and leaves the reader looking at half this heading. This re-applies
 * the jump while the page settles, and gives up the moment the reader
 * scrolls, so it never fights them.
 *
 * It matters for the printed QR code, which lands people straight on #workshop.
 */
function useHoldAnchor() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.location.hash !== "#workshop") return;

    const el = document.getElementById("workshop");
    if (!el) return;
    // measure from the heading, not the section box, so the section's own top
    // padding does not push the block half a screen down
    const anchor = el.querySelector("h2") ?? el;

    let released = false;
    const release = () => {
      released = true;
    };

    // the page sets scroll-behavior: smooth, which turns each correction into
    // an animation the next one interrupts, so it never lands. Jump instantly
    // instead, then hand smooth scrolling back.
    const root = document.documentElement;
    const settle = () => {
      if (released) return;
      const previous = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      const top = anchor.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo(0, top);
      root.style.scrollBehavior = previous;
    };

    const opts = { passive: true, once: true } as const;
    window.addEventListener("wheel", release, opts);
    window.addEventListener("touchmove", release, opts);
    window.addEventListener("keydown", release, { once: true });

    settle();

    // The forms above finish loading seconds after the jump and change height,
    // which slides this section down. Follow every one of those reflows rather
    // than guessing at delays, and stop once the page has been quiet a while.
    const observer = new ResizeObserver(() => settle());
    observer.observe(document.body);

    const done = window.setTimeout(() => {
      released = true;
      observer.disconnect();
    }, 12_000);

    return () => {
      observer.disconnect();
      window.clearTimeout(done);
      window.removeEventListener("wheel", release);
      window.removeEventListener("touchmove", release);
      window.removeEventListener("keydown", release);
    };
  }, []);
}

export function Workshop() {
  useHoldAnchor();

  return (
    <section
      id="workshop"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="max-w-[820px] mx-auto text-center flex flex-col items-center">
          <Reveal>
            <h2 className="font-head text-white text-[26px] sm:text-[34px] md:text-[44px] lg:text-[48px] leading-[1.06] tracking-[-0.01em]">
              Get a{" "}
              <span style={{ color: "var(--sw-mint)" }}>free intro workshop</span>
            </h2>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-5 text-white/80 text-[16px] md:text-[18px] leading-relaxed max-w-[52ch] mx-auto">
              We map your systems and come back with a plan.
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-9 md:mt-11">
              <Countdown deadline={REGISTRATION_CLOSES} />
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 font-head text-white text-[16px] md:text-[18px] leading-relaxed max-w-[52ch] mx-auto">
              Register now and pick a date that suits you later.
            </p>
          </Reveal>

          {/* w-full on the Reveal: it is a flex item under items-center, so
              without it the wrapper shrinks to the form's intrinsic width. */}
          <Reveal delay={0.22} className="w-full">
            <div className="mt-10 md:mt-12 w-full max-w-[560px] mx-auto text-left">
              <HubSpotForm
                portalId="25724996"
                formId="43f3cbc8-9872-4390-9d73-4013420863a7"
                region="eu1"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
