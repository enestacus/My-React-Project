import "./App.css";
import React from "react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import CategoriesPage from "./pages/CategoriesPage";
import RandomPage from "./pages/RandomPage";
import RecipeDetails from "./components/RecipeDetails";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/about"
            element={
              <>
                <AboutPage />
              </>
            }
          />
          <Route
            path="/categories"
            element={
              <>
                <CategoriesPage />
              </>
            }
          />
          <Route
            path="/random"
            element={
              <>
                <RandomPage />
              </>
            }
          />
          <Route
            path="/recipe/:id"
            element={
              <>
                <RecipeDetails />
              </>
            }
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
