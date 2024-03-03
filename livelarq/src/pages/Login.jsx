
import React, { useState } from 'react';
import { Link } from "react-router-dom"
export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <section className="loginPage">
      <div className="container">
    
        <div className="row">
        <h1 className="sectionTitle">Sign In</h1>
          <div className="loginContainer">
            <div className="loginForm">
              <form onSubmit={handleSubmit}>
                <div className="emailContainer">
                  <label htmlFor="email" className='label'>Email Address:</label>
                  <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="passwordContainer">
                  <label htmlFor="password" className='label'>Password:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="signInCases">
                  <button type="submit" className='signIn'>Sign in</button>
                  <Link className='forgotPassword'>Forgot your password?</Link>
                </div>

              </form>
            </div>
            <div className="loginGuideline">
              <h4 className="guidlineTitle">New customer?</h4>
              <p className="guidlineText">
                Create an account with us and you'll be able to:
              </p>
              <ul className='guidlineList'>
                <li>Check out faster</li>
                <li>Save multiple shipping addresses</li>
                <li>Access your order history</li>
                <li>Track new orders</li>
              </ul>
             <div className="create">
             <button className='createAccount'>Create account</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
