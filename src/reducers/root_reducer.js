import { combineReducers } from "redux";

import entitiesReducer from "./entities/entities_reducer";
import errorsReducer from "./errors/errors_reducer";
import sessionReducer from "./session/session_reducer";

const rootReducer = combineReducers({
  entities: entitiesReducer,
  errors: errorsReducer,
  session: sessionReducer,
});

export default rootReducer;
