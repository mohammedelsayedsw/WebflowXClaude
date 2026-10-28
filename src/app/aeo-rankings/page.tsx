import { CC, COUNTRY, num, type Summary } from "@/sections/aeo-rankings/data";
import { abs, ROUTE } from "@/sections/aeo-rankings/paths";
import { Rankings } from "@/sections/aeo-rankings/Rankings";
import { JsonLd, pageMeta, PUBLISHER } from "@/sections/aeo-rankings/seo";
import data from "@/sections/aeo-rankings/summary.json";

const summary = data as Summary;
const t = summary.totals;

export const metadata = pageMeta({
  path: ROUTE,
  title: "Baltic AI Brand Ranking 2026: Most AI Recommended Brands",
  description: `Which brands do ChatGPT, Gemini, and Perplexity recommend in Latvia, Estonia, and Lithuania? ${num(t.companies)} companies ranked across ${t.industries} industries.`,
  og: "ranking",
});

const company = (k: string, cc?: string) => abs(`${ROUTE}?c=${encodeURIComponent(k)}${cc ? `&m=${cc}` : ""}`);

const LD = [
  {
    "@context": "https://schema.org",
    "@type": "Dataset",
    name: "Baltic AI Brand Ranking 2026",
    alternateName: "Most AI Recommended Brands in the Baltics",
    description: `Which brands ChatGPT, Gemini, and Perplexity name when buyers in Latvia, Estonia, and Lithuania ask for recommendations. ${num(t.companies)} companies across ${t.industries} industries, scored on visibility, sentiment, and average position from ${num(t.questions)} buyer questions.`,
    url: abs(ROUTE),
    creator: PUBLISHER,
    publisher: PUBLISHER,
    datePublished: "2026-09-24",
    spatialCoverage: ["Latvia", "Estonia", "Lithuania"],
    measurementTechnique: "The same buyer questions asked of ChatGPT, Gemini, and Perplexity over a month, tracked with AnswerRank",
    variableMeasured: ["Visibility", "Sentiment", "Average position", "Score"],
    isAccessibleForFree: true,
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Most AI recommended brands in the Baltics 2026",
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: summary.baltic.length,
    itemListElement: summary.baltic.map((r, i) => ({ "@type": "ListItem", position: i + 1, name: r.n, url: company(r.k) })),
  },
  ...CC.map((cc) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Most AI recommended brands in ${COUNTRY[cc]} 2026`,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: summary.country[cc].length,
    itemListElement: summary.country[cc].map((r, i) => ({ "@type": "ListItem", position: i + 1, name: r.n, url: company(r.k, cc) })),
  })),
];

/** Server page: the home lists render into the HTML from summary.json; the client loads the full dataset for search and company pages. */
export default function Page() {
  return (
    // one wrapper: next/navigation scrolls each top-level node of a new page into view, which overshoots the hero on a fragment
    <div>
      <Rankings summary={summary} />
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
    </div>
  );
}
