import { css } from "@emotion/react";
import {
  ListItem,
  ListItemButton,
  ListItemProps,
  ListItemText,
} from "@mui/material";
import * as React from "react";

import { ElementListElementDTO } from "@/shared/api";
import { Link } from "@/shared/ui";

export const Element = ({
  item,
  ...props
}: ListItemProps & {
  item: ElementListElementDTO;
}) => {
  return (
    <ListItem disablePadding {...props}>
      <ListItemButton component={Link} href={`/item/${item?.id}`}>
        <ListItemText
          primary={item?.name}
          css={css`
            text-align: center;
          `}
        />
      </ListItemButton>
    </ListItem>
  );
};
