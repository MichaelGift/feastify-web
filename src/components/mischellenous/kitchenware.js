import React from 'react'
import { Link } from 'react-router-dom'

export default function Kitchenware() {
  return (
    <div>
        <section className='body-container'>
            <h1>Our Kitchen has...</h1>
            <div className='landingbuttons mt-5 mb-5'>
            <div class="">
                <Link to="/stove-type" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">2 burners</button></Link>
                <Link to="/stove-type" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">3 burners</button></Link>
                <Link to="/stove-type" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">4 burners</button></Link>   
                <Link to="/stove-type" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">5 burners</button></Link>
                <Link to="/stove-type" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">6 burners</button></Link>     
                            
            </div>
      </div>
        </section>
    </div>
  )
}
