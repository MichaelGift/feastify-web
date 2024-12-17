import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import {
  signInWithEmailAndPassword,
  getAuth,
  sendPasswordResetEmail,
} from 'firebase/auth';
import { auth } from '../../firebase';
import { BASE_URL } from '../../App';

export default function ChefLogin({ setAuthToken }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');
  const [resetEmail, setResetEmail] = useState('');

  const [modal, setModal] = useState({
    show: false,
    title: '',
    message: '',
  });

  const handleShowModal = (title, message) => {
    setModal({ show: true, title, message });
  };

  const handleCloseModal = () => {
    setModal({ ...modal, show: false });
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
            sessionStorage.setItem('role', data.role || 'chef');
            setAuthToken(user.accessToken);
            setLoginStatus(`Welcome, ${user.firstName || 'User'}!`);
            navigate('/');
          })
          .catch((error) => {
            console.error('Error fetching chef data:', error);
          });
      })
      .catch((error) => {
        console.error('Login failed:', error.message);
        handleShowModal('Login Failed', 'Invalid email or password. Please try again.');
      });
  };

  const handlePasswordReset = () => {
    if (resetEmail) {
      sendPasswordResetEmail(auth, resetEmail)
        .then(() => {
          handleShowModal('Password Reset Email Sent', 'Please check your inbox for the reset email.');
          setResetEmail('');
        })
        .catch((error) => {
          console.error('Error sending password reset email:', error.message);
          handleShowModal('Password Reset Failed', 'Failed to send password reset email. Please try again.');
        });
    } else {
      handleShowModal('Missing Email Address', 'Please enter your email address.');
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="">
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            className=""
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="">
          <div className="">
            <label className="" htmlFor="password">
              Password
            </label>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setResetEmail(email);
                handlePasswordReset();
              }}
            >
              Forgot Password?
            </a>
          </div>
          <input
            className=""
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          className=""
          type="submit"
        >
          Log In
        </button>

        {loginStatus && <p className="status_message">{loginStatus}</p>}
        <p className=''>
          Don't have an account? <Link to="/chef-register">Sign up</Link>
        </p>
      </form>

      <Modal show={modal.show} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{modal.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modal.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
