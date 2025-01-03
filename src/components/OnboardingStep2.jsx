import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnboardingStep2.css";

const OnboardingStep2 = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding-screen">
      <div className="content">
        <h1>Track Your <span>Daily Progress</span></h1>
        <p>
          Track your daily progress and see your improvements with Sportify. Stay motivated and achieve your fitness goals faster.
        </p>
        <button onClick={() => navigate("/onboarding/step3")}>
          Getting Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingStep2;
