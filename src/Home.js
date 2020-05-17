import React, { useState, useEffect, useContext } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "./Post";
import NewPost from "./NewPost";
import Profile from "./Profile";
// import Recipe from "./Recipe";
import AppContext from "./AppContext";
import FeedAPI from "./api/FeedAPI";

import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faComment as faCommentSolid } from "@fortawesome/free-solid-svg-icons";
import { faComment as faCmmentRegular } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-regular-svg-icons";

library.add(
  faHeartRegular,
  faHeartSolid,
  faCommentSolid,
  faCmmentRegular,
  faShare,
  faSpinner,
  faBriefcase,
  faCity,
  faUtensils,
  faUsers,
  faPen,
  faComments
);

const Home = () => {
  const [globalState, setGlobalState] = useContext(AppContext);

  const [state, setState] = useState({
    posts: [],
    loading: true,
    loadMore: false,
    timestamp: null,
  });

  const loadMore = () => {
    /* if(state.posts.length > 1) {
      // Updating global state to trigger the fetch request
      setGlobalState({
          ...globalState,
          postsLoaded: false
      });
  } */
    setState({
      ...state,
      timestamp:
        state.posts.length > 0
          ? state.posts[state.posts.length - 1].date
          : null,
    });
    setGlobalState({ ...globalState, postsLoaded: false });
    document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    if (!globalState.postsLoaded) {
      FeedAPI.getPosts(state.timestamp)
        .then((json) => {
          setState({
            ...state,
            posts: json,
            loading: false,
          });
          setGlobalState({ ...globalState, postsLoaded: true });
        })
        .catch((e) => console.log("error", e));
    }
  });

  return (
    <div className="Home flex-page">
      {globalState.signedIn && (
        <div className="container col-sm-3">
          <Profile />
        </div>
      )}
      {!globalState.signedIn && (
        <div className="container col-sm-8 feed-container">
          <h1 id="feed-title">Sign in to View Your Feed</h1>
        </div>
      )}
      {globalState.signedIn && (
        <div className="container col-sm-8 feed-container">
          <NewPost />
          <h1 id="feed-title">Your Feed</h1>
          {state.loading && (
            <div className="container-fluid loading">
              <img src="https://image.flaticon.com/icons/png/512/18/18315.png" />
              <p>Your feed is cooking!</p>
            </div>
          )}
          <div className="container post-container">
            {state.posts.map((post) => (
              <Post
                key={post._id}
                _id={post._id}
                profilePhoto={post.profilePhoto}
                userName={post.userName}
                date={post.formatDate}
                postBody={post.postBody}
                image={post.image}
                caption={post.caption}
                commentButton={<FontAwesomeIcon icon={["far", "comment"]} />}
                comments={post.comments}
                likeButton={
                  post.likes.includes(globalState.user.id) ? (
                    <FontAwesomeIcon
                      icon={["fas", "heart"]}
                      color={"#E67222"}
                    />
                  ) : (
                    <FontAwesomeIcon icon={["far", "heart"]} />
                  )
                }
                likeStatus={
                  post.likes.includes(globalState.user.id) ? true : false
                }
                likeCounter={post.likes.length}
                shareButton={
                  post.shares.includes(globalState.user.id) ? (
                    <FontAwesomeIcon icon={faShare} color={"#E67222"} />
                  ) : (
                    <FontAwesomeIcon icon={faShare} />
                  )
                }
                shareStatus={
                  post.shares.includes(globalState.user.id) ? true : false
                }
                shareCounter={post.shares.length}
              />
            ))}
            {globalState.postsLoaded && (
              <button
                className="btn btn-danger"
                onClick={loadMore}
                href="#feed-title"
                id="load-more-btn"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;

{
  /* {globalState.signedIn && (
        <div className="container">
          {state.posts.map(post => (
            <Recipe
              _id={post._id}
              profilePhoto={post.profilePhoto}
              userName={post.userName}
              date={post.date}
              recipeTitle={post.recipeTitle}
              prepTime={post.prepTime}
              cookTime={post.cookTime}
              recipeDescription={post.recipeDescription}
              tags={post.tags}
              image={post.image}
              caption={post.caption}
              ingredientList={post.ingredientList}
              recipeDirections={post.recipeDirections}
              commentButton={<FontAwesomeIcon icon={["far", "comment"]} />}
              comments={post.comments.length}
              likeStatus={
                post.likes.includes(globalState.id) ? (
                  <FontAwesomeIcon icon={["far", "heart"]} />
                ) : (
                  <FontAwesomeIcon icon={["fas", "heart"]} />
                )
              }
              likes={post.likes.length}
              shareStatus={
                post.shares.includes(globalState.id) ? (
                  <FontAwesomeIcon icon={["far", "share-square"]} />
                ) : (
                  <FontAwesomeIcon icon={["fas", "share-square"]} />
                )
              }
              shares={post.shares.length}
            />
          ))}
        </div>
            )} */
}
