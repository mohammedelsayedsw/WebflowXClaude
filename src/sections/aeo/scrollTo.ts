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
