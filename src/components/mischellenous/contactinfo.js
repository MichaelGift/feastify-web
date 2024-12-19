import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./misc.css"
import Map from "../maps/maps";
import { BASE_URL } from "../../App";

export default function ContactInfo() {
  
  const [isEditing, setIsEditing] = useState({
    name: false,
    email: false,
    phone: false,
    about: false,
    location: false,
  });

  const [userInfo, setUserInfo] = useState({
    name: "Loading...",
    email: "Loading...",
    phone: "Loading...",
    about: "Loading...",
    location: { lat: 0, lng: 0 },
  });

  const [showModal, setShowModal] = useState(false);

  const handleSave = (field) => {
    const token = sessionStorage.getItem("Token");

    // fetch(`${BASE_URL}/clients/update-by-uid`, {
    //   method: "PUT",
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ [field]: userInfo[field] }),
    // })
    //   .then((response) => {
    //     if (!response.ok) throw new Error("Failed to update user data");
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("Profile updated:", data);
    //     setIsEditing((prev) => ({ ...prev, [field]: false }));

    //     if (field === "location") {
    //       setShowModal(true);
    //       setTimeout(() => {
    //         setShowModal(false);
    //       }, 7000);
    //     }
    //   })
    //   .catch((error) => console.error("Error updating profile:", error));
  };


  const handleEditToggle = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleLocationChange = (newLocation) => {
    setUserInfo((prev) => ({ ...prev, location: newLocation }));
  };

  return (
    <div>
        <section className='contactsubmit'>
            <h1>Contact info</h1>
            <p style={{ textAlign: 'center'}}>You'll receive quotes in 30mins </p>
            <div className="foam-div">                
            <div className="foam-button">
            <input type="name" className="form-controlabel" id="floatingInput" placeholder="name"/>
            </div>
            <div className="foam-button">
            <input type="email" className="form-controlabel" id="floatingInput" placeholder="email"/>
            </div>
            <div className='foam-button'>
            <input type="number" className="form-controlabel" id="number" placeholder="Phone number +(countrycode)"/>
            </div>

            <div className="info-section">
            <p className='mt-5' style={{ fontWeight: '400'}}>Venue Location</p>
            <div className="info-value" style={{ width: '40%', margin: '0 auto'}}>
              {isEditing.location ? (
                <>
                  <Map
                    location={userInfo.location}
                    onChange={handleLocationChange}
                    readonly={false}
                  />
                  <button onClick={() => handleSave("location")}>Save</button>
                </>
              ) : (
                <>
                  <Map
                    location={userInfo.location}
                    onChange={() => {}}
                    readonly={true}
                  />
                  <button onClick={() => handleEditToggle("location")}>
                    Edit
                  </button>
                </>
              )}
            </div>
          </div>
            
            </div>

            <div className="" style={{ marginTop: '4rem'}}>
                <Link to="/" style={{ textDecoration: 'none'}}><button className="landing-btn d-block m-auto border border-warning rounded " type="button">All Set</button></Link>             
            </div>
        </section>
        {showModal && (
        <div className="modal">
          <div className="modal-content">
            <p>Location Saved Successfully!</p>
          </div>
        </div>
      )}

    </div>
  )
}
