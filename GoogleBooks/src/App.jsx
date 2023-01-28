import { useState } from "react";
import Header from "./components/header/Header";
import SearchBar from "./components/searchBar/SearchBar";

import CardHolder from "./components/CardHolder/CardHolder.jsx";

function App() {
  const [searchBooks, setSearchBooks] = useState("");

  const handleBookSearchChanges = (query) => {
    setSearchBooks(query);
  };

  return (
    <>
      <Header />

      <SearchBar value={searchBooks} onSubmit={handleBookSearchChanges} />

      <CardHolder query={searchBooks} />
    </>
  );
}

export default App;
