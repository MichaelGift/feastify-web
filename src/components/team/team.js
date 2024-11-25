import React from 'react';
import "./team.css";

export default function Team() {
  return (
    <div className="chef-experience">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Accessing Private Chefs And Group Experiences Globally Made Easy</h1>
          <p>
            Born from a passion to bring luxury hotel dining to your doorstep, 
            we connect you with top-tier chefs and curate bespoke group trips.
          </p>
          <button className="btn-primary">Experience Now</button>
          <div className="reviews">
            ⭐⭐⭐⭐⭐ <span>8.6/10 from 65+ reviews</span>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-box">
            <h2>1k+</h2>
            <p>Private chefs</p>
          </div>
          <div className="stat-box">
            <h2>120+</h2>
            <p>Completed trips</p>
          </div>
          <div className="stat-images">
            <img src="images/chef1.jpg" alt="Chef" />
            <img src="images/group.jpg" alt="Group Experience" />
          </div>
        </div>
      </section>
      <section className="testimonials-section">
        <h2>Don’t just listen to what they say, try experience</h2>
        <p className="testimonial-header">50+ Happy feastify Users</p>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <img src="images/user1.jpg" alt="User" />
            <h4>Jenny Wilson</h4>
            <p>⭐⭐⭐⭐⭐ Group Experience</p>
            <p>"We love the feastify! Our designers were using it for their projects, so we already know what kind of design they want."</p>
          </div>
          <div className="testimonial-card">
            <img src="images/user2.jpg" alt="User" />
            <h4>Devon Lane</h4>
            <p>⭐⭐⭐⭐⭐ Chef</p>
            <p>"We love the feastify! Our designers were using it for their projects, so we already know what kind of design they want."</p>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          We Connect Private Chefs With Hosts and Curate Unique Group Experiences Globally.
        </p>
        <p className="about-text">
          Remove all the friction that stands in your way when planning parties at home, 
          at work, or when you and your group of friends want to go on a staycation.
        </p>
      </section>
      <section className="values-section">
        <h2>Our Values</h2>
        <h3>We are friendly to your wallet</h3>
        <div className="values-container">
          <div className="value-card">
            <h4>⭐ Executive Chefs</h4>
            <p>Work with top-tier chefs globally.</p>
          </div>
          <div className="value-card">
            <h4>⭐ Price Transparency</h4>
            <p>Fair and clear pricing with no hidden fees.</p>
          </div>
          <div className="value-card">
            <h4>⭐ Unique Trips</h4>
            <p>Customized, memorable group experiences.</p>
          </div>
          <div className="value-card">
            <h4>⭐ 24/7 Support</h4>
            <p>We’re here for you anytime, anywhere.</p>
          </div>
        </div>
      </section>
      <section className="team-section">
        <h2>Meet the architects of joy</h2>
        <p>Each member of our team ensures that every experience leaves a lasting memory.</p>
        <div className="team-container">
          <div className="team-member">
            <img src="images/team1.jpg" alt="Team Member 1" />
          </div>
          <div className="team-member">
            <img src="images/team2.jpg" alt="Team Member 2" />
          </div>
          <div className="team-member">
            <img src="images/team3.jpg" alt="Team Member 3" />
          </div>
          <div className="team-member">
            <img src="images/team4.jpg" alt="Team Member 4" />
          </div>
          <div className="team-member">
            <img src="images/team5.jpg" alt="Team Member 5" />
          </div>
        </div>
      </section>

      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-container">
          <div className="faq-item">
            <h4>Where can I order?</h4>
            <p>You can order through our website or mobile app.</p>
          </div>
          <div className="faq-item">
            <h4>How do I add a new chef?</h4>
            <p>Reach out to us through the support section.</p>
          </div>
          <div className="faq-item">
            <h4>Do you have international chefs?</h4>
            <p>Yes, we work with chefs globally to suit every palate.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
