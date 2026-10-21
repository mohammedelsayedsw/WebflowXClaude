import type { Metadata } from "next";
import "@/sections/retention-90/retention-90.css";
import { ConfirmedPage } from "@/sections/retention-90/ConfirmedPage";

/* Where the confirmation email's button lands (Omnisend property r90_confirm_url). */
export const metadata: Metadata = {
  title: { absolute: "You're confirmed | scandiweb" },
  robots: { index: false, follow: false },
};

export default function Confirmed() {
  return (
    <main className="relative isolate min-h-screen">
      <ConfirmedPage />
    </main>
  );
}
