import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import AppContext from "./context/AppContext";
import { newPost } from "./context/actions";

const NewPost = () => {
  let postBody, image;

  const [state, setState] = useState({
    posted: false,
  });

  // const [globalState, dispatch] = useContext(AppContext);

  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSubmit = async () => {
    const postData = {
      userName: user.name,
      profilePhoto: user.profile.profilePhoto,
      postBody: postBody.value,
      image: image.value,
    };
    dispatch(newPost(postData));
    // FeedAPI.newPost(postData)
    //   .then((post) => {
    //     setState({ ...state, posted: true });
    //     dispatch({ type: UPDATE_POST, post });
    //     // setGlobalState({ ...globalState, postsLoaded: false });
    //   })
    //   .catch((e) => console.log("error", e));
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
        <FontAwesomeIcon icon="pen" className="post-pen" />
      </button>
      <div
        className="modal fade"
        id="compose-post"
        tabIndex="-1"
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
                <img src={user.profile.profilePhoto} className="pp" alt="" />
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
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {!state.posted && (
                <button
                  onClick={handleSubmit}
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
