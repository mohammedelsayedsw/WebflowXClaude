"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";

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
              Drop Michael a line on LinkedIn before the event &ndash; easier
              than trying to find each other in the crowd at Les Salons de
              l&apos;Aveyron.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center gap-4">
              <a
                href="https://www.linkedin.com/in/michaelbliah/"
                target="_blank"
                rel="noopener noreferrer"
                className={btnPrimary}
              >
                Connect with Michael on LinkedIn
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <p className="text-white/60 text-[14px]">
                Or email Michael directly:{" "}
                <a
                  href="mailto:michael.bliah@scandiweb.com"
                  className="text-white/85 hover:text-white underline underline-offset-4"
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
