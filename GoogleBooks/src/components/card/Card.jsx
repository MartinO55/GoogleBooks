import React from "react";
import { useState, useEffect } from "react";
import { fetchBooks } from "../../functions/helpers";

const Card = ({ query }) => {
  //call fetchbooks in a useffect
  const [books, setBooks] = useState([]);
  useEffect(() => {
    setBooks(fetchBooks());

    console.log(books);
  }, [books]);

  console.log(query);

  return (
    <>
      {/* {books.map((book, index) => (
        <p key={index}>{book.title}</p>
      ))} */}
    </>
  );
};

export default Card;
