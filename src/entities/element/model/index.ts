import {
  UseQueryOptions,
  keepPreviousData,
  useQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/router";

import { ElementDTO } from "@/shared/api";
import * as api from "@/shared/api";

export const useElement = (
  queryOptions?: Partial<UseQueryOptions<ElementDTO>>
) => {
  const router = useRouter();

  const { id } = router.query as {
    id: string;
  };

  return useQuery<ElementDTO>({
    queryKey: ["element", id],
    queryFn: () => api.getItem(id),
    enabled: router.isReady,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
    ...queryOptions,
  });
};
