import React from 'react';
import './auth.css';

export default function ChefLogin() {
  return (
    <section class="coontainer">
    <header>Registration Form</header>
    <form action="#" class="form">
      <div class="input-box">
        <label>Full Name</label>
        <input type="text" placeholder="Enter full name" required />
      </div>
      <div class="input-box">
        <label>User Name</label>
        <input type="text" placeholder="Enter a username" required />
      </div>
      <div class="input-box">
        <label>Email Address</label>
        <input type="text" placeholder="Enter email address" required />
      </div>
      <div class="column">
        <div class="input-box">
          <label>Phone Number</label>
          <input type="number" placeholder="Enter phone number" required />
        </div>
        <div class="input-box">
          <label>Birth Date</label>
          <input type="date" placeholder="Enter birth date" required />
        </div>
      </div>
      <div class="gender-box">
        <h3>Gender</h3>
        <div class="gender-option">
          <div class="gender">
            <input type="radio" id="check-male" name="gender" checked />
            <label for="check-male">male</label>
          </div>
          <div class="gender">
            <input type="radio" id="check-female" name="gender" />
            <label for="check-female">Female</label>
          </div>
        </div>
      </div>
      <div class="input-box address">
        <label>Address</label>
        <input type="text" placeholder="Enter street address" required />
        <input type="text" placeholder="Enter street address line 2" required />
        <div class="column">
          <div class="select-box">
            <select>
              <option hidden>Country</option>
              <option>America</option>
              <option>Japan</option>
              <option>India</option>
              <option>Nepal</option>
            </select>
          </div>
          <input type="text" placeholder="Enter your city" required />
        </div>
        <div class="column">
          <input type="text" placeholder="Enter your region" required />
          <input type="number" placeholder="Enter postal code" required />
        </div>
      </div>
      <div class="input-box address">
      <label for="check-female">Are you allowed to work in Kenya?</label>
      <div class="select-box">
            <select>
              <option hidden>Choose an option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
        </div>
        <div className='input-box'>
        <label for="check-female">Do you have a Criminal Record?</label>
        <div class="select-box">
            <select>
              <option hidden>Choose an option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
        </div>  
        </div>
        <div className='input-box'>
        <label for="check-female">Do you have a Criminal Record?</label>
        <div class="select-box">
            <select>
              <option hidden>Choose an option</option>
              <option>Yes</option>
              <option>No</option>
            </select>
        </div>  
        </div>
        <div className='input-box'>
        <label for="check-female">Your Linkedin</label>
        <input type="text" placeholder="" required /> 
        </div>
        <div className='input-box'>            
        <label for="check-female">Your Pintrest (optional)</label>
        <input type="text" placeholder="" required />    
        </div>
        <div className='input-box'>
        <label for="check-female">Your Portfolio Website (optional)</label>
        <input type="text" placeholder="" required />
      
        </div>
      </div>
      <button>Submit</button>
    </form>
  </section>
  );
}
