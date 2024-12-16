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
                        <div className="col-md-6 col-sm-6 col-6 justify-content-sm-center">
                            <img src={footerLogo} alt="Footer Logo"/>
                        </div>
                        <div className="col-md-3 col-sm-6 col-6 p-4">
                            <p className="fs-5 fw-medium" style={{font: 'Nunito', color: '#FB9D00'}}>Main Links</p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}><Link style={{color: 'white'}}>Hire Private Chefs</Link></p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}><Link style={{color: 'white'}}>Group Experiences</Link></p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}><Link style={{color: 'white'}}>Contact Us</Link></p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}><Link style={{color: 'white'}}>Chef Register</Link></p>
                        </div>
                        <div className=" col-md-3 col-sm-12 col-12 p-4">
                            <p className="fs-5 fw-medium" style={{font: 'Nunito', color: '#FB9D00'}}>Legal</p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}><Link  style={{color: 'white'}}>Terms & Conditions</Link></p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}><Link  style={{color: 'white'}}>FAQ</Link></p>
                        </div>
                    </div>
                    <div className="bg-light mb-3 align-self-center" style={{height: '1px', width: '90%'}}></div>
                    <div className="d-flex flex-column align-items-center mb-3">
                        <div className="d-flex flex-row mb-3">
                            <FontAwesomeIcon className="text-light btn" icon={faFacebook}/>
                            <FontAwesomeIcon className="text-light btn" icon={faLinkedin}/>
                            <FontAwesomeIcon className="text-light btn" icon={faInstagram}/>
                            <FontAwesomeIcon className="text-light btn" icon={faWhatsapp}/>
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