import type { Metadata } from "next";
import { BookPage } from "@/sections/aeo-lp/BookPage";

export const metadata: Metadata = {
  title: { absolute: "Book your call | scandiweb" },
  robots: { index: false, follow: false },
};

export default function Book() {
  return <BookPage funnel="hotels" />;
}
