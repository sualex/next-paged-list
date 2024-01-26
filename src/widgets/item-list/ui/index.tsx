import { css } from "@emotion/react";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListProps,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";

import { Link } from "@/shared/ui";

import { useItems } from "../model";

export const ItemList = ({ ...props }: ListProps) => {
  const { data } = useItems();
  const router = useRouter();
  return (
    <Stack aria-label="List of items" spacing={1}>
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
      <Stack direction="row" justifyContent="center">
        <Pagination
          size="large"
          count={data?.pages}
          color="primary"
          renderItem={(item) => {
            return (
              <PaginationItem
                component={Link}
                href={`${router.route}?page=${item.page}`}
                {...item}
              />
            );
          }}
        />
      </Stack>
    </Stack>
  );
};
