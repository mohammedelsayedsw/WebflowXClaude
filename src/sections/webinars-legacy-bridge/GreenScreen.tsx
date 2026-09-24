"use client";

/**
 * The AS/400 screen, the visual the whole page rests on.
 *
 * Anyone who works on an IBM i has to recognise this at a glance, so it copies
 * the things that make the screen what it is rather than suggesting them: a
 * black field, monospaced green text, a title row with a screen id, labels run
 * out to their input with dot leaders, and the F-key legend along the bottom.
 *
 * Values arrive one at a time, because the point being made is that the screen
 * fills itself in. When the last one lands the cursor rests on the approve
 * line. Under prefers-reduced-motion every value is present from the first
 * paint and nothing moves, which is the same information without the movement.
 */

import { useEffect, useRef, useState } from "react";

export type ScreenField = {
  label: string;
  value: string;
  /** Marks the row as the one needing a person, drawn in amber with a note. */
  flag?: string;
};

const FKEYS = "F3=Exit   F5=Refresh   F12=Cancel";

export function GreenScreen({
  screenId,
  title,
  fields,
  approveLabel = "Waiting for your approval",
  className = "",
}: {
  screenId: string;
  title: string;
  fields: ScreenField[];
  approveLabel?: string;
  className?: string;
}) {
  // Start with everything shown. A visitor who blocks JS, and the server
  // render, then get the finished screen rather than an empty one.
  const [shown, setShown] = useState(fields.length);
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches) return;

    let timers: number[] = [];
    let started = false;

    const run = () => {
      if (started) return;
      started = true;
      setShown(0);
      timers = fields.map((_, i) =>
        window.setTimeout(() => setShown(i + 1), 420 + i * 520)
      );
    };

    // Only run once the screen is actually on screen, or the fill has already
    // finished by the time a visitor scrolls down to the demo section.
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && run()),
      { threshold: 0.35 }
    );
    if (root.current) io.observe(root.current);

    return () => {
      io.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
  }, [fields]);

  const filled = shown >= fields.length;

  return (
    <div
      ref={root}
      className={`rounded-[4px] border border-[var(--sw-mint)]/25 bg-black overflow-hidden ${className}`}
      style={{ boxShadow: "0 0 0 1px rgba(0,0,0,0.6), 0 24px 60px rgba(0,0,0,0.45)" }}
    >
      {/* The whole screen is one live region: a screen reader hears the
          finished entry once, not a value at a time as they arrive. */}
      <div
        className="font-mono text-[#3bf07a] p-4 md:p-5 text-[11px] md:text-[12.5px] leading-[1.75]"
        aria-live="polite"
      >
        <div className="flex justify-between gap-4 text-[#3bf07a]/70">
          <span>{screenId}</span>
          <span className="hidden sm:inline">AS/400</span>
        </div>

        <div className="mt-1 text-center uppercase tracking-[0.12em] text-[#7dffb0]">
          {title}
        </div>

        <div className="mt-3 md:mt-4 flex flex-col">
          {fields.map((f, i) => {
            const visible = i < shown;
            return (
              <div key={f.label} className="flex items-baseline gap-2">
                <span className="shrink-0">{f.label}</span>
                {/* The dot leader takes the slack, so every value starts at the
                    same column however long its label is. */}
                <span
                  aria-hidden
                  className="min-w-0 flex-1 overflow-hidden whitespace-nowrap text-[#3bf07a]/35"
                >
                  {". ".repeat(60)}
                </span>
                <span
                  className={
                    "shrink-0 transition-opacity duration-200 " +
                    (visible ? "opacity-100" : "opacity-0") +
                    (f.flag ? " text-[#ffb057]" : "")
                  }
                >
                  {/* The underscore keeps the row at full height while the
                      field is still empty, so nothing shifts as values land. */}
                  {visible ? f.value : " "}
                </span>
              </div>
            );
          })}
        </div>

        {fields.some((f) => f.flag) ? (
          <div className="mt-3 text-[#ffb057]">
            {fields.find((f) => f.flag)?.flag}
          </div>
        ) : null}

        <div
          className={
            "mt-4 md:mt-5 flex items-center gap-2 transition-opacity duration-300 " +
            (filled ? "opacity-100" : "opacity-0")
          }
        >
          <span className="text-[#7dffb0]">{approveLabel}</span>
          {/* The cursor resting on the approve line. It is the one thing on
              the screen still moving once the entry is ready. */}
          <span
            aria-hidden
            className="inline-block h-[1.05em] w-[0.6em] bg-[#7dffb0] sw-caret"
          />
        </div>

        <div className="mt-3 md:mt-4 border-t border-[#3bf07a]/20 pt-2 text-[#3bf07a]/55 truncate">
          {FKEYS}
        </div>
      </div>
    </div>
  );
}
