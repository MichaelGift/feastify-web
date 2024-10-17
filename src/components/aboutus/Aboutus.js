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
      <footer className="mt-12">
        <p>Embark on a culinary journey with the team at Feastify, Schedule a 30-minute call to discover how our top-tier chefs and exclusive partnerships can elevate your dining experiences and events.</p>
        <Link to="/">
          <a className="flex justify-start items-start">
            <img className='footerlogo' src={bglogo} width={200} height={150} alt='Feastify' />
          </a>
        </Link>
        <p className="text-gray-500 mt-4">All rights reserved . The Feastify 2024</p>
      </footer>
    </div>
  );
}
