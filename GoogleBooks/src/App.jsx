import { useState } from "react";
import { fetchBooks } from "./functions/helpers.js";
import SearchBar from "./components/searchBar/SearchBar";
import Card from "./components/card/Card";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      {/* TODO: return header */}
      {/* {console.log(fetchBooks())} */}

      {/* TODO: Return Search bar */}
      <SearchBar />

      {/* TODO: Return Cards of Books */}
      <Card />
    </>
  );
}

export default App;
