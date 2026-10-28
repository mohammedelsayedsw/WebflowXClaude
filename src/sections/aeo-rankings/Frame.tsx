"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { assetUrl } from "@/lib/assets";
import { Go } from "./nav";
import { PAGES, ROUTE } from "./paths";
import { ANSWERRANK_URL } from "./status";

const MENU = [
  { href: ROUTE, label: "Ranking" },
  { href: PAGES.winners, label: "Winners & finalists" },
  { href: PAGES.howTo, label: "How to rank in AI search?" },
  { href: PAGES.missing, label: "Don't see your brand?" },
];

/** Link to the ranking home: switches the view in place on the ranking route, a normal route change elsewhere. */
function HomeLink({ here, className, children, onClick }: { here: boolean; className?: string; children: React.ReactNode; onClick?: () => void }) {
  if (here) return <Go to={{ kind: "home" }} className={className} onClick={onClick}>{children}</Go>;
  return <Link href={ROUTE} className={className} onClick={onClick}>{children}</Link>;
}

/** The event app's sticky mark (top left) and the menu with "built by scandiweb" (top right). Under 1100px the menu folds into a MENU button. */
export function Top() {
  const path = usePathname().replace(/\/$/, "").toLowerCase();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="top">
      <HomeLink here={path === ROUTE} className="mark">
        <span className="px px-a" /><span className="px px-b" />
        <span className="mark-t">Baltic<br />AI Brand<br />Ranking</span>
      </HomeLink>
      <nav className="top-r" aria-label="Baltic AI Brand Ranking">
        <button type="button" className="menu-btn" aria-expanded={open} aria-controls="ar-menu" onClick={() => setOpen((o) => !o)}>
          {open ? "Close" : "Menu"}
          <span className="burger" aria-hidden />
        </button>
        <ul id="ar-menu" className={`menu ${open ? "open" : ""}`}>
          {MENU.map((m) => {
            const current = path === m.href;
            return (
              <li key={m.href}>
                {m.href === ROUTE ? (
                  <HomeLink here={current} className={`menu-a ${current ? "on" : ""}`} onClick={close}>{m.label}</HomeLink>
                ) : (
                  <Link href={m.href} className={`menu-a ${current ? "on" : ""}`} aria-current={current ? "page" : undefined} onClick={close}>{m.label}</Link>
                )}
              </li>
            );
          })}
          <li className="menu-by">
            built by <a href="https://scandiweb.com">scandiweb</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

/** Credits and the method note under every page. */
export function Bottom() {
  return (
    <>
      <section className="credits">
        <div className="wrap credits-in">
          <a className="cr" href={ANSWERRANK_URL} target="_blank" rel="noopener noreferrer">
            <span className="lbl">Data gathered with</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assetUrl("/aeo-rankings/img/answerrank.png")} alt="AnswerRank" width={452} height={182} className="cr-ar" />
            <span className="cr-t">AnswerRank tracks how AI assistants describe and rank brands.</span>
          </a>
          <a className="cr" href="https://scandiweb.com">
            <span className="lbl">Built by</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={assetUrl("/aeo-rankings/img/scandiweb.png")} alt="scandiweb" width={800} height={116} className="cr-sw" />
            <span className="cr-t">scandiweb built this ranking and helps Baltic brands get named in AI answers.</span>
          </a>
        </div>
      </section>
      <footer className="foot">
        <div className="wrap foot-in">
          <div>
            <p className="mid sm">Method</p>
            <p>
              We asked ChatGPT, Gemini, and Perplexity the same buyer questions for each industry in Latvia, Estonia, and Lithuania over a month, and scored every company named in the answers. Visibility is the share of answers that mention the company. Sentiment is how favorably the answers describe it. Avg. position is where it appears in the answer, 1 being first. Score rolls the three into one number out of 100, with visibility weighted most. The Baltic ranking lists companies AI names in all three countries.
            </p>
          </div>
          <div>
            <p>This ranking is independent and is not operated by Baltic Brand Forum.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
