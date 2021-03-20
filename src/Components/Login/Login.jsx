import React, { useState } from "react";
import "./Login.scss";
import Logo from "../../Assets/Images/Miriway-small.svg";
import SigninImage from "../../Assets/Images/Sign-In.png";
import { Link } from "react-router-dom";
import firebase from "firebase";
import { auth } from "../../Firebase-services/firebase-main";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const authLogin = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => console.log(err));
  };

  return (
    <div className="login">
      <img src={Logo} alt="" />
      <h2>Sign in To Miriway</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          authLogin();
        }}
      >
        <input
          type="email"
          onChange={emailChange}
          name="email"
          value={email}
          placeholder="Your E-mail"
        />
        <input
          onChange={passwordChange}
          type="password"
          name="password"
          value={password}
          placeholder="Password"
        />
        <button
          disabled={email === "" || password === ""}
          type="submit"
          className="primary__btn"
        >
          Sign In
        </button>
      </form>
      <h5>
        Don't have an account?{" "}
        <span>
          <Link to="/sign-up">Sign-up</Link>
        </span>
      </h5>
      <img src={SigninImage} alt="" />
    </div>
  );
};

export default Login;
