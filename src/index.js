import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import "./icons/fontawesome";

import configureStore from "./store/store";
// import * as serviceWorker from "./serviceWorker";
import UserAPI from "./api/UserAPI";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwt) {
    UserAPI.setAuthToken(localStorage.jwt);
    const user = jwtDecode(localStorage.jwt);
    const preloadedState = { session: { user: user } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, document.getElementById("root"));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
