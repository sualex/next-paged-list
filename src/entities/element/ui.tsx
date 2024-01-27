import { css } from "@emotion/react";
import {
  ListItem,
  ListItemButton,
  ListItemProps,
  ListItemText,
} from "@mui/material";
import { useEffect } from "react";
import * as React from "react";

import { useElement } from "@/entities/element/model";
import { ElementDTO } from "@/shared/api";
import { Link } from "@/shared/ui";

export const Element = ({
  element,
  ...props
}: ListItemProps & {
  element?: ElementDTO;
}) => {
  const requestedElement = useElement({
    enabled: !element,
  });

  useEffect(() => {
    console.log("xxxxxxxxxxxxxxxxxxxxxx oooooooooo ", requestedElement?.data);
  });

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
