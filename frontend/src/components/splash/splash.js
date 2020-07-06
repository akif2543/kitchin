import React from "react";

import Jumbotron from "./jumbotron";
import Showcase from "./showcase";
import Testimonials from "./testimonials";

const Splash = (props) => (
  <div className="splash">
    <Jumbotron />
    <Showcase />
    <Testimonials />
  </div>
);

export default Splash;
