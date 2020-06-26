import React from "react";
import { Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import NavbarContainer from "../components/Navbar/NavbarContainer";
import Footer from "../Footer";

const links = [
  {
    label: "Home",
    path: "./Home",
  },
  {
    label: "About",
    path: "./About",
  },
];

const LayoutRoute = ({ path, component, exact }) => {
  return (
    <div>
      <NavbarContainer links={links} />
      <Route path={path} exact={exact} component={component} />
      <Footer links={links} />
    </div>
  );
};

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <LayoutRoute
    path={path}
    exact={exact}
    render={(props) =>
      !loggedIn ? <Component {...props} /> : <Redirect to="/" />
    }
  />
);

const Protected = ({ component: Component, loggedIn, ...rest }) => (
  <LayoutRoute
    {...rest}
    render={(props) =>
      loggedIn ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

const mSTP = (state) => ({
  loggedIn: Boolean(state.session.user),
});

export const AuthRoute = withRouter(connect(mSTP)(Auth));
export const ProtectedRoute = withRouter(connect(mSTP)(Protected));
