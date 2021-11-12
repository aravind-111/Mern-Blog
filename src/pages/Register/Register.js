import React, { useState } from "react";
import "./register.css";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // hadle submit
  const onSubmit = async (event) => {
    event.preventDefault();
    console.log("name : ", name);
    console.log("Email : ", email);
    console.log("password : ", password);
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={onSubmit}>
        <label>User Name : </label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter User Name"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <label>Email : </label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password : </label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="registerButton">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
