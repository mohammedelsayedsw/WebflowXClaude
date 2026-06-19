"use client";

import { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { LANGS, type Lang } from "@/sections/widerrufsbutton/content";

export function LangSwitcher({
  lang,
  onLang,
}: {
  lang: Lang;
  onLang: (l: Lang) => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const current = LANGS.find((l) => l.id === lang) ?? LANGS[0];

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Choose language"
        className="inline-flex items-center gap-2 rounded-[2px] border border-white/20 bg-white/[0.05] px-3 py-2 text-white/85 hover:text-white text-[13px] font-head font-semibold transition"
      >
        <Globe className="h-4 w-4" />
        <span>{current.label}</span>
      </button>
      {open && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-[160px] rounded-[2px] border border-white/15 bg-[var(--sw-black)] py-1 z-50"
          style={{ boxShadow: "0 20px 50px -20px rgba(0,0,0,0.8)" }}
        >
          {LANGS.map((l) => (
            <button
              key={l.id}
              type="button"
              role="option"
              aria-selected={l.id === lang}
              onClick={() => {
                onLang(l.id);
                setOpen(false);
              }}
              className={`w-full flex items-center justify-between gap-3 px-3.5 py-2 text-[13px] text-left transition ${
                l.id === lang
                  ? "text-[var(--sw-mint)]"
                  : "text-white/75 hover:text-white hover:bg-white/[0.04]"
              }`}
            >
              <span>{l.name}</span>
              {l.id === lang && <Check className="h-3.5 w-3.5 shrink-0" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
