import { css } from "@emotion/react";
import {
  ListItem,
  ListItemButton,
  ListItemProps,
  ListItemText,
} from "@mui/material";
import * as React from "react";

import { ElementDTO } from "@/shared/api";
import { Link } from "@/shared/ui";

export const Element = ({
  element,
  ...props
}: ListItemProps & {
  element: ElementDTO;
}) => {
  return (
    <ListItem disablePadding {...props}>
      <ListItemButton component={Link} href={`/element/${element?.id}`}>
        <ListItemText
          primary={element?.name}
          css={css`
            text-align: center;
          `}
        />
      </ListItemButton>
    </ListItem>
  );
};
