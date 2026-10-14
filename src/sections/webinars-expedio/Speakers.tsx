"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SPEAKERS } from "./details";
import { assetUrl } from "@/lib/assets";

/* Each speaker stands on one side of a full-width office picture; the copy sits in the empty side.
   The section heading sits in the first speaker's copy, above the name. */
const STAGE: Record<
  string,
  { photo: string; text: "left" | "right"; highlights?: { title: string; caption: string }[] }
> = {
  "Glebs Vrevsky": {
    photo: "/webinars/expedio/glebs-vrevsky-stage.jpg",
    text: "right",
    highlights: [
      { title: "15+ years", caption: "Working with Magento stores" },
      { title: "Ari", caption: "Co-founder" },
    ],
  },
  "Alfreds Genkins": {
    photo: "/webinars/expedio/alfreds-genkins-stage.jpg",
    text: "left",
    highlights: [
      { title: "ScandiPWA & Satoshi", caption: "Creator" },
      { title: "Ari", caption: "Founder of the first\nagent for Magento" },
    ],
  },
};

export function Speakers() {
  return (
    <section id="the-speakers" className="relative bg-[#080b2c] overflow-hidden scroll-mt-20">
      <ul className="flex flex-col">
        {SPEAKERS.map((s, i) => {
          const stage = STAGE[s.name];
          const right = stage.text === "right";
          return (
            <Reveal key={s.name} delay={0.1 + i * 0.07}>
              <li className="relative bg-[#080b2c]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl(stage.photo)}
                  width={1672}
                  height={841}
                  alt={s.name}
                  loading="lazy"
                  className={`block w-full aspect-[4/3] sm:aspect-[1672/841] object-cover ${right ? "object-left" : "object-right"}`}
                />
                <div className="sm:absolute sm:inset-0">
                  <div className={`wrap flex h-full py-6 sm:py-0 ${right ? "sm:justify-end" : ""} ${i === 0 ? "items-center sm:items-start sm:pt-[7%]" : "items-center"}`}>
                    <div className="sm:w-1/2 sm:max-w-[480px]">
                      {i === 0 && (
                        <h2 className="mb-8 md:mb-12 font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                          Who&apos;s running <span style={{ color: "var(--sw-mint)" }}>the session</span>
                        </h2>
                      )}
                      <div className="font-head font-bold text-white text-[26px] md:text-[34px] lg:text-[40px] leading-[1.05] tracking-[-0.01em]">
                        {s.name}
                      </div>
                      <div className="mt-2 font-head text-[16px] md:text-[18px]" style={{ color: "var(--sw-mint)" }}>
                        {s.title} at scandiweb
                      </div>
                      {s.bio && (
                        <p className="mt-4 text-white/75 text-[15px] md:text-[17px] leading-relaxed">{s.bio}</p>
                      )}
                      {stage.highlights && (
                        <dl className="mt-6 grid grid-cols-2 border-t border-white/20">
                          {stage.highlights.map((h, j) => (
                            <div key={h.title} className={`pt-4 ${j > 0 ? "border-l border-white/20 pl-5" : "pr-5"}`}>
                              <dt className="font-head font-bold text-white text-[18px] md:text-[20px] leading-tight">
                                {h.title}
                              </dt>
                              <dd className="mt-1 whitespace-pre-line text-white/60 text-[13px] md:text-[14px] leading-snug">{h.caption}</dd>
                            </div>
                          ))}
                        </dl>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
