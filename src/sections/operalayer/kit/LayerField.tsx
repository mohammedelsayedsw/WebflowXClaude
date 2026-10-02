"use client";

import { useEffect, useRef } from "react";

/**
 * OperaLayer's hero light: the product drawn as what it does.
 *
 * Below a glowing horizontal plane (the layer), streams of blue light rise
 * from the systems underneath. Where a stream meets the plane it flares, and a
 * few continue upward in mint: the work that came through clean. A faint
 * perspective grid sits under the plane. A quarter-size blurred copy of each
 * frame is laid back over it for the glow.
 *
 * Fades out as the hero scrolls away (or stays lit when contained), pauses when
 * off screen, and draws one still frame under reduced motion.
 */
type P = { x: number; y: number; v: number; len: number; w: number; a: number; up: boolean; hue: number };

const rnd = (a: number, b: number) => a + Math.random() * (b - a);

export function LayerField({ contained = false, plane = 0.7, density = 1 }: { contained?: boolean; plane?: number; density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const bl = document.createElement("canvas");
    const bctx = bl.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, D = 1, raf = 0, last = 0, on = true;
    let ps: P[] = [];
    const t0 = performance.now();

    const spawn = (below = true): P => {
      const up = !below;
      return {
        x: W * (0.5 + (Math.random() - 0.5) * (up ? 0.7 : 1.05)),
        y: below ? H * rnd(1.0, 1.35) : H * plane,
        v: H * (up ? rnd(0.08, 0.2) : rnd(0.12, 0.34)),
        len: H * (up ? rnd(0.05, 0.16) : rnd(0.08, 0.26)),
        w: rnd(0.6, 2.2),
        a: rnd(0.25, 0.85),
        up,
        hue: Math.random(),
      };
    };

    const resize = () => {
      D = Math.min(window.devicePixelRatio || 1, 2);
      const box = contained ? c.parentElement!.getBoundingClientRect() : null;
      W = box ? box.width : window.innerWidth;
      H = box ? box.height : Math.max(window.innerHeight, 640);
      c.width = Math.round(W * D);
      c.height = Math.round(H * D);
      c.style.width = `${W}px`;
      c.style.height = `${H}px`;
      bl.width = Math.ceil(W / 4);
      bl.height = Math.ceil(H / 4);
      const n = Math.round(260 * density * (W < 768 ? 0.45 : 1));
      ps = Array.from({ length: n }, () => {
        const p = spawn(true);
        p.y = rnd(H * plane, H * 1.3);
        return p;
      });
    };

    const frame = (now: number) => {
      const t = reduce ? 4 : (now - t0) / 1000;
      const dt = reduce ? 0 : Math.min(0.05, t - last);
      last = t;
      const r = c.getBoundingClientRect();
      const fade = contained ? 1 : Math.max(0, Math.min(1, 1 - -r.top / (H * 0.85)));
      const Y = H * plane;

      ctx.setTransform(D, 0, 0, D, 0, 0);
      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, W, H);
      const sky = ctx.createRadialGradient(W / 2, Y, 0, W / 2, Y, Math.max(W, H) * 0.9);
      sky.addColorStop(0, "rgba(24,32,92,1)");
      sky.addColorStop(0.45, "rgba(10,14,40,1)");
      sky.addColorStop(1, "rgba(5,7,15,1)");
      ctx.fillStyle = sky;
      ctx.fillRect(0, 0, W, H);
      ctx.globalAlpha = fade;

      // perspective grid under the plane
      ctx.strokeStyle = "rgba(120,140,255,0.07)";
      ctx.lineWidth = 1;
      const vx = W / 2;
      for (let i = -14; i <= 14; i++) {
        ctx.beginPath();
        ctx.moveTo(vx + i * W * 0.012, Y);
        ctx.lineTo(vx + i * W * 0.11, H);
        ctx.stroke();
      }
      for (let k = 1; k < 9; k++) {
        const yy = Y + (H - Y) * Math.pow(k / 9, 1.7);
        ctx.beginPath();
        ctx.moveTo(0, yy);
        ctx.lineTo(W, yy);
        ctx.stroke();
      }

      ctx.globalCompositeOperation = "lighter";
      for (const p of ps) {
        p.y -= p.v * dt;
        if (!p.up && p.y < Y) {
          // reaches the layer: most stop here, some continue as clean work
          if (Math.random() < 0.28) {
            Object.assign(p, spawn(false), { x: p.x });
          } else {
            Object.assign(p, spawn(true));
          }
        } else if (p.up && p.y + p.len < 0) {
          Object.assign(p, spawn(true));
        }
        const head = p.y;
        const tail = p.up ? p.y + p.len : Math.min(p.y + p.len, H + p.len);
        const g = ctx.createLinearGradient(0, head, 0, tail);
        if (p.up) {
          g.addColorStop(0, `rgba(230,255,230,${p.a})`);
          g.addColorStop(0.3, `rgba(110,247,110,${p.a * 0.8})`);
          g.addColorStop(1, "rgba(110,247,110,0)");
        } else {
          const near = Math.max(0, 1 - (p.y - Y) / (H * 0.25));
          const b = p.hue < 0.5 ? "120,140,255" : "150,110,255";
          g.addColorStop(0, `rgba(${near > 0.6 ? "220,230,255" : b},${p.a * (0.5 + near * 0.5)})`);
          g.addColorStop(1, `rgba(${b},0)`);
        }
        ctx.strokeStyle = g;
        ctx.lineWidth = p.w;
        ctx.beginPath();
        ctx.moveTo(p.x, Math.max(p.up ? head : Y, head));
        ctx.lineTo(p.x, tail);
        ctx.stroke();
      }

      // the layer itself
      const pulse = 0.85 + 0.15 * Math.sin(t * 1.3);
      const line = ctx.createLinearGradient(0, 0, W, 0);
      line.addColorStop(0, "rgba(63,74,175,0)");
      line.addColorStop(0.2, `rgba(120,140,255,${0.5 * pulse})`);
      line.addColorStop(0.5, `rgba(200,255,210,${0.95 * pulse})`);
      line.addColorStop(0.8, `rgba(120,140,255,${0.5 * pulse})`);
      line.addColorStop(1, "rgba(63,74,175,0)");
      ctx.fillStyle = line;
      ctx.fillRect(0, Y - 1, W, 2);
      const glow = ctx.createRadialGradient(W / 2, Y, 0, W / 2, Y, W * 0.45);
      glow.addColorStop(0, `rgba(110,247,110,${0.16 * pulse})`);
      glow.addColorStop(0.4, `rgba(63,74,175,${0.12 * pulse})`);
      glow.addColorStop(1, "rgba(63,74,175,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, Y - W * 0.2, W, W * 0.4);

      // bloom
      bctx.clearRect(0, 0, bl.width, bl.height);
      bctx.drawImage(c, 0, 0, bl.width, bl.height);
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.filter = "blur(6px)";
      ctx.globalAlpha = 0.55 * fade;
      ctx.drawImage(bl, 0, 0, c.width, c.height);
      ctx.filter = "none";
      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";

      if (!reduce && on) raf = requestAnimationFrame(frame);
    };

    resize();
    const io = new IntersectionObserver(([e]) => {
      const was = on;
      on = e.isIntersecting;
      if (on && !was && !reduce) raf = requestAnimationFrame(frame);
    });
    io.observe(c);
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [contained, plane, density]);

  return <canvas ref={ref} aria-hidden className="absolute inset-0 w-full h-full pointer-events-none" />;
}
