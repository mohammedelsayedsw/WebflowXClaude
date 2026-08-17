"use client";

import { assetUrl } from "@/lib/assets";

/** The four panellists, shared by the hero row and the Meet the panel section. */
export type Speaker = {
  name: string;
  role: string;
  company: string;
  /** Square headshot. Undefined until the photo is supplied. */
  photo?: string;
};

export const SPEAKERS: Speaker[] = [
  {
    name: "Liis Veersalu",
    role: "Head of Group Marketing & Communications",
    company: "Sportland",
    photo: "/webinars/cdp/liis-veersalu.webp",
  },
  {
    name: "Algirdas Zalagaitis",
    role: "Head of eCommerce",
    company: "Sportland",
  },
  {
    name: "Hugo Habodasz",
    role: "Senior Success Manager",
    company: "Bloomreach",
    photo: "/webinars/cdp/hugo-habodasz.webp",
  },
  {
    name: "Glebs Vrevsky",
    role: "Board Member & co-CEO",
    company: "scandiweb",
    photo: "/webinars/cdp/glebs-vrevsky.webp",
  },
];

/** Photo sits in a 4px-rounded box, per the brief. */
export function SpeakerPhoto({
  speaker,
  className = "",
}: {
  speaker: Speaker;
  className?: string;
}) {
  const box = `rounded-[4px] overflow-hidden bg-white/10 border border-white/15 ${className}`;

  if (!speaker.photo) {
    /* TODO: real speaker photo */
    return <div className={box} aria-hidden />;
  }

  return (
    <div className={box}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assetUrl(speaker.photo)}
        alt={`${speaker.name}, ${speaker.company}`}
        className="h-full w-full object-cover"
      />
    </div>
  );
}

export function SpeakerBox({ speaker }: { speaker: Speaker }) {
  return (
    <div className="flex flex-col">
      <SpeakerPhoto speaker={speaker} className="w-full aspect-square" />
      <div className="mt-4">
        <div className="font-head text-white text-[17px] md:text-[19px] leading-[1.2]">
          {speaker.name}
        </div>
        <div className="text-white/70 text-[13px] md:text-[14px] mt-1.5 leading-snug">
          {speaker.role}
        </div>
        <div className="text-white/55 text-[13px] md:text-[14px] leading-snug">
          {speaker.company}
        </div>
      </div>
    </div>
  );
}
