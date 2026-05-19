"use client";

import Script from "next/script";
import { Reveal } from "@/components/primitives/Reveal";
import { SectionLabel } from "@/components/primitives/SectionLabel";
import { Linkedin } from "lucide-react";

export function MichaelBooking() {
  return (
    <section id="meet-michael" className="bg-[var(--sw-black)] py-28 md:py-36">
      <div className="wrap">
        <Reveal>
          <SectionLabel index="02">Meet Michael</SectionLabel>
        </Reveal>

        <div className="mt-12 md:mt-16 grid lg:grid-cols-[240px_1fr] gap-10 md:gap-12 items-start">
          {/* Left column: photo + name + linkedin */}
          <Reveal delay={0.1}>
            <div>
              {/* TODO: replace placeholder with real photo at /events/meet-magento-france/assets/michael-bliah.jpg
                  When the file exists, swap the inner span for:
                  <img src={assetUrl('/events/meet-magento-france/assets/michael-bliah.jpg')}
                       alt="Michael Bliah" className="w-full h-full object-cover" /> */}
              <div className="aspect-square w-full max-w-[240px] rounded-[4px] bg-white/10 border border-white/15 flex items-center justify-center overflow-hidden">
                <span className="font-head text-white/85 text-[64px] md:text-[80px] leading-none">
                  MB
                </span>
              </div>
              <div className="mt-5">
                <div className="font-head text-white text-[18px] md:text-[20px]">
                  Michael Bliah
                </div>
                <div className="text-white/65 text-[14px] mt-1">
                  VP of North America &amp; B2B at scandiweb
                </div>
                <a
                  href="https://ca.linkedin.com/in/michaelbliah"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Michael Bliah on LinkedIn"
                  className="inline-flex items-center gap-1.5 mt-3 text-white/55 hover:text-white text-[13px] underline underline-offset-4"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </Reveal>

          {/* Right column: bio + calendly widget + email */}
          <Reveal delay={0.15}>
            <div>
              <p className="text-white/85 text-[17px] md:text-[20px] leading-relaxed max-w-[58ch]">
                Michael will be at Meet Magento France for the day. He&apos;s
                not speaking or running a booth &ndash; just there to meet
                people.
              </p>
              <p className="text-white/80 text-[15px] md:text-[17px] leading-relaxed mt-4 max-w-[58ch]">
                Grab him for a coffee chat on Adobe Commerce, Hyvä migrations,
                AI in commerce, or whatever you&apos;re working through.
              </p>

              {/* TODO: confirm BOOKING_URL — currently using the team Calendly per earlier instruction (calendly.com/scandi-bd/30min). Swap data-url if there's a Michael-specific calendar. */}
              <div className="mt-8 rounded-[4px] overflow-hidden border border-white/10 bg-white">
                <div
                  className="calendly-inline-widget"
                  data-url="https://calendly.com/scandi-bd/30min?hide_gdpr_banner=1"
                  style={{ minWidth: "320px", height: "660px" }}
                />
                <Script
                  src="https://assets.calendly.com/assets/external/widget.js"
                  strategy="lazyOnload"
                />
              </div>

              <p className="text-white/50 text-[13px] mt-4">
                Or email{" "}
                <a
                  href="mailto:michael@scandiweb.com"
                  className="text-white/75 hover:text-white underline underline-offset-4"
                >
                  michael@scandiweb.com
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
