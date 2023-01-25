import React from "react";
import { useState } from "react";
import { fetchBooks } from "../../functions/helpers";

const Card = () => {
  const [books, setBooks] = useState([]);
  return (
    <>
      {books.map((book, index) => (
        <p key={index}>{book.title}</p>
      ))}
    </>
  );
};

export default Card;
