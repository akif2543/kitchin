import {
  RECEIVE_FEED_ERROR,
  RECEIVE_POST,
  RECEIVE_POSTS,
} from "../../actions/feed_actions";

const feedErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_FEED_ERROR:
      return action.error;
    case RECEIVE_POST:
      return {};
    case RECEIVE_POSTS:
      return {};
    default:
      return state;
  }
};

export default feedErrorsReducer;
