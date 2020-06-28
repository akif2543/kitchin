import { normalize } from "normalizr";

import FeedAPI from "../api/FeedAPI";
import { postSchema } from "./schema";

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_POSTS = "RECEIVE_POSTS";
export const RECEIVE_FEED_ERROR = "RECEIVE_FEED_ERROR";

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post,
});

const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  ...posts,
});

const receiveFeedError = (error) => ({
  type: RECEIVE_FEED_ERROR,
  error,
});

const normalizePosts = (posts) => {
  const normalized = normalize(posts, [postSchema]);
  return normalized.entities;
};

const normalizePost = (post) => {
  const normalized = normalize(post, postSchema);
  return normalized.entities;
};

export const fetchPosts = (date) => (dispatch) =>
  FeedAPI.fetchPosts(date)
    .then((res) => dispatch(receivePosts(normalizePosts(res.data))))
    .catch((e) => dispatch(receiveFeedError(e.response.data)));

export const createPost = (post) => (dispatch) =>
  FeedAPI.createPost(post)
    .then((res) => dispatch(receivePost(normalizePost(res.data))))
    .catch((e) => dispatch(receiveFeedError(e.response.data)));

export const togglePost = (info) => (dispatch) =>
  FeedAPI.togglePost(info)
    .then((res) => dispatch(receivePost(normalizePost(res.data))))
    .catch((e) => dispatch(receiveFeedError(e.response.data)));

export const addComment = (comment) => (dispatch) =>
  FeedAPI.addComment(comment)
    .then((res) => dispatch(receivePost(normalizePost(res.data))))
    .catch((e) => dispatch(receiveFeedError(e.response.data)));

export const toggleComment = (info) => (dispatch) =>
  FeedAPI.toggleComment(info)
    .then((res) => dispatch(receivePost(normalizePost(res.data))))
    .catch((e) => dispatch(receiveFeedError(e.response.data)));
