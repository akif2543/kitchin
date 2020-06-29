import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Post from "./post";
import NewPost from "./new_post";
import { fetchPosts } from "../../actions/feed_actions";
import { getPosts, getCurrentUser } from "../../reducers/selectors/selectors";

const Feed = (props) => {
  const dispatch = useDispatch();

  // const user = useSelector((store) => getCurrentUser(store));
  const posts = useSelector((store) => getPosts(store));

  useEffect(() => {
    dispatch(fetchPosts(null));
  }, []);

  return (
    <div className="container col-sm-8 feed-container">
      <button
        type="button"
        className="btn btn-danger compose  tooltip-test"
        id="compose-btn"
        data-toggle="modal"
        data-target="#compose-post"
        title="Compose post"
      >
        <FontAwesomeIcon icon="pen" className="post-pen" />
      </button>
      <NewPost />
      <h1 id="feed-title">Your Feed</h1>
      {/* {loading && (
            <div className="container-fluid loading">
              <img
                src="https://image.flaticon.com/icons/png/512/18/18315.png"
                alt=""
              />
              <p>Your feed is cooking!</p>
            </div>
          )} */}
      <div className="container post-container">
        {posts.map((post) => (
          <Post
            key={post._id}
            p={post}
            // id={post._id}
            // profilePhoto={post.profilePhoto}
            // userName={post.userName}
            // date={post.formatDate}
            // postBody={post.postBody}
            // image={post.image}
            // caption={post.caption}
            // commentButton={<FontAwesomeIcon icon={["far", "comment"]} />}
            // comments={post.comments}
            // likeButton={
            //   post.likes.includes(user.id) ? (
            //     <FontAwesomeIcon icon="heart" color={"#E67222"} />
            //   ) : (
            //     <FontAwesomeIcon icon={["far", "heart"]} />
            //   )
            // }
            // likeStatus={post.likes.includes(user.id) ? true : false}
            // likeCounter={post.likes.length}
            // shareButton={
            //   post.shares.includes(user.id) ? (
            //     <FontAwesomeIcon icon="share" color={"#E67222"} />
            //   ) : (
            //     <FontAwesomeIcon icon="share" />
            //   )
            // }
            // shareStatus={post.shares.includes(user.id) ? true : false}
            // shareCounter={post.shares.length}
          />
        ))}
        {/* {!loading && (
              <button
                className="btn btn-danger"
                onClick={loadMore}
                href="#feed-title"
                id="load-more-btn"
              >
                Load More
              </button>
            )} */}
      </div>
    </div>
  );
};

export default Feed;
