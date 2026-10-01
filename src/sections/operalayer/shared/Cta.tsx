"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { HubSpotForm } from "@/components/site/HubSpotForm";

export function Cta({
  heading,
  body,
  points,
}: {
  heading: React.ReactNode;
  body: string;
  points: string[];
}) {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 overflow-hidden scroll-mt-20"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 80% 80%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1200px 800px at 50% 50%, #1a2060 0%, #141a48 40%, #10132c 80%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[58px] leading-[1.04] max-w-[15ch]">
              {heading}
            </h2>
            <p className="mt-6 text-white/75 max-w-[46ch] text-[16px] md:text-[18px] leading-relaxed">
              {body}
            </p>
            <ul className="mt-9 border-t border-white/10 max-w-[46ch]">
              {points.map((p, i) => (
                <li
                  key={p}
                  className="flex gap-4 items-baseline border-b border-white/10 py-3.5 text-white/85 text-[15px] md:text-[16px]"
                >
                  <span className="label-code text-[var(--sw-mint)] w-5 shrink-0">{i + 1}</span>
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <HubSpotForm
              portalId="25724996"
              formId="520a2e9a-5eb9-4ca9-a1d0-13e8f339f4b6"
              region="eu1"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
