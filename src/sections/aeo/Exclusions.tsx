"use client";

import { LINE_LIGHT, WRAP } from "./ui";

const NOT_INCLUDED = [
  "Outreach campaigns, backlink acquisition, or securing paid or unpaid placements.",
  "Reddit account management or posting on your behalf.",
  "Trustpilot management or review collection.",
  "Direct publishing, custom development, or ongoing technical fixes.",
  "Full editorial review, including native-language proofreading.",
];

export function Exclusions() {
  return (
    <section id="exclusions" className="relative z-10 bg-white pb-4 md:pb-10">
      <div className={WRAP}>
        <details className={`border-y ${LINE_LIGHT}`}>
          <summary className="cursor-pointer py-5 text-[16px] font-semibold leading-[1.5]">
            What’s not included in the AI Visibility Core subscription?
          </summary>
          <div className="max-w-[1080px] pb-6">
            <ul className="list-disc pl-5 md:columns-2 md:gap-14">
              {NOT_INCLUDED.map((t) => (
                <li key={t} className="break-inside-avoid pb-2.5 text-[14px]">
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px]">Need help with execution? Your account manager can arrange a separate scope with our team.</p>
          </div>
        </details>
      </div>
    </section>
  );
}
