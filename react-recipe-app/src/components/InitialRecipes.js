import React from "react";
import FoodCard from "./FoodCard";
import "./InitialRecipes.css";
import useFetch from "../hooks/useFetch";

function InitialRecipes({ search, searchedRecipes, isSearched, isNotFound }) {
  const apiUrl = `${process.env.REACT_APP_BASE_URL}random?apiKey=${process.env.REACT_APP_API_KEY}&number=12`;
  const { data: recipes, loading } = useFetch(apiUrl);

  return (
    <div>
      {loading ? (
        <p className="message-line-loading">Loading...</p>
      ) : (
        <>
          <div>
            {isSearched === true && !search.length > 0 ? (
              <p className="message-line">Please type what you are looking for!</p>
            ) : isSearched === true && isNotFound === true ? (
              <p className="message-line">No recipes found!</p>
            ) : (
              <></>
            )}
          </div>
          <div>
            {isSearched === true ? (
              <ul className="recipe-list">
                {searchedRecipes?.map((recipe) => (
                  <li key={recipe.id}>
                    <FoodCard recipe={recipe} />
                  </li>
                ))}
              </ul>
            ) : (
              <ul className="recipe-list">
                {recipes?.recipes?.map((recipe) => (
                  <li key={recipe.id}>
                    <FoodCard recipe={recipe} />
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default InitialRecipes;
