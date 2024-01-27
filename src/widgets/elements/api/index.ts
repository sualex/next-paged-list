import {
  UseQueryOptions,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/router";

import { ElementListDTO } from "@/shared/api";
import * as api from "@/shared/api";

export const useElements = (
  queryOptions?: Partial<UseQueryOptions<ElementListDTO>>
) => {
  const router = useRouter();
  const { page = "1" } = router.query as {
    page: string | undefined;
  };
  return useQuery<ElementListDTO>({
    queryKey: ["elements", page],
    queryFn: () => api.getItemList(page),
    placeholderData: keepPreviousData,
    enabled: router?.isReady && !router?.isFallback,
    refetchOnWindowFocus: false,
    retry: false,
    ...queryOptions,
  });
};
