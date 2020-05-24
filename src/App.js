import React from "react";

import Jumbotron from "./Jumbotron";
import Showcase from "./Showcase";
import Testimonials from "./Testimonials";

const App = (props) => (
  <div className="App">
    <div className="landing">
      <Jumbotron
        header="Kitchin"
        lead="Meet. Cook. Share an authentic cooking experience."
        info="Find adventures nearby and encounter unique cuisines, techniques, and cultures from around the world."
        buttonLabel="Sign Up"
      />
      <Showcase />
      <Testimonials />
    </div>
  </div>
);

export default App;
