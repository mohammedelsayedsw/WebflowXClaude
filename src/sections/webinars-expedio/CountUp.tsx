"use client";

import { useEffect, useRef, useState } from "react";

/**
 * A number that counts up from zero once, after it has scrolled well into
 * view (above the bottom fifth of the screen) and its card has faded in, so the
 * reader sees the count run. Under prefers-reduced-motion it shows the final
 * value straight away.
 */
export function CountUp({
  to,
  decimals = 0,
  duration = 1600,
  delay = 0,
}: {
  to: number;
  decimals?: number;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current!;
    setValue(0);
    let raf = 0;
    let timer = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        timer = window.setTimeout(() => {
          const t0 = performance.now();
          const tick = (now: number) => {
            const k = Math.min(1, (now - t0) / duration);
            setValue(to * (1 - Math.pow(1 - k, 3)));
            if (k < 1) raf = requestAnimationFrame(tick);
          };
          raf = requestAnimationFrame(tick);
        }, 500 + delay);
      },
      { threshold: 0.5, rootMargin: "0px 0px -20% 0px" },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [to, duration, delay]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toFixed(decimals)}
    </span>
  );
}
