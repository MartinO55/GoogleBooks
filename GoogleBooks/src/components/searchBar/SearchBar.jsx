import React, { useState } from "react";

const SearchBar = ({ value }) => {
  const [internal, setInternal] = useState(value);

  // console.log(query);

  const handleSubmit = () => {
    () => onSubmit(internal);
  };

  return (
    <>
      <h2>I would like to be a searchbar</h2>

      <input
        placeholder="search ..."
        onChange={(event) => setInternal(event.target.value)}
        value={internal}
      ></input>
      <button onClick={handleSubmit}>Search</button>
    </>
  );
};

export default SearchBar;
