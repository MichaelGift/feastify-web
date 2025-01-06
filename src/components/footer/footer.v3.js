import footerLogo from '../../assets/logo/footer-logo-.png'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTiktok, faInstagram, faLinkedin, faCcVisa, faApplePay, faCcMastercard} from '@fortawesome/free-brands-svg-icons';

export default function footer() {
    const currentYear = new Date().getFullYear();
    return (
        <>
            <section>
                <div className="container d-flex flex-column">
                    <div className="row">
                        <div className="col-md-6 d-flex align-items-center p-2">
                            <img src={footerLogo} alt="Footer Logo" className='mx-auto' style={{
                                objectFit: 'scale-down',
                                height: '200px',
                            }}/>
                        </div>
                        <div className="col-md-3 p-4 text-center text-md-left">
                            <p className="fs-5 fw-medium" style={{font: 'Nunito', color: '#FB9D00'}}>Main Links</p>
                            <p className="fs-6 fw-normal" style={{font: 'Nunito'}}>
                                <Link to="/chef-hire" className="text-dark">Hire Private Chefs</Link>
                            </p>
                            <p className="fs-6 fw-normal" style={{font: 'Nunito'}}>
                                <Link to="/" className="text-dark">Group Experiences</Link>
                            </p>
                            <p className="fs-6 fw-normal" style={{font: 'Nunito'}}>
                                <Link to="/contact-us" className="text-dark">Contact Us</Link>
                            </p>
                            <p className="fs-6 fw-normal" style={{font: 'Nunito'}}>
                                <Link to="/chef-register" className="text-dark">Chef Register</Link>
                            </p>
                        </div>
                        <div className=" col-md-3 p-4 text-center text-md-left">
                            <p className="fs-5 fw-medium" style={{font: 'Nunito', color: '#FB9D00'}}>Legal</p>
                            <p className="fs-6 fw-normal" style={{font: 'Nunito'}}>
                                <Link className="text-dark">Terms & Conditions</Link>
                            </p>
                            <p className="fs-6 fw-normal" style={{font: 'Nunito'}}>
                                <Link className="text-dark">FAQ</Link>
                            </p>

                            <p className="fs-5 fw-medium" style={{font: 'Nunito', color: '#FB9D00'}}>Payment Accepted</p>
                            <FontAwesomeIcon className="fa-2xl mx-1" icon={faCcVisa} />
                            <FontAwesomeIcon className="fa-2xl mx-1" icon={faCcMastercard} />
                            <FontAwesomeIcon className="fa-2xl mx-1" icon={faApplePay} />

                        </div>
                    </div>
                    <div className="bg-dark mb-3 align-self-center" style={{height: '1px', width: '90%'}}></div>
                    <div className="d-flex flex-column align-items-center mb-3">
                    <div className="d-flex flex-row mb-3">
                        <a href="https://www.tiktok.com/@thefeastify" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="btn" icon={faTiktok} />
                        </a>
                        <a href="https://www.linkedin.com/company/thefeastify/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="btn" icon={faLinkedin} />
                        </a>
                        <a href="https://www.instagram.com/thefeastify/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon className="btn" icon={faInstagram} />
                        </a>
                    </div>
                        <p className="fs-6 fw-light text-center w-100 m-0 text-capitalize" style={{font:'Nunito'}}>
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