"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

export function SpeakerBio() {
  return (
    <section
      id="your-host"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <div className="grid gap-10 md:gap-14 lg:grid-cols-[1fr_1.3fr] items-center">
          {/* LEFT · portrait with name and position under it */}
          <Reveal>
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 md:h-64 md:w-64 lg:h-72 lg:w-72 rounded-[4px] overflow-hidden border border-[var(--sw-black)]/10 bg-[var(--sw-black)]/[0.03]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/webinars/opera-layer/martins.png")}
                  alt="Martins Jakubovskis, Enterprise Architect at scandiweb"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-5 text-center lg:text-left">
                <div className="font-head text-[var(--sw-black)] text-[18px] md:text-[20px] leading-tight">
                  Martins Jakubovskis
                </div>
                <div className="text-[var(--sw-black)]/60 text-[13px] md:text-[15px] mt-1.5">
                  Enterprise Architect at scandiweb
                </div>
              </div>
            </div>
          </Reveal>

          {/* RIGHT · copy */}
          <div>
            <Reveal>
              <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]">
                <span className="text-[var(--sw-black)]/55">6</span>
                <span className="h-px w-6 bg-[var(--sw-black)]/20" />
                <span>The speaker</span>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[30px] md:text-[40px] lg:text-[44px] leading-[1.1] tracking-[-0.01em] mt-6">
                Led by one of the people{" "}
                <span style={{ color: "var(--sw-blue)" }}>
                  building OperaLayer
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-7 text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed max-w-[62ch]">
                Martins is an Enterprise Architect at scandiweb, working
                alongside the team that builds OperaLayer. His days go into how
                large retailers connect their systems, so his answers come
                straight from real builds.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
