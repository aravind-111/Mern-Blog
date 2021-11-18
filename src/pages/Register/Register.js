import React, { useState } from "react";
import axios from "axios";
import "./register.css";

function Register() {
  const [userName, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [err, setError] = useState(false);

  // hadle submit
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      // setError(false);
      const res = await axios.post(
        "https://mern-blog-server-aravind.herokuapp.com/register",
        {
          userName,
          email,
          password,
        }
      );
      // after reg. switching the page to login
      res.data.details && window.location.replace("/login");
    } catch (err) {
      // setError(true);
      console.log(err);
    }
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={onSubmit}>
        <label>User ID : </label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter User ID"
          name="userName"
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
