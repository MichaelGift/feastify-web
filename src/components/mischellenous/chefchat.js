import React from 'react'
import { Link } from 'react-router-dom'
import "./misc.css"


export default function ChefChat() {
  return (
    <div>
        <section className='chefchatsection'>
            <h1>Hello Chef !</h1>
            <div class="mb-3 textrea">
                <textarea class="form-controlarea" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <div class="">
                <Link to="/contact-info-submit" style={{ textDecoration: 'none'}}><button class="landing-btn d-block m-auto border border-warning rounded " type="button">continue</button></Link>
             
            </div>
        </section>
    </div>
  )
}
