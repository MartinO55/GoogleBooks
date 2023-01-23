import { useState } from "react";
import { fetchBooks } from "../helpers.js";
import SearchBar from "./components/searchBar/SearchBar";

function App() {
  return (
    <>
      {/* TODO: return header */}
      {console.log(fetchBooks())}

      {/* TODO: Return Search bar */}
      <SearchBar />

      {/* TODO: Return Cards of Books */}
    </>
  );
}

export default App;
