"use client";

import { useEffect, useRef } from "react";

/**
 * A sparse field of faint points behind the hero, fixed behind everything.
 *
 * Every few seconds a soft front moves across the field from left to right.
 * Each point it passes flares in the accent colour and settles to a faint
 * tint: the page says "checked" without a word. The field fades out as the
 * hero scrolls away, draws only while the tab is visible, and reduced-motion
 * users get one still frame.
 */

type Dot = {
  x: number;
  y: number;
  size: number;
  base: number;
  lit: number;
  checked: boolean;
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

const PERIOD = 12; // seconds per cycle
const SWEEP = 7; // seconds the front is moving
const BAND = 0.05; // half-width of the front, in viewport widths

export function Field() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const rand = mulberry32(11);
    const dots: Dot[] = Array.from({ length: coarse ? 220 : 520 }, () => ({
      x: rand(),
      y: rand(),
      size: 0.6 + Math.pow(rand(), 2) * 1.5,
      base: 0.1 + rand() * 0.3,
      lit: 0,
      checked: false,
      phase: rand() * Math.PI * 2,
      rate: 0.4 + rand() * 1.2,
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
    let last = performance.now();
    const t0 = last;

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const t = (now - t0) / 1000;
      const intro = reduce ? 1 : Math.min(1, t / 1.8);
      const fade = Math.max(0, 1 - window.scrollY / (h * 0.9));

      const cycle = t % PERIOD;
      const moving = !reduce && cycle < SWEEP;
      const front = moving ? -0.12 + (cycle / SWEEP) * 1.24 : 99;

      ctx.clearRect(0, 0, w, h);
      if (fade > 0.01) {
        if (moving) {
          const fx = front * w;
          const g = ctx.createLinearGradient(fx - w * 0.14, 0, fx + w * 0.03, 0);
          g.addColorStop(0, "rgba(110,247,110,0)");
          g.addColorStop(0.82, `rgba(110,247,110,${(0.045 * fade * intro).toFixed(3)})`);
          g.addColorStop(1, "rgba(110,247,110,0)");
          ctx.fillStyle = g;
          ctx.fillRect(fx - w * 0.14, 0, w * 0.17, h);
        }

        for (const d of dots) {
          if (!reduce) {
            if (moving && Math.abs(d.x - front) < BAND) {
              d.lit = 1;
              d.checked = true;
            } else {
              d.lit = Math.max(0, d.lit - dt / 2.6);
            }
          }
          const tw = 0.75 + 0.25 * Math.sin(t * d.rate + d.phase);
          const px = d.x * w;
          const py = d.y * h;
          const s = d.size * (1 + d.lit * 1.1);

          ctx.globalAlpha = d.base * tw * intro * fade * (1 - d.lit * 0.5);
          ctx.fillStyle = d.checked ? "#9df59d" : "#dfe6ff";
          ctx.beginPath();
          ctx.arc(px, py, s, 0, Math.PI * 2);
          ctx.fill();

          if (d.lit > 0.01) {
            ctx.fillStyle = "#6ef76e";
            ctx.globalAlpha = d.lit * 0.95 * intro * fade;
            ctx.beginPath();
            ctx.arc(px, py, s, 0, Math.PI * 2);
            ctx.fill();
            ctx.globalAlpha = d.lit * 0.22 * intro * fade;
            ctx.beginPath();
            ctx.arc(px, py, s * 3.2, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
      ctx.globalAlpha = 1;
      if (!reduce && running) raf = window.requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      running = !document.hidden;
      if (running && !reduce) {
        last = performance.now();
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
