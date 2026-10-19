"use client";

import { assetUrl } from "@/lib/assets";
import { useEffect, useState } from "react";
import { ARI_GET, ARI_INSTALL, ARI_WHY } from "./ariLinks";

const LINKS = [
  { href: ARI_WHY, label: "Why we built it" },
  { href: "/solutions/magento/expedio#demo", label: "Demo" },
  { href: "/solutions/magento/expedio#benchmark", label: "Benchmark" },
  { href: ARI_INSTALL, label: "Install with Ari" },
];

const CTA =
  "h-10 md:h-11 shrink-0 whitespace-nowrap inline-flex items-center px-4 md:px-6 rounded-[2px] border border-[var(--sw-beige)] text-[var(--sw-beige)] font-semibold hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition";

/**
 * The nav: transparent over the hero, then a dark glass bar once you scroll.
 * Below lg the links move into a menu behind a button, same links as desktop.
 */
export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const solid = scrolled || open;
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-[background,box-shadow] duration-300 ${
        solid ? "bg-[rgba(5,7,15,0.9)] backdrop-blur-[14px] shadow-[0_1px_0_rgba(255,255,255,0.08)]" : "bg-transparent"
      }`}
    >
      <div className={`wrap flex transition-[height] duration-300 ${scrolled ? "h-[60px] md:h-[68px]" : "h-[64px] md:h-[80px]"} items-center justify-between gap-4`}>
        <a href="/solutions/magento/expedio" className="flex items-center gap-3 sm:gap-4 min-w-0" aria-label="scandiweb and Ari">
          <img src={assetUrl("/shared/logos/scandiweb.svg")} alt="scandiweb" className="h-[12px] sm:h-[14px] md:h-[17px] w-auto" />
          <span aria-hidden className="h-[20px] md:h-[26px] w-px bg-white/35" />
          <img src={assetUrl("/magento/expedio/ari.svg")} alt="Ari" className="h-[18px] sm:h-[21px] md:h-[25px] w-auto" />
        </a>
        <nav className="flex items-center gap-7 text-[15px] text-white/75 font-[family-name:var(--font-golos)] font-medium">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} className="hidden lg:inline hover:text-white transition">
              {l.label}
            </a>
          ))}
          <a href={ARI_GET} className={`max-sm:!hidden ${CTA}`}>
            Get Expedio
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden relative h-10 w-10 -mr-2 grid place-items-center"
          >
            <span className={`absolute h-[2px] w-6 bg-white transition-transform ${open ? "rotate-45" : "-translate-y-[7px]"}`} />
            <span className={`absolute h-[2px] w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute h-[2px] w-6 bg-white transition-transform ${open ? "-rotate-45" : "translate-y-[7px]"}`} />
          </button>
        </nav>
      </div>

      {open && (
        <div id="mobile-menu" className="lg:hidden h-[calc(100svh-60px)] overflow-y-auto border-t border-white/10">
          <nav className="wrap flex flex-col pt-4 pb-10">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-5 border-b border-white/10 text-white text-[24px] font-semibold font-[family-name:var(--font-golos)]"
              >
                {l.label}
              </a>
            ))}
            <a href={ARI_GET} onClick={() => setOpen(false)} className={`mt-8 justify-center ${CTA} !h-12 !text-[17px]`}>
              Get Expedio
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
