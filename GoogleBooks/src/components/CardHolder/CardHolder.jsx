import React from "react";
import Card from "../card/Card";
import { useState, useEffect } from "react";
import { fetchBooks } from "../../functions/helpers";

const CardHolder = ({ query = "" }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  //console.log(books, typeof books);

  useEffect(() => {
    setLoading(true);
    fetchBooks(query)
      .then((response) => {
        if (!response) {
          console.log("could not fetch data");
          return;
        }
        // console.log("books:", books);
        setBooks(response);
        console.log("state:", books);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : books.length === 0 ? (
          <p>No results</p>
        ) : (
          <div>
            {books.map((book) => (
              <Card title={book.volumeInfo.title} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CardHolder;
