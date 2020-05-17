import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";
import UserAPI from "./api/UserAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

const NavBar = (prop) => {
  let email, password, editFirstName, editLastName, editEmail, editPassword;

  const [state, setState] = useState({
    emailError: false,
    passwordError: false,
    errors: [],
    accountUpdated: false,
  });

  const [globalState, setGlobalState] = useContext(AppContext);

  const signIn = () => {
    setState({ ...state, emailError: false, passwordError: false });
    const userData = {
      email: email.value,
      password: password.value,
    };

    UserAPI.login(userData).then((json) => {
      if (json.token) {
        setState({ ...state, error: false });
        setGlobalState({ ...globalState, signedIn: true });
        sessionStorage.setItem("jwt", json.token);
        sessionStorage.setItem("userid", json.id);
        sessionStorage.setItem("username", json.userName);
        UserAPI.getProfile(json.id)
          .then((json) => {
            globalState.user.profile = json;
            globalState.profileLoaded = true;
            sessionStorage.setItem("profilePhoto", json.profilePhoto);
            window.location.href = "/home";
          })
          .catch((e) => console.log("error", e));
      } else if (json.email) {
        setState({ ...state, emailError: true, passwordError: false });
      } else if (json.password) {
        setState({ ...state, passwordError: true, emailError: false });
      }
    });
  };

  const signOut = () => {
    sessionStorage.clear();
    window.location.href = "/";
  };

  const resetPosts = () => {
    setGlobalState({ ...globalState, postsLoaded: false });
  };

  const editAccount = () => {
    setState({ ...state, accountUpdated: false });
    UserAPI.getInfo(globalState.user.id)
      .then((json) => {
        editFirstName.defaultValue = json.firstName;
        editLastName.defaultValue = json.lastName;
        editEmail.defaultValue = json.email;
      })
      .catch((e) => console.log("error", e));
  };

  const updateAccount = () => {
    const userData = {
      firstName: editFirstName.value,
      lastName: editLastName.value,
      email: editEmail.value,
      password: editPassword.value,
    };
    UserAPI.updateInfo(globalState.user.id, userData)
      .then((json) => {
        globalState.user.name = json.userName;
        setState({ ...state, accountUpdated: true });
        sessionStorage.setItem("username", globalState.user.name);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/" onClick={resetPosts}>
        Kitchin
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          {prop.links.map((link, i) => (
            <li className="nav-item">
              <Link
                key={i}
                className="nav-link active"
                to={link.path}
                onClick={resetPosts}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {!globalState.signedIn && (
          <div className="form-inline my-2 my-lg-0">
            {state.emailError && (
              <div className="alert alert-danger signin-alert" role="alert">
                Please enter a valid email.
              </div>
            )}
            {state.passwordError && (
              <div className="alert alert-danger signin-alert" role="alert">
                Email and password do not match.
              </div>
            )}
            <div className="form-group">
              <input
                ref={(elem) => (email = elem)}
                type="email"
                className="form-control"
                id="signInEmail"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                ref={(elem) => (password = elem)}
                type="password"
                className="form-control"
                id="signInPassword"
                placeholder="Password"
              />
            </div>
            <button
              className="btn btn-danger my-2 my-sm-0"
              type="submit"
              onClick={signIn}
            >
              Sign In
            </button>
          </div>
        )}
        {globalState.signedIn && (
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img
                    src={sessionStorage.getItem("profilePhoto")}
                    id="nav-profile-photo"
                  />
                  {sessionStorage.getItem("username")}
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right animate slideIn"
                  aria-labelledby="navbarDropdown"
                >
                  {/* <a href="#" className="dropdown-item" onClick={editAccount} data-toggle="modal" data-target="#editAccount">
                    Edit Account
                  </a>
                  <div className="dropdown-divider"></div> */}
                  <Link
                    onClick={signOut}
                    className="dropdown-item"
                    to="/"
                    exact
                  >
                    Sign Out
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
      <div
        class="modal fade"
        id="editAccount"
        tabindex="-1"
        role="dialog"
        aria-labelledby="editAccountLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Edit Your Account Information
              </h5>
              <button
                type="button"
                class="close"
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
                  ref={(elem) => (editFirstName = elem)}
                  type="text"
                  className="form-control"
                  id="firstName"
                />
              </div>
              <div className="registration-form-item form-group">
                <label className="first-label">Last name</label>
                <input
                  ref={(elem) => (editLastName = elem)}
                  type="lastName"
                  className="form-control"
                  id="lastName"
                />
              </div>
              <div className="registration-form-item form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  ref={(elem) => (editEmail = elem)}
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="registration-form-item form-group">
                <label for="exampleInputPassword1">
                  Password
                  <a
                    href="#"
                    class="tooltip-test"
                    title="Password must be between 8 and 16 characters."
                  >
                    <FontAwesomeIcon
                      icon={faQuestionCircle}
                      id="password-popover"
                    />
                  </a>
                </label>
                <input
                  ref={(elem) => (editPassword = elem)}
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                />
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
            {state.accountUpdated && (
              <div className="alert alert-success" role="alert">
                Your account has been updated!
              </div>
            )}
            <div class="modal-footer">
              {!state.accountUpdated && (
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              )}
              {!state.accountUpdated && (
                <button
                  onClick={updateAccount}
                  type="button"
                  class="btn btn-primary"
                >
                  Update
                </button>
              )}
              {state.accountUpdated && (
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
