"use client";

import { Check } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";
import type { Content } from "@/sections/widerrufsbutton/content";

export function CTA({ t }: { t: Content["cta"] }) {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 overflow-hidden border-t border-white/10"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 80% 80%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1200px 800px at 50% 50%, #1a2060 0%, #141a48 40%, #10132c 80%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <div className="label-code text-white/55 mb-5">{t.eyebrow}</div>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[60px] leading-[1.04] max-w-[16ch]">
              {t.h2}{" "}
              <span className="text-[var(--sw-mint)]">{t.h2accent}</span>
              {t.h2tail}
            </h2>
            <p className="mt-6 text-white/80 max-w-[50ch] text-[16px] md:text-[17px] leading-relaxed">
              {t.body}
            </p>

            <ul className="mt-10 space-y-2.5 text-[13px] md:text-[14px] text-white/80">
              {t.points.map((p) => (
                <li key={p} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-[var(--sw-mint)] shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-14 w-14 rounded-full overflow-hidden bg-white/10 border border-white/15 flex items-center justify-center shrink-0">
                {/* TODO: replace the initials avatar with a real photo of Aigars */}
                <span className="font-head font-bold text-white/80 text-[20px]">A</span>
              </div>
              <div>
                <div className="font-head font-semibold text-white text-[15px]">
                  Aigars
                </div>
                <div className="text-white/55 text-[13px]">{t.contactRole}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <HubSpotForm
              portalId="25724996"
              formId="65eb4cb9-1c45-499c-86bc-f97a690a38d2"
              region="eu1"
            />
            <p className="label-code text-white/45 mt-3 px-1">{t.formNote}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
