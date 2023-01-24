import React, { useState } from "react";

const SearchBar = () => {
  const [searchBooks, setSearchBooks] = useState("");

  // console.log(query);

  const handleSubmit = () => {
    () => onSubmit(searchBooks);
  };

  return (
    <>
      <h2>I would like to be a searchbar</h2>

      <input
        placeholder="search ..."
        onChange={(event) => setSearchBooks(event.target.value)}
        value={searchBooks}
      ></input>
      <button onClick={handleSubmit}>Search</button>
    </>
  );
};

export default SearchBar;
