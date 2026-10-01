"use client";

import { Story } from "@/sections/operalayer-pricing-control/Story";
import { Result } from "@/sections/operalayer-pricing-control/Result";
import { Cta } from "@/sections/operalayer/shared/Cta";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Story />
      <Result />
      <Cta
        heading={
          <>
            Put your pricing rules{" "}
            <span className="text-[var(--sw-mint)]">in one place</span>
          </>
        }
        body="Show us the spreadsheet you price from today, and we will show you the app that takes its place."
      />
    </main>
  );
}
