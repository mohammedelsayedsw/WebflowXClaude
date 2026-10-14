"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SPEAKERS } from "./details";
import { assetUrl } from "@/lib/assets";

/* Each speaker stands on one side of a wide office picture; the copy sits in the empty side. */
const STAGE: Record<string, { photo: string; text: "left" | "right" }> = {
  "Glebs Vrevsky": { photo: "/webinars/expedio/glebs-vrevsky-stage.jpg", text: "right" },
  "Alfreds Genkins": { photo: "/webinars/expedio/alfreds-genkins-stage.jpg", text: "left" },
};

export function Speakers() {
  return (
    <section id="the-speakers" className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20">
      <div className="wrap relative">
        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
            Who&apos;s running <span style={{ color: "var(--sw-blue)" }}>the session</span>
          </h2>
        </Reveal>

        <ul className="mt-10 md:mt-14 flex flex-col gap-4 md:gap-6">
          {SPEAKERS.map((s, i) => {
            const stage = STAGE[s.name];
            const right = stage.text === "right";
            return (
              <Reveal key={s.name} delay={0.1 + i * 0.07}>
                <li className="relative overflow-hidden rounded-[6px] border border-[var(--sw-black)]/10 bg-[#f4f1ec]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={assetUrl(stage.photo)}
                    width={1672}
                    height={941}
                    alt={s.name}
                    loading="lazy"
                    className={`block w-full aspect-[4/3] sm:aspect-[1672/941] object-cover ${right ? "object-left" : "object-right"}`}
                  />
                  <div
                    className={`p-6 sm:absolute sm:inset-y-0 sm:flex sm:w-1/2 sm:items-center sm:p-10 lg:p-16 ${
                      right ? "sm:right-0" : "sm:left-0"
                    }`}
                  >
                    <div className="max-w-[440px]">
                      <div className="font-head font-bold text-[var(--sw-black)] text-[26px] md:text-[34px] lg:text-[40px] leading-[1.05] tracking-[-0.01em]">
                        {s.name}
                      </div>
                      <div className="mt-2 font-head text-[16px] md:text-[18px]" style={{ color: "var(--sw-blue)" }}>
                        {s.title}
                      </div>
                      {s.bio && (
                        <p className="mt-4 text-[var(--sw-black)]/70 text-[15px] md:text-[17px] leading-relaxed">{s.bio}</p>
                      )}
                    </div>
                  </div>
                </li>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
