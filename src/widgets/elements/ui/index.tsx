import { css } from "@emotion/react";
import { Divider, List, ListProps, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";

import { Element } from "@/entities/element";
import { Article, Nav, Section } from "@/shared/ui";

import { useItems } from "../model";
import { Pagination } from "./pagination";

export const Elements = ({ ...props }: ListProps) => {
  const router = useRouter();
  const theme = useTheme();

  const { isLoading, data } = useItems();

  useEffect(() => {
    console.log(
      "xxxxxxxxxxxxxxxxxxx router.isFallback ",
      router.isFallback,
      isLoading,
      data
    );
  }, [router.isFallback, data, isLoading]);

  return (
    <Article
      spacing={1}
      css={css`
        border: 1px solid ${theme.palette.grey["300"]};
        border-radius: 0.5rem;
      `}
    >
      <Nav aria-label="Cписок элементов" padding="0.5rem">
        <List {...props}>
          {data?.items?.map((item) => {
            return <Element key={item?.id} item={item} />;
          })}
        </List>
      </Nav>
      <Divider />
      <Section direction="row" justifyContent="center" padding="0.5rem">
        <Pagination
          aria-label="Cписок страниц"
          count={data?.pages}
          page={Number(router?.query?.page) || 1}
        />
      </Section>
    </Article>
  );
};