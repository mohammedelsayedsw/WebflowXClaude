import type { Metadata } from "next";
import "@/sections/retention-90/retention-90.css";
import { BookPage } from "@/sections/retention-90/BookPage";

export const metadata: Metadata = {
  title: "Book your call | scandiweb Retention Score",
  robots: { index: false, follow: false },
};

export default function Book() {
  return (
    <main className="relative isolate min-h-screen">
      <BookPage />
    </main>
  );
}
