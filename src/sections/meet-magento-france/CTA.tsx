"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary } from "@/components/primitives/buttonStyles";
import { ArrowUpRight, Mail } from "lucide-react";

export function CTA() {
  return (
    <section
      id="cta"
      className="relative py-28 md:py-40 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%), radial-gradient(1200px 800px at 80% 80%, #1a2060 0%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative z-10">
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
          <div>
            <Reveal>
              <h2 className="font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[18ch]">
                See you in{" "}
                <span style={{ color: "var(--sw-mint)" }}>Paris</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-white/80 text-[15px] md:text-[17px] leading-relaxed mt-6 max-w-[52ch]">
                30 minutes, your stack, our take. No deck, no follow-up
                sequence, no pressure.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="rounded-[4px] border border-white/10 bg-white/[0.04] p-8 md:p-10">
              <a
                href="https://calendly.com/scandi-bd/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnPrimary} w-full justify-center`}
              >
                Book a call with our team
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="mt-6 pt-6 border-t border-white/10 flex items-start gap-3 text-white/60 text-[14px] leading-relaxed">
                <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                <span>
                  Or email Michael directly:{" "}
                  <a
                    href="mailto:michael.bliah@scandiweb.com"
                    className="text-white/85 hover:text-white underline underline-offset-4"
                  >
                    michael.bliah@scandiweb.com
                  </a>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
