"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion, animate } from "motion/react";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import { assetUrl } from "@/lib/assets";
import { LayerField } from "@/sections/operalayer/kit/LayerField";
import { ease } from "@/sections/operalayer/kit/ui";

/* Buttons, as on the reveal page: beige outline first, white outline second. */
export const btnMain =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[2px] border border-[var(--sw-beige)] text-[var(--sw-beige)] px-8 text-[17px] hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition font-head font-semibold";
export const btnSoft =
  "inline-flex h-12 items-center justify-center gap-2 rounded-[2px] border border-white/30 text-white/80 px-8 text-[17px] hover:border-white/60 hover:text-white transition font-head font-semibold";

export const H2 = "font-head text-white text-[38px] md:text-[54px] lg:text-[60px] leading-[1.03] tracking-[-0.025em] text-balance";

/* In-page links that work despite the app's smooth-scroll quirk. */
export function go(id: string) {
  return (e: React.MouseEvent) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const from = window.scrollY;
    const to = from + el.getBoundingClientRect().top - 64;
    const t0 = performance.now();
    const step = (now: number) => {
      const k = Math.min(1, (now - t0) / 700);
      const e2 = 1 - Math.pow(1 - k, 3);
      window.scrollTo({ top: from + (to - from) * e2, behavior: "instant" });
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
}

export function Rise({ children, delay = 0, className }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

/** Plays a numbered sequence once its element is on screen. */
export function useSeq(n: number, gap = 550, start = 400, amount = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount });
  const reduce = useReducedMotion();
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!inView) return;
    if (reduce) return setT(n);
    const ids = Array.from({ length: n }, (_, i) => window.setTimeout(() => setT(i + 1), start + i * gap));
    return () => ids.forEach(clearTimeout);
  }, [inView, reduce, n, gap, start]);
  return { ref, t };
}

/* ---------- Header: scandiweb logo, section links, one CTA ---------- */

export function OLHeader({ links }: { links: { id: string; label: string }[] }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-[background,box-shadow] duration-300 ${
        scrolled ? "bg-[rgba(5,7,15,0.88)] backdrop-blur-[14px] shadow-[0_1px_0_rgba(255,255,255,0.08)]" : "bg-transparent"
      }`}
    >
      <div className={`wrap flex items-center justify-between gap-4 transition-[height] duration-300 ${scrolled ? "h-[60px] md:h-[68px]" : "h-[64px] md:h-[80px]"}`}>
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <a href="https://scandiweb.com/" aria-label="scandiweb">
            <img src={assetUrl("/shared/logos/scandiweb.svg")} alt="scandiweb" className="h-[13px] sm:h-[15px] md:h-[17px] w-auto" />
          </a>
        </div>
        <nav className="flex items-center gap-7 text-[15px] text-white/75 font-head font-medium">
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={go(l.id)} className="hidden lg:inline hover:text-white transition">
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={go("contact")}
            className="h-10 md:h-11 inline-flex items-center px-4 md:px-6 rounded-[2px] border border-[var(--sw-beige)] text-[var(--sw-beige)] font-semibold hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition whitespace-nowrap"
          >
            Book a demo
          </a>
        </nav>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 14, filter: "blur(8px)" },
  animate: { opacity: 1, y: 0, filter: "blur(0px)" },
  transition: { duration: 1, delay, ease },
});

export function OLHero({
  name,
  line,
  body,
  secondary,
  small = false,
}: {
  name: React.ReactNode;
  line: React.ReactNode;
  body: string;
  secondary: { id: string; label: string };
  small?: boolean;
}) {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center text-center overflow-hidden">
      <LayerField contained plane={small ? 0.74 : 0.72} density={small ? 0.8 : 1} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40" style={{ background: "linear-gradient(180deg, rgba(5,7,15,0), #05070f)" }} />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(42rem 18rem at 50% 46%, rgba(5,7,15,0.62), rgba(5,7,15,0) 70%)" }}
      />
      <div className="wrap relative z-10 w-full flex flex-col items-center pt-28 pb-[22vh] md:pb-[24vh]">
        <h1 className="m-0">
          <motion.span
            {...enter(0.3)}
            className={`block bg-clip-text text-transparent font-[family-name:var(--font-inter)] font-medium leading-[0.92] tracking-[-0.065em] px-[0.05em] pb-[0.08em] ${
              small ? "text-[52px] sm:text-[80px] md:text-[104px] lg:text-[120px]" : "text-[72px] sm:text-[112px] md:text-[150px] lg:text-[176px]"
            }`}
            style={{
              backgroundImage: "linear-gradient(180deg, #ffffff 10%, #e6e9ff 55%, #9aa6f5 100%)",
              filter: "drop-shadow(0 0 48px rgba(123,134,232,0.35))",
            }}
          >
            {name}
          </motion.span>
          <motion.span {...enter(0.55)} className="block mt-4 text-white text-[26px] sm:text-[34px] md:text-[42px] leading-[1.1] tracking-[-0.025em]">
            {line}
          </motion.span>
        </h1>
        <motion.p {...enter(0.8)} className="mt-6 max-w-[36rem] text-white/75 text-[16px] md:text-[18px] leading-[1.55]">
          {body}
        </motion.p>
        <motion.div {...enter(1.05)} className="mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a href="#contact" onClick={go("contact")} className={btnMain}>
            Book a demo
          </a>
          <a href={`#${secondary.id}`} onClick={go(secondary.id)} className={btnSoft}>
            {secondary.label}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------- Stats row ---------- */

function Count({ to, decimals = 0 }: { to: number; decimals?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const run = useInView(ref, { once: true, amount: 0.8 });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!run) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return setV(to);
    const c = animate(0, to, { duration: 1.4, ease, onUpdate: setV });
    return () => c.stop();
  }, [run, to]);
  return <span ref={ref}>{v.toFixed(decimals)}</span>;
}

export type Stat = { pre?: string; n: number; post?: string; label: string; sub: string };

export function Stats({ items }: { items: Stat[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
      {items.map((s, i) => (
        <Rise key={s.label} delay={i * 0.06} className={`py-8 pr-6 ${i % 2 ? "pl-6 border-l border-white/10" : ""} ${i > 1 ? "lg:border-t-0 border-t border-white/10" : ""} ${i > 0 ? "lg:pl-8 lg:border-l lg:border-white/10" : ""}`}>
          <div className="font-head font-bold text-[var(--sw-mint)] text-[44px] md:text-[56px] leading-none tracking-[-0.03em] tabular-nums">
            {s.pre}
            <Count to={s.n} />
            {s.post}
          </div>
          <div className="mt-4 text-white text-[16px] font-semibold font-head leading-snug">{s.label}</div>
          <div className="mt-1.5 text-white/55 text-[14px] leading-relaxed">{s.sub}</div>
        </Rise>
      ))}
    </div>
  );
}

/* ---------- FAQ ---------- */

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <section id="faq" className="relative py-24 md:py-36 scroll-mt-20">
      <div className="wrap grid grid-cols-[minmax(0,1fr)] lg:grid-cols-12 gap-12 lg:gap-16">
        <Rise className="lg:col-span-4">
          <h2 className={H2}>Questions</h2>
        </Rise>
        <Rise delay={0.1} className="lg:col-span-8 border-t border-white/10">
          {items.map((x) => (
            <details key={x.q} className="group border-b border-white/10">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-white text-[19px] md:text-[22px] font-semibold font-head [&::-webkit-details-marker]:hidden">
                {x.q}
                <span aria-hidden className="relative h-4 w-4 shrink-0">
                  <span className="absolute left-0 top-1/2 h-[2px] w-4 -translate-y-1/2 bg-[var(--sw-mint)]" />
                  <span className="absolute left-1/2 top-0 h-4 w-[2px] -translate-x-1/2 bg-[var(--sw-mint)] transition-transform group-open:scale-y-0" />
                </span>
              </summary>
              <p className="pb-7 pr-10 text-white/70 text-[17px] leading-[1.65] max-w-[44rem]">{x.a}</p>
            </details>
          ))}
        </Rise>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

export function Contact({ title, body }: { title: string; body: string }) {
  return (
    <section id="contact" className="relative overflow-hidden scroll-mt-4 min-h-[100svh] flex items-center">
      <LayerField contained plane={0.4} density={0.55} />
      <div aria-hidden className="pointer-events-none absolute inset-0 z-[1]" style={{ background: "linear-gradient(180deg, rgba(5,7,15,0.2) 0%, rgba(5,7,15,0.7) 50%, rgba(5,7,15,0.95) 100%)" }} />
      <div className="wrap relative z-10 w-full py-24 md:py-28">
        <Rise className="text-center max-w-[56rem] mx-auto">
          <h2 className="font-head text-white text-[52px] sm:text-[72px] md:text-[96px] leading-[0.95] tracking-[-0.045em]" style={{ textShadow: "0 0 60px rgba(110,247,110,0.22)" }}>
            {title}
          </h2>
          <p className="mt-6 text-white/80 text-[18px] md:text-[20px] leading-[1.55] max-w-[38rem] mx-auto">{body}</p>
        </Rise>
        <Rise delay={0.1} className="mt-12 md:mt-14 max-w-[40rem] mx-auto text-left">
          <HubSpotForm portalId="25724996" formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6" region="eu1" />
        </Rise>
      </div>
    </section>
  );
}

/* ---------- Cross links ---------- */

const PAGES = [
  { slug: "", title: "OperaLayer overview" },
  { slug: "invoice-matching", title: "Invoice matching" },
  { slug: "supplier-purchasing", title: "Supplier purchasing" },
  { slug: "pricing-control", title: "Pricing control" },
];

export function MoreApps({ current }: { current: string }) {
  return (
    <div className="wrap pb-20">
      <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-baseline gap-5 md:gap-12">
        <div className="text-white/50 text-[15px] shrink-0">More from OperaLayer</div>
        <div className="flex flex-wrap gap-x-10 gap-y-3">
          {PAGES.filter((p) => p.slug !== current).map((p) => (
            <a key={p.slug || "o"} href={assetUrl(p.slug ? `/operalayer/${p.slug}` : "/operalayer")} className="font-head font-semibold text-white text-[18px] hover:text-[var(--sw-mint)] transition">
              {p.title} →
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
