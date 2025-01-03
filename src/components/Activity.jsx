import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Activity.css";

const Activity = () => {
  const [step, setStep] = useState(0);
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedGoal, setSelectedGoal] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState("");

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handleAreaChange = (e) => setSelectedArea(e.target.value);
  const handleGoalChange = (e) => setSelectedGoal(e.target.value);
  const handleDifficultyChange = (e) => setSelectedDifficulty(e.target.value);

  return (
    <div className="activity-container">
      <div className="activity-content">
        {/* Step 0: Let's Start Exercise Button */}
        {step === 0 && (
          <div className="section">
            <button className="start-btn" onClick={handleNextStep}>
              Let's Start Exercise
            </button>
          </div>
        )}

        {/* Step 1: Which area would you like to target? */}
        {step === 1 && (
          <div className="section">
            <h2>Which area would you like to target?</h2>
            <div className="options">
              <label>
                <input
                  type="radio"
                  value="legs"
                  checked={selectedArea === "legs"}
                  onChange={handleAreaChange}
                />
                Legs
              </label>
              <label>
                <input
                  type="radio"
                  value="abs"
                  checked={selectedArea === "abs"}
                  onChange={handleAreaChange}
                />
                Abs
              </label>
              <label>
                <input
                  type="radio"
                  value="arms"
                  checked={selectedArea === "arms"}
                  onChange={handleAreaChange}
                />
                Arms
              </label>
              <label>
                <input
                  type="radio"
                  value="back"
                  checked={selectedArea === "back"}
                  onChange={handleAreaChange}
                />
                Back
              </label>
            </div>
            <button
              className="next-btn"
              onClick={handleNextStep}
              disabled={!selectedArea}
            >
              Next
            </button>
          </div>
        )}

        {/* Step 2: What is your goal? */}
        {step === 2 && (
          <div className="section">
            <h2>What is your goal?</h2>
            <div className="options">
              <label>
                <input
                  type="radio"
                  value="strength"
                  checked={selectedGoal === "strength"}
                  onChange={handleGoalChange}
                />
                Strength Building
              </label>
              <label>
                <input
                  type="radio"
                  value="muscle"
                  checked={selectedGoal === "muscle"}
                  onChange={handleGoalChange}
                />
                Muscle Gain
              </label>
              <label>
                <input
                  type="radio"
                  value="flexibility"
                  checked={selectedGoal === "flexibility"}
                  onChange={handleGoalChange}
                />
                Flexibility Enhancement
              </label>
              <label>
                <input
                  type="radio"
                  value="endurance"
                  checked={selectedGoal === "endurance"}
                  onChange={handleGoalChange}
                />
                Endurance Improvement
              </label>
            </div>
            <button
              className="next-btn"
              onClick={handleNextStep}
              disabled={!selectedGoal}
            >
              Next
            </button>
          </div>
        )}

        {/* Step 3: Select your difficulty level */}
        {step === 3 && (
          <div className="section">
            <h2>Select your difficulty level</h2>
            <div className="options">
              <label>
                <input
                  type="radio"
                  value="beginner"
                  checked={selectedDifficulty === "beginner"}
                  onChange={handleDifficultyChange}
                />
                Beginner
              </label>
              <label>
                <input
                  type="radio"
                  value="intermediate"
                  checked={selectedDifficulty === "intermediate"}
                  onChange={handleDifficultyChange}
                />
                Intermediate
              </label>
              <label>
                <input
                  type="radio"
                  value="advanced"
                  checked={selectedDifficulty === "advanced"}
                  onChange={handleDifficultyChange}
                />
                Advanced
              </label>
            </div>
            <Link to="/home">
              <button
                className="next-btn"
                disabled={!selectedDifficulty}
              >
                Let's start the exercise
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Activity;
