"use client";

/**
 * The four steps, revealed in order with the line drawing between them.
 *
 * The sequence is the argument: the document arrives, it is read, the screen
 * is filled, and only then does a person press Enter. Showing all four at once
 * would flatten that into a list, so each one waits for the line to reach it.
 *
 * Under prefers-reduced-motion every step, icon and line segment is painted at
 * once and nothing moves.
 */

import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/primitives/Reveal";
import { STEP_ICONS } from "./StepIcons";

const STEPS: { title: string; body: string }[] = [
  {
    title: "A PDF arrives",
    body: "An order or invoice lands in your team's inbox as a PDF attachment",
  },
  {
    title: "The software reads the PDF",
    body: "It finds the details and checks them against rules your team sets",
  },
  {
    title: "The details are typed in",
    body: "The software types them into the AS/400 and stops before saving",
  },
  {
    title: "Your team approves",
    body: "A person checks the details and presses Enter to save them",
  },
];

/** Step i lands here; the segment into it starts a beat earlier. */
const STEP_AT = (i: number) => i * 700;
const LINE_AT = (i: number) => i * 700 + 250;

export function HowItWorks() {
  const [shown, setShown] = useState(0);
  const [lines, setLines] = useState(0);
  const root = useRef<HTMLOListElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(STEPS.length);
      setLines(STEPS.length - 1);
      return;
    }

    const timers: number[] = [];
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      STEPS.forEach((_, i) => {
        timers.push(window.setTimeout(() => setShown(i + 1), STEP_AT(i)));
        if (i < STEPS.length - 1) {
          timers.push(window.setTimeout(() => setLines(i + 1), LINE_AT(i)));
        }
      });
    };

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.25 }
    );
    if (root.current) io.observe(root.current);

    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, []);

  return (
    <section
      id="how-it-works"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-white">
            <span className="text-white/55">3</span>
            <span className="h-px w-6 bg-white/20" />
            <span>How it works</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[20ch]">
            From the inbox to the{" "}
            <span style={{ color: "var(--sw-mint)" }}>AS/400 screen</span>
          </h2>
        </Reveal>

        <ol
          ref={root}
          className="mt-12 md:mt-16 grid gap-10 md:gap-6 md:grid-cols-4"
        >
          {STEPS.map((s, i) => {
            const on = i < shown;
            const drawn = i < lines;
            const Icon = STEP_ICONS[i];
            return (
              <li
                key={s.title}
                className="relative md:pr-5"
                style={{
                  opacity: on ? 1 : 0,
                  transform: on ? "translateY(0)" : "translateY(10px)",
                  transition: "opacity .45s ease-out, transform .45s ease-out",
                }}
              >
                {/* The segment reaching the next step. Horizontal once the row
                    is side by side, vertical while the steps are stacked, and
                    absent after the last one. */}
                {i < STEPS.length - 1 ? (
                  <>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute hidden md:block left-[44px] -right-6 top-[17px] h-px overflow-hidden"
                    >
                      <span
                        className="block h-full w-full origin-left bg-white/25 transition-transform duration-500 ease-out"
                        style={{ transform: drawn ? "scaleX(1)" : "scaleX(0)" }}
                      />
                    </span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute md:hidden left-[17px] top-[40px] -bottom-10 w-px overflow-hidden"
                    >
                      <span
                        className="block h-full w-full origin-top bg-white/25 transition-transform duration-500 ease-out"
                        style={{ transform: drawn ? "scaleY(1)" : "scaleY(0)" }}
                      />
                    </span>
                  </>
                ) : null}

                <span
                  className="relative z-10 inline-flex h-9 w-9 items-center justify-center rounded-[4px] border font-head font-bold text-[15px] transition-colors duration-500"
                  style={
                    on
                      ? {
                          background: "var(--sw-mint)",
                          borderColor: "var(--sw-mint)",
                          color: "#0d1130",
                        }
                      : {
                          background: "#0d1130",
                          borderColor: "rgba(255,255,255,0.15)",
                          color: "rgba(255,255,255,0.35)",
                        }
                  }
                >
                  {i + 1}
                </span>

                <div className="mt-5">
                  <Icon on={on} />
                </div>

                <div className="mt-3 font-head font-bold text-white text-[17px] md:text-[18px] leading-tight text-balance">
                  {s.title}
                </div>
                <p className="mt-2.5 max-w-[34ch] text-white/65 text-[14px] md:text-[15px] leading-relaxed text-balance">
                  {s.body}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
