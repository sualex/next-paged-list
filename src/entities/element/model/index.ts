import {
  UseQueryOptions,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/router";

import { ElementListDTO } from "@/shared/api";
import * as api from "@/shared/api";

export const useElement = (
  queryOptions?: Partial<UseQueryOptions<ElementListDTO>>
) => {
  const router = useRouter();

  const { id } = router.query as {
    id: string;
  };

  return useQuery<ElementListDTO>({
    queryKey: ["element", id],
    queryFn: () => api.getItem(id),
    enabled: router.isReady,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    ...queryOptions,
  });
};
