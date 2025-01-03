import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import quinoaImage from "../assets/quinoa-and-chicken-salad.jpg";
import sportifyLogo from "../assets/sportifyicon.png"; // Logoyu import et

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-screen">
      {/* Header */}
      <header className="header">
        <img src={sportifyLogo} alt="Sportify Logo" className="logo" /> {/* Logo ekle */}
        <button className="notifications-button" title="Notifications">
          🔔
        </button>
      </header>

      {/* Main Content */}
      <div className="main-content">
        {/* Fitness Motivation Section */}
        <div className="motivation-section">
          <h2 className="section-title">Push Your Limits</h2>
          <p className="section-description">
            Believe in the process, push your limits, and watch yourself grow stronger every day.
          </p>
        </div>

        {/* Healthy Recipes Section */}
        <div className="recipes-section">
          <h2 className="section-title">Healthy Recipes</h2>
          <div className="recipe-card" onClick={() => navigate("/healthy-recipes")}>
            <img src={quinoaImage} alt="Quinoa and Chicken Salad" className="recipe-image" />
            <div className="recipe-info">
              <h3 className="recipe-title">Quinoa and Chicken Salad</h3>
              <p className="recipe-description">
                A nutritious salad with quinoa and chicken, perfect for fueling workouts.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="navigation-bar">
      <button onClick={() => navigate("/home")} className="nav-button active">
          <span className="nav-icon">🏠</span>
          <span className="nav-label">Home</span>
        </button>
        <button onClick={() => navigate("/activity")} className="nav-button">
          <span className="nav-icon">🏃</span>
          <span className="nav-label">Activity</span>
        </button>
        <button onClick={() => navigate("/calendar")} className="nav-button">
          <span className="nav-icon">📅</span>
          <span className="nav-label">Calendar</span>
        </button>

        <button onClick={() => navigate("/profile")} className="nav-button">
          <span className="nav-icon">👤</span>
          <span className="nav-label">Profile</span>
        </button>
      </nav>
    </div>
  );
};

export default Home;
