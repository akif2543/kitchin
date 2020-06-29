import React from "react";
import { AuthRoute, ProtectedRoute } from "../../util/route_util";

import Navbar from "../navbar/navbar";
import Footer from "../navbar/footer";
import Splash from "../splash/splash";
import Home from "../feed/home";

const App = (props) => (
  <div>
    <Navbar />
    <AuthRoute exact path="/" component={Splash} />
    <ProtectedRoute exact path="/feed" component={Home} />
    <Footer />
  </div>
);

export default App;
