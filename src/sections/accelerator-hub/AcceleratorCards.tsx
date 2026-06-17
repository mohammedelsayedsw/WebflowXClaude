"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

type Accelerator = {
  slug: string;
  vertical: string;
  forWhom: string;
  weeks: string;
  capabilities: string[];
  accent: string;
  label?: string;
};

// Industry icons (inline, 24px, currentColor — not recolored).
const ICONS: Record<string, React.ReactNode> = {
  "school-photography": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M3 7h3l2-3h8l2 3h3a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1z" />
      <circle cx="12" cy="13" r="3.5" />
    </svg>
  ),
  "school-uniform": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  ),
  "diy-building-materials": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5" />
      <path d="M4 15v-3a6 6 0 0 1 6-6" />
      <path d="M14 6a6 6 0 0 1 6 6v3" />
      <rect x="2" y="15" width="20" height="4" rx="1" />
    </svg>
  ),
  "trading-cards": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="9" y="3" width="11" height="15" rx="2" />
      <path d="M15 18v1a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1" />
    </svg>
  ),
  "k-12": (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="8" width="16" height="12" rx="2" />
      <path d="M12 8V4.5" />
      <circle cx="12" cy="3.5" r="1" />
      <path d="M9 13v1.5" />
      <path d="M15 13v1.5" />
      <path d="M2 14h2" />
      <path d="M20 14h2" />
    </svg>
  ),
};

export function AcceleratorCards({ accelerators }: { accelerators: Accelerator[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>({});
  const toggle = (slug: string) => setOpen((o) => ({ ...o, [slug]: !o[slug] }));

  return (
    <div className="flex flex-col gap-4">
      {accelerators.map((a) => {
        const isOpen = !!open[a.slug];
        return (
          <div
            key={a.slug}
            className="relative overflow-hidden rounded-[4px]"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.03) 100%), rgba(16,19,44,0.55)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* colored accent line */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-[3px]"
              style={{ background: a.accent, opacity: 0.85 }}
            />

            {/* collapsed header — click to expand */}
            <button
              type="button"
              onClick={() => toggle(a.slug)}
              aria-expanded={isOpen}
              className="w-full flex items-center gap-4 md:gap-5 text-left px-6 md:px-7 py-5 md:py-6"
            >
              <span className="shrink-0 text-white">{ICONS[a.slug]}</span>
              <h3 className="flex-1 min-w-0 font-head text-white text-[19px] md:text-[22px] leading-[1.15] tracking-[-0.005em] font-medium">
                {a.vertical}
              </h3>
              <span
                className="hidden sm:block shrink-0 font-head text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ color: a.accent }}
              >
                {a.weeks}
              </span>
              <ChevronDown
                className={`shrink-0 h-5 w-5 text-white/60 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* expanded content */}
            {isOpen && (
              <div className="px-6 md:px-7 pb-6 md:pb-7 pl-[calc(1.5rem+1.75rem)] md:pl-[calc(1.75rem+2rem)]">
                <div className="font-head text-[11px] tracking-[0.14em] uppercase font-semibold text-white/40 mb-3">
                  What you get
                </div>
                <ul className="space-y-2.5 mb-6">
                  {a.capabilities.map((c) => (
                    <li
                      key={c}
                      className="flex items-baseline gap-2.5 text-white/80 text-[13.5px] md:text-[14px]"
                    >
                      <span
                        aria-hidden="true"
                        className="w-1.5 h-1.5 rotate-45 inline-block flex-shrink-0 mt-[6px]"
                        style={{ background: a.accent }}
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/accelerator/${a.slug}`}
                  className="font-head inline-flex items-center gap-2 text-white text-[14px] font-medium hover:opacity-80 transition-opacity"
                >
                  See accelerator
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
