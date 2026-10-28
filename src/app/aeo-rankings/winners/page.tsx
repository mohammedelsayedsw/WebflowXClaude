import { Contact } from "@/sections/aeo-rankings/Contact";
import type { Summary } from "@/sections/aeo-rankings/data";
import { abs, PAGES, ROUTE } from "@/sections/aeo-rankings/paths";
import { breadcrumb, JsonLd, pageMeta } from "@/sections/aeo-rankings/seo";
import data from "@/sections/aeo-rankings/summary.json";
import { IndustryWinners, industryWinners, Podiums, podiums, WinnersHero } from "@/sections/aeo-rankings/Winners";

const summary = data as Summary;
const list = podiums(summary);
const rows = industryWinners(summary);
const baltic = list[0].top[0].n;

export const metadata = pageMeta({
  path: PAGES.winners,
  title: "Most AI Recommended Baltic Brands 2026: Winners & Finalists",
  description: `${baltic} tops the 2026 Baltic AI ranking. See the winners and finalists in Latvia, Estonia, and Lithuania, and the #1 brand AI names in all ${summary.totals.industries} industries.`,
  og: "winners",
});

const company = (k: string, cc: string | null) => abs(`${ROUTE}?c=${encodeURIComponent(k)}${cc ? `&m=${cc}` : ""}`);

const LD = [
  breadcrumb("Winners & finalists", PAGES.winners),
  ...list.map((p) => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Most AI recommended brands in ${p.scope === "The Baltics" ? "the Baltics" : p.scope} 2026: winner and finalists`,
    itemListOrder: "https://schema.org/ItemListOrderDescending",
    numberOfItems: p.top.length,
    itemListElement: p.top.map((e, i) => ({ "@type": "ListItem", position: i + 1, name: e.n, url: company(e.k, p.cc) })),
  })),
];

export default function Page() {
  return (
    // one wrapper: next/navigation scrolls each top-level node of a new page into view, which overshoots the hero on a fragment
    <div>
      <WinnersHero />
      <Podiums list={list} />
      <IndustryWinners rows={rows} />
      <Contact
        title="Want your brand on this list?"
        text="scandiweb helps Baltic brands get named in AI answers. We'll show you which buyer questions your brand is missing from."
        topic="winners page"
      />
      {LD.map((d, i) => <JsonLd key={i} data={d} />)}
    </div>
  );
}
