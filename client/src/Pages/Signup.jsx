import React from 'react';
import '../styles/signup.css';

function Signup() {
  return (
    <div className="container">
      <h2>Signup</h2>
      <form className="form">
        <div className="formGroup">
          <input className="input" type="text" id="name" name="name" required placeholder=" " />
          <label className="label" htmlFor="name">Name</label>
        </div>
        <div className="formGroup">
          <input className="input" type="email" id="email" name="email" required placeholder=" " />
          <label className="label" htmlFor="email">Email</label>
        </div>
        <div className="formGroup">
          <input className="input" type="password" id="password" name="password" required placeholder=" " />
          <label className="label" htmlFor="password">Password</label>
        </div>
        <button className="button" type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
