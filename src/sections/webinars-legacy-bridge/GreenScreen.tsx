"use client";

/**
 * The AS/400 screen, the visual the whole page rests on.
 *
 * Anyone who works on an IBM i has to recognise this at a glance, so it copies
 * the things that make the screen what it is rather than suggesting them. The
 * frame, the title row, the dot leaders and the F-key legend come from
 * ScreenShell, which the race screens in the problem section share.
 *
 * Values arrive one at a time, because the point being made is that the screen
 * fills itself in. When the last one lands the cursor rests on the approve
 * line. Under prefers-reduced-motion every value is present from the first
 * paint and nothing moves, which is the same information without the movement.
 */

import { useEffect, useRef, useState } from "react";
import { Caret, DotRow, ScreenShell } from "./ScreenShell";

export type ScreenField = {
  label: string;
  value: string;
  /** Marks the row as the one needing a person, drawn in amber with a note. */
  flag?: string;
};

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
    <div ref={root}>
      <ScreenShell screenId={screenId} title={title} className={className}>
        {/* The whole screen is one live region: a screen reader hears the
            finished entry once, not a value at a time as they arrive. */}
        <div className="mt-3 md:mt-4 flex flex-col" aria-live="polite">
          {fields.map((f, i) => {
            const visible = i < shown;
            return (
              <DotRow key={f.label} label={f.label}>
                <span
                  className={
                    "transition-opacity duration-200 " +
                    (visible ? "opacity-100" : "opacity-0") +
                    (f.flag ? " text-[#ffb057]" : "")
                  }
                >
                  {/* The non-breaking space keeps the row at full height while
                      the field is still empty, so nothing shifts as values
                      land. */}
                  {visible ? f.value : " "}
                </span>
              </DotRow>
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
          <Caret />
        </div>
      </ScreenShell>
    </div>
  );
}
