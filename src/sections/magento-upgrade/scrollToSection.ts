/**
 * Scroll to a section of this page by id.
 *
 * The app sets `scroll-behavior: smooth` on <html> while <body> carries the
 * overflow, and in Chrome that combination leaves every smooth scroll doing
 * nothing: a plain `href="#cta"` updates the address bar and the page stays
 * put. Same workaround as magento/twice-as-fast: animate the scroll here and
 * ask for each step instantly.
 */
export function scrollToSection(id: string) {
  return (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(id);
    if (!target) return;

    e.preventDefault();
    const from = window.scrollY;
    const to = from + target.getBoundingClientRect().top;
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
