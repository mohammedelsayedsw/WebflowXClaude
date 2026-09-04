"use client";

import { useEffect, useState } from "react";

/**
 * Time left until the reveal, counted down in the reader's own clock.
 *
 * Same hydration approach as the opera-layer countdown: placeholders render on
 * the server and on the first client paint so the markup matches and the block
 * does not jump into place once the real figures arrive. The visual treatment
 * is deliberately different (this one is the centrepiece of the page, not a
 * note beside an offer), which is why it lives here rather than being shared.
 */
export function Countdown({ deadline }: { deadline: string }) {
  const [left, setLeft] = useState<number | null>(null);

  useEffect(() => {
    const end = new Date(deadline).getTime();
    const tick = () => setLeft(Math.max(0, end - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [deadline]);

  if (left === 0) {
    return (
      <div className="font-head text-[26px] md:text-[34px] leading-none" style={{ color: "var(--sw-mint)" }}>
        It&apos;s live.
      </div>
    );
  }

  const s = left === null ? null : Math.floor(left / 1000);
  const units: { value: number | null; label: string }[] = [
    { value: s === null ? null : Math.floor(s / 86400), label: "days" },
    { value: s === null ? null : Math.floor((s % 86400) / 3600), label: "hours" },
    { value: s === null ? null : Math.floor((s % 3600) / 60), label: "minutes" },
    { value: s === null ? null : s % 60, label: "seconds" },
  ];

  return (
    /* aria-live stays off: a figure that changes every second would be read out
       continuously, and the date is in the copy above it anyway */
    <div
      role="timer"
      aria-live="off"
      aria-label="Time left until the reveal"
      className="flex items-start gap-3 md:gap-5 tabular-nums"
    >
      {units.map((u, i) => (
        <div key={u.label} className="flex items-start gap-3 md:gap-5">
          {i > 0 && (
            <span
              aria-hidden
              className="font-head text-[34px] md:text-[52px] leading-none text-white/20 select-none"
            >
              :
            </span>
          )}
          <div className="text-center">
            <div
              className="font-head text-[38px] sm:text-[46px] md:text-[64px] lg:text-[76px] leading-none tracking-[-0.02em]"
              style={{ color: "var(--sw-mint)" }}
            >
              {u.value === null ? "--" : String(u.value).padStart(2, "0")}
            </div>
            <div className="label-code mt-3 text-white/45">{u.label}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
