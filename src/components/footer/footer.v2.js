import footerLogo from '../../assets/logo/footer-logo.png'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

export default function footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section className="bg-black">
                <div className="container d-flex flex-column">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center p-2">
                            <img src={footerLogo} alt="Footer Logo" className='img-fluid mx-auto' style={{objectFit: 'scale-down'}}/>
                        </div>
                        <div className="col-md-3 p-4 text-center text-md-left">
                            <p className="fs-5 fw-medium" style={{font: 'Nunito', color: '#FB9D00'}}>Main Links</p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}><Link to="/chef-hire" style={{color: 'white'}}>Hire Private Chefs</Link></p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}><Link style={{color: 'white'}}>Group Experiences</Link></p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}><Link to="/contact-us" style={{color: 'white'}}>Contact Us</Link></p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}><Link to="/chef-register" style={{color: 'white'}}>Chef Register</Link></p>
                        </div>
                        <div className=" col-md-3 p-4 text-center text-md-left">
                            <p className="fs-5 fw-medium" style={{font: 'Nunito', color: '#FB9D00'}}>Legal</p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}><Link  style={{color: 'white'}}>Terms & Conditions</Link></p>
                            <a className="fs-6 fw-normal text-light" style={{font: 'Nunito'}} href="#faq-section">FAQ</a>
                        </div>
                    </div>
                    <div className="bg-light mb-3 align-self-center" style={{height: '1px', width: '90%'}}></div>
                    <div className="d-flex flex-column align-items-center mb-3">
                    <div className="d-flex flex-row mb-3">
                        <a href="https://facebook.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="text-light btn" icon={faFacebook} />
                        </a>
                        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="text-light btn" icon={faLinkedin} />
                        </a>
                        <a href="https://instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="text-light btn" icon={faInstagram} />
                        </a>
                    </div>
                        <p className="text-white fs-6 fw-light text-center w-100 m-0 text-capitalize" style={{font:'Nunito'}}>
                            <span className="fw-medium">The Feastify Global Limited.</span>
                            <br/>
                            &copy; {currentYear} <span className="text-muted">-</span> All rights reserved.

                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}