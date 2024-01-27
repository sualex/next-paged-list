import {
  UseQueryOptions,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useMemo } from "react";

import { IElement } from "@/shared/api";
import * as api from "@/shared/api";

export const useCurrentElement = (
  queryOptions?: Partial<UseQueryOptions<IElement>>
) => {
  const router = useRouter();
  const { id } = router.query as {
    id: string | undefined;
  };
  const { isLoading: isQueryLoading, ...query } = useQuery<IElement>({
    queryKey: ["element", id],
    queryFn: () => api.getItem(id),
    placeholderData: keepPreviousData,
    enabled: router.isReady,
    refetchOnWindowFocus: false,
    retry: false,
    ...queryOptions,
  });
  const isLoading = !router?.isReady || isQueryLoading;
  return useMemo(() => ({ isLoading, ...query }), [isLoading, query]);
};
