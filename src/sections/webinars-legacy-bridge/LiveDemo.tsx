"use client";

import { Reveal } from "@/components/primitives/Reveal";
import { GreenScreen } from "./GreenScreen";

const CARDS: { title: string; body: string }[] = [
  {
    title: "The normal path",
    body: "The screen fills itself in and waits for approval",
  },
  {
    title: "An unclear field",
    body: "A value that can't be read with confidence is flagged, and a person decides",
  },
  {
    title: "A rejected value",
    body: "The AS/400 refuses a value, and your team sees the error",
  },
];

export function LiveDemo() {
  return (
    <section
      id="the-live-demo"
      className="relative bg-lp-bright py-24 md:py-32 overflow-hidden scroll-mt-20"
    >
      <div className="wrap relative">
        <Reveal>
          <div className="label-code mb-4 inline-flex items-center gap-3 text-[var(--sw-black)]">
            <span className="text-[var(--sw-black)]/55">4</span>
            <span className="h-px w-6 bg-[var(--sw-black)]/20" />
            <span>The live demo</span>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="font-head text-[var(--sw-black)] text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.05] tracking-[-0.01em] max-w-[20ch]">
            Watch one claim{" "}
            <span className="text-[var(--sw-blue)]">go all the way through</span>
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-[62ch] text-[var(--sw-black)]/70 text-[16px] md:text-[18px] leading-relaxed">
            In the session we follow a dental claim from the moment it arrives
            to a finished entry in the claims screen.
          </p>
        </Reveal>

        <div className="mt-10 md:mt-14 grid gap-8 lg:gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
          {/* The same screen as the hero, carrying claim fields, with the one
              field a person has to decide on drawn in amber. */}
          <Reveal delay={0.14}>
            <GreenScreen
              screenId="CL2200"
              title="Claim entry"
              fields={[
                { label: "Claim type", value: "DENTAL" },
                { label: "Client number", value: "4471902" },
                {
                  label: "Service date",
                  value: "03/11/26",
                  flag: "Check this field",
                },
                { label: "Amount", value: "840.00" },
              ]}
            />
          </Reveal>

          <div className="grid gap-3 md:gap-4">
            {CARDS.map((c, i) => (
              <Reveal key={c.title} delay={0.2 + i * 0.07}>
                <div className="rounded-[4px] border border-[var(--sw-black)]/10 bg-white p-5 md:p-6">
                  <div className="font-head font-bold text-[var(--sw-black)] text-[16px] md:text-[18px] leading-tight">
                    {c.title}
                  </div>
                  <p className="mt-2 text-[var(--sw-black)]/70 text-[14px] md:text-[15px] leading-relaxed">
                    {c.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
