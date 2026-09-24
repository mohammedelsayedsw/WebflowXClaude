"use client";

/**
 * The boxed eyebrow. Each part is held whole, so a narrow screen breaks at a
 * separator instead of mid-phrase. The parts come from `details.ts`, which is
 * where the date and time live so the hero and the final CTA cannot drift.
 */
export function Eyebrow({
  parts,
  className = "",
}: {
  parts: string[];
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center rounded-[2px] border border-white/60 px-2.5 py-1 ${className}`}
    >
      <span className="font-head text-[10px] md:text-[11px] font-semibold tracking-[0.14em] text-white/90 uppercase">
        {parts.map((part, i) => (
          <span key={part}>
            {i > 0 ? <> &middot; </> : null}
            <span className="whitespace-nowrap">{part}</span>
          </span>
        ))}
      </span>
    </div>
  );
}
