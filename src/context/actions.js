import UserAPI from "../api/UserAPI";
import FeedAPI from "../api/FeedAPI";

export const LOADING = "LOADING";
export const LOAD_FEED = "LOAD_FEED";
export const LOAD_MORE = "LOAD_MORE";
export const UPDATE_POST = "UPDATE_POST";

export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const CLEAR_ERRORS = "CLEAR_ERRORS";

const receiveProfile = (profile) => ({
  type: RECEIVE_PROFILE,
  profile,
});

export const clearUser = () => ({
  type: SIGN_OUT,
});

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts,
});
const receivePost = (post) => ({
  type: RECEIVE_POST,
  post,
});

const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const fetchFeed = (time) => (dispatch) => {
  return FeedAPI.getPosts(time).then((posts) => dispatch(receivePosts(posts)));
};

export const togglePost = (postId, like) => (dispatch) => {
  return FeedAPI.postToggleable(postId, like).then((post) =>
    dispatch(receivePost(post))
  );
};

export const newPost = (body) => (dispatch) => {
  return FeedAPI.newPost(body).then((post) => dispatch(receivePost(post)));
};

export const addComment = (postId, body) => (dispatch) => {
  return FeedAPI.addComment(postId, body).then((post) =>
    dispatch(receivePost(post))
  );
};

export const updateProfile = (body) => (dispatch) => {
  return UserAPI.updateProfile(body).then((profile) =>
    dispatch(receiveProfile(profile))
  );
};
