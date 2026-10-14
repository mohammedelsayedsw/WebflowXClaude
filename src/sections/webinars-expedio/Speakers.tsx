"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { SPEAKERS } from "./details";
import { assetUrl } from "@/lib/assets";

/* Each speaker stands on one side of a full-width office picture; the copy sits in the empty side.
   The section heading sits in the first speaker's copy, above the name. */
const STAGE: Record<
  string,
  {
    photo: string;
    /** Upright picture for phones and tablets. */
    portrait: string;
    /** 4:3 picture for tablets, the person on the same side as on desktop. */
    tablet: string;
    /** The portrait's sky colour, behind the copy on phones. */
    sky: string;
    text: "left" | "right";
    /** Role shown here, when it differs from the hero's. */
    role?: string;
    /** The whole line under the name, replacing "<role> at scandiweb". */
    titleLine?: string;
    /** On wider screens the bio breaks before this phrase, to balance the lines. */
    breakBefore?: string;
    highlights?: { title: string; caption: string }[];
  }
> = {
  "Glebs Vrevsky": {
    photo: "/webinars/expedio/glebs-vrevsky-stage.jpg",
    portrait: "/webinars/expedio/glebs-vrevsky-portrait.jpg",
    tablet: "/webinars/expedio/glebs-vrevsky-tablet.jpg",
    sky: "#141a41",
    text: "right",
    role: "Board member",
    highlights: [
      { title: "15+ years", caption: "Working with Magento stores" },
      { title: "Ari & Expedio", caption: "Co-founder" },
    ],
  },
  "Alfreds Genkins": {
    photo: "/webinars/expedio/alfreds-genkins-stage.jpg",
    portrait: "/webinars/expedio/alfreds-genkins-portrait.jpg",
    tablet: "/webinars/expedio/alfreds-genkins-tablet.jpg",
    sky: "#0b1232",
    text: "left",
    titleLine: "Expedio creator",
    highlights: [
      { title: "Expedio & Ari", caption: "Creator" },
      { title: "10+ years", caption: "Building for Magento" },
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
              <li className="relative grid sm:block" style={{ background: stage.sky }}>
                {/* Desktop: the wide picture, with the copy laid over its empty side. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl(stage.photo)}
                  width={1672}
                  height={841}
                  alt={s.name}
                  loading="lazy"
                  className="hidden lg:block w-full aspect-[1672/841] object-cover"
                />
                {/* Tablets: a 4:3 picture, the copy laid over its empty side as on desktop. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl(stage.tablet)}
                  width={1448}
                  height={1086}
                  alt={s.name}
                  loading="lazy"
                  className="hidden sm:block lg:hidden w-full aspect-[1448/1086] object-cover"
                />
                {/* Phones: the portrait sits under the copy, its empty sky pulled up behind the text. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl(stage.portrait)}
                  width={941}
                  height={1672}
                  alt={s.name}
                  loading="lazy"
                  className="block w-full -mt-[62vw] sm:hidden"
                  style={{
                    maskImage: "linear-gradient(to bottom, transparent 0%, #000 22%)",
                    WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, #000 22%)",
                  }}
                />
                <div className="relative z-10 row-start-1 sm:absolute sm:inset-0">
                  <div
                    className={`wrap flex h-full pt-14 sm:py-0 ${right ? "sm:justify-end" : ""} ${
                      i === 0 ? "items-center sm:items-start sm:pt-[7%]" : "items-center"
                    }`}
                  >
                    <div className="sm:w-1/2 sm:max-w-[480px]">
                      {i === 0 && (
                        <h2 className="mb-8 md:mb-12 font-head text-white text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em]">
                          Learn about Expedio <span style={{ color: "var(--sw-mint)" }}>from its creators</span>
                        </h2>
                      )}
                      <div className="font-head font-bold text-white text-[26px] md:text-[34px] lg:text-[40px] leading-[1.05] tracking-[-0.01em]">
                        {s.name}
                      </div>
                      <div className="mt-2 font-head text-[16px] md:text-[18px]" style={{ color: "var(--sw-mint)" }}>
                        {stage.titleLine ?? `${stage.role ?? s.title} at scandiweb`}
                      </div>
                      {s.bio && (
                        <p className="mt-4 text-white/75 text-[15px] md:text-[17px] leading-relaxed">
                          {stage.breakBefore && s.bio.includes(stage.breakBefore) ? (
                            <>
                              {s.bio.slice(0, s.bio.indexOf(stage.breakBefore))}
                              <br className="hidden lg:inline" />
                              {s.bio.slice(s.bio.indexOf(stage.breakBefore))}
                            </>
                          ) : (
                            s.bio
                          )}
                        </p>
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
