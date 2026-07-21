"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { assetUrl } from "@/lib/assets";

export function SpeakerBio() {
  return (
    <section
      id="your-host"
      className="relative bg-[var(--sw-black)] py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.3fr] items-center">
          {/* LEFT · portrait with name and position under it */}
          <Reveal>
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-[4px] overflow-hidden border border-white/15 bg-white/[0.03]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/webinars/opera-layer/martins.png")}
                  alt="Martins Jakubovskis, Enterprise Architect at scandiweb"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-5 text-center lg:text-left">
                <div className="font-head text-white text-[18px] md:text-[20px] leading-tight">
                  Martins Jakubovskis
                </div>
                <div className="text-white/60 text-[13px] md:text-[15px] mt-1.5">
                  Enterprise Architect at scandiweb
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT · copy */}
          <div>
            <Reveal>
              <SectionLabel index="8">The speaker</SectionLabel>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-white text-[26px] sm:text-[30px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.01em] mt-6">
                Led by someone who works on this,
                <br />
                <span style={{ color: "var(--sw-mint)" }}>
                  not just talks about it
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-white/80 text-[15px] md:text-[17px] leading-relaxed max-w-[62ch]">
                Martins Jakubovskis is an Enterprise Architect at scandiweb. He
                works alongside the teams behind OperaLayer and spends his days
                deep in how large retailers connect the systems they run, so he
                can give you straight, experienced answers instead of a script.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
