import React from "react";
import { AuthRoute } from "../../util/route_util";

import Splash from "../splash/splash";
import Navbar from "../navbar/navbar";

const App = (props) => (
  <div>
    <Navbar />
    {/* <AuthRoute exact path="/" component={Splash} /> */}
  </div>
);

export default App;
