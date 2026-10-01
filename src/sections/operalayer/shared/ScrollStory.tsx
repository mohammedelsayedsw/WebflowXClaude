"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";

export type Step = { title: string; body: string };

/**
 * Hero plus pinned scroll story.
 *
 * The section is (steps + 1) screens tall. Its content is pinned to the
 * viewport and shows one step at a time, picked from scroll position, so the
 * scrollbar and links keep working. While pinned, a wheel gesture, swipe or
 * arrow key moves exactly one step (see the effect below).
 *
 * Stages are drawn in a 5:4 box and are a pure function of the step index.
 */
const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

function jumpTo(top: number, ms = 750, done?: () => void) {
  const from = window.scrollY;
  const started = performance.now();
  const tick = (now: number) => {
    const t = Math.min(1, (now - started) / ms);
    const e = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    window.scrollTo({ top: from + (top - from) * e, behavior: "instant" });
    if (t < 1) requestAnimationFrame(tick);
    else done?.();
  };
  requestAnimationFrame(tick);
}

export function ScrollStory({
  intro,
  steps,
  Stage,
  wide = false,
}: {
  intro: React.ReactNode;
  steps: Step[];
  Stage: (p: { step: number }) => React.ReactNode;
  /** give the stage most of the width, for app screenshots */
  wide?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const total = steps.length + 1;
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = Math.min(total - 1, Math.max(0, Math.round(p * (total - 1))));
    setActive((cur) => (cur === i ? cur : i));
  });

  // While the story is pinned, one gesture moves exactly one step. Momentum
  // from the same gesture is swallowed, so a fast flick never skips steps.
  // Past the last step (or above the first) the page scrolls normally.
  useEffect(() => {
    let busy = false;
    let last = 0;
    let used = false;
    let touchY: number | null = null;

    const state = () => {
      const el = ref.current;
      if (!el) return null;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const pinned = r.top <= 1 && r.bottom >= vh - 1;
      const cur = Math.round(-r.top / vh);
      return { el, vh, pinned, cur };
    };

    const step = (dir: number) => {
      const s = state();
      if (!s || !s.pinned) return false;
      const next = s.cur + dir;
      if (next < 0 || next > total - 1) return false;
      busy = true;
      jumpTo(s.el.offsetTop + next * s.vh, 750, () => {
        busy = false;
      });
      return true;
    };

    const onWheel = (e: WheelEvent) => {
      const s = state();
      if (!s || !s.pinned || Math.abs(e.deltaY) < 2) return;
      const dir = Math.sign(e.deltaY);
      const next = s.cur + dir;
      if (next < 0 || next > total - 1) {
        if (!busy) return;
      }
      e.preventDefault();
      const now = performance.now();
      if (now - last > 220) used = false;
      last = now;
      if (busy || used) return;
      used = true;
      step(dir);
    };

    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const s = state();
      if (touchY === null || !s || !s.pinned) return;
      const dy = touchY - e.touches[0].clientY;
      const next = s.cur + Math.sign(dy);
      if (busy || (next >= 0 && next <= total - 1)) e.preventDefault();
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchY === null) return;
      const dy = touchY - e.changedTouches[0].clientY;
      touchY = null;
      if (!busy && Math.abs(dy) > 30) step(Math.sign(dy));
    };
    const onKey = (e: KeyboardEvent) => {
      const down = ["ArrowDown", "PageDown", " "].includes(e.key);
      const up = ["ArrowUp", "PageUp"].includes(e.key);
      if (!down && !up) return;
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (busy) return e.preventDefault();
      if (step(down ? 1 : -1)) e.preventDefault();
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: false });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      window.removeEventListener("keydown", onKey);
    };
  }, [total]);

  const goTo = (i: number) => {
    const el = ref.current;
    if (!el) return;
    jumpTo(el.offsetTop + i * window.innerHeight);
  };

  const step = active > 0 ? steps[active - 1] : null;

  return (
    <section
      ref={ref}
      className="relative"
      style={{
        height: `${total * 100}vh`,
        background:
          "radial-gradient(1100px 760px at 78% 30%, #1d2566 0%, transparent 60%), #0e1230",
      }}
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className={`wrap w-full h-full grid grid-cols-[minmax(0,1fr)] grid-rows-[auto_1fr] lg:grid-rows-1 ${wide ? "lg:grid-cols-[minmax(0,0.5fr)_minmax(0,1.5fr)] gap-x-12" : "lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] gap-x-14"} items-center pt-[84px] pb-14 lg:pt-[75px] lg:pb-10`}>
          <div className="relative min-h-[230px] lg:min-h-0">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.38, ease }}
              >
                {step ? (
                  <div>
                    <h2 className={`font-head text-white text-[28px] md:text-[40px] ${wide ? "lg:text-[38px]" : "lg:text-[46px]"} leading-[1.08] max-w-[16ch] text-balance`}>
                      {step.title}
                    </h2>
                    <p className={`mt-4 lg:mt-6 text-white/70 text-[16px] md:text-[19px] ${wide ? "lg:text-[17px]" : ""} leading-relaxed max-w-[36ch]`}>
                      {step.body}
                    </p>
                  </div>
                ) : (
                  intro
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative h-full min-h-0 flex items-center justify-center">
            <div
              className="w-full"
              style={{ maxWidth: wide ? "min(100%, calc((100vh - 170px) * 1.6))" : "min(100%, calc((100vh - 190px) * 1.25))" }}
            >
              <Stage step={active} />
            </div>
          </div>
        </div>

        <div className="absolute bottom-5 lg:bottom-7 left-1/2 -translate-x-1/2 flex gap-2">
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Step ${i + 1}`}
              onClick={() => goTo(i)}
              className="h-5 flex items-center"
            >
              <span
                className="block h-1 rounded-full transition-all duration-500"
                style={{
                  width: i === active ? 28 : 8,
                  background: i === active ? "var(--sw-mint)" : "rgba(255,255,255,0.22)",
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Size of a stage box in px, so stages can move things with transforms. */
export function useBox<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [box, setBox] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => {
      const { width, height } = e.contentRect;
      setBox((b) => (b.w === width && b.h === height ? b : { w: width, h: height }));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return { ref, ...box };
}
