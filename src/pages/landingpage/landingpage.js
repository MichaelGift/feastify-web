import foodCol1 from '../../assets/images/food-col-1.png';
import travellersCol4 from '../../assets/images/travellers-col-4.png';
import globeCol2 from '../../assets/images/globe-col-2.svg';
import starCol3 from '../../assets/images/star-col-3.svg';

export default function LandingPage() {
    return (
        <>
            <section className="container">
                <div className="row mt-5 mb-5">
                    <div className="col-md-6">
                        <p className="mb-2" style={{
                            fontFamily: 'Nunito',
                            fontSize: '60px',
                            fontWeight: '700',
                            lineHeight: '69px',
                        }}>
                            Accessing Private Chefs And Group Experiences Across Africa Made Easy
                        </p>

                        <p className="mt-4 mb-4" style={{
                            font: 'Comfortaa',
                            fontWeight: '500',
                            fontSize: '18px',
                        }}>
                            Born from a passion to bring<br/>
                            luxury hotel dining to your doorstep, we connect<br/>
                            you with top-tier chefs and curate bespoke group trips

                        </p>

                        <div className="mt-4 mb-4 d-flex flex-row">
                            <button className="btn" style={{
                                background: '#FB9D00',
                                font: 'Nunito',
                                fontWeight: '500',
                                borderRadius: '8px',
                                width: '180px',
                                height: '50px',
                            }}>Experience Now
                            </button>

                            <p className="ms-2">
                                ⭐⭐⭐⭐⭐{' '}
                                <span className="fw-bold">5.0</span><br/>
                                from 50+ <span className="fw-bold text-decoration-underline">reviews</span>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-sm-6 m-0" style={{
                                backgroundImage: `url(${foodCol1})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '260px',
                            }}/>
                            <div className="col-sm-6 m-0 p-0" style={{height: '260px'}}>
                                <div style={{
                                    display: 'flex',
                                    background: 'black',
                                    borderRadius: '50% 0 0 50%',
                                    height: '100%',
                                    width: '100%',
                                    position: 'relative',
                                }}>
                                    <p style={{
                                        color: 'white',
                                        font: 'Nunito',
                                        fontWeight: '500',
                                        fontSize: '36px',
                                        position: 'absolute',
                                        top: '10%',
                                        right: '10%',
                                        textAlign: 'right',
                                        lineHeight: '30px',
                                    }}>
                                        1k+<br/>
                                        <span style={
                                            {fontSize: '18px',
                                                fontWeight: '400',
                                                lineHeight: '21px',
                                                textTransform: 'capitalize',
                                            }
                                        }>Private Chefs</span>
                                    </p>

                                    <img
                                        src={globeCol2}
                                        alt="globe"
                                        style={{
                                            position: 'absolute',
                                            bottom: '10%',
                                            right: '10%',
                                            width: '25%',
                                        }}/>

                                </div>
                            </div>
                            <div className="w-100"/>
                            <div className="col-sm-6 m-0 p-0" style={{height: '260px'}}>
                                <div style={{
                                    background: '#FB9D0073',
                                    borderRadius: '0 50% 50% 0',
                                    width: '100%',
                                    height: '260px',
                                    padding: '10%',
                                }}>
                                    <div className={'d-flex flex-row w-100'}>
                                        <img
                                            src={starCol3}
                                            alt="star"
                                            style={{width: '20%'}}
                                        />
                                        <img
                                            src={starCol3}
                                            alt="star"
                                            style={{width: '20%'}}
                                        />
                                    </div>

                                    <p className={'mt-5'} style={{
                                        font: 'Nunito',
                                        fontWeight: '500',
                                        fontSize: '50px',
                                        alignSelf: 'end',
                                        textAlign: 'left',
                                        lineHeight: '30px',
                                    }}>
                                        120+<br/>
                                        <span style={
                                            {
                                                fontSize: '18px',
                                                fontWeight: '400',
                                                lineHeight: '21px',
                                                textTransform: 'capitalize',
                                            }
                                        }>Completed Trips</span>
                                    </p>
                                </div>

                            </div>
                            <div className="col-sm-6 m-0 p-0" style={{
                                backgroundImage: `url(${travellersCol4})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '260px',
                            }}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}