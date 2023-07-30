import React from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div className="d-flex justify-content-center h-100 w-100 login-page">
      <div className="container-form">
        <h2 className="login-title">Log in</h2>

        <form className="login-form">
          <div>
            <label for="email">Email </label>
            <input
              id="email"
              type="email"
              placeholder="admin@gmail.com"
              name="email"
              required
            />
          </div>

          <div>
            <label for="password">Password </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              name="password"
              required
            />
          </div>

          <button
            className="btn btn--form"
            type="submit"
            value="Log in"
            onClick={handleClick}
          >
            Log in
          </button>
          <p className="text-center text-decoration-none">Don't Have an Account? <Link to="/register" className="text-decoration-none"> <span className="color-light-orange">Sethapayale Register Panu da</span></Link> </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
