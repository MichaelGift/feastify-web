import { Link } from "react-router-dom/dist";
import "./events.css"


export default function EventType() {
    return (
      <div className="eventpage flex flex-col items-center justify-center min-h-screen py-2 mt-5">
        <h1 className="text-2xl font-bold mb-4">Our event type is ...</h1>
        <h5> This will help the chef set the right mood</h5>
        <div className="flex flex-col space-y-4 mt-5">
           <div className='landingbuttons'>
            <div class="d-grid gap-2 col-6 mx-auto">
                <Link to="/service-day" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">Wedding</button></Link>
                <Link to="/service-day" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">Birthday Party</button></Link>
                <Link to="/service-day" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">Corporate</button></Link>  
                <Link to="/service-day" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">Family Gathering</button></Link>
                <Link to="/service-day" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">Anniversary</button></Link>
                <Link to="/coming-soon" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">Concert</button></Link>     
                                
            </div>
        </div>
        </div>
      </div>
    );
  }
  