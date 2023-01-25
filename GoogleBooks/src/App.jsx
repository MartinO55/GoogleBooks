import { useState } from "react";
import { fetchBooks } from "./functions/helpers.js";
import SearchBar from "./components/searchBar/SearchBar";
import Card from "./components/card/Card";

function App() {
  const [searchBooks, setSearchBooks] = useState("");

  const handleBookSearchChanges = (query) => {
    setSearchBooks(query);
    console.log(searchBooks);
  };

  return (
    <>
      {/* TODO: return header */}
      {/* {console.log(fetchBooks())} */}

      {/* TODO: Return Search bar */}
      {/* So We need a search wrapper that holds the app and card return functions */}
      <SearchBar value={searchBooks} onSubmit={handleBookSearchChanges} />

      {/* TODO: Return Cards of Books */}
      <Card query={searchBooks} />
    </>
  );
}

export default App;
