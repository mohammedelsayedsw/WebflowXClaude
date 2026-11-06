"use client";

/** Shared type and spacing for /chat-to-buy/free-demo. Same system as /ai-visibility-package. */

export const LAVENDER = "#f0f1fa";
export const LINE_LIGHT = "border-[#dfe1f0]";

export const H2_DARK =
  "font-head font-bold text-white text-[30px] sm:text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.02em]";
/** Section padding: modest, scaled to screen height so every section fits one screen without stretching to fill it. */
export const SECTION_Y = "py-[clamp(40px,7vh,64px)] md:py-[clamp(40px,8vh,96px)]";

/**
 * In-page links do not scroll on their own in this app (smooth scroll on html, overflow on body), so each link scrolls itself.
 * The target is re-measured every frame, so images loading on the way down cannot leave the scroll short.
 */
export function scrollToId(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const from = window.scrollY;
    const started = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - started) / 700);
      const eased = 1 - Math.pow(1 - t, 3);
      const to = window.scrollY + target.getBoundingClientRect().top;
      window.scrollTo({ top: from + (to - from) * eased, behavior: "instant" });
      if (t < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
    window.history.replaceState(null, "", `#${id}`);
  };
}
