"use client";

import { useEffect, useRef } from "react";

/**
 * A few thousand motes running an infinity loop, fixed behind the whole page.
 *
 * The sibling of the beam on magento/twice-as-fast, with a different device:
 * there the stream crosses the page once, here it never leaves. The loop is
 * tilted like an orbit, so the near half runs brighter than the far half, and
 * the release numbers ride it round (desktop only; a phone has no room for them). The pointer parts the stream like a stone
 * in a river and the stream closes again behind it: the one place the page
 * says "forever" without words.
 *
 * The loop belongs to the hero, fades as the hero scrolls away, and comes back
 * round behind the closing section (#cta). A thin field of fixed stars stays
 * behind every dark section in between.
 *
 * Draws only while the tab is visible. Reduced-motion users get one still frame.
 */

type Mote = {
  a: number;      // angle along the loop, 0..2π
  born: number;   // 0..1, when the intro sweep reaches this mote
  lat: number;    // sideways offset in stream widths
  core: boolean;  // the dense bright centre of the stream
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

const TINTS = ["#eafff0", "#6ef76e", "#8fb6ff"];
const RELEASES = ["2.4.4", "2.4.5", "2.4.6", "2.4.7", "2.4.8", "2.4.9", "next"];
const TAU = Math.PI * 2;
const STEPS = 1024;

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

/** The lemniscate of Bernoulli at unit size: position and unit normal per step. */
function buildPath() {
  const px = new Float32Array(STEPS);
  const py = new Float32Array(STEPS);
  const nx = new Float32Array(STEPS);
  const ny = new Float32Array(STEPS);
  for (let i = 0; i < STEPS; i++) {
    const a = (i / STEPS) * TAU;
    const s = Math.sin(a);
    const c = Math.cos(a);
    const k = 1 + s * s;
    px[i] = c / k;
    py[i] = (s * c) / k;
  }
  for (let i = 0; i < STEPS; i++) {
    const n = (i + 1) % STEPS;
    const p = (i + STEPS - 1) % STEPS;
    const tx = px[n] - px[p];
    const ty = py[n] - py[p];
    const len = Math.hypot(tx, ty) || 1;
    nx[i] = -ty / len;
    ny[i] = tx / len;
  }
  return { px, py, nx, ny };
}

function buildMotes(n: number, rand: () => number): Mote[] {
  const out: Mote[] = [];
  for (let i = 0; i < n; i++) {
    const core = rand() < 0.42;
    const t = rand();
    const a = rand() * TAU;
    out.push({
      a,
      born: a / TAU,
      lat: gauss(rand) * (core ? 0.3 : 1),
      core,
      speed: (core ? 0.3 : 0.2) + rand() * 0.2,
      size: core ? 0.9 + rand() * 1.7 : 0.5 + Math.pow(rand(), 2) * 1.4,
      tint: t < 0.4 ? 0 : t < 0.88 ? 1 : 2,
      alpha: core ? 0.7 + rand() * 0.3 : 0.26 + rand() * 0.5,
      phase: rand() * TAU,
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
      phase: rand() * TAU,
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

export function Loop() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const rand = mulberry32(49);
    const path = buildPath();
    const motes = buildMotes(coarse ? 1700 : 3400, rand);
    const field = buildField(coarse ? 140 : 260, rand);
    const dots = TINTS.map((c) => sprite(c, 32, false));
    const glows = TINTS.map((c) => sprite(c, 96, true));
    const haze = sprite("#6ef76e", 128, true);

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
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, px: -9999, py: -9999 };
    const onMove = (e: PointerEvent) => {
      pointer.px = e.clientX;
      pointer.py = e.clientY;
      pointer.tx = (e.clientX / w) * 2 - 1;
      pointer.ty = (e.clientY / h) * 2 - 1;
    };
    const onLeave = () => {
      pointer.px = -9999;
      pointer.py = -9999;
    };

    let raf = 0;
    let running = !document.hidden;
    let last = performance.now();
    const t0 = last;
    let labelTurn = 0;
    let closing: HTMLElement | null = null;

    const draw = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;

      const scroll = window.scrollY;
      const mobile = w < 768;
      const intro = reduce ? 1 : Math.min(1, (now - t0) / 2600);
      const ease = 1 - Math.pow(1 - intro, 3);

      // The loop leaves with the hero and comes back round behind the closing section.
      const heroFade = Math.max(0, 1 - scroll / (h * 0.85));
      if (!closing) closing = document.getElementById("cta");
      let closeFade = 0;
      if (closing) {
        const top = closing.getBoundingClientRect().top;
        closeFade = Math.max(0, Math.min(1, (h - top) / (h * 0.7)));
      }
      const atClose = closeFade > heroFade;
      const fade = atClose ? closeFade * 0.55 : heroFade;

      pointer.x += (pointer.tx - pointer.x) * 0.04;
      pointer.y += (pointer.ty - pointer.y) * 0.04;

      // Loop geometry. In the hero it sits right of the text column; behind the
      // closing section it is a wide backdrop centred on the page.
      const cx =
        (atClose ? w * 0.5 : w * (mobile ? 0.5 : 0.685)) + pointer.x * 22;
      const cy =
        (atClose
          ? h * 0.5
          : h * (mobile ? 0.2 : 0.43) - scroll * 0.35) +
        pointer.y * 14;
      const R = atClose
        ? Math.min(w * 0.46, h * 1.1)
        : mobile
          ? w * 0.45
          : Math.min(w * 0.285, h * 0.7);
      const tilt = mobile ? 0.78 : 0.7;
      const ang = mobile ? -0.2 : -0.16;
      const ca = Math.cos(ang);
      const sa = Math.sin(ang);
      const T = R * 0.05;
      const reach = mobile ? 0 : 110;
      const reach2 = reach * reach;

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

        // a haze along the whole loop, so it reads as one ribbon before the motes resolve
        for (let i = 0; i < STEPS; i += 16) {
          if (i / STEPS > ease) break;
          const lx = path.px[i] * R;
          const ly = path.py[i] * R * tilt;
          const x = cx + lx * ca - ly * sa;
          const y = cy + lx * sa + ly * ca;
          const near = 0.5 + 0.5 * (path.py[i] / 0.3536);
          ctx.globalAlpha = (0.035 + 0.05 * near) * g;
          const d = T * 9;
          ctx.drawImage(haze, x - d / 2, y - d / 2, d, d);
        }

        // bloom where the loop crosses itself
        ctx.globalAlpha = g * ease;
        const bloom = ctx.createRadialGradient(cx, cy, 0, cx, cy, T * 5);
        bloom.addColorStop(0, "rgba(240,255,244,0.7)");
        bloom.addColorStop(0.14, "rgba(150,250,170,0.32)");
        bloom.addColorStop(0.45, "rgba(110,247,110,0.1)");
        bloom.addColorStop(1, "rgba(110,247,110,0)");
        ctx.fillStyle = bloom;
        ctx.fillRect(cx - T * 5, cy - T * 5, T * 10, T * 10);

        for (const m of motes) {
          if (!reduce) {
            m.a += m.speed * dt;
            if (m.a >= TAU) {
              m.a -= TAU;
              m.lat = gauss(rand) * (m.core ? 0.3 : 1);
            }
          }
          if (m.born > ease) continue;
          const i = ((m.a / TAU) * STEPS) | 0;
          const lx = (path.px[i] + path.nx[i] * m.lat * 0.05) * R;
          const ly = (path.py[i] + path.ny[i] * m.lat * 0.05) * R * tilt;
          let x = cx + lx * ca - ly * sa;
          let y = cy + lx * sa + ly * ca;

          // the pointer parts the stream
          if (reach) {
            const dx = x - pointer.px;
            const dy = y - pointer.py;
            const d2 = dx * dx + dy * dy;
            if (d2 < reach2 && d2 > 0.01) {
              const d = Math.sqrt(d2);
              const push = Math.pow(1 - d / reach, 2) * 64;
              x += (dx / d) * push;
              y += (dy / d) * push;
            }
          }

          // the near half of the orbit is brighter and bigger than the far half
          const near = 0.5 + 0.5 * (path.py[i] / 0.3536);
          const depth = 0.45 + 0.55 * near;
          const shimmer = 0.8 + 0.2 * Math.sin(now * 0.004 + m.phase);
          const a = m.alpha * depth * shimmer * g;
          if (a < 0.02) continue;
          ctx.globalAlpha = a;
          const s = m.size * (0.75 + near * 0.8);
          if (m.core && m.size > 2) {
            const d = s * 7;
            ctx.drawImage(glows[m.tint], x - d / 2, y - d / 2, d, d);
          } else {
            const d = s * 4;
            ctx.drawImage(dots[m.tint], x - d / 2, y - d / 2, d, d);
          }
        }

        // the releases ride the loop, one after another, and then the next one
        if (!atClose && !mobile && ease >= 1) {
          if (!reduce) labelTurn = (labelTurn + 0.05 * dt) % 1;
          ctx.globalCompositeOperation = "source-over";
          ctx.font = "600 13px ui-sans-serif, system-ui, sans-serif";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          for (let k = 0; k < RELEASES.length; k++) {
            const at = (labelTurn + k / RELEASES.length) % 1;
            const i = (at * STEPS) | 0;
            const off = 0.075;
            const lx = (path.px[i] + path.nx[i] * off) * R;
            const ly = (path.py[i] + path.ny[i] * off) * R * tilt;
            const x = cx + lx * ca - ly * sa;
            const y = cy + lx * sa + ly * ca;
            const near = 0.5 + 0.5 * (path.py[i] / 0.3536);
            ctx.globalAlpha = (0.35 + 0.55 * near) * g;
            ctx.fillStyle = k === RELEASES.length - 1 ? "#6ef76e" : "#ffffff";
            ctx.fillText(RELEASES[k], x, y);
          }
          ctx.globalCompositeOperation = "lighter";
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
    if (!coarse) {
      window.addEventListener("pointermove", onMove, { passive: true });
      document.documentElement.addEventListener("pointerleave", onLeave);
    }
    raf = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("pointermove", onMove);
      document.documentElement.removeEventListener("pointerleave", onLeave);
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
