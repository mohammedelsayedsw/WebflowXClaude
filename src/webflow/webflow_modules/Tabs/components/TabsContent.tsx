"use client";
import * as React from "react";
import { cj } from "../../utils";

type TabsContentProps = {
  tag?: React.ElementType;
  className?: string;
  children?: React.ReactNode;
};

export type { TabsContentProps };

const TabsContent = React.forwardRef<HTMLElement, TabsContentProps>(
  function TabsContent({ tag = "div", className = "", ...props }, ref) {
    return React.createElement(tag, {
      ...props,
      className: cj(className, "w-tab-content"),
      ref,
    });
  }
);

export default TabsContent;
