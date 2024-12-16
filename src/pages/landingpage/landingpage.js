import foodCol1 from '../../assets/images/food-col-1.png';
import travellersCol4 from '../../assets/images/travellers-col-4.png';
import globeCol2 from '../../assets/images/globe-col-2.svg';
import starCol3 from '../../assets/images/star-col-3.svg';
import testimonyGroup from '../../assets/images/testimony-group.png';
import testimonyExperience from '../../assets/images/testimony-experience.png';
import star from '../../assets/logo/star.svg';
import yellowStar from '../../assets/logo/yellow-star.svg';

export default function LandingPage() {
    return (
        <>
            {/*Hero Section*/}
            <section className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-6">
                        <p className="mb-2 display-4 fw-bold text-break" style={{fontFamily: 'Nunito'}}>
                            Accessing Private Chefs And Group Experiences Across Africa Made Easy
                        </p>

                        <p className="mt-4 mb-4 fs-5 text-break" style={{font: 'Comfortaa'}}>
                            Born from a passion to bring
                            luxury hotel dining to your doorstep, we connect
                            you with top-tier chefs and curate bespoke group trips

                        </p>

                        <div className="mt-4 mb-4 d-flex flex-row">
                            <button className="btn fs-6 rounded-3" style={{
                                background: '#FB9D00',
                                fontFamily: 'Nunito',
                                width: '180px',
                                height: '50px',
                            }}>Experience Now
                            </button>

                            <p className="ms-2 fs-6">
                                {[...Array(5)].map((_, i) => (
                                    <img key={i} src={star} alt="star"/>
                                ))}{' '}
                                <span className="fw-bold">5.0</span><br/>
                                from 50+ <span className="fw-bold text-decoration-underline">reviews</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-xs-12">
                        <div className="row">
                            <div className="col-sm-6 col-6 m-0" style={{
                                backgroundImage: `url(${foodCol1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '260px',
                            }}/>
                            <div className="col-sm-6 col-6 m-0 p-0" style={{height: '260px'}}>
                                <div
                                    className={'d-flex h-100 w-100 rounded-end rounded-pill bg-black position-relative'}>
                                    <p className={'fs-1 text-white position-absolute top-0 end-0 mt-3 me-3 text-end lh-1'}
                                       style={{font: 'Nunito',}}>
                                        1k+<br/>
                                        <span className={'fs-5 fw-light text-capitalize'}>Private Chefs</span>
                                    </p>

                                    <img
                                        src={globeCol2}
                                        alt="globe"
                                        className={'position-absolute bottom-0 end-0 w-25 mb-3 me-3'}/>

                                </div>
                            </div>
                            <div className="w-100"/>
                            <div className="col-sm-6 col-6 m-0 p-0" style={{height: '260px'}}>
                                <div className={'w-100 p-3 h-100 rounded-start rounded-pill d-flex flex-column'}
                                     style={{background: '#FB9D0073'}}>
                                    <div className={'d-flex flex-row w-100'}>

                                        {[...Array(2)].map((_, i) => (
                                            <img key={i} src={starCol3} alt="star" className={'w-25'}/>))}
                                    </div>

                                    <p className={'mt-auto fs-1 lh-sm text-start p-0'} style={{font: 'Nunito'}}>
                                        120+<br/>
                                        <span className={'text-capitalize fw-light fs-5 p-0'}>Completed Trips</span>
                                    </p>
                                </div>

                            </div>
                            <div className="col-sm-6 col-6 m-0 p-0" style={{
                                backgroundImage: `url(${travellersCol4})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '260px',
                            }}/>
                        </div>
                    </div>
                </div>
            </section>
            {/*Reviews Section*/}
            <section className="container">
                <div className="mb-4">
                    <p className="fs-6 text-center" style={{font: 'Nunito', color: '#FB9D00'}}>
                        50+ Happy Feastify Users
                    </p>
                    <p className="fs-3 text-center fw-medium" style={{font: 'Nunito'}}>
                        Don't just listen to what they say try experience
                    </p>
                </div>
                <div className="row d-flex mb-5 w-100">
                    <div className="col-md-6">
                        <div className="row mx-1">
                            <div className="col-md-4 col-12 rounded-4" style={{
                                backgroundImage: `url(${testimonyGroup})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '239px',
                            }}/>
                            <div className="col-md-8 col-12 d-flex flex-column h-100">
                                <p className="mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <img key={i} src={star} alt="star" className="mx-1"/>
                                    ))}
                                </p>
                                <p className="fs-6 fw-light" style={{font: 'Poppins', color: '#FB9D00'}}>
                                    Group Experience
                                </p>
                                <p className="fs-5 fw-normal lh-sm" style={{font: 'Nunito'}}>
                                    "We love the feastify! Our designers were using it for their projects,
                                    so we already knew what kind of design they want."
                                </p>
                                <p className="fs-6 fw-medium mt-auto" style={{font: 'Nunito'}}>
                                    Jenny Wilson
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row mx-1">
                            <div className="col-md-4 m-0 rounded-4" style={{
                                backgroundImage: `url(${testimonyExperience})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '239px',
                            }}/>
                            <div className="col-md-8 d-flex flex-column h-100">
                                <p className="mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <img key={i} src={star} alt="star" className="mx-1"/>
                                    ))}
                                </p>
                                <p className="fs-6 fw-light" style={{font: 'Poppins', color: '#FB9D00'}}>
                                    Chef
                                </p>
                                <p className="fs-5 fw-normal lh-sm" style={{font: 'Nunito'}}>
                                    "We love the feastify! Our designers were using it for their projects,
                                    so we already knew what kind of design they want."
                                </p>
                                <p className="fs-6 fw-medium mt-auto" style={{font: 'Nunito'}}>
                                    Devon Lane
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*About Us Section*/}
            <section className="container">
                <div className="d-flex flex-column align-items-center mb-4">
                    <p className="fs-4 text-center" style={{font: 'Nunito', color: '#FB9D00'}}>
                        About Us
                    </p>
                    <p className="fs-3 text-center text-capitalize fw-medium" style={{font: 'Nunito'}}>
                        We Connect Private Chefs With Host and Curate Unique Group Experiences Globally
                    </p>

                    <p className={'fs-6 text-center'}>
                        Remove all the friction that stands in your way when planning parties at home,
                        at work or when you and your group of friends want to go on a staycation
                    </p>
                </div>
            </section>
            {/*Values Section*/}
            <section className="bg-black">
                <div className="container">
                    <div className="d-flex flex-column align-items-center mb-4 p-2">
                        <p className="fs-4 text-center text-capitalize" style={{font: 'Nunito', color: '#FB9D00'}}>
                            Our Values
                        </p>
                        <p className="fs-3 text-center text-capitalize fw-medium text-light" style={{font: 'Nunito'}}>
                            {/*We are friendly to your wallet, we are transparent, we are unique and we are always here for you*/}
                            We are friendly to your wallet.
                        </p>
                        <div className="row">
                            <div className="col-md-3 my-2 p-1">
                                <div className="bg-white d-flex flex-column align-items-center rounded-4 p-3 h-100">
                                    <img
                                        src={yellowStar}
                                        alt="yellow star"
                                    />
                                    <p className="fs-5 text-center text-capitalize fw-medium my-1">
                                        Executive Chefs
                                    </p>
                                    <p className="fs-6 text-center fw-light my-1">
                                        Connect with top chefs ready to luxury hotel dining to your doorstep
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 my-2 p-1">
                                <div className="bg-white d-flex flex-column align-items-center rounded-4 p-3 h-100">
                                    <img
                                        src={yellowStar}
                                        alt="yellow star"
                                    />

                                    <p className="fs-5 text-center text-capitalize fw-medium my-1">
                                        Price Transparency
                                    </p>

                                    <p className="fs-6 text-center fw-light my-1">
                                        Know exact price of everything from ingredients, flights, staycation home and
                                        activities
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 my-2 p-1">
                                <div className="bg-white d-flex flex-column align-items-center rounded-4 p-3 h-100">
                                    <img
                                        src={yellowStar}
                                        alt="yellow star"
                                    />

                                    <p className="fs-5 text-center text-capitalize fw-medium my-1">
                                        Unique Trips
                                    </p>

                                    <p className="fs-6 text-center fw-light my-1">
                                        Enjoy trips you cannot find anywhere else by exploring hidden gems
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-3 my-2 p-1">
                                <div className="bg-white d-flex flex-column align-items-center rounded-4 p-3 h-100">
                                    <img
                                        src={yellowStar}
                                        alt="yellow star"
                                    />

                                    <p className="fs-5 text-center text-capitalize fw-medium my-1">
                                        24/7 Support
                                    </p>

                                    <p className="fs-6 text-center fw-light my-1">
                                        At your service in just a minute
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/*FAQ Section*/}
            <section className="container">
                <p className="fs-3 text-center text-capitalize fw-medium" style={{font: 'Nunito'}}>
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
                    <div className="col-md-6"></div>
                </div>
            </section>
        </>
    )
}