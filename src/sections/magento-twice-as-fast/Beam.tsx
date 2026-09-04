"use client";

import { useEffect, useRef } from "react";

/**
 * A thick beam of light particles crossing the whole page from the top-right
 * to the bottom-left, fixed behind everything.
 *
 * A few thousand motes stream along the beam; it is brightest where it passes
 * behind the headline and softens toward both edges of the screen. A soft glow
 * follows the axis and a bloom marks the crossing. The pointer nudges the beam,
 * and moving the pointer into it doubles the flow: the one place the page says
 * "x2" without words. A thin field of fixed stars stays behind every section;
 * the beam fades out as the hero scrolls away.
 *
 * Draws only while the tab is visible. Reduced-motion users get one still frame.
 */

type Mote = {
  t: number;      // position along the beam: 0 behind the headline, 1 entering top-right, -1 leaving bottom-left
  lat: number;    // sideways offset in beam widths
  core: boolean;  // the dense bright centre of the beam
  speed: number;
  size: number;
  tint: number;
  alpha: number;
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

const TINTS = ["#dfeaff", "#7fa9ff", "#ffd9b8"];

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

function buildMotes(n: number, rand: () => number): Mote[] {
  const out: Mote[] = [];
  for (let i = 0; i < n; i++) {
    const core = rand() < 0.38;
    const t = rand();
    out.push({
      t: rand() * 2 - 1,
      lat: gauss(rand) * (core ? 0.28 : 1),
      core,
      speed: (core ? 0.22 : 0.16) + rand() * 0.18,
      size: core ? 0.9 + rand() * 1.7 : 0.5 + Math.pow(rand(), 2) * 1.4,
      tint: t < 0.42 ? 0 : t < 0.9 ? 1 : 2,
      alpha: core ? 0.7 + rand() * 0.3 : 0.28 + rand() * 0.5,
      phase: rand() * Math.PI * 2,
    });
  }
  return out;
}

function buildField(n: number, rand: () => number): FieldStar[] {
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

/** A pre-rendered glow dot; drawing these is far cheaper than arcs per mote. */
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

export function Beam() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const rand = mulberry32(31);
    const motes = buildMotes(coarse ? 1800 : 3600, rand);
    const field = buildField(coarse ? 140 : 260, rand);
    const dots = TINTS.map((c) => sprite(c, 32, false));
    const glows = TINTS.map((c) => sprite(c, 96, true));

    let w = 0;
    let h = 0;
    const resize = () => {
      // Fill rate is the cost here, not mote count; 1.5x is indistinguishable on glow dots.
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
    let flow = 1;

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const scroll = window.scrollY;
      const mobile = w < 768;
      const intro = reduce ? 1 : Math.min(1, (now - t0) / 2600);
      const ease = 1 - Math.pow(1 - intro, 3);
      // The beam belongs to the hero; the field stays for the whole page.
      const fade = Math.max(0, 1 - scroll / (h * 0.85));

      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;

      // Beam geometry: the crossing sits just right of the headline; the beam
      // runs off the top-right one way and off the bottom-left the other.
      const hx = w * (mobile ? 0.5 : 0.64) + pointer.x * 22;
      const hy = h * (mobile ? 0.34 : 0.46) - scroll * 0.35 + pointer.y * 14;
      const ang = mobile ? -Math.PI * 0.4 : -Math.PI * 0.19;
      const ux = Math.cos(ang);
      const uy = Math.sin(ang);
      const nx = -uy;
      const ny = ux;
      const L = Math.hypot(w, h) * 1.15;
      const T = mobile ? w * 0.17 : h * 0.13;

      // Is the pointer inside the beam? Then the flow runs at twice the speed.
      let near = false;
      if (pointer.px >= 0) {
        const dx = pointer.px - hx;
        const dy = pointer.py - hy;
        const along = dx * ux + dy * uy;
        const perp = Math.abs(dx * nx + dy * ny);
        near = along > -L * 0.9 && along < L * 0.9 && perp < T * 2.4;
      }
      flow += ((near ? 2 : 1) - flow) * 0.03;

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
        const g = fade;
        // The beam arrives: during the intro its front sweeps in from the
        // top-right and across to the far side of the page.
        const visibleFrom = 1 - 2 * ease;

        // soft glow along the axis
        ctx.save();
        ctx.translate(hx, hy);
        ctx.rotate(ang);
        ctx.scale(L, T * 2.2);
        const along = ctx.createRadialGradient(0, 0, 0, 0, 0, 0.8);
        along.addColorStop(0, `rgba(90,135,255,${0.3 * g * ease})`);
        along.addColorStop(0.55, `rgba(70,110,240,${0.12 * g * ease})`);
        along.addColorStop(1, "rgba(60,90,220,0)");
        ctx.fillStyle = along;
        ctx.fillRect(-1, -1, 2, 2);
        ctx.restore();

        // a fine bright spine along the beam, brightest at the crossing
        ctx.save();
        ctx.translate(hx, hy);
        ctx.rotate(ang);
        const spine = ctx.createLinearGradient(-L * 0.8, 0, L * 0.8, 0);
        spine.addColorStop(0, "rgba(120,160,255,0)");
        spine.addColorStop(0.5, `rgba(230,240,255,${0.55 * g * ease})`);
        spine.addColorStop(1, "rgba(120,160,255,0)");
        ctx.strokeStyle = spine;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(-L * 0.8, 0);
        ctx.lineTo(L * 0.8, 0);
        ctx.stroke();
        ctx.restore();

        // bloom at the crossing
        ctx.globalAlpha = g * ease;
        const bloom = ctx.createRadialGradient(hx, hy, 0, hx, hy, T * 1.5);
        bloom.addColorStop(0, "rgba(255,250,242,0.8)");
        bloom.addColorStop(0.12, "rgba(215,230,255,0.4)");
        bloom.addColorStop(0.4, "rgba(130,170,255,0.14)");
        bloom.addColorStop(1, "rgba(110,150,255,0)");
        ctx.fillStyle = bloom;
        ctx.fillRect(hx - T * 1.5, hy - T * 1.5, T * 3, T * 3);

        for (const m of motes) {
          if (!reduce) {
            m.t -= m.speed * flow * dt;
            if (m.t < -1.05) {
              m.t += 2.1 + rand() * 0.1;
              m.lat = gauss(rand) * (m.core ? 0.28 : 1);
            }
          }
          if (m.t < visibleFrom) continue;
          const d = m.t * L;
          const x = hx + ux * d + nx * m.lat * T;
          const y = hy + uy * d + ny * m.lat * T;
          // brightest and biggest where it passes behind the headline
          const mid = 1 - Math.min(1, Math.abs(m.t));
          const glow = 0.3 + 0.7 * Math.pow(mid, 1.3);
          const shimmer = 0.8 + 0.2 * Math.sin(now * 0.004 + m.phase);
          const a = m.alpha * glow * shimmer * g;
          if (a < 0.02) continue;
          ctx.globalAlpha = a;
          const s = m.size * (1 + mid * 0.9);
          if (m.core && m.size > 2) {
            const px = s * 7;
            ctx.drawImage(glows[m.tint], x - px / 2, y - px / 2, px, px);
          } else {
            const px = s * 4;
            ctx.drawImage(dots[m.tint], x - px / 2, y - px / 2, px, px);
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
