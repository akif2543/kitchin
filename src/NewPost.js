import React, { useState, useContext } from "react";
import AppContext from "./AppContext";
import FeedAPI from "./api/FeedAPI";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const NewPost = () => {
  let postBody, image;

  const [state, setState] = useState({
    posted: false,
  });

  const [globalState, setGlobalState] = useContext(AppContext);

  const newPost = async () => {
    const postData = {
      userName: globalState.user.name,
      profilePhoto: globalState.user.profile.profilePhoto,
      postBody: postBody.value,
      image: image.value,
    };
    FeedAPI.NewPost(postData)
      .then(() => {
        setState({ ...state, posted: true });
        setGlobalState({ ...globalState, postsLoaded: false });
      })
      .catch((e) => console.log("error", e));
  };

  const startPost = () => {
    setState({ ...state, posted: false });
  };

  return (
    <div className="new-post">
      <button
        type="button"
        className="btn btn-danger compose  tooltip-test"
        id="compose-btn"
        data-toggle="modal"
        data-target="#compose-post"
        onClick={startPost}
        title="Compose post"
      >
        <FontAwesomeIcon icon={faPen} className="post-pen" />
      </button>
      <div
        className="modal fade"
        id="compose-post"
        tabindex="-1"
        role="dialog"
        aria-labelledby="composePost"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
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
            {!state.posted && (
              <div className="modal-body">
                <img
                  src={globalState.user.profile.profilePhoto}
                  className="pp"
                  alt=""
                />
                <textarea ref={(elem) => (postBody = elem)}></textarea>
                <label>Image URL:</label>
                <input
                  type="text"
                  ref={(elem) => (image = elem)}
                  placeholder="(Optional)"
                ></input>
              </div>
            )}
            {state.posted && (
              <div className="alert alert-success" role="alert">
                Posted!
              </div>
            )}
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {!state.posted && (
                <button
                  onClick={newPost}
                  type="button"
                  className="btn btn-danger"
                >
                  Post
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
