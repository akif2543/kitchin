import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./logo.svg";
import Jumbotron from "./Jumbotron";
import Showcase from "./Showcase";
import Testimonials from "./Testimonials";
import AppContext from "./AppContext";

function App() {
  const [globalState, setGlobalState] = useContext(AppContext);

  return (
    <div className="App" id="app">
      <Jumbotron
        header="Header TK"
        lead="Lead TK"
        info="Text TK"
        buttonLabel="Sign Up"
      />
      <Showcase />
      <Testimonials />
    </div>
  );
}

export default App;
