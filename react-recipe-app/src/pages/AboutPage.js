import React from "react";
import { useNavigate } from "react-router-dom";
import "./AboutPage.css";

function AboutPage() {
  const navigate = useNavigate();

  const handleAboutBtn = () => {
    navigate("/");
  };

  return (
    <div className="about-page">
      <h1>Hunger Fighter: Your Ultimate Recipe Destination</h1>
      <p>
        Introducing Hunger Fighter, your culinary companion for endless food
        inspiration and delectable recipes. With a vast and diverse collection
        of recipes, we cater to all palates, dietary preferences, and skill
        levels. Whether you're a novice cook or a seasoned chef, we've got you
        covered, from comforting classics like spaghetti carbonara to exotic
        delights like Thai green curry. Customize recipes based on what's in
        your kitchen, never waste food again. Our detailed cooking instructions,
        tips, and techniques will boost your cooking confidence. Join our
        vibrant community, share your triumphs, seek advice, and exchange
        cooking tips with fellow food enthusiasts. Say goodbye to food boredom
        and hello to culinary creativity with Hunger Fighter. Transform your
        kitchen into a culinary playground, one delicious recipe at a time.
        Explore Hunger Fighter today and embark on a flavorful journey that will
        leave you craving for more.
      </p>
      <button onClick={handleAboutBtn}>Start your recipe journey!</button>
    </div>
  );
}

export default AboutPage;
