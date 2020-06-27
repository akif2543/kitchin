import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCurrentUser } from "../../reducers/selectors/selectors";
import { logout } from "../../actions/session_actions";

const UserDropdown = ({ history }) => {
  const currentUser = useSelector((store) => getCurrentUser(store));
  const dispatch = useDispatch();
  const handleSignOut = (e) => dispatch(logout());

  return (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item dropdown">
          <button
            className="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <img src={currentUser.avatar} id="nav-profile-photo" alt="" />
            {currentUser.name}
          </button>
          <div
            className="dropdown-menu dropdown-menu-right animate slideIn"
            aria-labelledby="navbarDropdown"
          >
            {/* <a href="#" className="dropdown-item" onClick={editAccount} data-toggle="modal" data-target="#editAccount">
                    Edit Account
                  </a>
                  <div className="dropdown-divider"></div> */}
            <button onClick={handleSignOut} className="dropdown-item">
              Sign Out
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default UserDropdown;
