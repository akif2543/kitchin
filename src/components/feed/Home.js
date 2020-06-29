import React from "react";

import Profile from "../user/profile";
import Feed from "./feed";

const Home = () => {
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

  return (
    <div className="Home flex-page">
      <Profile />
      <Feed />
    </div>
  );
};

export default Home;
