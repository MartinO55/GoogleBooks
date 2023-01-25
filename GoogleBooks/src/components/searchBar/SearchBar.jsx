import React, { useState } from "react";

const SearchBar = ({ value, onSubmit }) => {
  const [internal, setInternal] = useState(value);

  // console.log(query);

  const handleChange = (event) => {
    setInternal(event.target.value);
    console.log(internal);
  };

  const handleSubmit = () => {
    onSubmit(internal);
    console.log(internal);
  };

  return (
    <>
      <h2>I would like to be a searchbar</h2>

      <input
        placeholder="search ..."
        onChange={handleChange}
        value={internal}
      ></input>
      <button onClick={handleSubmit}>Search</button>
    </>
  );
};

export default SearchBar;
