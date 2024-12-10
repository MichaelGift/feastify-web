import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { signInWithPopup, signInWithEmailAndPassword, getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { auth, googleProvider } from '../../firebase';
import './auth.css';
import google from "../../assets/logo/google.png";
import facebook from "../../assets/logo/facebook.png";
import microsoft from "../../assets/logo/microsoft.png";
import apple from "../../assets/logo/apple.png";
import {BASE_URL} from "../../App";

export default function ChefLogin({ setAuthToken }) {
  const navigate =  useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [resetEmail, setResetEmail] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (!user.emailVerified) {
          alert ('Please verify you email to login');
          return;
        }

        console.log('Login successful:', user);
        sessionStorage.setItem('Token', user.accessToken)
        setAuthToken(user.accessToken);
        setLoginStatus(`Welcome, ${user.firstName || 'User'}!`);
        fetch(`${BASE_URL}/api/chefs/find-by-uid`, {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ${user.accessToken}`,
              'Content-Type': 'application/json',  
            },
          })
          .then((response) => {
            console.log('Response status:', response.status);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            console.log(data);
          })
          .catch((error) => {
            console.error('Error fetching chef data:', error);
          });
        navigate('/');
      })
      .catch((error) => {
        console.error('Login failed:', error.message);
        setLoginStatus('Invalid email or password. Please try again.');
      });
  };


  const handlePasswordReset = () => {
    if (resetEmail) {
      sendPasswordResetEmail(auth, resetEmail)
        .then(() => {
          alert('Password reset email sent!');
          setResetEmail('');
        })
        .catch((error) => {
          console.error('Error sending password reset email:', error.message);
          alert('Failed to send password reset email. Please try again.');
        });
    } else {
      alert('Please enter your email address.');
    }
  };

  return (
    <div className="login_form p-5 m-auto ">
      <form onSubmit={handleSubmit}>

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
            <a href="#" onClick={(e) => { e.preventDefault(); setResetEmail(email); handlePasswordReset(); }}>Forgot Password?</a>
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
          Don't have an account? <Link to="/chef-register">Sign up</Link>
        </p>
      </form>
    </div>
  );
}




