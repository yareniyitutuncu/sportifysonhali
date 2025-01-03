import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpScreen.css";

const SignUpScreen = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // Firebase authentication kodu burada olacak
    // Burada basitçe yönlendirme yapıyoruz.
    navigate("/home"); // Sign-up başarılıysa ana sayfaya yönlendirme
  };

  return (
    <div className="signup-screen">
      <h1>Create your account</h1>
      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">SIGN UP</button>
      </form>
      <p className="signin-text">
        Already have an account?{" "}
        <button
          className="signin-button"
          onClick={() => navigate("/signin")}
        >
          Sign In
        </button>
      </p>
    </div>
  );
};

export default SignUpScreen;
