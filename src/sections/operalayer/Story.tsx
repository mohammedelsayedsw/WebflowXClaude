"use client";

import { btnPrimary } from "@/components/primitives/buttonStyles";
import { ScrollStory } from "@/sections/operalayer/shared/ScrollStory";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";
import { PillarStage } from "@/sections/operalayer/Stage";

const STEPS = [
  {
    title: "Some work belongs to none of your systems",
    body: "Checking supplier invoices or setting prices by region needs data from several systems at once.",
  },
  {
    title: "So it ends up in spreadsheets and inboxes",
    body: "Someone rebuilds it by hand every week, and it stops whenever that person is away.",
  },
  {
    title: "OperaLayer connects to all of them",
    body: "It reads from the systems you already run. Nothing gets migrated or replaced.",
  },
  {
    title: "Each gap gets its own small app",
    body: "We build them one at a time, starting with the one that costs you the most.",
  },
  {
    title: "Your team stays in charge",
    body: "The app does the routine part. People approve the decisions that matter.",
  },
];

export function Story() {
  return (
    <ScrollStory
      Stage={PillarStage}
      steps={STEPS}
      intro={
        <div>
          <h1 className="font-head text-white text-[40px] sm:text-[54px] lg:text-[64px] leading-[1.02] tracking-[-0.02em] max-w-[15ch] text-balance">
            Software for the Work Between{" "}
            <span style={{ color: "var(--sw-mint)" }}>Your Systems</span>
          </h1>
          <p className="mt-7 text-white/70 text-[18px] md:text-[20px] leading-relaxed max-w-[34ch]">
            Your ERP, CRM, and store each do their own job well. OperaLayer takes
            care of the work that falls between them.
          </p>
          <div className="mt-10">
            <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
              Talk to us
            </a>
          </div>
        </div>
      }
    />
  );
}
