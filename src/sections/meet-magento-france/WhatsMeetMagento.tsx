"use client";

import { ArrowUpRight, Calendar, MapPin } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";

export function WhatsMeetMagento() {
  return (
    <section
      id="about-event"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden text-[var(--sw-black)] scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <div className="label-code mb-5 inline-flex items-center gap-3 text-[var(--sw-black)]/55">
              <span>01</span>
              <span className="h-px w-6 bg-[var(--sw-black)]/20" />
              <span>About the event</span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] mt-6">
              What&apos;s{" "}
              <span className="text-[var(--sw-blue)]">Meet Magento</span>{" "}
              France?
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-[15px] md:text-[17px] text-[var(--sw-black)]/70 max-w-[58ch] leading-relaxed">
              Meet Magento France is the annual French gathering of the Adobe
              Commerce, Magento and Hyvä community &ndash; one day of talks,
              demos and corridor conversations with merchants, agencies,
              developers and technology partners. It&apos;s the biggest
              Magento community moment of the year in France and one of the
              strongest in continental Europe.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-[15px] md:text-[17px] text-[var(--sw-black)]/70 max-w-[58ch] leading-relaxed">
              If you run or build on Magento, this is where you find out
              what&apos;s actually working right now &ndash; straight from the
              merchants and agencies doing the work.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-8 border-t border-[var(--sw-black)]/10">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-[var(--sw-blue)] mt-0.5 shrink-0" />
                <div>
                  <div className="label-code text-[var(--sw-black)]/55">When</div>
                  <div className="text-[var(--sw-black)] text-[15px] mt-1">
                    25 June 2026
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--sw-blue)] mt-0.5 shrink-0" />
                <div>
                  <div className="label-code text-[var(--sw-black)]/55">Where</div>
                  <div className="text-[var(--sw-black)] text-[15px] mt-1">
                    Les Salons de l&apos;Aveyron, Paris
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://fr.meet-magento.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={btnLight}
              >
                About Meet Magento France
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://www.eventbrite.fr/e/billets-meet-magento-2026-france-1979332028379"
                target="_blank"
                rel="noopener noreferrer"
                className={btnLight}
              >
                Get tickets
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
