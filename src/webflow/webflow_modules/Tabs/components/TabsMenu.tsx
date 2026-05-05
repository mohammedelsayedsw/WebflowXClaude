"use client";
import * as React from "react";
import { cj } from "../../utils";

type TabsMenuProps = {
  tag?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

export type { TabsMenuProps };

const TabsMenu = React.forwardRef<HTMLElement, TabsMenuProps>(function TabsMenu(
  { tag = "div", className = "", ...props },
  ref
) {
  return React.createElement(tag, {
    ...props,
    className: cj(className, "w-tab-menu"),
    role: "tablist",
    ref,
  });
});

export default TabsMenu;
