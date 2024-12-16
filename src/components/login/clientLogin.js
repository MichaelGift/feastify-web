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
import { BASE_URL } from '../../App';

export default function ClientLogin({ setAuthToken }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [modal, setModal] = useState({ show: false, title: '', message: '' });

  const handleShowModal = (title, message) => {
    setModal({ show: true, title, message });
  };

  const handleCloseModal = () => {
    setModal({ show: false, title: '', message: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(getAuth(), email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        if (!user.emailVerified) {
          handleShowModal('Email Verification Required', 'Please verify your email to log in.');
          return;
        }

        fetch(`${BASE_URL}/chefs/find-by-uid`, {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${user.accessToken}`,
            'Content-Type': 'application/json',
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            sessionStorage.setItem('Token', user.accessToken);
            sessionStorage.setItem('role', data.role || 'client');
            setAuthToken(user.accessToken);
            navigate('/');
          })
          .catch((error) => {
            console.error('Error fetching chef data:', error);
            handleShowModal('Error', 'Unable to fetch user data.');
          });
      })
      .catch((error) => {
        console.error('Login failed:', error.message);
        handleShowModal('Login Failed', 'Invalid email or password. Please try again.');
      });
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      sessionStorage.setItem('Token', user.accessToken);
      setAuthToken(user.accessToken);
      handleShowModal('Login Successful', `Welcome, ${user.displayName}!`);
      navigate('/');
    } catch (error) {
      console.error('Error during Google login:', error.message);
      handleShowModal('Login Failed', 'Google login failed. Please try again.');
    }
  };

  const handlePasswordReset = () => {
    if (resetEmail) {
      sendPasswordResetEmail(auth, resetEmail)
        .then(() => {
          handleShowModal('Success', 'Password reset email sent!');
          setResetEmail('');
        })
        .catch((error) => {
          console.error('Error sending password reset email:', error.message);
          handleShowModal('Error', 'Failed to send password reset email. Please try again.');
        });
    } else {
      handleShowModal('Error', 'Please enter your email address.');
    }
  };

  return (
    <div className="login_form p-5 m-auto">
      <form onSubmit={handleSubmit}>
        <h3>Log / Signup in with</h3>

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
            className='h-100 d-inline-block rounded border-1 p-1 mb-4'
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
            <label className='d-block fw-normal mb-2' htmlFor="password">Password</label>
            <a href="#" onClick={(e) => { e.preventDefault(); setResetEmail(email); handlePasswordReset(); }}>Forgot Password?</a>
          </div>
          <input
            className='h-100 d-inline-block rounded border-1 p-1 mb-4'
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button className='w-75 h-100 d-inline-block mb-4 rounded border-0' type="submit">Log In</button>
      </form>

      {modal.show && (
        <div className="modal-backdrop">
          <div className="modal">
            <h4>{modal.title}</h4>
            <p>{modal.message}</p>
            <button onClick={handleCloseModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
