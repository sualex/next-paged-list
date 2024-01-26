import { css } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";

import { RootLayout } from "@/widgets/layout";

import { MuiProvider, ReactQueryProvider } from "./providers";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ReactQueryProvider pageProps={pageProps}>
        <MuiProvider {...props}>
          <RootLayout
            css={css`
              border: 4px solid red;
            `}
          >
            <Component {...pageProps} />
          </RootLayout>
        </MuiProvider>
      </ReactQueryProvider>
    </>
  );
};

export default App;
