import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './auth.css';
import {getAuth, createUserWithEmailAndPassword,  sendEmailVerification,  updateProfile  } from "firebase/auth";
import {BASE_URL} from "../../App";


export default function ChefRegister() {
const today = new Date();
const minAgeDate = new Date(today.setFullYear(today.getFullYear() -18))
const minDate = minAgeDate.toISOString().split('T')[0];
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    birthDate: '',
    gender: '',
    addressLine1: '',
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
    
    const chefData = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      birth_date: formData.birthDate,
      referral_source: "Google",
      location: {
        country: formData.country,
        state_province: formData.region,
        address_line1: formData.addressLine1,
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

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    try {
      // Register user in Firebase
      const auth = getAuth();
      const userCreds = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
      const user = userCreds.user;
      
      await updateProfile(user, {
        displayName: `${formData.firstName} ${formData.lastName}`
      });
      // Send email verification
      await sendEmailVerification(user);
      alert('A verification email has been sent. Please check your inbox and verify your email before logging in.');
  
      // Assign role to the user in your backend
      const idToken = await user.getIdToken();
      const roleResponse = await fetch(`${BASE_URL}/auth/assign-role`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${idToken}`
        },
        body: JSON.stringify({
          uid: user.uid,
          role: 'chef',
        })
      });
  
      if (!roleResponse.ok) {
        throw new Error('Role assignment failed');
      }
      
      const newToken = await user.getIdToken(true) 
      // Register the chef data in your backend
      const chefRegisterResponse = await fetch(`${BASE_URL}/chefs/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${newToken}`
        },
        body: JSON.stringify({
          ...chefData
        })
      });
  
      if (chefRegisterResponse.ok) {
        alert('Chef registration successful! Please verify your email to activate your account.');
        navigate('/login');
      } else {
        throw new Error('Chef registration failed');
      }
  
    } catch (error) {
      console.error('Error during registration:', error);
      alert(`Registration failed: ${error.message}`);
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

        <div className="input-box mt-4">
          <label>Password</label>
          <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              required
          />
        </div>

        <div className="input-box mt-4">
          <label>Confirm password</label>
          <input
              type="password"
              name="confirmPassword"
              placeholder="Repeat your password"
              value={formData.confirmPassword}
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
                max={minDate}
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
          <div className="column d-flex">
            <div className="select-box">
              <select onChange={
                (e) => {
                  setFormData({
                    ...formData,
                    country: e.target.value
                  })
                }
              }>
                <option hidden>Country</option>
                <option>Algeria</option>
                <option>Angola</option>
                <option>Benin</option>
                <option>Botswana</option>
                <option>Burkina Faso</option>
                <option>Burundi</option>
                <option>Cape Verde</option>
                <option>Cameroon</option>
                <option>Central African Republic</option>
                <option>Chad</option>
                <option>Comoros</option>
                <option>Democratic Republic of the Congo</option>
                <option>Republic of the Congo</option>
                <option>Djibouti</option>
                <option>Egypt</option>
                <option>Equatorial Guinea</option>
                <option>Eritrea</option>
                <option>Eswatini</option>
                <option>Ethiopia</option>
                <option>Gabon</option>
                <option>Gambia</option>
                <option>Ghana</option>
                <option>Guinea</option>
                <option>Guinea-Bissau</option>
                <option>Ivory Coast</option>
                <option>Kenya</option>
                <option>Lesotho</option>
                <option>Liberia</option>
                <option>Libya</option>
                <option>Madagascar</option>
                <option>Malawi</option>
                <option>Mali</option>
                <option>Mauritania</option>
                <option>Mauritius</option>
                <option>Morocco</option>
                <option>Mozambique</option>
                <option>Namibia</option>
                <option>Niger</option>
                <option>Nigeria</option>
                <option>Rwanda</option>
                <option>São Tomé and Príncipe</option>
                <option>Senegal</option>
                <option>Seychelles</option>
                <option>Sierra Leone</option>
                <option>Somalia</option>
                <option>South Africa</option>
                <option>South Sudan</option>
                <option>Sudan</option>
                <option>Tanzania</option>
                <option>Togo</option>
                <option>Tunisia</option>
                <option>Uganda</option>
                <option>Zambia</option>
                <option>Zimbabwe</option>
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
