import Link from "next/link";
import { fmt, num, type Summary } from "./data";
import { PAGES, ROUTE } from "./paths";

/** Steps and FAQ for /aeo-rankings/how-to-rank-in-ai-search. FAQ text is also the FAQPage structured data, so keep answers plain text. */
export const FAQ: { q: string; a: string }[] = [
  {
    q: "What is AI search ranking?",
    a: "It is where your brand appears when someone asks an AI assistant such as ChatGPT, Gemini, or Perplexity for a recommendation. A brand that AI names often, describes favorably, and mentions early ranks higher.",
  },
  {
    q: "How is the Baltic AI Brand Ranking calculated?",
    a: "We asked ChatGPT, Gemini, and Perplexity the same buyer questions for 113 industries in Latvia, Estonia, and Lithuania over a month and scored every company named in the answers. The score out of 100 combines visibility, sentiment, and average position, with visibility weighted most.",
  },
  {
    q: "Is AI search optimization different from SEO?",
    a: "It builds on SEO. Assistants that search the web read pages that search engines can find, so technical SEO and clear content still count. AI search adds two more things to work on, the full-sentence questions buyers ask and the third-party sources AI quotes.",
  },
  {
    q: "How long does it take to move up in AI answers?",
    a: "There is no fixed timeline. Each assistant refreshes its sources at its own pace, so measure the same questions every month to see what changed.",
  },
  {
    q: "Why is my brand not in the ranking?",
    a: "AI did not name it in answers to the questions for its industry, or it is listed under a different name. Our page for brands that are not listed explains what to check.",
  },
];

const STEPS: { h: string; p: React.ReactNode }[] = [
  {
    h: "Find the questions buyers ask",
    p: <>Start with the questions a customer types into ChatGPT before choosing, such as which bank in Lithuania has the lowest fees. Every industry page in the <Link href={ROUTE}>ranking</Link> lists the questions we asked.</>,
  },
  {
    h: "Check where AI places you",
    p: <><Link href={ROUTE}>Search for your company</Link> to see its visibility, sentiment, and average position, and which competitors AI names ahead of you.</>,
  },
  {
    h: "Answer those questions on your site",
    p: "Publish pages that say plainly what you sell, where you deliver, and what it costs. If you sell in several countries, give each market its own page in its own language.",
  },
  {
    h: "Get mentioned in sources AI reads",
    p: "Assistants that search the web before answering lean on review sites, comparison articles, directories, and news coverage. A brand that appears in more of these sources gives AI more reasons to name it.",
  },
  {
    h: "Make your site readable for AI crawlers",
    p: "Serve key content as HTML rather than behind scripts, add structured data for your organization and products, and check that robots.txt does not block GPTBot, OAI-SearchBot, PerplexityBot, or Google-Extended.",
  },
  {
    h: "Keep your facts the same everywhere",
    p: "Use one company name, address, and set of product details on your site, Google Business Profile, social profiles, and directories. In this ranking the same chain sometimes appears under different names per country, such as Rimi and Rimi Eesti Food.",
  },
  {
    h: "Work on what AI says about you",
    p: "Sentiment comes from how sources describe you. Answer reviews, fix the problems customers keep mentioning, and correct outdated facts on third-party pages.",
  },
  {
    h: "Measure the same questions every month",
    p: "AI answers change as assistants update the sources they read. Run the same questions on a schedule and compare visibility, sentiment, and position over time. We track them with AnswerRank.",
  },
];
export const STEP_COUNT = STEPS.length;

export function HowToHero({ summary }: { summary: Summary }) {
  return (
    <section className="hero" id="hero">
      <div className="sq sq1" /><div className="sq sq2" /><div className="sq sq3" />
      <div className="hero-in">
        <p className="kick">Guide &nbsp;■&nbsp; Baltic AI Brand Ranking</p>
        <h1 className="big">How to Rank<br />in AI Search</h1>
        <p className="hero-lead">
          What decides which brands ChatGPT, Gemini, and Perplexity recommend, and the steps that make your brand easier for them to name. Based on {num(summary.totals.companies)} companies ranked in Latvia, Estonia, and Lithuania.
        </p>
      </div>
    </section>
  );
}

export function Measures({ summary }: { summary: Summary }) {
  const s = summary.stats;
  return (
    <section className="band dark" id="what-decides">
      <div className="wrap">
        <h2 className="mid">What decides your place in AI answers</h2>
        <p className="lead">
          Across {s.rankings} industry rankings, the brand AI names first appears in {fmt(s.leaderVis, 0)}% of answers on average. The brand in fifth place appears in {fmt(s.fifthVis, 0)}%. Each company is scored on three measures.
        </p>
        <div className="measures">
          <div>
            <h3>Visibility</h3>
            <p>The share of answers that name your brand. It carries the most weight in the score.</p>
          </div>
          <div>
            <h3>Sentiment</h3>
            <p>How favorably the answers describe you. It counts second.</p>
          </div>
          <div>
            <h3>Position</h3>
            <p>How early in the answer you appear. It separates brands with close scores.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Steps() {
  return (
    <section className="band pink" id="steps">
      <div className="wrap">
        <h2 className="mid">How to get your brand recommended by AI</h2>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.h}>
              <b>{i + 1}</b>
              <div>
                <h3>{s.h}</h3>
                <p>{s.p}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section className="band white" id="faq">
      <div className="wrap">
        <h2 className="mid">Questions about AI search ranking</h2>
        <div className="faq">
          {FAQ.map((f, i) => (
            <details key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>
                {f.a}
                {f.q.startsWith("Why is my brand") && <> <Link href={PAGES.missing}>Don&apos;t see your brand?</Link></>}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
