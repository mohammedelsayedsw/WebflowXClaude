"use client";

import { Hero } from "@/sections/operalayer-invoice-matching/Hero";
import { Morning } from "@/sections/operalayer-invoice-matching/Morning";
import { HowItWorks } from "@/sections/operalayer-invoice-matching/HowItWorks";
import { Review } from "@/sections/operalayer-invoice-matching/Review";
import { Results } from "@/sections/operalayer-invoice-matching/Results";
import { Questions } from "@/sections/operalayer-invoice-matching/Questions";
import { Closing } from "@/sections/operalayer-invoice-matching/Closing";
import { Modules } from "@/sections/operalayer/shared/Modules";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Hero />
      <Morning />
      <HowItWorks />
      <Review />
      <Results />
      <Modules current="invoice-matching" heading="More OperaLayer modules" />
      <Questions />
      <Closing />
    </main>
  );
}
