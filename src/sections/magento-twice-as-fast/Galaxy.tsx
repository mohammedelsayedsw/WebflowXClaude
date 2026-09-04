"use client";

import { useEffect, useRef } from "react";

/**
 * A spiral galaxy on a 2D canvas, fixed behind the whole page.
 *
 * A few thousand stars sit on two logarithmic arms around a bulge. The disc is
 * tilted, spun slowly, and projected with perspective so it reads as an object
 * in space rather than a texture. The pointer nudges the camera, and moving
 * the pointer into the galaxy doubles its spin: the one place the page says
 * "x2" without words. A thin field of fixed stars stays behind every section;
 * the galaxy itself fades out as the hero scrolls away.
 *
 * Draws only while the tab is visible. Reduced-motion users get one still frame.
 */

type Star = {
  r: number;
  a: number;
  z: number;
  size: number;
  tint: number;
  alpha: number;
  spark: number;
  phase: number;
};

type FieldStar = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  rate: number;
  phase: number;
};

const ARMS = 2;
const PITCH = 0.3;
const TINTS = ["#e8f0ff", "#8fb6ff", "#ffc9a1"];

function mulberry32(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function gauss(rand: () => number) {
  const u = 1 - rand();
  const v = rand();
  return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
}

function buildStars(n: number): Star[] {
  const rand = mulberry32(29);
  const stars: Star[] = [];
  for (let i = 0; i < n; i++) {
    const kind = rand();
    const bulge = kind < 0.16;
    const loose = !bulge && kind < 0.3;
    let r: number;
    let a: number;
    if (bulge) {
      r = Math.abs(gauss(rand)) * 0.06;
      a = rand() * Math.PI * 2;
    } else {
      r = 0.05 + 0.95 * Math.pow(rand(), 1.25);
      if (loose) {
        a = rand() * Math.PI * 2;
      } else {
        const arm = Math.floor(rand() * ARMS);
        const along = Math.log(r) / PITCH + (arm * 2 * Math.PI) / ARMS;
        a = along + gauss(rand) * (0.05 + 0.13 * r);
      }
    }
    const t = rand();
    const spark = rand() < 0.035 ? 0.6 + rand() * 1.2 : 0;
    stars.push({
      r,
      a,
      z: gauss(rand) * (bulge ? 0.03 : 0.008 + 0.014 * r),
      size: spark ? 2 + rand() * 2.4 : 0.55 + Math.pow(rand(), 2) * 1.5,
      tint: t < 0.68 ? 0 : t < 0.9 ? 1 : 2,
      alpha: spark ? 1 : (loose ? 0.18 : 0.32) + rand() * 0.5,
      spark,
      phase: rand() * Math.PI * 2,
    });
  }
  return stars;
}

function buildField(n: number): FieldStar[] {
  const rand = mulberry32(7);
  const out: FieldStar[] = [];
  for (let i = 0; i < n; i++) {
    out.push({
      x: rand(),
      y: rand(),
      size: 0.4 + Math.pow(rand(), 3) * 1.8,
      alpha: 0.15 + rand() * 0.55,
      rate: 0.3 + rand() * 1.4,
      phase: rand() * Math.PI * 2,
    });
  }
  return out;
}

/** A pre-rendered glow dot; drawing these is far cheaper than arcs per star. */
function sprite(color: string, px: number, soft: boolean) {
  const c = document.createElement("canvas");
  c.width = c.height = px;
  const g = c.getContext("2d");
  if (!g) return c;
  const half = px / 2;
  const grad = g.createRadialGradient(half, half, 0, half, half, half);
  grad.addColorStop(0, color);
  grad.addColorStop(soft ? 0.12 : 0.3, color + "b0");
  grad.addColorStop(soft ? 0.4 : 0.7, color + "30");
  grad.addColorStop(1, color + "00");
  g.fillStyle = grad;
  g.fillRect(0, 0, px, px);
  return c;
}

export function Galaxy() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const stars = buildStars(coarse ? 2400 : 4800);
    const field = buildField(coarse ? 140 : 260);
    const dots = TINTS.map((c) => sprite(c, 32, false));
    const glows = TINTS.map((c) => sprite(c, 96, true));

    let w = 0;
    let h = 0;
    const resize = () => {
      // Fill rate is the cost here, not star count; 1.5x is indistinguishable on glow dots.
      const dpr = Math.min(1.5, window.devicePixelRatio || 1);
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Pointer in viewport units, -1..1, eased toward the latest reading.
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, px: -1, py: -1 };
    const onMove = (e: PointerEvent) => {
      pointer.px = e.clientX;
      pointer.py = e.clientY;
      pointer.tx = (e.clientX / w) * 2 - 1;
      pointer.ty = (e.clientY / h) * 2 - 1;
    };

    let raf = 0;
    let running = !document.hidden;
    let last = performance.now();
    const t0 = last;
    let angle = 0;
    let spin = 0.055;

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const scroll = window.scrollY;
      const mobile = w < 768;
      const cx = w * (mobile ? 0.5 : 0.66);
      const cy = h * (mobile ? 0.34 : 0.47) - scroll * 0.35;
      const R = mobile ? w * 0.5 : Math.min(w * 0.3, h * 0.46);
      const intro = reduce ? 1 : Math.min(1, (now - t0) / 2600);
      const ease = 1 - Math.pow(1 - intro, 3);
      // The galaxy belongs to the hero; the field stays for the whole page.
      const fade = Math.max(0, 1 - scroll / (h * 0.85));

      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;
      const near =
        pointer.px >= 0 && Math.hypot(pointer.px - cx, pointer.py - cy) < R * 0.95;
      spin += ((near ? 0.11 : 0.055) - spin) * 0.03;
      angle += spin * dt;

      ctx.globalCompositeOperation = "source-over";
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";

      for (const f of field) {
        const tw = 0.7 + 0.3 * Math.sin(now * 0.001 * f.rate + f.phase);
        ctx.globalAlpha = f.alpha * tw * ease;
        const d = f.size * 4;
        ctx.drawImage(dots[0], f.x * w - d / 2, f.y * h - d / 2, d, d);
      }

      if (fade > 0.01) {
        const tilt = 0.62 + pointer.y * 0.08;
        const yaw = pointer.x * 0.16;
        const ct = Math.cos(tilt);
        const st = Math.sin(tilt);
        const cyw = Math.cos(yaw);
        const syw = Math.sin(yaw);
        const D = 2.8;
        const Rr = R * (0.88 + 0.12 * ease);
        const g = ease * fade;

        // disc haze, foreshortened with the tilt
        ctx.globalAlpha = 0.5 * g;
        ctx.save();
        ctx.translate(cx, cy);
        ctx.scale(1, ct);
        const haze = ctx.createRadialGradient(0, 0, 0, 0, 0, Rr * 1.05);
        haze.addColorStop(0, "rgba(120,150,255,0.16)");
        haze.addColorStop(0.5, "rgba(80,110,230,0.07)");
        haze.addColorStop(1, "rgba(60,80,200,0)");
        ctx.fillStyle = haze;
        ctx.fillRect(-Rr * 1.1, -Rr * 1.1, Rr * 2.2, Rr * 2.2);
        ctx.restore();

        // core
        ctx.globalAlpha = g;
        const core = ctx.createRadialGradient(cx, cy, 0, cx, cy, Rr * 0.5);
        core.addColorStop(0, "rgba(255,247,235,0.9)");
        core.addColorStop(0.08, "rgba(255,230,205,0.55)");
        core.addColorStop(0.3, "rgba(160,185,255,0.16)");
        core.addColorStop(1, "rgba(120,150,255,0)");
        ctx.fillStyle = core;
        ctx.fillRect(cx - Rr * 0.5, cy - Rr * 0.5, Rr, Rr);

        for (const s of stars) {
          const th = s.a + angle;
          const x = s.r * Math.cos(th);
          const y = s.r * Math.sin(th);
          // tilt about the screen's x axis, then yaw about y, then perspective
          const y1 = y * ct - s.z * st;
          const z1 = y * st + s.z * ct;
          const x2 = x * cyw + z1 * syw;
          const z2 = -x * syw + z1 * cyw;
          const depth = D / (D + z2);
          const sx = cx + x2 * Rr * depth;
          const sy = cy - y1 * Rr * depth;
          let a = s.alpha * depth * g;
          if (s.spark) a *= 0.65 + 0.35 * Math.sin(now * 0.0025 * s.spark + s.phase);
          ctx.globalAlpha = a;
          if (s.spark) {
            const d = s.size * depth * 9;
            ctx.drawImage(glows[s.tint], sx - d / 2, sy - d / 2, d, d);
          } else {
            const d = s.size * depth * 4;
            ctx.drawImage(dots[s.tint], sx - d / 2, sy - d / 2, d, d);
          }
        }
      }

      ctx.globalAlpha = 1;
      ctx.globalCompositeOperation = "source-over";
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
    if (!coarse) window.addEventListener("pointermove", onMove, { passive: true });
    raf = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
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
