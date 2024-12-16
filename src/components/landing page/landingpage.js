import React from 'react'
import { Link } from 'react-router-dom/dist'

export default function Hirepage() {
  return (
    <div className='landingpage'>
        <section className="landinghead py-4" style={{backgroundColor: 'black', color: 'white', height: '50vh'}}>
            <h1 className="display-2 text-center" style={{color: 'white'}}>
            <span style={{color: '#FB9D00'}}>Hello,</span>
            <br />
            what would you like to
            <br />
            <span style={{color: '#FB9D00'}}>experience?</span>
            </h1>
      </section>
      <section className='landingbody'>
      <div className='landingbuttons' style={{ marginTop: '5rem', marginBottom: '6rem'}}>
            <div class="">
                <Link to="/event-type" style={{ textDecoration: 'none', color: 'black'}}><button className="landing-btn d-block m-auto border border-warning rounded " type="button" style={{backgroundColor: 'white', marginBottom: '2rem'}}>private chef</button></Link>
                <Link to="/coming-soon" style={{ textDecoration: 'none', color: 'black'}}><button className="landing-btn d-block m-auto border border-warning rounded " type="button" style={{backgroundColor: 'white'}}>private barista</button></Link>
                <Link to="/coming-soon" style={{ textDecoration: 'none', color: 'black'}}><button className="landing-btn d-block m-auto border border-warning rounded " type="button" style={{backgroundColor: 'white'}}>private mixologist</button></Link>     
                            
            </div>
      </div>
      </section>
    </div>
  )
}
