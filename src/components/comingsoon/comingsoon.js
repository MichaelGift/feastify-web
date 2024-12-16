import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './comingsoon.css'


export default function ComingSoon() {
  return (
    <div className='comingsoons'>
      <section>
        <div className="form-floating">
            <h3>Coming Soon</h3>
          <div className="input-group">
            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <button className="btm">Submit</button>
          </div>
          <p> *Notify me when the Service is available*</p>
        </div>
        <div className='landingbuttons'>
            <div class="">
                <Link to="/event-type" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">Our Services</button></Link>                           
            </div>
      </div>
      </section>
    </div>
  );
}
