import React from "react";
import "./register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm">
        <label>User Name : </label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter User Name"
        />
        <label>Email : </label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Email"
        />
        <label>Password : </label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Password"
        />
        <button className="registerButton">Register</button>
      </form>
    </div>
  );
}

export default Register;
