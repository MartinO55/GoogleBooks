import React, { useState } from "react";

const SearchBar = () => {
  let placeholder = "";
  const [searchBooks, setSearchBooks] = useState("");

  const handleBookSearchChange = (query) => {
    setSearchBooks(query);
    console.log(searchBooks);
  };

  return (
    <>
      <h2>I would like to be a searchbar</h2>
      {
        <input
          onSubmit={handleBookSearchChange}
          placeholder="search ..."
        ></input>
      }
    </>
  );
};

export default SearchBar;
