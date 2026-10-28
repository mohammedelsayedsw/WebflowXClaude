"use client";

import { isCC, type CC } from "./data";
import { BASE } from "./paths";

export { BASE, PAGES, ROUTE } from "./paths";

/** The ranking is one route; the view lives in the query string: ?c=<company>&m=<country> or ?i=<industry>&m=<country>. */
export type View =
  | { kind: "home" }
  | { kind: "company"; k: string; cc: CC | null }
  | { kind: "industry"; slug: string; cc: CC | null };

export function readView(search: string): View {
  const p = new URLSearchParams(search);
  const m = p.get("m");
  const cc = isCC(m) ? m : null;
  const c = p.get("c");
  if (c) return { kind: "company", k: c, cc };
  const i = p.get("i");
  if (i) return { kind: "industry", slug: i, cc };
  return { kind: "home" };
}

export function href(v: View): string {
  if (v.kind === "home") return BASE;
  const q = v.kind === "company" ? `c=${encodeURIComponent(v.k)}` : `i=${encodeURIComponent(v.slug)}`;
  return `${BASE}?${q}${v.cc ? `&m=${v.cc}` : ""}`;
}

/** True on the ranking route itself (also under the /AEO-rankings rewrite), where views switch in place. */
export const onRanking = () => window.location.pathname.replace(/\/$/, "").toLowerCase() === BASE.toLowerCase();

/** Scroll position to apply after the next view renders: 0 after a click, the saved one after Back. */
let pendingScroll: number | null = null;
export const setPendingScroll = (y: number | null) => { pendingScroll = y; };
export const takePendingScroll = () => { const y = pendingScroll; pendingScroll = null; return y; };

/** Switches the view in place on the ranking route (Rankings listens for "ar-nav" and popstate); loads the ranking from other pages. */
export function navigate(v: View) {
  if (!onRanking()) {
    window.location.assign(href(v));
    return;
  }
  history.replaceState({ ...history.state, arY: window.scrollY }, "");
  history.pushState({ arY: 0 }, "", href(v));
  pendingScroll = 0;
  window.dispatchEvent(new Event("ar-nav"));
}

/** Kept for components that ask for a navigate function. */
export const useGo = () => navigate;

/** A real link: on the ranking route a plain click switches the view in place; on the other pages it loads the ranking. */
export function Go({ to, className, children, title, onClick }: { to: View; className?: string; children: React.ReactNode; title?: string; onClick?: () => void }) {
  return (
    <a
      href={href(to)}
      title={title}
      className={className}
      onClick={(e) => {
        onClick?.();
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0 || !onRanking()) return;
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}
