const BASE_URL = "https://taxivoshod.ru/testapi";

export interface ElementDTO {
  id?: number;
  name?: string;
  text?: string;
  result?: number;
  message?: string;
}

export interface ElementListDTO {
  page?: number;
  pages?: number;
  result?: number;
  items?: Array<ElementDTO>;
}

export function getItemList(page: string | string[] | null) {
  return fetch(`${BASE_URL}/?w=list${page ? `&page=${page}` : ""}`).then(
    (response) => response.json()
  ) as Promise<ElementListDTO>;
}

export function getItem(id?: string) {
  return fetch(`${BASE_URL}/?w=item${id ? `&id=${id}` : ""}`).then((response) =>
    response.json().then((element: ElementDTO) => {
      if (element?.result === 0) {
        throw new Error(element?.message);
      }
      return element;
    })
  ) as Promise<ElementDTO>;
}
