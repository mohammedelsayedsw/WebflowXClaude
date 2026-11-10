import type { Metadata } from "next";
import "@/sections/retention-90/retention-90.css";
import { BookPage } from "@/sections/retention-90/BookPage";

export const metadata: Metadata = {
  title: "Book your plan call | scandiweb Growth Accelerator",
  robots: { index: false, follow: false },
};

/* Every Growth Accelerator email links here (Omnisend property ga_book_url). */
export default function Book() {
  return (
    <main className="relative isolate min-h-screen">
      <BookPage fn="ga" />
    </main>
  );
}
