import React, { useState, useEffect } from "react";
import "./chefprofile.css";
import { BASE_URL } from "../../App";

const ChefProfile = () => {
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    phone: false,
    about: false,
  });

  const [userInfo, setUserInfo] = useState({
    name: "Loading...",
    email: "Loading...",
    phone: "Loading...",
    about: "Loading...",
  });

  useEffect(() => {
    const token = sessionStorage.getItem("Token");

    if (token) {
      fetch(`${BASE_URL}/chefs/find-by-uid`, {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (!response.ok) throw new Error("Failed to fetch user data");
          return response.json();
        })
        .then((data) => {
          setUserInfo({
            name: `${data.first_name || ""} ${data.last_name || ""}`.trim() || "Your Name",
            email: data.email || "yourname@example.com",
            phone: data.phone || "123-456-7890",
            about: data.about || "Tell us about yourself.",
          });
        })
        .catch((error) => console.error("Error fetching user data:", error));
    } else {
      console.error("No token found. User not logged in.");
    }
  }, []);

  const handleEditToggle = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (e, field) => {
    setUserInfo((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSave = (field) => {
    const token = sessionStorage.getItem("Token");

    fetch(`${BASE_URL}/chefs/update-by-uid`, {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
      [field]: userInfo[field] 
      }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to update user data");
        return response.json();
      })
      .then((data) => {
        console.log("Profile updated:", data);
        setIsEditing((prev) => ({ ...prev, [field]: false }));
      })
      .catch((error) => console.error("Error updating profile:", error));
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
          {["name", "email", "phone", "about"].map((field) => (
            <div key={field} className="info-section">
              <p>{field.charAt(0).toUpperCase() + field.slice(1)}</p>
              <div className="info-value">
                {isEditing[field] ? (
                  <>
                    <input
                      type={field === "email" ? "email" : "text"}
                      value={userInfo[field]}
                      onChange={(e) => handleInputChange(e, field)}
                    />
                    <button onClick={() => handleSave(field)}>Save</button>
                  </>
                ) : (
                  <>
                    <span>{userInfo[field]}</span>
                    <button onClick={() => handleEditToggle(field)}>Edit</button>
                  </>
                )}
              </div>
            </div>
          ))}
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
      </div>
    </div>
  );
};

export default ChefProfile;
