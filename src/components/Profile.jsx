import React from "react";
import { useNavigate } from "react-router-dom";
import sportifyLogo from "../assets/sportifyicon.png"; // Logoyu import ettik
import { FaArrowLeft } from 'react-icons/fa'; // Geri ok ikonu için react-icons kullanıyoruz

const Profile = ({ userInfo }) => {
  const navigate = useNavigate();

  return (
    <div className="profile-container">
      {/* Header (Değiştirilmedi) */}
      <div className="header">
        <img src={sportifyLogo} alt="Sportify Logo" className="logo" />
        <button className="back-button-small" onClick={() => navigate("/home")}>
            ←
          </button>
      </div>

      {/* Profile Content (Sadece Body kısmı düzenlendi) */}
      <div className="profile-content">
        {/* Profil Fotoğrafı */}
        <div className="profile-pic-container">
          <img
            src={userInfo.profilePic || "https://via.placeholder.com/150"}
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-pic-edit">
            <label htmlFor="profilePicInput" className="edit-button">Change Picture</label>
            <input
              type="file"
              id="profilePicInput"
              onChange={() => navigate("/profile/edit")}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        {/* Profil Bilgileri */}
        <h2 className="profile-name">{userInfo.username}</h2>
        <div className="profile-details">
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Height:</strong> {userInfo.height}</p>
          <p><strong>Weight:</strong> {userInfo.weight}</p>
          <p><strong>Age:</strong> {userInfo.age}</p>
        </div>

        {/* Düzenleme Butonu */}
        <div className="profile-actions">
          <button
            className="edit-profile-button"
            onClick={() => navigate("/profile/edit")}
          >
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
