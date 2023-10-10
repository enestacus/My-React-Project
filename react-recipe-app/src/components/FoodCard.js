import React from "react";
import { Link } from "react-router-dom";
import "./FoodCard.css"

function FoodCard({recipe}) {


  return <Link className="food-card-link" to={`/recipe/${recipe.id}`}>
  <div className="food-card">
    <img
      className="recipe-image"
      src={recipe.image}
      alt={recipe.title}
    />
    <p>{recipe.title}</p>
  </div>
</Link>;
}

export default FoodCard;
