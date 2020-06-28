import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER,
} from "../../actions/session_actions";
import { RECEIVE_POST, RECEIVE_POSTS } from "../../actions/feed_actions";

const usersReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(newState, action.user);
    case RECEIVE_USER:
      return Object.assign(newState, action.user);
    case RECEIVE_POST:
      return Object.assign(newState, action.users);
    case RECEIVE_POSTS:
      return Object.assign(newState, action.users);
    default:
      return state;
  }
};

export default usersReducer;
