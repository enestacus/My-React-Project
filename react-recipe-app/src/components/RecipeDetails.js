import React from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetails.css";
import useFetch from "../hooks/useFetch";

function RecipeDetails() {
  const { id } = useParams();

  const apiUrl = `${process.env.REACT_APP_BASE_URL}${id}/information?apiKey=${process.env.REACT_APP_API_KEY}`;
  const { data: recipeDetails, loading } = useFetch(apiUrl);

  return (
    <div className="recipe-detail-box">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <img
            className="recipe-details-image"
            src={recipeDetails.image}
            alt={recipeDetails.title}
          />
          <h2>{recipeDetails.title}</h2>
          <p
            className="summary"
            dangerouslySetInnerHTML={{ __html: recipeDetails.summary }}
          ></p>
          <p>Cooking Time: {recipeDetails.readyInMinutes} minutes</p>
          <p>Servings: {recipeDetails.servings} servings</p>
          <p>Health Score: {recipeDetails.healthScore} </p>
          <h3 className="ingredients">Ingredients</h3>
          <ul>
            {recipeDetails.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id} className="ingredient">
                {ingredient.original}
              </li>
            ))}
          </ul>
          <h3 className="instructions">Instructions</h3>

          {recipeDetails.analyzedInstructions?.map((instruction, index) => (
            <ol key={index} className="instructions-list">
              {instruction.steps?.map((step) => (
                <li key={step.number}>{step.step}</li>
              ))}
            </ol>
          ))}
        </>
      )}
    </div>
  );
}

export default RecipeDetails;
