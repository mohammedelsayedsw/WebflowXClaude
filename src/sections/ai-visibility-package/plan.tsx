"use client";

import { createContext, useContext, useState } from "react";
import { scrollToId } from "./scrollTo";
import type { Plan } from "./status";

const PlanContext = createContext<{ plan: Plan; setPlan: (plan: Plan) => void }>({
  plan: "core",
  setPlan: () => {},
});

/** The plan picked in the enquiry form. Every call-to-action on the page sets it before scrolling there. */
export function PlanProvider({ children }: { children: React.ReactNode }) {
  const [plan, setPlan] = useState<Plan>("core");
  return <PlanContext.Provider value={{ plan, setPlan }}>{children}</PlanContext.Provider>;
}

export const usePlan = () => useContext(PlanContext);

export function PlanLink({ plan, className, children }: { plan: Plan; className?: string; children: React.ReactNode }) {
  const { setPlan } = usePlan();
  const scroll = scrollToId("interest");
  return (
    <a
      href="#interest"
      className={className}
      onClick={(e) => {
        setPlan(plan);
        scroll(e);
      }}
    >
      {children}
    </a>
  );
}
