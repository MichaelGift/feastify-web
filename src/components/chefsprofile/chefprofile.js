import React, { useState } from "react";
import "./chefprofile.css";

const ChefProfile = () => {
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    phone: false,
    about: false,
  });

  const [userInfo, setUserInfo] = useState({
    name: "Mark Lanson",
    email: "mk@mail.com",
    phone: "+254 4982841234",
    about:
      "Lorem ipsum dolor sit amet consectetur. Etuat auctor a aliquam vel congue lectus.",
  });

  const handleEditToggle = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (e, field) => {
    setUserInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: false }));
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://via.placeholder.com/100" 
            alt="Profile"
            className="profile-image"
          />
          <button className="upload-photo">Upload Photo</button>
        </div>
        <div className="profile-info">
          <div className="info-section">
            <p>Your Name</p>
            <div className="info-value">
              {isEditing.name ? (
                <>
                  <input
                    type="text"
                    value={userInfo.name}
                    onChange={(e) => handleInputChange(e, "name")}
                  />
                  <button onClick={() => handleSave("name")}>Save</button>
                </>
              ) : (
                <>
                  <span>{userInfo.name}</span>
                  <button onClick={() => handleEditToggle("name")}>Edit</button>
                </>
              )}
            </div>
          </div>
          <div className="info-section">
            <p>Email</p>
            <div className="info-value">
              {isEditing.email ? (
                <>
                  <input
                    type="email"
                    value={userInfo.email}
                    onChange={(e) => handleInputChange(e, "email")}
                  />
                  <button onClick={() => handleSave("email")}>Save</button>
                </>
              ) : (
                <>
                  <span>{userInfo.email}</span>
                  <button onClick={() => handleEditToggle("email")}>Edit</button>
                </>
              )}
            </div>
          </div>
          <div className="info-section">
            <p>Phone Number</p>
            <div className="info-value">
              {isEditing.phone ? (
                <>
                  <input
                    type="text"
                    value={userInfo.phone}
                    onChange={(e) => handleInputChange(e, "phone")}
                  />
                  <button onClick={() => handleSave("phone")}>Save</button>
                </>
              ) : (
                <>
                  <span>{userInfo.phone}</span>
                  <button onClick={() => handleEditToggle("phone")}>Edit</button>
                </>
              )}
            </div>
          </div>
          <div className="info-section">
            <p>About Chef Mark</p>
            <div className="info-value">
              {isEditing.about ? (
                <>
                  <textarea
                    value={userInfo.about}
                    onChange={(e) => handleInputChange(e, "about")}
                  />
                  <button onClick={() => handleSave("about")}>Save</button>
                </>
              ) : (
                <>
                  <span>{userInfo.about}</span>
                  <button onClick={() => handleEditToggle("about")}>Edit</button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="profile-stats">
        <div className="stats-card">
          <p>Services Completed</p>
          <div className="stats-value">
            <span>13 Complete</span>
            <button>
              <i className="fa fa-clipboard"></i>
            </button>
          </div>
        </div>
        <div className="stats-card">
          <p>Ratings</p>
          <div className="stats-value">
            <span>4 Stars</span>
            <button>
              <i className="fa fa-star"></i>
            </button>
          </div>
        </div>
        <div className="reviews-section">
          <h3>Customer Reviews</h3>
          <div className="review">
            <h4>Ankit Srivastava</h4>
            <div className="stars">
              <span>⭐⭐⭐⭐</span>
            </div>
            <p>Very talented and we enjoyed every single dish.</p>
          </div>
          <a href="#">See all reviews →</a>
        </div>
      </div>
    </div>
  );
};

export default ChefProfile;