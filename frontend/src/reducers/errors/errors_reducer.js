import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import feedErrorsReducer from "./feed_errors_reducer";

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  feed: feedErrorsReducer,
});

export default errorsReducer;
