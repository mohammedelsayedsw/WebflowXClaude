"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; a: number; glow: boolean; phase: number; speed: number };

/**
 * A faint star field behind a dark section, after withari.ai/expedio/packages:
 * mostly tiny white dots, a few soft mint glows, each slowly twinkling. It only
 * animates while on screen, and paints one still frame under prefers-reduced-motion.
 * Place it first inside a `relative` section; the content after it stacks on top.
 */
export function Stars({ density = 1 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current!;
    const ctx = canvas.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let stars: Star[] = [];
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = false;

    const seed = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const n = Math.round(((w * h) / 9000) * density);
      stars = Array.from({ length: n }, () => {
        const glow = Math.random() < 0.03;
        return {
          x: Math.random() * w,
          y: Math.random() * h,
          r: glow ? 1.4 + Math.random() * 0.8 : 0.4 + Math.random() * 0.7,
          a: glow ? 0.5 + Math.random() * 0.3 : 0.15 + Math.random() * 0.4,
          glow,
          phase: Math.random() * Math.PI * 2,
          speed: 0.0004 + Math.random() * 0.0008,
        };
      });
    };

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      for (const s of stars) {
        const a = reduce ? s.a : s.a * (0.6 + 0.4 * Math.sin(t * s.speed + s.phase));
        if (s.glow) {
          const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
          g.addColorStop(0, `rgba(190,255,190,${a})`);
          g.addColorStop(0.25, `rgba(110,247,110,${a * 0.25})`);
          g.addColorStop(1, "rgba(110,247,110,0)");
          ctx.fillStyle = g;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(255,255,255,${a})`;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    const loop = (t: number) => {
      draw(t);
      if (visible) raf = requestAnimationFrame(loop);
    };

    seed();
    draw(0);

    const ro = new ResizeObserver(() => {
      seed();
      draw(performance.now());
    });
    ro.observe(canvas);

    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting && !reduce;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [density]);

  return <canvas ref={ref} aria-hidden className="pointer-events-none absolute inset-0 h-full w-full" />;
}
