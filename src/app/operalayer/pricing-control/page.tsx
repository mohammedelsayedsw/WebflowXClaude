"use client";

import { Hero } from "@/sections/operalayer-pricing-control/Hero";
import { Spreadsheet } from "@/sections/operalayer-pricing-control/Spreadsheet";
import { PriceBuild } from "@/sections/operalayer-pricing-control/PriceBuild";
import { Schedule } from "@/sections/operalayer-pricing-control/Schedule";
import { CaseResult } from "@/sections/operalayer-pricing-control/CaseResult";
import { PricingFaq } from "@/sections/operalayer-pricing-control/PricingFaq";
import { PricingCta } from "@/sections/operalayer-pricing-control/PricingCta";
import { Modules } from "@/sections/operalayer/shared/Modules";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Spreadsheet />
      <PriceBuild />
      <Schedule />
      <CaseResult />
      <Modules current="pricing-control" heading="More OperaLayer modules" />
      <PricingFaq />
      <PricingCta />
    </main>
  );
}
