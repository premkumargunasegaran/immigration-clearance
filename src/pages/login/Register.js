import React from "react";

function Register() {
  return (
    <div className="d-flex justify-content-center h-100 w-100 login-page">
      <div className="container-form-register">
        <h2 className="login-title">Create</h2>

        <form className="login-form">
            <div className="row">
                <div className="col-md-6">
                <div>
            <label for="email">Name </label>
            <input
              id=""
              type="text"
              placeholder="admin"
              name=""
              required
            />
          </div>
                </div>
                <div className="col-md-6">
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
                </div>
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
          <div>
            <label for="password">Confirm Password </label>
            <input
              id="password"
              type="password"
              placeholder="password"
              name="password"
              required
            />
          </div>

          <button className="btn btn--form" type="submit" value="Log in">
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
