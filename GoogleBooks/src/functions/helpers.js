export const fetchBooks = async () => {
  let acceptableHeader = "application/json";
  let fetchURL =
    "https://www.googleapis.com/books/v1/volumes?q=search-terms&key=AIzaSyCZ15z_YoUnk6OVD-OVBNIMgAIC2XQzz-o";
  const response = await fetch(fetchURL, {
    headers: { Accept: acceptableHeader },
  });

  const data = response.json;

  const { books } = data;

  return books;
};
