import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { addComment } from "../../actions/feed_actions";

const NewComment = ({ id, user }) => {
  const [body, setBody] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => setBody(e.target.value);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (body.trim().length) {
      setError(false);
      dispatch(addComment({ id, body })).then((action) => {
        if (action.type === "RECEIVE_POST") {
          setBody("");
          document
            .getElementById(`toggle-com-${id.slice(id.length - 5)}`)
            .click();
        }
      });
    } else {
      setError(true);
    }
  };

  return (
    <div
      className="collapse add-comment"
      id={`add-comment-${id.slice(id.length - 5)}`}
    >
      <form onSubmit={handleSubmit}>
        <img src={user.avatar} className="profile-photo" alt="" />
        <textarea
          className={error ? "presence-err" : ""}
          value={body}
          onChange={handleChange}
          placeholder="Comment on this post"
        ></textarea>
        <button type="submit" className="post-btn sub-com">
          <FontAwesomeIcon icon="comment" size="lg" />
        </button>
      </form>
    </div>
  );
};

export default NewComment;
