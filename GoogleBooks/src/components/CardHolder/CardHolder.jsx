import React from "react";
import Card from "../card/Card";
import { useState, useEffect, useRef } from "react";
import { fetchBooks } from "../../functions/helpers";
import styles from "./CardHolder.module.scss";

const CardHolder = ({ query = "" }) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  let booksdata = [];

  useEffect(() => {
    setLoading(true);

    fetchBooks(query)
      .then((response) => {
        if (!response) {
          console.log("could not fetch data");
          return;
        }
        console.log("books:", books);
        booksdata = response;
        console.log(booksdata);
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setBooks(booksdata);
        console.log(booksdata);
        setLoading(false);
      });
  }, [query]);

  return (
    <>
      <div className={styles.CardHolder}>
        {loading ? (
          <p>Loading...</p>
        ) : books.length === 0 ? (
          <p>No results</p>
        ) : (
          //didn't realise that this is the div that takes the flexwrap
          <div className={styles.CardHolder_loaded}>
            {books.map(
              (book, key) => (
                console.log("I mapped"),
                console.log(book.volumeInfo.title),
                (
                  <Card
                    title={book.volumeInfo.title}
                    author={book.volumeInfo.authors.join(", ")} //this is an array, so this just
                    description={book.volumeInfo.description}
                    image={book.volumeInfo.imageLinks}
                  />
                )
              )
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default CardHolder;
