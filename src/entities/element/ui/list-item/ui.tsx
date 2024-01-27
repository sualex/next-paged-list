import { css } from "@emotion/react";
import {
  ListItem,
  ListItemButton,
  ListItemProps,
  ListItemText,
} from "@mui/material";
import * as React from "react";

import { IElement } from "@/shared/api";
import { Link } from "@/shared/ui";

export const ElementListItem = ({
  element,
  ...props
}: ListItemProps & {
  element: IElement;
}) => {
  return (
    <ListItem disablePadding {...props}>
      <ListItemButton
        component={Link}
        href={`/element/${element?.id}?page=${element?.page}`}
      >
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
