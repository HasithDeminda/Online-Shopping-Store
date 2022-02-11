import React from "react";
import { Link } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  return (
    <div className="container-login">
      <div class="container">
        <div class="content">
          <div class="image-box">
            <img
              src="https://www.vcbay.news/wp-content/uploads/2021/11/happy-people-shopping-online_74855-5865.jpg"
              alt=""
            />
          </div>

          <form class="addCountryForm">
            <div class="topic">LOGIN HERE</div>
            <div class="input-box">
              <input type="text" required />
              <label>Username</label>
            </div>
            <div class="input-box">
              <input type="password" required />
              <label>Password</label>
            </div>

            <div class="input-box">
              <input type="submit" value="Login" />
            </div>
            <span style={{ cursor: "pointer" }}>
              DO NOT REMEMBER THE PASSWORD ?
            </span>
            <br />
            <br />
            <Link to="/register">
              <span style={{ cursor: "pointer" }}>CREATE A NEW ACCOUNT </span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
