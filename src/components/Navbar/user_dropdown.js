import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCurrentUser } from "../../reducers/selectors/selectors";
import { logout } from "../../actions/session_actions";

const UserDropdown = () => {
  const currentUser = useSelector((store) => getCurrentUser(store));
  const dispatch = useDispatch();
  const handleClick = () => dispatch(logout());

  return (
    <div className="btn-group">
      <button type="button" className="btn nav-user">
        <img src={currentUser.avatar} id="navatar" alt="" />
        <h3>{currentUser.name}</h3>
      </button>
      <button
        type="button"
        className="btn dropdown-toggle dropdown-toggle-split"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <span className="sr-only">Toggle Dropdown</span>
      </button>
      <div className="dropdown-menu">
        <button className="dropdown-item" type="button">
          Edit Account
        </button>
        <button className="dropdown-item" type="button">
          Edit Profile
        </button>
        <div className="dropdown-divider"></div>
        <button className="dropdown-item" type="button" onClick={handleClick}>
          Log Out
        </button>
      </div>
    </div>
  );
};

export default UserDropdown;
