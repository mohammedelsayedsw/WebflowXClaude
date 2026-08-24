"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const SPEAKERS: { name: string; role: string; photo: string }[] = [
  {
    name: "Ana Luisa Taylor",
    role: "Key Account Manager at scandiweb",
    photo: "/webinars/pimcore/ana-luisa-taylor.jpg",
  },
  {
    name: "Maris Skujins",
    role: "Head of Digital Commerce Strategy at scandiweb",
    photo: "/webinars/pimcore/maris-skujins.jpg",
  },
];

export function Speakers() {
  return (
    <section
      id="speakers"
      className="relative bg-[var(--sw-black)] py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-white/60">
            <span className="text-white/55">7</span>
            <span className="h-px w-6 bg-white/15" />
            <span>The speakers</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            Who&apos;s{" "}
            <span style={{ color: "var(--sw-mint)" }}>running the session</span>
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-14 grid gap-3 md:gap-4 sm:grid-cols-2 lg:max-w-[74rem]">
          {SPEAKERS.map((s, i) => (
            <Reveal key={s.name} delay={i * 0.07} className="h-full">
              <div className="flex h-full items-center gap-5 md:gap-6 rounded-[4px] border border-white/12 bg-white/[0.035] p-5 md:p-6">
                <div className="h-24 w-24 md:h-28 md:w-28 shrink-0 overflow-hidden rounded-[4px] border border-white/12 bg-white/[0.05]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl(s.photo)}
                    alt={`${s.name}, ${s.role}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-head font-bold text-white text-[17px] md:text-[19px] leading-tight">
                    {s.name}
                  </div>
                  <div className="mt-1.5 text-white/65 text-[14px] md:text-[15px] leading-snug text-pretty">
                    {s.role}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mt-8 md:mt-10 max-w-[72ch] text-white/70 text-[16px] md:text-[18px] leading-relaxed">
            scandiweb is a certified Pimcore Platinum Solution Partner and builds
            product data and commerce systems for brands and manufacturers with
            large catalogs. Pimcore is the platform the demos run on.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
