import { useQuery } from "@tanstack/react-query/build/modern/index";

export const useItems = () => {
  return useQuery({
    queryKey: ["items"],
    queryFn: () =>
      fetch("https://taxivoshod.ru/testapi/?w=list&page=1").then((response) =>
        response.json()
      ),
  });
};
