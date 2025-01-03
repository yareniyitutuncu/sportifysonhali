import React from "react";
import { useNavigate } from "react-router-dom";
import "./OnboardingStep3.css";

const OnboardingStep3 = () => {
  const navigate = useNavigate();

  return (
    <div className="onboarding-screen">
      <div className="content">
        <h1>The Future of <span>Daily Lifestyle</span></h1>
        <p>
          Transform your routine with personalized training programs, expert insights, and instant feedback to motivate you.
        </p>
        <button onClick={() => navigate("/onboarding/create-profile")}>
          Getting Started
        </button>
      </div>
    </div>
  );
};

export default OnboardingStep3;
