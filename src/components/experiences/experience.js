import React from 'react';
import './experience.css'; 

export default function ExperienceBooking() {
  return (
    <div className="experience-wrapper mt-5">
      <section className="experiences-section">
        <h2 className="section-header">Top Selling <br /> <span>Experiences</span></h2>
        <div className="content-container">
          <div className="cards-grid">
            {Array(4).fill().map((_, index) => (
              <div className="experience-card" key={index}>
                <img
                  src={`https://images.unsplash.com/photo-1717232543976-3f9e9d2d0728?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt="Experience"
                  className="experience-img"
                />
                <div className="card-details">
                  <h3>London, UK</h3>
                  <p>🕒 12 Days Trip</p>
                  <p className="price"><strong>$4.2k</strong> PP</p>
                  <p className="category">Group Tour</p>
                </div>
              </div>
            ))}
          </div>

          <div className="booking-form-section">
            <form className="booking-form">
              <div className="form-group">
                <label>Period</label>
                <div className="radio-group">
                  <label><input type="radio" name="period" /> Experience Now</label>
                  <label><input type="radio" name="period" /> Experience Later</label>
                </div>
              </div>

              <div className="form-group">
                <label>Preferred Destination</label>
                <div className="checkbox-group">
                  <label><input type="checkbox" /> Africa</label>
                  <label><input type="checkbox" /> Europe</label>
                  <label><input type="checkbox" /> Asia</label>
                </div>
              </div>

              <div className="form-group">
                <label>Group Size</label>
                <div className="radio-group">
                  <label><input type="radio" name="group-size" /> Small (4-6 people)</label>
                  <label><input type="radio" name="group-size" /> Medium (7-15 people)</label>
                  <label><input type="radio" name="group-size" /> Large (16+ people)</label>
                </div>
              </div>

              <div className="form-group">
                <label>Travel Style</label>
                <select>
                  <option value="adventure">Adventure</option>
                  <option value="luxury">Luxury</option>
                  <option value="budget">Budget</option>
                </select>
              </div>

              <div className="form-group">
                <label>Special Request</label>
                <textarea placeholder="Any special requests" rows="3"></textarea>
              </div>

              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
        <section className="steps-section">
        <h2 className="section-header">Easy and Fast <br /> <span>Book Your Group Experience In Just A Few Easy Steps</span></h2>
        <div className="steps-container">
          <div className="step">
            <h3 style={{color: 'white', textAlign: 'left'}}><span>01</span> Browse through our top-selling group experiences</h3>
            <p style={{ textAlign: 'left'}}>Discover curated group trips tailored to your interests.</p>
          </div>
          <div className="step">
            <h3 style={{color: 'white', textAlign: 'left'}}><span>02</span> Define your perfect group experience</h3>
            <p style={{ textAlign: 'left'}}>Choose your destination, group size, and preferred activities.</p>
          </div>
          <div className="step">
            <h3 style={{color: 'white', textAlign: 'left'}}><span>03</span> Connect with our group travel experts</h3>
            <p style={{ textAlign: 'left'}}>Tailor your dream trip with our travel experts.</p>
          </div>
          <div className="step">
            <h3 style={{color: 'white', textAlign: 'left'}}><span>04</span> Book your bespoke group experience</h3>
            <p >Make payment and prepare for an adventure.</p>
          </div>
        </div>
        <div className="card-grid">
            {Array(1).fill().map((_, index) => (
              <div className="experience-card" key={index}>
                <img
                  src={`https://images.unsplash.com/photo-1717232543976-3f9e9d2d0728?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                  alt="Experience"
                  className="experience-img"
                />
                <div className="card-details">
                  <h3>London, UK</h3>
                  <p>🕒 12 Days Trip</p>
                  <p className="price"><strong>$4.2k</strong> PP</p>
                  <p className="category">Group Tour</p>
                </div>
              </div>
            ))}
          </div>
      </section>

        <section className="transparency-section">
        <h2 className="transparency-header">Time is money 💰 so just save both</h2>
        <p>Let us handle it all for you and provide exact pricing details.</p>
      </section>
      </section>
    </div>
  );
}
