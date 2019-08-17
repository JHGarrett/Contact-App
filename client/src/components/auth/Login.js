import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onSubmit = e => {
    e.preventDefault();
    console.log("Login Submit");
  };

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Login</span>
      </h1>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="Email">
            Email
            <input
              type="email"
              name="Email"
              value={email}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Password">
            Password
            <input
              type="password"
              name="Password"
              value={password}
              onChange={onChange}
            />
          </label>
        </div>

        <input
          type="submit"
          value="Login"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Login;
