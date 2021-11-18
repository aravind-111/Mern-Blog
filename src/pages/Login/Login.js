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
  const [login_fail, setLogin_fail] = useState(false);

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
      console.log("login seccess");
      console.log(res);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
      userRef = "";
      passwordRef = "";
      // after login switching the page to home
      res.data.details && window.location.replace("/");
    } catch {
      console.log("login failed");
      dispatch({ type: "LOGIN_FAILURE" });
      setLogin_fail(true);
    }
  };
  console.log(isFetching);
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={onSubmit}>
        <label>User ID : </label>
        <input
          className="loginInput"
          type="text"
          placeholder="Enter User ID"
          ref={userRef}
        />
        <label>Password : </label>
        <input
          className="loginInput"
          type="password"
          placeholder="Enter Password"
          ref={passwordRef}
        />
        <button type="submit" className="loginButton">
          Login
        </button>
        {login_fail && (
          <div className="login_fail">
            {" "}
            <h3>Login failed. Please Check Username or Password</h3>{" "}
          </div>
        )}
      </form>
    </div>
  );
}

export default Login;
