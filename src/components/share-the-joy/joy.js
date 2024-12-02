import food from "../../assets/aboutus/platefood.jpg";

export default function Joy() {
  return (
    <section
      className="d-flex justify-content-center align-items-center flex-column"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="d-flex flex-column align-items-center mt-5 border-0 shadow mb-5 rounded"
        style={{ width: "25vw", overflow: "hidden" }}
      >
        <img src={food} alt="..." style={{ width: "400px", height: "400px" }} />
        <div
          className="d-flex flex-column align-items-center"
          style={{ padding: "1.5rem" }}
        >
          <h2 style={{ fontSize: "1.5rem" }}>Donation Package Name</h2>
          <p className="mb-4">
            Your share experience package includes a team of three talented
            chefs, ready to create a memorable event filled with delicious
            Italian cuisine.
          </p>
          <hr />
          <p>Available for users in Kenya</p>
          <div className="text-xl font-bold mb-4">KSH 40,000.00</div>
        </div>
        <div>
          <h2 style={{ fontSize: "1.5rem" }}>Perk Includes</h2>
          {/* <h2 className="text-xl font-bold">Includes.</h2> */}
          <p className="mb-2">brief description of the experience</p>
          <section className="my-8">
            <button className="bg-black text-white px-4 py-2 rounded mt-4 mb-4">
              share the joy
            </button>
          </section>
        </div>
      </div>
    </section>
  );
}
