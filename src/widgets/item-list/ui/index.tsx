import { css } from "@emotion/react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListProps,
} from "@mui/material";

import { Link } from "@/shared/ui";

import { useItems } from "../model";

export const ItemList = ({ ...props }: ListProps) => {
  const { data } = useItems();
  return (
    <nav aria-label="List of items">
      <List {...props}>
        {data?.items?.map((item) => {
          return (
            <ListItem key={item?.id} disablePadding>
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
        })}
      </List>
    </nav>
  );
};
