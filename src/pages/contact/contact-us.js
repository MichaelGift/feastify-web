import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope, faMapMarker, faPhone} from "@fortawesome/free-solid-svg-icons";


export default function ContactUs() {
    return (
        <>
            <section className="bg-black">
                <div className="container d-flex flex-column align-items-center">
                    <p className="fs-2 fw-medium mt-3" style={{font: "Nunito", color: '#FB9D00'}}>Get In Touch</p>
                    <p className="fs-5 text-light">Life is short the world is wide</p>

                    <div className="">
                        <div className="col text-light">
                            <p className="fs-4 fw-medium">Contact Information</p>
                            <div className='d-flex flex-row align-items-center my-2'>
                                <FontAwesomeIcon icon={faPhone} className="fa-lg"/>
                                <p className='m-0 ms-3'>+254711749149</p>
                            </div>
                            <div className='d-flex flex-row align-items-center my-2'>
                                <FontAwesomeIcon icon={faEnvelope} className="fa-lg"/>
                                <p className='m-0 ms-3'>hi@thefeastify.com</p>
                            </div>
                            <div className='d-flex flex-row align-items-center my-2'>
                                <FontAwesomeIcon icon={faMapMarker} className="fa-lg"/>
                                <p className='m-0 ms-3'>Nairobi, Kenya</p>
                            </div>
                        </div>
                        <form>

                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}