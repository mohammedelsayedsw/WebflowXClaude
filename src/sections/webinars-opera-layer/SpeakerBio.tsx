"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { assetUrl } from "@/lib/assets";

const focus: string[] = [
  "Enterprise architecture",
  "Systems integration",
  "Data & automation",
];

export function SpeakerBio() {
  return (
    <section
      id="your-host"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.3fr] items-center">
          {/* LEFT · portrait */}
          <Reveal>
            <div className="flex justify-center lg:justify-start">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-[4px] overflow-hidden border border-white/15 bg-white/[0.03]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/webinars/opera-layer/martins.png")}
                  alt="Martins Jakubovskis, Enterprise Architect at scandiweb"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </Reveal>

          {/* RIGHT · copy */}
          <div>
            <Reveal>
              <SectionLabel index="6">The speaker</SectionLabel>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[30px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.01em] mt-6">
                Led by an architect who builds this,
                <br />
                <span style={{ color: "var(--sw-mint)" }}>
                  not a sales rep
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-white/80 text-[15px] md:text-[17px] leading-relaxed max-w-[62ch]">
                Martins Jakubovskis is an Enterprise Architect at scandiweb,
                where he designs the operational layer that connects ERP, CRM,
                e-commerce, and warehouse systems. He works hands-on with the
                teams shipping OperaLayer modules, so he is the right person to
                answer your questions and share the lessons from real builds.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 md:mt-9 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div>
                  <div className="font-head text-white text-[18px] md:text-[20px] leading-tight">
                    Martins Jakubovskis
                  </div>
                  <div className="text-white/60 text-[13px] md:text-[15px] mt-1.5">
                    Enterprise Architect at scandiweb
                  </div>
                </div>
                <div className="hidden sm:block w-px self-stretch bg-white/15" />
                <div className="flex flex-wrap gap-2">
                  {focus.map((f) => (
                    <span
                      key={f}
                      className="inline-flex items-center rounded-[2px] border border-white/12 bg-white/[0.04] px-2.5 py-1 text-white/70 text-[12px] font-head"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
