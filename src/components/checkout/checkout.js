import React from "react";
import "./checkout.css";

const Checkout = () => {
  return (
    <div className="checkout-container mt-5 p-5 mb-5">
      <h1 className="checkout-title">Checkout</h1>
      <div className="checkout-content">
        <div className="left-section">
          <div className="location-price">
            <div>
              <h2>London, UK</h2>
              <p className="duration">(12 days)</p>
            </div>
            <h3>Ksh 120,000 pp</h3>
          </div>
          <div className="images">
            <div className="large-image"></div>
            <div className="small-images">
              <div className="small-image"></div>
              <div className="small-image"></div>
            </div>
          </div>
          <p className="details">
            15 Guests | 8 Beds | 9 showers | Private Chef | Fast Internet | Fine
            Dining
          </p>
          <h3 className="itinerary-title">Trip Itinerary</h3>
        </div>
        <div className="right-section">
          <div className="price-summary">
            <h4>12 Days</h4>
            <h3>Ksh 120,000 pp</h3>
          </div>
          <div className="counter">
            <div>
              <p>Adults</p>
              <p>Age 18 and above</p>
              <div className="counter-controls">
                <button>-</button>
                <span>3</span>
                <button>+</button>
              </div>
            </div>
            <div>
              <p>Infants</p>
              <p>Age 4-18</p>
              <div className="counter-controls">
                <button>-</button>
                <span>2</span>
                <button>+</button>
              </div>
            </div>
            <div>
              <p>Children</p>
              <p>Age 0-5</p>
              <div className="counter-controls">
                <button>-</button>
                <span>0</span>
                <button>+</button>
              </div>
            </div>
          </div>
          <div className="date-inputs">
            <input type="date" placeholder="Experience from" />
            <input type="date" placeholder="Experience to" />
          </div>
          <div className="cost-breakdown">
            <p>
              Package Cost <span>Ksh 300,000</span>
            </p>
            <p>
              15% Booking Fee <span>Ksh 45,000</span>
            </p>
          </div>
          <h2 className="total">TOTAL Ksh 345,000</h2>
          <div className="buttons">
            <button className="reserve-btn">Reserve</button>
            <button className="save-btn">Save Up For This</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
