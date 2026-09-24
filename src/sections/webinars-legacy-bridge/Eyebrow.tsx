"use client";

import { EYEBROW_PARTS } from "./details";

/**
 * The boxed eyebrow, shared by the hero and the final CTA so the two can never
 * drift apart. Each part is held whole, so a narrow screen breaks at a
 * separator instead of mid-phrase.
 */
export function Eyebrow({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 ${className}`}
    >
      <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
        {EYEBROW_PARTS.map((part, i) => (
          <span key={part}>
            {i > 0 ? <> &middot; </> : null}
            <span className="whitespace-nowrap">{part}</span>
          </span>
        ))}
      </span>
    </div>
  );
}
