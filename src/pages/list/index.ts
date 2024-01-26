import { QueryClient, dehydrate } from "@tanstack/react-query";
import { GetStaticPropsContext } from "next";

import * as api from "@/shared/api";

export { ListPage } from "./ui";

export async function getStaticProps(context: GetStaticPropsContext) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["items", context?.params?.page || "1"],
    queryFn: () => api.getItemList(context?.params?.page || "1"),
  });
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export async function getStaticPaths() {
  const { pages } = await api.getItemList("1");
  const paths = [...Array(pages)]
    .map((_, i) => String(i + 1))
    .map((page) => ({
      params: { page },
    }));
  return { paths, fallback: "blocking" };
}
