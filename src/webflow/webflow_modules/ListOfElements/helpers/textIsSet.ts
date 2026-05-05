import type { ReactNode } from "react";

import { isSet } from "../../Text/helpers/isSet";
import { toText } from "./toText";

export const textIsSet = (value: ReactNode | undefined): boolean =>
  isSet(toText(value));
