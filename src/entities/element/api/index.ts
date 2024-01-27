import {
  UseQueryOptions,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useMemo } from "react";

import { ElementDTO } from "@/shared/api";
import * as api from "@/shared/api";

export const useCurrentElement = (
  queryOptions?: Partial<UseQueryOptions<ElementDTO>>
) => {
  const router = useRouter();
  const { id } = router.query as {
    id: string | undefined;
  };
  const { isLoading: isQueryLoading, ...query } = useQuery<ElementDTO>({
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
