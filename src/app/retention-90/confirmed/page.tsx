import type { Metadata } from "next";
import "@/sections/retention-90/retention-90.css";

export const metadata: Metadata = {
  title: "Email confirmed | scandiweb Retention Score",
  robots: { index: false, follow: false },
};

/* Landing for the "Yes, send my breakdown" button in the Omnisend confirmation email.
   The click itself is what Omnisend tracks (it starts the nurture flow); this page only
   tells the person it worked. */
export default function Confirmed() {
  return (
    <main className="r90" style={{ minHeight: "100vh", background: "#10132c", display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 16px" }}>
      <div style={{ maxWidth: 520, width: "100%", textAlign: "center", color: "#fff", fontFamily: "inherit" }}>
        <div style={{ width: 64, height: 64, borderRadius: 32, background: "#6ef76e", color: "#10132c", fontSize: 34, fontWeight: 800, lineHeight: "64px", margin: "0 auto 24px" }}>✓</div>
        <h1 style={{ fontSize: 30, lineHeight: 1.2, fontWeight: 700, margin: "0 0 12px" }}>You&rsquo;re confirmed.</h1>
        <p style={{ fontSize: 17, lineHeight: 1.6, color: "rgba(255,255,255,.82)", margin: "0 0 28px" }}>
          Your full Retention Score breakdown is on its way. It usually lands within a few minutes. Check your promotions tab if you don&rsquo;t see it.
        </p>
        <a href="/solutions/retention-90" style={{ display: "inline-block", padding: "15px 24px", borderRadius: 12, background: "#6ef76e", color: "#10132c", fontWeight: 700, textDecoration: "none" }}>
          Back to scandiweb
        </a>
      </div>
    </main>
  );
}
