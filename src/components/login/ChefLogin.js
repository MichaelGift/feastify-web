import React, { useState } from 'react';
import './auth.css';

export default function ChefLogin() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    birthDate: '',
    gender: '',
    addressLine1: '',
    addressLine2: '',
    country: '',
    city: '',
    region: '',
    postalCode: '',
    workInKenya: '',
    criminalRecord: '',
    linkedin: '',
    pinterest: '',
    portfolio: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Clicked')
    
    const chefData = {
      uid: "123456",
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      referral_source: "Google",
      location: {
        country: formData.country,
        state_province: formData.region,
        address_line1: formData.addressLine1,
        address_line2: formData.addressLine2,
        postal_code: formData.postalCode
      },
      type_of_chef: "personal", 
      criminal_record: formData.criminalRecord === 'Yes',
      socials: {
        instagram: formData.instagram,
        facebook: formData.facebook,
        twitter: formData.twitter
      }
    };

    try {
      const response = await fetch('http://localhost:3000/api/chefs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(chefData)
      });
      
      const result = await response.json();
      
      if (response.ok) {
        alert('Chef registered successfully!');
        console.log(result);
      } else {
        alert('Registration failed!');
        console.error(result);
      }
    } catch (error) {
      alert('An error occurred while submitting the form.');
      console.error(error);
    }
  };
  return (
    <section className="coontainer mt-5 mb-5 rounded p-3 m-auto w-100">
    <header className='text-center' style={{ fontWeight: '550', fontSize: '1.5rem'}}>Registration Form</header>
    <form onSubmit={handleSubmit} className="form mt-5">
      <div className="input-box mt-4 ">
        <label>First Name</label>
        <input 
            type="text" 
            name="firstName" 
            placeholder="Enter first name" 
            value={formData.firstName} 
            onChange={handleChange} 
            required 
          />
      </div>
      <div className="input-box mt-4">
        <label>Last Name</label>
        <input 
            type="text" 
            name="lastName" 
            placeholder="Enter lastname" 
            value={formData.lastName} 
            onChange={handleChange} 
            required 
          />
      </div>
      <div className="input-box mt-4">
        <label>Email Address</label>
        <input 
            type="text" 
            name="email" 
            placeholder="Enter email address" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
      </div>
      <div className="column">
        <div className="input-box mt-4">
          <label>Phone Number</label>
          <input 
              type="number" 
              name="phone" 
              placeholder="Enter phone number" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
        </div>
        <div className="input-box mt-4">
          <label>Birth Date</label>
          <input 
              type="date" 
              name="birthDate" 
              value={formData.birthDate} 
              onChange={handleChange} 
              required 
            />
        </div>
      </div>
      <div className="gender-box mt-3">
        <h3 className='mb-2'>Gender</h3>
        <div className="gender-option">
          <div className="gender d-flex align-items-center flex-wrap">
          <input 
                type="radio" 
                id="check-male" 
                name="gender" 
                value="male" 
                checked={formData.gender === 'male'} 
                onChange={handleChange} 
              />
            <label for="check-male">male</label>
          </div>
          <div className="gender d-flex align-items-center flex-wrap">
          <input 
                type="radio" 
                id="check-female" 
                name="gender" 
                value="female" 
                checked={formData.gender === 'female'} 
                onChange={handleChange} 
              />
            <label for="check-female">Female</label>
          </div>
        </div>
      </div>
      <div className="input-box address mt-4">
        <label>Address</label>
        <input 
            type="text" 
            name="addressLine1" 
            placeholder="Enter street address" 
            value={formData.addressLine1} 
            onChange={handleChange} 
            required 
          />
          {/* <input 
            type="text" 
            name="addressLine2" 
            placeholder="Enter street address line 2" 
            value={formData.addressLine2} 
            onChange={handleChange} 
            required 
          /> */}
        <div className="column d-flex">
          <div className="select-box">
            <select>
              <option hidden>Country</option>
              <option>America</option>
              <option>Japan</option>
              <option>India</option>
              <option>Nepal</option>
            </select>
          </div>
          <input 
              type="text" 
              name="city" 
              placeholder="Enter your city" 
              value={formData.city} 
              onChange={handleChange} 
              required 
            />
        </div>
        <div className="column">
        <input 
              type="text" 
              name="region" 
              placeholder="Enter your region" 
              value={formData.region} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="number" 
              name="postalCode" 
              placeholder="Enter postal code" 
              value={formData.postalCode} 
              onChange={handleChange} 
              required 
            />
        </div>
      </div>
      <div className="input-box address mt-4">
      <label for="check-female">Are you allowed to work in Kenya?</label>
      <div className="select-box">
      <select name="workInKenya" value={formData.workInKenya} onChange={handleChange}>
            <option hidden>Choose an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>
        <div className='input-box mt-4'>
        <label for="check-female">Do you have a Criminal Record?</label>
        <div className="select-box">
        <select name="criminalRecord" value={formData.criminalRecord} onChange={handleChange}>
            <option hidden>Choose an option</option>
            <option>Yes</option>
            <option>No</option>
          </select>
        </div>  
        </div>
        <div className='input-box mt-4'>
        <label for="check-female">Your Linkedin</label>
        <input 
            type="text" 
            name="linkedin" 
            placeholder="Enter your LinkedIn URL" 
            value={formData.linkedin} 
            onChange={handleChange}
          />
        </div>
        <div className='input-box mt-4'>            
        <label for="check-female">Your Pintrest (optional)</label>
        <input 
            type="text" 
            name="pinterest" 
            placeholder="Enter your Pinterest URL" 
            value={formData.pinterest} 
            onChange={handleChange}
          />    
        </div>
        <div className='input-box mt-4'>
        <label for="check-female">Your Portfolio Website (optional)</label>
        <input 
            type="text" 
            name="portfolio" 
            placeholder="Enter your portfolio URL" 
            value={formData.portfolio} 
            onChange={handleChange}
          />      
        </div>
      </div>
      <button className='border-0  w-100 p-3 mt-3 h-75 d-inline-block rounded'>Submit</button>
    </form>
  </section>
  );
}
