"use client";

import { assetUrl } from "@/lib/assets";
import { LangSwitcher } from "@/sections/widerrufsbutton/LangSwitcher";
import type { Lang } from "@/sections/widerrufsbutton/content";

export function Nav({
  lang,
  onLang,
  ctaLabel,
}: {
  lang: Lang;
  onLang: (l: Lang) => void;
  ctaLabel: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0a0d24]/85 backdrop-blur-md">
      <div className="wrap flex items-center justify-between h-[58px] md:h-[66px]">
        <a
          href="https://scandiweb.com/"
          aria-label="scandiweb"
          className="shrink-0"
        >
          <img
            src={assetUrl("/shared/logos/scandiweb.svg")}
            alt="scandiweb"
            className="h-[17px] md:h-[19px] w-auto"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </a>
        <div className="flex items-center gap-3 md:gap-4">
          <LangSwitcher lang={lang} onLang={onLang} />
          <a
            href="#cta"
            className="hidden sm:inline-flex items-center rounded-[2px] border border-[var(--sw-beige)] px-4 py-2 text-[var(--sw-beige)] hover:bg-[var(--sw-beige)] hover:text-[var(--sw-black)] transition font-head font-semibold text-[13px] md:text-[14px]"
          >
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
