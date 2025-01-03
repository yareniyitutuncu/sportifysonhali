import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateProfile.css';

const CreateProfile = ({ setUserInfo }) => {
  const [email, setEmail] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [age, setAge] = useState('');
  const [goal, setGoal] = useState('');
  const [profilePic, setProfilePic] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserInfo({ email, height, weight, age, goal, profilePic });
    navigate("/profile"); // Profil sayfasına yönlendir
  };

  return (
    <div className="create-profile-screen">
      <h1>Welcome to <span>Sportify!</span></h1>
      <p>Please create your profile</p>
      <form onSubmit={handleSubmit}>
        <input type="file" accept="image/*" onChange={(e) => setProfilePic(URL.createObjectURL(e.target.files[0]))} />
        <input type="text" placeholder="Your name" onChange={(e) => setGoal(e.target.value)} />
        <input type="date" placeholder="Date of birth" onChange={(e) => setAge(e.target.value)} />
        <input type="number" placeholder="Height (cm)" onChange={(e) => setHeight(e.target.value)} />
        <input type="number" placeholder="Weight (kg)" onChange={(e) => setWeight(e.target.value)} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProfile;
