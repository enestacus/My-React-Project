import React, { useState } from "react";
import FoodCard from "../components/FoodCard";
import "./RandomPage.css";

function RandomPage() {
  const [recipe, setRecipe] = useState([]);
  const [error, setError] = useState(null);

  const fetchRandomRecipe = async () => {
    try {
      const apiUrl = `${process.env.REACT_APP_BASE_URL}random?apiKey=${process.env.REACT_APP_API_KEY}`;
      const response = await fetch(apiUrl);
      const data = await response.json();
      const recipeData = data.recipes || [];
      setRecipe(recipeData);
    } catch (error) {
      setError(error);
    }
  };

  const handleClick = () => {
    fetchRandomRecipe();
  };

  if (error) {
    return <p>An error was encountered. Please try again later!</p>;
  }

  return (
    <div className="random-page">
      <h1>Get the Chef's advice!</h1>
      <p>
        Unlock the culinary secrets of a master chef by simply clicking the
        button below. With just one click, you gain access to a world of
        gastronomic wisdom. Discover expert advice on crafting the perfect menu,
        whether it's for a special occasion or everyday dining. Let the chef's
        guidance elevate your dining experience to new heights, making every
        meal a delectable masterpiece. Don't wait; click the button now and
        savor the difference!
      </p>
      <button onClick={handleClick}>Get the Chef's advice!</button>
      <div>
        <ul className="recipe-list">
          {recipe.map((recipe) => (
            <li key={recipe.id}>
              <FoodCard recipe={recipe} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RandomPage;
