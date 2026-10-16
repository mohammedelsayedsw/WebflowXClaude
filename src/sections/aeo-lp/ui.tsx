"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { assetUrl } from "@/lib/assets";

export const img = (p: string) => (p.startsWith("http") ? p : assetUrl(p));

export const Arrow = () => <span className="arr">&rarr;</span>;

export function Stars() {
  return (
    <span className="stars" aria-hidden>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} viewBox="0 0 24 24"><path d="M12 .5l3.09 7.36L23 8.9l-6 5.36L18.5 22 12 18.1 5.5 22 7 14.26 1 8.9l7.91-1.04L12 .5z" /></svg>
      ))}
    </span>
  );
}

export function Rating() {
  return (
    <div className="rating">
      <div className="r"><b>4.9 <Stars /></b><span>Average client rating</span></div>
      <div className="r"><b>95</b><span>NPS score</span></div>
    </div>
  );
}

const ICONS: Record<string, ReactNode> = {
  sparkles: <><path d="M12 3l1.9 5.8L20 11l-6.1 2.2L12 19l-1.9-5.8L4 11l6.1-2.2z" /><path d="M19 3v4M21 5h-4" /></>,
  file: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" /></>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />,
  search: <><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></>,
  chart: <path d="M3 3v18h18M18 17V9M13 17V5M8 17v-3" />,
  trend: <><path d="M22 7 13.5 15.5 8.5 10.5 2 17" /><path d="M16 7h6v6" /></>,
  target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
  monitor: <><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 5L2 7" /></>,
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6" />,
  user: <><circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 0 0-16 0" /></>,
};

export function Icon({ name }: { name: string }) {
  return (
    <div className="ico">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">{ICONS[name]}</svg>
    </div>
  );
}

const reduced = () => typeof window !== "undefined" && !!window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Count-up number, starts when 40% visible. */
export function Counter({ to, pre = "", suf = "" }: { to: number; pre?: string; suf?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [n, setN] = useState(to);
  useEffect(() => {
    const el = ref.current;
    if (!el || reduced() || typeof IntersectionObserver === "undefined") return;
    setN(0);
    let raf = 0;
    const io = new IntersectionObserver((es) => {
      if (!es[0].isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (t: number) => { let p = Math.min((t - t0) / 1400, 1); p = 1 - Math.pow(1 - p, 3); setN(Math.round(p * to)); if (p < 1) raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, [to]);
  return <span ref={ref}>{pre}{n.toLocaleString("en-US")}{suf}</span>;
}

/* Adds .in to every .rv and .on to every [data-on] inside root when it scrolls into view. */
export function useReveal(root: React.RefObject<HTMLElement | null>) {
  useEffect(() => {
    const r = root.current;
    if (!r) return;
    const rv = Array.from(r.querySelectorAll<HTMLElement>(".rv"));
    const on = Array.from(r.querySelectorAll<HTMLElement>("[data-on]"));
    if (reduced() || typeof IntersectionObserver === "undefined") {
      rv.forEach((e) => e.classList.add("in")); on.forEach((e) => e.classList.add("on")); return;
    }
    const io1 = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io1.unobserve(e.target); } }), { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    const io2 = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("on"); io2.unobserve(e.target); } }), { threshold: 0.25 });
    rv.forEach((e) => io1.observe(e));
    on.forEach((e) => io2.observe(e));
    return () => { io1.disconnect(); io2.disconnect(); };
  }, [root]);
}

export const isReduced = reduced;
