import React from "react";
import Card from "../card/Card";
import { useState, useEffect } from "react";
import { fetchBooks } from "../../functions/helpers";

const CardHolder = ({ query }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  //console.log(books, typeof books);

  useEffect(() => {
    setLoading(true);
    fetchBooks(query)
      .then((books) => setBooks(books))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [query]);

  return (
    <>
      <div>
        {loading ? <p>Loading...</p> : <div>{<Card books={books} />}</div>}
      </div>
    </>
  );
};

export default CardHolder;
