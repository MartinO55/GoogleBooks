import React from "react";
import { fetchBooks } from "../../functions/helpers";

const Card = ({ query }) => {
  let books = fetchBooks();
  console.log(books);

  return <></>;
};

export default Card;
