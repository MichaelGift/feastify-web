import React from 'react'
import { Link } from 'react-router-dom'
import "./misc.css"

export default function ContactInfo() {
  return (
    <div>
        <section className='contactsubmit'>
            <h1>Contact info</h1>
            <p style={{ textAlign: 'center'}}>You'll receive quotes in 30mins </p>
            <div className="foam-div">                
            <div className="foam-button">
            <input type="name" className="form-controlabel" id="floatingInput" placeholder="name"/>
            </div>
            <div className="foam-button">
            <input type="email" className="form-controlabel" id="floatingInput" placeholder="email"/>
            </div>
            <div className='foam-button'>
            <input type="number" className="form-controlabel" id="number" placeholder="Phone number +(countrycode)"/>
            </div>
            
            </div>

            <div className="" style={{ marginTop: '4rem'}}>
                <Link to="/oven-confirmation" style={{ textDecoration: 'none'}}><button className="landing-btn" type="button">All Set</button></Link>             
            </div>
        </section>
    </div>
  )
}
