"use client";

import {
  MousePointerClick,
  ListChecks,
  MailCheck,
  UserCheck,
  ClipboardList,
  Wallet,
} from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import type { Content } from "@/sections/widerrufsbutton/content";

const icons = [
  MousePointerClick,
  ListChecks,
  MailCheck,
  UserCheck,
  ClipboardList,
  Wallet,
];

export function Solution({ t }: { t: Content["solution"] }) {
  return (
    <section id="solution" className="bg-lp-bright py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <div className="label-code text-[var(--sw-black)]/55 mb-5">
            {t.eyebrow}
          </div>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[22ch]">
            {t.h2}{" "}
            <span className="text-[var(--sw-blue)]">{t.h2accent}</span>
            {t.h2tail}
          </h2>
          <p className="mt-7 max-w-[68ch] text-[15px] md:text-[17px] leading-relaxed text-[var(--sw-black)]/70">
            {t.intro}
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid gap-5 md:gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.items.map((it, i) => {
            const Icon = icons[i] ?? MousePointerClick;
            return (
              <Reveal key={it.title} delay={(i % 3) * 0.07}>
                <article className="h-full rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-7 md:p-8">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-[2px] bg-[var(--sw-blue)]/10 mb-5">
                    <Icon className="h-5 w-5 text-[var(--sw-blue)]" />
                  </span>
                  <h3 className="font-head text-[var(--sw-black)] text-[18px] md:text-[20px] leading-[1.2]">
                    {it.title}
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[15px] text-[var(--sw-black)]/70 leading-relaxed">
                    {it.body}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-12 text-[12px] md:text-[13px] text-[var(--sw-black)]/45 leading-relaxed max-w-[78ch]">
            {t.disclaimer}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
