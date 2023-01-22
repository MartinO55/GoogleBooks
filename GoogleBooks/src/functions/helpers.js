import { APIHolder } from "./tempAPIHolder";

export const fetchBooks = async () => {
  let acceptableHeader = "application/json";

  let fetchURL = APIHolder;

  const response = await fetch(fetchURL, {
    headers: { Accept: acceptableHeader },
  });

  const data = response.json;

  const { books } = data;

  return books;
};
