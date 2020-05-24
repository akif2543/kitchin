import React from "react";
import { Link } from "react-router-dom";

const UserDropdown = ({ user, handleSignOut }) => (
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
          <img src={user.profile.profilePhoto} id="nav-profile-photo" alt="" />
          {user.name}
        </a>
        <div
          className="dropdown-menu dropdown-menu-right animate slideIn"
          aria-labelledby="navbarDropdown"
        >
          {/* <a href="#" className="dropdown-item" onClick={editAccount} data-toggle="modal" data-target="#editAccount">
                    Edit Account
                  </a>
                  <div className="dropdown-divider"></div> */}
          <Link onClick={handleSignOut} className="dropdown-item" to="/" exact>
            Sign Out
          </Link>
        </div>
      </li>
    </ul>
  </div>
);

export default UserDropdown;
