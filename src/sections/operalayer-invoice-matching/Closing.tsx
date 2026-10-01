"use client";

import { Cta } from "@/sections/operalayer/shared/Cta";

export function Closing() {
  return (
    <Cta
      heading={
        <>
          See your own invoices <span style={{ color: "var(--sw-mint)" }}>checked automatically</span>
        </>
      }
      body="Book a call and tell us how supplier invoices reach your team today. We will show what the first week's prototype would do with them."
      points={[
        "Bring a few supplier PDFs and their purchase orders",
        "Tell us which ERP you run and where invoices land today",
        "Leave with a scope for the first four weeks",
      ]}
    />
  );
}
