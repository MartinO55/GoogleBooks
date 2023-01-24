import React, { useState } from "react";

const SearchBar = ({ query, setQuery }) => {
  console.log(query);
  return (
    <>
      <h2>I would like to be a searchbar</h2>

      <input
        placeholder="search ..."
        onChange={(event) => setQuery(event.target.value)}
        onSubmit={(event) => event.preventDefault}
      ></input>
    </>
  );
};

export default SearchBar;
