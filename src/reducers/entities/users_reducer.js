import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER,
} from "../../actions/session_actions";

const usersReducer = (state = {}, action) => {
  const newState = { ...state };
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign(newState, action.user);
    case RECEIVE_USER:
      return Object.assign(newState, action.user);
    default:
      return state;
  }
};

export default usersReducer;
