"use client";

import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { btnPrimary, btnSecondary } from "@/components/primitives/buttonStyles";
import { CALL_URL, READYMAGE_URL } from "./status";

export function Call() {
  return (
    <section
      id="call"
      className="relative z-10 py-28 md:py-40 overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 600px at 20% 20%, #2a3380 0%, transparent 55%)," +
          "radial-gradient(700px 500px at 80% 80%, #070a1e 0%, transparent 52%)," +
          "radial-gradient(1200px 800px at 50% 50%, #1a2060 0%, #141a48 40%, #10132c 80%, #0a0d24 100%)",
      }}
    >
      <div className="wrap relative">
        <div className="grid md:grid-cols-[minmax(0,7fr)_minmax(0,5fr)] gap-12 md:gap-16 items-start">
          <Reveal>
            <div className="label-code text-white/55">Talk to us</div>
            <h2 className="mt-5 font-head text-white text-[34px] md:text-[48px] lg:text-[56px] leading-[1.05] max-w-[16ch]">
              Have a call with scandiweb about{" "}
              <span style={{ color: "var(--sw-mint)" }}>security</span>
            </h2>
            <p className="mt-6 text-white/80 text-[16px] md:text-[17px] leading-relaxed max-w-[50ch]">
              Where your store stands on StyleSmuggler, what protection is in
              place, and what to do about the next one. Pick a slot that suits
              you.
            </p>
            <div className="mt-9">
              <a href={CALL_URL} target="_blank" rel="noopener noreferrer" className={btnPrimary}>
                Book a call
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="md:pt-2 md:border-l md:border-white/10 md:pl-12">
              <div className="label-code text-white/55">Hosting</div>
              <h3 className="mt-5 font-head font-semibold text-white text-[22px] md:text-[26px] leading-[1.15]">
                The same team runs ReadyMage
              </h3>
              <p className="mt-4 text-white/75 text-[15px] md:text-[16px] leading-relaxed max-w-[40ch]">
                Managed Magento and Adobe Commerce hosting from scandiweb, with
                Sansec malware protection, a WAF, and DDoS defense built in. The
                place to be for the next{" "}
                <span className="whitespace-nowrap">zero-day</span>.
              </p>
              <div className="mt-7">
                <a href={READYMAGE_URL} target="_blank" rel="noopener noreferrer" className={btnSecondary}>
                  readymage.com
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
