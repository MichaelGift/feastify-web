import React from 'react'
import { Link } from 'react-router-dom'

export default function Oven() {
  return (
    <div>
        <section>
            <h1>Our Kitchen has...</h1>
            <div className='landingbuttons'>
            <div class="">
                <Link to="/chef-chat" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">Yes</button></Link>
                <Link to="/chef-chat" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">No</button></Link> 
         
            </div>
      </div>
        </section>
    </div>
  )
}
