import React, { useState } from "react";
import FoodCard from "./FoodCard";
import "./Categories.css";
import useFetch from "../hooks/useFetch";

function Categories() {
  const [cuisineType, setCuisineType] = useState(null);

  const changeActiveCuisine = (activeCuisineType) => {
    setCuisineType(activeCuisineType);
  };

  const apiUrl = `${process.env.REACT_APP_BASE_URL}complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${cuisineType}`;
  const { data: cuisineData, loading } = useFetch(apiUrl);

  return (
    <div>
      <h1 className="category-title">Categories</h1>
      <div className="category-box">
        <button
          className="category-btn"
          onClick={() => {
            changeActiveCuisine("african");
          }}
        >
          African
        </button>
        <button
          className="category-btn"
          onClick={() => {
            changeActiveCuisine("american");
          }}
        >
          American
        </button>
        <button
          className="category-btn"
          onClick={() => {
            changeActiveCuisine("mediterranean");
          }}
        >
          Mediterranean
        </button>
        <button
          className="category-btn"
          onClick={() => {
            changeActiveCuisine("european");
          }}
        >
          European
        </button>
        <button
          className="category-btn"
          onClick={() => {
            changeActiveCuisine("indian");
          }}
        >
          Indian
        </button>
        <button
          className="category-btn"
          onClick={() => {
            changeActiveCuisine("italian");
          }}
        >
          Italian
        </button>
        <button
          className="category-btn"
          onClick={() => {
            changeActiveCuisine("japanese");
          }}
        >
          Japanese
        </button>
        <button
          className="category-btn"
          onClick={() => {
            changeActiveCuisine("asian");
          }}
        >
          Asian
        </button>
        <button
          className="category-btn"
          onClick={() => {
            changeActiveCuisine("mexican");
          }}
        >
          Mexican
        </button>
      </div>
      <div>
        {cuisineData?.results?.length > 0 ? (
          loading ? (
            <p className="categories-loading">Loading...</p>
          ) : (
            <div>
              <h1 className="categories-title">
                {cuisineType.toUpperCase()} CUISINE
              </h1>
              <ul className="cuisine-list">
                {cuisineData?.results?.map((cuisine) => (
                  <li key={cuisine.id}>
                    <FoodCard recipe={cuisine} />
                  </li>
                ))}
              </ul>
            </div>
          )
        ) : (
          <h1 className="select-cuisine-line">
            Please select a cuisine by clicking the buttons above!
          </h1>
        )}
      </div>
    </div>
  );
}

export default Categories;
