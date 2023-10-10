import React from "react";
import "./SearchBar.css";

function SearchBar({
  search,
  setSearch,
  setRecipes,
  setIsSearched,
  setIsNotFound,
}) {
  const getSearchedData = async () => {
    setIsSearched(true);
    if (search.length > 0) {
      try {
        const apiUrl = `${process.env.REACT_APP_BASE_URL}complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${search}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const recipesData = data.results || [];
        setRecipes(recipesData);
        data.results.length > 0 ? setIsNotFound(false) : setIsNotFound(true);
      } catch (error) {
        console.log(error);
      }
    } else {
      setRecipes([]);
    }
  };

  return (
    <div className="search-bar">
      <div className="search-bar-area">
        <h1 className="website-title">Hunger Fighter</h1>
        <h2 className="search-bar-title">Look for the recipes you want!</h2>
        <div className="search-input">
          <input
            className="input-area"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLowerCase());
              if (e.target.value === "") {
                setIsSearched(false);
              }
            }}
            placeholder="Type the ingredients!"
            type="text"
          />
          <button onClick={getSearchedData} className="search-btn">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
