import { css } from "@emotion/react";
import { Stack } from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Stack
      css={css`
        border: 4px solid red;
      `}
    />
  );
}
