"use client";

import { Reveal } from "@/components/primitives/Reveal";

export type Row = { title: string; body: string };

/** Section heading on the left, hairline rows on the right. */
export function Rows({
  id,
  eyebrow,
  title,
  accent,
  intro,
  rows,
  bg = "#05070f",
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  accent: string;
  intro: string;
  rows: Row[];
  bg?: string;
  children?: React.ReactNode;
}) {
  return (
    <section id={id} className="relative z-10 py-24 md:py-32" style={{ background: bg }}>
      <div className="wrap grid gap-10 md:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
        <Reveal>
          <div className="label-code text-white/45">{eyebrow}</div>
          <h2 className="mt-6 font-head text-white text-[34px] md:text-[48px] leading-[1.05] max-w-[16ch]">
            {title} <span style={{ color: "var(--sw-mint)" }}>{accent}</span>
          </h2>
          <p className="mt-6 text-white/70 text-[15px] md:text-[17px] leading-relaxed max-w-[44ch]">{intro}</p>
        </Reveal>
        <div>
          <div className="border-t border-white/10">
            {rows.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.07}>
                <div className="grid md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-2 md:gap-10 py-7 border-b border-white/10">
                  <h3 className="font-head font-semibold text-white text-[20px] md:text-[22px] leading-[1.2]">{r.title}</h3>
                  <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed">{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          {children}
        </div>
      </div>
    </section>
  );
}
