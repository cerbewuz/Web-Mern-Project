import React from 'react';
import '../styles/login.css';
import '../styles/global.css';

function Login() {
  return (
    <div className="container">
      <h2>Login</h2>
      <form className="form">
        <div className="formGroup">
          <input className="input" type="email" id="email" name="email" required placeholder=" " />
          <label className="label" htmlFor="email">Email</label>
        </div>
        <div className="formGroup">
          <input className="input" type="password" id="password" name="password" required placeholder=" " />
          <label className="label" htmlFor="password">Password</label>
        </div>
        <button className="button" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login
