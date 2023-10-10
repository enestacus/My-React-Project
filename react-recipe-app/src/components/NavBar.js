import React from "react";
import {Link} from "react-router-dom"
import "./NavBar.css"

function NavBar() {
    return (
      <nav className="NavBar">
        <Link to="/" className="link" id="home-link">
          Home
        </Link>
        <Link to="/about" className="link" id="about-link">
          About
        </Link>
        <Link to="/categories" className="link" id="categories-link">
          Categories
        </Link>
        <Link to="/random" className="link" id="random-recipe-link">
          Get Random Recipe
        </Link>
        
      </nav>
    );
  }
  
  export default NavBar;