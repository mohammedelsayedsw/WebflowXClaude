"use client";

import { useEffect, useState } from "react";

/**
 * Time left until registration closes, counted down in the reader's own clock.
 *
 * The boxes render with placeholders on the server and on the first client
 * paint, so the markup matches and the block does not jump into place once the
 * real figures arrive. It returns null only after the deadline has passed.
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

  if (left === 0) return null;

  const s = left === null ? null : Math.floor(left / 1000);
  const units: { value: number | null; label: string }[] = [
    { value: s === null ? null : Math.floor(s / 86400), label: "days" },
    { value: s === null ? null : Math.floor((s % 86400) / 3600), label: "hours" },
    { value: s === null ? null : Math.floor((s % 3600) / 60), label: "minutes" },
    { value: s === null ? null : s % 60, label: "seconds" },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="label-code text-white/55">Registration closes in</div>

      {/* aria-live stays off: a figure that changes every second would be read
          out continuously, and the deadline is in the copy underneath anyway */}
      <div
        role="timer"
        aria-live="off"
        aria-label="Time left to register"
        className="mt-4 flex items-start gap-2.5 md:gap-3 tabular-nums"
      >
        {units.map((u) => (
          <div
            key={u.label}
            className="min-w-[64px] md:min-w-[76px] rounded-[4px] border border-white/12 bg-white/[0.03] px-3 py-3 md:px-4 md:py-3.5 text-center"
          >
            <div
              className="font-head text-[24px] md:text-[30px] leading-none"
              style={{ color: "var(--sw-mint)" }}
            >
              {u.value === null ? "--" : String(u.value).padStart(2, "0")}
            </div>
            <div className="mt-2 text-white/55 text-[11px] md:text-[12px] leading-none">
              {u.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
