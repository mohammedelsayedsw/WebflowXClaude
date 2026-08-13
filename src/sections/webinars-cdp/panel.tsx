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
  { name: "Speaker name TBC", role: "Role TBC", company: "Bloomreach" },
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
  const box = `rounded-[4px] overflow-hidden bg-[var(--sw-black)]/[0.06] border border-[var(--sw-black)]/10 ${className}`;

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
        <div className="font-head text-[var(--sw-black)] text-[17px] md:text-[19px] leading-[1.2]">
          {speaker.name}
        </div>
        <div className="text-[var(--sw-black)]/70 text-[13px] md:text-[14px] mt-1.5 leading-snug">
          {speaker.role}
        </div>
        <div className="text-[var(--sw-black)]/50 text-[13px] md:text-[14px] leading-snug">
          {speaker.company}
        </div>
      </div>
    </div>
  );
}
