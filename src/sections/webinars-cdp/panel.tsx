"use client";

/** The four panellists, shared by the hero row and the Meet the panel section. */
export type Speaker = {
  name: string;
  role: string;
  company: string;
};

export const SPEAKERS: Speaker[] = [
  { name: "Liis Veersalu", role: "Role TBC", company: "Sportland" },
  { name: "Algirdas Zalagaitis", role: "Role TBC", company: "Sportland" },
  { name: "Speaker name TBC", role: "Role TBC", company: "Bloomreach" },
  { name: "Speaker name TBC", role: "Role TBC", company: "scandiweb" },
];

/**
 * Photo sits in a 4px-rounded box, per the brief. Real headshots are not in
 * yet, so the box carries a neutral placeholder.
 */
export function SpeakerBox({ speaker }: { speaker: Speaker }) {
  return (
    <div className="flex flex-col">
      {/* TODO: real speaker photo */}
      <div
        className="w-full aspect-[4/3] rounded-[4px] bg-white/10 border border-white/15"
        aria-hidden
      />
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
