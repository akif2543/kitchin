import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getCurrentUser,
  // getFeedErrors,
} from "../../reducers/selectors/selectors";
import { createPost } from "../../actions/feed_actions";

const NewPost = ({}) => {
  let modal;
  const [post, setPost] = useState({ body: "", image: "" });
  const [localError, setLocalError] = useState(false);

  const handleChange = (type) => (e) =>
    setPost({ ...post, [type]: e.target.value });

  const dispatch = useDispatch();
  const user = useSelector((store) => getCurrentUser(store));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (post.body.trim().length) {
      dispatch(createPost(post)).then((action) => {
        if ((action.type = "RECEIVE_POST")) {
          document.getElementsByClassName("close-compose")[0].click();
        }
      });
    } else {
      setLocalError(true);
    }
  };

  const handleReset = () => {
    setPost({ body: "", image: "" });
    setLocalError(false);
  };

  return (
    <div
      className="modal fade new-post"
      id="compose-post"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document" ref={(el) => (modal = el)}>
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Make a New Post
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <img src={user.avatar} className="pp" alt="" />
              <textarea
                className={localError ? "presence-err" : ""}
                value={post.body}
                onChange={handleChange("body")}
              ></textarea>
              <label>Image URL:</label>
              <input
                type="text"
                placeholder="(Optional)"
                value={post.image}
                onChange={handleChange("image")}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary close-compose"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="submit" className="btn btn-danger">
                Post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
