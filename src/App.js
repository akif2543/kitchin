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
        header="Kitchin"
        lead="Meet. Cook. Share authentic cooking experience."
        info="Find adventures nearby and access unique cuisines, techniques, and experiences around the world."
        buttonLabel="Sign Up"
      />
      <Showcase />
      <Testimonials />
    </div>
  );
}

export default App;
