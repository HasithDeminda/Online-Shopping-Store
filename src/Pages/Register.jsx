import React from "react";
import "./Register.scss";

const Register = () => {
  return (
    <div className="container-register">
      <div class="container">
        <div class="content">
          <div class="image-box">
            <img
              src="https://thumbs.dreamstime.com/b/m-commerce-illustration-people-shopping-m-commerce-concept-people-shopping-smartphone-online-mobile-shopping-scene-132620399.jpg"
              alt=""
            />
          </div>

          <form class="addCountryForm">
            <div class="topic">REGISTER</div>
            <div class="input-box">
              <input type="text" required />
              <label>First Name</label>
            </div>
            <div class="input-box">
              <input type="text" required />
              <label>Last Name</label>
            </div>
            <div class="input-box">
              <input type="text" required />
              <label>Username</label>
            </div>
            <div class="input-box">
              <input type="email" required />
              <label>Email</label>
            </div>
            <div class="input-box">
              <input type="password" required />
              <label>Password</label>
            </div>
            <div class="input-box">
              <input type="password" required />
              <label>Confirm Password</label>
            </div>

            <div className="agreement">
              By creating this account, I consent to the processing of my
              personal data in accordance with the <b>PRIVACY POLICY</b>
            </div>
            <div class="input-box">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
