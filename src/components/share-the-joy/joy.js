import { Link } from "react-router-dom";
import food from "../../assets/aboutus/platefood.jpg"
import "./joy.css"


export default function Joy() {
  return (
      <section className="space">
        <div class="card" style={{width: '18rem '}}>
        <img src={food} 
        // class="card-img-top" 
        alt="..."/>
        <div class="joy-body">
        <h2 className="t">Donation Package Name</h2>
          <p className="mb-4">Your share experience package includes a team of three
            talented chefs, ready to create a memorable 
            event filled with delicious Italian cuisine.</p>
            <hr/>
          <p>Available for users in Kenya</p>
          <div className="text-xl font-bold mb-4">KSH 40,000.00</div>
        </div>
      </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-xl text-color font-bold">Perk</h2>
          <h2 className="text-xl font-bold">Includes.</h2>
          <p className="mb-4">brief description of the experience</p>
          <section className="my-8">
            <button className="bg-black text-white px-4 py-2 rounded mt-4">share the joy</button>
          </section>
        </div>
      </section>
  );
}