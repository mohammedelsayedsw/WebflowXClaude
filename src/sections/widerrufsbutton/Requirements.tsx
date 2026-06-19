"use client";

import { MousePointerClick, ListChecks, MailCheck, FileText } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import type { Content } from "@/sections/widerrufsbutton/content";

const icons = [MousePointerClick, ListChecks, MailCheck, FileText];

export function Requirements({ t }: { t: Content["requirements"] }) {
  return (
    <section id="requirements" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            {t.eyebrow}
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[24ch]">
            {t.h2}{" "}
            <span className="text-[var(--sw-blue)]">{t.h2accent}</span>
            {t.h2tail}
          </h2>
          <p className="mt-7 max-w-[90ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            {t.intro}
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2">
          {t.items.map((r, i) => {
            const Icon = icons[i] ?? MousePointerClick;
            return (
              <Reveal key={r.title} delay={(i % 2) * 0.08}>
                <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-[2px] bg-[var(--sw-blue)]/10">
                      <Icon className="h-[18px] w-[18px] text-[var(--sw-blue)]" />
                    </span>
                    <div className="label-code text-[var(--sw-black)]/55">{r.tag}</div>
                  </div>
                  <h3 className="font-head text-[var(--sw-black)] text-[20px] md:text-[24px] leading-[1.15]">
                    {r.title}
                  </h3>
                  <p className="mt-4 text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed">
                    {r.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
