"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";

type Accelerator = {
  slug: string;
  vertical: string;
  forWhom: string;
  weeks: string;
  capabilities: string[];
  accent: string;
  label?: string;
};

export function AcceleratorCards({ accelerators }: { accelerators: Accelerator[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollerRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <div>
      {/* Scroll controls — circular arrow buttons above the row */}
      <div className="flex justify-end gap-3 mb-5">
        <button
          type="button"
          onClick={() => scroll(-1)}
          aria-label="Scroll left"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-all hover:bg-white/10"
          style={{ border: "1px solid rgba(255,255,255,0.3)" }}
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => scroll(1)}
          aria-label="Scroll right"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-white transition-all hover:bg-white/10"
          style={{ border: "1px solid rgba(255,255,255,0.3)" }}
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-5 md:gap-6 overflow-x-auto pb-3 snap-x [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {accelerators.map((a) => (
          <Link
            key={a.slug}
            href={`/accelerator/${a.slug}`}
            className="group relative flex flex-col shrink-0 w-[280px] sm:w-[300px] snap-start overflow-hidden rounded-[4px] p-6 md:p-7 transition-all hover:-translate-y-0.5"
            style={{
              background:
                "linear-gradient(160deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 45%, rgba(255,255,255,0.03) 100%), rgba(16,19,44,0.55)",
              border: "1px solid rgba(255,255,255,0.12)",
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.10), inset 0 -1px 0 rgba(255,255,255,0.04)",
            }}
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{ background: a.accent, opacity: 0.85 }}
            />
            <div
              aria-hidden="true"
              className="absolute -top-24 -right-24 h-56 w-56 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none"
              style={{ background: a.accent, filter: "blur(110px)" }}
            />

            <div className="relative flex items-center justify-between gap-4 mb-4">
              <span
                className="font-head text-[11px] tracking-[0.14em] uppercase font-semibold"
                style={{ color: a.accent }}
              >
                {a.weeks}
              </span>
              <ArrowUpRight className="h-5 w-5 text-white/60 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>

            <h3 className="font-head relative text-white text-[21px] md:text-[23px] leading-[1.12] tracking-[-0.005em] font-medium mb-4">
              {a.vertical}
            </h3>

            <div className="font-head relative text-[11px] tracking-[0.14em] uppercase font-semibold text-white/40 mb-3">
              What you get
            </div>

            <ul className="relative space-y-2.5 mb-6">
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

            <div
              className="font-head relative mt-auto inline-flex items-center gap-2 text-white text-[14px] font-medium pt-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)", width: "100%" }}
            >
              See accelerator
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
