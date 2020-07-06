import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import logger from "redux-logger";
// import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers/root_reducer";

// let configureStore;

// if (process.env.NODE_ENV !== "production") {
//   configureStore = (preloadedState) =>
//     createStore(
//       rootReducer,
//       preloadedState,
//       composeWithDevTools(applyMiddleware(thunk, logger))
//     );
// } else {
const configureStore = (preloadedState) =>
  createStore(rootReducer, preloadedState, applyMiddleware(thunk));
// }

export default configureStore;
