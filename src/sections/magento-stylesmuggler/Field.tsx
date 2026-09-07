"use client";

import { useEffect, useRef } from "react";

/**
 * A sparse field of small green points behind the hero, fixed behind
 * everything. Each one shimmers very lightly on its own slow clock; nothing
 * moves. The field fades out as the hero scrolls away, draws only while the
 * tab is visible, and reduced-motion users get one still frame.
 */

type Dot = {
  x: number;
  y: number;
  r: number;
  alpha: number;
  phase: number;
  rate: number;
};

function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function Field() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const rand = mulberry32(11);
    const dots: Dot[] = Array.from({ length: coarse ? 120 : 260 }, () => ({
      x: rand(),
      y: rand(),
      r: 0.6 + Math.pow(rand(), 2) * 0.9,
      alpha: 0.14 + rand() * 0.3,
      phase: rand() * Math.PI * 2,
      rate: 0.25 + rand() * 0.55,
    }));

    let w = 0;
    let h = 0;
    const resize = () => {
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    let raf = 0;
    let running = !document.hidden;
    const t0 = performance.now();

    const draw = (now: number) => {
      const t = (now - t0) / 1000;
      const intro = reduce ? 1 : Math.min(1, t / 1.8);
      const fade = Math.max(0, 1 - window.scrollY / (h * 0.9));

      ctx.clearRect(0, 0, w, h);
      if (fade > 0.01) {
        ctx.fillStyle = "#6ef76e";
        for (const d of dots) {
          const shimmer = reduce ? 1 : 0.8 + 0.2 * Math.sin(t * d.rate + d.phase);
          ctx.globalAlpha = d.alpha * shimmer * intro * fade;
          ctx.beginPath();
          ctx.arc(d.x * w, d.y * h, d.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;
      if (!reduce && running) raf = window.requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running && !reduce) {
        window.cancelAnimationFrame(raf);
        raf = window.requestAnimationFrame(draw);
      }
    };

    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);
    raf = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
