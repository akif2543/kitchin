import { combineReducers } from "redux";

import {
  RECEIVE_USER,
  SIGN_OUT,
  RECEIVE_PROFILE,
  RECEIVE_ERRORS,
  CLEAR_ERRORS,
  LOADING,
  RECEIVE_POSTS,
  RECEIVE_POST,
} from "./actions";

const userReducer = (user = {}, action) => {
  let newUser = {};
  switch (action.type) {
    case RECEIVE_USER:
      newUser.name = action.name;
      newUser.profile = action.profile;
      return newUser;
    case SIGN_OUT:
      return newUser;
    case RECEIVE_PROFILE:
      newUser = Object.assign({}, user);
      newUser.profile = action.profile;
      return newUser;
    default:
      return user;
  }
};

const errorReducer = (errors = {}, action) => {
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return {};
    default:
      return errors;
  }
};

const initialFeed = { loading: false, timestamp: null, posts: {} };

const feedReducer = (feed = initialFeed, action) => {
  let newFeed = [];
  switch (action.type) {
    case LOADING:
      newFeed = Object.assign({}, feed);
      newFeed.loading = true;
    case RECEIVE_POSTS:
      newFeed = {
        loading: false,
        timestamp: action.posts[action.posts.length - 1].date,
        posts: feed.posts,
      };
      action.posts.forEach((post) => {
        newFeed.posts[post.id] = post;
      });
      break;
    case RECEIVE_POST:
      newFeed = Object.assign({}, feed);
      newFeed.posts[action.post.id] = action.post;
      break;
    default:
      return feed;
  }
  return newFeed;
};

const rootReducer = combineReducers({
  user: userReducer,
  feed: feedReducer,
  errors: errorReducer,
});

export default rootReducer;
