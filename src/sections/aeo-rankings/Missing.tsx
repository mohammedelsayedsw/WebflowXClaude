import Link from "next/link";
import { CC, COUNTRY, type Summary } from "./data";
import { ROUTE } from "./paths";
import { SearchBox } from "./Search";

export function MissingHero() {
  return (
    <section className="hero" id="hero">
      <div className="sq sq1" /><div className="sq sq2" /><div className="sq sq3" />
      <div className="hero-in">
        <p className="kick">Baltic AI Brand Ranking</p>
        <h1 className="big">Don&apos;t See<br />Your Brand?</h1>
        <p className="hero-lead">
          The ranking lists only the companies that ChatGPT, Gemini, and Perplexity named in their answers. Search again with a shorter name or your website address.
        </p>
        <SearchBox />
      </div>
    </section>
  );
}

/** The reasons a brand can be missing, each answered where it applies. */
export const REASONS = (summary: Summary): { h: string; text: string; p?: React.ReactNode }[] => [
  {
    h: "AI did not name it",
    text: "We asked the questions buyers ask in your industry. If no answer mentioned your brand, it is not in the ranking. For AI search, that is the finding.",
  },
  {
    h: "It is listed under another name",
    text: "Some companies appear under a longer or local name, such as Rimi Eesti Food in Estonia. Try a shorter name or your website address.",
  },
  {
    h: "It is named in one or two countries",
    text: `The Baltic ranking only lists the ${summary.totals.baltic} companies AI names in all three countries. The ${CC.map((cc) => COUNTRY[cc]).join(", ").replace(/, ([^,]*)$/, ", and $1")} rankings include brands named in fewer.`,
    p: (
      <>
        The Baltic ranking only lists the {summary.totals.baltic} companies AI names in all three countries. The{" "}
        <Link href={`${ROUTE}#top-companies`}>Latvia, Estonia, and Lithuania rankings</Link> include brands named in fewer.
      </>
    ),
  },
  {
    h: "Your industry was not tested",
    text: `The ranking covers ${summary.totals.industries} industries. If yours is not one of them, AI was not asked about it.`,
    p: (
      <>
        The ranking covers <Link href={`${ROUTE}#industries`}>{summary.totals.industries} industries</Link>. If yours is not one of them, AI was not asked about it.
      </>
    ),
  },
];

export function Reasons({ summary }: { summary: Summary }) {
  return (
    <section className="band pink" id="reasons">
      <div className="wrap">
        <h2 className="mid">Why a brand is not in the ranking</h2>
        <ul className="reasons">
          {REASONS(summary).map((r) => (
            <li key={r.h}>
              <h3>{r.h}</h3>
              <p>{r.p ?? r.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
