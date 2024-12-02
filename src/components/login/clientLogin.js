import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';
import google from "../../assets/logo/google.png";
import facebook from "../../assets/logo/facebook.png";
import microsoft from "../../assets/logo/microsoft.png";
import apple from "../../assets/logo/apple.png";
import { auth, googleProvider } from '../../firebase'; 
import { signInWithPopup } from 'firebase/auth';

export default function ClientLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:3000/dev/simulate-login', {
        email,
        password,
      })
      .then((response) => {
        console.log('Login successful:', response.data);
        setLoginStatus('Login successful!');
      })
      .catch((error) => {
        console.error('Login failed:', error);
        setLoginStatus('Login failed. Please try again.');
      });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log('User info:', user);
      alert(`Welcome, ${user.displayName}!`);
    } catch (error) {
      console.error('Error during Google login:', error.message);
      setLoginStatus('Google login failed. Please try again.');
    }
  };

  return (
    <div className="login_form p-5 m-auto ">
      <form onSubmit={handleSubmit}>
        <h3>Log in with</h3>

        <div className="login_option d-flex flex-wrap">
          <div className="option" onClick={handleGoogleLogin}>
            <a href="#" className='rounded d-flex justify-content-center align-items-center border border-secondary p-4 m-4 h-25 d-inline-block fw-normal text-body '>
              <img src={google} alt="Google" />
              <span>Google</span>
            </a>
          </div>
          <div className="option">
            <a href="#" className='rounded d-flex justify-content-center align-items-center border border-secondary p-4 m-4 h-25 d-inline-block fw-normal text-body'>
              <img src={facebook} alt="Facebook" />
              <span>Facebook</span>
            </a>
          </div>
          <div className="option">
            <a href="#" className='rounded d-flex justify-content-center align-items-center border border-secondary p-4 m-4 h-25 d-inline-block fw-normal text-body'>
              <img src={apple} alt="Apple" />
              <span>Apple</span>
            </a>
          </div>
          <div className="option">
            <a href="#" className='rounded d-flex justify-content-center align-items-center border border-secondary p-4 m-4 h-25 d-inline-block fw-normal text-body'>
              <img src={microsoft} alt="Microsoft" />
              <span>Microsoft</span>
            </a>
          </div>
        </div>

        <p className="separator position-relative mb-5">
          <span className='p-1 position-relative'>or</span>
        </p>

        <div className="input_box position-relative">
          <label className='d-block fw-normal mb-2' htmlFor="email">Email</label>
          <input
            className=' h-100 d-inline-block rounded border-1 p-1 mb-4 '
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="input_box position-relative">
          <div className="password_title d-flex justify-content-between text-center">
            <label className='d-block fw-normal mb-2'  htmlFor="password">Password</label>
            <a href="#">Forgot Password?</a>
          </div>
          <input
            className=' h-100 d-inline-block rounded border-1 p-1 mb-4 '
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button className=' w-75 h-100 d-inline-block mb-4 rounded border-0 ' type="submit">Log In</button>

        {loginStatus && <p className="status_message">{loginStatus}</p>}
        <p className="sign_up">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
}
