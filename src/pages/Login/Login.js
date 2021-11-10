import React from "react";
import "./login.css";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email : </label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Email ID"
        />
        <label>Password : </label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Password"
        />
        <button className="loginButton">Login</button>
      </form>
    </div>
  );
}

export default Login;
