import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { register } from "../../actions/session_actions";

const RegistrationForm = ({ history }) => {
  const dispatch = useDispatch();
  const serverErrors = useSelector((store) => store.errors.session);

  const initialUser = {
    email: "",
    handle: "",
    password: "",
    "first name": "",
    "last name": "",
  };

  const [user, setUser] = useState(initialUser);
  const [localErrors, setLocalErrors] = useState([]);

  const { email, handle, password } = user;
  const firstName = user["first name"];
  const lastName = user["last name"];

  const handleReset = () => {
    setUser(initialUser);
    setLocalErrors([]);
  };

  const handleChange = (type) => (e) =>
    setUser({ ...user, [type]: e.target.value });

  const validateEmail = (email) =>
    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);

  const formIsValid = () => {
    const keys = Object.keys(user);
    const err = [];

    keys.forEach((key) => {
      if (!user[key].trim().length) err.push(`${key} is required`);
      if (
        key === password &&
        (user[key].trim().length < 8 || user[key].trim().length > 16)
      )
        err.push("password must be between 8 and 16 characters");
    });
    if (!validateEmail(user.email)) err.push("Please enter a valid email");

    setLocalErrors(err);
    return !Boolean(err.length);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formIsValid()) dispatch(register(user));
  };

  const emailError =
    localErrors.find((e) => e.match(/email/)) || serverErrors.email;
  const passwordError =
    localErrors.find((e) => e.match(/password/)) || serverErrors.password;
  const handleError =
    localErrors.find((e) => e.match(/handle/)) || serverErrors.handle;
  const firstNameError =
    localErrors.find((e) => e.match(/first/)) || serverErrors.firstName;
  const lastNameError =
    localErrors.find((e) => e.match(/last/)) || serverErrors.lastName;

  return (
    <div className="registration">
      <button
        className="btn btn-danger btn-lg"
        data-toggle="modal"
        data-target="#sign-up"
      >
        Sign Up
      </button>
      <div
        className="modal fade"
        id="sign-up"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Enter the Kitchin Today
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={handleReset}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="registration-flex container">
                <div className="registration-form-item form-group">
                  <label className="first-label">First name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    placeholder="First name"
                    value={firstName}
                    onChange={handleChange("first name")}
                  />
                  {firstNameError && (
                    <span className="err-msg">{firstNameError}</span>
                  )}
                </div>
                <div className="registration-form-item form-group">
                  <label className="first-label">Last name</label>
                  <input
                    type="lastName"
                    className="form-control"
                    id="lastName"
                    placeholder="Last name"
                    value={lastName}
                    onChange={handleChange("last name")}
                  />
                  {lastNameError && (
                    <span className="err-msg">{lastNameError}</span>
                  )}
                </div>
                <div className="registration-form-item form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange("email")}
                  />
                  {emailError && <span className="err-msg">{emailError}</span>}
                </div>
                <div className="registration-form-item form-group">
                  <label htmlFor="basic-addon1">Handle</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        @
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Handle"
                      aria-label="Handle"
                      aria-describedby="basic-addon1"
                      value={handle}
                      onChange={handleChange("handle")}
                    />
                  </div>
                  {handleError && (
                    <span className="err-msg">{handleError}</span>
                  )}
                </div>
                <div className="registration-form-item form-group">
                  <label htmlFor="exampleInputPassword1">
                    Password
                    <a
                      href="#"
                      className="tooltip-test"
                      title="Password must be between 8 and 16 characters."
                    >
                      <FontAwesomeIcon
                        icon="question-circle"
                        id="password-popover"
                      />
                    </a>
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={handleChange("password")}
                  />
                  {passwordError && (
                    <span className="err-msg">{passwordError}</span>
                  )}
                </div>
                <div className="registration-form-item form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    I agree to the terms and conditions.
                  </label>
                </div>
              </div>
              {/*               
              {state.registrationSuccess && (
                <div className="alert alert-success" role="alert">
                  You have been successfully registered!
                </div>
              )} */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={handleReset}
                >
                  Close
                </button>
                <button type="submit" className="btn btn-danger">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
