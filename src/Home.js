import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Post from "./Post";
import NewPost from "./NewPost";
import Profile from "./Profile";
// import Recipe from "./Recipe";
// import AppContext from "./context/AppContext";
import { fetchFeed } from "./context/actions";

const Home = () => {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const posts = useSelector((store) => {
    return Object.keys(store.feed.posts).map(
      (postId) => store.feed.posts[postId]
    );
  });

  const timestamp = useSelector((store) => store.feed.timestamp);
  const loading = useSelector((store) => store.feed.loading);

  // const [globalState, dispatch] = useContext(AppContext);

  // const [state, setState] = useState({
  //   posts: [],
  //   loading: true,
  //   loadMore: false,
  //   timestamp: null,
  // });

  const loadMore = () => {
    // dispatch({ type: LOADING });
    /* if(state.posts.length > 1) {
      // Updating global state to trigger the fetch request
      setGlobalState({
          ...globalState,
          postsLoaded: false
      });
  } */
    // setState({
    //   ...state,
    //   timestamp:
    //     state.posts.length > 0
    //       ? state.posts[state.posts.length - 1].date
    //       : null,
    // });
    // setGlobalState({ ...globalState, postsLoaded: false });
    // document.documentElement.scrollTop = 0;
  };

  useEffect(() => {
    dispatch(fetchFeed(timestamp));

    // if (globalState.feed.loading) {
    //   FeedAPI.getPosts(globalState.feed.timestamp)
    //     .then((posts) => dispatch({ type: LOAD_FEED, posts: posts }))
    //     .catch((e) => console.log("error", e));
    // }
  }, []);

  return (
    <div className="Home flex-page">
      {user.name && (
        <div className="container col-sm-3">
          <Profile />
        </div>
      )}
      {!user.name && (
        <div className="container col-sm-8 feed-container">
          <h1 id="feed-title">Sign in to View Your Feed</h1>
        </div>
      )}
      {user.name && (
        <div className="container col-sm-8 feed-container">
          <NewPost />
          <h1 id="feed-title">Your Feed</h1>
          {loading && (
            <div className="container-fluid loading">
              <img
                src="https://image.flaticon.com/icons/png/512/18/18315.png"
                alt=""
              />
              <p>Your feed is cooking!</p>
            </div>
          )}
          <div className="container post-container">
            {posts.map((post) => (
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
                  post.likes.includes(user.id) ? (
                    <FontAwesomeIcon icon="heart" color={"#E67222"} />
                  ) : (
                    <FontAwesomeIcon icon={["far", "heart"]} />
                  )
                }
                likeStatus={post.likes.includes(user.id) ? true : false}
                likeCounter={post.likes.length}
                shareButton={
                  post.shares.includes(user.id) ? (
                    <FontAwesomeIcon icon="share" color={"#E67222"} />
                  ) : (
                    <FontAwesomeIcon icon="share" />
                  )
                }
                shareStatus={post.shares.includes(user.id) ? true : false}
                shareCounter={post.shares.length}
              />
            ))}
            {!loading && (
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

// {
//           setState({
//             ...state,
//             posts: json,
//             loading: false,
//           });
//           setGlobalState({ ...globalState, postsLoaded: true });
