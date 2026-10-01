"use client";

import { Cta } from "@/sections/operalayer/shared/Cta";

export function CTA() {
  return (
    <Cta
      heading={
        <>
          See your season in <span className="text-[var(--sw-mint)]">one buyer view</span>
        </>
      }
      body="Book a short call and bring one supplier order sheet and one invoice. We will walk through how your buyers track the season today and what one view of it would look like."
      points={[
        "We look at how your buyers track commitments today",
        "We map the systems and files that hold your purchasing data",
        "If we go ahead, you see a working prototype on your own data in week one",
      ]}
    />
  );
}
