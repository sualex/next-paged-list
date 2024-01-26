import { QueryClient, dehydrate } from "@tanstack/react-query";

import * as api from "@/shared/api";

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["items", "1"],
    queryFn: () => api.getItemList(),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export { ListPage as default } from "@/pages/list";
