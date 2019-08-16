import React, { useState } from "react";

const Register = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>
      <form>
        <div className="form-group">
          <label htmlFor="Name">
            <input type="text" name="name" value={name} onChange={onchange} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Email">
            <input
              type="email"
              name="Email"
              value={email}
              onChange={onchange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Password">
            <input
              type="password"
              name="Password"
              value={password}
              onChange={onchange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Password2">
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onchange}
            />
          </label>
        </div>
        <input
          type="submit"
          value="Register"
          className="btn btn-primary btn-block"
        />
      </form>
    </div>
  );
};

export default Register;
