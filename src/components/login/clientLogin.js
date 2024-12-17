import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth';
import {auth, googleProvider} from '../../firebase';
import './auth.css';
import google from "../../assets/logo/google.png";
import facebook from "../../assets/logo/facebook.png";
import microsoft from "../../assets/logo/microsoft.png";
import apple from "../../assets/logo/apple.png";
import {BASE_URL} from '../../App';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFacebook, faGoogle, faApple, faMicrosoft}from '@fortawesome/free-brands-svg-icons'

export default function ClientLogin({setAuthToken}) {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [resetEmail, setResetEmail] = useState('');
    const [modal, setModal] = useState({show: false, title: '', message: ''});

    const handleShowModal = (title, message) => {
        setModal({show: true, title, message});
    };

    const handleCloseModal = () => {
        setModal({show: false, title: '', message: ''});
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
        <div className="container p-5 m-auto">
            <form onSubmit={handleSubmit} className='p-4 d-flex flex-column align-items-center'>
                <p className="fw-semibold fs-3">Login In</p>

                <div className="d-flex flex-row">
                    <button className='btn rounded d-flex align-items-center p-3' onClick={handleGoogleLogin}>
                        <FontAwesomeIcon className='fa-3x' icon={faGoogle}/>
                    </button>
                    <button className='btn rounded d-flex align-items-center p-3'>
                        <FontAwesomeIcon className='fa-3x' icon={faFacebook}/>
                    </button>
                    <button className='btn rounded d-flex align-items-center p-3'>
                        <FontAwesomeIcon className='fa-3x' icon={faApple}/>
                    </button>
                    <button className='btn rounded d-flex align-items-center p-3'>
                        <FontAwesomeIcon className='fa-3x' icon={faMicrosoft}/>
                    </button>
                </div>

                <p className="my-4 fw-medium fs-5">or</p>

                <div className="mb-3 w-100">
                    <label className='form-label' htmlFor="email">Email</label>
                    <input
                        className='form-control rounded m-0'
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter email address"
                        required
                    />
                </div>

                <div className="mb-3 w-100">
                    <div className="d-flex justify-content-between">
                        <label className='form-label' htmlFor="password">Password</label>
                        <a href="#" onClick={(e) => {
                            e.preventDefault();
                            setResetEmail(email);
                            handlePasswordReset();
                        }}
                        className='form-label'>Forgot Password?</a>
                    </div>
                    <input
                        className='form-control rounded m-0'
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        required
                    />
                </div>

                <button className='px-4 py-2 rounded-1 border-0 mb-2' type="submit">Log In</button>
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
