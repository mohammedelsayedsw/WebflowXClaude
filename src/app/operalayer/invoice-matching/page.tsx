"use client";

import { Story } from "@/sections/operalayer-invoice-matching/Story";
import { Result } from "@/sections/operalayer-invoice-matching/Result";
import { Cta } from "@/sections/operalayer/shared/Cta";

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col">
      <Story />
      <Result />
      <Cta
        heading={
          <>
            Let your team check{" "}
            <span className="text-[var(--sw-mint)]">only the exceptions</span>
          </>
        }
        body="Tell us how supplier invoices reach your team today, and we will show you what the app would do with them."
      />
    </main>
  );
}
