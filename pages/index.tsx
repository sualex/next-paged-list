import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const items = useQuery({
    queryKey: ["items"],
    queryFn: () =>
      fetch("https://taxivoshod.ru/testapi/?w=list&page=1").then((response) =>
        response.json()
      ),
  });
  return (
    <Stack
      css={css`
        border: 4px solid green;
      `}
    />
  );
}
