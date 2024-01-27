import { css } from "@emotion/react";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListProps,
  Pagination,
  PaginationItem,
  Stack,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";

import { Link } from "@/shared/ui";

import { useItems } from "../model";

export const ItemList = ({ ...props }: ListProps) => {
  const { data } = useItems();
  const router = useRouter();

  const theme = useTheme();

  return (
    <Stack
      aria-label="List of items"
      spacing={1}
      css={css`
        border: 1px solid ${theme.palette.grey["300"]};
        border-radius: 0.5rem;
      `}
    >
      <Stack
        css={css`
          //border: 2px solid ${theme.palette.grey["300"]};
          padding: 0.5rem;
        `}
      >
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
      </Stack>
      <Divider />
      <Stack
        direction="row"
        justifyContent="center"
        css={css`
          //border: 2px solid ${theme.palette.grey["300"]};
          padding: 1rem;
        `}
      >
        <Pagination
          size="large"
          count={data?.pages}
          page={Number(router?.query?.page) || 1}
          color="primary"
          renderItem={(item) => {
            return (
              <PaginationItem
                component={Link}
                href={{
                  pathname: "/list/[page]",
                  query: {
                    page: item.page,
                  },
                }}
                {...item}
              />
            );
          }}
        />
      </Stack>
    </Stack>
  );
};
