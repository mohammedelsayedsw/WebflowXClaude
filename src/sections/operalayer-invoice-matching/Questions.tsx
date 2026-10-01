"use client";

import { Faq } from "@/sections/operalayer/shared/Faq";

const ITEMS = [
  {
    q: "Does it handle every supplier's PDF layout?",
    a: "At this client, one extraction module reads about a hundred supplier formats. When a new supplier starts sending invoices, we add their layout to the same module.",
  },
  {
    q: "Which ERPs does it work with?",
    a: "This case runs on Microsoft Dynamics NAV. OperaLayer connects to the ERP you already run, Business Central included, and the first week's prototype works on your own invoices and purchase orders.",
  },
  {
    q: "What happens when the system is unsure about a line?",
    a: "Every line gets a confidence score. A line with a low score or a difference from the PO stays in the review queue until someone on your team approves or rejects it.",
  },
  {
    q: "How long does it take to go live?",
    a: "A working prototype runs on your real invoices in the first week. The module goes live in week four, with training and documentation for the team that uses it.",
  },
  {
    q: "Who owns the code and the data?",
    a: "You do. The code, the data, and the intellectual property stay with your business, and there is no lock-in.",
  },
  {
    q: "Do our invoices go to an external AI service?",
    a: "We work under ISO-based processes for information and cloud security. Invoice data only goes to an external AI service when that use is defined and agreed with you first, after a risk review.",
  },
];

export function Questions() {
  return (
    <Faq
      heading={
        <>
          Questions finance and procurement teams{" "}
          <span style={{ color: "var(--sw-mint)" }}>ask us</span>
        </>
      }
      items={ITEMS}
    />
  );
}
