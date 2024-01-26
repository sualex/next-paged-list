import { useQuery } from "@tanstack/react-query";

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
  return useQuery<ItemListDTO>({
    queryKey: ["items"],
    queryFn: () =>
      fetch("https://taxivoshod.ru/testapi/?w=list&page=1").then((response) =>
        response.json()
      ),
  });
};
