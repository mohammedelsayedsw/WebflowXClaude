"use client";

import { createContext, useContext } from "react";
import { APP_BASE_PATH } from "@/lib/appBasePath";
import { isCC, type CC } from "./data";

/** The page is one route; the view lives in the query string: ?c=<company>&m=<country> or ?i=<industry>&m=<country>. */
export type View =
  | { kind: "home" }
  | { kind: "company"; k: string; cc: CC | null }
  | { kind: "industry"; slug: string; cc: CC | null };

export const BASE = `${APP_BASE_PATH}/aeo-rankings`;

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

export const NavContext = createContext<(v: View) => void>(() => {});
export const useGo = () => useContext(NavContext);

/** A real link (opens in a new tab on cmd-click) that switches the view in place on a plain click. */
export function Go({ to, className, children, title }: { to: View; className?: string; children: React.ReactNode; title?: string }) {
  const go = useGo();
  return (
    <a
      href={href(to)}
      title={title}
      className={className}
      onClick={(e) => {
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
        e.preventDefault();
        go(to);
      }}
    >
      {children}
    </a>
  );
}
