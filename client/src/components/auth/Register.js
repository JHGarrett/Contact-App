import React, { useState, useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Register = () => {
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match", "danger");
    } else {
      console.log("Register Submit");
    }
  };

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });
  return (
    <div className="form-container">
      <h1>
        Account <span className="text-primary">Register</span>
      </h1>

      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="Name">
            Name
            <input type="text" name="name" value={name} onChange={onChange} />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Email">
            Email
            <input
              type="email"
              name="email"
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
              name="password"
              value={password}
              onChange={onChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="Password2">
            Confirm Password
            <input
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
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
