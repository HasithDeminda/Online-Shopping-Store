import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="container-login">
      <div className="wrapper">
        <h1 className="title">LOGIN HERE</h1>
        <form>
          <input placeholder="Username or Email" />

          <input placeholder="Password" />

          <button>LOGIN</button>
          <span>DO NOT REMEMBER THE PASSWORD ?</span>
          <span>CREATE A NEW ACCOUNT</span>
        </form>
      </div>
    </div>
  );
};

export default Login;
