/**
 * Scroll down to the sign-up form.
 *
 * The app sets `scroll-behavior: smooth` on <html> while <body> carries the
 * overflow, and in Chrome that combination leaves every smooth scroll doing
 * nothing: a plain `href="#cta"` updates the address bar and the page stays
 * put. It affects the other pages in this app too, so rather than change the
 * global rule from a campaign page, this one animates its own scroll and asks
 * for each step instantly.
 */
export function scrollToForm(e: React.MouseEvent<HTMLAnchorElement>) {
  const cta = document.getElementById("cta");
  if (!cta) return;

  e.preventDefault();
  const from = window.scrollY;
  const to = from + cta.getBoundingClientRect().top;
  const started = performance.now();

  const step = (now: number) => {
    const t = Math.min(1, (now - started) / 700);
    const eased = 1 - Math.pow(1 - t, 3);
    window.scrollTo({ top: from + (to - from) * eased, behavior: "instant" });
    if (t < 1) window.requestAnimationFrame(step);
  };
  window.requestAnimationFrame(step);
  window.history.replaceState(null, "", "#cta");
}
