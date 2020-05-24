import React from "react";

const SignInForm = ({ email, password, handleSubmit, handleChange, error }) => (
  <div className="sign-in">
    {error.presence && (
      <div className="alert alert-danger signin-alert" role="alert">
        Please enter an email and password.
      </div>
    )}
    {error.match && (
      <div className="alert alert-danger signin-alert" role="alert">
        Email and password do not match.
      </div>
    )}
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => handleChange(e, "email")}
        type="email"
        className="form-control"
        id="signInEmail"
        aria-describedby="emailHelp"
        placeholder="Email"
        value={email}
      />
      <input
        onChange={(e) => handleChange(e, "password")}
        type="password"
        className="form-control"
        id="signInPassword"
        placeholder="Password"
        value={password}
      />
      <button className="btn btn-danger my-2 my-sm-0 sign-in-btn" type="submit">
        Sign In
      </button>
    </form>
  </div>
);

export default SignInForm;
