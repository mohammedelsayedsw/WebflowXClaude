"use client";

import { btnPrimary } from "@/components/primitives/buttonStyles";
import { ScrollStory } from "@/sections/operalayer/shared/ScrollStory";
import { scrollToSection } from "@/sections/operalayer/shared/scroll";
import { TourFrame, type Shot } from "@/sections/operalayer/shared/AppTour";

const LIST = { src: "/operalayer/invoices.webp", w: 2560, h: 1166 };
const BLOCKED = { src: "/operalayer/review-blocked.webp", w: 2560, h: 1166 };
const DASH = { src: "/operalayer/dashboard.webp", w: 2560, h: 1166 };
const CAPTURE = { src: "/operalayer/capture.webp", w: 2560, h: 583 };

const SHOTS: Shot[] = [
  { ...LIST, fx: 0.55, fy: 0.3, zoom: 1.9 },
  { ...CAPTURE, fx: 0.62, fy: 0.6, zoom: 3.2, mark: { x: 0.553, y: 0.535, w: 0.195, h: 0.185 } },
  { ...LIST, fx: 0.33, fy: 0.4, zoom: 3, mark: { x: 0.266, y: 0.2, w: 0.074, h: 0.4 } },
  { ...LIST, fx: 0.42, fy: 0.73, zoom: 2.6, mark: { x: 0.262, y: 0.702, w: 0.3, h: 0.055 } },
  { ...BLOCKED, fx: 0.84, fy: 0.52, zoom: 3.8, mark: { x: 0.733, y: 0.505, w: 0.214, h: 0.037 } },
  { ...BLOCKED, fx: 0.47, fy: 0.19, zoom: 3.5, mark: { x: 0.383, y: 0.141, w: 0.16, h: 0.041 } },
  { ...DASH, fx: 0.35, fy: 0.3, zoom: 3.2, mark: { x: 0.252, y: 0.21, w: 0.197, h: 0.229 } },
  { ...LIST, fx: 0.47, fy: 0.84, zoom: 2.5, mark: { x: 0.33, y: 0.808, w: 0.32, h: 0.07 } },
];

const STEPS = [
  {
    title: "Drop in a PDF or take a photo",
    body: "Invoices and delivery notes arrive in whatever layout the supplier uses, up to 50 files at a time.",
  },
  {
    title: "Every invoice gets a status as soon as it is read",
    body: "Your team can see at a glance which invoices need them and which are already done.",
  },
  {
    title: "Duplicates are caught before anyone pays twice",
    body: "An invoice that looks like one already received is flagged straight away.",
  },
  {
    title: "Prices are compared with what was agreed",
    body: "This line is €192 above the price on the purchase order in Navision.",
  },
  {
    title: "Blocked invoices cannot reach the ERP",
    body: "Until someone approves the difference, the invoice stays out of Navision.",
  },
  {
    title: "You see why each export is waiting",
    body: "The dashboard lists every reason an invoice is blocked, with the exact line and the size of the gap.",
  },
  {
    title: "Unreadable scans come back with a clear reason",
    body: "If a photo is too blurry, the app asks for a new scan at a higher resolution.",
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
          <h1 className="font-head text-white text-[34px] sm:text-[46px] lg:text-[38px] leading-[1.04] tracking-[-0.02em] max-w-[16ch] text-balance">
            OperaLayer Invoice Matching for{" "}
            <span style={{ color: "var(--sw-mint)" }}>Microsoft Dynamics NAV</span>
          </h1>
          <p className="mt-6 text-white/70 text-[17px] md:text-[19px] lg:text-[17px] leading-relaxed max-w-[34ch]">
            Every supplier invoice is read and checked against its purchase order. Your
            team only handles the exceptions.
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
