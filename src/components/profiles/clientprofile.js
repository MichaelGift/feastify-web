import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./chefprofile.css";
import { BASE_URL } from "../../App";

const ClientProfile = () => {
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    phone: false,
  });

  const [userInfo, setUserInfo] = useState({
    name: "Loading...",
    email: "Loading...",
    phone: "Loading...",
  });


  useEffect(() => {
    const token = sessionStorage.getItem("Token");

    if (token) {
      fetch(`${BASE_URL}/clients/find-by-uid`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
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

    fetch(`${BASE_URL}/clients/update-by-uid`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ [field]: userInfo[field] }),
    })
      .then((response) => {
        if (!response.ok) throw new Error("Failed to update user data");
        return response.json();
      })
      .then((data) => {
        console.log("Profile updated:", data);
        
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
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
