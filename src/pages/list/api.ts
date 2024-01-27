import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticPropsContext } from "next";

import * as api from "@/shared/api";

export async function getStaticProps(context: GetStaticPropsContext) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["items", context?.params?.page || "1"],
    queryFn: () => {
      return api.getItemList(context?.params?.page || "1");
    },
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { page: "1" },
      },
      {
        params: { page: "2" },
      },
    ],
    fallback: true,
  };
}
