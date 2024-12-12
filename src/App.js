import { Route, Routes, Navigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import Landingpage from './pages/landingpage/landingpage';
import EventType from './components/events/events';
import ServiceDay from './components/service/service';
import ServiceSchedule from './components/service/serviceschedule';
import ServiceQuality from './components/service/serviceQuality';
import DietaryRestrictions from './components/service/diet';
import CuisineType from './components/cuisine/Cuisine';
import AboutUs from './components/aboutus/Aboutus';
import Joy from './components/share-the-joy/joy';
import SpreadJoyPage from './components/spread-the-joy/page';
import Comingsoon from './components/comingsoon/comingsoon';
import Kitchenware from './components/mischellenous/kitchenware';
import Oven from './components/mischellenous/oven';
import StoveType from './components/mischellenous/stovetype';
import ChefChat from './components/mischellenous/chefchat';
import ContactInfo from './components/mischellenous/contactinfo';
import ClientLogin from './components/login/clientLogin';
import ChefRegister from './components/login/ChefRegister';
import ContactUs from './components/contactus/contactus';
import ExperienceBooking from './components/experiences/experience';
import ChefProfile from './components/chefsprofile/chefprofile';
import Checkout from './components/checkout/checkout';
import ChefLogin from './components/login/chefLogin';

export const BASE_URL = 'http://localhost:3000/api';

function App() {
  const [authToken, setAuthToken] = useState(sessionStorage.getItem('Token'));
  const logoutTimerRef = useRef(null);

  const logoutUser = () => {
    sessionStorage.removeItem('Token');
    setAuthToken(null);
    if (logoutTimerRef.current) clearTimeout(logoutTimerRef.current); 
    alert('You have been logged out due to inactivity');
  };

  const resetLogoutTimer = () => {
    if (logoutTimerRef.current) {
      clearTimeout(logoutTimerRef.current);
    }
    logoutTimerRef.current = setTimeout(logoutUser, 30 * 60 * 1000); 
  };

  useEffect(() => {
    const handleUserActivity = () => {
      resetLogoutTimer();
    };

    window.addEventListener('mousemove', handleUserActivity);
    window.addEventListener('keypress', handleUserActivity);
    window.addEventListener('click', handleUserActivity);
    window.addEventListener('scroll', handleUserActivity);

    resetLogoutTimer();

    return () => {
      window.removeEventListener('mousemove', handleUserActivity);
      window.removeEventListener('keypress', handleUserActivity);
      window.removeEventListener('click', handleUserActivity);
      window.removeEventListener('scroll', handleUserActivity);
      if (logoutTimerRef.current) {
        clearTimeout(logoutTimerRef.current);
      }
    };
  }, [resetLogoutTimer]);

  const PrivateRoute = ({ element: Element }) => {
    return authToken ? <Element /> : <Navigate to="/login" />;
   
  };



  return (
    <>
      {/*<div>*/}
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/bookings" element={<PrivateRoute element={ExperienceBooking} />} />
          <Route path="/chef-profile" element={<PrivateRoute element={ChefProfile} />} />
          <Route path="/contact-us" element={<ContactUs/>} />
          <Route path="/login" element={<ClientLogin setAuthToken={setAuthToken} />} />
          <Route path="/chef-login" element={<ChefLogin setAuthToken={setAuthToken} />} />
          <Route path="/chef-register" element={<ChefRegister/>} />
          <Route path="/checkout" element={<Checkout/>} />
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
      {/*</div>*/}
      {/*<Footer />*/}
    </>
  );
}

export default App;
