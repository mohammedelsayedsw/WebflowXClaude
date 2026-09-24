"use client";

/**
 * One document, three ways it can go.
 *
 * The cards and the screen are one control: the screen always shows the case
 * the active card describes, so the claim that the software stops for a person
 * is demonstrated rather than asserted. It cycles on its own so a visitor who
 * scrolls past sees all three, and stops the moment anyone clicks, because
 * from then on they are driving.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { Caret, DotRow, ScreenShell } from "./ScreenShell";

const CARDS: { title: string; body: string }[] = [
  {
    title: "When everything is clear",
    body: "The screen fills itself in and waits for a person to approve",
  },
  {
    title: "When a detail is hard to read",
    body: "The software marks it, and a person decides what to enter",
  },
  {
    title: "When the AS/400 won't accept a detail",
    body: "The software pauses and shows your team the AS/400 message",
  },
];

const CYCLE_MS = 4000;

/** The claim as it stands in each case. Only the service date ever differs. */
function fieldsFor(active: number) {
  return [
    { label: "Claim type", value: "DENTAL", flagged: false },
    { label: "Client number", value: "4471902", flagged: false },
    {
      label: "Service date",
      value: active === 1 ? "??/11/26" : "03/11/26",
      flagged: active === 1,
    },
    { label: "Amount", value: "840.00", flagged: false },
  ];
}

export function LiveDemo() {
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [held, setHeld] = useState(false); // a click stops the cycle for good
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setHeld(true); // card 1, no cycling
      return;
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => setInView(e.isIntersecting)),
      { threshold: 0.3 }
    );
    if (root.current) io.observe(root.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!inView || held) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % CARDS.length),
      CYCLE_MS
    );
    return () => window.clearInterval(id);
  }, [inView, held]);

  const pick = useCallback((i: number) => {
    setHeld(true);
    setActive(i);
  }, []);

  const fields = fieldsFor(active);

  return (
    <section
      id="the-live-demo"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
            <span className="text-[var(--sw-black)]/55">4</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>The live demo</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[22ch]">
            Watch one document{" "}
            <span className="text-[var(--sw-blue)]">go all the way through</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[66ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            In the webinar we follow one document from the moment it arrives
            until its details are saved in the AS/400. The screen below shows
            the example we&apos;ll use.
          </p>
        </Reveal>

        <div
          ref={root}
          className="mt-10 md:mt-14 grid gap-8 lg:gap-12 lg:grid-cols-[1fr_1fr] lg:items-center"
        >
          <Reveal delay={0.14}>
            <ScreenShell screenId="CL2200" title="Claim entry">
              <div className="mt-3 md:mt-4 flex flex-col">
                {fields.map((f) => (
                  <DotRow key={f.label} label={f.label}>
                    <span className={f.flagged ? "text-[#ffb057]" : undefined}>
                      {f.value}
                    </span>
                  </DotRow>
                ))}
              </div>

              {/* One row, whatever the case, so the screen does not change
                  height as the cards cycle. */}
              <div className="mt-4 md:mt-5 min-h-[1.75em]">
                {active === 0 ? (
                  <div className="flex items-center gap-2">
                    <span className="text-[#7dffb0]">Waiting for your approval</span>
                    <Caret />
                  </div>
                ) : null}
                {active === 1 ? (
                  <span className="text-[#ffb057]">Check this field</span>
                ) : null}
                {active === 2 ? (
                  <span className="text-[#ffb057]">
                    AMOUNT NOT ACCEPTED, ENTRY HELD
                  </span>
                ) : null}
              </div>
            </ScreenShell>
          </Reveal>

          <div className="grid gap-3 md:gap-4">
            {CARDS.map((c, i) => {
              const on = i === active;
              return (
                <Reveal key={c.title} delay={0.2 + i * 0.07}>
                  <button
                    type="button"
                    onClick={() => pick(i)}
                    aria-pressed={on}
                    className={
                      "w-full text-left rounded-[4px] border bg-white p-5 md:p-6 transition-colors " +
                      (on
                        ? "border-[var(--sw-blue)] ring-1 ring-[var(--sw-blue)]/30"
                        : "border-[var(--sw-black)]/10 hover:border-[var(--sw-black)]/25")
                    }
                  >
                    <div className="font-head font-bold text-[var(--sw-black)] text-[16px] md:text-[18px] leading-tight">
                      {c.title}
                    </div>
                    <p className="mt-2 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
                      {c.body}
                    </p>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
