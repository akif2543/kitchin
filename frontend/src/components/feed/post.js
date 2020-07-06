import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Comment from "./comment";
import NewComment from "./new_comment";

import { getCurrentUser } from "../../reducers/selectors/selectors";
import { togglePost } from "../../actions/feed_actions";

const Post = ({ p }) => {
  const dispatch = useDispatch();
  const user = useSelector((store) => getCurrentUser(store));
  const [showComments, setShowComments] = useState(false);

  const hasLiked = p.likes.some((u) => u._id === user.id);
  const hasShared = p.shares.some((u) => u._id === user.id);

  const toggleComments = () => setShowComments(!showComments);

  const handleToggle = (type) => () =>
    dispatch(togglePost({ postId: p._id, like: type === "like" }));

  const dateDiff = (date) => {
    const now = Date.now();
    const messageDate = date.getTime();
    return Math.floor((now - messageDate) / (24 * 3600 * 1000));
  };

  const formatDate = (date) => {
    const mDate = new Date(date);
    const diff = dateDiff(mDate);

    switch (diff) {
      case 0:
        return `Today at ${mDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`;
      case 1:
        return `Yesterday at ${mDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}`;
      default:
        return mDate.toLocaleDateString();
    }
  };

  const likeBtn = hasLiked ? (
    <FontAwesomeIcon icon="heart" color={"#E67222"} />
  ) : (
    <FontAwesomeIcon icon={["far", "heart"]} />
  );

  const shareBtn = hasShared ? (
    <FontAwesomeIcon icon="share" color={"#E67222"} />
  ) : (
    <FontAwesomeIcon icon="share" />
  );

  // const spin = <FontAwesomeIcon icon="spinner" spin />;

  return (
    <div className="card w-75 post">
      <div className="card-body">
        <img src={p.author.avatar} className="profile-photo" alt="" />
        <div className="author">
          <h5 className="card-title post-username">{p.author.name}</h5>
          <span className="card-text post-date">@{p.author.handle}</span>
        </div>
        <span className="card-text post-date">{formatDate(p.createdAt)}</span>
        <p className="card-text post-body">{p.body}</p>
        {p.image && <img src={p.image} alt="" className="post-image" />}
        <div className="flex-container">
          <button onClick={handleToggle("like")} className="post-btn">
            {likeBtn}
          </button>
          <span className="card-text count">{p.likes.length}</span>
          <button href="#" onClick={handleToggle("share")} className="post-btn">
            {shareBtn}
          </button>
          <span className="card-text count">{p.shares.length}</span>
          <button
            className="tooltip-test post-btn"
            title="Add a comment"
            data-toggle="collapse"
            data-target={`#add-comment-${p._id.slice(p._id.length - 5)}`}
            aria-expanded="false"
            aria-controls="comment"
            id={`toggle-com-${p._id.slice(p._id.length - 5)}`}
          >
            <FontAwesomeIcon icon={["far", "comment"]} />
          </button>
          <span className="card-text count">{p.comments.length}</span>
          <button
            type="button"
            className="tooltip-test post-btn"
            title="View comments"
            data-toggle="collapse"
            data-target={`#comments-${p._id.slice(p._id.length - 5)}`}
            aria-expanded="false"
            aria-controls="comments"
            disabled={!p.comments.length}
            onClick={toggleComments}
          >
            {showComments ? (
              <FontAwesomeIcon icon="angle-up" id="comments-icon" />
            ) : (
              <FontAwesomeIcon icon="angle-down" id="comments-icon" />
            )}
          </button>
        </div>
        <div
          className="collapse comments"
          id={`comments-${p._id.slice(p._id.length - 5)}`}
        >
          {p.comments.map((c) => (
            <Comment
              c={c}
              postId={p._id}
              user={user}
              format={formatDate}
              key={c._id}
            />
          ))}
        </div>
        <NewComment id={p._id} user={user} />
      </div>
    </div>
  );
};

export default Post;
