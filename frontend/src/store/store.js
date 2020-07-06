import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import rootReducer from "../reducers/root_reducer";

let configureStore;

if (process.env.NODE_ENV !== "production") {
  import logger from "redux-logger";
  import { composeWithDevTools } from "redux-devtools-extension";

  configureStore = (preloadedState) =>
    createStore(
      rootReducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(thunk, logger))
    );
} else {
  configureStore = (preloadedState) =>
    createStore(rootReducer, preloadedState, applyMiddleware(thunk));
}

const configureStore = (preloadedState) =>
  createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk, logger))
  );

export default configureStore;
