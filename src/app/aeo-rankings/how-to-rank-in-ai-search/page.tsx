import { Contact } from "@/sections/aeo-rankings/Contact";
import type { Summary } from "@/sections/aeo-rankings/data";
import { Faq, FAQ, HowToHero, Measures, STEP_COUNT, Steps } from "@/sections/aeo-rankings/HowTo";
import { abs, PAGES } from "@/sections/aeo-rankings/paths";
import { breadcrumb, JsonLd, pageMeta, PUBLISHER } from "@/sections/aeo-rankings/seo";
import data from "@/sections/aeo-rankings/summary.json";

const summary = data as Summary;
const TITLE = "How to Rank in AI Search: Get Your Brand Recommended by AI";
const DESCRIPTION = `How ChatGPT, Gemini, and Perplexity decide which brands to recommend, and ${STEP_COUNT} steps to get your brand named in AI answers, from the Baltic AI Brand Ranking.`;

export const metadata = pageMeta({ path: PAGES.howTo, title: TITLE, description: DESCRIPTION, og: "how-to-rank" });

const LD = [
  breadcrumb("How to rank in AI search", PAGES.howTo),
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "How to rank in AI search",
    description: DESCRIPTION,
    url: abs(PAGES.howTo),
    mainEntityOfPage: abs(PAGES.howTo),
    author: PUBLISHER,
    publisher: PUBLISHER,
    datePublished: "2026-10-28",
    dateModified: "2026-10-28",
    image: abs("/aeo-rankings/og/how-to-rank.png"),
    about: ["AI search optimization", "Answer engine optimization", "Generative engine optimization"],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  },
];

export default function Page() {
  return (
    // one wrapper: next/navigation scrolls each top-level node of a new page into view, which overshoots the hero on a fragment
    <div>
      <HowToHero summary={summary} />
      <Measures summary={summary} />
      <Steps />
      <Faq />
      <Contact
        title="Want to know where AI places your brand?"
        text="scandiweb measures how AI assistants name and describe Baltic brands, and shows which buyer questions your brand is missing from."
        topic="how to rank in AI search"
      />
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
    </div>
  );
}
