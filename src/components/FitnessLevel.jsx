import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FitnessLevel.css";

const FitnessLevel = () => {
  const [selectedLevel, setSelectedLevel] = useState(""); // Kullanıcının seçtiği seviye
  const navigate = useNavigate();

  const handleStart = () => {
    if (!selectedLevel) {
      alert("Please select your fitness level before proceeding."); // Seçim yapılmazsa uyarı
      return;
    }
    navigate("/home"); // Home sayfasına yönlendirme
  };

  return (
    <div className="fitness-level-screen">
      <h1>Welcome to <span>Sportify!</span></h1>
      <p>Please choose your current fitness level</p>
      <div className="level-options">
        <button
          className={selectedLevel === "No physical activity" ? "selected" : ""}
          onClick={() => setSelectedLevel("No physical activity")}
        >
          No physical activity
        </button>
        <button
          className={selectedLevel === "Training 3 times a week" ? "selected" : ""}
          onClick={() => setSelectedLevel("Training 3 times a week")}
        >
          Training 3 times a week
        </button>
        <button
          className={selectedLevel === "Train 5+ times a week" ? "selected" : ""}
          onClick={() => setSelectedLevel("Train 5+ times a week")}
        >
          Train 5+ times a week
        </button>
      </div>
      <button className="start-button" onClick={handleStart}>
        Start
      </button>
    </div>
  );
};

export default FitnessLevel;
