import React from "react";
import "./Login.css";
import { FcGoogle } from "react-icons/fc";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { BsFillEyeFill } from "react-icons/bs";
const Login = () => {
  return (
    <div className="login-container">
      <div className="container">
        <div className="top"></div>
        <div className="bottom">
          <div className="content">
            <h1 className="content-h1">Welcome to Bardeen</h1>
            <h1 className="content-h2">
              Let’s log in to launch your automations.
            </h1>
          </div>
          <form action="" className="form-container">
            <input
              type="text"
              placeholder="Email Address"
              className="input input-email"
            />
            <div className="input input-p">
              <input
                type="text"
                placeholder="Password"
                className="input-password"
              />
              <BsArrowRightShort className="show-icon" />
            </div>
          </form>
          <div className="bottom-links">
            <a href="">Create Account</a>
            <a href="">Forgot Password?</a>
          </div>
          <button className="signin-btn"> Sign in</button>
          <div className="login-btn-container">
            <a className="signup-btn">
              <h1 className="signup-btn-text">
                <FcGoogle className="g-icon" />
                Sign in with Google
              </h1>
              <BsArrowRightShort className="r-icon" />
            </a>
            <a className="signup-btn">
              <h1 className="signup-btn-text">
                <AiFillGithub className="g-icon" />
                Sign in with Github
              </h1>
              <BsArrowRightShort className="r-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
