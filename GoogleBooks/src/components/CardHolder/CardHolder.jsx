import React from "react";
import Card from "../card/Card";
import { useState, useEffect } from "react";
import { fetchBooks } from "../../functions/helpers";
import styles from "./CardHolder.module.scss";

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
      <div className={styles.CardHolder}>
        {loading ? (
          <p>Loading...</p>
        ) : books.length === 0 ? (
          <p>No results</p>
        ) : (
          //didn't realise that this is the div that takes the flexwrap
          <div className={styles.CardHolder_loaded}>
            {books.map((book, key) => (
              <Card
                title={book.volumeInfo.title}
                author={book.volumeInfo.authors.join(", ")} //this is an array
                description={book.volumeInfo.description}
                image={book.volumeInfo.imageLinks}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CardHolder;
