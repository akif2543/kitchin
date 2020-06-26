import { RECEIVE_CURRENT_USER, SIGN_OUT } from "../../actions/session_actions";

const sessionReducer = (state = null, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user.handle;
    case SIGN_OUT:
      return null;
    default:
      return state;
  }
};

export default sessionReducer;
