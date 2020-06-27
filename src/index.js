import React from "react";
import ReactDOM from "react-dom";
import JwtDecode from "jwt-decode";

import "./stylesheets/index.scss";
import "./icons/fontawesome";

import UserAPI from "./api/UserAPI";
import configureStore from "./store/store";
import Root from "./components/app/root";

// import * as serviceWorker from "./serviceWorker";

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (localStorage.jwt) {
    UserAPI.setAuthToken(localStorage.jwt);
    const user = JwtDecode(localStorage.jwt);
    const preloadedState = {
      entities: { users: { [user.id]: user } },
      session: { id: user.id },
    };
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
