import { Link } from 'react-router-dom';
import "./aboutus.css"
import bglogo from "../../assets/navicon/feastify.png"
import food1 from "../../assets/aboutus/food1.jpg"
import food2 from "../../assets/aboutus/food2.jpg"
import food3 from "../../assets/aboutus/food3.jpg"
import food4 from "../../assets/aboutus/food4.jpg"
import food5 from "../../assets/aboutus/food5.jpg"
import food6 from "../../assets/aboutus/foood6.jpg"
import food7 from "../../assets/aboutus/food7.jpg"
import team from "../../assets/aboutus/team.jpg"

export default function AboutUs() {
  const foodImages = [food1, food2, food3, food4, food5, food6, food7];
  return (
    <div className="container p-4">
      <header className="abtheader">
        <p className='headerp'>Hi, I am <br/><span> The Feastify</span></p>
        <p className="text-xl text-gray-600 leading-relaxed">
          Your gateway to exceptional culinary experiences. Born from a passion to bring luxury hotel dining to your doorstep, we connect you with top-tier chefs affiliated with renowned hotel chains. Additionally, we curate unforgettable events, making every moment a masterpiece. Join us on a journey where every meal becomes a celebration, and every event is a testament to extraordinary experiences.
        </p>
      </header>
      <section className="my-12 mt-5">
        <div className="flex flex-wrap justify-center gap-12">
          {[
            { label: "+20,000", description: "Happy Clients", icon: "path_to_icon" },
            { label: "+20,000", description: "Share The Joy Impact", icon: "path_to_icon" },
            { label: "+20,000", description: "Chefs Aboard", icon: "path_to_icon" },
            { label: "+20,000", description: "Successful Events", icon: "path_to_icon" },
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <img src={item.icon} alt="icon" className="mb-3" />
              <div className="text-4xl font-bold text-orange-500">{item.label}</div>
              <div className="text-lg text-gray-600">{item.description}</div>
            </div>
          ))}
        </div>
      </section>
      <div className='landingbuttons'>
            <div class="">
                <Link to="/event-type" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">Access Our Services</button></Link>                           
            </div>
      </div>
      <section className="image-gallery">
        <div className="flex">
          {foodImages.map((foodImage, index) => (
            <div className="card" key={index}>
              <img src={foodImage} className="card-img-top" alt={`Food ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>
      <hr style={{ marginTop: '2rem'}}/>
      <section className="my-12">
        <h2 className="text-yellow-500 text-4xl font-bold mb-4"><span className='spann'>The</span><br/> Vision</h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl">
          As the pandemic cast its shadows, our passion for bringing the joy of top-tier chefs and curated events into your home grew stronger. Feastify envisions becoming the ultimate destination where individuals effortlessly connect with elite chefs and where extraordinary events are expertly curated. Our vision is to make luxury dining and exclusive experiences a shared joy accessible from your home.
        </p>
      </section>
      <div className='landingbuttons'>
            <div class="">
                <Link to="/event-type" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">Contact US</button></Link>                           
            </div>
      </div>
      <hr />
      <section className="my-12">
        <h2 className="text-yellow-500 text-4xl font-bold mb-4"><span className='spann'>The</span><br/> Team</h2>
        <img src={team} className="card-img" alt="team" />
        <p className="text-lg text-gray-600 leading-relaxed max-w-3xl" style={{ marginTop: '5rem'}}>
          Meet the Culinary Architects behind Feastify, a diverse team united by a passion for transforming ordinary moments into extraordinary experiences. Our chefs, event curators, and tech enthusiasts work seamlessly to bring luxury dining and bespoke events to your doorstep.
        </p>
      </section>
      <hr style={{ marginTop: '5rem'}}/>
      <section className="my-12">
        <h2 className="text-yellow-500 text-4xl font-bold mb-4"><span className='spann'>Why</span><br/> Choose The Feastify?</h2>
        <div className="description">
          {[
            { title: "Effortless Booking", description: "Feastify makes curating your luxury experience a breeze with its tech-driven platform." },
            { title: "Luxury at Home", description: "Connect with chefs from top hotel chains, bringing fine dining to your home." },
            { title: "Event Elegance", description: "We turn your visions into reality with elegant event planning." },
            { title: "Impactful Giving", description: "Share the Joy by extending luxury experiences to those in need." },
          ].map((feature, index) => (
            <div key={index}>
              <li className="text-xl font-semibold text-yellow-500 mb-2" style={{fontSize: '1.5rem'}}>{feature.title}</li>
              <p className="">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* <section className="my-12">
        <button className="bg-black text-white px-6 py-3 rounded-full text-lg font-medium">
          Schedule 30 Minute Call
        </button>
      </section> */}
      <div className='landingbuttons' style={{ marginTop: '-0.5rem'}}>
            <div class="">
                <Link to="/event-type" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">Schedule 30 Minute Call</button></Link>                           
            </div>
      </div>      
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

    </div>
  );
}
