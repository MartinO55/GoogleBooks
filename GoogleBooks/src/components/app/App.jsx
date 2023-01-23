import { useState } from "react";
import { fetchBooks } from "../../functions/helpers.js";
import SearchBar from "../searchBar/SearchBar";

function App() {
  return (
    <>
      {/* TODO: return header */}
      {console.log(fetchBooks())}

      {/* TODO: Return Search bar */}

      {/* TODO: Return Cards of Books */}
    </>
  );
}

export default App;
