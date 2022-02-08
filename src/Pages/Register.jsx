import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="container-register">
      <div className="wrapper">
        <h1 className="title">CREATE AN ACCOUNT</h1>
        <form>
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Username" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />

          <div className="agreement">
            By creating this account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </div>

          <button>REGISTER</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
