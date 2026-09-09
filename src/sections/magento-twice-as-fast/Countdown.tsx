"use client";

import { useEffect, useState } from "react";

/**
 * Time left until the reveal, counted down in the reader's own clock.
 *
 * Same hydration approach as the opera-layer countdown: placeholders render on
 * the server and on the first client paint so the markup matches and the block
 * does not jump into place once the real figures arrive.
 *
 * `compact` is a one-line reading for a rail; `medium` is the timer that sits
 * inside the hero fold (four equal columns on phones, a colon-separated row
 * from `sm` up); `large` is a section centrepiece.
 */
type Variant = "compact" | "medium" | "large";

const SIZES: Record<Exclude<Variant, "compact">, { num: string; colon: string; gap: string; label: string; live: string }> = {
  large: {
    num: "text-[48px] sm:text-[68px] md:text-[104px] lg:text-[136px]",
    colon: "text-[40px] sm:text-[56px] md:text-[88px] lg:text-[112px]",
    gap: "gap-2 sm:gap-4 md:gap-7",
    label: "mt-3 md:mt-4",
    live: "text-[40px] md:text-[64px]",
  },
  medium: {
    num: "text-[44px] sm:text-[48px] lg:text-[56px] xl:text-[64px]",
    colon: "text-[32px] sm:text-[40px] lg:text-[48px] xl:text-[56px]",
    gap: "gap-2.5 sm:gap-3 lg:gap-4",
    label: "mt-2",
    live: "text-[32px] md:text-[44px]",
  },
};

export function Countdown({
  deadline,
  variant = "large",
}: {
  deadline: string;
  variant?: Variant;
}) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = new Date(deadline).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [deadline]);

  const s = left === null ? null : Math.floor(left / 1000);
  const units: { value: number | null; label: string; short: string }[] = [
    { value: s === null ? null : Math.floor(s / 86400), label: "days", short: "d" },
    { value: s === null ? null : Math.floor((s % 86400) / 3600), label: "hours", short: "h" },
    { value: s === null ? null : Math.floor((s % 3600) / 60), label: "minutes", short: "m" },
    { value: s === null ? null : s % 60, label: "seconds", short: "s" },
  ];
  const show = (v: number | null) => (v === null ? "--" : String(v).padStart(2, "0"));

  /* aria-live stays off: a figure that changes every second would be read out
     continuously, and the date is in the copy beside it anyway */
  if (variant === "compact") {
    return (
      <div
        role="timer"
        aria-live="off"
        aria-label="Time left until the reveal"
        className="label-code text-white/60 tabular-nums flex items-center gap-2.5"
      >
        <span
          className="h-1.5 w-1.5 rounded-full animate-pulse"
          style={{ background: "var(--sw-mint)" }}
        />
        {left === 0
          ? "Live now"
          : units.map((u) => `${show(u.value)}${u.short}`).join("  ")}
      </div>
    );
  }

  const size = SIZES[variant];
  const medium = variant === "medium";

  if (left === 0) {
    return (
      <div
        className={`font-head leading-none ${size.live}`}
        style={{ color: "var(--sw-mint)" }}
      >
        It&apos;s live.
      </div>
    );
  }

  return (
    <div
      role="timer"
      aria-live="off"
      aria-label="Time left until the reveal"
      className={
        medium
          ? `grid grid-cols-4 sm:flex sm:items-start tabular-nums ${size.gap}`
          : `flex items-start tabular-nums ${size.gap}`
      }
    >
      {units.map((u, i) => (
        <div key={u.label} className={`flex items-start ${size.gap}`}>
          {i > 0 && (
            <span
              aria-hidden
              className={`font-head leading-none text-white/15 select-none ${size.colon} ${medium ? "hidden sm:block" : ""}`}
            >
              :
            </span>
          )}
          <div className={medium ? "text-left sm:text-center" : "text-center"}>
            <div
              className={`font-head leading-none tracking-[-0.03em] text-white ${size.num}`}
              style={{ textShadow: "0 0 40px rgba(143,182,255,0.35)" }}
            >
              {show(u.value)}
            </div>
            <div className={`label-code text-white/40 ${size.label}`}>{u.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
