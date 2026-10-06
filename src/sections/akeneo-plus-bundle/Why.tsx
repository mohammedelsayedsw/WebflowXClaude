"use client";

import { ArrowLeftRight, Users } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { assetUrl } from "@/lib/assets";
import { AKENEO_AWARD_URL, AKENEO_SERVICES_URL } from "./status";
import { BODY_LIGHT, Eyebrow, H2_LIGHT, LAVENDER, LINE_LIGHT } from "./ui";

const LINK =
  "inline-block font-head font-bold text-[15px] text-[var(--sw-blue)] border-b border-[var(--sw-blue)] pb-0.5 hover:opacity-80 transition";

const POINTS = [
  {
    icon: ArrowLeftRight,
    title: "Our own Akeneo connector",
    body: "Built and maintained by scandiweb for Magento (Adobe Commerce). It maps Akeneo attributes to Magento and supports multiple stores.",
  },
  {
    icon: Users,
    title: "The same engineers before and after go-live",
    body: "The team that migrates your instance runs it afterwards, so what they learned about your setup stays with your setup.",
  },
];

export function Why() {
  return (
    <section id="why" className="relative z-10 bg-white py-24 md:py-28">
      <div className="wrap grid gap-14 lg:grid-cols-[minmax(0,7fr)_minmax(0,4fr)] lg:gap-20 items-start">
        <div>
          <Reveal>
            <Eyebrow>Why scandiweb</Eyebrow>
            <h2 className={`${H2_LIGHT} max-w-[20ch]`}>We build Akeneo and what it connects to</h2>
            <p className={`${BODY_LIGHT} mt-6 max-w-[56ch]`}>
              scandiweb implements Akeneo and connects it to the commerce platforms your product data feeds.
            </p>
          </Reveal>
          <div className="mt-10">
            {POINTS.map(({ icon: Icon, title, body }, i) => (
              <Reveal key={title} delay={i * 0.07}>
                <div className={`flex gap-6 py-7 border-t ${LINE_LIGHT}`}>
                  <Icon aria-hidden className="h-7 w-7 shrink-0 mt-0.5" style={{ color: "var(--sw-blue)" }} strokeWidth={1.5} />
                  <div>
                    <h3 className="font-head font-bold text-[var(--sw-black)] text-[19px] md:text-[20px]">{title}</h3>
                    <p className="mt-2 text-[var(--sw-black)]/70 text-[15px] md:text-[16px] leading-relaxed max-w-[60ch]">{body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            <Reveal>
              <div className={`pt-7 border-t ${LINE_LIGHT}`}>
                <a href={AKENEO_SERVICES_URL} className={LINK}>
                  Explore our Akeneo work
                </a>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={0.15}>
          <figure className="max-w-[420px] lg:ml-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={assetUrl("/akeneo/plus-bundle/akeneo-award-2020.jpg")}
              alt="The scandiweb team on stage at the Akeneo PIM Summit 2020"
              className="w-full aspect-[4/3] object-cover"
              loading="lazy"
            />
            <figcaption className="p-8" style={{ background: LAVENDER }}>
              <div className="font-head font-bold uppercase text-[12px] tracking-[0.16em]" style={{ color: "var(--sw-blue)" }}>
                Akeneo PIM Summit 2020
              </div>
              <p className="mt-4 font-head font-bold text-[var(--sw-black)] text-[32px] leading-[1.1] tracking-[-0.02em]">
                Akeneo Rising Star Award
              </p>
              <p className="mt-4 text-[var(--sw-black)]/70 text-[15px] leading-relaxed">
                Given by Akeneo for our implementation with Technodom
              </p>
              <a href={AKENEO_AWARD_URL} target="_blank" rel="noopener noreferrer" className={`${LINK} mt-6`}>
                Read Akeneo&apos;s announcement
              </a>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
