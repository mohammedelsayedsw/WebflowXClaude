import { Contact } from "@/sections/aeo-rankings/Contact";
import type { Summary } from "@/sections/aeo-rankings/data";
import { MissingHero, REASONS, Reasons } from "@/sections/aeo-rankings/Missing";
import { PAGES } from "@/sections/aeo-rankings/paths";
import { breadcrumb, JsonLd, pageMeta } from "@/sections/aeo-rankings/seo";
import data from "@/sections/aeo-rankings/summary.json";

const summary = data as Summary;

export const metadata = pageMeta({
  path: PAGES.missing,
  title: "Don't See Your Brand in the AI Ranking? Here's Why",
  description: "Not in the Baltic AI Brand Ranking? ChatGPT, Gemini, and Perplexity did not name your brand for your industry's buyer questions. See why and get measured.",
  og: "dont-see-your-brand",
});

const LD = [
  breadcrumb("Don't see your brand?", PAGES.missing),
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Why is my brand not in the Baltic AI Brand Ranking?",
        acceptedAnswer: { "@type": "Answer", text: REASONS(summary).map((r) => `${r.h}. ${r.text}`).join(" ") },
      },
    ],
  },
];

export default function Page() {
  return (
    // one wrapper: next/navigation scrolls each top-level node of a new page into view, which overshoots the hero on a fragment
    <div>
      <MissingHero />
      <Reasons summary={summary} />
      <Contact
        title="Get your brand measured"
        text="Leave your email and website, and scandiweb will get in touch about measuring your brand in AI answers."
        topic="brand not listed"
      />
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
    </div>
  );
}
