import React from 'react'
import { Link } from 'react-router-dom'

export default function StoveType() {
  return (
    <div>
        <section className='body-container'>
            <h1>Our Kitchen has...</h1>
            <div className='landingbuttons'>
            <div class="">
                <Link to="/oven-confirmation" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">Electric</button></Link>
                <Link to="/oven-confirmation" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">Induction</button></Link>
                <Link to="/oven-confirmation" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">Gas</button></Link>   
         
            </div>
      </div>
        </section>
    </div>
  )
}
