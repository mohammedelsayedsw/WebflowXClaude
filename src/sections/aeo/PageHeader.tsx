"use client";

import { assetUrl } from "@/lib/assets";
import { PlanLink } from "./plan";
import { scrollToId } from "./scrollTo";
import { Arrow, BTN_LIGHT, LINE_LIGHT, WRAP } from "./ui";

const LINKS = [
  { id: "coverage", label: "What’s included" },
  { id: "delivery", label: "How delivery works" },
  { id: "industry-leader", label: "Industry Leader" },
];

/** The page's own sticky bar (the site header is white-on-dark and this page opens on white): red logo, section links, call request. */
export function PageHeader() {
  return (
    <header id="aeo-header" className={`sticky top-0 z-50 border-b bg-white ${LINE_LIGHT}`}>
      <nav aria-label="Page navigation" className={`${WRAP} flex h-[72px] md:h-[88px] items-center justify-between gap-4 md:gap-8`}>
        <a href="https://scandiweb.com/" aria-label="scandiweb homepage" className="block transition-opacity hover:opacity-80">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={assetUrl("/aeo/scandiweb-red.svg")} alt="scandiweb" className="block h-auto w-[118px] min-[24.4375rem]:w-[135px] md:w-[180px]" />
        </a>
        <div className="flex items-center gap-5 lg:gap-8">
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={scrollToId(l.id)}
              className="hidden lg:inline text-[14px] text-[var(--sw-black)] hover:text-[var(--sw-blue)] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <PlanLink plan="core" className={`${BTN_LIGHT} min-h-11 px-3.5 py-2.5 text-[14px] md:min-h-12 md:px-6 md:py-3 md:text-[17px]`}>
            Request a call <Arrow />
          </PlanLink>
        </div>
      </nav>
    </header>
  );
}
