"use client";

import type { Lang } from "./content";

export function LangToggle({
  lang,
  onLang,
}: {
  lang: Lang;
  onLang: (l: Lang) => void;
}) {
  const opts: { id: Lang; label: string }[] = [
    { id: "en", label: "EN" },
    { id: "de", label: "DE" },
  ];
  return (
    <div
      className="inline-flex items-center rounded-[2px] border border-white/20 bg-white/[0.04] p-0.5"
      role="group"
      aria-label="Language"
    >
      {opts.map((o) => (
        <button
          key={o.id}
          type="button"
          onClick={() => onLang(o.id)}
          aria-pressed={lang === o.id}
          className={`px-3.5 py-1.5 text-[12px] font-head font-semibold tracking-[0.08em] rounded-[2px] transition ${
            lang === o.id
              ? "bg-[var(--sw-beige)] text-[var(--sw-black)]"
              : "text-white/65 hover:text-white"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
