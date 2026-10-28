"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { CC, fmt, loadModel, searchBrands, type Brand, type Model } from "./data";
import { useGo } from "./nav";

/** Company search with keyboard selection. The full dataset loads on first focus if it has not loaded yet. */
export function Search({ model, need }: { model: Model | null; need: () => void }) {
  const go = useGo();
  const [q, setQ] = useState("");
  const [open, setOpen] = useState(false);
  const [sel, setSel] = useState(0);
  const box = useRef<HTMLDivElement>(null);
  const hits: Brand[] = model ? searchBrands(model, q) : [];

  useEffect(() => {
    const close = (e: MouseEvent) => { if (!box.current?.contains(e.target as Node)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  const pick = (b: Brand) => {
    setOpen(false);
    setQ("");
    go({ kind: "company", k: b.k, cc: b.home });
  };

  return (
    <div ref={box} className="search">
      <input
        id="ar-q"
        type="text"
        autoComplete="off"
        spellCheck={false}
        placeholder="Type your company name"
        aria-label="Company name"
        role="combobox"
        aria-expanded={open && !!q.trim()}
        aria-controls="ar-sugg"
        aria-autocomplete="list"
        value={q}
        onFocus={() => { need(); setOpen(true); }}
        onChange={(e) => { setQ(e.target.value); setSel(0); setOpen(true); }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") { e.preventDefault(); setSel((s) => Math.min(hits.length - 1, s + 1)); }
          else if (e.key === "ArrowUp") { e.preventDefault(); setSel((s) => Math.max(0, s - 1)); }
          else if (e.key === "Enter") { e.preventDefault(); if (hits[sel]) pick(hits[sel]); }
          else if (e.key === "Escape") setOpen(false);
        }}
      />
      <span className="search-k" aria-hidden>↵</span>
      {open && q.trim() && (
        <ul id="ar-sugg" role="listbox" className="sugg">
          {!model ? (
            <li className="empty">Loading companies</li>
          ) : hits.length === 0 ? (
            <li className="empty">No company called &ldquo;{q.trim()}&rdquo; in the ranking. Try a shorter name.</li>
          ) : (
            hits.map((b, i) => {
              const r = b.cr[b.home!]!;
              const best = Math.max(...CC.map((cc) => b.cr[cc]?.sc ?? 0));
              return (
                <li
                  key={b.k}
                  role="option"
                  aria-selected={i === sel}
                  onMouseEnter={() => setSel(i)}
                  onMouseDown={(e) => { e.preventDefault(); pick(b); }}
                >
                  <span className="s-n">{b.n}</span>
                  <span className="s-m">{r.ind} · {CC.filter((cc) => b.cr[cc]).join(" · ")}</span>
                  <span className="s-s">{fmt(best, 0)}</span>
                </li>
              );
            })
          )}
        </ul>
      )}
    </div>
  );
}

/** The search box on its own, for pages outside the ranking: loads the dataset on first focus, opens the company on the ranking. */
export function SearchBox() {
  const [model, setModel] = useState<Model | null>(null);
  const need = useCallback(() => { loadModel().then(setModel, () => {}); }, []);
  return <Search model={model} need={need} />;
}
