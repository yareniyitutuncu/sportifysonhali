import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnboardingStep1.css";

const OnboardingStep1 = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding-screen">
      <div className="content">
        <h1>Change the Way <span>You Exercise</span></h1>
        <p>
          Discover new ways to exercise with Sportify. Personalized workouts and insightful feedback will help you reach your goals faster.
        </p>
        <button onClick={() => navigate("/onboarding/step2")}>
          Getting Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingStep1;
