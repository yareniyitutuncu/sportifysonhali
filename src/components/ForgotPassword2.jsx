import React from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword2.css";

const ForgotPassword2 = () => {
  const navigate = useNavigate();

  return (
    <div className="forgot-password2-screen">
      <div className="content">
        <h1>Check Your Email</h1>
        <p>
          We have sent an email to <strong>your-email@example.com</strong> with
          instructions to reset your password.
        </p>
        <button onClick={() => navigate("/signin")}>Back to Sign In</button>
      </div>
    </div>
  );
};

export default ForgotPassword2;
