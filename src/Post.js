import React, { useState, useContext } from "react";
import AppContext from "./AppContext";
import Comment from "./Comment";
import NewComment from "./NewComment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";

const Post = ({
  _id,
  profilePhoto,
  userName,
  date,
  image,
  postBody,
  caption,
  comments,
  likeButton,
  likeStatus,
  likeCounter,
  shareButton,
  shareStatus,
  shareCounter,
}) => {
  const [state, setState] = useState({
    likeButton: likeButton,
    likeStatus: likeStatus,
    shareButton: shareButton,
    shareStatus: shareStatus,
    commentsOpen: false,
  });

  const [globalState, setGlobalState] = useContext(AppContext);

  const handleCommentsToggle = () => {
    setState({ ...state, commentsOpen: state.commentsOpen ? false : true });
  };

  const like = async () => {
    setState({
      ...state,
      likeButton: <FontAwesomeIcon icon={faSpinner} spin />,
    });
    let response = await fetch("http://localhost:3001/feed/post/like", {
      method: "POST",
      body: JSON.stringify({
        postid: _id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt")),
      },
    });
    let json = await response.json();
    if (state.likeStatus) {
      setState({
        ...state,
        likeButton: <FontAwesomeIcon icon={["far", "heart"]} />,
        likeStatus: false,
      });
      setGlobalState({ ...globalState, postsLoaded: false });
    } else if (!state.likeStatus) {
      setState({
        ...state,
        likeButton: (
          <FontAwesomeIcon icon={["fas", "heart"]} color={"#E67222"} />
        ),
        likeStatus: true,
      });
      setGlobalState({ ...globalState, postsLoaded: false });
    }
  };

  const share = async () => {
    setState({
      ...state,
      shareButton: <FontAwesomeIcon icon={faSpinner} spin />,
    });
    let response = await fetch("http://localhost:3001/feed/post/share", {
      method: "POST",
      body: JSON.stringify({
        postid: _id,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt")),
      },
    });
    let json = await response.json();
    if (state.shareStatus) {
      setState({
        ...state,
        shareButton: <FontAwesomeIcon icon={faShare} />,
        shareStatus: false,
      });
      setGlobalState({ ...globalState, postsLoaded: false });
    } else if (!state.shareStatus) {
      setState({
        ...state,
        shareButton: <FontAwesomeIcon icon={faShare} color={"#E67222"} />,
        shareStatus: true,
      });
      setGlobalState({ ...globalState, postsLoaded: false });
    }
  };

  return (
    <div className="card w-75 post">
      <div className="card-body">
        <img src={profilePhoto} className="profile-photo" />
        <h5 className="card-title post-username">{userName}</h5>
        <span className="card-text post-date">{date}</span>
        <p className="card-text post-body">{postBody}</p>
        <img src={image} alt={caption} className="post-image" />
        <div className="flex-container">
          <button href="#" onClick={like}>
            {state.likeButton}
          </button>
          <span className="card-text count">{likeCounter}</span>
          <button href="#" onClick={share}>
            {state.shareButton}
          </button>
          <span className="card-text count">{shareCounter}</span>
          <NewComment postId={_id} />
          <span className="card-text count">{comments.length}</span>
          <button
            type="button"
            className="tooltip-test"
            title="View comments"
            data-toggle="collapse"
            data-target={`#comments-${_id.slice(_id.length - 5)}`}
            aria-expanded="false"
            aria-controls="comment"
            disabled={!comments.length}
            onClick={handleCommentsToggle}
          >
            {state.commentsOpen ? (
              <FontAwesomeIcon icon={faAngleUp} id="comments-icon" />
            ) : (
              <FontAwesomeIcon icon={faAngleDown} id="comments-icon" />
            )}
          </button>
        </div>
        <div class="collapse" id={`comments-${_id.slice(_id.length - 5)}`}>
          {comments.map((comment) => (
            <Comment
              _id={comment._id}
              user={comment.userId}
              profile={comment.userProfileId}
              date={comment.date}
              body={comment.body}
              likes={comments.likes}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
