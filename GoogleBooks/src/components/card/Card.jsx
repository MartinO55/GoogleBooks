import React from "react";
import { useState, useEffect } from "react";
import { fetchBooks } from "../../functions/helpers";

const Card = ({ query }) => {
  //call fetchbooks in a useffect
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const wrapper = async () => {
      setLoading(true);
      try {
        const books = await fetchBooks();
        setBooks(books);
        console.log(books);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    wrapper();
  }, []);

  return (
    <>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            {" "}
            {books.map((book, index) => (
              <p key={index}>{book.title}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Card;
