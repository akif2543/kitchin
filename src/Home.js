import React, { useState, useEffect, useContext } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Post from "./Post";
import Profile from "./Profile";
import Recipe from "./Recipe";
import AppContext from "./AppContext";

import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare as faShareSquareSolid } from "@fortawesome/free-solid-svg-icons";
import { faShareSquare as faShareSquareRegular } from "@fortawesome/free-regular-svg-icons";
import { faComment as faCommentSolid } from "@fortawesome/free-solid-svg-icons";
import { faComment as faCmmentRegular } from "@fortawesome/free-regular-svg-icons";
import { faShare } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faCity } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

library.add(
  faHeartRegular,
  faHeartSolid,
  faShareSquareSolid,
  faShareSquareRegular,
  faCommentSolid,
  faCmmentRegular,
  faShare,
  faSpinner,
  faBriefcase,
  faCity,
  faUtensils,
  faUsers
);

const Home = () => {
  const [globalState, setGlobalState] = useContext(AppContext);

  const [state, setState] = useState({
    posts: [],
    postsLoaded: false,
    profile: {},
    profileLoaded: false
  });

  useEffect(() => {
    if (!state.postsLoaded) {
      fetch("http://localhost:3001/feed/post/all")
        .then(response => response.json())
        .then(json => {
          setState({
            ...state,
            posts: json,
            postsLoaded: true,
            loadMore: false
          });
        })
        .catch(e => console.log("error", e));
    }
  });
  
  return (
    <div className="Home page">
      {globalState.signedIn && (
        <div className="container">
        <Profile />
        </div>
      )}
      <h1>Your Feed</h1>
      {globalState.signedIn && (
        <div className="container">
          {state.posts.map(post => (
            <Post
              _id={post._id}
              profilePhoto={post.profilePhoto}
              userName={post.userName}
              date={post.formatDate}
              postBody={post.postBody}
              image={post.image}
              caption={post.caption}
              commentButton={<FontAwesomeIcon icon={["far", "comment"]} />}
              comments={post.comments.length}
              likeButton={
                post.likes.includes(globalState.user.id) ? (
                  <FontAwesomeIcon icon={["far", "heart"]} />
                ) : (
                  <FontAwesomeIcon icon={["fas", "heart"]} color={"#E67222"} />
                )
              }
              likeStatus={
                post.likes.includes(globalState.user.id) ? true : false
              }
              likeCounter={post.likes.length}
              shareStatus={
                post.shares.includes(globalState.user.id) ? (
                  <FontAwesomeIcon icon={faShare} color={"#E67222"} />
                ) : (
                  <FontAwesomeIcon icon={faShare} />
                )
              }
              shares={post.shares.length}
            />
          ))}
        </div>
      )}
      {/* {globalState.signedIn && (
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
      )} */}
    </div>
  );
};

export default Home;
