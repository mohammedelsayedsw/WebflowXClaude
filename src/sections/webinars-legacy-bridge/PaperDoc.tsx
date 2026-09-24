"use client";

/**
 * The document that arrives, drawn as a sheet of paper next to the screen.
 *
 * It is deliberately plain. Its job is to be recognised as a PDF invoice in
 * half a second and then hand attention to the screen beside it, so the fields
 * that matter are legible and the rest is ruled lines.
 */

export function PaperDoc({
  kind,
  reference,
  rows,
  className = "",
}: {
  kind: string;
  reference: string;
  rows: { label: string; value: string }[];
  className?: string;
}) {
  return (
    <div
      className={`rounded-[4px] bg-white text-[var(--sw-black)] overflow-hidden ${className}`}
      style={{ boxShadow: "0 18px 44px rgba(0,0,0,0.38)" }}
    >
      <div className="px-4 py-3 md:px-5 md:py-4 border-b border-[var(--sw-black)]/10 flex items-baseline justify-between gap-3">
        <span className="font-head font-bold text-[12px] md:text-[13px] uppercase tracking-[0.1em]">
          {kind}
        </span>
        <span className="text-[10px] md:text-[11px] text-[var(--sw-black)]/50 font-mono">
          PDF
        </span>
      </div>

      <div className="px-4 py-3 md:px-5 md:py-4">
        <div className="text-[11px] md:text-[12px] text-[var(--sw-black)]/50 font-mono">
          {reference}
        </div>

        <dl className="mt-3 flex flex-col gap-2">
          {rows.map((r) => (
            <div key={r.label} className="flex items-baseline justify-between gap-3">
              <dt className="text-[10.5px] md:text-[11.5px] uppercase tracking-[0.08em] text-[var(--sw-black)]/45">
                {r.label}
              </dt>
              <dd className="font-mono text-[11.5px] md:text-[13px] text-[var(--sw-black)]/85 text-right">
                {r.value}
              </dd>
            </div>
          ))}
        </dl>

        {/* Ruled lines stand in for the rest of the page. Three of them, so the
            sheet reads as a document without competing with the screen. */}
        <div aria-hidden className="mt-4 flex flex-col gap-1.5">
          {[100, 82, 91].map((w, i) => (
            <span
              key={i}
              className="block h-[3px] rounded-[2px] bg-[var(--sw-black)]/10"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
