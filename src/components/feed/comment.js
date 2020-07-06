import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import { toggleComment } from "../../actions/feed_actions";

const Comment = ({ c, user, postId, format }) => {
  const dispatch = useDispatch();

  const toggleLike = () =>
    dispatch(toggleComment({ postId, commentId: c._id }));

  const hasLiked = c.likes.some((u) => u._id === user.id);
  return (
    <div className="card card-body comment">
      <header>
        <img src={c.commenter.avatar} className="profile-photo" alt="" />
        <div className="author">
          <h6 className="card-title post-username">{c.commenter.name}</h6>
          <span className="card-text post-date">@{c.commenter.handle}</span>
        </div>
        <span className="card-text post-date">{format(c.createdAt)}</span>
      </header>
      <p className="card-text post-body">{c.body}</p>
      <footer>
        <button className="post-btn" onClick={toggleLike}>
          {hasLiked ? (
            <FontAwesomeIcon icon="heart" color={"#E67222"} />
          ) : (
            <FontAwesomeIcon icon={["far", "heart"]} />
          )}
        </button>
        <span className="card-text count">{c.likes.length}</span>
      </footer>
    </div>
  );
};

export default Comment;
