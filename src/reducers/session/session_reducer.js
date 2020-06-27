import { RECEIVE_CURRENT_USER, SIGN_OUT } from "../../actions/session_actions";

const sessionReducer = (state = { id: null }, action) => {
  let id;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      [id] = Object.keys(action.user);
      return { id };
    case SIGN_OUT:
      return { id: null };
    default:
      return state;
  }
};

export default sessionReducer;
