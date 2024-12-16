import React from "react";
import "./profile.css";
import profile from "../../assets/profile/profile.jpg"

export default function ProfileSettings() {
  const profiles = [profile];
  return (
    <div className="profile-container">
      {/* Header */}
      <header>Profile Settings</header>

      {/* Profile Card */}
      <div className="profile-card">
        <div className="profile-header">
          <img src={profiles} className="profile" alt={`Profile ${profile}`} />
          <button className="upload-btn">Upload Photo</button>
        </div>

        {/* User Information */}
        <div className="info-block">
          <div>
            <span className="info-title">Your Name</span>
            <p>Mark Lenson</p>
          </div>
          <button className="edit-btn">Edit</button>
        </div>

        <div className="info-block">
          <div>
            <span className="info-title">Email</span>
            <p>mark@mail.com</p>
          </div>
          <button className="edit-btn">Edit</button>
        </div>

        <div className="info-block">
          <div>
            <span className="info-title">Phone Number</span>
            <p>+254 490526847532</p>
          </div>
          <button className="edit-btn">Edit</button>
        </div>

        {/* About Chef Mark */}
        <div className="about-mark">
          <div className="section-title">About Chef Mark</div>
          <p>
            Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam
            volutpat luctus.
          </p>
          <button className="edit-btn" style={{ alignSelf: "flex-end" }}>
            Edit
          </button>
        </div>

        {/* Payment Details */}
        <div className="payment-details">
          <div className="section-title">Payment Details</div>
          <div className="payment-status">
            <span>KYC Status</span>
            <span className="payment-tag">Verified</span>
          </div>
          <div className="payment-status">
            <span>Account Details</span>
            <span className="payment-account">View</span>
          </div>
        </div>
      </div>
      {/* Statistics Section */}
      <section className="stats-container">
        {/* Services Completed */}
        <p className="section-title">Services Completed</p>
        <div className="stats-item">
          <div>
            <span>13 Complete</span>
            <p className="stat-subtext">of total client request to you</p>
          </div>
          <div className="icon">🔒</div>
        </div>

        {/* Ratings */}
        <p className="section-title">Ratings</p>
        <div className="stats-item">
          <div>
            <span>4 Stars</span>
            <p className="stat-subtext">from 13 customers</p>
          </div>
          <div className="icon highlight-icon">⭐</div>
        </div>

        {/* Customer Reviews */}
        <div>
          <p className="section-title">Customer Reviews</p>
          <div className="review-container">
            <div className="review-author">Ankit Srivastava</div>
            <div className="stars">
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star">★</span>
              <span className="star-empty">★</span>
            </div>
            <p className="review-text">
              Very talented and we enjoyed every single dish.
            </p>
          </div>
          <div className="review-link">See all reviews -</div>
        </div>
      </section>
            {/* Bottom Navigation */}
              <nav className="bottom-nav">
              <button>
                <span>🏠</span>
                Home
              </button>
              <button>
                <span>💬</span>
                Messages
              </button>
              <button>
                <span>📋</span>
                Menus
              </button>
              <button>
                <span>💵</span>
                Earnings
              </button>
            </nav>
    </div>
  );
}
