const BASE_URL = "https://taxivoshod.ru/testapi";

export interface ElementListElementDTO {
  id?: number;
  name?: string;
}

export interface ElementListDTO {
  page?: number;
  pages?: number;
  result?: number;
  items?: Array<ElementListElementDTO>;
}

export interface ElementDTO {
  page?: number;
  name?: string;
  text?: string;
}

export function getItemList(page: string | string[] | null) {
  return fetch(`${BASE_URL}/?w=list${page ? `&page=${page}` : ""}`).then(
    (response) => response.json()
  ) as Promise<ElementListDTO>;
}

export function getItem(id: string) {
  return fetch(`${BASE_URL}/?w=item&id=${id}`).then((response) =>
    response.json()
  ) as Promise<ElementDTO>;
}
