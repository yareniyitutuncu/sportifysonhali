import React from "react";
import { useNavigate } from "react-router-dom";
import "./SignInScreen.css";

const SignInScreen = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault(); // Sayfa yenilenmesini engeller
    navigate("/onboarding/step1"); // Onboarding sayfasına yönlendir
  };

  return (
    <div className="signin-screen">
      <h1>Sign in to your account</h1>
      <form onSubmit={handleSignIn}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">SIGN IN</button>
      </form>

      {/* Alt kısmı düzenledik */}
      <div className="forgot-signup-container">
        <p className="forgot-password-text">
          <button
            className="forgot-password-button"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot Password?
          </button>
        </p>

        <p className="signup-text">
          Don't have an account?{" "}
          <button
            className="signup-button"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInScreen;
