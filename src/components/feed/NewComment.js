import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import AppContext from "./context/AppContext";
import { addComment } from "../../context/actions";

const NewComment = ({ postId }) => {
  let commentBody;

  const [state, setState] = useState({
    posted: false,
    errors: false,
  });

  // const [globalState, dispatch] = useContext(AppContext);

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const validComment = () => {
    return commentBody.value.length > 0;
  };

  const handleClose = () => {
    setState({ ...state, posted: true, errors: false });
    // setGlobalState({ ...globalState, postsLoaded: false });
    setTimeout(() => {
      commentBody = null;
      setState({ ...state, posted: false });
      document.getElementsByClassName("close-comment")[0].click();
    }, 1000);
  };

  const handleSubmit = async () => {
    if (validComment()) {
      dispatch(addComment(postId, commentBody.value));
      // const post = await FeedAPI.addComment(postId, commentBody.value);

      // if (post) {
      //   dispatch({ type: UPDATE_POST, post });
      // } else {
      //   console.log("error");
      // }
      handleClose();
    } else {
      setState({ ...state, errors: true });
    }
  };

  return (
    <div className="new-comment">
      <button
        href="#"
        className="tooltip-test"
        title="Add a comment"
        data-toggle="modal"
        data-target="#compose-comment"
      >
        <FontAwesomeIcon icon={["far", "comment"]} />
      </button>
      <div
        className="modal fade"
        id="compose-comment"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="composeComment"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add a Comment
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
                <textarea ref={(elem) => (commentBody = elem)}></textarea>
              </div>
            )}
            {state.posted && (
              <div className="alert alert-success" role="alert">
                Posted!
              </div>
            )}
            {state.errors && (
              <div className="alert alert-danger" role="alert">
                You cannot submit an empty comment.
              </div>
            )}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary close-comment"
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
                  Comment
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewComment;
