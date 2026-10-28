"use client";

import { useState } from "react";

/** Hides table rows marked .more-row until the button is pressed. The rows stay in the HTML for crawlers. */
export function Expand({ children, label }: { children: React.ReactNode; label: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={open ? undefined : "clip"}>{children}</div>
      {!open && <button type="button" className="btn more" onClick={() => setOpen(true)}>{label}</button>}
    </>
  );
}
