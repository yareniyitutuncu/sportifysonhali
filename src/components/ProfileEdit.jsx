import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import sportifyLogo from "../assets/sportifyicon.png"; // Logoyu import ettik

const ProfileEdit = ({ userInfo, setUserInfo }) => {
  const navigate = useNavigate();

  const [username, setUsername] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);
  const [height, setHeight] = useState(userInfo.height);
  const [weight, setWeight] = useState(userInfo.weight);
  const [age, setAge] = useState(userInfo.age);
  const [status, setStatus] = useState(userInfo.status);
  const [profilePic, setProfilePic] = useState(userInfo.profilePic);

  const handleBackButtonClick = () => {
    navigate("/profile"); // Profil sayfasına yönlendir
  };

  const handleSaveChanges = () => {
    setUserInfo({
      ...userInfo,
      username,
      email,
      height,
      weight,
      age,
      status,
      profilePic,
    });
    navigate("/profile"); // Profil sayfasına yönlendir
  };

  const handleProfilePicChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePic(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="profile-edit-container">
      <div className="header">
        <img src={sportifyLogo} alt="Sportify Logo" className="logo" />
        <button className="back-button-small" onClick={handleBackButtonClick}>
          ←
        </button>
      </div>

      <div className="profile-edit-content">
        <h2>Edit Profile</h2>
        {/* Profil fotoğrafı */}
        <div className="profile-pic-container">
          <img
            src={profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-pic"
          />
          <input
            type="file"
            className="change-picture-button"
            onChange={handleProfilePicChange}
          />
        </div>
        {/* Kullanıcı bilgileri */}
        <div className="input-group">
          <strong>Username:</strong>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <strong>Email:</strong>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-group">
          <strong>Height:</strong>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <strong>Weight:</strong>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div className="input-group">
          <strong>Age:</strong>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <div className="input-group">
          <strong>Status:</strong>
          <textarea
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
        </div>
        <button onClick={handleSaveChanges}>Save Changes</button>
      </div>
    </div>
  );
};

export default ProfileEdit;
