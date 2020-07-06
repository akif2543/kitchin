import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import debounce from "lodash.debounce";

import Post from "./post";
import NewPost from "./new_post";
import { fetchPosts } from "../../actions/feed_actions";
import { getPosts } from "../../reducers/selectors/selectors";

const Feed = (props) => {
  const dispatch = useDispatch();

  const posts = useSelector((store) => getPosts(store));
  const [last, setLast] = useState(1);
  const [load, setLoad] = useState(false);

  const date = posts.length ? posts[posts.length - 1].createdAt : null;

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setLoad(true);
    setTimeout(() => setLoad(false), 2000);
  };

  useEffect(() => {
    loadPosts();
    window.addEventListener("scroll", debounce(handleScroll, 150));
    return () =>
      window.removeEventListener("scroll", debounce(handleScroll, 150));
  }, []);

  useEffect(() => {
    if (!load) return;
    if (date === last) return;
    loadPosts();
  }, [load]);

  const loadPosts = () => {
    setLast(date);
    dispatch(fetchPosts(date));
  };

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
          <Post key={post._id} p={post} />
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
