import React from "react";
import { AuthRoute } from "../../util/route_util";

import Splash from "../splash/splash";

const App = (props) => (
  <div>
    <AuthRoute exact path="/" component={Splash} />
  </div>
);

export default App;
