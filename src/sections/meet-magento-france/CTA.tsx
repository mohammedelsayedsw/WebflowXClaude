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
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 80% 80%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1200px 800px at 50% 50%, #1a2060 0%, #141a48 40%, #10132c 80%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <Reveal>
            <h2 className="font-head text-white text-[34px] md:text-[52px] lg:text-[64px] leading-[1.05] max-w-[16ch]">
              See you in{" "}
              <span className="text-[var(--sw-mint)]">Paris</span>.
            </h2>
            <p className="mt-6 text-white/80 max-w-[52ch] text-[16px] md:text-[17px] leading-relaxed">
              30 minutes, your stack, our take. No deck, no follow-up sequence,
              no pressure.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="rounded-[4px] border border-white/15 bg-white/[0.04] backdrop-blur p-6 md:p-8">
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
