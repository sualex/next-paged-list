import { css } from "@emotion/react";
import {
  Divider,
  LinearProgress,
  List,
  ListProps,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/router";

import { ElementListItem } from "@/entities/element";
import { Article, Nav, Section } from "@/shared/ui";

import { useElements } from "../api";
import { Pagination } from "./pagination";

export const Elements = ({ ...props }: ListProps) => {
  const router = useRouter();
  const theme = useTheme();
  const elements = useElements();
  return (
    <Article
      spacing={1}
      css={css`
        border: 1px solid ${theme.palette.grey["300"]};
        border-radius: 0.5rem;
      `}
    >
      {!elements?.data ? (
        <LinearProgress />
      ) : (
        <>
          <Nav aria-label="Cписок элементов" padding="0.5rem">
            <List {...props}>
              {elements?.data?.items?.map((item) => {
                return <ElementListItem key={item?.id} element={item} />;
              })}
            </List>
          </Nav>
          <Divider />
          <Section direction="row" justifyContent="center" padding="0.5rem">
            <Pagination
              aria-label="Cписок страниц"
              count={elements?.data?.pages}
              page={Number(router?.query?.page) || 1}
            />
          </Section>
        </>
      )}
    </Article>
  );
};
