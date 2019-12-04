import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "./AppContext";

const NavBar = prop => {
  let email, password;

  const [state, setState] = useState({ 
    emailError: false,
    passwordError: false,
  });

  const [globalState, setGlobalState] = useContext(AppContext);

  const signIn = () => {
    setState({...state, emailError: false, passwordError: false,});
    fetch("http://localhost:3001/user/login", {
      method: "POST",
      body: JSON.stringify({
        email: email.value,
        password: password.value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(json => {
        if (json.token) {
          setState({ ...state, error: false });
          setGlobalState({ ...globalState, signedIn: true });
          sessionStorage.setItem("jwt", json.token);
          sessionStorage.setItem("userid", json.id);
          sessionStorage.setItem("username", json.userName);
          fetch("http://localhost:3001/user/profile/view", {
            method: "POST",
            body: JSON.stringify({
              userId: sessionStorage.getItem("userid")
            }),
            headers: {
              "Content-Type": "application/json"
            }
          })
            .then(response => response.json())
            .then(json => {
              globalState.user.profile = json;
              globalState.profileLoaded = true;
              sessionStorage.setItem("profilePhoto", json.profilePhoto);
              window.location.href = "/home";
            })
            .catch(e => console.log("error", e));
        } else if (json.email) {
          setState({ ...state, emailError: true, passwordError: false });
        } else if (json.password) {
          setState({ ...state, passwordError: true, emailError: false });
      }});
  };

  const signOut = () => {
    sessionStorage.clear();
    window.location.reload();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <Link className="navbar-brand" to="/">
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
          {prop.links.map(link => (
            <li className="nav-item">
              <Link className="nav-link active" to={link.path}>
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
                ref={elem => (email = elem)}
                type="email"
                className="form-control"
                id="signInEmail"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <input
                ref={elem => (password = elem)}
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
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
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
                {/*  Here's the magic. Add the .animate and .slide-in classes to your .dropdown-menu and you're all set! */}
                <div
                  class="dropdown-menu dropdown-menu-right animate slideIn"
                  aria-labelledby="navbarDropdown"
                >
                  <a class="dropdown-item" href="#">
                    Profile
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <div class="dropdown-divider"></div>
                  <Link onClick={signOut} class="dropdown-item" to="/" exact>
                    Sign Out
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
