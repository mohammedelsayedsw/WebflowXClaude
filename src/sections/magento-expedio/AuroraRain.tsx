"use client";

import { useEffect, useRef } from "react";

type RGB = [number, number, number];
type Strand = {
  x0: number; y0: number; side: number; span: number; L: number; sp: number;
  w: number; a: number; c0: RGB; c1: RGB; c2: RGB; ph: number; s: number;
};

const hex = (h: string): RGB => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
/** tip, body, tail */
const PALETTES: [RGB, RGB, RGB][] = [
  ["#d8ffd8", "#6ef76e", "#7b5cff"],
  ["#e8fff4", "#3fe0c5", "#5a3dd8"],
  ["#ffffff", "#8fb6ff", "#9b6bff"],
  ["#d8ffd8", "#6ef76e", "#1f8cff"],
].map((p) => p.map(hex) as [RGB, RGB, RGB]);

const rnd = (a: number, b: number) => a + Math.random() * (b - a);
const gauss = () => Math.sqrt(-2 * Math.log(1 - Math.random())) * Math.cos(2 * Math.PI * Math.random());
const mix = (a: RGB, b: RGB, k: number): RGB => [a[0] + (b[0] - a[0]) * k, a[1] + (b[1] - a[1]) * k, a[2] + (b[2] - a[2]) * k];

/**
 * Aurora rain: strands of light fall from a source above the top edge and bend
 * outward, each running from a white-hot tip through mint or teal to a violet
 * or blue tail. A soft beam falls from the source, and a bloom pass (the frame
 * drawn at quarter size, blurred and laid back over itself) makes it glow.
 *
 * The source is fixed at the top centre; nothing follows the pointer. Fixed
 * behind the hero, fades out as the hero scrolls away, pauses when the tab is
 * hidden. Reduced motion gets one still frame.
 */
export function AuroraRain({ contained = false, density = 1 }: { contained?: boolean; density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;
    const bl = document.createElement("canvas");
    const bctx = bl.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0, H = 0, D = 1, raf = 0, last = 0;
    let strands: Strand[] = [];
    let beamImg: HTMLCanvasElement | null = null;
    let visible = !contained;
    const t0 = performance.now();

    const spawn = (): Strand => {
      const d = Math.pow(Math.random(), 1.5);
      const side = gauss() * 0.45;
      const [c0, c1, c2] = PALETTES[Math.floor(Math.random() * PALETTES.length)];
      return {
        x0: W * (0.5 + side * 0.5), y0: -H * 0.06 - Math.random() * H * 0.08, side,
        span: H * 1.25, L: H * rnd(0.16, 0.55), sp: H * rnd(0.2, 0.48) * (0.55 + d * 0.9),
        w: 0.5 + d * 2.6, a: 0.35 + d * 0.6, c0, c1, c2, ph: Math.random() * 7, s: 0,
      };
    };
    const path = (st: Strand, s: number): [number, number] => {
      const u = s / H;
      return [st.x0 + st.side * W * 0.55 * u * u + st.side * W * 0.07 * u, st.y0 + s];
    };

    /** The beam, drawn once per size and blurred so its edges dissolve. */
    const buildBeam = () => {
      const img = document.createElement("canvas");
      img.width = Math.ceil(W * 1.2);
      img.height = Math.ceil(H);
      const b = img.getContext("2d")!;
      const cx = img.width / 2;
      b.filter = `blur(${Math.round(W * 0.03)}px)`;
      const g = b.createLinearGradient(0, 0, 0, H * 0.9);
      g.addColorStop(0, "rgba(160,255,200,0.42)");
      g.addColorStop(0.45, "rgba(80,90,255,0.13)");
      g.addColorStop(1, "rgba(80,90,255,0)");
      b.fillStyle = g;
      b.beginPath();
      b.moveTo(cx - W * 0.04, -20);
      b.lineTo(cx + W * 0.04, -20);
      b.lineTo(cx + W * 0.4, H * 0.95);
      b.lineTo(cx - W * 0.4, H * 0.95);
      b.closePath();
      b.fill();
      b.filter = "none";
      const r = b.createRadialGradient(cx, -H * 0.02, 0, cx, -H * 0.02, H * 0.5);
      r.addColorStop(0, "rgba(255,255,255,0.5)");
      r.addColorStop(0.1, "rgba(160,255,200,0.4)");
      r.addColorStop(1, "rgba(80,90,255,0)");
      b.fillStyle = r;
      b.fillRect(0, 0, img.width, img.height);
      return img;
    };

    const resize = () => {
      D = Math.min(window.devicePixelRatio || 1, 2);
      const box = contained ? c.parentElement!.getBoundingClientRect() : null;
      W = box ? box.width : window.innerWidth;
      H = box ? box.height : window.innerHeight;
      c.width = Math.round(W * D);
      c.height = Math.round(H * D);
      c.style.width = `${W}px`;
      c.style.height = `${H}px`;
      ctx.setTransform(D, 0, 0, D, 0, 0);
      bl.width = Math.ceil(W / 4);
      bl.height = Math.ceil(H / 4);
      beamImg = buildBeam();
      const n = Math.round(720 * density * (W < 768 ? 0.42 : 1));
      strands = Array.from({ length: n }, () => {
        const st = spawn();
        st.s = rnd(-0.4, 1) * st.span;
        return st;
      });
    };

    const SEG = 12;
    const frame = (now: number) => {
      const t = reduce ? 6 : (now - t0) / 1000;
      const dt = reduce ? 0 : Math.min(0.05, t - last);
      last = t;
      const fade = contained ? (visible ? 1 : 0) : Math.max(0, 1 - window.scrollY / (H * 0.9));

      ctx.globalCompositeOperation = "source-over";
      ctx.setTransform(D, 0, 0, D, 0, 0);
      ctx.clearRect(0, 0, W, H);
      if (fade > 0) {
        const sky = ctx.createRadialGradient(W / 2, -H * 0.1, 0, W / 2, -H * 0.1, Math.max(W, H) * 1.1);
        sky.addColorStop(0, `rgba(13,42,58,${fade})`);
        sky.addColorStop(0.45, `rgba(8,16,37,${fade})`);
        sky.addColorStop(0.82, `rgba(5,7,15,${fade})`);
        sky.addColorStop(1, `rgba(5,7,15,${fade})`);
        ctx.fillStyle = sky;
        ctx.fillRect(0, 0, W, H);
        ctx.globalAlpha = fade;
        if (beamImg) ctx.drawImage(beamImg, W / 2 - beamImg.width / 2, 0);

        ctx.globalCompositeOperation = "lighter";
        ctx.lineCap = "butt";
        for (const st of strands) {
          st.s += st.sp * dt;
          if (st.s - st.L > st.span) {
            Object.assign(st, spawn());
            st.s = -rnd(0, 0.3) * st.span;
            continue;
          }
          if (st.s <= 0) continue;
          const head = Math.min(st.s, st.span);
          const tail = Math.max(0, st.s - st.L);
          if (head <= tail) continue;
          const shimmer = 0.85 + 0.15 * Math.sin(t * 3 + st.ph);
          let prev = path(st, tail);
          for (let i = 1; i <= SEG; i++) {
            const k = i / SEG;
            const p = path(st, tail + (head - tail) * k);
            const col = k < 0.5 ? mix(st.c2, st.c1, k * 2) : mix(st.c1, st.c0, (k - 0.5) * 2);
            ctx.strokeStyle = `rgba(${col[0] | 0},${col[1] | 0},${col[2] | 0},${(Math.pow(k, 1.6) * st.a * shimmer * fade).toFixed(3)})`;
            ctx.lineWidth = st.w * (0.3 + 0.7 * k);
            ctx.beginPath();
            ctx.moveTo(prev[0], prev[1]);
            ctx.lineTo(p[0], p[1]);
            ctx.stroke();
            prev = p;
          }
          // no dot at the end: the leading stretch burns white, then stops
          if (st.s < st.span) {
            const hot = Math.max(tail, head - (head - tail) * 0.16);
            let q = path(st, hot);
            for (let i = 1; i <= 4; i++) {
              const p = path(st, hot + ((head - hot) * i) / 4);
              ctx.strokeStyle = `rgba(255,255,255,${((i / 4) * st.a * 0.9 * fade).toFixed(3)})`;
              ctx.lineWidth = Math.max(0.4, st.w * 0.45);
              ctx.beginPath();
              ctx.moveTo(q[0], q[1]);
              ctx.lineTo(p[0], p[1]);
              ctx.stroke();
              q = p;
            }
          }
        }
        ctx.globalAlpha = 1;

        // bloom
        bctx.globalCompositeOperation = "copy";
        bctx.drawImage(c, 0, 0, bl.width, bl.height);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.globalCompositeOperation = "lighter";
        ctx.globalAlpha = 0.75;
        ctx.filter = `blur(${Math.round(6 * D)}px)`;
        ctx.drawImage(bl, 0, 0, c.width, c.height);
        ctx.filter = "none";
        ctx.globalAlpha = 1;
        ctx.setTransform(D, 0, 0, D, 0, 0);

        // a dark pool behind the copy, and a vignette, so the type always reads
        ctx.globalCompositeOperation = "source-over";
        const pool = ctx.createRadialGradient(W / 2, H * 0.56, 0, W / 2, H * 0.56, Math.max(W, H) * 0.42);
        pool.addColorStop(0, "rgba(5,7,15,0.62)");
        pool.addColorStop(0.55, "rgba(5,7,15,0.34)");
        pool.addColorStop(1, "rgba(5,7,15,0)");
        ctx.fillStyle = pool;
        ctx.fillRect(0, 0, W, H);
        const vig = ctx.createRadialGradient(W / 2, H / 2, Math.min(W, H) * 0.35, W / 2, H / 2, Math.max(W, H) * 0.75);
        vig.addColorStop(0, "rgba(5,7,15,0)");
        vig.addColorStop(1, "rgba(5,7,15,0.75)");
        ctx.fillStyle = vig;
        ctx.fillRect(0, 0, W, H);
        // phones: the copy sits low, so darken the lower half of the screen.
        // Drawn on the fixed canvas, so there is no edge where a section ends.
        if (W < 768) {
          const low = ctx.createLinearGradient(0, H * 0.35, 0, H);
          low.addColorStop(0, "rgba(5,7,15,0)");
          low.addColorStop(1, "rgba(5,7,15,0.6)");
          ctx.fillStyle = low;
          ctx.fillRect(0, 0, W, H);
        }
      }
      if (!reduce) raf = requestAnimationFrame(frame);
    };

    const onVis = () => {
      cancelAnimationFrame(raf);
      if (!document.hidden && !reduce) raf = requestAnimationFrame(frame);
    };

    resize();
    raf = requestAnimationFrame(frame);
    const io = new IntersectionObserver(([e]) => (visible = e.isIntersecting), { rootMargin: "100px" });
    if (contained) io.observe(c);
    const ro = new ResizeObserver(() => contained && resize());
    if (contained) ro.observe(c.parentElement!);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVis);
    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [contained, density]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none ${contained ? "absolute" : "fixed"} inset-0 z-0 h-full w-full`}
    />
  );
}
