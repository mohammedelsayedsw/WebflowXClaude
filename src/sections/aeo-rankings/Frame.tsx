"use client";

import { assetUrl } from "@/lib/assets";
import { Go } from "./nav";
import { ANSWERRANK_URL } from "./status";

/** The event app's sticky mark (top left) and "built by scandiweb" (top right). */
export function Top() {
  return (
    <header className="top">
      <Go to={{ kind: "home" }} className="mark">
        <span className="px px-a" /><span className="px px-b" />
        <span className="mark-t">Baltic<br />AI Brand<br />Ranking</span>
      </Go>
      <div className="top-r">
        <span className="by">built by <a href="https://scandiweb.com">scandiweb</a></span>
      </div>
    </header>
  );
}

/** Credits and the method note under every view. */
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
              Each industry was tested with the same buyer questions in Latvia, Estonia, and Lithuania, and every company named in the AI answers was scored. Visibility is the share of answers that mention the company. Sentiment is how favorably the answers describe it. Avg. position is where it appears in the answer, 1 being first. Score rolls the three into one number out of 100. The Baltic ranking lists companies AI names in all three countries.
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
