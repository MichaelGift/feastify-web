import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {Link } from 'react-router-dom'
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
import brand3 from '../../assets/images/brand-3.svg';
import brand4 from '../../assets/images/brand-4.png';
import brand5 from '../../assets/images/brand-5.png';
import brand6 from '../../assets/images/brand-6.png';

const evenData = "https://docs.google.com/forms/d/e/1FAIpQLScd4TSKuvPKH8dXynOnOT3JTJDDyxd0Ghsy7451PMyqSLCmmw/viewform"

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

                        <Link to ={evenData} className="btn bg-black text-white px-5 py-3 fw-medium rounded-pill mx-auto mt-auto">
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

                        <Link to ={evenData} className="btn bg-black text-white px-5 py-3 fw-medium rounded-pill mx-auto mt-auto">
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

                        <Link to ={evenData} className="btn bg-black text-white px-5 py-3 fw-medium rounded-pill mx-auto mt-auto">
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

                        <Link to ={evenData} className="btn bg-black text-white px-5 py-3 fw-medium rounded-pill mx-auto mt-auto">
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
                            backgroundSize: 'auto',
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
                    <Link to={evenData} className="btn bg-white text-black px-5 py-3 fw-medium rounded-pill">
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
                                        What does a private chef service include in Nairobi?
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse"
                                     aria-labelledby="headingOne"
                                     data-bs-parent="#accordionLeft">
                                    <div className="accordion-body">
                                        <p>
                                            The Feastify private chef service includes everything necessary to enjoy a
                                            personalized dining experience at home.
                                            <br/>
                                            <br/>
                                            This includes:
                                            <li> Customization of a menu based on your preferences;</li>
                                            <li> Purchase of ingredients;</li>
                                            <li> Preparation of the menu at your home;</li>
                                            <li> Complete table service;</li>
                                            <li> Set up and cleaning of the kitchen and used spaces.</li>
                                            <br/>
                                            Please note that tableware and glassware are not included. Gratuity is
                                            entirely at your discretion.

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
                                        How much does a private chef cost in Nairobi?
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse"
                                     aria-labelledby="headingTwo"
                                     data-bs-parent="#accordionLeft">
                                    <div className="accordion-body">
                                        <p>
                                            The price of renting a chef in Nairobi can vary depending on the specifics,
                                            but smaller groups tend to have a slightly different price per person
                                            compared to larger gatherings.
                                            <br/>
                                            <br/>
                                            Booking prices range from 18,000 KSH to 25,000 KSH.
                                            <li>For 13 people
                                                or more, the price is 18,000 KSH per person. </li>
                                            <li>For 7 to 12 people,
                                                the cost is 18,000 KSH per person.
                                            </li>

                                            <li>For 3 to 6 people, the rate is
                                                22,000 KSH per person
                                            </li>
                                            <li>For 2 people, the price is 25,000 KSH per person.</li>
                                            <br/>
                                            Seasonal ingredients, your location, and how soon you book also affect the
                                            final price.
                                            <br/>
                                            <br/>
                                            If you're interested in getting free quotes with no obligation,
                                            fill out our form and let the best chefs near you send unique proposals for
                                            your event.

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
                                        How can I hire a private chef in Nairobi?
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse"
                                     aria-labelledby="headingThree"
                                     data-bs-parent="#accordionLeft">
                                    <div className="accordion-body">
                                        <p>
                                            <span className="fw-bold">Booking is easy!</span>
                                            <br/>
                                            <br/>
                                            Just tell us the date of your event, number of guests,
                                            dietary preferences and any allergies, and a few details about your kitchen.
                                            <br/>
                                            <br/>
                                            Within a few hours, you'll receive customized menus from qualified chefs.
                                            Each chef's profile will include their experience, reviews, and photos of
                                            their dishes.
                                            <br/>
                                            <br/>
                                            Feel free to chat directly with the chefs through our platform. Ask them to
                                            modify menus, discuss pricing, or get answers to any questions you might
                                            have.
                                            <br/>
                                            <br/>
                                            Once you've found the perfect chef and menu, finalize your reservation
                                            online. We'll then provide the chef's contact information to confirm any
                                            final details.


                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFour">
                                    <button className="accordion-button collapsed fs-5" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour" style={{font: 'Nunito'}}>
                                        What are the best private chef services in Nairobi?
                                    </button>
                                </h2>
                                <div id="collapseFour" className="accordion-collapse collapse"
                                     aria-labelledby="headingFour"
                                     data-bs-parent="#accordionLeft">
                                    <div className="accordion-body">
                                        <p>
                                            There are currently 200+ chefs available in Nairobi.
                                            <br/>
                                            <br/>
                                            Fill out a form
                                            specifying your needs and the date. The Feastify will connect you with the
                                            best available chefs in Nairobi who will send you their menu proposals.

                                            <br/>
                                            <br/>
                                            You can then choose the chef and menu that suits you best.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingFive">
                                    <button className="accordion-button collapsed fs-5" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseFive" aria-expanded="false"
                                            aria-controls="collapseFive" style={{font: 'Nunito'}}>
                                        Is there a limit of guests for a private chef service?
                                    </button>
                                </h2>
                                <div id="collapseFive" className="accordion-collapse collapse"
                                     aria-labelledby="headingFive"
                                     data-bs-parent="#accordionLeft">
                                    <div className="accordion-body">
                                        <p>
                                            While there's no strict limit on guest count, private chef experiences are
                                            designed to create a more intimate atmosphere, perfect for gatherings of
                                            friends and family.
                                            <br/>
                                            <br/>
                                            Since most homes have limited space to accommodate large
                                            groups, parties typically don't exceed 15 people.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingSix">
                                    <button className="accordion-button collapsed fs-5" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseSix" aria-expanded="false"
                                            aria-controls="collapseSix" style={{font: 'Nunito'}}>
                                        How do reviews work?
                                    </button>
                                </h2>
                                <div id="collapseSix" className="accordion-collapse collapse"
                                     aria-labelledby="headingSix"
                                     data-bs-parent="#accordionLeft">
                                    <div className="accordion-body">
                                        <p>
                                            All the reviews on The Feastify are written by Private Chefs, Group
                                            travellers or Hosts who have completed a trip or private chefs experience
                                            using The Feastify. In addition to a written review the customers are also
                                            asked to provide star ratings.
                                            <br/>
                                            <br/>
                                            You’ll see the star rating out of 5 at the top which is an average of all
                                            reviews submitted. Only Customers who have officially booked a group trip or
                                            private chef
                                            through the platform and have successfully taken part in the group trip and
                                            the private chefs experience are eligible to write a review.
                                            <br/>
                                            <br/>
                                            We display reviews on chefs profiles, group experiences and website to help
                                            our audience learn more about the Feastify and our service offerings to
                                            increase their trust and confidence.
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
                                        Does the chef cook at my house?
                                    </button>
                                </h2>
                                <div id="collapseSeven" className="accordion-collapse collapse"
                                     aria-labelledby="headingSeven"
                                     data-bs-parent="#accordionRight">
                                    <div className="accordion-body">
                                        <p>
                                            Yes, the chef always prepares the menu at your home for a more personalized
                                            experience.
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
                                        Can I cook along with the chef?
                                    </button>
                                </h2>
                                <div id="collapseEight" className="accordion-collapse collapse"
                                     aria-labelledby="headingEight"
                                     data-bs-parent="#accordionRight">
                                    <div className="accordion-body">
                                        <p>
                                            Absolutely!
                                            <br/>
                                            <br/>
                                            Many guests are passionate about food and relish the chance to
                                            learn from the chef. You can pick up new kitchen skills and get a
                                            behind-the-scenes look at each dish on the menu.
                                            <br/>
                                            <br/>
                                            Feel free to jump in and
                                            cook alongside the chef for a truly interactive experience!
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
                                        Why does The Feastify charge a service fee?
                                    </button>
                                </h2>
                                <div id="collapseNine" className="accordion-collapse collapse"
                                     aria-labelledby="headingNine"
                                     data-bs-parent="#accordionRight">
                                    <div className="accordion-body">
                                        <p>
                                            The fee is used to maintain the website, to continuously improve it and of
                                            course to offer you the best possible customer service.
                                            <br/>
                                            <br/>
                                            Our team works day and night to bring you the coolest group travel
                                            experiences and private
                                            chefs globally. We do our best to provide you with authentic trips, private
                                            chefs and trustworthy like-minded travellers.
                                            <br/>
                                            <br/>
                                            We are very price transparent
                                            on every cost incurred.
                                            The service fee allows us to pay our salaries and
                                            keep us going :)
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTen">
                                    <button className="accordion-button collapsed fs-5" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTen" aria-expanded="false"
                                            aria-controls="collapseTen" style={{font: 'Nunito'}}>
                                        Are the ingredients fresh?
                                    </button>
                                </h2>
                                <div id="collapseTen" className="accordion-collapse collapse"
                                     aria-labelledby="headingTen"
                                     data-bs-parent="#accordionRight">
                                    <div className="accordion-body">
                                        <p>
                                            Yes, they're 100% fresh.
                                            <br/>
                                            <br/>
                                            Unlike restaurants with pre-made dishes, private
                                            chefs prioritize using the freshest ingredients possible.
                                            <br/>
                                            <br/>
                                            This is because
                                            the chef creates a customized menu specifically for you, then on his way
                                            sources the finest ingredients to bring your chosen dishes to life.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingEleven">
                                    <button className="accordion-button collapsed fs-5" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseEleven" aria-expanded="false"
                                            aria-controls="collapseEleven" style={{font: 'Nunito'}}>
                                        Are drinks included in the personal chef service?
                                    </button>
                                </h2>
                                <div id="collapseEleven" className="accordion-collapse collapse"
                                     aria-labelledby="headingEleven"
                                     data-bs-parent="#accordionRight">
                                    <div className="accordion-body">
                                        <p>
                                            Drinks are not typically included, but you can discuss adding them to the
                                            menu proposal with the chef.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="headingTwelve">
                                    <button className="accordion-button collapsed fs-5" type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target="#collapseTwelve" aria-expanded="false"
                                            aria-controls="collapseTwelve" style={{font: 'Nunito'}}>
                                        How much should I tip my private chef in Nairobi?
                                    </button>
                                </h2>
                                <div id="collapseTwelve" className="accordion-collapse collapse"
                                     aria-labelledby="headingTwelve"
                                     data-bs-parent="#accordionRight">
                                    <div className="accordion-body">
                                        <p>
                                            Tipping for private chefs is entirely at your discretion.
                                            <br/>
                                            <br/>
                                            Our goal is for
                                            you to have an unforgettable experience, and the chef always appreciates a
                                            nice tip. However, the decision and amount are completely up to you.
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
                    <button className="btn bg-white text-black px-5 py-3 fw-medium rounded-pill">
                        Chat With Us
                    </button>
                </div>
            </section>

        </>
    )
}