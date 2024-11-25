import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Landingpage from './components/landing page/landingpage';
import EventType from './components/events/events';
import ServiceDay from './components/service/service';
import ServiceSchedule from './components/service/serviceschedule';
import ServiceQuality from './components/service/serviceQuality';
import DietaryRestrictions from './components/service/diet';
import CuisineType from './components/cuisine/Cuisine';
import AboutUs from './components/aboutus/Aboutus';
import Footer from './components/footer/footer';
import './App.css';
import Joy from './components/share-the-joy/joy';
import SpreadJoyPage from './components/spread-the-joy/page';
import Comingsoon from './components/comingsoon/comingsoon';
import Kitchenware from './components/mischellenous/kitchenware';
import Oven from './components/mischellenous/oven';
import StoveType from './components/mischellenous/stovetype';
import ChefChat from './components/mischellenous/chefchat';
import ContactInfo from './components/mischellenous/contactinfo';
import ClientLogin from './components/login/clientLogin';
import ChefLogin from './components/login/ChefLogin';
import ContactUs from './components/contactus/contactus';
import Team from './components/team/team';


function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/meet-team" element={<Team/>} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/login" element={<ClientLogin/>} />
          <Route path="/chef-login" element={<ChefLogin/>} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/event-type" element={<EventType />} />
          <Route path="/service-day" element={<ServiceDay />} />
          <Route path="/spread-joy" element={<Joy />} />
          <Route path="/coming-soon" element={<Comingsoon/>} /> 
          <Route path="/share-joy" element={<SpreadJoyPage />} />
          <Route path="/chef-chat" element={<ChefChat />} />
          <Route path="/service-schedule" element={<ServiceSchedule />} />
          <Route path="/oven-confirmation" element={<Oven />} />
          <Route path="/kitchen-ware" element={<Kitchenware />} />
          <Route path="/stove-type" element={<StoveType />} />
          <Route path="/service-quality" element={<ServiceQuality />} />  
          <Route path="/diet-restrictions" element={<DietaryRestrictions/>} />   
          <Route path="/cuisine" element={<CuisineType />} />     
          <Route path="/contact-info-submit" element={<ContactInfo/>} />       
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
