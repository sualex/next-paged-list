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
    <nav aria-label="secondary mailbox folders">
      <List {...props}>
        {data?.items?.map((item) => {
          return (
            <ListItem key={item?.id} disablePadding>
              <ListItemButton component={Link} href={`/item/${item?.id}`}>
                <ListItemText primary={item?.name} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </nav>
  );
};
