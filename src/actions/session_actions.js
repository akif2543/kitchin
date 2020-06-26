import { normalize } from "normalizr";

import UserAPI from "../api/UserAPI";
import { userSchema } from "./schema";

export const SIGN_OUT = "SIGN_OUT";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";

const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user,
});

const signOut = () => ({
  type: SIGN_OUT,
});

const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors,
});

const receiveUserErrors = (errors) => ({
  type: RECEIVE_USER_ERRORS,
  errors,
});

export const getUser = (res) => {
  const { token, user } = res.data;
  localStorage.setItem("jwt", token);
  UserAPI.setAuthToken(token);
  return normalize(user, userSchema);
};

export const register = (userData) => (dispatch) =>
  UserAPI.register(userData)
    .then((res) => dispatch(receiveCurrentUser(getUser(res))))
    .catch((e) => dispatch(receiveSessionErrors(e.response.data)));

export const login = (userData) => (dispatch) =>
  UserAPI.login(userData)
    .then((res) => dispatch(receiveCurrentUser(getUser(res))))
    .catch((e) => dispatch(receiveSessionErrors(e.response.data)));

export const logout = () => (dispatch) => {
  localStorage.removeItem("jwt");
  UserAPI.setAuthToken(false);
  return dispatch(signOut());
};

export const fetchUser = (handle) => (dispatch) =>
  UserAPI.fetchUser(handle)
    .then((user) => dispatch(receiveUser(normalize(user, userSchema))))
    .catch((e) => dispatch(receiveUserErrors(e.response.data)));
