import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Landingpage from './components/landing page/landingpage';
import EventType from './components/events/events';
import ServiceDay from './components/service/service';
import ServiceSchedule from './components/service/serviceschedule';
import ServiceQuality from './components/service/serviceQuality';
import DietaryRestrictions from './components/service/diet';
import Footer from './components/footer/footer';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/event-type" element={<EventType />} />
          <Route path="/service-day" element={<ServiceDay />} />
          <Route path="/service-schedule" element={<ServiceSchedule />} />
          <Route path="/service-quality" element={<ServiceQuality />} />  
          <Route path="/diet-restrictions" element={<DietaryRestrictions/>} />        
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
