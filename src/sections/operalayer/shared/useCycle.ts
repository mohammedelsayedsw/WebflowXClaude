"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";

/**
 * Auto-advancing index for switchers and looping mocks. Advances only while
 * the element is on screen, stops for good once the visitor picks an item,
 * and stays put under prefers-reduced-motion.
 */
export function useCycle(count: number, ms: number) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.35 });
  const [index, setIndex] = useState(0);
  const [held, setHeld] = useState(false);

  useEffect(() => {
    if (!inView || held) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = window.setInterval(() => setIndex((i) => (i + 1) % count), ms);
    return () => window.clearInterval(t);
  }, [inView, held, count, ms]);

  const pick = (i: number) => {
    setHeld(true);
    setIndex(i);
  };

  return { ref, index, pick, inView, setIndex };
}
