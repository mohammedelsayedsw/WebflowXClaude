"use client";

import { assetUrl } from "@/lib/assets";

/**
 * Sportland, Bloomreach, and scandiweb together. Bloomreach has no logo file
 * in the repo yet, so it shows as a wordmark until one is added.
 */
export function BrandLockup({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const text = tone === "dark" ? "text-white/70" : "text-[var(--sw-black)]/70";
  const filter = tone === "dark" ? "brightness(0) invert(1)" : "none";

  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
      <span className={`label-code text-[10px] ${text}`}>Brought to you by</span>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetUrl("/shared/logos/clients/sportland.png")}
        alt="Sportland"
        className="w-auto opacity-80"
        style={{ maxHeight: "26px", height: "auto", filter }}
      />

      {/* TODO: Bloomreach logo path */}
      <span
        className={`font-head font-bold text-[19px] tracking-[-0.01em] opacity-80 ${
          tone === "dark" ? "text-white" : "text-[var(--sw-black)]"
        }`}
      >
        Bloomreach
      </span>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetUrl("/shared/logos/scandiweb.svg")}
        alt="scandiweb"
        className="w-auto opacity-80"
        style={{ maxHeight: "22px", height: "auto", filter }}
      />
    </div>
  );
}
