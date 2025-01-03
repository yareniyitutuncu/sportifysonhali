import React from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword1.css";

const ForgotPassword1 = () => {
  const navigate = useNavigate();

  return (
    <div className="forgot-password1-screen">
      <div className="content">
        <h1>Forgot Password</h1>
        <p>Enter your email address below, and we'll send you instructions to reset your password.</p>
        <form>
          <input type="email" placeholder="Your email address" required />
          <button type="submit" onClick={() => navigate("/signin")}>
            Send Instructions
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword1;
