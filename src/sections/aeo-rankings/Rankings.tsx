"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import "./bbf.css";
import { Contact } from "./Contact";
import { COUNTRY, loadModel, type Model, type Summary } from "./data";
import { Company, Industry } from "./Detail";
import { Bottom, Top } from "./Frame";
import { Home } from "./Home";
import { NavContext, href, readView, type View } from "./nav";

/** Scroll position to apply after the next view renders: 0 after a click, the saved one after Back. */
let pendingScroll: number | null = null;

function subscribe(cb: () => void) {
  const pop = () => {
    pendingScroll = typeof history.state?.arY === "number" ? history.state.arY : 0;
    cb();
  };
  window.addEventListener("popstate", pop);
  window.addEventListener("ar-nav", cb);
  return () => {
    window.removeEventListener("popstate", pop);
    window.removeEventListener("ar-nav", cb);
  };
}
const noop = () => () => {};

/**
 * One route, three views: home (server-rendered from summary.json), a company, an industry.
 * Company and industry views read the full dataset, which loads in the background on the home.
 */
export function Rankings({ summary }: { summary: Summary }) {
  // The server and the hydration pass render the home; the URL is read right after.
  const search = useSyncExternalStore(subscribe, () => location.search, () => "");
  const ready = useSyncExternalStore(noop, () => true, () => false);
  const view = readView(search);
  const [model, setModel] = useState<Model | null>(null);
  const [failed, setFailed] = useState(false);
  const homeTitle = useRef("");
  const lastView = useRef("");

  const need = useCallback(() => {
    loadModel().then(setModel, () => setFailed(true));
  }, []);

  useEffect(() => {
    homeTitle.current = document.title;
  }, []);

  // Home: load the dataset when the browser is idle. Other views: now.
  useEffect(() => {
    if (!ready || model) return;
    if (view.kind !== "home") return need();
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    const id = w.requestIdleCallback ? w.requestIdleCallback(need) : window.setTimeout(need, 1500);
    return () => { if (!w.requestIdleCallback) window.clearTimeout(id); };
  }, [ready, view.kind, model, need]);

  const go = useCallback((v: View) => {
    history.replaceState({ ...history.state, arY: window.scrollY }, "");
    history.pushState({ arY: 0 }, "", href(v));
    pendingScroll = 0;
    window.dispatchEvent(new Event("ar-nav"));
  }, []);

  // Resolve the view against the data: unknown company or industry falls back to the home; a missing country picks the best one.
  let body: React.ReactNode = null;
  let title = homeTitle.current;
  let resolved = view;
  if (view.kind !== "home" && model) {
    if (view.kind === "company") {
      const b = model.brands.get(view.k);
      if (!b) resolved = { kind: "home" };
      else {
        const cc = view.cc && b.cr[view.cc] ? view.cc : b.home!;
        body = <Company model={model} b={b} cc={cc} />;
        title = `${b.n} in AI answers, ${COUNTRY[cc]} | Baltic AI Brand Ranking | scandiweb`;
      }
    } else {
      const ind = model.industries.get(view.slug);
      const cc = ind && (view.cc && ind.rows[view.cc] ? view.cc : (["LV", "EE", "LT"] as const).find((c) => ind.rows[c]));
      if (!ind || !cc) resolved = { kind: "home" };
      else {
        body = <Industry model={model} slug={view.slug} cc={cc} />;
        title = `${ind.name} in ${COUNTRY[cc]} | Baltic AI Brand Ranking | scandiweb`;
      }
    }
  }

  useEffect(() => {
    if (!ready) return;
    if (resolved.kind === "home" && view.kind !== "home") history.replaceState(history.state, "", href(resolved));
    if (view.kind === "home" || model) document.getElementById("ar-sub")?.remove();
    if (title) document.title = title;
    if (pendingScroll != null && (resolved.kind === "home" || model)) {
      const y = pendingScroll;
      pendingScroll = null;
      window.scrollTo(0, y);
    }
    const seen = resolved.kind === "company" && model ? `${resolved.k}|${resolved.cc}` : "";
    if (seen && seen !== lastView.current) {
      const w = window as unknown as { dataLayer?: unknown[] };
      (w.dataLayer ||= []).push({ event: "aeo_rankings_company_view", company: view.kind === "company" ? view.k : "" });
    }
    lastView.current = seen;
  });

  const waiting = view.kind !== "home" && !model;

  return (
    <NavContext.Provider value={go}>
      <div className="bbf">
        <Top />
        {/* the home stays mounted under a company or industry, so Back returns to the same tables, chips and scroll */}
        <div data-ar-home hidden={resolved.kind !== "home"}>
          <Home summary={summary} model={model} need={need} />
          <Contact />
        </div>
        {resolved.kind !== "home" && body}
        {(waiting || !ready) && (
          <div data-ar-wait className="wait" style={ready ? { display: "grid" } : undefined}>
            {failed ? "The ranking did not load. Refresh the page." : "Loading the ranking"}
          </div>
        )}
        <Bottom />
      </div>
    </NavContext.Provider>
  );
}
