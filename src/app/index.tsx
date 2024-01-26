import { css } from "@emotion/react";
import { AppCacheProvider as MuiCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";

import theme from "@/app/styles/theme";
import { RootLayout } from "@/widgets/layout";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;

  // Instead do this, which ensures each request has its own cache:
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MuiCacheProvider {...props}>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={pageProps.dehydratedState}>
              <ReactQueryDevtools initialIsOpen={false} />
              <RootLayout
                css={css`
                  border: 4px solid red;
                `}
              >
                <Component {...pageProps} />
              </RootLayout>
            </HydrationBoundary>
          </QueryClientProvider>
        </MuiThemeProvider>
      </MuiCacheProvider>
    </>
  );
};

export default App;
