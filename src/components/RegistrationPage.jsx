// Registration.js

import React from "react";
import "./Registration.css";

const Registration = () => {
  return (
    <div className="registration-container">
      <h1>Registration</h1>
      <form className="registration-form">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />

        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Registration;
