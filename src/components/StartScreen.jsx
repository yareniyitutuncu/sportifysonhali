import React from "react";
import { useNavigate } from "react-router-dom";
import "./StartScreen.css";

const StartScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="start-screen">
      <div className="content">
        <h1>
          Welcome to <span>Sportify!</span>
        </h1>
        <button className="start-button" onClick={() => navigate("/signin")}>
          LET'S START
        </button>
      </div>
    </div>
  );
};

export default StartScreen;
