import { RECEIVE_POSTS, RECEIVE_POST } from "../../actions/feed_actions";

const postsReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_POSTS:
      return Object.assign(newState, action.posts);
    case RECEIVE_POST:
      return Object.assign(newState, action.posts);
    default:
      return state;
  }
};

export default postsReducer;
