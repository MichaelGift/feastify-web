import React from 'react'
import { Link } from 'react-router-dom'

export default function StoveType() {
  return (
    <div>
        <section className='body-container'>
            <h1>Our Kitchen has...</h1>
            <div className='landingbuttons mt-5 mb-5'>
            <div class="">
                <Link to="/oven-confirmation" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">Electric</button></Link>
                <Link to="/oven-confirmation" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">Induction</button></Link>
                <Link to="/oven-confirmation" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">Gas</button></Link>   
         
            </div>
      </div>
        </section>
    </div>
  )
}
