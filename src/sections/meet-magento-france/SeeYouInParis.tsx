"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary, btnSecondary } from "@/components/primitives/buttonStyles";


export function SeeYouInParis() {
  return (
    <section
      id="see-you-in-paris"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 80% 80%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1200px 800px at 50% 50%, #1a2060 0%, #141a48 40%, #10132c 80%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="max-w-[64ch] mx-auto text-center">
          <Reveal>
            <h2 className="font-head text-white text-[36px] md:text-[56px] lg:text-[72px] leading-[1.05] mx-auto">
              See you in{" "}
              <span style={{ color: "var(--sw-mint)" }}>Paris</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-white/85 text-[16px] md:text-[18px] leading-relaxed max-w-[56ch] mx-auto">
              Book a meeting with the scandiweb team before the event
              &ndash; easier than trying to find us in the crowd.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://calendly.com/scandi-bd/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Book a meeting
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="https://scandiweb.com/contact"
                target="_blank"
                rel="noopener noreferrer"
                className={btnSecondary}
              >
                Have questions? Contact us
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
