import React, { useState, useContext } from "react";
import AppContext from "./AppContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

const NewPost = () => {

    let postBody, image, postModal;

  const [state, setState] = useState({
    posted: false
  });

  const [globalState, setGlobalState] = useContext(AppContext);

  const newPost = async () => {
    let response = await fetch('http://localhost:3001/feed/post', {
            method: 'POST',
            body: JSON.stringify({
                userName: globalState.user.name,
                profilePhoto: globalState.user.profile.profilePhoto,
                postBody: postBody.value,
                image: image.value,
            }),
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer ".concat(sessionStorage.getItem("jwt"))
            }
        })
        response = await response.json();
        setState({...state, posted: true});
        setGlobalState({...globalState, postsLoaded: false});
    };

    const startPost = () => {
        setState({...state, posted: false})
    };


  return (
    <div className="new-post">
      <button
        type="button"
        className="btn btn-danger compose"
        id="compose-btn"
        data-toggle="modal"
        data-target="#compose-post"
        onClick={startPost}
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
            {!state.posted && 
            <div className="modal-body">
                <img src={globalState.user.profile.profilePhoto} className="pp" />
                <textarea ref={elem => (postBody = elem)}></textarea>
                <label>Image URL:</label>
                <input type="text" ref={elem => (image = elem)} placeholder="(Optional)"></input>
            </div>}
            { state.posted &&
                <div 
                className="alert alert-success"
                role="alert">
                Posted!
                </div>
            }
            <div class="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {!state.posted &&
              <button onClick={newPost} type="button" className="btn btn-danger">
                Post
              </button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
