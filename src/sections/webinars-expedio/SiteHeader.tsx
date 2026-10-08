"use client";

import { useEffect, useState } from "react";
import { Lockup } from "./Lockup";

const CTA =
  "h-10 md:h-11 shrink-0 whitespace-nowrap inline-flex items-center px-4 md:px-6 rounded-[2px] border border-[var(--sw-beige)] text-[var(--sw-beige)] font-head font-semibold text-[15px] hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition";

/**
 * The co-branded header, built like the one on /magento/expedio: the
 * scandiweb and ReadyMage marks on the left, transparent over the hero and a
 * dark glass bar once you scroll. The site Header skips this route.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-[background,box-shadow] duration-300 motion-reduce:transition-none ${
        scrolled ? "bg-[rgba(5,7,15,0.9)] backdrop-blur-[14px] shadow-[0_1px_0_rgba(255,255,255,0.08)]" : "bg-transparent"
      }`}
    >
      <div
        className={`wrap flex items-center justify-between gap-4 transition-[height] duration-300 motion-reduce:transition-none ${
          scrolled ? "h-[60px] md:h-[68px]" : "h-[64px] md:h-[80px]"
        }`}
      >
        <a href="#hero" className="min-w-0 scale-[0.75] sm:scale-[0.85] md:scale-100 origin-left">
          <Lockup />
        </a>
        <a href="#cta" className={CTA}>
          Save your seat
        </a>
      </div>
    </header>
  );
}
