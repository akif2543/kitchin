import React from "react";
import { useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import SessionForm from "./session_form";
import UserDropdown from "./user_dropdown";
import { isLoggedIn } from "../../reducers/selectors/selectors";

const Navbar = ({ history }) => {
  const loggedIn = useSelector((store) => isLoggedIn(store));

  return (
    <nav className="navbar">
      <Link className="navbar-logo" to="/">
        <button>Kitchin</button>
      </Link>

      {loggedIn ? (
        <UserDropdown history={history} />
      ) : (
        <SessionForm history={history} />
      )}
    </nav>
  );
};

export default withRouter(Navbar);
