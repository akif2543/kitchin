import React from "react";

import Profile from "../user/profile";
import Feed from "./feed";

const Home = () => (
  <div className="Home flex-page">
    <Profile />
    <Feed />
  </div>
);

export default Home;
