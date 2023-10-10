import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import InitialRecipes from "../components/InitialRecipes";
import "./HomePage.css";

function HomePage() {
  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [isSearched, setIsSearched] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  return (
    <div className="home-page">
      <SearchBar
        search={search}
        setSearch={setSearch}
        setRecipes={setRecipes}
        setIsSearched={setIsSearched}
        setIsNotFound={setIsNotFound}
      />
      <h2>Have a look at what we have got for you!</h2>
      <InitialRecipes
        search={search}
        isSearched={isSearched}
        searchedRecipes={recipes}
        isNotFound={isNotFound}
      />
    </div>
  );
}

export default HomePage;
