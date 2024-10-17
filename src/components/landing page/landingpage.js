import React from 'react'
import { Link } from 'react-router-dom/dist'
import "./landing.css"

export default function Landingpage() {
  return (
    <div className='landingpage'>
        <section className="landinghead py-4">
            <h1 className="display-2 text-center">
            <span>Hello,</span>
            <br />
            what would you like to
            <br />
            <span>experience?</span>
            </h1>
      </section>
      <section className='landingbody'>
      <div className='landingbuttons'>
            <div class="">
                <Link to="/event-type" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">private chef</button></Link>
                <Link to="/coming-soon" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">private barista</button></Link>
                <Link to="/coming-soon" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">private mixologist</button></Link>     
                            
            </div>
      </div>
      </section>
    </div>
  )
}
