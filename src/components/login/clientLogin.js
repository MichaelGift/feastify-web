import React from 'react';
import './auth.css';
import google from "../../assets/logo/google.png"
import facebook from "../../assets/logo/facebook.png"
import microsoft from "../../assets/logo/microsoft.png"
import apple from "../../assets/logo/apple.png"


export default function ClientLogin() {
  return (
    <div className="login_form">
      <form action="#">
        <h3>Log in with</h3>

        <div className="login_option">
          <div className="option">
            <a href="#">
              <img src={google} />
              <span>Google</span>
            </a>
          </div>
          <div className="option">
            <a href="#">
              <img src={facebook} />
              <span>Facebook</span>
            </a>
          </div>
          <div className="option">
            <a href="#">
              <img src={apple} />
              <span>Apple</span>
            </a>
          </div>
          <div className="option">
            <a href="#">
              <img src={microsoft} />
              <span>Microsoft</span>
            </a>
          </div>
        </div>

        <p className="separator">
          <span>or</span>
        </p>

        <div className="input_box">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter email address"
            required
          />
        </div>

        <div className="input_box">
          <div className="password_title">
            <label htmlFor="password">Password</label>
            <a href="#">Forgot Password?</a>
          </div>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button type="submit">Log In</button>

        <p className="sign_up">
          Don't have an account? <a href="#">Sign up</a>
        </p>
      </form>
    </div>
  );
}
