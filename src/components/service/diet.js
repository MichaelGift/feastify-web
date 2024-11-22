import { Link } from "react-router-dom";

export default function DietaryRestrictions() {
  return (
    <div className="body-container flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-2xl font-bold mb-4 mt-5">Any dietary restrictions?</h1>
      <p className="text-xl mb-4" style={{ textAlign: 'center'}}>Not sure ? you can always tell the chef later</p>


        <div className='landingbuttons'>
            <div class="d-grid gap-2 col-6 mx-auto">
                <Link to="/cuisine" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">Yes</button></Link>
                <Link to="/cuisine" style={{ textDecoration: 'none'}}><button class="landing-btn" type="button">No</button></Link>
                                
            </div>
        </div>
    </div>
  );
}
