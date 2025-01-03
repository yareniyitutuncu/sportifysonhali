import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bileşenler
import StartScreen from "./components/StartScreen";
import SignInScreen from "./components/SignInScreen";
import SignUpScreen from "./components/SignUpScreen";
import ForgotPassword1 from "./components/ForgotPassword1";
import OnboardingStep1 from "./components/OnboardingStep1";
import OnboardingStep2 from "./components/OnboardingStep2";
import OnboardingStep3 from "./components/OnboardingStep3";
import CreateProfile from "./components/CreateProfile";
import ChooseGoal from "./components/ChooseGoal";
import FitnessLevel from "./components/FitnessLevel";
import Home from "./components/Home";
import Activity from "./components/Activity";
import Calendar from "./components/Calendar";
import Profile from "./components/Profile";
import ProfileEdit from "./components/ProfileEdit"; // Profil düzenleme sayfası
import HealthyRecipes from "./components/HealthyRecipes";


import "./App.css";

const App = () => {
  // Kullanıcı verisini buradan yönetiyoruz
  const [userInfo, setUserInfo] = useState({
    username: "Yaren Yıldırım",
    email: "yaren@example.com",
    height: "162 cm",
    weight: "44 kg",
    age: "22",
    goal: "Keep fit",
    profilePic: null, // Profil fotoğrafı
    status: "No status added.", // Durum
  });

  return (
    <div className="app-container">
      <Router>
        <Routes>
          {/* Başlangıç ve Giriş Sayfaları */}
          <Route path="/" element={<StartScreen />} />
          <Route path="/signin" element={<SignInScreen />} />
          <Route path="/signup" element={<SignUpScreen />} />
          <Route path="/forgot-password" element={<ForgotPassword1 />} />

          {/* Onboarding Süreci */}
          <Route path="/onboarding/step1" element={<OnboardingStep1 />} />
          <Route path="/onboarding/step2" element={<OnboardingStep2 />} />
          <Route path="/onboarding/step3" element={<OnboardingStep3 />} />
          <Route path="/onboarding/create-profile" element={<CreateProfile setUserInfo={setUserInfo} />} />
          <Route path="/onboarding/choose-goal" element={<ChooseGoal />} />
          <Route path="/onboarding/fitness-level" element={<FitnessLevel />} />

          {/* Ana Sayfa ve Navigasyon */}
          <Route path="/home" element={<Home />} />
          <Route path="/activity" element={<Activity />} />
          <Route path="/calendar" element={<Calendar />} />

          {/* Profil Sayfaları */}
          <Route path="/profile" element={<Profile userInfo={userInfo} />} />
          <Route path="/profile/edit" element={<ProfileEdit userInfo={userInfo} setUserInfo={setUserInfo} />} /> {/* Profil düzenleme */}

          {/* Healthy Recipes Sayfası */}
          <Route path="/healthy-recipes" element={<HealthyRecipes />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
