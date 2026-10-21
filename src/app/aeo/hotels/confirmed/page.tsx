import type { Metadata } from "next";
import { ConfirmedPage } from "@/sections/aeo-lp/ConfirmedPage";

export const metadata: Metadata = {
  title: { absolute: "You're confirmed | scandiweb" },
  robots: { index: false, follow: false },
};

export default function Confirmed() {
  return <ConfirmedPage funnel="hotels" />;
}
