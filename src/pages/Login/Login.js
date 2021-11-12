import React, { useState } from "react";
import "./login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [passowrd, setPassword] = useState("");

  // on Submit
  const onSubmit = (event) => {
    event.preventDefault();
    console.log("email", email);
    console.log("password", passowrd);
  };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={onSubmit}>
        <label>Email : </label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Email ID"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password : </label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
