import { RECEIVE_POSTS, RECEIVE_POST } from "../../actions/feed_actions";

const commentsReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign(newState, action.comments);
    case RECEIVE_POST:
      return Object.assign(newState, action.comments);
    default:
      return state;
  }
};

export default commentsReducer;
