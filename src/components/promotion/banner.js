export default function Banner() {
    const promo = "🚀  GET 5% OFF FIRST BOOKING";
    return(
        <>
            <section className="bg-black">
                <div className="container d-flex flex-column p-1">
                    <p className="text-light fs-6 fw-medium text-center text-uppercase m-0" style={{font:"Nunito"}}>{promo}</p>
                </div>
            </section>
        </>
    )
}