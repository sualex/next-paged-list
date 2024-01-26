import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

import { ItemListDTO } from "@/shared/api";
import * as api from "@/shared/api";

export const useItems = () => {
  const router = useRouter();
  const { page = "1" } = router.query as {
    page: string;
  };
  return useQuery<ItemListDTO>({
    queryKey: ["items", page],
    queryFn: () => api.getItemList(page),
    enabled: router.isReady,
    placeholderData: keepPreviousData,
  });
};
