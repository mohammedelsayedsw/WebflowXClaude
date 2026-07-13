"use client";

import { ArrowUpRight } from "lucide-react";

export function SessionOneRecap() {
  return (
    <section
      aria-label="Session one recap"
      className="bg-[var(--sw-black)] border-y border-white/10"
    >
      <div className="wrap py-5 md:py-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8">
        <p className="text-white/55 text-[13px] md:text-[14px] leading-relaxed flex-1">
          This is the second session on ChatGPT and Claude apps. The first
          showed the customer side, a shopper finding a gift and checking out
          inside the chat. If you missed it, catch up here.
        </p>
        <a
          href="https://youtu.be/kY-MZtjSi9c"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-[2px] border border-white/25 px-3.5 py-2 font-head font-semibold text-[12.5px] md:text-[13px] text-white/85 hover:border-white/55 hover:text-white transition"
        >
          Watch the first session
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </section>
  );
}
