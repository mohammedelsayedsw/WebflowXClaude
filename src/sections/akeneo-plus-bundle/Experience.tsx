"use client";

import { Headphones, ListChecks, RefreshCw, KeyRound } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { BODY_LIGHT, Eyebrow, H2_LIGHT, LINE_LIGHT } from "./ui";

const ITEMS = [
  {
    icon: ListChecks,
    title: "Your features, checked before the switch",
    body: "We list the features and workflows your team uses and show how each one is covered. Your users test the new setup before go-live.",
  },
  {
    icon: RefreshCw,
    title: "Upgrades are our job",
    body: "We apply Akeneo updates and security patches, keep extensions compatible, and test both before anything reaches production.",
  },
  {
    icon: Headphones,
    title: "One team builds and supports it",
    body: "The engineers who migrate your instance also support it afterwards. Support hours are set in your service plan.",
  },
  {
    icon: KeyRound,
    title: "The system stays yours",
    body: "The Community Edition instance and your product data belong to you. Migration and service prices are fixed before work starts.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative z-10 bg-white py-24 md:py-28">
      <div className="wrap">
        <Reveal>
          <Eyebrow>Fully managed</Eyebrow>
          <h2 className={`${H2_LIGHT} max-w-[22ch]`}>Same Akeneo for your team, without the upkeep</h2>
          <p className={`${BODY_LIGHT} mt-6 max-w-[60ch]`}>
            Your product team keeps working in Akeneo. scandiweb takes over hosting, updates, extension
            compatibility, and support.
          </p>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-2 gap-x-16">
          {ITEMS.map(({ icon: Icon, title, body }, i) => (
            <Reveal key={title} delay={i * 0.07}>
              <div className={`flex gap-6 py-8 border-t ${LINE_LIGHT}`}>
                <Icon aria-hidden className="h-7 w-7 shrink-0 mt-0.5" style={{ color: "var(--sw-blue)" }} strokeWidth={1.5} />
                <div>
                  <h3 className="font-head font-bold text-[var(--sw-black)] text-[20px] md:text-[22px] leading-[1.25]">{title}</h3>
                  <p className="mt-3 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-relaxed">{body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
