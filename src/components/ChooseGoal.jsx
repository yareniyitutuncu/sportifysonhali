import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ChooseGoal.css";

const ChooseGoal = () => {
  const [selectedGoal, setSelectedGoal] = useState(""); // Seçilen hedef
  const navigate = useNavigate();

  const handleNext = () => {
    if (!selectedGoal) {
      alert("Please select a goal before proceeding.");
      return;
    }
    navigate("/onboarding/fitness-level"); // Bir sonraki sayfaya yönlendirme
  };

  return (
    <div className="choose-goal-screen">
      <h1>Welcome to <span>Sportify!</span></h1>
      <p>Please choose your goal</p>
      <div className="goal-options">
        <button
          className={selectedGoal === "Healthy Living" ? "selected" : ""}
          onClick={() => setSelectedGoal("Healthy Living")}
        >
          Healthy Living
        </button>
        <button
          className={selectedGoal === "Lose Weight" ? "selected" : ""}
          onClick={() => setSelectedGoal("Lose Weight")}
        >
          Lose Weight
        </button>
        <button
          className={selectedGoal === "Keep Fit" ? "selected" : ""}
          onClick={() => setSelectedGoal("Keep Fit")}
        >
          Keep Fit
        </button>
        <button
          className={selectedGoal === "Build Muscle" ? "selected" : ""}
          onClick={() => setSelectedGoal("Build Muscle")}
        >
          Build Muscle
        </button>
        <button
          className={selectedGoal === "Establish Nutrition" ? "selected" : ""}
          onClick={() => setSelectedGoal("Establish Nutrition")}
        >
          Establish Nutrition
        </button>
      </div>
      <button className="next-button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default ChooseGoal;
