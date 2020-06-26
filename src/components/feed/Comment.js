import React, { useState, useEffect } from "react";
import UserAPI from "./api/UserAPI";

const Comment = ({ user, date, body, likes, show }) => {
  const [state, setState] = useState({
    loaded: false,
    userName: null,
    profilePhoto: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const name = await UserAPI.getInfo(user, "userName");
      const photo = await UserAPI.getProfile(user, "profilePhoto");

      setState({
        ...state,
        loaded: true,
        userName: name,
        profilePhoto: photo,
      });
    };

    if (!state.loaded && show) {
      fetchData();
    }
    return () => {
      setState({ ...state, loaded: true });
    };
  }, [state.loaded, show]);

  return (
    <div className="card card-body comment">
      <img src={state.profilePhoto} className="profile-photo" alt="" />
      <h6 className="card-title post-username">{state.userName}</h6>
      <span className="card-text post-date">{date}</span>
      <p className="card-text post-body">{body}</p>
    </div>
  );
};

export default Comment;
