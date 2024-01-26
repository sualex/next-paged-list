import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

export interface ItemDTO {
  id?: number;
  name?: string;
}

export interface ItemListDTO {
  page?: number;
  pages?: number;
  result?: number;
  items?: Array<ItemDTO>;
}

export const useItems = () => {
  const router = useRouter();
  const { page } = router.query as {
    page: string;
  };
  return useQuery<ItemListDTO>({
    queryKey: ["items", page ?? "1"],
    queryFn: () =>
      fetch(`https://taxivoshod.ru/testapi/?w=list&page=${page ?? "1"}`).then(
        (response) => response.json()
      ),
    enabled: router.isReady,
    placeholderData: keepPreviousData,
  });
};
