import React, { useState, useEffect } from "react";
import AppContext from "./AppContext";

const Comment = ({ _id, user, profile, date, body, likes }) => {
  const [state, setState] = useState({
    loaded: false,
    userName: null,
    profilePhoto: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:3001/user/${user}`);
      const name = await res.json();

      const profileRes = await fetch(
        `http://localhost:3001/user/${profile}/profile`
      );
      const photo = await profileRes.json().profilePhoto;

      setState({
        ...state,
        userName: name,
        profilePhoto: photo,
      });
    };

    if (!state.loaded) {
      fetchData();
    }
    return () => {
      setState({ ...state, loaded: true });
    };
  }, [state.loaded]);

  return (
    <div className="card card-body comment">
      <img src={state.profilePhoto} className="profile-photo" />
      <h6 className="card-title post-username">{state.userName}</h6>
      <span className="card-text post-date">{date}</span>
      <p className="card-text post-body">{body}</p>
    </div>
  );
};

export default Comment;
