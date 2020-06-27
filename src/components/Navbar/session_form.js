import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../actions/session_actions";

const SessionForm = ({ history }) => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({ email: "", password: "" });
  const [presenceError, setPresenceError] = useState(false);
  const error = useSelector((store) => store.errors.session.error);
  const { email, password } = user;
  const handleChange = (type) => (e) =>
    setUser({ ...user, [type]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length && password.length) {
      setPresenceError(false);
      dispatch(login(user));
    } else {
      setPresenceError(true);
    }
  };

  return (
    <div className="sign-in">
      <ul>
        {presenceError && (
          <div className="alert alert-danger signin-alert" role="alert">
            Please enter an email and password.
          </div>
        )}
        {error && (
          <div className="alert alert-danger signin-alert" role="alert">
            Invalid email or password.
          </div>
        )}
      </ul>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange("email")}
          type="email"
          className="form-control"
          id="signInEmail"
          aria-describedby="emailHelp"
          placeholder="Email"
          value={email}
        />
        <input
          onChange={handleChange("password")}
          type="password"
          className="form-control"
          id="signInPassword"
          placeholder="Password"
          value={password}
        />
        <button
          className="btn btn-danger my-2 my-sm-0 sign-in-btn"
          type="submit"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SessionForm;
