import React, { useState, useContext } from "react";
import AppContext from "./AppContext";

const Comment = (commentPhoto, commentName, commentDate, commentBody) => {
    return (
<div className="card card-body comment">
            <img src={commentPhoto} className="profile-photo" />
            <h6 className="card-title post-username">{commentName} is this thing on?</h6>
            <span className="card-text post-date">{commentDate}</span>
            <p className="card-text post-body">{commentBody}</p>
          </div>
    )
};

export default Comment;