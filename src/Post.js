import React, { useState, useContext } from "react";
import AppContext from "./AppContext";
import Comment from "./Comment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";

const Post = ({
  _id,
  profilePhoto,
  userName,
  date,
  image,
  postBody,
  caption,
  commentCounter,
  likeButton,
  likeStatus,
  likeCounter,
  shareButton,
  shareStatus,
  shareCounter
}) => {
  const [state, setState] = useState({
    likeButton: likeButton,
    likeStatus: likeStatus,
    shareButton: shareButton,
    shareStatus: shareStatus,
    comments: []
  });

  const [globalState, setGlobalState] = useContext(AppContext);

  const like = async () => {
    setState({
      ...state,
      likeButton: <FontAwesomeIcon icon={faSpinner} spin />
    });
    let response = await fetch("http://localhost:3001/feed/post/like", {
      method: "POST",
      body: JSON.stringify({
        postid: _id
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt"))
      }
    });
    let json = await response.json();
    if (state.likeStatus) {
      setState({
        ...state,
        likeButton: <FontAwesomeIcon icon={["far", "heart"]} />,
        likeStatus: false
      });
      setGlobalState({ ...globalState, postsLoaded: false });
    } else if (!state.likeStatus) {
      setState({
        ...state,
        likeButton: (
          <FontAwesomeIcon icon={["fas", "heart"]} color={"#E67222"} />
        ),
        likeStatus: true
      });
      setGlobalState({ ...globalState, postsLoaded: false });
    }
  };

  const share = async () => {
    setState({
      ...state,
      shareButton: <FontAwesomeIcon icon={faSpinner} spin />
    });
    let response = await fetch("http://localhost:3001/feed/post/share", {
      method: "POST",
      body: JSON.stringify({
        postid: _id
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt"))
      }
    });
    let json = await response.json();
    if (state.shareStatus) {
      setState({
        ...state,
        shareButton: <FontAwesomeIcon icon={faShare} />,
        shareStatus: false
      });
      setGlobalState({ ...globalState, postsLoaded: false });
    } else if (!state.shareStatus) {
      setState({
        ...state,
        shareButton: <FontAwesomeIcon icon={faShare} color={"#E67222"} />,
        shareStatus: true
      });
      setGlobalState({ ...globalState, postsLoaded: false });
    }
  };

  const viewComments = async () => {
    let response = await fetch("http://localhost:3001/feed/post/comment/view", {
      method: "POST",
      body: JSON.stringify({
        postId: _id
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer ".concat(sessionStorage.getItem("jwt"))
      }
    });
    let json = await response.json();
    console.log(json);
    setState({ ...state, comments: json});
    console.log(state.comments);
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
          <button href="#">
            <FontAwesomeIcon icon={["far", "comment"]} />
          </button>
          <span className="card-text count">0</span>
          <button href="#" onClick={like}>
            {state.likeButton}
          </button>
          <span className="card-text count">{likeCounter}</span>
          <button href="#" onClick={share}>
            {state.shareButton}
          </button>
          <span className="card-text count">{shareCounter}</span>
        </div>
        {/* <button
          type="button"
          onClick={viewComments}
          data-toggle="collapse"
          data-target="#comment"
          aria-expanded="false"
          aria-controls="comment"
        >
          <FontAwesomeIcon icon={faComments} id="comments-icon" />
          Show comments
        </button>
        <div class="collapse" id="comment">
          {state.comments.map(comment => 
            <Comment
              _id={comment._id}
              commentPhoto={comment.profilePhoto}
              commentName={comment.userName}
              date={comment.formatDate}
              commentBody={comment.commentBody}
            />
          )}
        </div> */}
      </div>
    </div>
  );
};

export default Post;
