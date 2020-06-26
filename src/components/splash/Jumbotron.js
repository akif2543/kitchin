import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { register } from "./context/actions";

const Jumbotron = ({ header, lead, info, buttonLabel }) => {
  let firstName, lastName, email, password, termsConditions;

  const [state, setState] = useState({
    errors: [],
    registrationSuccess: false,
  });

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const validateForm = () => {
    const errors = [];

    if (firstName.value.length === 0) {
      errors.push("Please enter your first name.");
    }
    if (lastName.value.length === 0) {
      errors.push("Please enter your last name.");
    }
    if (!validateEmail(email.value)) {
      errors.push("Please enter a valid email address.");
    }
    if (password.value.length < 8 || password.value.length > 16) {
      errors.push("Please enter a password between 8 and 16 characters.");
    }
    if (!termsConditions.checked) {
      errors.push("Please accept the Terms & Conditions.");
    }

    setState({ ...state, errors: errors });
    return errors;
  };

  const registerUser = () => {
    if (validateForm().length === 0) {
      const userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        password: password.value,
      };
      dispatch(register(userData));
      // UserAPI.register(userData).then((json) => {
      //   setState({ ...state, errors: [], registrationSuccess: true });
      //   // setGlobalState({ ...globalState, openRegistration: false });
      //   UserAPI.createProfile(json._id).then((json) => {
      //     sessionStorage.setItem("profilePhoto", json.profilePhoto);
      //   });
      // });
    }
  };

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="text container">
        <h1 className="display-4">{header}</h1>
        <p className="lead">{lead}</p>
        {/* <hr className="my-4" /> */}
        <p>{info}</p>
        {!user.name && (
          <button
            className="btn btn-danger btn-lg"
            data-toggle="modal"
            data-target="#signUp"
          >
            {buttonLabel}
          </button>
        )}
      </div>
      <div
        className="modal fade"
        id="signUp"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="editProfileLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
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
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="registration-flex container">
              <div className="registration-form-item form-group">
                <label className="first-label">First name</label>
                <input
                  ref={(elem) => (firstName = elem)}
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="First name"
                />
              </div>
              <div className="registration-form-item form-group">
                <label className="first-label">Last name</label>
                <input
                  ref={(elem) => (lastName = elem)}
                  type="lastName"
                  className="form-control"
                  id="lastName"
                  placeholder="Last name"
                />
              </div>
              <div className="registration-form-item form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  ref={(elem) => (email = elem)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
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
                  ref={(elem) => (password = elem)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="registration-form-item form-group form-check">
                <input
                  ref={(elem) => (termsConditions = elem)}
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  I agree to the terms and conditions.
                </label>
              </div>
            </div>
            {state.errors.length > 0 && (
              <div className="alert alert-danger" role="alert">
                Please correct the following errors:
                <ul>
                  {state.errors.map((error) => (
                    <li>{error}</li>
                  ))}
                </ul>
              </div>
            )}
            {state.registrationSuccess && (
              <div className="alert alert-success" role="alert">
                You have been successfully registered!
              </div>
            )}
            <div className="modal-footer">
              {!state.registrationSuccess && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              )}
              {!state.registrationSuccess && (
                <button
                  onClick={registerUser}
                  type="button"
                  className="btn btn-danger"
                >
                  Register
                </button>
              )}
              {state.registrationSuccess && (
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
