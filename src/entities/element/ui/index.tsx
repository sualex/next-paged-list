import * as React from "react";

import { ElementListItem } from "@/entities/element";
import { ElementDialog } from "@/entities/element/ui/dialog";
import { IElement } from "@/shared/api";

export const Element = ({ element }: { element?: IElement }) => {
  return element ? <ElementListItem element={element} /> : <ElementDialog />;
};
