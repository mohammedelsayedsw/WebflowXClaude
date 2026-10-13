/** In-page links do not scroll on their own in this app (smooth scroll on html, overflow on body), so each link scrolls itself, clear of the sticky page header. */
export function scrollToId(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const header = document.getElementById("aeo-header")?.offsetHeight ?? 0;
    const from = window.scrollY;
    const to = from + target.getBoundingClientRect().top - header;
    const started = performance.now();
    const step = (now: number) => {
      const t = Math.min(1, (now - started) / 700);
      const eased = 1 - Math.pow(1 - t, 3);
      window.scrollTo({ top: from + (to - from) * eased, behavior: "instant" });
      if (t < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
    window.history.replaceState(null, "", `#${id}`);
  };
}
