export const fetchBooks = async (query) => {
  let acceptableHeader = "application/json";
  let fetchURL =
    //add query to string
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=AIzaSyCZ15z_YoUnk6OVD-OVBNIMgAIC2XQzz-o`;
  const response = await fetch(fetchURL, {
    headers: { Accept: acceptableHeader },
  });

  const data = response.json;

  const { books } = data;

  return books;
};
