"use client";

import { ArrowUpRight, Linkedin } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnLight } from "@/components/primitives/buttonStyles";
import { assetUrl } from "@/lib/assets";

export function MeetMichael() {
  return (
    <section
      id="meet-michael"
      className="relative bg-lp-bright py-28 md:py-36 overflow-hidden text-[var(--sw-black)] scroll-mt-20"
    >
      <div className="absolute top-0 inset-x-0 h-px bg-[var(--sw-black)]/10" />
      <div className="wrap relative">
        <Reveal>
          <h2 className="font-head text-[var(--sw-black)] text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[18ch] mb-14 md:mb-20">
            Meet{" "}
            <span className="text-[var(--sw-blue)]">Michael</span>.
          </h2>
        </Reveal>

        <div className="grid lg:grid-cols-[260px_1fr] gap-10 md:gap-14 items-start">
          {/* Left column: photo + name + linkedin */}
          <Reveal delay={0.1}>
            <div>
              <div className="aspect-square w-full max-w-[260px] rounded-[4px] overflow-hidden border border-[var(--sw-black)]/10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={assetUrl("/events/meet-magento-france/assets/michael-bliah.jpg")}
                  alt="Michael Bliah, VP of North America &amp; B2B at scandiweb"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-5">
                <div className="font-head text-[var(--sw-black)] text-[18px] md:text-[20px]">
                  Michael Bliah
                </div>
                <div className="text-[var(--sw-black)]/65 text-[14px] mt-1 leading-snug">
                  VP of North America &amp; B2B at scandiweb
                </div>
                <a
                  href="https://www.linkedin.com/in/michaelbliah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Michael Bliah on LinkedIn"
                  className="inline-flex items-center gap-1.5 mt-3 text-[var(--sw-blue)] hover:text-[var(--sw-black)] text-[13px] underline underline-offset-4"
                >
                  <Linkedin className="h-4 w-4" />
                  View on LinkedIn
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right column: bio + CTA + email */}
          <Reveal delay={0.15}>
            <div>
              <p className="text-[var(--sw-black)] text-[17px] md:text-[19px] leading-relaxed max-w-[62ch]">
                Michael leads scandiweb&apos;s North America and B2B practice.
                He&apos;s spent 25+ years in digital and eCommerce &ndash; VP
                of eCommerce &amp; CRM at Groupe Dynamite, senior roles at
                ALDO and Mackage, and co-founder of Catalevo &ndash; so
                he&apos;s worked both sides of the table: the merchant making
                the call, and the agency delivering on it.
              </p>
              <p className="mt-5 text-[var(--sw-black)]/85 text-[16px] md:text-[18px] leading-relaxed max-w-[62ch]">
                He&apos;ll be at the event all day, free to grab coffee with
                merchants, agencies and partners. Topics he&apos;s there to
                dig into: Adobe Commerce, Hyvä migrations, B2B on Magento,
                and how AI is actually showing up in serious eCommerce stacks
                &ndash; not the demoware version.
              </p>
              <p className="mt-5 text-[var(--sw-black)]/85 text-[16px] md:text-[18px] leading-relaxed max-w-[62ch]">
                If you find him in Paris, bring one real problem you&apos;re
                working on.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://www.linkedin.com/in/michaelbliah/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={btnLight}
                >
                  Connect with Michael on LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
              <p className="mt-4 text-[var(--sw-black)]/60 text-[14px]">
                Prefer email?{" "}
                <a
                  href="mailto:michael.bliah@scandiweb.com"
                  className="text-[var(--sw-blue)] hover:text-[var(--sw-black)] underline underline-offset-4"
                >
                  michael.bliah@scandiweb.com
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
