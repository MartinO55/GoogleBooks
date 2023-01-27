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
          throw new error("could not fetch data");
        }
        console.log("books:", books);
        setBooks(response);
        console.log("state:", books);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [query]);

  console.log(books);
  return (
    <>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : books.length === 0 ? (
          <p>No results</p>
        ) : (
          <div>{<Card books={books} />}</div>
        )}
      </div>
    </>
  );
};

export default CardHolder;
