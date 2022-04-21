import React, { useState, useSelector } from "react";
// import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { login } from "../redux/apiCalls";
import "./Login.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  // const { isFetching, error } = useSelector((state) => state.user);

  const handleLogin = (e) => {
    e.preventDefault();
    // login(dispatch, { username, password });
  };

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
            <div class="topic">ADMIN LOGIN</div>
            <div class="input-box">
              <input
                type="text"
                required
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Username</label>
            </div>
            <div class="input-box">
              <input
                type="password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <label>Password</label>
            </div>

            <div class="input-box">
              <input
                type="submit"
                value="Login"
                onClick={handleLogin}
                // disabled={isFetching}
              />
            </div>
            {/* {error && <div className="error">Something Went Wrong !</div>} */}

            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
