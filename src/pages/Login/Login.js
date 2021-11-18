import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { Context } from "../../context/Context";
import "./login.css";

function Login() {
  // const [email, setEmail] = useState("");
  // const [passowrd, setPassword] = useState("");

  // instead of using "useState" for email and password we r using "useRef".
  let userRef = useRef();
  let passwordRef = useRef();

  const { dispatch, isFetching } = useContext(Context);
  // on Submit
  const onSubmit = async (event) => {
    event.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      // console.log(userRef.current.value, passwordRef.current.value);
      const res = await axios.post(
        "https://mern-blog-server-aravind.herokuapp.com/login",
        {
          userName: userRef.current.value,
          password: passwordRef.current.value,
        }
      );
      console.log(res);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      userRef = "";
      passwordRef = "";
    } catch {
      // console.log("hello");
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  console.log(isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={onSubmit}>
        <label>Email : </label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Email ID"
          ref={userRef}
        />
        <label>Password : </label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter Password"
          ref={passwordRef}
        />
        <button type="submit" className="loginButton">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
