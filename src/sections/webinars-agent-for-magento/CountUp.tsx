"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

/**
 * Counts from zero to `to` once the number scrolls into view, then stops.
 *
 * Under prefers-reduced-motion the final value is rendered immediately, so the
 * figure is never withheld from a reader who has asked for less movement.
 * `prefix` and `suffix` sit outside the animated number so a currency symbol or
 * a unit does not jitter while the digits change.
 */
export function CountUp({
  to,
  prefix = "",
  suffix = "",
  duration = 1400,
  className,
  style,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out cubic, so the number settles rather than stopping dead
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(to * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration]);

  return (
    <span ref={ref} className={className} style={style}>
      {prefix}
      {value.toLocaleString("en-US")}
      {suffix}
    </span>
  );
}
