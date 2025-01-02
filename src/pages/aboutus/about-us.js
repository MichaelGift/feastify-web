import col1a from "../../assets/images/img-col-1a.png";
import col2a from "../../assets/images/img-col-2a.png";
import col3a from "../../assets/images/img-col-3a.png";
import col4a from "../../assets/images/img-col-4a.png";
import star from "../../assets/logo/star.svg";

export default function AboutUs() {
    return (
        <>
            <section className="container mb-5 mt-3 d-flex flex-column align-items-center">
                <p className='text-center fs-4' style={{color: "#FB9D00"}}>
                    Where Passion Meets The Art Of Catering
                </p>
                <p className="text-center fs-5 fw-medium" style={{fontFamily: 'Nunito'}}>
                    At Feastify, we connect 5-star private chefs with hosts, provide<br/>
                    premium food catering services for corporate and private events and<br/>
                    curate unique cuisine-themed experiences across Africa.
                </p>

                <button className="rounded-pill px-4 py-2 bg-black text-white mt-2" style={{fontFamily: 'Nunito'}}>
                    Book Event Catering
                </button>
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

            <section className="container mb-5 bg-black rounded-5">
                <div className="p-5">
                    <p className='text-center fs-2 text-white mb-3'>
                        Don’t just listen to what they say, try book and experience
                    </p>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="rounded-4" style={{
                                        backgroundImage: `url(${col1a})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '16rem'
                                    }}/>
                                </div>
                                <div className="col-md-7 text-white d-flex flex-column">
                                    <p className="mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <img key={i} src={star} alt="star" className="mx-1"/>
                                        ))}
                                    </p>
                                    <p className="mt-auto">
                                        "We love the feastify! Our designers were using it for their projects,
                                        so we already knew what kind of design they want."
                                    </p>
                                    <p className="mt-3" style={{color: "#FB9D00"}}>
                                        Jenny Wilson Family
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-5">
                                    <div className="rounded-4" style={{
                                        backgroundImage: `url(${col1a})`,
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        height: '16rem'
                                    }}/>
                                </div>
                                <div className="col-md-7 text-white d-flex flex-column">
                                    <p className="mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <img key={i} src={star} alt="star" className="mx-1"/>
                                        ))}
                                    </p>
                                    <p className="mt-auto">
                                        "We love the feastify! Our designers were using it for their projects,
                                        so we already knew what kind of design they want."
                                    </p>
                                    <p className="mt-3" style={{color: "#FB9D00"}}>
                                        Devon Lane
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="container mb-5 mt-3">
                <p className="text-center fw-medium fs-2 text-capitalize">
                    Our services at a glance
                </p>

                <div className="row">
                    <div className="col-md-4 p-0">
                        <div className="p-3">
                            <div className="shadow-sm rounded-4 d-flex flex-column">
                                <div className="rounded-top-4" style={{
                                    backgroundImage: `url(${col2a})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '22rem'
                                }}/>

                                <p className="fs-3 fw-medium text-center mt-2">Private Chef Services</p>
                                <p className="fs-6 fw-light text-center mx-2">Personalized dining experiences for
                                    intimate
                                    gatherings.</p>

                                <button
                                    className="px-4 py-2 text-capitalize bg-black text-white rounded-pill mx-auto mb-4">Book
                                    A
                                    Private Chef
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <div className="p-3">
                            <div className="shadow-sm rounded-4 d-flex flex-column">
                                <div className="rounded-top-4" style={{
                                    backgroundImage: `url(${col2a})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '22rem'
                                }}/>

                                <p className="fs-3 fw-medium text-center mt-2">Private Chef Services</p>
                                <p className="fs-6 fw-light text-center mx-2">Personalized dining experiences for
                                    intimate
                                    gatherings.</p>

                                <button
                                    className="px-4 py-2 text-capitalize bg-black text-white rounded-pill mx-auto mb-4">Book
                                    A
                                    Private Chef
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 p-0">
                        <div className="p-3">
                            <div className="shadow-sm rounded-4 d-flex flex-column">
                                <div className="rounded-top-4" style={{
                                    backgroundImage: `url(${col2a})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '22rem'
                                }}/>

                                <p className="fs-3 fw-medium text-center mt-2">Private Chef Services</p>
                                <p className="fs-6 fw-light text-center mx-2">Personalized dining experiences for
                                    intimate
                                    gatherings.</p>

                                <button
                                    className="px-4 py-2 text-capitalize bg-black text-white rounded-pill mx-auto mb-4">Book
                                    A
                                    Private Chef
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mb-5 mt-3">
                <p className="text-center fw-medium fs-2 text-capitalize">A Taste of What We Deliver</p>

                <div className="row">
                    <div className="col-md-3 p-0">
                        <div className="p-2">
                            <div className="rounded-4" style={{
                                backgroundImage: `url(${col4a})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '20rem'
                            }}/>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="p-2">
                            <div className="rounded-4" style={{
                                backgroundImage: `url(${col4a})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '20rem'
                            }}/>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="p-2">
                            <div className="rounded-4" style={{
                                backgroundImage: `url(${col4a})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '20rem'
                            }}/>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="p-2">
                            <div className="rounded-4" style={{
                                backgroundImage: `url(${col4a})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '20rem'
                            }}/>
                        </div>
                    </div>
                </div>
                <div className="my-1"/>
                <div className="row">
                    <div className="col-md-3 p-0">
                        <div className="p-2">
                            <div className="rounded-4" style={{
                                backgroundImage: `url(${col4a})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '20rem'
                            }}/>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="p-2">
                            <div className="rounded-4" style={{
                                backgroundImage: `url(${col4a})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '20rem'
                            }}/>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="p-2">
                            <div className="rounded-4" style={{
                                backgroundImage: `url(${col4a})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '20rem'
                            }}/>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="p-2">
                            <div className="rounded-4" style={{
                                backgroundImage: `url(${col4a})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '20rem'
                            }}/>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mb-5 bg-black rounded-4">
                <div className="d-flex flex-column align-items-center p-5 m-3">
                    <p className="fs-1 fw-medium text-white text-center text-capitalize" style={{fontFamily: 'Nunito'}}>
                        Lets talk <span style={{color: '#FB9D00'}}>Food and Events</span>
                    </p>
                    <p className="fs-6 text-white text-center" style={{fontFamily: 'Nunito'}}>
                        Want to discuss your catering needs, explore themed events, or learn<br/> more about Feastify?
                        Schedule a meeting with us at your convenience.
                    </p>
                    <button className="btn bg-white text-black px-5 py-3 fw-medium rounded-pill">
                        Schedule A Meeting
                    </button>
                </div>
            </section>
        </>
    )
}