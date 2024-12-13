import footerLogo from '../../assets/logo/footer-logo.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faLinkedin, faInstagram, faWhatsapp} from '@fortawesome/free-brands-svg-icons';

export default function footer() {
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
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}>Hire Private Chefs</p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}>Group Experiences</p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}>Contact Us</p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}>Chef Register</p>
                        </div>
                        <div className=" col-md-3 col-sm-12 col-12 p-4">
                            <p className="fs-5 fw-medium" style={{font: 'Nunito', color: '#FB9D00'}}>Legal</p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}>Terms & Conditions</p>
                            <p className="fs-6 fw-normal text-light" style={{font: 'Nunito'}}>FAQ</p>
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
                        <p className="text-white fs-6 fw-light text-center w-100 m-0">All rights reserved by The
                            Feastify Global Limited
                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}