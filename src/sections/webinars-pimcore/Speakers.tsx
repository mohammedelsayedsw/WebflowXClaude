"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";

const SPEAKERS: {
  name: string;
  role: string;
  photo: string;
  bio: string;
}[] = [
  {
    name: "Ana Luisa Taylor",
    role: "Key Account Manager at scandiweb",
    photo: "/webinars/pimcore/ana-luisa-taylor-portrait.webp",
    bio: "Ana leads scandiweb\u2019s PIM work with brands and manufacturers, from the first look at a messy catalog through to the live system, drawing on 50+ product data projects.",
  },
  {
    name: "Maris Skujins",
    role: "Head of Digital Commerce Strategy at scandiweb",
    photo: "/webinars/pimcore/maris-skujins-portrait.webp",
    bio: "Maris advises large retailers and manufacturers on the systems behind their catalogs, working with brands like ABA Labels, Zumiez, and Wienerberger.",
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
              <div className="flex h-full items-start gap-5 md:gap-6 rounded-[4px] border border-white/12 bg-white/[0.035] p-5 md:p-6">
                {/* portrait frame at the photos' own 7:10, so neither shot is
                    cropped back to a square */}
                <div className="w-32 md:w-40 aspect-[7/10] shrink-0 overflow-hidden rounded-[4px] border border-white/12 bg-white/[0.05]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl(s.photo)}
                    alt={`${s.name}, ${s.role}`}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="min-w-0">
                  <div className="font-head font-bold text-white text-[17px] md:text-[19px] leading-tight">
                    {s.name}
                  </div>
                  <div className="mt-1.5 text-white/65 text-[14px] md:text-[15px] leading-snug text-pretty">
                    {s.role}
                  </div>
                  <p className="mt-3 text-white/70 text-[14px] md:text-[15px] leading-relaxed text-pretty">
                    {s.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
