import * as React from "react";

import { ElementListItem } from "@/entities/element";
import { ElementDialog } from "@/entities/element/ui/dialog";
import { ElementDTO } from "@/shared/api";

export const Element = ({ element }: { element?: ElementDTO }) => {
  return element ? <ElementListItem element={element} /> : <ElementDialog />;
};
