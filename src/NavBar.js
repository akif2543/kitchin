import React, { useState, useContext } from "react";
import AppContext from './AppContext';

const NavBar = prop => {
    let email, password;
    
    const [state, setState] = useState(
        {error: false}
    );

    const [globalState, setGlobalState] = useContext(AppContext);

    const signIn = () => {
        fetch('http://localhost:3001/user/login', {
                method: 'POST',
                body: JSON.stringify({
                    email: email.value,
                    password: password.value,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then((response)=>response.json())
            .then(json=>{
                if (json.token) {
                    setState({...state, error: false});
                    setGlobalState({...globalState, signedIn: true});
                    sessionStorage.setItem('jwt', json.token);
                } else {
                    setState({...state, error: true});
                }
            })
    };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="#">
        Kitchin
      </a>
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
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
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
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link disabled"
              href="#"
              tabindex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </li>
        </ul>
        { state.error &&
        <div 
        className="alert alert-danger"
        role="alert">
        Error
        </div>
        }
        { !globalState.signedIn &&
        <div className="form-inline my-2 my-lg-0">
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
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={signIn}
          >
            Sign In
          </button>
        </div>
        }
        { globalState.signedIn &&
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src={prop.logo} id="nav-profile-photo" />UserName
          </a>
           {/*  Here's the magic. Add the .animate and .slide-in classes to your .dropdown-menu and you're all set! */}
            <div class="dropdown-menu dropdown-menu-right animate slideIn" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Profile</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Sign Out</a>
            </div>
          </li>
        </ul>
      </div>
        }
      </div>
    </nav>
  );
};

export default NavBar;

{/* <div className="form-inline my-2 my-lg-0">
            <ul className="navbar-nav mr-auto">
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
                    UserName
                    </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">
                            Profile
                            </a>
                            <a className="dropdown-item" href="#">
                            Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                            Sign Out
                            </a>
                        </div>
                </li>
            </ul>
        </div> */}