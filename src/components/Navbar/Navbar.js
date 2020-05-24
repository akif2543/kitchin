import React from "react";
import { Link } from "react-router-dom";

import SignInForm from "./SignInForm";
import UserDropdown from "./UserDropdown";
import "./navbar.css";

const Navbar = ({
  links,
  email,
  password,
  error,
  handleChange,
  handleSignOut,
  handleSignIn,
  user,
  resetPosts,
}) => (
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
        {links.map((link, i) => (
          <li className="nav-item" key={i}>
            <Link
              className="nav-link active"
              to={link.path}
              onClick={resetPosts}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      {user.name ? (
        <UserDropdown user={user} handleSignOut={handleSignOut} />
      ) : (
        <SignInForm
          email={email}
          password={password}
          handleSubmit={handleSignIn}
          handleChange={handleChange}
          error={error}
        />
      )}
    </div>
  </nav>
);

export default Navbar;
