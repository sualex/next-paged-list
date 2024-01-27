import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { ElementListDTO } from "@/shared/api";
import * as api from "@/shared/api";

export const useElements = () => {
  const router = useRouter();

  const { page = "1" } = router.query as {
    page: string;
  };

  return useQuery<ElementListDTO>({
    queryKey: ["elements", page],
    queryFn: () => api.getItemList(page),
    enabled: router.isReady,
    refetchOnWindowFocus: false,
    placeholderData: keepPreviousData,
  });
};
