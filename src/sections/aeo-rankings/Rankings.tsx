"use client";

import { useCallback, useEffect, useRef, useState, useSyncExternalStore } from "react";
import { Contact } from "./Contact";
import { COUNTRY, fmt, lc, loadModel, pct, type Model, type Summary } from "./data";
import { Company, Industry } from "./Detail";
import { Home } from "./Home";
import { href, readView, setPendingScroll, takePendingScroll } from "./nav";

function subscribe(cb: () => void) {
  const pop = () => {
    setPendingScroll(typeof history.state?.arY === "number" ? history.state.arY : 0);
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

/** Title and description for the view on screen; the home keeps what the server rendered. */
function setMeta(title: string, description: string) {
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
}

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
  const homeMeta = useRef<[string, string]>(["", ""]);
  const lastView = useRef("");

  const need = useCallback(() => {
    loadModel().then(setModel, () => setFailed(true));
  }, []);

  useEffect(() => {
    homeMeta.current = [document.title, document.querySelector('meta[name="description"]')?.getAttribute("content") ?? ""];
  }, []);

  // Home: load the dataset when the browser is idle. Other views: now.
  useEffect(() => {
    if (!ready || model) return;
    if (view.kind !== "home") return need();
    const w = window as Window & { requestIdleCallback?: (cb: () => void) => number };
    const id = w.requestIdleCallback ? w.requestIdleCallback(need) : window.setTimeout(need, 1500);
    return () => { if (!w.requestIdleCallback) window.clearTimeout(id); };
  }, [ready, view.kind, model, need]);

  // Resolve the view against the data: unknown company or industry falls back to the home; a missing country picks the best one.
  let body: React.ReactNode = null;
  let meta: [string, string] | null = null;
  let resolved = view;
  if (view.kind !== "home" && model) {
    if (view.kind === "company") {
      const b = model.brands.get(view.k);
      if (!b) resolved = { kind: "home" };
      else {
        const cc = view.cc && b.cr[view.cc] ? view.cc : b.home!;
        const r = b.cr[cc]!;
        body = <Company model={model} b={b} cc={cc} />;
        meta = [
          `${b.n} AI Visibility in ${COUNTRY[cc]}: #${r.ir} in ${r.ind}`,
          `${b.n} is #${r.ir} of ${r.iof} in ${lc(r.ind)} in ${COUNTRY[cc]} in AI answers from ChatGPT, Gemini, and Perplexity. Visibility ${pct(r.vis)}, sentiment ${pct(r.sen)}, score ${fmt(r.sc)}.`,
        ];
      }
    } else {
      const ind = model.industries.get(view.slug);
      const cc = ind && (view.cc && ind.rows[view.cc] ? view.cc : (["LV", "EE", "LT"] as const).find((c) => ind.rows[c]));
      if (!ind || !cc) resolved = { kind: "home" };
      else {
        const list = ind.rows[cc]!;
        body = <Industry model={model} slug={view.slug} cc={cc} />;
        meta = [
          `${ind.name} in ${COUNTRY[cc]}: Brands AI Recommends Most`,
          `${list[0].b.n} leads ${lc(ind.name)} in ${COUNTRY[cc]} in AI answers. See all ${list.length} companies AI names, with visibility, sentiment, and position.`,
        ];
      }
    }
  }

  useEffect(() => {
    if (!ready) return;
    if (resolved.kind === "home" && view.kind !== "home") history.replaceState(history.state, "", href(resolved));
    if (view.kind === "home" || model) document.getElementById("ar-sub")?.remove();
    if (meta) setMeta(...meta);
    else if (resolved.kind === "home" && homeMeta.current[0]) setMeta(...homeMeta.current);
    if (resolved.kind === "home" || model) {
      const y = takePendingScroll();
      if (y != null) window.scrollTo(0, y);
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
    <>
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
    </>
  );
}
