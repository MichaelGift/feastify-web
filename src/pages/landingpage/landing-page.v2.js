import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'
import col1a from '../../assets/images/img-col-1.png';
import col2a from '../../assets/images/img-col-2.png';
import col3a from '../../assets/images/img-col-3.png';
import col4a from '../../assets/images/img-col-4.png';
import chef1 from '../../assets/images/chef-1.png';
import chef2 from '../../assets/images/chef-2.png';
import chef3 from '../../assets/images/chef-3.png';
import chef4 from '../../assets/images/chef-4.png';
import brand1 from '../../assets/images/brand-1.png';
import brand2 from '../../assets/images/brand-2.png';
import brand3 from '../../assets/images/brand-7.png';
import brand4 from '../../assets/images/brand-4.png';
import brand5 from '../../assets/images/brand-5.png';
import brand6 from '../../assets/images/brand-6.png';

const eventData = "https://docs.google.com/forms/d/e/1FAIpQLScd4TSKuvPKH8dXynOnOT3JTJDDyxd0Ghsy7451PMyqSLCmmw/viewform"
const whatsappContact = "wa.link/9yfb0t"
const callContact = "tel:0711749149"
const emailContact = "mailto:hi@thefeastify.com"

export default function landingPage() {
    return (
        <>
            <section className="container d-flex flex-column align-items-center mb-4">
                <p className="mt-5 display-4 fw-medium text-center">
                    Your <span style={{color: '#FB9D00'}}>Event</span>
                    , Our <span style={{color: '#FB9D00'}}>Culinary</span> Magic
                </p>
                <p className="fs-5 text-center" style={{font: "Nunito"}}>
                    “Elevate your event with unforgettable dishes and seamless service.
                    We make every corporate and private gatherings extraordinary with a
                    touch of premium culinary magic.”
                </p>
                <form className="border form-inline border-md-bg border-1 px-5 py-2 rounded-pill">
                    <div className="form-group">
                        <div className="border-2 border-end me-2">
                            <label htmlFor="email" className="form-label m-0">Event Type</label>
                            <input type="text" className="form-control m-0 bg-white border-0 ps-0"
                                   placeholder="Choose your event type"/>
                        </div>
                        <div className="border-2 border-end me-2">
                            <label htmlFor="email" className="form-label m-0">Location</label>
                            <input type="text" className="form-control m-0 bg-white border-0 ps-0"
                                   placeholder="Enter the address"/>
                        </div>
                        <div className="border-2 border-end me-2">
                            <label htmlFor="email" className="form-label m-0">Service Begins</label>
                            <input type="date" className="form-control m-0 bg-white border-0 ps-0"
                                   placeholder="Add date"/>
                        </div>
                        <div className="border-2 border-end me-2">
                            <label htmlFor="email" className="form-label m-0">Service Ends</label>
                            <input type="date" className="form-control m-0 bg-white border-0 ps-0"
                                   placeholder="Add date"/>
                        </div>
                    </div>
                    <button className="btn rounded-circle bg-black my-auto">
                        <FontAwesomeIcon icon={faArrowRight} style={{color: "#FB9D00"}}/>
                    </button>
                </form>
            </section>

            <section className="container mb-5">
                <div className="row">
                    <div className="col-md-3 rounded-4 p-1 overflow-hidden">
                        <div className="rounded-4" style={{
                            backgroundImage: `url(${col1a})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '16rem'
                        }}/>
                    </div>
                    <div className="col-md-3 rounded-4 p-1 overflow-hidden">
                        <div className="rounded-4" style={{
                            backgroundImage: `url(${col2a})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '16rem'
                        }}/>
                    </div>
                    <div className="col-md-3 rounded-4 p-1 overflow-hidden">
                        <div className="rounded-4" style={{
                            backgroundImage: `url(${col3a})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '16rem'
                        }}/>
                    </div>
                    <div className="col-md-3 rounded-4 p-1 overflow-hidden">
                        <div className="rounded-4" style={{
                            backgroundImage: `url(${col4a})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '16rem'
                        }}/>
                    </div>
                </div>
            </section>

            <section className="container mb-5 bg-black rounded-4">
                <div className="row p-3">
                    <div className="col">
                        <p className="fs-2 fw-medium text-center mb-0" style={{
                            font: 'Nunito',
                            color: '#FB9D00'
                        }}>124+</p>
                        <p className="fs-6 text-white text-center" style={{font: 'Nunito'}}>Corporate Events<br/>Catered
                            Perfectly</p>
                    </div>
                    <div className="col">
                        <p className="fs-2 fw-medium text-center mb-0" style={{
                            font: 'Nunito',
                            color: '#FB9D00'
                        }}>106+</p>
                        <p className="fs-6 text-white text-center" style={{font: 'Nunito'}}>Private Events<br/>Catered
                            Perfectly</p>
                    </div>
                    <div className="col">
                        <p className="fs-2 fw-medium text-center mb-0" style={{
                            font: 'Nunito',
                            color: '#FB9D00'
                        }}>1k+</p>
                        <p className="fs-6 text-white text-center" style={{font: 'Nunito'}}>Five Star Private<br/>Chefs
                            Onboard</p>
                    </div>
                    <div className="col">
                        <p className="fs-2 fw-medium text-center mb-0" style={{
                            font: 'Nunito',
                            color: '#FB9D00'
                        }}>8k+</p>
                        <p className="fs-6 text-white text-center" style={{font: 'Nunito'}}>Dishes Served<br/>With
                            Passion</p>
                    </div>
                    <div className="col">
                        <p className="fs-2 fw-medium text-center mb-0" style={{
                            font: 'Nunito',
                            color: '#FB9D00'
                        }}>98%</p>
                        <p className="fs-6 text-white text-center" style={{font: 'Nunito'}}>Of Our Clients<br/>Recommend
                            Us</p>
                    </div>
                </div>
            </section>

            <section className="container mb-5">
                <p className="fs-1 fw-bold text-center" style={{fontFamily: 'Nunito'}}>A taste of the talent we
                    offer</p>
                <div className="row">
                    <div className="col-md-3 d-flex flex-column mb-2" style={{height: '35rem'}}>
                        <div className="rounded-4 mb-3" style={{
                            backgroundImage: `url(${chef1})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20rem'
                        }}/>
                        <p className="fs-5 text-center fw-medium my-0" style={{font: 'Nunito'}}>
                            Chef Elena Nkurumah
                        </p>
                        <p className="fs-5 text-center text-capitalize mt-0 mb-3"
                           style={{font: 'Nunito', color: '#FB9D00'}}>
                            West African & Caribbean Fusion
                        </p>
                        <p className="fs-6 text-center mt-0 mb-3" style={{font: 'Nunito'}}>
                            Food is a bridge between cultures, and I’m here to bring those worlds together on your
                            plate.
                        </p>

                        <Link to={eventData}
                              className="btn bg-black text-white px-5 py-3 fw-medium rounded-pill mx-auto mt-auto">
                            Book Chef
                        </Link>
                    </div>
                    <div className="col-md-3 d-flex flex-column mb-2" style={{height: '35rem'}}>
                        <div className="rounded-4 mb-3" style={{
                            backgroundImage: `url(${chef2})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20rem'
                        }}/>
                        <p className="fs-5 text-center fw-medium my-0" style={{font: 'Nunito'}}>
                            Chef Zara Obasi
                        </p>
                        <p className="fs-5 text-center text-capitalize mt-0 mb-3"
                           style={{font: 'Nunito', color: '#FB9D00'}}>
                            Plant-Based Gourmet Cuisine
                        </p>
                        <p className="fs-6 text-center mt-0 mb-3" style={{font: 'Nunito'}}>
                            Creating dishes that celebrate nature’s bounty is my way of making every meal a celebration.
                        </p>

                        <Link to={eventData}
                              className="btn bg-black text-white px-5 py-3 fw-medium rounded-pill mx-auto mt-auto">
                            Book Chef
                        </Link>
                    </div>
                    <div className="col-md-3 d-flex flex-column mb-2" style={{height: '35rem'}}>
                        <div className="rounded-4 mb-3" style={{
                            backgroundImage: `url(${chef3})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20rem'
                        }}/>
                        <p className="fs-5 text-center fw-medium my-0" style={{font: 'Nunito'}}>
                            Chef Sophia Martins
                        </p>
                        <p className="fs-5 text-center text-capitalize mt-0 mb-3"
                           style={{font: 'Nunito', color: '#FB9D00'}}>
                            Mediterranean Cuisine
                        </p>
                        <p className="fs-6 text-center mt-0 mb-3" style={{font: 'Nunito'}}>
                            To me, food is an art form, and every meal should be as beautiful as it is delicious.
                        </p>

                        <Link to={eventData}
                              className="btn bg-black text-white px-5 py-3 fw-medium rounded-pill mx-auto mt-auto">
                            Book Chef
                        </Link>
                    </div>
                    <div className="col-md-3 d-flex flex-column mb-2" style={{height: '35rem'}}>
                        <div className="rounded-4 mb-3" style={{
                            backgroundImage: `url(${chef4})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '20rem'
                        }}/>
                        <p className="fs-5 text-center fw-medium my-0" style={{font: 'Nunito'}}>
                            Chef Leila Abdallah
                        </p>
                        <p className="fs-5 text-center text-capitalize mt-0 mb-3"
                           style={{font: 'Nunito', color: '#FB9D00'}}>
                            Africa Fusion Cuisine
                        </p>
                        <p className="fs-6 text-center mt-0 mb-3" style={{font: 'Nunito'}}>
                            Cooking is storytelling, and every dish shares a chapter of culture and passion.
                        </p>

                        <Link to={eventData}
                              className="btn bg-black text-white px-5 py-3 fw-medium rounded-pill mx-auto mt-auto">
                            Book Chef
                        </Link>
                    </div>
                </div>
            </section>

            <section className="container mb-5">
                <p className="fs-1 fw-bold text-center" style={{fontFamily: 'Nunito'}}>
                    Inspired by brands that redefine excellence
                </p>
                <p className="fs-6 text-muted text-center" style={{fontFamily: 'Nunito'}}>
                    Brands shown do not imply affiliation or endorsement, they inspire us alot.
                </p>
                <div className="row p-3">
                    <div className="col-md-2">
                        <div style={{
                            backgroundImage: `url(${brand1})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '10rem'
                        }}/>
                    </div>
                    <div className="col-md-2">
                        <div style={{
                            backgroundImage: `url(${brand2})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '10rem'
                        }}/>
                    </div>
                    <div className="col-md-2">
                        <div style={{
                            backgroundImage: `url(${brand3})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '10rem'
                        }}/>
                    </div>
                    <div className="col-md-2">
                        <div style={{
                            backgroundImage: `url(${brand4})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '10rem'
                        }}/>
                    </div>
                    <div className="col-md-2">
                        <div style={{
                            backgroundImage: `url(${brand5})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '10rem'
                        }}/>
                    </div>
                    <div className="col-md-2">
                        <div style={{
                            backgroundImage: `url(${brand6})`,
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center',
                            height: '10rem'
                        }}/>
                    </div>
                </div>
            </section>

            <section className="container mb-5 bg-black rounded-4">
                <div className="d-flex flex-column align-items-center p-5 m-3">
                    <p className="fs-1 fw-bold text-white text-center" style={{fontFamily: 'Nunito'}}>
                        Delight in every bite, <span style={{color: '#FB9D00'}}>Every Occasion.</span>
                    </p>
                    <p className="fs-6 text-white text-center" style={{fontFamily: 'Nunito'}}>
                        Our chefs pride themselves on offering a premium catering experience with<br/>
                        colorful, modern, and imaginative dishes, including corporate and event<br/>
                        catering
                    </p>
                    <Link to={eventData} className="btn bg-white text-black px-5 py-3 fw-medium rounded-pill">
                        Book Us Now
                    </Link>
                </div>
            </section>

            <section className="container" id="faq-section">
                <p className="fs-3 text-center text-capitalize fw-medium mt-5" style={{font: 'Nunito'}}>
                    Frequently Asked Questions
                </p>
                <div className="row mb-5">
                    <div className="col-md-6">
                        <div className="accordion accordion-flush" id='accordionLeft'>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingOne">
                                    <button className="accordion-button collapsed fs-5 fw-light" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseOne" aria-expanded="false"
                                            aria-controls="collapseOne" style={{font: 'Nunito'}}>
                                        Need Catering Services for your event?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne"
                                     data-bs-parent="#accordionLeft">
                                    <div className="accordion-body">
                                        <p>
                                            <strong>Call us</strong>
                                            <a href={callContact}> 0711749149</a> <br/>

                                            <strong>Email us</strong>
                                            <a href={emailContact}> hi@thefeastify.com</a>
                                            <br/>
                                            <strong>Fill out an</strong> <a href={eventData}>application form</a>
                                            <br/>
                                            <br/>
                                            In order to best help you with an accurate quote we will need to ask a few
                                            questions which we can do over the phone, email, online form, google meet or
                                            in person if you wish.

                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwo">
                                    <button className="accordion-button collapsed fs-5" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwo" aria-expanded="false"
                                            aria-controls="collapseTwo" style={{font: 'Nunito'}}>
                                        How much food will I need for the event?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                     aria-labelledby="headingTwo"
                                     data-bs-parent="#accordionLeft">
                                    <div className="accordion-body">
                                        <p>
                                            This depends on a few factors including the occasion, time and duration of
                                            the function, whether the guests are big or small eaters and your budget.
                                            <br/>
                                            <br/>
                                            Most of our menus are priced per person and our experienced staff at
                                            feastify will work with you.
                                            <br/>
                                            <br/>
                                            Prior Service day we will make sure you have the right amount and variety of
                                            food for your intended function, we offer to shop for the freshest
                                            ingredients on your behalf as well.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingThree">
                                    <button className="accordion-button collapsed fs-5" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseThree" aria-expanded="false"
                                            aria-controls="collapseThree" style={{font: 'Nunito'}}>
                                        How soon do I need to book and give final numbers for my event?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                     aria-labelledby="headingThree"
                                     data-bs-parent="#accordionLeft">
                                    <div className="accordion-body">
                                        <p>
                                            For buffet and service events, we at feastify require final numbers 12 days
                                            prior to the function. For platters and finger food drop off we require 7
                                            days prior.
                                            <br/>
                                            <br/>
                                            At Feastify we do our best to accommodate any late/last minute bookings as
                                            we understand some things are not planned.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="accordion accordion-flush" id='accordionRight'>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSeven">
                                    <button className="accordion-button collapsed fs-5 fw-light" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSeven" aria-expanded="false"
                                            aria-controls="collapseSeven" style={{font: 'Nunito'}}>
                                        What if I need to cancel my booking?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse"
                                     aria-labelledby="headingSeven"
                                     data-bs-parent="#accordionRight">
                                    <div className="accordion-body">
                                        <p>
                                            If a cancellation is made less than 48 hours prior the customers may be
                                            liable for 100% of the catering cost.
                                            <br/>
                                            See our General Terms and Conditions for more info.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEight">
                                    <button className="accordion-button collapsed fs-5" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseEight" aria-expanded="false"
                                            aria-controls="collapseEight" style={{font: 'Nunito'}}>
                                        Do I need to pay a deposit?
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse"
                                     aria-labelledby="headingEight"
                                     data-bs-parent="#accordionRight">
                                    <div className="accordion-body">
                                        <p>
                                            A 40% deposit is required to secure your booking with feastify.
                                            <br/>
                                            And full payment is required 4 days prior.
                                            <br/>
                                            Purchase orders will be accepted from Government Departments and payment
                                            terms agreed.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingNine">
                                    <button className="accordion-button collapsed fs-5" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseNine" aria-expanded="false"
                                            aria-controls="collapseNine" style={{font: 'Nunito'}}>
                                        How do I pay?
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse"
                                     aria-labelledby="headingNine"
                                     data-bs-parent="#accordionRight">
                                    <div className="accordion-body">
                                        <p>
                                            You can easily pay your bill online. Please ask for our bank details.
                                            <br/>
                                            We also accept cash, EFT transfer or Visa/MasterCard payment.
                                            <br/>
                                            See our General Terms and Conditions for more info.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mb-5 bg-black rounded-4">
                <div className="d-flex flex-column align-items-center p-5 m-3">
                    <p className="fs-3 text-center text-uppercase" style={{fontFamily: 'Nunito', color: '#FB9D00'}}>
                        Let us make your event memorable
                    </p>
                    <p className="fs-6 text-white text-center" style={{fontFamily: 'Nunito'}}>
                        Can’t find the answer you’re looking for? Please chat to our friendly team.
                    </p>
                    <Link to={whatsappContact} className="btn bg-white text-black px-5 py-3 fw-medium rounded-pill">
                        Chat With Us
                    </Link>
                </div>
            </section>

        </>
    )
}