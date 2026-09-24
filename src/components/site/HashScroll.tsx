"use client";

/**
 * Make a `#section` in the address bar actually land on that section.
 *
 * Two things stop the browser doing it on its own here.
 *
 * The app sets `scroll-behavior: smooth` on <html> while <body> carries the
 * overflow, and in Chrome that combination leaves every smooth scroll doing
 * nothing. It is the same fault `scrollToSection` works around for in-page
 * links, except a link arriving with the hash already in the URL has no click
 * to intercept, so it needs handling on mount instead.
 *
 * And the page grows after first paint: the HubSpot embeds render their fields
 * a beat late and push everything below them down. A single jump on mount
 * lands on a position that is correct at the time and wrong a moment later, so
 * this re-checks over a short window.
 *
 * Re-checking stops the moment the visitor scrolls, or the page would fight
 * anyone who started reading before it settled.
 */

import { useEffect } from "react";

const RETRY_MS = [0, 120, 400, 900, 1600, 2500, 3500];

export function HashScroll() {
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!id) return;

    let stopped = false;
    const timers: number[] = [];

    const stop = () => {
      stopped = true;
      timers.forEach((t) => window.clearTimeout(t));
    };

    const jump = () => {
      if (stopped) return;
      const el = document.getElementById(id);
      // scrollIntoView honours the section's scroll-margin-top, which a manual
      // scrollTo would ignore and land flush against the header.
      el?.scrollIntoView({ behavior: "instant" as ScrollBehavior, block: "start" });
    };

    // Anything that means the visitor has taken over.
    const events = ["wheel", "touchstart", "keydown", "pointerdown"] as const;
    events.forEach((e) => window.addEventListener(e, stop, { passive: true, once: true }));

    RETRY_MS.forEach((ms) => timers.push(window.setTimeout(jump, ms)));

    return () => {
      stop();
      events.forEach((e) => window.removeEventListener(e, stop));
    };
  }, []);

  return null;
}
