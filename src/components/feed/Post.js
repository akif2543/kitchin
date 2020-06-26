import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import AppContext from "./context/AppContext";
import Comment from "./Comment";
import NewComment from "./NewComment";
// import FeedAPI from "./api/FeedAPI";
import { togglePost } from "../../context/actions";

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

  const dispatch = useDispatch();

  // const [globalState, dispatch] = useContext(AppContext);

  const handleCommentsToggle = () => {
    setState({ ...state, commentsOpen: !state.commentsOpen });
  };

  const like = () => {
    setState({
      ...state,
      likeButton: <FontAwesomeIcon icon="spinner" spin />,
    });
    dispatch(togglePost(_id, true));
    // FeedAPI.postToggleable(_id, true)
    //   .then((post) => {
    //     if (state.likeStatus) {
    //       setState({
    //         ...state,
    //         likeButton: <FontAwesomeIcon icon={["far", "heart"]} />,
    //         likeStatus: false,
    //       });
    //       // setGlobalState({ ...globalState, postsLoaded: false });
    //     } else if (!state.likeStatus) {
    //       setState({
    //         ...state,
    //         likeButton: <FontAwesomeIcon icon="heart" color={"#E67222"} />,
    //         likeStatus: true,
    //       });
    //       // setGlobalState({ ...globalState, postsLoaded: false });
    //     }
    //     dispatch({ type: UPDATE_POST, post });
    // })
    // .catch((e) => console.log("error", e));
  };

  const share = async () => {
    setState({
      ...state,
      shareButton: <FontAwesomeIcon icon="spinner" spin />,
    });
    dispatch(togglePost(_id, false));
    // FeedAPI.postToggleable(_id, false)
    //   .then((post) => {
    //     if (state.shareStatus) {
    //       setState({
    //         ...state,
    //         shareButton: <FontAwesomeIcon icon="share" />,
    //         shareStatus: false,
    //       });
    //       // setGlobalState({ ...globalState, postsLoaded: false });
    //     } else if (!state.shareStatus) {
    //       setState({
    //         ...state,
    //         shareButton: <FontAwesomeIcon icon="share" color={"#E67222"} />,
    //         shareStatus: true,
    //       });
    //       // setGlobalState({ ...globalState, postsLoaded: false });
    //     }
    //     dispatch({ type: UPDATE_POST, post });
    //   })
    //   .catch((e) => console.log("error", e));
  };

  return (
    <div className="card w-75 post">
      <div className="card-body">
        <img src={profilePhoto} className="profile-photo" alt="" />
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
              <FontAwesomeIcon icon="angle-up" id="comments-icon" />
            ) : (
              <FontAwesomeIcon icon="angle-down" id="comments-icon" />
            )}
          </button>
        </div>
        <div className="collapse" id={`comments-${_id.slice(_id.length - 5)}`}>
          {comments.map((comment) => (
            <Comment
              key={comment._id}
              user={comment.userId}
              date={comment.date}
              body={comment.body}
              likes={comments.likes}
              show={state.commentsOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
