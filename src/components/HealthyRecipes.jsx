import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate import
import "./HealthyRecipes.css";
import quinoaImage from "../assets/quinoa-and-chicken-salad.jpg";
import sportifyIcon from "../assets/sportifyicon.png"; // Logo dosyasını import ettik

const HealthyRecipes = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const navigate = useNavigate(); // Navigate fonksiyonu

  return (
    <div className="healthy-recipes-screen">
      {/* Header */}
      <header className="header">
        {/* Logo */}
        <img src={sportifyIcon} alt="Sportify Logo" className="logo" />
        
        <div className="header-buttons">
          <button className="back-button-small" onClick={() => navigate("/home")}>
            ←
          </button>
          <button className="notifications-button" title="Notifications">
            🔔
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="recipe-content">
        <div className="recipe-image-container">
          <img
            src={quinoaImage}
            alt="Quinoa and Chicken Salad"
            className="recipe-image"
          />
        </div>
        <h2 className="recipe-title">Quinoa and Chicken Salad</h2>

        {/* Tabs */}
        <div className="tabs">
          <button
            className={`tab-button ${activeTab === "overview" ? "active" : ""}`}
            onClick={() => setActiveTab("overview")}
          >
            Overview
          </button>
          <button
            className={`tab-button ${activeTab === "ingredients" ? "active" : ""}`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </button>
          <button
            className={`tab-button ${activeTab === "directions" ? "active" : ""}`}
            onClick={() => setActiveTab("directions")}
          >
            Directions
          </button>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {activeTab === "overview" && (
            <div className="tab-panel">
              <p>
                Welcome to the Healthy Recipes section of Sportify. Here, you'll find a variety of
                nutritious and delicious recipes designed to fuel your workouts and support your fitness
                goals.
              </p>
              <ul>
                <li>Calories: 350 kcal</li>
                <li>Protein: 30 g</li>
                <li>Carbohydrates: 30 g</li>
                <li>Fat: 15 g</li>
              </ul>
            </div>
          )}
          {activeTab === "ingredients" && (
            <div className="tab-panel">
              <ul>
                <li>2 cups water or chicken broth</li>
                <li>2 chicken breasts</li>
                <li>1 tablespoon olive oil</li>
                <li>1 cucumber, chopped</li>
                <li>1/4 cup feta cheese</li>
                <li>1/4 cup lemon juice</li>
                <li>2 tablespoons olive oil</li>
              </ul>
            </div>
          )}
          {activeTab === "directions" && (
            <div className="directions-tab">
              <ol>
                <li>Rinse and drain the quinoa thoroughly.</li>
                <li>Cook the chicken breasts in olive oil.</li>
                <li>Chop the vegetables.</li>
                <li>Combine all ingredients in a large bowl.</li>
                <li>Enjoy your salad!</li>
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HealthyRecipes;
