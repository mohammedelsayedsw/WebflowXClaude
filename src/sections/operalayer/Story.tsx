"use client";

import { btnPrimary } from "@/components/primitives/buttonStyles";
import { ScrollStory } from "@/sections/operalayer/shared/ScrollStory";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";
import { TourFrame, type Shot } from "@/sections/operalayer/shared/AppTour";

const MAP = { src: "/operalayer/opsmap.webp", w: 2560, h: 1166 };
const DASH = { src: "/operalayer/dashboard.webp", w: 2560, h: 1166 };
const INV = { src: "/operalayer/review-cascade.webp", w: 2560, h: 1166 };

const SHOTS: Shot[] = [
  { ...DASH, fx: 0.55, fy: 0.25, zoom: 1.9 },
  { ...MAP, fx: 0.175, fy: 0.2, zoom: 2.8, mark: { x: 0.019, y: 0.155, w: 0.31, h: 0.083 } },
  { ...MAP, fx: 0.15, fy: 0.6, zoom: 2.4, mark: { x: 0.019, y: 0.36, w: 0.188, h: 0.5 } },
  { ...INV, fx: 0.24, fy: 0.33, zoom: 3.6, mark: { x: 0.122, y: 0.316, w: 0.236, h: 0.054 } },
  { ...INV, fx: 0.86, fy: 0.45, zoom: 3.8, mark: { x: 0.8, y: 0.43, w: 0.152, h: 0.06 } },
  { ...DASH, fx: 0.37, fy: 0.16, zoom: 3, mark: { x: 0.252, y: 0.09, w: 0.24, h: 0.108 } },
  { ...MAP, fx: 0.66, fy: 0.73, zoom: 2.6, mark: { x: 0.492, y: 0.585, w: 0.336, h: 0.284 } },
];

const STEPS = [
  {
    title: "Your ERP stays as it is",
    body: "OperaLayer pulls purchase orders from Navision. Nothing in the ERP is replaced or migrated.",
  },
  {
    title: "People add documents the way they always have",
    body: "The warehouse uploads delivery notes and accounting uploads invoices, as PDFs or photos.",
  },
  {
    title: "AI reads every line",
    body: "This German invoice was read line by line, whatever the supplier's layout.",
  },
  {
    title: "Each line is checked against the purchase order",
    body: "Every line has to agree with what was ordered in Navision before it can go through.",
  },
  {
    title: "A person steps in only when something is off",
    body: "Duplicates and mismatches land on one screen. Everything else carries on without them.",
  },
  {
    title: "The rest goes straight back to Navision",
    body: "Clean invoices and goods receipts are posted to the ERP, and the app learns from every correction.",
  },
];

function Stage({ step }: { step: number }) {
  return <TourFrame shots={SHOTS} step={step} />;
}

export function Story() {
  return (
    <ScrollStory
      wide
      Stage={Stage}
      steps={STEPS}
      intro={
        <div>
          <h1 className="font-head text-white text-[36px] sm:text-[48px] lg:text-[46px] leading-[1.03] tracking-[-0.02em] max-w-[13ch] text-balance">
            OperaLayer Puts AI to Work{" "}
            <span style={{ color: "var(--sw-mint)" }}>on Top of Your ERP</span>
          </h1>
          <p className="mt-6 text-white/70 text-[17px] md:text-[19px] lg:text-[17px] leading-relaxed max-w-[34ch]">
            We build focused apps that connect to the systems you already run. This one
            checks every supplier invoice against Microsoft Dynamics NAV.
          </p>
          <div className="mt-9">
            <a href="#cta" onClick={scrollToSection("cta")} className={btnPrimary}>
              Talk to us
            </a>
          </div>
        </div>
      }
    />
  );
}
