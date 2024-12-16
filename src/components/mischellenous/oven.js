import React from 'react'
import { Link } from 'react-router-dom'

export default function Oven() {
  return (
    <div>
        <section className='body-container'>
            <h1>Our Kitchen has...</h1>
            <div className='landingbuttons mt-5 mb-5'>
            <div class="">
                <Link to="/chef-chat" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">Yes</button></Link>
                <Link to="/chef-chat" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">No</button></Link> 
         
            </div>
      </div>
        </section>
    </div>
  )
}
