"use client";
import * as React from "react";
import * as utils from "../../utils";
import { Props } from "../../types";

type HtmlEmbedProps = Props<"div", { tag?: React.ElementType; value: string }>;

const HtmlEmbed = React.forwardRef<HTMLElement, HtmlEmbedProps>(
  function HtmlEmbed(
    { tag = "div", className = "", value = "", ...props },
    ref
  ) {
    return React.createElement(tag, {
      className: className + " w-embed",
      dangerouslySetInnerHTML: { __html: utils.removeUnescaped(value) },
      ...props,
      ref,
    });
  }
);

export default HtmlEmbed;
