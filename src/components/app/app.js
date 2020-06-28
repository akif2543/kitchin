import React from "react";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";

import Splash from "../splash/splash";
import Home from "../feed/home";

const App = (props) => (
  <div>
    <AuthRoute exact path="/" component={Splash} />
    <ProtectedRoute exact path="/feed" component={Home} />
  </div>
);

export default App;
